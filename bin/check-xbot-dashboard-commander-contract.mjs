#!/usr/bin/env node

// Commander contract for panel.json v2: telemetry block must be honest about
// freshness (cached/live + valid timestamps).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dashboards = ["xbot-dashboard", "docs/xbot-dashboard"];

function fail(message, details = "") {
  console.error(`X bot dashboard commander contract check failed: ${message}`);
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

for (const dir of dashboards) {
  const data = readJson(`${dir}/panel.json`);
  if (!data || data.version !== 2) fail(`${dir}/panel.json must declare version 2.`, String(data?.version));
  if (!Number.isFinite(Date.parse(data.updatedAt || ""))) {
    fail(`${dir}/panel.json updatedAt is missing or invalid.`, data?.updatedAt || "<missing>");
  }
  const telemetry = data.telemetry;
  if (!telemetry) fail(`${dir}/panel.json is missing telemetry block.`);
  if (!["cached", "live"].includes(telemetry.source)) {
    fail(`${dir}/panel.json telemetry.source must be cached or live.`, String(telemetry.source));
  }
  if (telemetry.dataAgeMinutes != null && !Number.isFinite(Number(telemetry.dataAgeMinutes))) {
    fail(`${dir}/panel.json telemetry.dataAgeMinutes must be numeric or null.`);
  }
  if (data.posting != null && !Number.isFinite(Date.parse(data.posting.at || ""))) {
    fail(`${dir}/panel.json posting.at is invalid.`, data.posting?.at || "<missing>");
  }
}

console.log("X bot dashboard commander contract check passed.");
