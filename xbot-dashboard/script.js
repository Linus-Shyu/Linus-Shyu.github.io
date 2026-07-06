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

const $ = (selector) => document.querySelector(selector);
const number = (value, fallback = 0) => (Number.isFinite(Number(value)) ? Number(value) : fallback);
const money = (value) => `$${number(value).toFixed(3)}`;

let dashboardData = fallbackData;

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
  return new Intl.DateTimeFormat("en", {
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
  showToast("Copied");
}

function draftFor(index) {
  const drafts = dashboardData.drafts || [];
  return drafts[Math.min(Math.max(0, index), Math.max(0, drafts.length - 1))] || fallbackData.drafts[0];
}

function renderHeader() {
  const updated = formatDate(dashboardData.updatedAt);
  const { spend, cap, remaining, ratio } = apiBudget();
  $("#mode-label").textContent = dashboardData.mode?.label || "Zero extra X API";
  $("#updated-at").textContent = `Updated ${updated}`;
  $("#sync-updated").textContent = updated;
  $("#rail-api-left").textContent = `$${remaining.toFixed(2)} left`;
  $("#rail-api-spend").textContent = `${money(spend)} spent / $${cap.toFixed(2)} cap`;
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
  const deltaText = followerDelta == null ? "No previous snapshot" : `${followerDelta >= 0 ? "+" : ""}${followerDelta} since last snapshot`;

  const cards = [
    {
      label: "Followers",
      value: profile.followers ?? "-",
      detail: deltaText,
      meta: "audience",
    },
    {
      label: "24h impressions",
      value: number(last24h.impressions),
      detail: `${number(last24h.posts)} posts · ${number(last24h.likes)} likes`,
      meta: "traffic",
    },
    {
      label: "7d signal",
      value: number(last7d.impressions),
      detail: `${number(last7d.posts)} posts · ${number(last7d.replies)} replies`,
      meta: "observability",
    },
    {
      label: "API remaining",
      value: `$${remaining.toFixed(2)}`,
      detail: `${money(spend)} spent in ${api.month || "-"}`,
      meta: "budget",
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
  if (failures > 0 || status >= 400) return { label: "watch", className: "warn" };
  if (status >= 200 && status < 300) return { label: "ok", className: "ok" };
  return { label: "idle", className: "idle" };
}

function renderServices() {
  const endpoints = (dashboardData.api?.endpoints || fallbackData.api.endpoints).slice(0, 6);
  const synthetic = [
    { name: "NEWS INGEST", calls: number(dashboardData.last24h?.posts), failures: 0, usd: 0, lastStatus: 200 },
    { name: "DRAFT QUEUE", calls: (dashboardData.drafts || []).length, failures: 0, usd: 0, lastStatus: 200 },
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
            <span>${number(service.calls)} calls</span>
            <span>${number(service.failures)} failures</span>
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
      <span>Tracked impressions</span>
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
      <span>Low-cost mode</span>
      <strong>${number(dashboardData.last7d?.posts)} posts / 7d</strong>
    </div>
  `;
}

function renderActions() {
  const actions = dashboardData.actions || fallbackData.actions;
  $("#action-board").innerHTML = actions
    .slice(0, 3)
    .map((action, index) => {
      const draft = draftFor(action.draftIndex ?? index);
      return `
        <article class="action-card">
          <div class="action-top">
            <span class="step">${escapeHtml(action.step || index + 1)}</span>
            <div>
              <h3>${escapeHtml(action.label)}</h3>
              <p>${escapeHtml(action.reason)}</p>
            </div>
          </div>
          <div class="draft-preview">${escapeHtml(draft.text)}</div>
          <div class="queue-state">
            <span></span>
            <strong>queued for operator paste</strong>
          </div>
          <div class="row-actions">
            <a class="button button-primary" href="${escapeHtml(action.url)}" target="_blank" rel="noreferrer">Open search</a>
            <button class="button button-secondary" type="button" data-copy="${encodeURIComponent(draft.text)}">Copy draft</button>
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
      (draft, index) => `
        <article class="draft-card">
          <div class="queue-index">${String(index + 1).padStart(2, "0")}</div>
          <div>
            <h3>${escapeHtml(draft.title || "Relevant tech post")}</h3>
            <p>${escapeHtml(draft.text)}</p>
            <span class="draft-angle">${escapeHtml(draft.angle || "reply draft")}</span>
          </div>
          <div class="draft-actions">
            <button class="button button-secondary" type="button" data-copy="${encodeURIComponent(draft.text)}">Copy</button>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderDiagnosis() {
  const items = dashboardData.diagnosis || fallbackData.diagnosis;
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
  $("#api-spend-label").textContent = `${money(spend)} spent`;
  $("#api-cap-label").textContent = `$${cap.toFixed(2)} cap`;
  $("#api-meter").style.width = `${ratio}%`;
  $("#api-usage").innerHTML = (api.endpoints || [])
    .map((endpoint) => {
      const health = endpointHealth(endpoint);
      return `
        <article class="api-row">
          <span class="health-dot ${health.className}"></span>
          <div>
            <strong>${escapeHtml(endpoint.name)}</strong>
            <small>${number(endpoint.calls)} calls · status ${escapeHtml(endpoint.lastStatus || "-")}</small>
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
    copyText(decodeURIComponent(button.dataset.copy)).catch(() => showToast("Copy failed"));
  });

  $("#copy-top-three").addEventListener("click", () => {
    const text = (dashboardData.drafts || fallbackData.drafts)
      .slice(0, 3)
      .map((draft, index) => `Draft ${index + 1}: ${draft.text}`)
      .join("\n\n");
    copyText(text).catch(() => showToast("Copy failed"));
  });
}

function render() {
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
}

init();
