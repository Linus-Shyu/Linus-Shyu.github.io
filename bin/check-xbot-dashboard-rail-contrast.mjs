#!/usr/bin/env node

// Contrast gate for the lean single-file panel: reads the inline <style> in
// index.html and enforces WCAG AA (4.5:1) for text/background pairs.
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
  const fg = luminance(foreground);
  const bg = luminance(background);
  const lighter = Math.max(fg, bg);
  const darker = Math.min(fg, bg);
  return (lighter + 0.05) / (darker + 0.05);
}

function themeVariables(style, selector) {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`${escaped}\\s*\\{([^}]*)\\}`, "i");
  const match = style.match(pattern);
  if (!match) return null;
  const variables = {};
  for (const line of match[1].split(";")) {
    const pair = line.match(/--([\w-]+)\s*:\s*([#\w(),\s.%-]+)/);
    if (pair) variables[pair[1].trim()] = pair[2].trim();
  }
  return variables;
}

for (const dir of dashboards) {
  const html = read(`${dir}/index.html`);
  const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/i);
  if (!styleMatch) fail(`${dir}/index.html has no inline <style> block.`);
  const style = styleMatch[1];

  for (const [theme, selector] of [
    ["dark", ":root"],
    ["light", 'html[data-theme="light"]'],
  ]) {
    const vars = themeVariables(style, selector);
    if (!vars) fail(`${dir} is missing ${theme} theme variables.`);
    const pairs = [
      ["ink", "bg"],
      ["muted", "panel"],
      ["ink", "panel"],
      ["accent", "panel"],
    ];
    for (const [fgName, bgName] of pairs) {
      const fg = hexToRgb(vars[fgName]);
      const bg = hexToRgb(vars[bgName]);
      if (!fg || !bg) fail(`${dir} ${theme} theme is missing --${fgName} or --${bgName}.`);
      const ratio = contrast(fg, bg);
      if (ratio < 4.5) {
        fail(
          `${dir} ${theme} theme --${fgName} on --${bgName} contrast ${ratio.toFixed(2)} is below 4.5.`,
        );
      }
    }
  }
}

console.log("X bot dashboard rail contrast check passed.");
