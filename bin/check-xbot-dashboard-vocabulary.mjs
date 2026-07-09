#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const bannedTerms = [
  { label: "Followers", re: /\bfollowers?\b/i, use: "Ingress Node Strength / Active Conns" },
  { label: "Impressions", re: /\bimpressions?\b/i, use: "L7 Traffic Load / Total Ingestion Throughput" },
  { label: "Views", re: /\bviews\b/i, use: "L7 events / throughput" },
  { label: "Errors", re: /\berrors?\b/i, use: "HTTP Status Triage / Backend Faults" },
  { label: "Tweets", re: /\btweets?\b/i, use: "packets / dispatches" },
  { label: "Posts", re: /\bpost(?:s|ing)?\b/i, use: "packets / dispatches" },
  { label: "AI Content Status", re: /\bAI Content Status\b/i, use: "Swarm Intelligence Output / Model Inference Stream" },
];

const requiredTerms = [
  "Ingress Node Strength (Active Conns)",
  "Total Ingestion Throughput / L7 Traffic Load",
  "Swarm Intelligence Output / Model Inference Stream",
  "HTTP Status Triage (429 Rate-Limit / 503 Backend Faults)",
];

const files = [
  "xbot-dashboard/index.html",
  "xbot-dashboard/script.js",
  "xbot-dashboard/data.json",
  "docs/xbot-dashboard/index.html",
  "docs/xbot-dashboard/script.js",
  "docs/xbot-dashboard/data.json",
];

function lineNumber(text, index) {
  return text.slice(0, index).split("\n").length;
}

function stripHtmlToVisibleText(text) {
  return text
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&");
}

function extractJsStringLiterals(text) {
  const literals = [];
  const lines = text.split("\n");
  let indexBase = 0;
  for (const [lineIndex, line] of lines.entries()) {
    const isVisibleContext =
      /:\s*(["'`])/.test(line) ||
      /\b(return|nextAction|detail|reason|title|label|source|useWhen|skipWhen|guardrails|checklist)\b/.test(line);
    if (!isVisibleContext) {
      indexBase += line.length + 1;
      continue;
    }

    const re = /(["'`])((?:\\.|(?!\1).)*?)\1/g;
    let match;
    while ((match = re.exec(line))) {
      const value = match[2].replace(/\s+/g, " ").trim();
      if (!value) continue;
      literals.push({
        value,
        index: indexBase + match.index,
        line,
        lineNumber: lineIndex + 1,
        before: line.slice(0, match.index),
      });
    }
    indexBase += line.length + 1;
  }
  return literals;
}

function jsLiteralLooksVisible(literal) {
  const { value, before, line } = literal;
  if (/https?:|x\.com\/search|src=typed_query|-is:retweet/.test(value)) return false;
  if (/^[#.[{]|^data-|^aria-|^localStorage$/.test(value)) return false;
  if (/^\$?\{?[a-z][a-z0-9_.:-]*\}?$/i.test(value) && !/source\s*:/.test(before)) return false;
  if (/\b(id|routeUrl|url|href|className|selector|querySelector)\s*:?\s*$/.test(before)) return false;
  if (/\b(t|\$|escapeHtml|formatTemplate|number|formatNumber)\s*\($/.test(before.trim())) return false;
  if (/data-i18n|id=|class=/.test(line)) return false;
  return true;
}

function searchableValue(value) {
  return value
    .replace(/\$\{[^}]*\}/g, " ")
    .replace(/\{[^}]*\}/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function collectJsonStrings(value, file, pointer = "$") {
  if (typeof value === "string") {
    if (/https?:|x\.com\/search|src=typed_query|-is:retweet/.test(value)) return [];
    if (/^\d{4}-\d{2}-\d{2}T/.test(value)) return [];
    return [{ file, pointer, value }];
  }
  if (Array.isArray(value)) {
    return value.flatMap((item, index) => collectJsonStrings(item, file, `${pointer}[${index}]`));
  }
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([key, item]) => {
      if (/^(url|routeUrl|routeQuery|id|postedAt|workflowEvent)$/i.test(key)) return [];
      return collectJsonStrings(item, file, `${pointer}.${key}`);
    });
  }
  return [];
}

function findViolations(file) {
  const absolute = path.join(root, file);
  const text = fs.readFileSync(absolute, "utf8");
  const candidates = [];

  if (file.endsWith(".html")) {
    candidates.push({ value: stripHtmlToVisibleText(text), file, line: 1 });
  } else if (file.endsWith(".json")) {
    candidates.push(...collectJsonStrings(JSON.parse(text), file).map((item) => ({ ...item, line: "json" })));
  } else {
    candidates.push(
      ...extractJsStringLiterals(text)
        .filter(jsLiteralLooksVisible)
        .map((literal) => ({
          file,
          line: lineNumber(text, literal.index),
          value: literal.value,
        })),
    );
  }

  return candidates.flatMap((candidate) =>
    bannedTerms
      .filter((term) => term.re.test(searchableValue(candidate.value)))
      .map((term) => ({ ...candidate, term })),
  );
}

const violations = files.flatMap(findViolations);

if (violations.length) {
  console.error("X bot dashboard vocabulary check failed:");
  for (const item of violations) {
    const location = item.pointer ? `${item.file}:${item.pointer}` : `${item.file}:${item.line}`;
    console.error(`- ${location}: avoid "${item.term.label}", use ${item.term.use}`);
    console.error(`  ${item.value.slice(0, 180)}`);
  }
  process.exit(1);
}

for (const dir of ["xbot-dashboard", "docs/xbot-dashboard"]) {
  const visibleSource = [
    fs.readFileSync(path.join(root, dir, "index.html"), "utf8"),
    fs.readFileSync(path.join(root, dir, "script.js"), "utf8"),
    fs.readFileSync(path.join(root, dir, "data.json"), "utf8"),
  ].join("\n");
  const missingRequired = requiredTerms.filter((term) => !visibleSource.includes(term));
  if (missingRequired.length) {
    console.error("X bot dashboard vocabulary check failed:");
    console.error(`- ${dir} is missing required cold infrastructure vocabulary:`);
    for (const term of missingRequired) console.error(`  ${term}`);
    process.exit(1);
  }
}

console.log("X bot dashboard vocabulary check passed.");
