#!/usr/bin/env node

// Data consistency for panel.json v2: payload stays lean and numbers agree
// across blocks (daily sums vs monthly totals, rss counters, task caps).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dashboards = ["xbot-dashboard", "docs/xbot-dashboard"];
const MAX_PANEL_BYTES = 300 * 1024;

function fail(message, details = "") {
  console.error(`X bot dashboard data consistency check failed: ${message}`);
  if (details) console.error(details);
  process.exit(1);
}

function readJson(file) {
  const filePath = path.join(root, file);
  const size = fs.statSync(filePath).size;
  if (size > MAX_PANEL_BYTES) {
    fail(`${file} is ${size} bytes; the v2 panel contract must stay under ${MAX_PANEL_BYTES} bytes.`);
  }
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    fail(`${file} is not valid JSON.`, String(error));
  }
}

const number = (value) => (Number.isFinite(Number(value)) ? Number(value) : NaN);

for (const dir of dashboards) {
  const file = `${dir}/panel.json`;
  const data = readJson(file);

  const xSpent = number(data?.budget?.xApi?.spentUsd);
  const llmSpent = number(data?.budget?.llm?.spentUsd);
  if (!Number.isFinite(xSpent) || xSpent < 0) fail(`${file} budget.xApi.spentUsd must be non-negative.`);
  if (!Number.isFinite(llmSpent) || llmSpent < 0) fail(`${file} budget.llm.spentUsd must be non-negative.`);

  const spendDaily = data?.charts?.spendDaily || [];
  const xDaily = spendDaily.reduce((sum, point) => sum + number(point?.xApiUsd || 0), 0);
  const llmDaily = spendDaily.reduce((sum, point) => sum + number(point?.llmUsd || 0), 0);
  if (Math.abs(xDaily - xSpent) > 0.02) {
    fail(`${file} daily X API spend (${xDaily.toFixed(3)}) disagrees with monthly total (${xSpent.toFixed(3)}).`);
  }
  if (Math.abs(llmDaily - llmSpent) > 0.02) {
    fail(`${file} daily LLM spend (${llmDaily.toFixed(3)}) disagrees with monthly total (${llmSpent.toFixed(3)}).`);
  }

  const postsDaily = data?.charts?.postsDaily || [];
  const postSum = postsDaily.reduce((sum, point) => sum + number(point?.posts || 0), 0);
  const tracked = number(data?.account?.trackedPosts);
  if (Number.isFinite(tracked) && postSum > tracked) {
    fail(`${file} daily post sum (${postSum}) exceeds tracked posts (${tracked}).`);
  }

  const rss = data?.health?.rss;
  if (!rss || !Number.isFinite(number(rss.ok)) || !Number.isFinite(number(rss.total))) {
    fail(`${file} health.rss needs numeric ok/total.`);
  }
  if (number(rss.ok) > number(rss.total)) fail(`${file} health.rss.ok cannot exceed total.`);

  if (data.tasks != null && (!Array.isArray(data.tasks) || data.tasks.length > 5)) {
    fail(`${file} tasks must be an array of at most 5.`);
  }

  if (data.promo != null) {
    for (const key of ["promoAvg", "organicAvg", "promoSamples", "organicSamples"]) {
      if (!Number.isFinite(number(data.promo[key]))) fail(`${file} promo.${key} must be numeric.`);
    }
  }
}

console.log("X bot dashboard data consistency check passed.");
