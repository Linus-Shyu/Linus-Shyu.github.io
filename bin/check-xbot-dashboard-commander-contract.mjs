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

function readRelative(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function requireIncludes(file, text, snippets) {
  for (const snippet of snippets) {
    if (!text.includes(snippet)) {
      fail(`${file} is missing commander contract token.`, snippet);
    }
  }
}

for (const dir of dashboards) {
  const scriptFile = `${dir}/script.js`;
  const script = readRelative(scriptFile);

  requireIncludes(scriptFile, script, [
    "function nextWindowCommanderData()",
    "incoming?.window || incoming?.activeWindow",
    "function commanderWindow(commander)",
    "commander?.window || commander?.activeWindow",
    "const windowLabel = raw.windowLabel || raw.label || raw.window || \"-\";",
    "const window = commanderWindow(commander);",
    "renderWindowCommandStrip();",
    "renderNextWindowCommander();",
    "zeroExtraXReads: true",
    "readGate: \"cached_only\"",
  ]);

  const commanderWindowUses = [...script.matchAll(/commanderWindow\(commander\)/g)].length;
  if (commanderWindowUses < 2) {
    fail(`${scriptFile} must use commanderWindow() in both commander surfaces.`, `found ${commanderWindowUses}`);
  }

  if (/commander\.activeWindow \|\| \{\}/.test(script)) {
    fail(`${scriptFile} still reads commander.activeWindow directly in a rendered surface.`);
  }

  const commanderStart = script.indexOf("function nextWindowCommanderData()");
  const commanderEnd = script.indexOf("function renderGrowthOpportunityScorer()", commanderStart);
  const commanderSurface = commanderStart >= 0 && commanderEnd > commanderStart
    ? script.slice(commanderStart, commanderEnd)
    : script;
  if (/(enable|allow|publish|send|post).{0,80}auto[-_ ]?repl(?:y|ies)/i.test(commanderSurface) ||
      /(bypass|evade).{0,40}rate[-_ ]?limit/i.test(commanderSurface)) {
    fail(`${scriptFile} commander surface contains unsafe automation wording.`);
  }
}

console.log("X bot dashboard commander contract check passed.");
