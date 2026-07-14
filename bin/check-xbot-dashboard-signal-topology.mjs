#!/usr/bin/env node

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

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

for (const dir of dashboards) {
  const html = read(`${dir}/index.html`);
  const script = read(`${dir}/script.js`);
  for (const section of ["overview", "trend", "posts", "advice", "drafts", "cost"]) {
    if (!html.includes(`id="${section}"`)) fail(`${dir}/index.html is missing growth topology section.`, section);
  }
  for (const token of ["renderHero", "renderCharts", "renderPosts", "renderDrafts", "renderAdvice", "renderCost"]) {
    if (!script.includes(token)) fail(`${dir}/script.js is missing growth topology renderer.`, token);
  }
}

console.log("X bot dashboard signal topology check passed.");
