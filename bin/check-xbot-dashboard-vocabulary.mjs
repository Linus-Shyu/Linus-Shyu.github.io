#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dashboards = ["xbot-dashboard", "docs/xbot-dashboard"];

function fail(message, details = "") {
  console.error(`X bot dashboard vocabulary check failed: ${message}`);
  if (details) console.error(details);
  process.exit(1);
}

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

for (const dir of dashboards) {
  const html = read(`${dir}/index.html`);
  const script = read(`${dir}/script.js`);
  const visible = `${html}\n${script}`;
  for (const term of [
    "Growth Trend",
    "Posted Content",
    "AI Advice",
    "Copy-paste drafts",
    "Cost Guard",
    "Auto update",
    "Linus Shyu",
    "增长趋势",
    "已发内容",
    "AI 建议",
    "自动更新",
  ]) {
    if (!visible.includes(term)) fail(`${dir} is missing required user-facing growth vocabulary.`, term);
  }
  for (const unsafe of [/rate[-_ ]?limit bypass/i, /auto[-_ ]?reply publish/i, /scraping bot/i]) {
    if (unsafe.test(visible)) fail(`${dir} contains unsafe automation wording.`, String(unsafe));
  }
}

console.log("X bot dashboard vocabulary check passed.");
