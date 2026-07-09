#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dashboards = ["xbot-dashboard", "docs/xbot-dashboard"];
const finalMarker = "Highest-specificity rail override";
const finalGutterMarker = "Highest-specificity rail override v6 final pass: keep the light UI sidebar in the command surface.";
const priorRailMarker = "Highest-specificity rail override v2: keep the white UI rail aligned with the main console.";
const finalSelector = "html[data-theme][data-theme] body > div.ops-shell.ops-shell > aside.side-rail.side-rail";
const finalLightGutterSelector = 'html[data-theme="light"][data-theme] body > div.ops-shell.ops-shell';
const requiredCssVersion = "20260709-expo-noc-v7";

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

function assertIncludes(file, value, snippet, label) {
  if (!value.includes(snippet)) {
    fail(`${file} is missing ${label}.`, snippet);
  }
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
  const finalCss = css.slice(markerIndex);
  const priorRailIndex = css.lastIndexOf(priorRailMarker);
  const finalGutterIndex = css.lastIndexOf(finalGutterMarker);

  if (!html.includes(requiredCssVersion)) {
    fail(`${htmlFile} does not reference the latest rail-contrast stylesheet cache key.`, requiredCssVersion);
  }
  if (css.includes("*** End of File")) {
    fail(`${cssFile} contains a patch marker literal.`);
  }
  if (priorRailIndex === -1) {
    fail(`${cssFile} is missing the prior rail override marker.`, priorRailMarker);
  }
  if (finalGutterIndex !== markerIndex) {
    fail(`${cssFile} final rail override must be the v6 light-sidebar guard.`, finalGutterMarker);
  }
  if (priorRailIndex > markerIndex) {
    fail(`${cssFile} has the older v2 rail override after the v4 final pass.`);
  }
  if (lightRailIndex > markerIndex) {
    fail(`${cssFile} has a light-theme rail rule after the final override.`);
  }
  assertIncludes(cssFile, finalCss, finalLightGutterSelector, "the light-mode gutter selector");
  assertIncludes(cssFile, finalCss, "--rail-frame-width: 236px;", "the desktop rail frame width");
  assertIncludes(cssFile, finalCss, "--rail-frame-gap: 12px;", "the rail frame gap");
  assertIncludes(cssFile, finalCss, "grid-template-columns: var(--rail-frame-width) minmax(0, 1fr) !important;", "the enforced desktop rail column");
  assertIncludes(cssFile, finalCss, "gap: var(--rail-frame-gap) !important;", "the enforced light-mode rail gap");
  assertIncludes(cssFile, finalCss, "width: var(--rail-frame-width, 236px) !important;", "the enforced readable rail width");
  assertIncludes(cssFile, finalCss, "font-size: 13px !important;", "the restored readable rail labels");
  assertIncludes(cssFile, finalCss, "color-scheme: dark !important;", "the forced dark rail color scheme");
  assertIncludes(cssFile, finalCss, "background-color: var(--rail-final-bg) !important;", "the forced dark rail background");
  assertIncludes(cssFile, finalCss, "background-color: rgba(15, 23, 42, 0.88) !important;", "the dark light-mode nav button fill");
  assertIncludes(cssFile, finalCss, "grid-template-columns: auto minmax(0, 1fr) auto !important;", "the restored readable rack node layout");
  assertIncludes(cssFile, finalCss, "display: block !important;", "the restored sidebar text labels");
  assertIncludes(
    cssFile,
    finalCss,
    "rgba(11, 17, 27, 0.995) calc(var(--rail-frame-width) + var(--rail-frame-gap) + 28px)",
    "the dark light-mode gutter fill",
  );
  assertIncludes(cssFile, finalCss, "@media (min-width: 1081px) and (max-width: 1320px)", "the compact desktop rail breakpoint");
  assertIncludes(cssFile, finalCss, "--rail-frame-width: 212px;", "the compact desktop rail width");
  assertIncludes(cssFile, finalCss, "@media (max-width: 1080px)", "the mobile rail breakpoint");
  assertIncludes(cssFile, finalCss, "background: transparent !important;", "the mobile rail gutter reset");

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
