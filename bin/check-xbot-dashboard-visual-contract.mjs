#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dashboards = ["xbot-dashboard", "docs/xbot-dashboard"];

function fail(message, details = "") {
  console.error(`X bot dashboard visual contract check failed: ${message}`);
  if (details) console.error(details);
  process.exit(1);
}

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

for (const dir of dashboards) {
  const html = read(`${dir}/index.html`);
  const css = read(`${dir}/styles.css`);
  const script = read(`${dir}/script.js`);
  for (const id of [
    "metric-followers",
    "reach-chart",
    "cost-chart",
    "post-list",
    "draft-list",
    "advice-list",
    "endpoint-list",
  ]) {
    if (!html.includes(`id="${id}"`)) fail(`${dir}/index.html is missing visual surface.`, id);
  }
  for (const selector of [
    ".hero-card",
    ".hero-metrics",
    ".trend-grid",
    ".post-card",
    ".draft-card",
    ".advice-card",
    ".cost-ring",
    "@media (max-width: 720px)",
  ]) {
    if (!css.includes(selector)) fail(`${dir}/styles.css is missing responsive visual selector.`, selector);
  }
  for (const token of [
    "fetch(`./data.json?ts=${Date.now()}`",
    "window.setInterval(() => loadDashboardData({ silent: true }), 60000)",
    "renderLineChart",
    "renderPosts",
    "renderAdvice",
    "renderCost",
  ]) {
    if (!script.includes(token)) fail(`${dir}/script.js is missing live rendering contract.`, token);
  }
}

console.log("X bot dashboard visual contract check passed.");
