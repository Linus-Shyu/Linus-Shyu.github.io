const fallbackData = {
  version: 1,
  updatedAt: "2026-07-06T00:17:43.839Z",
  mode: {
    label: "Zero extra X API",
    description: "Web search links + manual paste replies.",
  },
  profile: {
    followers: 66,
    followerDelta: -1,
    trackedPosts: 120,
    measuredPosts: 120,
    baselineScore: 3.9,
  },
  last24h: {
    posts: 3,
    impressions: 8,
    likes: 0,
    reposts: 0,
    replies: 0,
  },
  last7d: {
    posts: 17,
    impressions: 307,
    likes: 15,
    reposts: 0,
    replies: 3,
    topPosts: [
      {
        score: 7.2,
        impressions: 20,
        likes: 2,
        template: "decision_rule",
        text: "If a workflow already has clear permissions, logs, and rollback, test Claude Sonnet 5 this week.",
        url: "https://x.com/i/web/status/2072393488411365572",
      },
      {
        score: 5.3,
        impressions: 29,
        likes: 1,
        template: "sharp_question",
        text: "Claude Sonnet 5 is not a chatbot launch. It is Anthropic trying to own the coding coworker slot.",
        url: "https://x.com/i/web/status/2072030422519717955",
      },
    ],
  },
  actions: [
    {
      step: 1,
      label: "Target Accounts",
      url: "https://x.com/search?q=(from%3Akarpathy%20OR%20from%3Asama%20OR%20from%3Apaulg%20OR%20from%3Alevelsio%20OR%20from%3Agregisenberg%20OR%20from%3Arauchg%20OR%20from%3Aamasad%20OR%20from%3Adabit3%20OR%20from%3Asvpino%20OR%20from%3Anearcyan)%20(AI%20OR%20tech%20OR%20Apple%20OR%20Google%20OR%20Microsoft%20OR%20startup%20OR%20cloud%20OR%20security%20OR%20app%20OR%20product)%20-is%3Aretweet%20lang%3Aen&src=typed_query&f=live",
      reason: "Use this first; it borrows distribution from high-signal tech accounts.",
      draftIndex: 0,
    },
    {
      step: 2,
      label: "AI / DevTools",
      url: "https://x.com/search?q=(OpenAI%20OR%20Anthropic%20OR%20Cursor%20OR%20Gemini%20OR%20Nvidia%20OR%20%22AI%20coding%22%20OR%20agents)%20(AI%20OR%20model%20OR%20API%20OR%20developer%20OR%20cloud)%20-is%3Aretweet%20lang%3Aen&src=typed_query&f=live",
      reason: "Use this for model launches, coding agents, chips, and AI platform threads.",
      draftIndex: 1,
    },
    {
      step: 3,
      label: "Big Tech / Consumer Tech",
      url: "https://x.com/search?q=(Apple%20OR%20Google%20OR%20Microsoft%20OR%20Meta%20OR%20Amazon%20OR%20Tesla)%20(AI%20OR%20app%20OR%20product%20OR%20privacy%20OR%20security%20OR%20cloud)%20-is%3Aretweet%20lang%3Aen&src=typed_query&f=live",
      reason: "Use this for broader tech posts beyond the AI-builder bubble.",
      draftIndex: 2,
    },
  ],
  drafts: [
    {
      title: "AI product launches",
      text: "Launch rule for AI products: demo quality matters less than failure shape. If users can’t predict when it will be wrong, support cost becomes the real roadmap.",
      angle: "hidden cost",
    },
    {
      title: "Big Tech platform shifts",
      text: "Platform shift rule: if a Big Tech change can rewrite your margin, roadmap, or distribution overnight, it is not a partnership. It is rented ground with APIs.",
      angle: "business impact",
    },
    {
      title: "Consumer apps",
      text: "Consumer app distribution is now a product feature. The best UX loses if onboarding depends on app stores, identity gates, notifications, and algorithmic luck all behaving.",
      angle: "distribution tradeoff",
    },
  ],
  diagnosis: [
    "主贴质量不算差，但小账号阶段缺少初始互动，单独发帖很难被系统分发。",
    "瓶颈是分发入口，不是发帖数量。",
    "当前低成本路线是人工点网页搜索、复制回复，避免增加 X search/read API。",
  ],
  api: {
    month: "2026-07",
    spend: 1.33,
    cap: 5,
    endpoints: [
      { name: "OAUTH_REFRESH", calls: 19, failures: 1, usd: 0, lastStatus: 200 },
      { name: "CREATE_TWEET", calls: 17, failures: 0, usd: 0.255, lastStatus: 201 },
      { name: "RECENT_SEARCH", calls: 16, failures: 0, usd: 0, lastStatus: 200 },
      { name: "USER_ME_LOOKUP", calls: 15, failures: 0, usd: 0.35, lastStatus: 200 },
      { name: "TWEET_METRICS_LOOKUP", calls: 13, failures: 0, usd: 0.35, lastStatus: 200 },
      { name: "MEDIA_UPLOAD", calls: 15, failures: 0, usd: 0.375, lastStatus: 200 },
    ],
  },
};

const translations = {
  en: {
    page_title: "X Bot Growth Ops",
    brand_subtitle: "Growth Ops",
    production: "Production",
    nav_overview: "Overview",
    nav_services: "Services",
    nav_workflow: "Workflow",
    nav_queue: "Reply Queue",
    nav_signals: "Signals",
    nav_cost: "Cost",
    x_api_budget: "X API budget",
    top_eyebrow: "X Bot / Production Console",
    title: "X Bot Command Center",
    zero_extra_x_api: "Zero extra X API",
    open_x: "Open X",
    mission_eyebrow: "Mission Control",
    mission_title: "Daily growth loop is ready for manual distribution.",
    mission_copy: "Open the highest-signal tech conversations, paste vetted replies, and keep X API spend flat.",
    live: "Live",
    start_loop: "Start loop",
    copy_top_three: "Copy top 3 drafts",
    deployment: "Deployment",
    followers: "followers",
    impressions_24h_short: "24h Impr.",
    api_left: "API Left",
    next_reply: "Next reply draft",
    server_health: "Server Health",
    runtime_services: "Runtime services",
    no_extra_x_reads: "No extra X reads",
    traffic: "Traffic",
    signal_shape: "7d signal shape",
    posting_pipeline: "Posting Pipeline",
    today_workflow: "Today workflow",
    manual_web_actions: "Manual web actions only",
    runbook: "Runbook",
    operator_notes: "Operator notes",
    cost_note: "Dashboard sync uses GitHub API only. It does not add X API search/read calls.",
    reply_queue: "Reply Queue",
    copy_ready_drafts: "Copy-ready drafts",
    cost_guard: "Cost Guard",
    guarded: "Guarded",
    signal_store: "Signal Store",
    recent_winners: "Recent winners",
    last_7_days: "Last 7 days",
    score: "Score",
    impr: "Impr.",
    likes: "Likes",
    format: "Format",
    tweet: "Tweet",
    copyright_suffix: "All rights reserved.",
    updated: "Updated {date}",
    money_left: "${amount} left",
    spend_cap: "{spend} spent / ${cap} cap",
    no_previous_snapshot: "No previous snapshot",
    since_last_snapshot: "{delta} since last snapshot",
    posts_likes: "{posts} posts · {likes} likes",
    posts_replies: "{posts} posts · {replies} replies",
    spent_month: "{spend} spent in {month}",
    metric_followers: "Followers",
    metric_24h_impressions: "24h impressions",
    metric_7d_signal: "7d signal",
    metric_api_remaining: "API remaining",
    meta_audience: "audience",
    meta_traffic: "traffic",
    meta_observability: "observability",
    meta_budget: "budget",
    svc_news_ingest: "NEWS INGEST",
    svc_draft_queue: "DRAFT QUEUE",
    health_watch: "watch",
    health_ok: "ok",
    health_idle: "idle",
    calls: "{count} calls",
    failures: "{count} failures",
    tracked_impressions: "Tracked impressions",
    low_cost_mode: "Low-cost mode",
    posts_7d: "{posts} posts / 7d",
    queued_for_operator: "queued for operator paste",
    open_search: "Open search",
    copy_draft: "Copy draft",
    copy: "Copy",
    draft_relevant: "Relevant tech post",
    reply_draft: "reply draft",
    endpoint_status: "{calls} calls · status {status}",
    copy_failed: "Copy failed",
    copied: "Copied",
    draft_label: "Draft {index}",
  },
  zh: {
    page_title: "X 机器人增长运维",
    brand_subtitle: "增长运维",
    production: "生产环境",
    nav_overview: "总览",
    nav_services: "服务",
    nav_workflow: "流程",
    nav_queue: "回复队列",
    nav_signals: "信号",
    nav_cost: "成本",
    x_api_budget: "X API 预算",
    top_eyebrow: "X Bot / 生产控制台",
    title: "X Bot 指挥中心",
    zero_extra_x_api: "零额外 X API",
    open_x: "打开 X",
    mission_eyebrow: "任务控制",
    mission_title: "今日增长循环已就绪，等待人工分发。",
    mission_copy: "打开高信号科技讨论，粘贴已审核回复，并保持 X API 花费不增加。",
    live: "在线",
    start_loop: "开始流程",
    copy_top_three: "复制前 3 条草稿",
    deployment: "部署",
    followers: "关注者",
    impressions_24h_short: "24h 曝光",
    api_left: "API 剩余",
    next_reply: "下一条回复草稿",
    server_health: "服务健康",
    runtime_services: "运行服务",
    no_extra_x_reads: "不增加 X 读取",
    traffic: "流量",
    signal_shape: "7 日信号趋势",
    posting_pipeline: "发布流水线",
    today_workflow: "今日流程",
    manual_web_actions: "仅人工网页操作",
    runbook: "运行手册",
    operator_notes: "操作备注",
    cost_note: "看板同步只使用 GitHub API，不增加 X API 搜索/读取调用。",
    reply_queue: "回复队列",
    copy_ready_drafts: "可复制草稿",
    cost_guard: "成本守卫",
    guarded: "已守卫",
    signal_store: "信号库",
    recent_winners: "近期表现最好",
    last_7_days: "最近 7 天",
    score: "评分",
    impr: "曝光",
    likes: "点赞",
    format: "格式",
    tweet: "推文",
    copyright_suffix: "保留所有权利。",
    updated: "更新于 {date}",
    money_left: "剩余 ${amount}",
    spend_cap: "已花 {spend} / 上限 ${cap}",
    no_previous_snapshot: "暂无上次快照",
    since_last_snapshot: "较上次快照 {delta}",
    posts_likes: "{posts} 条帖 · {likes} 赞",
    posts_replies: "{posts} 条帖 · {replies} 条回复",
    spent_month: "{month} 已花 {spend}",
    metric_followers: "关注者",
    metric_24h_impressions: "24h 曝光",
    metric_7d_signal: "7 日信号",
    metric_api_remaining: "API 剩余",
    meta_audience: "受众",
    meta_traffic: "流量",
    meta_observability: "观测",
    meta_budget: "预算",
    svc_news_ingest: "新闻抓取",
    svc_draft_queue: "草稿队列",
    health_watch: "关注",
    health_ok: "正常",
    health_idle: "空闲",
    calls: "{count} 次调用",
    failures: "{count} 次失败",
    tracked_impressions: "跟踪曝光",
    low_cost_mode: "低成本模式",
    posts_7d: "7 日 {posts} 条帖",
    queued_for_operator: "等待人工粘贴",
    open_search: "打开搜索",
    copy_draft: "复制草稿",
    copy: "复制",
    draft_relevant: "相关科技帖子",
    reply_draft: "回复草稿",
    endpoint_status: "{calls} 次调用 · 状态 {status}",
    copy_failed: "复制失败",
    copied: "已复制",
    draft_label: "草稿 {index}",
  },
};

const actionTranslations = {
  zh: {
    "Target Accounts": {
      label: "目标账号",
      reason: "优先使用这个入口，借助高信号科技账号的分发流量。",
    },
    "AI / DevTools": {
      label: "AI / 开发工具",
      reason: "用于模型发布、代码智能体、芯片和 AI 平台相关讨论。",
    },
    "Big Tech / Consumer Tech": {
      label: "大厂 / 消费科技",
      reason: "用于更宽的科技话题，不只局限在 AI 开发者圈层。",
    },
  },
};

const draftTranslations = {
  zh: {
    "AI product launches": "AI 产品发布",
    "Big Tech platform shifts": "大厂平台变化",
    "Consumer apps": "消费应用",
    "hidden cost": "隐藏成本",
    "business impact": "商业影响",
    "distribution tradeoff": "分发权衡",
  },
};

const diagnosisTranslations = {
  en: [
    "The core posts are not the main problem. At small-account scale, distribution starts only after early interaction.",
    "The bottleneck is entry into conversations, not posting volume.",
    "The current low-cost path is manual search links plus copied replies, avoiding extra X search/read API spend.",
  ],
  zh: [
    "主贴质量不算差，但小账号阶段缺少初始互动，单独发帖很难被系统分发。",
    "瓶颈是分发入口，不是发帖数量。",
    "当前低成本路线是人工点网页搜索、复制回复，避免增加 X search/read API。",
  ],
};

const $ = (selector) => document.querySelector(selector);
const number = (value, fallback = 0) => (Number.isFinite(Number(value)) ? Number(value) : fallback);
const money = (value) => `$${number(value).toFixed(3)}`;

let dashboardData = fallbackData;
let currentLang = document.documentElement.dataset.lang === "zh" ? "zh" : "en";
let currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";

function t(key, vars = {}) {
  const value = translations[currentLang]?.[key] ?? translations.en[key] ?? key;
  return value.replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? "");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value || "-");
  return new Intl.DateTimeFormat(currentLang === "zh" ? "zh-CN" : "en", {
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function apiBudget() {
  const api = dashboardData.api || {};
  const spend = number(api.spend);
  const cap = number(api.cap, 5);
  const remaining = Math.max(0, cap - spend);
  const ratio = cap > 0 ? Math.min(100, (spend / cap) * 100) : 0;
  return { api, spend, cap, remaining, ratio };
}

async function loadData() {
  try {
    const response = await fetch(`./data.json?ts=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    dashboardData = await response.json();
  } catch {
    dashboardData = fallbackData;
  }
}

function showToast(message = "Copied") {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1100);
}

async function copyText(text) {
  await navigator.clipboard.writeText(text);
  showToast(t("copied"));
}

function applyChromeText() {
  document.documentElement.dataset.theme = currentTheme;
  document.documentElement.dataset.lang = currentLang;
  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
  document.title = t("page_title");
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-theme-value]").forEach((button) => {
    const active = button.dataset.themeValue === currentTheme;
    const isDarkButton = button.dataset.themeValue === "dark";
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
    button.textContent = currentLang === "zh"
      ? isDarkButton ? "深色" : "浅色"
      : isDarkButton ? "Dark" : "Light";
  });
  document.querySelectorAll("[data-lang-value]").forEach((button) => {
    const active = button.dataset.langValue === currentLang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  $("#copyright-year").textContent = String(new Date().getFullYear());
}

function setTheme(theme) {
  currentTheme = theme === "dark" ? "dark" : "light";
  localStorage.setItem("xbot-dashboard-theme", currentTheme);
  applyChromeText();
}

function setLang(lang) {
  currentLang = lang === "zh" ? "zh" : "en";
  localStorage.setItem("xbot-dashboard-lang", currentLang);
  render();
}

function localizeAction(action) {
  const translated = actionTranslations[currentLang]?.[action.label];
  return {
    ...action,
    label: translated?.label || action.label,
    reason: translated?.reason || action.reason,
  };
}

function localizeDraftMeta(draft, fallbackTitle = "Relevant tech post") {
  const dict = draftTranslations[currentLang] || {};
  return {
    title: dict[draft.title] || draft.title || t("draft_relevant"),
    angle: dict[draft.angle] || draft.angle || t("reply_draft"),
    text: draft.text,
  };
}

function draftFor(index) {
  const drafts = dashboardData.drafts || [];
  return drafts[Math.min(Math.max(0, index), Math.max(0, drafts.length - 1))] || fallbackData.drafts[0];
}

function renderHeader() {
  const updated = formatDate(dashboardData.updatedAt);
  const { spend, cap, remaining, ratio } = apiBudget();
  $("#mode-label").textContent = t("zero_extra_x_api");
  $("#updated-at").textContent = t("updated", { date: updated });
  $("#sync-updated").textContent = updated;
  $("#rail-api-left").textContent = t("money_left", { amount: remaining.toFixed(2) });
  $("#rail-api-spend").textContent = t("spend_cap", { spend: money(spend), cap: cap.toFixed(2) });
  $("#rail-api-meter").style.width = `${ratio}%`;
}

function renderHero() {
  const profile = dashboardData.profile || {};
  const last24h = dashboardData.last24h || {};
  const { remaining } = apiBudget();
  $("#hero-followers").textContent = profile.followers ?? "-";
  $("#hero-impressions").textContent = String(number(last24h.impressions));
  $("#hero-api-left").textContent = `$${remaining.toFixed(2)}`;
  $("#hero-draft").textContent = draftFor(0).text;
}

function renderMetrics() {
  const profile = dashboardData.profile || {};
  const last24h = dashboardData.last24h || {};
  const last7d = dashboardData.last7d || {};
  const { remaining, spend, api } = apiBudget();
  const followerDelta = profile.followerDelta;
  const deltaText = followerDelta == null
    ? t("no_previous_snapshot")
    : t("since_last_snapshot", { delta: `${followerDelta >= 0 ? "+" : ""}${followerDelta}` });

  const cards = [
    {
      label: t("metric_followers"),
      value: profile.followers ?? "-",
      detail: deltaText,
      meta: t("meta_audience"),
    },
    {
      label: t("metric_24h_impressions"),
      value: number(last24h.impressions),
      detail: t("posts_likes", { posts: number(last24h.posts), likes: number(last24h.likes) }),
      meta: t("meta_traffic"),
    },
    {
      label: t("metric_7d_signal"),
      value: number(last7d.impressions),
      detail: t("posts_replies", { posts: number(last7d.posts), replies: number(last7d.replies) }),
      meta: t("meta_observability"),
    },
    {
      label: t("metric_api_remaining"),
      value: `$${remaining.toFixed(2)}`,
      detail: t("spent_month", { spend: money(spend), month: api.month || "-" }),
      meta: t("meta_budget"),
    },
  ];

  $("#metric-grid").innerHTML = cards
    .map(
      (card) => `
        <article class="metric">
          <div>
            <span>${escapeHtml(card.label)}</span>
            <strong>${escapeHtml(card.value)}</strong>
            <small>${escapeHtml(card.detail)}</small>
          </div>
          <em>${escapeHtml(card.meta)}</em>
        </article>
      `,
    )
    .join("");
}

function endpointHealth(endpoint) {
  const failures = number(endpoint.failures);
  const status = number(endpoint.lastStatus);
  if (failures > 0 || status >= 400) return { label: t("health_watch"), className: "warn" };
  if (status >= 200 && status < 300) return { label: t("health_ok"), className: "ok" };
  return { label: t("health_idle"), className: "idle" };
}

function renderServices() {
  const endpoints = (dashboardData.api?.endpoints || fallbackData.api.endpoints).slice(0, 6);
  const synthetic = [
    { name: t("svc_news_ingest"), calls: number(dashboardData.last24h?.posts), failures: 0, usd: 0, lastStatus: 200 },
    { name: t("svc_draft_queue"), calls: (dashboardData.drafts || []).length, failures: 0, usd: 0, lastStatus: 200 },
  ];
  const services = [...synthetic, ...endpoints].slice(0, 8);

  $("#service-grid").innerHTML = services
    .map((service) => {
      const health = endpointHealth(service);
      return `
        <article class="service-card ${health.className}">
          <div class="service-head">
            <span class="health-dot"></span>
            <strong>${escapeHtml(service.name)}</strong>
            <em>${escapeHtml(health.label)}</em>
          </div>
          <div class="service-meta">
            <span>${t("calls", { count: number(service.calls) })}</span>
            <span>${t("failures", { count: number(service.failures) })}</span>
            <span>${money(service.usd || 0)}</span>
          </div>
        </article>
      `;
    })
    .join("");
}

function trendSeries() {
  const posts = dashboardData.last7d?.topPosts || fallbackData.last7d.topPosts || [];
  const base = posts.map((post) => Math.max(1, number(post.impressions) + number(post.likes) * 6 + number(post.replies) * 10));
  while (base.length < 12) {
    const seed = base[base.length - 1] || number(dashboardData.last24h?.impressions, 8);
    base.push(Math.max(1, Math.round(seed * (0.62 + (base.length % 4) * 0.13))));
  }
  return base.slice(0, 12);
}

function renderTrend() {
  const series = trendSeries();
  const max = Math.max(...series, 1);
  $("#trend-bars").innerHTML = `
    <div class="spark-total">
      <span>${t("tracked_impressions")}</span>
      <strong>${number(dashboardData.last7d?.impressions)}</strong>
    </div>
    <div class="spark-bars">
      ${series
        .map((value, index) => {
          const height = Math.max(18, Math.round((value / max) * 100));
          return `<span title="slot ${index + 1}: ${value}" style="height:${height}%"><i></i></span>`;
        })
        .join("")}
    </div>
    <div class="spark-footer">
      <span>${t("low_cost_mode")}</span>
      <strong>${t("posts_7d", { posts: number(dashboardData.last7d?.posts) })}</strong>
    </div>
  `;
}

function renderActions() {
  const actions = dashboardData.actions || fallbackData.actions;
  $("#action-board").innerHTML = actions
    .slice(0, 3)
    .map((action, index) => {
      const localizedAction = localizeAction(action);
      const draft = draftFor(action.draftIndex ?? index);
      return `
        <article class="action-card">
          <div class="action-top">
            <span class="step">${escapeHtml(action.step || index + 1)}</span>
            <div>
              <h3>${escapeHtml(localizedAction.label)}</h3>
              <p>${escapeHtml(localizedAction.reason)}</p>
            </div>
          </div>
          <div class="draft-preview">${escapeHtml(draft.text)}</div>
          <div class="queue-state">
            <span></span>
            <strong>${t("queued_for_operator")}</strong>
          </div>
          <div class="row-actions">
            <a class="button button-primary" href="${escapeHtml(action.url)}" target="_blank" rel="noreferrer">${t("open_search")}</a>
            <button class="button button-secondary" type="button" data-copy="${encodeURIComponent(draft.text)}">${t("copy_draft")}</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderDrafts() {
  const drafts = dashboardData.drafts || fallbackData.drafts;
  $("#draft-list").innerHTML = drafts
    .map(
      (draft, index) => {
        const localizedDraft = localizeDraftMeta(draft);
        return `
        <article class="draft-card">
          <div class="queue-index">${String(index + 1).padStart(2, "0")}</div>
          <div>
            <h3>${escapeHtml(localizedDraft.title)}</h3>
            <p>${escapeHtml(localizedDraft.text)}</p>
            <span class="draft-angle">${escapeHtml(localizedDraft.angle)}</span>
          </div>
          <div class="draft-actions">
            <button class="button button-secondary" type="button" data-copy="${encodeURIComponent(draft.text)}">${t("copy")}</button>
          </div>
        </article>
      `;
      },
    )
    .join("");
}

function renderDiagnosis() {
  const items = diagnosisTranslations[currentLang] || dashboardData.diagnosis || fallbackData.diagnosis;
  $("#diagnosis-list").innerHTML = items
    .map((item, index) => `<li><span>${String(index + 1).padStart(2, "0")}</span>${escapeHtml(item)}</li>`)
    .join("");
}

function renderPosts() {
  const posts = dashboardData.last7d?.topPosts || fallbackData.last7d.topPosts;
  $("#top-posts").innerHTML = posts
    .slice(0, 8)
    .map(
      (post) => `
        <tr>
          <td>${number(post.score).toFixed(1)}</td>
          <td>${number(post.impressions)}</td>
          <td>${number(post.likes)}</td>
          <td><span class="format-pill">${escapeHtml(post.template || "-")}</span></td>
          <td><a class="tweet-link" href="${escapeHtml(post.url)}" target="_blank" rel="noreferrer">${escapeHtml(post.text)}</a></td>
        </tr>
      `,
    )
    .join("");
}

function renderApi() {
  const { api, spend, cap, ratio } = apiBudget();
  $("#api-spend-label").textContent = currentLang === "zh" ? `已花 ${money(spend)}` : `${money(spend)} spent`;
  $("#api-cap-label").textContent = currentLang === "zh" ? `上限 $${cap.toFixed(2)}` : `$${cap.toFixed(2)} cap`;
  $("#api-meter").style.width = `${ratio}%`;
  $("#api-usage").innerHTML = (api.endpoints || [])
    .map((endpoint) => {
      const health = endpointHealth(endpoint);
      return `
        <article class="api-row">
          <span class="health-dot ${health.className}"></span>
          <div>
            <strong>${escapeHtml(endpoint.name)}</strong>
            <small>${t("endpoint_status", { calls: number(endpoint.calls), status: escapeHtml(endpoint.lastStatus || "-") })}</small>
          </div>
          <em>${money(endpoint.usd)}</em>
        </article>
      `;
    })
    .join("");
}

function bindCopyButtons() {
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-copy]");
    if (!button) return;
    copyText(decodeURIComponent(button.dataset.copy)).catch(() => showToast(t("copy_failed")));
  });

  $("#copy-top-three").addEventListener("click", () => {
    const text = (dashboardData.drafts || fallbackData.drafts)
      .slice(0, 3)
      .map((draft, index) => `${t("draft_label", { index: index + 1 })}: ${draft.text}`)
      .join("\n\n");
    copyText(text).catch(() => showToast(t("copy_failed")));
  });
}

function bindPreferenceButtons() {
  document.addEventListener("click", (event) => {
    const themeButton = event.target.closest("[data-theme-value]");
    if (themeButton) {
      setTheme(themeButton.dataset.themeValue);
      return;
    }
    const langButton = event.target.closest("[data-lang-value]");
    if (langButton) setLang(langButton.dataset.langValue);
  });
}

function render() {
  applyChromeText();
  renderHeader();
  renderHero();
  renderMetrics();
  renderServices();
  renderTrend();
  renderActions();
  renderDrafts();
  renderDiagnosis();
  renderPosts();
  renderApi();
}

async function init() {
  await loadData();
  render();
  bindCopyButtons();
  bindPreferenceButtons();
}

init();
