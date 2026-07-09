#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dashboards = ["xbot-dashboard", "docs/xbot-dashboard"];

function fail(message, details = "") {
  console.error(`X bot dashboard data consistency check failed: ${message}`);
  if (details) console.error(details);
  process.exit(1);
}

function readJson(file) {
  return JSON.parse(fs.readFileSync(path.join(root, file), "utf8"));
}

function number(value, fallback = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function round(value, digits = 3) {
  return Number(number(value).toFixed(digits));
}

function cumulativeSeries(values) {
  let total = 0;
  return values.map((value) => {
    total += Math.max(0, number(value));
    return round(total, 6);
  });
}

function chartPointValues(chart) {
  if (!Array.isArray(chart?.points) || !chart.points.length) return [];
  return chart.points.map((point) => number(point.value ?? point.calls));
}

function derivedImpressionSeries(periodData = {}) {
  const posts = [...(periodData.topPosts || [])].sort((left, right) => {
    const leftTime = new Date(left.postedAt || 0).getTime();
    const rightTime = new Date(right.postedAt || 0).getTime();
    return leftTime - rightTime;
  });
  const values = posts.map((post) => Math.max(0, number(post.impressions)));
  const expectedTotal = number(periodData.impressions);
  const currentTotal = values.reduce((sum, value) => sum + value, 0);
  const delta = Math.max(0, expectedTotal - currentTotal);
  if (delta > 0) values.push(delta);
  if (!values.length && expectedTotal > 0) values.push(expectedTotal);
  return cumulativeSeries(values);
}

function derivedEndpointSeries(api = {}) {
  if (Array.isArray(api.days) && api.days.length) {
    return api.days.map((day) => number(day.value ?? day.calls));
  }
  return cumulativeSeries((api.endpoints || []).map((endpoint) => number(endpoint.calls)));
}

function assertNear(file, label, actual, expected, tolerance = 0.005) {
  if (Math.abs(number(actual) - number(expected)) > tolerance) {
    fail(`${file} ${label} mismatch.`, `actual=${actual}, expected=${expected}`);
  }
}

function hasExplicitChart(chart) {
  return Array.isArray(chart?.points) && chart.points.length > 0;
}

function assertBucketedChartTotal(file, label, chart, expectedTotal) {
  const values = chartPointValues(chart);
  if (!values.length) {
    fail(`${file} ${label} is missing explicit chart points.`);
  }
  const pointTotal = values.reduce((sum, value) => sum + number(value), 0);
  assertNear(file, `${label} chart point sum`, pointTotal, expectedTotal);
  assertNear(file, `${label} chart declared total`, number(chart.total), expectedTotal);
  assertNear(file, `${label} chart current point`, number(chart.current), values[values.length - 1] || 0);
  if (chart.aggregate && chart.aggregate !== "sum") {
    fail(`${file} ${label} chart has unsupported aggregate.`, chart.aggregate);
  }
}

function assertMonotonic(file, label, values) {
  for (let index = 1; index < values.length; index += 1) {
    if (number(values[index]) < number(values[index - 1])) {
      fail(`${file} ${label} is not monotonic at point ${index}.`, JSON.stringify(values));
    }
  }
}

const visibleStringSkipKeys = new Set([
  "id",
  "formatId",
  "pillarId",
  "routeUrl",
  "routeQuery",
  "url",
  "link",
  "postedAt",
  "createdAt",
  "updatedAt",
  "generatedAt",
  "checkedAt",
  "workflowEvent",
]);

function collectVisibleStrings(value, key = "", pointer = "$") {
  if (typeof value === "string") {
    if (visibleStringSkipKeys.has(key) || /^https?:\/\//i.test(value) || /^\d{4}-\d{2}-\d{2}T/.test(value)) {
      return [];
    }
    return [{ pointer, value }];
  }
  if (Array.isArray(value)) {
    return value.flatMap((item, index) => collectVisibleStrings(item, key, `${pointer}[${index}]`));
  }
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([entryKey, entryValue]) => collectVisibleStrings(entryValue, entryKey, `${pointer}.${entryKey}`));
  }
  return [];
}

function assertVisibleTextClean(file, label, value) {
  const bannedVocabulary = [
    [/\bfollowers?\b/i, "Ingress Node Strength / Active Conns"],
    [/\bimpressions?\b/i, "Total Ingestion Throughput / L7 Traffic Load"],
    [/\bviews\b/i, "L7 events / throughput"],
    [/\berrors?\b/i, "HTTP Status Triage"],
    [/\btweets?\b/i, "packets / dispatches"],
    [/\bpost(?:s|ing)?\b/i, "packets / dispatches"],
  ];
  const unsafeAutomation = [
    /(enable|allow|publish|send|post|dispatch).{0,80}auto[-_ ]?repl(?:y|ies)/i,
    /(bypass|circumvent).{0,40}rate[-_ ]?limit/i,
  ];

  for (const item of collectVisibleStrings(value)) {
    for (const [pattern, replacement] of bannedVocabulary) {
      if (pattern.test(item.value)) {
        fail(`${file} ${label} contains forbidden dashboard vocabulary at ${item.pointer}; use ${replacement}.`, item.value);
      }
    }
    for (const pattern of unsafeAutomation) {
      if (pattern.test(item.value)) {
        fail(`${file} ${label} contains unsafe automation wording at ${item.pointer}.`, item.value);
      }
    }
  }
}

const httpStatusBucketIds = ["success2xx", "client4xx", "auth4xx", "rateLimit429", "backend5xx"];

function normalizedHttpStatus(status) {
  const code = Number.parseInt(String(status ?? ""), 10);
  return Number.isFinite(code) ? code : null;
}

function httpStatusBucketId(code) {
  if (code === 429) return "rateLimit429";
  if (code >= 500) return "backend5xx";
  if (code === 401 || code === 403) return "auth4xx";
  if (code >= 400) return "client4xx";
  if (code >= 200 && code < 300) return "success2xx";
  return null;
}

function endpointStatusCounts(endpoint = {}) {
  const counts = {};
  for (const [status, count] of Object.entries(endpoint.statuses || {})) {
    const code = normalizedHttpStatus(status);
    const value = number(count);
    if (!code || value <= 0) continue;
    counts[String(code)] = (counts[String(code)] || 0) + value;
  }
  if (!Object.keys(counts).length && endpoint.lastStatus != null) {
    const code = normalizedHttpStatus(endpoint.lastStatus);
    if (code) {
      counts[String(code)] = code >= 400
        ? Math.max(1, number(endpoint.failures))
        : Math.max(1, number(endpoint.calls));
    }
  }
  return counts;
}

function expectedApiStatusTriage(api = {}) {
  const buckets = Object.fromEntries(httpStatusBucketIds.map((id) => [id, { count: 0, endpoints: new Map() }]));
  const totals = {
    totalCalls: 0,
    totalFailures: 0,
    success2xx: 0,
    rateLimit429: 0,
    backendFault5xx: 0,
    authFault4xx: 0,
    clientFault4xx: 0,
    activeRateLimit429: 0,
    activeBackendFault5xx: 0,
    activeAuthFault4xx: 0,
    activeClientFault4xx: 0,
  };
  const incidents = [];

  for (const endpoint of api.endpoints || []) {
    const endpointName = endpoint.name || "-";
    const calls = number(endpoint.calls);
    const failures = number(endpoint.failures);
    const statuses = endpointStatusCounts(endpoint);
    const local = {
      rateLimit429: 0,
      backendFault5xx: 0,
      authFault4xx: 0,
      clientFault4xx: 0,
      activeRateLimit429: 0,
      activeBackendFault5xx: 0,
      activeAuthFault4xx: 0,
      activeClientFault4xx: 0,
    };
    totals.totalCalls += calls;
    totals.totalFailures += failures;

    const latestCode = normalizedHttpStatus(endpoint.lastStatus);
    if (latestCode === 429) {
      totals.activeRateLimit429 += 1;
      local.activeRateLimit429 += 1;
    } else if (latestCode >= 500) {
      totals.activeBackendFault5xx += 1;
      local.activeBackendFault5xx += 1;
    } else if (latestCode === 401 || latestCode === 403) {
      totals.activeAuthFault4xx += 1;
      local.activeAuthFault4xx += 1;
    } else if (latestCode >= 400) {
      totals.activeClientFault4xx += 1;
      local.activeClientFault4xx += 1;
    }

    for (const [status, countValue] of Object.entries(statuses)) {
      const code = normalizedHttpStatus(status);
      const count = number(countValue);
      const bucketId = code ? httpStatusBucketId(code) : null;
      if (!bucketId || count <= 0) continue;
      buckets[bucketId].count += count;
      buckets[bucketId].endpoints.set(endpointName, (buckets[bucketId].endpoints.get(endpointName) || 0) + count);
      if (bucketId === "success2xx") totals.success2xx += count;
      if (bucketId === "rateLimit429") {
        totals.rateLimit429 += count;
        local.rateLimit429 += count;
      } else if (bucketId === "backend5xx") {
        totals.backendFault5xx += count;
        local.backendFault5xx += count;
      } else if (bucketId === "auth4xx") {
        totals.authFault4xx += count;
        local.authFault4xx += count;
      } else if (bucketId === "client4xx") {
        totals.clientFault4xx += count;
        local.clientFault4xx += count;
      }
    }

    if (failures || local.rateLimit429 || local.backendFault5xx || local.authFault4xx || local.clientFault4xx) {
      const active = Boolean(
        local.activeRateLimit429 ||
        local.activeBackendFault5xx ||
        local.activeAuthFault4xx ||
        local.activeClientFault4xx,
      );
      incidents.push({ endpoint: endpointName, active, failures, ...local });
    }
  }

  const severity = totals.activeRateLimit429 || totals.activeBackendFault5xx
    ? "danger"
    : totals.activeAuthFault4xx || totals.activeClientFault4xx
      ? "warn"
      : totals.totalFailures
        ? "cached"
        : "ok";
  return {
    ...totals,
    severity,
    failureRate: totals.totalCalls ? round((totals.totalFailures / totals.totalCalls) * 100, 2) : 0,
    statusMatrix: httpStatusBucketIds.map((id) => ({
      id,
      count: buckets[id].count,
      sharePct: totals.totalCalls ? round((buckets[id].count / totals.totalCalls) * 100, 1) : 0,
      endpoints: [...buckets[id].endpoints.entries()].map(([endpoint, count]) => ({ endpoint, count })),
    })),
    incidents,
  };
}

function assertApiStatusTriage(file, data) {
  const api = data.api || {};
  const triage = api.statusTriage;
  if (!triage || typeof triage !== "object") {
    fail(`${file} is missing explicit api.statusTriage telemetry.`);
  }
  const expected = expectedApiStatusTriage(api);
  for (const key of [
    "totalCalls",
    "totalFailures",
    "success2xx",
    "rateLimit429",
    "backendFault5xx",
    "authFault4xx",
    "clientFault4xx",
    "activeRateLimit429",
    "activeBackendFault5xx",
    "activeAuthFault4xx",
    "activeClientFault4xx",
  ]) {
    assertNear(file, `api.statusTriage ${key}`, triage[key], expected[key]);
  }
  assertNear(file, "api.statusTriage failureRate", triage.failureRate, expected.failureRate, 0.01);
  if (triage.severity !== expected.severity) {
    fail(`${file} api.statusTriage severity drifted.`, `actual=${triage.severity}, expected=${expected.severity}`);
  }

  const rows = new Map((Array.isArray(triage.statusMatrix) ? triage.statusMatrix : []).map((row) => [row.id, row]));
  for (const expectedRow of expected.statusMatrix) {
    const row = rows.get(expectedRow.id);
    if (!row) fail(`${file} api.statusTriage status matrix is missing ${expectedRow.id}.`);
    assertNear(file, `api.statusTriage statusMatrix.${expectedRow.id}.count`, row.count, expectedRow.count);
    assertNear(file, `api.statusTriage statusMatrix.${expectedRow.id}.sharePct`, row.sharePct, expectedRow.sharePct, 0.1);
  }

  const incidents = Array.isArray(triage.incidents) ? triage.incidents : [];
  for (const incident of expected.incidents) {
    if (!incidents.some((row) => row.endpoint === incident.endpoint)) {
      fail(`${file} api.statusTriage incidents are missing ${incident.endpoint}.`);
    }
  }
  if ((expected.activeRateLimit429 || expected.activeBackendFault5xx) && data.rateLimitGovernor?.gates?.read !== "closed") {
    fail(`${file} active 429/5xx partitions must close the rateLimitGovernor read gate.`, data.rateLimitGovernor?.gates?.read || "<missing>");
  }
}

function assertSignalMap(file, data) {
  const signalMap = data.signalMap;
  if (!signalMap || typeof signalMap !== "object") {
    fail(`${file} is missing explicit signalMap telemetry.`);
  }
  const expectedNodeIds = ["rss", "score", "draft", "x", "learn"];
  const nodes = Array.isArray(signalMap.nodes) ? signalMap.nodes : [];
  const nodeIds = nodes.map((node) => node.id);
  for (const nodeId of expectedNodeIds) {
    if (!nodeIds.includes(nodeId)) {
      fail(`${file} signalMap missing node ${nodeId}.`, JSON.stringify(nodeIds));
    }
  }
  const nodeById = new Map(nodes.map((node) => [node.id, node]));
  const routes = Array.isArray(signalMap.routes) ? signalMap.routes : [];
  const xNode = nodeById.get("x") || {};
  if (xNode.label !== "X_ROUTE") {
    fail(`${file} signalMap x node must be labeled X_ROUTE.`, JSON.stringify(xNode));
  }
  if (xNode.unit !== "web routes") {
    fail(`${file} signalMap x node must use web routes unit.`, JSON.stringify(xNode));
  }
  if (!/0 (?:extra )?X read ops/i.test(String(xNode.detail || ""))) {
    fail(`${file} signalMap x node must declare zero X read ops.`, JSON.stringify(xNode));
  }

  const actions = Array.isArray(data.actions) ? data.actions : [];
  const drafts = Array.isArray(data.drafts) ? data.drafts : [];
  assertNear(file, "signalMap X_ROUTE count", number(xNode.value), actions.length);
  assertNear(file, "signalMap draft count", number(nodeById.get("draft")?.value), drafts.length);
  assertNear(file, "signalMap measured packets", number(nodeById.get("learn")?.value), number(data.profile?.measuredPosts));

  const scoreNode = nodeById.get("score") || {};
  const topPostScores = (data.last7d?.topPosts || []).map((post) => number(post.score));
  const expectedBestScore = Math.max(number(data.profile?.baselineScore), ...topPostScores, 0);
  assertNear(file, "signalMap best score", number(scoreNode.value), expectedBestScore);

  const endpointTotals = (data.api?.endpoints || []).reduce(
    (totals, endpoint) => ({
      calls: totals.calls + number(endpoint.calls),
      failures: totals.failures + number(endpoint.failures),
    }),
    { calls: 0, failures: 0 },
  );
  assertNear(file, "signalMap API call total", number(signalMap.totals?.xApiCalls), endpointTotals.calls);
  assertNear(file, "signalMap API failure total", number(signalMap.totals?.xApiFailures), endpointTotals.failures);
  assertNear(file, "signalMap API remaining", number(signalMap.totals?.apiRemainingUsd), number(data.api?.cap) - number(data.api?.spend));

  for (const route of routes) {
    if (!nodeById.has(route.from) && route.from !== "core") {
      fail(`${file} signalMap route has unknown source node.`, JSON.stringify(route));
    }
    if (!nodeById.has(route.to) && route.to !== "core") {
      fail(`${file} signalMap route has unknown target node.`, JSON.stringify(route));
    }
  }
  if (!routes.some((route) => route.from === "x" && route.to === "learn")) {
    fail(`${file} signalMap must route X_ROUTE outcomes into Learn.`);
  }
}

function assertNextWindowCommander(file, data) {
  const commander = data.nextWindowAngleCommander;
  if (!commander || typeof commander !== "object") {
    fail(`${file} is missing explicit nextWindowAngleCommander telemetry.`);
  }
  if (commander.mode !== "zero_read_next_window_commander") {
    fail(`${file} nextWindowAngleCommander mode drifted.`, commander.mode || "<missing>");
  }
  if (commander.zeroExtraXReads !== true || number(commander.estimatedXReadOps) !== 0) {
    fail(`${file} nextWindowAngleCommander must be zero-read.`, JSON.stringify({
      zeroExtraXReads: commander.zeroExtraXReads,
      estimatedXReadOps: commander.estimatedXReadOps,
    }));
  }
  if (commander.readGate !== "cached_only") {
    fail(`${file} nextWindowAngleCommander read gate must be cached_only.`, commander.readGate || "<missing>");
  }
  if (String(commander.source || "").toLowerCase().includes("tweet")) {
    fail(`${file} nextWindowAngleCommander source must use packet vocabulary.`, commander.source || "<missing>");
  }

  const score = number(commander.commanderScore, NaN);
  if (!(score >= 0 && score <= 100)) {
    fail(`${file} nextWindowAngleCommander score must be 0..100.`, String(commander.commanderScore));
  }
  const activeWindow = commander.activeWindow || {};
  const window = commander.window || {};
  const activeLabel = activeWindow.windowLabel || activeWindow.label;
  const windowLabel = window.windowLabel || window.label;
  if (!activeLabel || !windowLabel || activeLabel !== windowLabel) {
    fail(`${file} nextWindowAngleCommander window labels must match.`, JSON.stringify({ activeWindow, window }));
  }
  if (number(activeWindow.hour, -1) !== number(window.hour, -2)) {
    fail(`${file} nextWindowAngleCommander activeWindow/window hours must match.`, JSON.stringify({ activeWindow, window }));
  }
  if (!(number(window.hour, -1) >= 0 && number(window.hour, -1) <= 23)) {
    fail(`${file} nextWindowAngleCommander window hour must be 0..23.`, JSON.stringify(window));
  }
  if (!Number.isFinite(number(window.hoursFromNow, NaN)) || number(window.hoursFromNow) < 0) {
    fail(`${file} nextWindowAngleCommander hoursFromNow must be non-negative.`, JSON.stringify(window));
  }

  const activeAngle = commander.activeAngle || {};
  if (!activeAngle.formatId || !activeAngle.formatLabel) {
    fail(`${file} nextWindowAngleCommander active angle is incomplete.`, JSON.stringify(activeAngle));
  }
  if (!String(commander.command || "").trim()) {
    fail(`${file} nextWindowAngleCommander command is empty.`);
  }
  const serialized = JSON.stringify(commander);
  if (/(enable|allow|publish|send|post).{0,80}auto[-_ ]?repl(?:y|ies)/i.test(serialized) ||
      /(bypass|circumvent).{0,40}rate[-_ ]?limit/i.test(serialized)) {
    fail(`${file} nextWindowAngleCommander contains unsafe automation wording.`);
  }

  const actionUrls = new Set((data.actions || []).map((action) => action.url).filter(Boolean));
  if (commander.routeUrl && actionUrls.size && !actionUrls.has(commander.routeUrl)) {
    fail(`${file} nextWindowAngleCommander routeUrl must come from manual actions.`, commander.routeUrl);
  }
  const gates = Array.isArray(commander.gates) ? commander.gates : [];
  if (!gates.some((gate) => gate.id === "x_read_partition" && String(gate.value || "").includes("0"))) {
    fail(`${file} nextWindowAngleCommander must expose a zero-read partition gate.`, JSON.stringify(gates));
  }
}

function assertL7FireWindowRouter(file, data) {
  const router = data.l7FireWindowRouter;
  if (!router) return;
  if (router.mode !== "zero_read_l7_fire_window_router" && router.mode !== "derived_zero_read_l7_fire_window_router") {
    fail(`${file} l7FireWindowRouter mode drifted.`, router.mode || "<missing>");
  }
  if (router.zeroExtraXReads !== true || number(router.estimatedXReadOps) !== 0) {
    fail(`${file} l7FireWindowRouter must be zero-read.`, JSON.stringify({
      zeroExtraXReads: router.zeroExtraXReads,
      estimatedXReadOps: router.estimatedXReadOps,
    }));
  }
  if (!["cached_only", "closed"].includes(router.readGate)) {
    fail(`${file} l7FireWindowRouter readGate must stay cached_only or closed.`, router.readGate || "<missing>");
  }
  if (!["open", "review", "closed", "guarded", "manual_route_only", "blocked"].includes(router.publishGate)) {
    fail(`${file} l7FireWindowRouter publishGate has unknown state.`, router.publishGate || "<missing>");
  }
  const lanes = Array.isArray(router.lanes) ? router.lanes : [];
  if (!lanes.length || !router.activeLane) {
    fail(`${file} l7FireWindowRouter must expose active lanes.`, JSON.stringify(router));
  }
  for (const lane of lanes) {
    if (!String(lane.windowLabel || "").trim() || !String(lane.formatLabel || lane.formatId || "").trim()) {
      fail(`${file} l7FireWindowRouter lane is incomplete.`, JSON.stringify(lane));
    }
  }
  assertVisibleTextClean(file, "l7FireWindowRouter", router);
}

function assertL7SurgeSentinel(file, data) {
  const sentinel = data.l7SurgeSentinel;
  if (!sentinel || typeof sentinel !== "object") {
    fail(`${file} is missing explicit l7SurgeSentinel telemetry.`);
  }
  if (sentinel.mode !== "zero_read_l7_surge_sentinel" && sentinel.mode !== "derived_zero_read_l7_surge_sentinel") {
    fail(`${file} l7SurgeSentinel mode drifted.`, sentinel.mode || "<missing>");
  }
  if (
    sentinel.zeroExtraXReads !== true ||
    number(sentinel.estimatedXReadOps) !== 0 ||
    number(sentinel.estimatedIncrementalXApiUsd) !== 0
  ) {
    fail(`${file} l7SurgeSentinel must be zero-read and zero incremental X API cost.`, JSON.stringify({
      zeroExtraXReads: sentinel.zeroExtraXReads,
      estimatedXReadOps: sentinel.estimatedXReadOps,
      estimatedIncrementalXApiUsd: sentinel.estimatedIncrementalXApiUsd,
    }));
  }
  if (!["cached_only", "closed"].includes(sentinel.readGate)) {
    fail(`${file} l7SurgeSentinel readGate must stay cached_only or closed.`, sentinel.readGate || "<missing>");
  }
  if (sentinel.operatorMode !== "human_in_loop" || sentinel.manualOnly !== true) {
    fail(`${file} l7SurgeSentinel must remain human-in-loop and manual-only.`, JSON.stringify({
      operatorMode: sentinel.operatorMode,
      manualOnly: sentinel.manualOnly,
    }));
  }
  const score = number(sentinel.sentinelScore, NaN);
  if (!(score >= 0 && score <= 100)) {
    fail(`${file} l7SurgeSentinel score must be 0..100.`, String(sentinel.sentinelScore));
  }
  const routeCoverage = number(sentinel.routeCoveragePct, NaN);
  if (!(routeCoverage >= 0 && routeCoverage <= 100)) {
    fail(`${file} l7SurgeSentinel routeCoveragePct must be 0..100.`, String(sentinel.routeCoveragePct));
  }
  const lanes = Array.isArray(sentinel.lanes) ? sentinel.lanes : [];
  if (!lanes.length) fail(`${file} l7SurgeSentinel lanes are empty.`);
  const allowedStatuses = new Set(["hot", "ok", "watch", "warn", "danger"]);
  for (const lane of lanes) {
    if (!allowedStatuses.has(String(lane.status || ""))) {
      fail(`${file} l7SurgeSentinel lane has unknown status.`, JSON.stringify(lane));
    }
    const laneScore = number(lane.score, NaN);
    if (!(laneScore >= 0 && laneScore <= 100)) {
      fail(`${file} l7SurgeSentinel lane score must be 0..100.`, JSON.stringify(lane));
    }
    if (lane.zeroExtraXReads !== true || number(lane.estimatedXReadOps) !== 0) {
      fail(`${file} l7SurgeSentinel lane must be zero-read.`, JSON.stringify(lane));
    }
  }
  const xReadCell = (sentinel.cells || []).find((cell) => cell.id === "x_reads");
  if (!xReadCell || !/0/.test(String(xReadCell.value || ""))) {
    fail(`${file} l7SurgeSentinel must expose a zero X read cell.`, JSON.stringify(sentinel.cells || []));
  }
  const trace = Array.isArray(sentinel.trace) ? sentinel.trace : [];
  if (!trace.length || !trace.every((value) => Number.isFinite(number(value, NaN)) && number(value) >= 0)) {
    fail(`${file} l7SurgeSentinel trace must contain non-negative numeric values.`, JSON.stringify(trace));
  }
  if (number(sentinel.traceMax) < Math.max(1, ...trace.map((value) => number(value)))) {
    fail(`${file} l7SurgeSentinel traceMax must cover trace values.`, JSON.stringify({ traceMax: sentinel.traceMax, trace }));
  }
  assertVisibleTextClean(file, "l7SurgeSentinel", sentinel);
}

function assertGrowthLeakProfiler(file, data) {
  const profiler = data.growthLeakProfiler;
  if (!profiler || typeof profiler !== "object") {
    fail(`${file} is missing explicit growthLeakProfiler telemetry.`);
  }
  if (
    profiler.mode !== "zero_read_growth_leak_profiler" &&
    profiler.mode !== "derived_zero_read_growth_leak_profiler"
  ) {
    fail(`${file} growthLeakProfiler mode drifted.`, profiler.mode || "<missing>");
  }
  if (
    profiler.zeroExtraXReads !== true ||
    number(profiler.estimatedXReadOps) !== 0 ||
    number(profiler.estimatedIncrementalXApiUsd) !== 0
  ) {
    fail(`${file} growthLeakProfiler must be zero-read and zero incremental X API cost.`, JSON.stringify({
      zeroExtraXReads: profiler.zeroExtraXReads,
      estimatedXReadOps: profiler.estimatedXReadOps,
      estimatedIncrementalXApiUsd: profiler.estimatedIncrementalXApiUsd,
    }));
  }
  if (!["cached_only", "closed"].includes(profiler.readGate)) {
    fail(`${file} growthLeakProfiler readGate must stay cached_only or closed.`, profiler.readGate || "<missing>");
  }
  if (profiler.operatorMode !== "human_in_loop" || profiler.manualOnly !== true) {
    fail(`${file} growthLeakProfiler must remain human-in-loop and manual-only.`, JSON.stringify({
      operatorMode: profiler.operatorMode,
      manualOnly: profiler.manualOnly,
    }));
  }
  const leakScore = number(profiler.leakScore, NaN);
  if (!(leakScore >= 0 && leakScore <= 100)) {
    fail(`${file} growthLeakProfiler leakScore must be 0..100.`, String(profiler.leakScore));
  }
  const stages = Array.isArray(profiler.stages) ? profiler.stages : [];
  if (stages.length < 5) fail(`${file} growthLeakProfiler stages are incomplete.`);
  const allowedStatuses = new Set(["ok", "warn", "danger"]);
  for (const stage of stages) {
    if (!allowedStatuses.has(String(stage.status || ""))) {
      fail(`${file} growthLeakProfiler stage has unknown status.`, JSON.stringify(stage));
    }
    const score = number(stage.score, NaN);
    const leakPct = number(stage.leakPct, NaN);
    if (!(score >= 0 && score <= 100) || !(leakPct >= 0 && leakPct <= 100)) {
      fail(`${file} growthLeakProfiler stage score/leakPct must be 0..100.`, JSON.stringify(stage));
    }
    if (
      stage.zeroExtraXReads !== true ||
      number(stage.estimatedXReadOps) !== 0 ||
      number(stage.estimatedIncrementalXApiUsd) !== 0
    ) {
      fail(`${file} growthLeakProfiler stage must be zero-read and zero incremental cost.`, JSON.stringify(stage));
    }
    if (!String(stage.nextAction || "").trim()) {
      fail(`${file} growthLeakProfiler stage must include an operator action.`, JSON.stringify(stage));
    }
  }
  const primaryLeakId = String(profiler.primaryLeakId || "");
  if (!primaryLeakId || !stages.some((stage) => stage.id === primaryLeakId)) {
    fail(`${file} growthLeakProfiler primaryLeakId must reference a stage.`, JSON.stringify({
      primaryLeakId: profiler.primaryLeakId,
      stages: stages.map((stage) => stage.id),
    }));
  }
  if (!profiler.primaryLeak || profiler.primaryLeak.id !== primaryLeakId) {
    fail(`${file} growthLeakProfiler primaryLeak must match primaryLeakId.`, JSON.stringify(profiler.primaryLeak || null));
  }
  const xReadCell = (profiler.cells || []).find((cell) => cell.id === "x_reads");
  if (!xReadCell || !/0/.test(String(xReadCell.value || ""))) {
    fail(`${file} growthLeakProfiler must expose a zero X read cell.`, JSON.stringify(profiler.cells || []));
  }
  assertVisibleTextClean(file, "growthLeakProfiler", profiler);
}

function assertCommandPacketDock(file, data) {
  const dock = data.commandPacketDock;
  if (!dock || typeof dock !== "object") {
    fail(`${file} is missing explicit commandPacketDock telemetry.`);
  }
  if (
    dock.mode !== "zero_read_command_packet_dock" &&
    dock.mode !== "derived_zero_read_command_packet_dock"
  ) {
    fail(`${file} commandPacketDock mode drifted.`, dock.mode || "<missing>");
  }
  if (
    dock.zeroExtraXReads !== true ||
    number(dock.estimatedXReadOps) !== 0 ||
    number(dock.estimatedIncrementalXApiUsd) !== 0
  ) {
    fail(`${file} commandPacketDock must be zero-read and zero incremental X API cost.`, JSON.stringify({
      zeroExtraXReads: dock.zeroExtraXReads,
      estimatedXReadOps: dock.estimatedXReadOps,
      estimatedIncrementalXApiUsd: dock.estimatedIncrementalXApiUsd,
    }));
  }
  if (dock.readGate !== "browser_only" || dock.operatorMode !== "human_in_loop" || dock.manualOnly !== true) {
    fail(`${file} commandPacketDock must remain browser-only, manual-only, and human-in-loop.`, JSON.stringify({
      readGate: dock.readGate,
      operatorMode: dock.operatorMode,
      manualOnly: dock.manualOnly,
    }));
  }
  const commandScore = number(dock.commandScore, NaN);
  if (!(commandScore >= 0 && commandScore <= 100)) {
    fail(`${file} commandPacketDock commandScore must be 0..100.`, String(dock.commandScore));
  }
  const packet = dock.primaryPacket;
  if (!packet || typeof packet !== "object") {
    fail(`${file} commandPacketDock must include a primaryPacket.`);
  }
  if (
    packet.zeroExtraXReads !== true ||
    number(packet.estimatedXReadOps) !== 0 ||
    number(packet.estimatedIncrementalXApiUsd) !== 0
  ) {
    fail(`${file} commandPacketDock primaryPacket must be zero-read and zero incremental cost.`, JSON.stringify(packet));
  }
  if (packet.status === "ready" && (!/^https:\/\/x\.com\//i.test(String(packet.openUrl || "")) || !String(packet.pastePayload || "").trim())) {
    fail(`${file} commandPacketDock ready packet must include an X web route and paste payload.`, JSON.stringify(packet));
  }
  if (!String(packet.editRule || "").trim() || !String(packet.skipRule || "").trim() || !String(packet.doneSignal || "").trim()) {
    fail(`${file} commandPacketDock primaryPacket must include edit/skip/done rules.`, JSON.stringify(packet));
  }
  const steps = Array.isArray(dock.steps) ? dock.steps : [];
  if (steps.length < 4) fail(`${file} commandPacketDock steps are incomplete.`);
  const allowedStatuses = new Set(["ok", "warn", "danger"]);
  for (const step of steps) {
    if (!String(step.id || "").trim() || !String(step.label || "").trim() || !String(step.detail || "").trim()) {
      fail(`${file} commandPacketDock step is incomplete.`, JSON.stringify(step));
    }
    if (!allowedStatuses.has(String(step.status || ""))) {
      fail(`${file} commandPacketDock step has unknown status.`, JSON.stringify(step));
    }
  }
  const xReadCell = (dock.cells || []).find((cell) => cell.id === "x_reads");
  if (!xReadCell || !/0/.test(String(xReadCell.value || ""))) {
    fail(`${file} commandPacketDock must expose a zero X read cell.`, JSON.stringify(dock.cells || []));
  }
  assertVisibleTextClean(file, "commandPacketDock", dock);
}

function assertRssSourceMesh(file, data) {
  const mesh = data.rssSourceMesh;
  if (!mesh) return;
  if (mesh.mode !== "zero_read_rss_source_mesh" && mesh.mode !== "derived_zero_read_rss_source_mesh") {
    fail(`${file} rssSourceMesh mode drifted.`, mesh.mode || "<missing>");
  }
  if (mesh.zeroExtraXReads !== true || number(mesh.estimatedXReadOps) !== 0 || number(mesh.estimatedIncrementalXApiUsd) !== 0) {
    fail(`${file} rssSourceMesh must be zero-read and zero incremental X API cost.`, JSON.stringify({
      zeroExtraXReads: mesh.zeroExtraXReads,
      estimatedXReadOps: mesh.estimatedXReadOps,
      estimatedIncrementalXApiUsd: mesh.estimatedIncrementalXApiUsd,
    }));
  }
  if (mesh.readGate !== "cached_only") {
    fail(`${file} rssSourceMesh readGate must stay cached_only.`, mesh.readGate || "<missing>");
  }
  const lanes = Array.isArray(mesh.lanes) ? mesh.lanes : [];
  const totalSources = number(mesh.summary?.totalSources, lanes.length);
  if (totalSources > 0 && !lanes.length) {
    fail(`${file} rssSourceMesh summary declares sources but lanes are empty.`, JSON.stringify(mesh.summary || {}));
  }
  const allowedStatuses = new Set(["hot", "ok", "warn", "danger", "idle"]);
  for (const lane of lanes) {
    if (!String(lane.source || lane.host || "").trim()) {
      fail(`${file} rssSourceMesh lane is missing source.`, JSON.stringify(lane));
    }
    if (!allowedStatuses.has(String(lane.status || ""))) {
      fail(`${file} rssSourceMesh lane has unknown status.`, JSON.stringify(lane));
    }
    const score = number(lane.priorityScore, NaN);
    if (!(score >= 0 && score <= 100)) {
      fail(`${file} rssSourceMesh lane priorityScore must be 0..100.`, JSON.stringify(lane));
    }
    if (lane.zeroExtraXReads !== true || number(lane.estimatedXReadOps) !== 0) {
      fail(`${file} rssSourceMesh lane must be zero-read.`, JSON.stringify(lane));
    }
  }
  if (mesh.activeSource && lanes.length && !lanes.some((lane) => lane.id === mesh.activeSource.id)) {
    fail(`${file} rssSourceMesh activeSource must come from lanes.`, JSON.stringify({ activeSource: mesh.activeSource, lanes }));
  }
  const xReadCell = (mesh.cells || []).find((cell) => cell.id === "x_reads");
  if (!xReadCell || !/0/.test(String(xReadCell.value || ""))) {
    fail(`${file} rssSourceMesh must expose a zero X read cell.`, JSON.stringify(mesh.cells || []));
  }
  assertVisibleTextClean(file, "rssSourceMesh", mesh);
}

function assertOperatorPasteQueue(file, data) {
  const queue = data.operatorPasteQueue;
  if (!queue || typeof queue !== "object") {
    fail(`${file} is missing explicit operatorPasteQueue telemetry.`);
  }
  if (queue.mode !== "manual_paste_queue") {
    fail(`${file} operatorPasteQueue mode drifted.`, queue.mode || "<missing>");
  }
  if (queue.zeroExtraXReads !== true || number(queue.estimatedXReadOps) !== 0 || number(queue.estimatedIncrementalXApiUsd) !== 0) {
    fail(`${file} operatorPasteQueue must be zero-read and zero incremental X API cost.`, JSON.stringify({
      zeroExtraXReads: queue.zeroExtraXReads,
      estimatedXReadOps: queue.estimatedXReadOps,
      estimatedIncrementalXApiUsd: queue.estimatedIncrementalXApiUsd,
    }));
  }
  if (queue.readGate !== "browser_only" || queue.operatorMode !== "human_in_loop") {
    fail(`${file} operatorPasteQueue must remain browser-only and human-in-loop.`, JSON.stringify({
      readGate: queue.readGate,
      operatorMode: queue.operatorMode,
    }));
  }
  const tasks = Array.isArray(queue.tasks) ? queue.tasks : [];
  if (!tasks.length) fail(`${file} operatorPasteQueue tasks are empty.`);
  const readyTasks = tasks.filter((task) => task.ready);
  if (number(queue.readyTasks) !== readyTasks.length) {
    fail(`${file} operatorPasteQueue readyTasks count drifted.`, JSON.stringify({ declared: queue.readyTasks, actual: readyTasks.length }));
  }
  if (number(queue.totalTasks) !== tasks.length) {
    fail(`${file} operatorPasteQueue totalTasks count drifted.`, JSON.stringify({ declared: queue.totalTasks, actual: tasks.length }));
  }
  if (readyTasks.length && (!queue.primaryOpenUrl || !queue.primaryPastePayload)) {
    fail(`${file} operatorPasteQueue primary ready task is incomplete.`, JSON.stringify({
      primaryOpenUrl: queue.primaryOpenUrl,
      primaryPastePayload: queue.primaryPastePayload,
    }));
  }
  for (const task of tasks) {
    if (task.zeroExtraXReads !== true || number(task.estimatedXReadOps) !== 0 || number(task.estimatedIncrementalXApiUsd) !== 0) {
      fail(`${file} operatorPasteQueue task must be zero-read and zero incremental X API cost.`, JSON.stringify(task));
    }
    if (task.ready && (!/^https:\/\/x\.com\//i.test(String(task.openUrl || "")) || !String(task.pastePayload || "").trim())) {
      fail(`${file} operatorPasteQueue ready task must include an X web route and paste payload.`, JSON.stringify(task));
    }
    if (!String(task.skipRule || "").trim() || !String(task.doneSignal || "").trim() || !String(task.editRule || "").trim()) {
      fail(`${file} operatorPasteQueue task must include edit/skip/done operator rules.`, JSON.stringify(task));
    }
  }
  assertVisibleTextClean(file, "operatorPasteQueue", queue);
}

function assertRouteOpportunityMatrix(file, data) {
  const matrix = data.routeOpportunityMatrix;
  if (!matrix || typeof matrix !== "object") {
    fail(`${file} is missing explicit routeOpportunityMatrix telemetry.`);
  }
  if (matrix.mode !== "zero_read_route_opportunity_matrix" && matrix.mode !== "derived_zero_read_route_opportunity_matrix") {
    fail(`${file} routeOpportunityMatrix mode drifted.`, matrix.mode || "<missing>");
  }
  if (
    matrix.zeroExtraXReads !== true ||
    number(matrix.estimatedXReadOps) !== 0 ||
    number(matrix.estimatedIncrementalXApiUsd) !== 0
  ) {
    fail(`${file} routeOpportunityMatrix must be zero-read and zero incremental X API cost.`, JSON.stringify({
      zeroExtraXReads: matrix.zeroExtraXReads,
      estimatedXReadOps: matrix.estimatedXReadOps,
      estimatedIncrementalXApiUsd: matrix.estimatedIncrementalXApiUsd,
    }));
  }
  if (matrix.readGate !== "browser_only" || matrix.operatorMode !== "human_in_loop" || matrix.manualOnly !== true) {
    fail(`${file} routeOpportunityMatrix must remain browser-only, manual-only, and human-in-loop.`, JSON.stringify({
      readGate: matrix.readGate,
      operatorMode: matrix.operatorMode,
      manualOnly: matrix.manualOnly,
    }));
  }
  const lanes = Array.isArray(matrix.lanes) ? matrix.lanes : [];
  if (!lanes.length) fail(`${file} routeOpportunityMatrix lanes are empty.`);
  const readyLanes = lanes.filter((lane) => lane.ready);
  if (number(matrix.readyLanes) !== readyLanes.length) {
    fail(`${file} routeOpportunityMatrix readyLanes count drifted.`, JSON.stringify({ declared: matrix.readyLanes, actual: readyLanes.length }));
  }
  if (number(matrix.totalLanes) !== lanes.length) {
    fail(`${file} routeOpportunityMatrix totalLanes count drifted.`, JSON.stringify({ declared: matrix.totalLanes, actual: lanes.length }));
  }
  const allowedStatuses = new Set(["hot", "ok", "watch", "hold", "warn", "danger"]);
  for (const lane of lanes) {
    if (!allowedStatuses.has(String(lane.status || ""))) {
      fail(`${file} routeOpportunityMatrix lane has unknown status.`, JSON.stringify(lane));
    }
    const score = number(lane.score, NaN);
    if (!(score >= 0 && score <= 100)) {
      fail(`${file} routeOpportunityMatrix lane score must be 0..100.`, JSON.stringify(lane));
    }
    if (lane.manualOnly !== true || lane.zeroExtraXReads !== true || number(lane.estimatedXReadOps) !== 0 || number(lane.estimatedIncrementalXApiUsd) !== 0) {
      fail(`${file} routeOpportunityMatrix lane must be manual-only and zero-read.`, JSON.stringify(lane));
    }
    if (lane.ready && (!/^https:\/\/x\.com\//i.test(String(lane.openUrl || "")) || !String(lane.pastePayload || "").trim())) {
      fail(`${file} routeOpportunityMatrix ready lane must include an X web route and paste payload.`, JSON.stringify(lane));
    }
    if (!String(lane.skipRule || "").trim() || !String(lane.doneSignal || "").trim() || !String(lane.editRule || "").trim()) {
      fail(`${file} routeOpportunityMatrix lane must include edit/skip/done operator rules.`, JSON.stringify(lane));
    }
  }
  const xReadCell = (matrix.cells || []).find((cell) => cell.id === "x_reads");
  if (!xReadCell || !/0/.test(String(xReadCell.value || ""))) {
    fail(`${file} routeOpportunityMatrix must expose a zero X read cell.`, JSON.stringify(matrix.cells || []));
  }
  if (readyLanes.length && (!matrix.primaryOpenUrl || !matrix.primaryPastePayload)) {
    fail(`${file} routeOpportunityMatrix primary ready lane is incomplete.`, JSON.stringify({
      primaryOpenUrl: matrix.primaryOpenUrl,
      primaryPastePayload: matrix.primaryPastePayload,
    }));
  }
  assertVisibleTextClean(file, "routeOpportunityMatrix", matrix);
}

function assertCostTelemetry(file, data) {
  const governor = data.rateLimitGovernor;
  if (!governor || typeof governor !== "object") {
    fail(`${file} is missing rateLimitGovernor telemetry.`);
  }
  if (governor.zeroExtraXReads !== true || governor.circuit?.zeroExtraXReads !== true) {
    fail(`${file} rateLimitGovernor must be zero-read.`, JSON.stringify({
      zeroExtraXReads: governor.zeroExtraXReads,
      circuitZeroExtraXReads: governor.circuit?.zeroExtraXReads,
    }));
  }
  if (!["cached_only", "closed"].includes(governor.gates?.read)) {
    fail(`${file} rateLimitGovernor read gate must stay cached_only or closed.`, governor.gates?.read || "<missing>");
  }
  if (!["open", "review", "closed", "guarded"].includes(governor.gates?.publish)) {
    fail(`${file} rateLimitGovernor publish gate has unknown state.`, governor.gates?.publish || "<missing>");
  }
  if (!Array.isArray(governor.partitionMatrix) || !governor.partitionMatrix.length) {
    fail(`${file} rateLimitGovernor is missing partitionMatrix telemetry.`);
  }
  if (!governor.partitionMatrix.some((partition) => partition.id === "read_search")) {
    fail(`${file} rateLimitGovernor partitionMatrix must include read_search.`);
  }
  const accountSnapshotPartition = governor.partitionMatrix.find((partition) => partition.id === "account_snapshot");
  if (accountSnapshotPartition) {
    if (!["cached_only", "sampled", "closed"].includes(accountSnapshotPartition.gate)) {
      fail(`${file} account_snapshot partition has unknown gate.`, accountSnapshotPartition.gate || "<missing>");
    }
    if (accountSnapshotPartition.cache && accountSnapshotPartition.cache.zeroExtraXReads === false && accountSnapshotPartition.cache.due !== true) {
      fail(`${file} account_snapshot cache telemetry must not claim reads unless refresh is due.`, JSON.stringify(accountSnapshotPartition.cache));
    }
  }
  if (governor.accountSnapshotCache) {
    const cache = governor.accountSnapshotCache;
    if (!["cache_hit", "refresh_due", "disabled"].includes(cache.mode)) {
      fail(`${file} accountSnapshotCache mode drifted.`, cache.mode || "<missing>");
    }
    if (cache.fresh === true && cache.due === true) {
      fail(`${file} accountSnapshotCache cannot be both fresh and due.`, JSON.stringify(cache));
    }
  }
  if (!Number.isFinite(number(governor.budget?.safeCapUsd, NaN))) {
    fail(`${file} rateLimitGovernor budget.safeCapUsd must be numeric.`, JSON.stringify(governor.budget || {}));
  }

  const runway = data.xApiRunwayGuard;
  if (!runway || typeof runway !== "object") {
    fail(`${file} is missing xApiRunwayGuard telemetry.`);
  }
  if (typeof runway.active !== "boolean" || typeof runway.monthEndSafe !== "boolean") {
    fail(`${file} xApiRunwayGuard must expose active/monthEndSafe booleans.`, JSON.stringify(runway));
  }
  if (!Number.isFinite(number(runway.projectedCostUsd, NaN)) || !Number.isFinite(number(runway.monthEndProjectedSpendUsd, NaN))) {
    fail(`${file} xApiRunwayGuard must expose numeric projected cost telemetry.`, JSON.stringify(runway));
  }

  const burn = data.budgetBurnReactor;
  if (!burn || typeof burn !== "object") {
    fail(`${file} is missing budgetBurnReactor telemetry.`);
  }
  if (burn.zeroExtraXReads !== true) {
    fail(`${file} budgetBurnReactor must be zero-read.`, JSON.stringify({ zeroExtraXReads: burn.zeroExtraXReads }));
  }
  if (!["cached_only", "sealed"].includes(burn.readGate)) {
    fail(`${file} budgetBurnReactor read gate must be cached_only or sealed.`, burn.readGate || "<missing>");
  }
  if (!Number.isFinite(number(burn.safeCapUsd, NaN)) || !Number.isFinite(number(burn.projectedDailyBurnUsd, NaN))) {
    fail(`${file} budgetBurnReactor must expose numeric safeCap/projectedDailyBurn telemetry.`, JSON.stringify(burn));
  }
  if (!Array.isArray(burn.series) || !burn.series.length) {
    fail(`${file} budgetBurnReactor must expose a burn series.`);
  }
  const liveReads = (burn.partitions || []).find((partition) => partition.id === "live_reads");
  if (!liveReads || !/0/.test(String(liveReads.value || ""))) {
    fail(`${file} budgetBurnReactor must show the live X read partition at 0 ops.`, JSON.stringify(liveReads || {}));
  }

  const optimizer = data.budgetAllocationOptimizer;
  if (!optimizer || typeof optimizer !== "object") {
    fail(`${file} is missing budgetAllocationOptimizer telemetry.`);
  }
  if (optimizer.mode !== "zero_read_budget_allocator" || optimizer.zeroExtraXReads !== true) {
    fail(`${file} budgetAllocationOptimizer mode drifted.`, JSON.stringify({
      mode: optimizer.mode,
      zeroExtraXReads: optimizer.zeroExtraXReads,
    }));
  }
  const lanes = Array.isArray(optimizer.lanes) ? optimizer.lanes : [];
  if (!lanes.length) fail(`${file} budgetAllocationOptimizer lanes are empty.`);
  const recommended = lanes.find((lane) => lane.id === optimizer.recommendedLaneId);
  if (!recommended) fail(`${file} budgetAllocationOptimizer recommended lane is missing.`, optimizer.recommendedLaneId || "<missing>");
  if (number(recommended.xReadOps) !== 0 || recommended.id === "live_x_search") {
    fail(`${file} budgetAllocationOptimizer recommended lane must not require X reads.`, JSON.stringify(recommended));
  }
  const manualLane = lanes.find((lane) => lane.id === "manual_route_burst");
  if (!manualLane || number(manualLane.costUsd) !== 0 || number(manualLane.xReadOps) !== 0) {
    fail(`${file} budgetAllocationOptimizer must preserve a zero-cost manual route lane.`, JSON.stringify(manualLane || {}));
  }
  const liveLane = lanes.find((lane) => lane.id === "live_x_search");
  if (!liveLane || number(liveLane.xReadOps) <= 0 || !["closed", "sealed"].includes(liveLane.gate) || liveLane.status !== "danger") {
    fail(`${file} budgetAllocationOptimizer must keep live_x_search sealed as a danger lane.`, JSON.stringify(liveLane || {}));
  }

  const media = data.mediaRoiGate || data.automation?.mediaRoiGate;
  if (!media || typeof media !== "object") {
    fail(`${file} is missing mediaRoiGate telemetry.`);
  }
  if (media.zeroExtraXReads !== true || typeof media.attachImageAllowed !== "boolean" || !String(media.decision || "").trim()) {
    fail(`${file} mediaRoiGate must expose zero-read boolean image gating.`, JSON.stringify(media));
  }
  if (media.attachImageAllowed && media.decision !== "allow") {
    fail(`${file} mediaRoiGate cannot attach images unless decision is allow.`, JSON.stringify(media));
  }
  const xReadCheck = (media.checks || []).find((check) => check.id === "x_reads");
  if (!xReadCheck || String(xReadCheck.value || "") !== "0") {
    fail(`${file} mediaRoiGate must expose a zero extra X reads check.`, JSON.stringify(xReadCheck || {}));
  }

  assertVisibleTextClean(file, "rateLimitGovernor", governor);
  assertVisibleTextClean(file, "xApiRunwayGuard", runway);
  assertVisibleTextClean(file, "budgetBurnReactor", burn);
  assertVisibleTextClean(file, "budgetAllocationOptimizer", optimizer);
  assertVisibleTextClean(file, "mediaRoiGate", media);
}

function assertDashboardData(file, data) {
  const last24h = data.last24h || {};
  const api = data.api || {};
  const impressionChart = data.charts?.impressions24h;
  const apiChart = data.charts?.xApiCallsDaily;
  const expectedImpressions = number(impressionChart?.total, number(last24h.impressions));
  if (hasExplicitChart(impressionChart)) {
    assertBucketedChartTotal(file, "L7 traffic", impressionChart, expectedImpressions);
  } else {
    const impressionSeries = derivedImpressionSeries(last24h);
    if (expectedImpressions > 0 && !impressionSeries.length) {
      fail(`${file} has 24h L7 traffic but no chartable impression series.`);
    }
    if (impressionSeries.length) {
      assertMonotonic(file, "L7 traffic fallback series", impressionSeries);
      assertNear(file, "L7 traffic fallback final value", impressionSeries[impressionSeries.length - 1], expectedImpressions);
    }
  }

  const endpoints = api.endpoints || [];
  const expectedCalls = number(apiChart?.total, endpoints.reduce((sum, endpoint) => sum + number(endpoint.calls), 0));
  if (hasExplicitChart(apiChart)) {
    assertBucketedChartTotal(file, "X API ops", apiChart, expectedCalls);
  } else {
    const endpointSeries = derivedEndpointSeries(api);
    if (expectedCalls > 0 && !endpointSeries.length) {
      fail(`${file} has X API calls but no chartable endpoint series.`);
    }
    if (endpointSeries.length) {
      assertMonotonic(file, "X API ops fallback series", endpointSeries);
      assertNear(file, "X API ops fallback final value", endpointSeries[endpointSeries.length - 1], expectedCalls);
    }
  }

  const endpointSpend = endpoints.reduce((sum, endpoint) => sum + number(endpoint.usd), 0);
  assertNear(file, "X API spend", round(api.spend), round(endpointSpend));

  const failures = endpoints.reduce((sum, endpoint) => sum + number(endpoint.failures), 0);
  const createReply = endpoints.find((endpoint) => endpoint.name === "CREATE_REPLY");
  if (createReply && number(createReply.lastStatus) === 403 && failures < 1) {
    fail(`${file} reports CREATE_REPLY 403 but no endpoint failure count.`);
  }

  if (data.learningLoopContract?.zeroExtraXReads === false) {
    fail(`${file} learning loop contract allows live X reads.`);
  }

  assertApiStatusTriage(file, data);
  assertSignalMap(file, data);
  assertNextWindowCommander(file, data);
  assertL7FireWindowRouter(file, data);
  assertL7SurgeSentinel(file, data);
  assertGrowthLeakProfiler(file, data);
  assertCommandPacketDock(file, data);
  assertRssSourceMesh(file, data);
  assertOperatorPasteQueue(file, data);
  assertRouteOpportunityMatrix(file, data);
  assertCostTelemetry(file, data);
}

const sourceData = readJson("xbot-dashboard/data.json");
const deployedData = readJson("docs/xbot-dashboard/data.json");
if (JSON.stringify(sourceData) !== JSON.stringify(deployedData)) {
  fail("docs/xbot-dashboard/data.json drifted from xbot-dashboard/data.json.");
}

for (const dir of dashboards) {
  assertDashboardData(`${dir}/data.json`, readJson(`${dir}/data.json`));
}

console.log("X bot dashboard data consistency check passed.");
