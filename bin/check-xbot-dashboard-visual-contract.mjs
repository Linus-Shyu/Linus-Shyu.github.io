#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dashboards = ["xbot-dashboard", "docs/xbot-dashboard"];
const polishMarker = "Final NOC polish layer";

function fail(message, details = "") {
  console.error(`X bot dashboard visual contract check failed: ${message}`);
  if (details) console.error(details);
  process.exit(1);
}

function readRelative(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function finalPolishCss(css, file) {
  const index = css.indexOf(polishMarker);
  if (index === -1) fail(`${file} is missing the final NOC polish layer.`);
  return css.slice(index);
}

function cssVariable(css, name) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = css.match(new RegExp(`${escaped}:\\s*([^;]+);`, "i"));
  return match?.[1]?.trim().toLowerCase() || null;
}

function countMatches(text, re) {
  return [...text.matchAll(re)].length;
}

for (const dir of dashboards) {
  const cssFile = `${dir}/styles.css`;
  const css = readRelative(cssFile);
  const polish = finalPolishCss(css, cssFile);
  const lowerPolish = polish.toLowerCase();

  const requiredVariables = {
    "--neon-cyan": "#00f0ff",
    "--neon-green": "#00ff66",
    "--neon-magenta": "#ff007a",
    "--bg": "#0b0f19",
    "--surface": "#111827",
  };

  for (const [name, expected] of Object.entries(requiredVariables)) {
    const actual = cssVariable(polish, name);
    if (actual !== expected) {
      fail(`${cssFile} ${name} drifted from the CODEX visual contract.`, `expected ${expected}, got ${actual || "<missing>"}`);
    }
  }

  const staleValues = ["#00d9ff", "#6ee771", "#ff3d9a", "0, 217, 255", "110, 231, 113", "255, 61, 154"];
  const stale = staleValues.filter((value) => lowerPolish.includes(value));
  if (stale.length) {
    fail(`${cssFile} final polish layer still contains stale pre-contract neon values.`, stale.join(", "));
  }

  const monoUses = countMatches(css, /font-family:\s*var\(--(?:mono|code-font)\)/g);
  if (monoUses < 140) {
    fail(`${cssFile} does not use monospace telemetry typography densely enough.`, `found ${monoUses}, expected at least 140`);
  }

  const microRadii = countMatches(css, /border-radius:\s*6px\b/g);
  if (microRadii < 90) {
    fail(`${cssFile} does not preserve dense 6px micro-rounding.`, `found ${microRadii}, expected at least 90`);
  }

  for (const token of ["#00f0ff", "#00ff66", "#ff007a"]) {
    if (!lowerPolish.includes(token)) {
      fail(`${cssFile} final polish layer is missing required neon trigger ${token}.`);
    }
  }

  const requiredPanelClasses = [
    ".topbar",
    ".grafana-toolbar",
    ".gauge-card",
    ".monitor-panel",
    ".runlog-panel",
    ".panel",
  ];
  const radiusBlock = polish.match(/\.topbar,[\s\S]*?border-radius:\s*6px;/)?.[0] || "";
  const missingPanels = requiredPanelClasses.filter((selector) => !radiusBlock.includes(selector));
  if (missingPanels.length) {
    fail(`${cssFile} shared 6px panel radius block is missing required command-center surfaces.`, missingPanels.join(", "));
  }
}

console.log("X bot dashboard visual contract check passed.");
