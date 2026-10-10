#!/usr/bin/env node

// Vocabulary gate for the lean single-file panel: required user-facing terms
// must exist in index.html; unsafe automation wording is banned.
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
  for (const term of [
    "Growth Panel",
    "Linus Shyu",
    "自动更新",
    "auto-updates",
    "panel.json",
    "粉丝",
    "Followers",
  ]) {
    if (!html.includes(term)) fail(`${dir} is missing required user-facing growth vocabulary.`, term);
  }
  for (const unsafe of [/rate[-_ ]?limit bypass/i, /auto[-_ ]?reply publish/i, /scraping bot/i]) {
    if (unsafe.test(html)) fail(`${dir} contains unsafe automation wording.`, String(unsafe));
  }
}

console.log("X bot dashboard vocabulary check passed.");
