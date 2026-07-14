#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dashboards = ["xbot-dashboard", "docs/xbot-dashboard"];

function fail(message, details = "") {
  console.error(`X bot dashboard rail contrast check failed: ${message}`);
  if (details) console.error(details);
  process.exit(1);
}

function read(file) {
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

function luminance(rgb) {
  const channel = (value) => {
    const normalized = value / 255;
    return normalized <= 0.03928
      ? normalized / 12.92
      : ((normalized + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * channel(rgb.r) + 0.7152 * channel(rgb.g) + 0.0722 * channel(rgb.b);
}

function contrast(foreground, background) {
  const fg = hexToRgb(foreground);
  const bg = hexToRgb(background);
  if (!fg || !bg) return 0;
  const a = luminance(fg);
  const b = luminance(bg);
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}

for (const dir of dashboards) {
  const css = read(`${dir}/styles.css`);
  const html = read(`${dir}/index.html`);
  for (const token of [".left-rail", ".rail-nav", ".rail-status", "data-theme-value=\"light\"", "data-theme-value=\"dark\""]) {
    const source = token.startsWith("data-") ? html : css;
    if (!source.includes(token)) fail(`${dir} is missing readable navigation contract token.`, token);
  }
  if (contrast("#f7f9f9", "#05080d") < 12) fail(`${dir} dark rail contrast is too low.`);
  if (contrast("#0f1419", "#ffffff") < 12) fail(`${dir} light rail contrast is too low.`);
}

console.log("X bot dashboard rail contrast check passed.");
