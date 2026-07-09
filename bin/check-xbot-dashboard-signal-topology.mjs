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

function readRelative(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function assertIncludes(file, text, snippet) {
  if (!text.includes(snippet)) {
    fail(`${file} is missing required signal topology token.`, snippet);
  }
}

for (const dir of dashboards) {
  const htmlFile = `${dir}/index.html`;
  const scriptFile = `${dir}/script.js`;
  const cssFile = `${dir}/styles.css`;
  const html = readRelative(htmlFile);
  const script = readRelative(scriptFile);
  const css = readRelative(cssFile);
  const topologyCss = css.slice(css.indexOf("Signal topology v3 final geometry"));

  assertIncludes(htmlFile, html, 'data-signal-node="x">X_ROUTE</button>');
  assertIncludes(scriptFile, script, 'const SIGNAL_NODE_ORDER = ["rss", "score", "draft", "x", "learn"];');
  assertIncludes(scriptFile, script, "function signalMapNodes(map = {}, derived = buildDerivedSignalMap())");
  assertIncludes(scriptFile, script, "const orderedNodeIds = [");
  assertIncludes(scriptFile, script, "...SIGNAL_NODE_ORDER,");
  assertIncludes(scriptFile, script, "label: \"X_ROUTE\"");
  assertIncludes(scriptFile, script, "0 X read ops");

  if (!topologyCss) {
    fail(`${cssFile} is missing the final signal topology geometry layer.`);
  }
  assertIncludes(cssFile, topologyCss, "--signal-node-route-width: 186px;");
  assertIncludes(cssFile, topologyCss, "width: var(--signal-node-route-width) !important;");
  assertIncludes(cssFile, topologyCss, "min-height: 460px !important;");
  assertIncludes(cssFile, topologyCss, "0 0 10px rgba(0, 240, 255, 0.1)");
  assertIncludes(cssFile, topologyCss, "0 0 10px rgba(0, 255, 102, 0.12)");
  assertIncludes(cssFile, topologyCss, "font-size: 13px !important;");

  const lonelyXLabels = [...html.matchAll(/data-signal-node="x">([^<]+)<\/button>/g)]
    .map((match) => match[1].trim())
    .filter((label) => label === "X");
  if (lonelyXLabels.length) {
    fail(`${htmlFile} has a lone X topology label instead of X_ROUTE.`);
  }
}

console.log("X bot dashboard signal topology check passed.");
