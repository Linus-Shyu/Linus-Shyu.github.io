#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dashboards = ["xbot-dashboard", "docs/xbot-dashboard"];
const darkMarker = "Rail harmonizer terminal pass v13: final sidebar colors for both light and dark modes.";
const lightMarker = "Main console sidebar lock v18: keep the light UI rail inside the same dark command surface.";
const requiredCssVersion = "20260709-identity-firewall-v1";
const darkSelector = "html[data-theme][data-theme] body > div.ops-shell.ops-shell > aside.side-rail.side-rail";
const lightSelector = 'html[data-theme="light"][data-theme][data-theme][data-theme][data-theme] body > div.ops-shell.ops-shell.ops-shell.ops-shell.ops-shell > aside.side-rail.side-rail.side-rail.side-rail.side-rail';

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
  const { markerIndex: darkIndex, css: darkCssFromMarker } = blockFromMarker(css, cssFile, darkMarker);
  const { markerIndex: lightIndex } = blockFromMarker(css, cssFile, lightMarker);
  const darkCss = lightIndex > darkIndex ? css.slice(darkIndex, lightIndex) : css.slice(darkIndex);
  const nextLightBlockIndex = css.indexOf("\n/*", lightIndex + lightMarker.length);
  const lightCss = css.slice(lightIndex, nextLightBlockIndex === -1 ? css.length : nextLightBlockIndex);
  const darkVariables = variablesFrom(darkCssFromMarker, "rail-final");
  const lightVariables = variablesFrom(lightCss, "rail-light");

  if (!html.includes(requiredCssVersion)) {
    fail(`${htmlFile} does not reference the latest rail stylesheet cache key.`, requiredCssVersion);
  }
  if (css.includes("*** End of File")) {
    fail(`${cssFile} contains a patch marker literal.`);
  }
  assertIncludes(cssFile, darkCss, darkSelector, "the dark-mode rail selector");
  assertIncludes(cssFile, darkCss, "color-scheme: dark !important;", "the dark rail color scheme");
  assertIncludes(cssFile, darkCss, "background-color: var(--rail-final-bg) !important;", "the dark rail background");
  assertIncludes(cssFile, css, "grid-template-columns: var(--rail-frame-width) minmax(0, 1fr) !important;", "the desktop rail column");
  assertIncludes(cssFile, css, "width: var(--rail-frame-width, 236px) !important;", "the readable rail width");
  assertIncludes(cssFile, css, "font-size: 13px !important;", "the readable rail labels");

  assertIncludes(cssFile, lightCss, lightSelector, "the light-mode rail selector");
  assertIncludes(cssFile, lightCss, "color-scheme: dark !important;", "the light rail color scheme");
  assertIncludes(cssFile, lightCss, "background-color: var(--rail-light-bg) !important;", "the light rail surface");
  assertIncludes(cssFile, lightCss, "background-color: var(--rail-light-panel) !important;", "the light rail card surface");
  assertIncludes(cssFile, lightCss, "background-color: var(--rail-light-panel-2) !important;", "the light active nav fill");
  assertIncludes(cssFile, lightCss, "text-shadow: 0 1px 16px rgba(0, 0, 0, 0.34) !important;", "the light rail text shadow");
  assertIncludes(cssFile, lightCss, "body > div.ops-shell.ops-shell.ops-shell.ops-shell.ops-shell", "the high-specificity light shell selector");
  assertIncludes(cssFile, lightCss, "aside.side-rail.side-rail.side-rail.side-rail.side-rail", "the high-specificity light rail selector");

  assertExpectedVariables(
    cssFile,
    darkVariables,
    {
      bg: "#0b111b",
      "bg-2": "#111827",
      text: "#f9fafb",
      body: "#d8e2f0",
      muted: "#a8b5c7",
      accent: "#f59e0b",
      ok: "#7dd36f",
    },
    "dark rail",
  );

  assertExpectedVariables(
    cssFile,
    lightVariables,
    {
      bg: "#0b111b",
      text: "#f9fafb",
      body: "#d8e2f0",
      muted: "#a8b5c7",
      accent: "#f59e0b",
      ok: "#7dd36f",
    },
    "light rail",
  );

  assertContrast(cssFile, darkVariables, "text", "bg", 12);
  assertContrast(cssFile, darkVariables, "body", "bg", 10);
  assertContrast(cssFile, darkVariables, "muted", "bg", 6);
  assertContrast(cssFile, lightVariables, "text", "bg", 12);
  assertContrast(cssFile, lightVariables, "body", "bg", 10);
  assertContrast(cssFile, lightVariables, "muted", "bg", 6);
}

console.log("X bot dashboard rail contrast check passed.");
