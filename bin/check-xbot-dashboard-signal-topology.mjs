#!/usr/bin/env node

// Signal topology for panel.json v2: chart arrays stay bounded (14 days),
// spend values are non-negative, and budgets are numeric.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dashboards = ["xbot-dashboard", "docs/xbot-dashboard"];

function fail(message, details = "") {
  console.error(`X bot dashboard signal topology check failed: ${message}`);
  if (details) console.error(details);
  process.exit(1);
}

function readJson(file) {
  try {
    return JSON.parse(fs.readFileSync(path.join(root, file), "utf8"));
  } catch (error) {
    fail(`${file} is not valid JSON.`, String(error));
  }
}

const number = (value) => (Number.isFinite(Number(value)) ? Number(value) : NaN);

for (const dir of dashboards) {
  const data = readJson(`${dir}/panel.json`);
  const charts = data?.charts;
  if (!charts) fail(`${dir}/panel.json is missing charts block.`);
  if (!Array.isArray(charts.postsDaily) || charts.postsDaily.length > 14) {
    fail(`${dir}/panel.json charts.postsDaily must be an array of at most 14.`);
  }
  for (const point of charts.postsDaily) {
    if (!point?.day || !Number.isFinite(number(point.posts)) || number(point.posts) < 0) {
      fail(`${dir}/panel.json postsDaily entries need day + non-negative posts.`, JSON.stringify(point));
    }
  }
  if (!Array.isArray(charts.spendDaily) || charts.spendDaily.length > 14) {
    fail(`${dir}/panel.json charts.spendDaily must be an array of at most 14.`);
  }
  for (const point of charts.spendDaily) {
    if (
      !point?.day ||
      !Number.isFinite(number(point.xApiUsd)) || number(point.xApiUsd) < 0 ||
      !Number.isFinite(number(point.llmUsd)) || number(point.llmUsd) < 0
    ) {
      fail(`${dir}/panel.json spendDaily entries need day + non-negative spend.`, JSON.stringify(point));
    }
  }
  const budget = data.budget;
  if (!budget) fail(`${dir}/panel.json is missing budget block.`);
  if (!Number.isFinite(number(budget.xApi?.budgetUsd))) fail(`${dir}/panel.json budget.xApi.budgetUsd must be numeric.`);
  if (!Number.isFinite(number(budget.llm?.budgetUsd))) fail(`${dir}/panel.json budget.llm.budgetUsd must be numeric.`);
}

console.log("X bot dashboard signal topology check passed.");
