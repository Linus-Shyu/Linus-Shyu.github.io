#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dashboards = ["xbot-dashboard", "docs/xbot-dashboard"];
const railMarker = "Sidebar command-surface readability seal v16.";
const requiredCssVersion = "20260709-x-official-v1";
const darkSelector = "html[data-theme][data-theme] body > div.ops-shell.ops-shell > aside.side-rail.side-rail";
const lightSelector = 'html[data-theme="light"][data-theme] body > div.ops-shell.ops-shell > aside.side-rail.side-rail';

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

function blockFromMarker(css, file, marker) {
  const markerIndex = css.lastIndexOf(marker);
  if (markerIndex === -1) fail(`${file} is missing rail marker.`, marker);
  return { markerIndex, css: css.slice(markerIndex) };
}

function variablesFrom(css, prefix) {
  const variables = {};
  const matcher = new RegExp(`--${prefix}-([a-z0-9-]+):\\s*([^;!]+)\\s*!important\\s*;`, "gi");
  for (const match of css.matchAll(matcher)) {
    variables[match[1]] = match[2].trim();
  }
  return variables;
}

function assertIncludes(file, value, snippet, label) {
  if (!value.includes(snippet)) {
    fail(`${file} is missing ${label}.`, snippet);
  }
}

function assertNotIncludes(file, value, snippet, label) {
  if (value.includes(snippet)) {
    fail(`${file} still contains ${label}.`, snippet);
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

function assertExpectedVariables(file, variables, expected, label) {
  for (const [key, value] of Object.entries(expected)) {
    if (variables[key]?.toLowerCase() !== value.toLowerCase()) {
      fail(`${file} ${label} variable --${key} drifted.`, `expected ${value}, got ${variables[key] || "<missing>"}`);
    }
  }
}

for (const dir of dashboards) {
  const cssFile = `${dir}/styles.css`;
  const htmlFile = `${dir}/index.html`;
  const css = readRelative(cssFile);
  const html = readRelative(htmlFile);
  const { css: railCss } = blockFromMarker(css, cssFile, railMarker);
  const railVariables = variablesFrom(railCss, "rail-final");

  if (!html.includes(requiredCssVersion)) {
    fail(`${htmlFile} does not reference the latest rail stylesheet cache key.`, requiredCssVersion);
  }
  if (css.includes("*** End of File")) {
    fail(`${cssFile} contains a patch marker literal.`);
  }
  assertIncludes(cssFile, railCss, darkSelector, "the dark-mode rail selector");
  assertIncludes(cssFile, railCss, lightSelector, "the light-mode rail selector");
  assertIncludes(cssFile, railCss, "color-scheme: dark !important;", "the rail color scheme");
  assertIncludes(cssFile, railCss, "background-color: var(--rail-final-bg) !important;", "the rail background");
  assertIncludes(cssFile, railCss, "background-color: var(--rail-final-panel) !important;", "the rail card surface");
  assertIncludes(cssFile, railCss, "background-color: var(--rail-final-panel-2) !important;", "the active rail nav fill");
  assertIncludes(cssFile, railCss, "text-shadow: 0 1px 16px rgba(0, 0, 0, 0.34) !important;", "the readable rail text shadow");
  assertIncludes(cssFile, css, "grid-template-columns: var(--rail-frame-width) minmax(0, 1fr) !important;", "the desktop rail column");
  assertIncludes(cssFile, css, "width: var(--rail-frame-width, 236px) !important;", "the readable rail width");
  assertIncludes(cssFile, css, "font-size: 13px !important;", "the readable rail labels");

  assertExpectedVariables(
    cssFile,
    railVariables,
    {
      bg: "#090e16",
      "bg-2": "#101823",
      panel: "#121b28",
      "panel-2": "#182536",
      text: "#f8fafc",
      body: "#d8e2f0",
      muted: "#a8b5c7",
      accent: "#f59e0b",
      ok: "#7dd36f",
    },
    "rail",
  );

  assertContrast(cssFile, railVariables, "text", "bg", 12);
  assertContrast(cssFile, railVariables, "body", "bg", 10);
  assertContrast(cssFile, railVariables, "muted", "bg", 6);
  assertContrast(cssFile, railVariables, "text", "panel", 10);
  assertContrast(cssFile, railVariables, "body", "panel", 8);
}

console.log("X bot dashboard rail contrast check passed.");
