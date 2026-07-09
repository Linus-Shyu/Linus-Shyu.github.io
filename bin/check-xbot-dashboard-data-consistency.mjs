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
