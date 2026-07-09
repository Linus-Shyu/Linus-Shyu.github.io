#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dashboards = ["xbot-dashboard", "docs/xbot-dashboard"];
const finalMarker = "Highest-specificity rail override";
const finalSelector = "html[data-theme][data-theme] body > div.ops-shell.ops-shell > aside.side-rail.side-rail";
const requiredCssVersion = "20260709-command-rail-v3";

function fail(message, details = "") {
  console.error(`X bot dashboard rail contrast check failed: ${message}`);
  if (details) console.error(details);
  process.exit(1);
}

function readRelative(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function hexToRgb(value) {
  const normalized = String(value || "").trim().replace(/^#/, "");
  if (!/^[0-9a-f]{6}$/i.test(normalized)) return null;
  return {
    r: Number.parseInt(normalized.slice(0, 2), 16),
    g: Number.parseInt(normalized.slice(2, 4), 16),
    b: Number.parseInt(normalized.slice(4, 6), 16),
  };
}

function relativeLuminance({ r, g, b }) {
  const channel = (value) => {
    const normalized = value / 255;
    return normalized <= 0.03928
      ? normalized / 12.92
      : ((normalized + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

function contrastRatio(foreground, background) {
  const front = hexToRgb(foreground);
  const back = hexToRgb(background);
  if (!front || !back) return null;
  const light = Math.max(relativeLuminance(front), relativeLuminance(back));
  const dark = Math.min(relativeLuminance(front), relativeLuminance(back));
  return (light + 0.05) / (dark + 0.05);
}

function finalRailVariables(css, file) {
  const markerIndex = css.lastIndexOf(finalMarker);
  if (markerIndex === -1) fail(`${file} is missing final rail override marker.`);
  const finalCss = css.slice(markerIndex);
  if (!finalCss.includes(finalSelector)) {
    fail(`${file} is missing the highest-specificity rail selector.`, finalSelector);
  }

  const variables = {};
  for (const match of finalCss.matchAll(/--rail-final-([a-z0-9-]+):\s*([^;!]+)\s*!important\s*;/gi)) {
    variables[match[1]] = match[2].trim();
  }
  return { variables, markerIndex };
}

function lastLightRailRuleIndex(css) {
  const matches = [...css.matchAll(/data-theme=["']light["'][^{]*\.side-rail/g)];
  return matches.length ? matches[matches.length - 1].index : -1;
}

function assertContrast(file, variables, foregroundKey, backgroundKey, minimum) {
  const ratio = contrastRatio(variables[foregroundKey], variables[backgroundKey]);
  if (ratio === null) {
    fail(`${file} cannot parse rail contrast pair ${foregroundKey}/${backgroundKey}.`, JSON.stringify(variables, null, 2));
  }
  if (ratio < minimum) {
    fail(
      `${file} rail contrast ${foregroundKey}/${backgroundKey} is ${ratio.toFixed(2)}, expected >= ${minimum}.`,
      `${foregroundKey}=${variables[foregroundKey]}, ${backgroundKey}=${variables[backgroundKey]}`,
    );
  }
}

for (const dir of dashboards) {
  const cssFile = `${dir}/styles.css`;
  const htmlFile = `${dir}/index.html`;
  const css = readRelative(cssFile);
  const html = readRelative(htmlFile);
  const { variables, markerIndex } = finalRailVariables(css, cssFile);
  const lightRailIndex = lastLightRailRuleIndex(css);

  if (!html.includes(requiredCssVersion)) {
    fail(`${htmlFile} does not reference the latest rail-contrast stylesheet cache key.`, requiredCssVersion);
  }
  if (lightRailIndex > markerIndex) {
    fail(`${cssFile} has a light-theme rail rule after the final override.`);
  }

  const requiredValues = {
    bg: "#0b111b",
    "bg-2": "#111827",
    text: "#f9fafb",
    body: "#d8e2f0",
    muted: "#a8b5c7",
    accent: "#f59e0b",
    ok: "#7dd36f",
  };

  for (const [key, expected] of Object.entries(requiredValues)) {
    if (variables[key]?.toLowerCase() !== expected) {
      fail(`${cssFile} rail variable --rail-final-${key} drifted.`, `expected ${expected}, got ${variables[key] || "<missing>"}`);
    }
  }

  assertContrast(cssFile, variables, "text", "bg", 12);
  assertContrast(cssFile, variables, "body", "bg", 10);
  assertContrast(cssFile, variables, "muted", "bg", 6);
}

console.log("X bot dashboard rail contrast check passed.");
