#!/usr/bin/env node

// Visual contract for the lean single-file panel: required sections/ids must
// exist, and the inline script must be syntactically valid JavaScript.
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
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
  for (const id of [
    "sync-dot",
    "banner",
    "k-followers",
    "k-baseline",
    "k-xapi",
    "k-llm",
    "lastpost",
    "bestpost",
    "formats",
    "bar-xapi",
    "bar-llm",
    "chart-posts",
    "chart-spend",
    "tasks",
    "f-updated",
  ]) {
    if (!html.includes(`id="${id}"`)) fail(`${dir} is missing element #${id}.`);
  }

  const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/i);
  if (!scriptMatch) fail(`${dir}/index.html has no inline script block.`);
  const tmpFile = path.join(root, ".tmp-panel-script-check.mjs");
  try {
    fs.writeFileSync(tmpFile, scriptMatch[1]);
    execFileSync(process.execPath, ["--check", tmpFile], { stdio: "pipe" });
  } catch (error) {
    const message = error?.stderr ? String(error.stderr) : String(error);
    fail(`${dir}/index.html inline script failed syntax check.`, message.slice(0, 500));
  } finally {
    fs.rmSync(tmpFile, { force: true });
  }
}

console.log("X bot dashboard visual contract check passed.");
