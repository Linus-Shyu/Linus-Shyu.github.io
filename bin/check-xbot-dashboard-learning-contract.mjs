#!/usr/bin/env node

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

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

for (const dir of dashboards) {
  const script = read(`${dir}/script.js`);
  const html = read(`${dir}/index.html`);
  for (const token of [
    "diagnosis",
    "opportunities",
    "drafts",
    "bestDraft",
    "renderPrimaryAdvice",
    "renderAdvice",
    "copyText",
  ]) {
    if (!script.includes(token)) fail(`${dir}/script.js lost AI advice or learning output coverage.`, token);
  }
  for (const id of ["advice", "drafts"]) {
    if (!html.includes(`id="${id}"`)) fail(`${dir}/index.html lost the AI operator section.`, id);
  }
}

console.log("X bot dashboard learning contract check passed.");
