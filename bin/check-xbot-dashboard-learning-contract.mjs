#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dashboards = ["xbot-dashboard", "docs/xbot-dashboard"];

function fail(message, details = "") {
  console.error(`X bot dashboard learning contract check failed: ${message}`);
  if (details) console.error(details);
  process.exit(1);
}

function readRelative(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function requireIncludes(file, text, needles) {
  for (const needle of needles) {
    if (!text.includes(needle)) {
      fail(`${file} is missing required learning-contract token.`, needle);
    }
  }
}

function countMatches(text, re) {
  return [...text.matchAll(re)].length;
}

for (const dir of dashboards) {
  const htmlFile = `${dir}/index.html`;
  const scriptFile = `${dir}/script.js`;
  const cssFile = `${dir}/styles.css`;
  const html = readRelative(htmlFile);
  const script = readRelative(scriptFile);
  const css = readRelative(cssFile);

  requireIncludes(htmlFile, html, [
    '<div class="learning-contract" id="learning-contract"></div>',
  ]);

  requireIncludes(scriptFile, script, [
    "learningLoopContract:",
    "function learningLoopContractData()",
    "function renderLearningLoopContract()",
    "renderLearningLoopContract();",
    "zeroExtraXReads: true",
    "estimatedXReadOps: 0",
    "estimatedIncrementalXApiUsd: 0",
    "READ_GATE",
    "0 X reads",
    "Cached analytics only; 0 X search/read ops.",
    "No auto-replies, no scraping, no rate-limit bypass.",
    "Manual route work stays human-reviewed.",
    "learning_contract_eyebrow",
    "learning_contract_zero_reads",
    "learning_contract_guardrails",
  ]);

  const zeroReadUses = countMatches(script, /zeroExtraXReads:\s*true/g);
  if (zeroReadUses < 20) {
    fail(`${scriptFile} lost dense zero-read telemetry coverage.`, `found ${zeroReadUses}, expected at least 20`);
  }

  const unsafeAutoPublish = [
    /(enable|allow|publish|send|post).{0,80}auto[-_ ]?repl(?:y|ies)/i,
    /(bypass|evade).{0,40}rate[-_ ]?limit/i,
  ];
  const unsafeHits = unsafeAutoPublish.filter((re) => re.test(script));
  if (unsafeHits.length) {
    fail(`${scriptFile} contains unsafe auto-publish or rate-limit-bypass wording in the learning contract surface.`);
  }

  requireIncludes(cssFile, css, [
    ".learning-contract {",
    ".learning-contract-head",
    ".learning-contract-cells",
    ".learning-contract-arms",
    ".learning-contract-policy",
    ".learning-contract-guards",
    "grid-template-columns: repeat(2, minmax(0, 1fr));",
    "grid-template-columns: repeat(3, minmax(0, 1fr));",
    "grid-template-columns: 118px minmax(0, 1fr);",
    "border-radius: 6px",
    "#00f0ff",
    "#00ff66",
    "#ff007a",
  ]);

  const contractCssStart = css.indexOf(".learning-contract {");
  const banditCssStart = css.indexOf(".content-bandit-allocator", contractCssStart);
  if (contractCssStart === -1 || banditCssStart === -1 || banditCssStart <= contractCssStart) {
    fail(`${cssFile} learning-contract CSS block is not placed before the bandit allocator block.`);
  }

  const contractCss = css.slice(contractCssStart, banditCssStart);
  const radiusCount = countMatches(contractCss, /border-radius:\s*6px\b/g);
  if (radiusCount < 4) {
    fail(`${cssFile} learning-contract block lost dense 6px micro-rounding.`, `found ${radiusCount}, expected at least 4`);
  }
  for (const token of ["#00f0ff", "#00ff66", "#ff007a"]) {
    if (!contractCss.toLowerCase().includes(token)) {
      fail(`${cssFile} learning-contract block is missing neon token ${token}.`);
    }
  }
}

console.log("X bot dashboard learning contract check passed.");
