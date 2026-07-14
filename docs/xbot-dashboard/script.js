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
  api: { spend: 0, cap: 5, remaining: 5, endpoints: [], days: [] },
  openai: { calls: 0, failures: 0, totalEstimatedUsd: 0 },
};

const I18N = {
  en: {
    nav_overview: "Overview",
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
  },
  zh: {
    nav_overview: "总览",
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
  renderCharts(dashboardData);
  renderPosts(dashboardData);
  renderDrafts(dashboardData);
  renderAdvice(dashboardData);
  renderCost(dashboardData);
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
  });
}

bindEvents();
render(fallbackData);
loadDashboardData({ silent: true });
refreshTimer = window.setInterval(() => loadDashboardData({ silent: true }), 60000);
