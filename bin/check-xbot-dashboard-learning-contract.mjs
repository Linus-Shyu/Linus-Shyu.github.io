#!/usr/bin/env node

// Learning contract for panel.json v2: content/account blocks stay numeric and bounded.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dashboards = ["xbot-dashboard", "docs/xbot-dashboard"];

function fail(message, details = "") {
  console.error(`X bot dashboard learning contract check failed: ${message}`);
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
  const account = data?.account;
  const content = data?.content;
  if (!account) fail(`${dir}/panel.json is missing account block.`);
  if (!Number.isFinite(number(account.baselineScore))) fail(`${dir}/panel.json account.baselineScore must be numeric.`);
  if (!Number.isFinite(number(account.measuredPosts))) fail(`${dir}/panel.json account.measuredPosts must be numeric.`);
  if (!Number.isFinite(number(account.trackedPosts))) fail(`${dir}/panel.json account.trackedPosts must be numeric.`);
  if (account.followers != null && !Number.isFinite(number(account.followers))) {
    fail(`${dir}/panel.json account.followers must be numeric or null.`);
  }
  if (!content) fail(`${dir}/panel.json is missing content block.`);
  if (!Array.isArray(content.topFormats) || content.topFormats.length > 4) {
    fail(`${dir}/panel.json content.topFormats must be an array of at most 4.`);
  }
  for (const item of content.topFormats) {
    if (!item?.id || !Number.isFinite(number(item.avgScore)) || !Number.isFinite(number(item.count))) {
      fail(`${dir}/panel.json topFormats entries need id/avgScore/count.`, JSON.stringify(item));
    }
  }
  if (!Array.isArray(content.topTags) || content.topTags.length > 5) {
    fail(`${dir}/panel.json content.topTags must be an array of at most 5.`);
  }
}

console.log("X bot dashboard learning contract check passed.");
