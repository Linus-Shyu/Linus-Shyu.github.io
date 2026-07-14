#!/usr/bin/env node

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

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

for (const dir of dashboards) {
  const script = read(`${dir}/script.js`);
  for (const token of ["routeHref", "primary-route", "actions", "opportunities"]) {
    if (!script.includes(token)) fail(`${dir}/script.js lost manual route commander coverage.`, token);
  }
  if (/(auto|automatic).{0,40}(reply|publish|send)/i.test(script)) {
    fail(`${dir}/script.js must keep X route work manual.`);
  }
}

console.log("X bot dashboard commander contract check passed.");
