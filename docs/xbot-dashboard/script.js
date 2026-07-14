const fallbackData = {
  updatedAt: new Date().toISOString(),
  telemetry: { cachedOnlyRefresh: true, refreshMode: "fallback" },
  profile: { followers: null, followerDelta: null, trackedPosts: 0, measuredPosts: 0, baselineScore: 0 },
  last24h: { posts: 0, impressions: 0, likes: 0, reposts: 0, replies: 0, topPosts: [] },
  last7d: { posts: 0, impressions: 0, likes: 0, reposts: 0, replies: 0, topPosts: [] },
  charts: { impressions7d: { points: [] }, xApiSpendDaily: { points: [] } },
  diagnosis: ["No live data loaded yet."],
  drafts: [],
  actions: [],
  opportunities: [],
  languageTracks: {
    mode: "timezone",
    zeroExtraXReads: true,
    estimatedXReadOps: 0,
    tracks: [
      { id: "zh", label: "ZH", utcHours: [4, 12, 13], dailyTarget: 1, packetsLast24h: 0, packetsLast7d: 0, traffic7d: 0, ack7d: 0, avgScore: 0, status: "scheduled" },
      { id: "en", label: "EN", utcHours: [14, 17, 22], dailyTarget: 1, packetsLast24h: 0, packetsLast7d: 0, traffic7d: 0, ack7d: 0, avgScore: 0, status: "scheduled" },
    ],
  },
  api: { spend: 0, cap: 5, remaining: 5, endpoints: [], days: [] },
  openai: { calls: 0, failures: 0, totalEstimatedUsd: 0 },
};

const I18N = {
  en: {
    nav_overview: "Overview",
    nav_language: "Language",
    nav_tasks: "Tasks",
    nav_funnel: "Funnel",
    nav_trend: "Trend",
    nav_posts: "Posts",
    nav_advice: "AI Advice",
    nav_drafts: "Drafts",
    nav_cost: "Cost",
    auto_update: "Auto update",
    eyebrow: "Linus Shyu / X Growth",
    title: "Growth dashboard that shows what matters.",
    refresh: "Refresh",
    open_x: "Open X",
    followers: "Followers",
    posts_24h: "24h Posts",
    traffic_7d: "7d Reach",
    api_left: "API Left",
    ai_today: "AI Today",
    open_route: "Open route",
    copy_best: "Copy best draft",
    growth_trend: "Growth Trend",
    trend_title: "Follower, reach, and posting velocity",
    reach_chart: "Reach over time",
    cost_chart: "X API spend",
    posted_content: "Posted Content",
    posts_title: "What the bot published recently",
    reply_queue: "Reply Queue",
    drafts_title: "Copy-paste drafts for manual replies",
    ai_reasoning: "AI Reasoning",
    advice_title: "What the system thinks you should do",
    cost_guard: "Cost Guard",
    cost_title: "Keep growth cheap",
    used: "used",
    live: "Live data",
    stale: "Data stale",
    offline: "Offline data",
    copied: "Copied",
    no_posts: "No recent posts in the synced data.",
    no_drafts: "No reply drafts ready yet. Run growth maintenance to generate fresh drafts.",
    no_advice: "No AI advice in the current data.",
    language_eyebrow: "Language Tracks",
    language_title: "Chinese and English run in their own windows",
    language_next: "Next slot",
    language_progress: "24h progress",
    language_traffic: "7d reach",
    language_ack: "7d ACKs",
    language_score: "Avg score",
    freshness_eyebrow: "Data Freshness",
    freshness_title: "Can I trust this run?",
    tasks_eyebrow: "Today",
    tasks_title: "Do these 5 things",
    funnel_eyebrow: "Growth Funnel",
    funnel_title: "Where growth is leaking",
    evidence_eyebrow: "AI Evidence",
    evidence_title: "Why the AI suggested this",
    open: "Open",
    copy: "Copy",
    done: "Done",
  },
  zh: {
    nav_overview: "总览",
    nav_language: "语言",
    nav_tasks: "任务",
    nav_funnel: "漏斗",
    nav_trend: "趋势",
    nav_posts: "已发内容",
    nav_advice: "AI 建议",
    nav_drafts: "回复草稿",
    nav_cost: "成本",
    auto_update: "自动更新",
    eyebrow: "Linus Shyu / X 增长",
    title: "一眼看懂推特增长、内容和 AI 建议。",
    refresh: "刷新",
    open_x: "打开 X",
    followers: "粉丝",
    posts_24h: "24h 发帖",
    traffic_7d: "7日触达",
    api_left: "API 剩余",
    ai_today: "今日 AI",
    open_route: "打开路线",
    copy_best: "复制最佳草稿",
    growth_trend: "增长趋势",
    trend_title: "粉丝、触达、发帖节奏",
    reach_chart: "触达趋势",
    cost_chart: "X API 花费",
    posted_content: "已发内容",
    posts_title: "机器人最近发了什么",
    reply_queue: "回复队列",
    drafts_title: "手动复制粘贴的回复草稿",
    ai_reasoning: "AI 判断",
    advice_title: "系统认为下一步该做什么",
    cost_guard: "成本保护",
    cost_title: "低成本增长",
    used: "已用",
    live: "实时数据",
    stale: "数据较旧",
    offline: "离线数据",
    copied: "已复制",
    no_posts: "同步数据里暂无近期发帖。",
    no_drafts: "当前没有回复草稿。运行 growth maintenance 生成。",
    no_advice: "当前数据里没有 AI 建议。",
    language_eyebrow: "语言轨道",
    language_title: "中文和英文按各自时区独立运行",
    language_next: "下个窗口",
    language_progress: "24h 进度",
    language_traffic: "7日触达",
    language_ack: "7日互动",
    language_score: "平均分",
    freshness_eyebrow: "数据新鲜度",
    freshness_title: "这次判断可信吗？",
    tasks_eyebrow: "今日",
    tasks_title: "照着做这 5 件事",
    funnel_eyebrow: "增长漏斗",
    funnel_title: "增长卡在哪一步",
    evidence_eyebrow: "AI 证据",
    evidence_title: "AI 为什么这么建议",
    open: "打开",
    copy: "复制",
    done: "完成",
  },
};

let dashboardData = fallbackData;
let refreshTimer = null;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const lang = () => document.documentElement.dataset.lang || "en";
const t = (key) => I18N[lang()]?.[key] || I18N.en[key] || key;

function formatNumber(value, digits = 0) {
  if (value === null || value === undefined || value === "") return "-";
  const number = Number(value);
  if (!Number.isFinite(number)) return "-";
  return new Intl.NumberFormat(lang() === "zh" ? "zh-CN" : "en-US", {
    maximumFractionDigits: digits,
  }).format(number);
}

function formatUsd(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return "-";
  return `$${number.toFixed(2)}`;
}

function formatDate(value) {
  const ms = Date.parse(value || "");
  if (!Number.isFinite(ms)) return "-";
  return new Intl.DateTimeFormat(lang() === "zh" ? "zh-CN" : "en-US", {
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(ms));
}

function formatRelativeAge(value) {
  const minutes = ageMinutes(value);
  if (minutes == null) return lang() === "zh" ? "未知" : "unknown";
  if (minutes < 60) return lang() === "zh" ? `${minutes} 分钟前` : `${minutes}m ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 48) return lang() === "zh" ? `${hours} 小时前` : `${hours}h ago`;
  const days = Math.round(hours / 24);
  return lang() === "zh" ? `${days} 天前` : `${days}d ago`;
}

function formatUtcHours(hours = []) {
  const labels = (hours || [])
    .map((hour) => Number.parseInt(hour, 10))
    .filter((hour) => Number.isInteger(hour) && hour >= 0 && hour <= 23)
    .map((hour) => `${String(hour).padStart(2, "0")}:00`);
  return labels.length ? `${labels.join(" / ")} UTC` : "-";
}

function languageTrackDefaults() {
  return fallbackData.languageTracks.tracks;
}

function ageMinutes(value) {
  const ms = Date.parse(value || "");
  if (!Number.isFinite(ms)) return null;
  return Math.max(0, Math.round((Date.now() - ms) / 60000));
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[char]);
}

function applyTranslations() {
  $$("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
}

function setPreferenceButtons() {
  $$("[data-theme-value]").forEach((button) => {
    button.classList.toggle("active", button.dataset.themeValue === document.documentElement.dataset.theme);
  });
  $$("[data-lang-value]").forEach((button) => {
    button.classList.toggle("active", button.dataset.langValue === lang());
  });
}

function trendPoints(data) {
  return data?.charts?.impressions7d?.points?.length
    ? data.charts.impressions7d.points
    : data?.charts?.impressions24h?.points || [];
}

function costPoints(data) {
  return data?.charts?.xApiSpendDaily?.points?.length
    ? data.charts.xApiSpendDaily.points
    : (data?.api?.days || []).map((day) => ({ label: day.label || day.date, value: day.usd || 0 }));
}

function renderLineChart(selector, points, options = {}) {
  const svg = $(selector);
  if (!svg) return;
  const values = points.map((point) => Number(point.value) || 0);
  const max = Math.max(1, ...values);
  const width = 640;
  const height = 220;
  const pad = 28;
  const xStep = points.length > 1 ? (width - pad * 2) / (points.length - 1) : 0;
  const coords = points.map((point, index) => {
    const x = pad + index * xStep;
    const y = height - pad - ((Number(point.value) || 0) / max) * (height - pad * 2);
    return { x, y, point };
  });
  const path = coords.map((item, index) => `${index ? "L" : "M"}${item.x.toFixed(1)} ${item.y.toFixed(1)}`).join(" ");
  const area = `${path} L ${coords.at(-1)?.x || pad} ${height - pad} L ${pad} ${height - pad} Z`;
  const labels = coords
    .filter((_, index) => index === 0 || index === coords.length - 1 || index % 2 === 1)
    .map((item) => `<text class="chart-label" x="${item.x}" y="${height - 5}" text-anchor="middle">${escapeHtml(item.point.label || "")}</text>`)
    .join("");
  svg.innerHTML = `
    <line class="axis" x1="${pad}" y1="${height - pad}" x2="${width - pad}" y2="${height - pad}"></line>
    <line class="axis" x1="${pad}" y1="${pad}" x2="${pad}" y2="${height - pad}"></line>
    ${coords.length ? `<path class="area" d="${area}"></path><path class="line" d="${path}"></path>` : ""}
    ${coords.map((item) => `<circle cx="${item.x}" cy="${item.y}" r="5" fill="var(--accent)"><title>${escapeHtml(item.point.label)}: ${formatNumber(item.point.value, options.digits || 0)}</title></circle>`).join("")}
    ${labels}
  `;
}

function renderBarChart(selector, points) {
  const svg = $(selector);
  if (!svg) return;
  const width = 640;
  const height = 220;
  const pad = 28;
  const max = Math.max(1, ...points.map((point) => Number(point.value) || Number(point.usd) || 0));
  const gap = 10;
  const barWidth = points.length ? (width - pad * 2 - gap * (points.length - 1)) / points.length : 0;
  const bars = points.map((point, index) => {
    const value = Number(point.value) || Number(point.usd) || 0;
    const barHeight = (value / max) * (height - pad * 2);
    const x = pad + index * (barWidth + gap);
    const y = height - pad - barHeight;
    return `<rect class="bar" x="${x}" y="${y}" width="${Math.max(4, barWidth)}" height="${barHeight}" rx="8"><title>${escapeHtml(point.label || point.date)}: ${formatUsd(value)}</title></rect>`;
  }).join("");
  const labels = points
    .filter((_, index) => index === 0 || index === points.length - 1 || index % 2 === 1)
    .map((point, index) => {
      const originalIndex = points.indexOf(point);
      const x = pad + originalIndex * (barWidth + gap) + barWidth / 2;
      return `<text class="chart-label" x="${x}" y="${height - 5}" text-anchor="middle">${escapeHtml(point.label || "")}</text>`;
    })
    .join("");
  svg.innerHTML = `
    <line class="axis" x1="${pad}" y1="${height - pad}" x2="${width - pad}" y2="${height - pad}"></line>
    ${bars}
    ${labels}
  `;
}

function bestDraft(data) {
  return data?.opportunities?.find((item) => item.draftText)?.draftText || data?.drafts?.[0]?.text || "";
}

function routeHref(data) {
  return data?.opportunities?.find((item) => item.routeUrl)?.routeUrl ||
    data?.actions?.find((item) => item.url)?.url ||
    "https://x.com/Linus_Shyu";
}

function taskStateKey(data) {
  return `xbot-dashboard-tasks:${String(data?.updatedAt || "").slice(0, 10)}`;
}

function taskDoneSet(data) {
  try {
    return new Set(JSON.parse(localStorage.getItem(taskStateKey(data)) || "[]"));
  } catch {
    return new Set();
  }
}

function setTaskDone(data, id, done) {
  const set = taskDoneSet(data);
  if (done) set.add(id);
  else set.delete(id);
  localStorage.setItem(taskStateKey(data), JSON.stringify([...set]));
}

function latestTelemetryAt(data) {
  const values = [
    data?.telemetry?.tweetMetricsCheckedAt,
    data?.telemetry?.accountCheckedAt,
    data?.telemetry?.checkedAt,
    data?.telemetry?.analyticsUpdatedAt,
    data?.telemetry?.dashboardUpdatedAt,
    data?.updatedAt,
  ].filter(Boolean);
  return values
    .map((value) => ({ value, ms: Date.parse(value) }))
    .filter((item) => Number.isFinite(item.ms))
    .sort((a, b) => b.ms - a.ms)[0]?.value || null;
}

function freshnessRows(data) {
  const telemetry = data.telemetry || {};
  const dashboardAt = telemetry.dashboardUpdatedAt || data.updatedAt;
  const metricsAt = telemetry.tweetMetricsCheckedAt || telemetry.checkedAt;
  const accountAt = telemetry.accountCheckedAt || data.profile?.followerCheckedAt;
  const rows = [
    {
      label: lang() === "zh" ? "Dashboard 同步" : "Dashboard sync",
      detail: dashboardAt ? `${formatDate(dashboardAt)} · ${formatRelativeAge(dashboardAt)}` : "missing",
      state: ageMinutes(dashboardAt) != null && ageMinutes(dashboardAt) <= 24 * 60 ? "ok" : "warn",
    },
    {
      label: lang() === "zh" ? "X 指标" : "X metrics",
      detail: metricsAt ? `${formatDate(metricsAt)} · ${formatRelativeAge(metricsAt)}` : (lang() === "zh" ? "等待 metrics_report" : "waiting for metrics_report"),
      state: metricsAt ? (ageMinutes(metricsAt) <= 36 * 60 ? "ok" : "warn") : "danger",
    },
    {
      label: lang() === "zh" ? "粉丝快照" : "Follower snapshot",
      detail: accountAt ? `${formatDate(accountAt)} · ${formatRelativeAge(accountAt)}` : (lang() === "zh" ? "等待账号快照" : "waiting for account snapshot"),
      state: accountAt ? (ageMinutes(accountAt) <= 7 * 24 * 60 ? "ok" : "warn") : "danger",
    },
    {
      label: lang() === "zh" ? "刷新模式" : "Refresh mode",
      detail: telemetry.cachedOnlyRefresh
        ? `${telemetry.refreshMode || "cached"} · ${telemetry.cachedReason || "cached_only"}`
        : `${telemetry.refreshMode || "live"} · metrics refreshed`,
      state: telemetry.cachedOnlyRefresh ? "warn" : "ok",
    },
  ];
  return rows;
}

function buildDailyTasks(data) {
  const opportunity = data.opportunities?.[0] || {};
  const action = data.actions?.[0] || {};
  const topPost = data.last7d?.topPosts?.[0] || data.last24h?.topPosts?.[0] || {};
  const routeUrl = routeHref(data);
  const draft = bestDraft(data);
  return [
    {
      id: "check-freshness",
      title: lang() === "zh" ? "先看数据新鲜度" : "Check data freshness first",
      detail: lang() === "zh"
        ? "如果 X 指标或粉丝快照缺失，先跑 growth maintenance 的 metrics_report。"
        : "If X metrics or follower snapshot is missing, run growth maintenance in metrics_report mode.",
    },
    {
      id: "open-route",
      title: lang() === "zh" ? `打开路线：${opportunity.routeLabel || action.label || "Target Accounts"}` : `Open route: ${opportunity.routeLabel || action.label || "Target Accounts"}`,
      detail: opportunity.reason || action.reason || (lang() === "zh" ? "进入高信号技术讨论。" : "Enter high-signal tech conversations."),
      url: routeUrl,
    },
    {
      id: "copy-draft",
      title: lang() === "zh" ? "复制最佳回复草稿" : "Copy the best reply draft",
      detail: draft || (lang() === "zh" ? "当前没有草稿，先跑维护任务。" : "No draft available; run maintenance first."),
      copy: draft,
    },
    {
      id: "reply-three",
      title: lang() === "zh" ? "只回复 3 个高质量讨论" : "Reply to only 3 high-quality threads",
      detail: lang() === "zh"
        ? "不要乱贴；只选最新、相关、有真实技术讨论的帖子。"
        : "Do not spray replies; choose fresh, relevant threads with real technical discussion.",
    },
    {
      id: "review-winner",
      title: lang() === "zh" ? "复盘最近最强内容" : "Review the strongest recent post",
      detail: topPost.text || (lang() === "zh" ? "等待下一次发帖数据。" : "Waiting for post data."),
      url: topPost.url,
    },
  ];
}

function funnelRows(data) {
  const last7d = data.last7d || {};
  const profile = data.profile || {};
  const topPosts = [...(data.last24h?.topPosts || []), ...(data.last7d?.topPosts || [])];
  const engagement = (Number(last7d.likes) || 0) + (Number(last7d.reposts) || 0) + (Number(last7d.replies) || 0);
  const profileClicks = topPosts.reduce((sum, post) => sum + (Number(post.profileClicks) || 0), 0);
  const hasProfileClicks = topPosts.some((post) => Number.isFinite(Number(post.profileClicks)));
  const followerDelta = Number(profile.followerDelta);
  const leakStages = data.growthLeakProfiler?.stages || [];
  const stageScore = (id, fallback) => {
    const stage = leakStages.find((item) => item.id === id);
    return Number.isFinite(Number(stage?.score)) ? Number(stage.score) : fallback;
  };
  return [
    {
      label: lang() === "zh" ? "发帖" : "Posts",
      detail: lang() === "zh" ? "过去 7 天发布量" : "7d publishing volume",
      value: formatNumber(last7d.posts),
      pct: Math.min(100, (Number(last7d.posts) || 0) * 8),
    },
    {
      label: lang() === "zh" ? "触达" : "Reach",
      detail: lang() === "zh" ? "曝光/阅读，缺失时说明 metrics 没刷新" : "Impressions/reach; missing means metrics are stale",
      value: Number(last7d.impressions) > 0 ? formatNumber(last7d.impressions) : (lang() === "zh" ? "待刷新" : "pending"),
      pct: stageScore("l7_input", Number(last7d.impressions) > 0 ? 50 : 0),
    },
    {
      label: lang() === "zh" ? "互动" : "Engagement",
      detail: lang() === "zh" ? "likes + reposts + replies" : "likes + reposts + replies",
      value: formatNumber(engagement),
      pct: stageScore("ack_layer", Math.min(100, engagement * 8)),
    },
    {
      label: lang() === "zh" ? "主页点击" : "Profile clicks",
      detail: lang() === "zh" ? "当前数据源缺失 profile click 时不伪造" : "Shown only when source metrics include profile clicks",
      value: hasProfileClicks ? formatNumber(profileClicks) : (lang() === "zh" ? "待指标" : "waiting"),
      pct: stageScore("profile_proxy", hasProfileClicks ? Math.min(100, profileClicks * 10) : 3),
    },
    {
      label: lang() === "zh" ? "粉丝变化" : "Follower delta",
      detail: lang() === "zh" ? "账号快照之间的变化" : "Change between account snapshots",
      value: Number.isFinite(followerDelta) ? `${followerDelta >= 0 ? "+" : ""}${formatNumber(followerDelta)}` : (lang() === "zh" ? "待快照" : "waiting"),
      pct: stageScore("active_conn", Number.isFinite(followerDelta) ? Math.max(0, Math.min(100, 45 + followerDelta * 10)) : 0),
    },
  ];
}

function evidenceCards(data) {
  const opportunity = data.opportunities?.[0] || {};
  const topPost = data.last7d?.topPosts?.[0] || data.last24h?.topPosts?.[0] || {};
  const learning = data.learning || {};
  const leak = data.growthLeakProfiler?.primaryLeak || {};
  const policy = data.cachedGenerationPolicy || {};
  return [
    {
      title: lang() === "zh" ? "建议来源" : "Suggested move",
      meta: opportunity.confidence || opportunity.kind || "AI",
      text: opportunity.reason || data.diagnosis?.[0] || t("no_advice"),
      detail: opportunity.evidence || "",
      url: opportunity.routeUrl,
    },
    {
      title: lang() === "zh" ? "参考推文" : "Reference post",
      meta: topPost.template || topPost.source || "recent post",
      text: topPost.text || (lang() === "zh" ? "没有最近推文证据。" : "No recent post evidence."),
      detail: `${formatNumber(topPost.impressions)} reach · ${formatNumber(topPost.likes)} likes · score ${formatNumber(topPost.score, 1)}`,
      url: topPost.url,
    },
    {
      title: lang() === "zh" ? "学习结论" : "Learning signal",
      meta: learning.confidenceZh && lang() === "zh" ? learning.confidenceZh : learning.confidence,
      text: lang() === "zh" ? learning.nextExperimentZh || learning.nextExperiment : learning.nextExperiment,
      detail: learning.bestHook ? `best hook: ${learning.bestHook.label || learning.bestHook.id}` : (policy.primaryFormatId ? `primary format: ${policy.primaryFormatId}` : ""),
    },
    {
      title: lang() === "zh" ? "漏斗瓶颈" : "Funnel bottleneck",
      meta: leak.status || data.growthLeakProfiler?.severity,
      text: leak.nextAction || data.growthLeakProfiler?.nextAction || "",
      detail: leak.label ? `${leak.label} · leak ${formatNumber(leak.leakPct, 1)}%` : "",
    },
    {
      title: lang() === "zh" ? "数据来源" : "Data basis",
      meta: data.telemetry?.refreshMode || "dashboard",
      text: lang() === "zh"
        ? `最近真实指标：${latestTelemetryAt(data) ? formatDate(latestTelemetryAt(data)) : "缺失"}。Dashboard 同步：${formatDate(data.updatedAt)}。`
        : `Latest real metric: ${latestTelemetryAt(data) ? formatDate(latestTelemetryAt(data)) : "missing"}. Dashboard sync: ${formatDate(data.updatedAt)}.`,
      detail: data.telemetry?.cachedOnlyRefresh ? "cached_only refresh; no extra X reads" : "metrics refreshed",
    },
  ].filter((item) => item.text || item.detail);
}

function renderHero(data) {
  const profile = data.profile || {};
  const last24h = data.last24h || {};
  const last7d = data.last7d || {};
  const api = data.api || {};
  const staleAge = ageMinutes(data.telemetry?.dashboardUpdatedAt || data.updatedAt);
  const isStale = staleAge != null && staleAge > 60 * 24;
  const pill = $("#freshness-pill");
  pill.textContent = isStale ? t("stale") : t("live");
  pill.classList.toggle("stale", isStale);
  pill.classList.remove("offline");
  $("#updated-at").textContent = formatDate(data.updatedAt);
  $("#rail-sync").textContent = `${formatDate(data.updatedAt)} · ${isStale ? t("stale") : t("live")}`;

  const reach = Number(last7d.impressions ?? last7d.reach ?? 0) || 0;
  const reachPending = reach === 0 && Number(last7d.posts || 0) > 0;
  const posts = Number(last24h.posts || 0);
  const likes = Number(last24h.likes || 0);
  const replies = Number(last24h.replies || 0);
  const delta = Number(profile.followerDelta);
  const deltaText = Number.isFinite(delta)
    ? lang() === "zh"
      ? `较上次 ${delta >= 0 ? "+" : ""}${delta}`
      : `${delta >= 0 ? "+" : ""}${delta} since last check`
    : lang() === "zh"
      ? "暂无粉丝变化"
      : "no follower delta";

  $("#metric-followers").textContent = formatNumber(profile.followers);
  $("#metric-follower-delta").textContent = deltaText;
  $("#metric-posts").textContent = formatNumber(posts);
  $("#metric-engagement").textContent = `${formatNumber(likes)} likes · ${formatNumber(replies)} replies`;
  $("#metric-reach").textContent = reachPending ? "-" : formatNumber(reach);
  $("#metric-score").textContent = `score ${formatNumber(profile.baselineScore, 1)} · ${formatNumber(profile.measuredPosts)} measured`;
  $("#metric-api").textContent = formatUsd(api.remaining);
  $("#metric-api-spend").textContent = `${formatUsd(api.spend)} / ${formatUsd(api.cap)}`;

  const followerText = profile.followers == null
    ? lang() === "zh"
      ? "粉丝数等待下一次账号快照更新。"
      : "Follower count is waiting for the next account snapshot."
    : lang() === "zh"
      ? `${formatNumber(profile.followers)} 粉丝，${deltaText}。`
      : `${formatNumber(profile.followers)} followers, ${deltaText}.`;
  $("#growth-headline").textContent = lang() === "zh"
    ? `过去 7 天发了 ${formatNumber(last7d.posts)} 条，${reachPending ? "触达数据待更新" : `触达 ${formatNumber(reach)}`}。`
    : `${formatNumber(last7d.posts)} posts shipped in 7d, ${reachPending ? "reach data pending" : `${formatNumber(reach)} reach`}.`;
  $("#growth-summary").textContent = lang() === "zh"
    ? `${followerText} 当前重点不是多发，而是把好内容送到更大的讨论里。`
    : `${followerText} The current job is not just posting more; it is routing strong takes into larger conversations.`;
}

function renderPrimaryAdvice(data) {
  const opportunity = data.opportunities?.[0] || {};
  const action = data.actions?.[0] || {};
  const diagnosis = data.diagnosis?.[0] || "";
  $("#primary-advice-title").textContent = opportunity.label || action.label || "Next best move";
  $("#primary-advice").textContent = opportunity.reason || action.reason || diagnosis || t("no_advice");
  $("#primary-route").href = routeHref(data);
}

function renderPosts(data) {
  const posts = [...(data.last24h?.topPosts || []), ...(data.last7d?.topPosts || [])]
    .filter((post, index, list) => post?.id && list.findIndex((item) => item.id === post.id) === index)
    .slice(0, 10);
  $("#post-list").innerHTML = posts.length ? posts.map((post) => `
    <article class="post-card">
      <div class="post-meta">
        <span class="tag">${escapeHtml(post.template || post.source || "post")}</span>
        <span>${formatDate(post.postedAt)}</span>
        <span>score ${formatNumber(post.score, 1)}</span>
      </div>
      <p>${escapeHtml(post.text || "")}</p>
      <div class="post-stats">
        <span>${formatNumber(post.impressions)} reach</span>
        <span>${formatNumber(post.likes)} likes</span>
        <span>${formatNumber(post.reposts)} reposts</span>
        <span>${formatNumber(post.replies)} replies</span>
        ${post.url ? `<a class="link-button" href="${escapeHtml(post.url)}" target="_blank" rel="noreferrer">Open</a>` : ""}
      </div>
    </article>
  `).join("") : `<div class="empty">${t("no_posts")}</div>`;
}

function renderDrafts(data) {
  const drafts = (data.drafts || []).slice(0, 8);
  $("#draft-list").innerHTML = drafts.length ? drafts.map((draft, index) => `
    <article class="draft-card">
      <div class="draft-meta">
        <span class="tag">${escapeHtml(draft.angle || `draft ${index + 1}`)}</span>
        <span>${escapeHtml(draft.title || "Manual reply")}</span>
      </div>
      <p>${escapeHtml(draft.text || "")}</p>
      <button class="copy-button" type="button" data-copy="${escapeHtml(draft.text || "")}">Copy</button>
    </article>
  `).join("") : `<div class="empty">${t("no_drafts")}</div>`;
}

function renderAdvice(data) {
  const items = [
    ...(data.diagnosis || []).map((text, index) => ({ title: `Diagnosis ${index + 1}`, text })),
    ...(data.opportunities || []).slice(0, 4).map((item) => ({
      title: item.label,
      text: item.reason || item.evidence || item.draftText,
      meta: item.confidence || item.kind,
    })),
  ].filter((item) => item.text).slice(0, 8);
  $("#advice-list").innerHTML = items.length ? items.map((item) => `
    <article class="advice-card">
      <div class="advice-meta">
        <span class="tag">${escapeHtml(item.meta || "AI")}</span>
        <span>${escapeHtml(item.title || "Advice")}</span>
      </div>
      <p>${escapeHtml(item.text)}</p>
    </article>
  `).join("") : `<div class="empty">${t("no_advice")}</div>`;
}

function renderCost(data) {
  const api = data.api || {};
  const spend = Number(api.spend) || 0;
  const cap = Number(api.cap) || 0;
  const pct = cap > 0 ? Math.min(100, Math.max(0, (spend / cap) * 100)) : 0;
  $("#cost-ring").style.setProperty("--cost-used", `${pct}%`);
  $("#cost-percent").textContent = `${formatNumber(pct, 1)}%`;
  $("#cost-summary").textContent = lang() === "zh"
    ? `本月已花 ${formatUsd(spend)}，上限 ${formatUsd(cap)}，剩余 ${formatUsd(api.remaining)}。页面自动更新不增加 X API 读取。`
    : `${formatUsd(spend)} spent this month against a ${formatUsd(cap)} cap, ${formatUsd(api.remaining)} left. Dashboard refresh adds no X API reads.`;
  $("#endpoint-list").innerHTML = (api.endpoints || []).slice(0, 6).map((endpoint) => `
    <div class="endpoint-row">
      <strong>${escapeHtml(endpoint.name)}</strong>
      <span>${formatNumber(endpoint.calls)} calls</span>
      <span>${formatUsd(endpoint.usd)}</span>
    </div>
  `).join("");
}

function renderFreshness(data) {
  $("#freshness-list").innerHTML = freshnessRows(data).map((row) => `
    <div class="freshness-row">
      <div>
        <strong>${escapeHtml(row.label)}</strong>
        <span>${escapeHtml(row.detail)}</span>
      </div>
      <em class="freshness-state ${row.state === "ok" ? "" : row.state}">${row.state === "ok" ? "OK" : row.state.toUpperCase()}</em>
    </div>
  `).join("");
}

function renderTasks(data) {
  const done = taskDoneSet(data);
  $("#task-list").innerHTML = buildDailyTasks(data).map((task, index) => `
    <article class="task-card ${done.has(task.id) ? "done" : ""}" data-task-id="${escapeHtml(task.id)}">
      <button class="task-check" type="button" data-task-toggle="${escapeHtml(task.id)}" aria-label="${escapeHtml(t("done"))}">${done.has(task.id) ? "✓" : index + 1}</button>
      <div>
        <strong>${escapeHtml(task.title)}</strong>
        <span>${escapeHtml(task.detail || "")}</span>
        <div class="task-actions">
          ${task.url ? `<a class="link-button" href="${escapeHtml(task.url)}" target="_blank" rel="noreferrer">${escapeHtml(t("open"))}</a>` : ""}
          ${task.copy ? `<button class="copy-button" type="button" data-copy="${escapeHtml(task.copy)}">${escapeHtml(t("copy"))}</button>` : ""}
        </div>
      </div>
    </article>
  `).join("");
}

function renderFunnel(data) {
  $("#funnel-list").innerHTML = funnelRows(data).map((row) => {
    const pct = Math.max(0, Math.min(100, Number(row.pct) || 0));
    return `
      <div class="funnel-row">
        <div>
          <strong>${escapeHtml(row.label)}</strong>
          <span>${escapeHtml(row.detail)}</span>
        </div>
        <div class="funnel-bar" aria-label="${escapeHtml(row.label)} ${formatNumber(pct, 1)}%">
          <div style="width:${pct}%"></div>
        </div>
        <div class="funnel-value">${escapeHtml(row.value)}</div>
      </div>
    `;
  }).join("");
}

function renderLanguageTracks(data) {
  const sourceTracks = data.languageTracks?.tracks?.length
    ? data.languageTracks.tracks
    : languageTrackDefaults();
  const sorted = [...sourceTracks].sort((left, right) => {
    const order = { zh: 0, en: 1 };
    return (order[left.id] ?? 9) - (order[right.id] ?? 9);
  });
  $("#language-track-grid").innerHTML = sorted.map((track) => {
    const progress = Math.max(
      0,
      Math.min(100, (Number(track.packetsLast24h) / Math.max(1, Number(track.dailyTarget) || 1)) * 100),
    );
    const nextSlot = track.nextWindow?.label || formatUtcHours((track.utcHours || []).slice(0, 1));
    const status = String(track.status || "scheduled").toLowerCase();
    const label = track.id === "zh"
      ? (lang() === "zh" ? "中文" : "Chinese")
      : (lang() === "zh" ? "英文" : "English");
    return `
      <article class="language-track-card">
        <div class="language-track-head">
          <div>
            <span class="language-track-code">${escapeHtml(track.label || track.id?.toUpperCase() || "-")}</span>
            <strong>${escapeHtml(label)}</strong>
            <span>${escapeHtml(formatUtcHours(track.utcHours || []))}</span>
          </div>
          <em class="language-track-status ${escapeHtml(status)}">${escapeHtml(status)}</em>
        </div>
        <div class="language-track-progress">
          <span>${escapeHtml(t("language_progress"))}: ${formatNumber(track.packetsLast24h)}/${formatNumber(track.dailyTarget)}</span>
          <div><span style="width:${progress}%"></span></div>
        </div>
        <div class="language-track-meta">
          <span>${escapeHtml(t("language_next"))}: ${escapeHtml(nextSlot)}</span>
          <span>${escapeHtml(data.languageTracks?.mode || "timezone")}</span>
          <span>0 X reads</span>
        </div>
        <div class="language-track-kpis">
          <div><span>${escapeHtml(t("language_traffic"))}</span><b>${formatNumber(track.traffic7d)}</b></div>
          <div><span>${escapeHtml(t("language_ack"))}</span><b>${formatNumber(track.ack7d)}</b></div>
          <div><span>${escapeHtml(t("language_score"))}</span><b>${formatNumber(track.avgScore, 1)}</b></div>
        </div>
        <span>${escapeHtml(track.nextAction || "")}</span>
      </article>
    `;
  }).join("");
}

function renderEvidence(data) {
  $("#evidence-grid").innerHTML = evidenceCards(data).map((card) => `
    <article class="evidence-card">
      <span class="tag">${escapeHtml(card.meta || "signal")}</span>
      <strong>${escapeHtml(card.title)}</strong>
      <p>${escapeHtml(card.text || "")}</p>
      ${card.detail ? `<span>${escapeHtml(card.detail)}</span>` : ""}
      <div class="evidence-links">
        ${card.url ? `<a class="link-button" href="${escapeHtml(card.url)}" target="_blank" rel="noreferrer">${escapeHtml(t("open"))}</a>` : ""}
      </div>
    </article>
  `).join("");
}

function renderCharts(data) {
  const reach = trendPoints(data);
  const cost = costPoints(data);
  $("#reach-total").textContent = `${formatNumber(data.last7d?.impressions || data.charts?.impressions7d?.total)} total`;
  $("#cost-total").textContent = `${formatUsd(data.api?.spend)} month`;
  renderLineChart("#reach-chart", reach);
  renderBarChart("#cost-chart", cost);
}

function render(data) {
  dashboardData = data || fallbackData;
  applyTranslations();
  setPreferenceButtons();
  renderHero(dashboardData);
  renderPrimaryAdvice(dashboardData);
  renderLanguageTracks(dashboardData);
  renderFreshness(dashboardData);
  renderTasks(dashboardData);
  renderFunnel(dashboardData);
  renderCharts(dashboardData);
  renderPosts(dashboardData);
  renderDrafts(dashboardData);
  renderAdvice(dashboardData);
  renderCost(dashboardData);
  renderEvidence(dashboardData);
  $("#copyright-year").textContent = new Date().getFullYear();
  $("#footer-sync").textContent = `Auto-updated from GitHub Actions · ${formatDate(dashboardData.updatedAt)}`;
}

async function loadDashboardData({ silent = false } = {}) {
  try {
    const response = await fetch(`./data.json?ts=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    render(data);
    if (!silent) showToast("Dashboard data refreshed.");
  } catch (error) {
    render(dashboardData || fallbackData);
    const pill = $("#freshness-pill");
    pill.textContent = t("offline");
    pill.classList.add("offline");
    if (!silent) showToast(`Could not refresh data: ${error.message}`);
  }
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function copyText(text) {
  if (!text) return;
  navigator.clipboard?.writeText(text).then(
    () => showToast(t("copied")),
    () => showToast(text),
  );
}

function bindEvents() {
  $$("[data-theme-value]").forEach((button) => {
    button.addEventListener("click", () => {
      document.documentElement.dataset.theme = button.dataset.themeValue;
      localStorage.setItem("xbot-dashboard-theme", button.dataset.themeValue);
      setPreferenceButtons();
    });
  });
  $$("[data-lang-value]").forEach((button) => {
    button.addEventListener("click", () => {
      document.documentElement.dataset.lang = button.dataset.langValue;
      document.documentElement.lang = button.dataset.langValue === "zh" ? "zh-CN" : "en";
      localStorage.setItem("xbot-dashboard-lang", button.dataset.langValue);
      render(dashboardData);
    });
  });
  $("#refresh-button")?.addEventListener("click", () => loadDashboardData());
  $("#copy-best-draft")?.addEventListener("click", () => copyText(bestDraft(dashboardData)));
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-copy]");
    if (button) copyText(button.dataset.copy);
    const taskButton = event.target.closest("[data-task-toggle]");
    if (taskButton) {
      const id = taskButton.dataset.taskToggle;
      const done = taskDoneSet(dashboardData);
      setTaskDone(dashboardData, id, !done.has(id));
      renderTasks(dashboardData);
    }
  });
}

bindEvents();
render(fallbackData);
loadDashboardData({ silent: true });
refreshTimer = window.setInterval(() => loadDashboardData({ silent: true }), 60000);
