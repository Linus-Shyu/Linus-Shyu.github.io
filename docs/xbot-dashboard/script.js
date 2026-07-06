const dashboardData = {
  updatedAt: "2026-07-06T00:17:43.839Z",
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
  api: {
    month: "2026-07",
    spend: 1.33,
    cap: 5,
    endpoints: [
      { name: "OAUTH_REFRESH", calls: 19, usd: 0 },
      { name: "CREATE_TWEET", calls: 17, usd: 0.255 },
      { name: "USER_ME_LOOKUP", calls: 15, usd: 0.35 },
      { name: "TWEET_METRICS_LOOKUP", calls: 13, usd: 0.35 },
      { name: "MEDIA_UPLOAD", calls: 15, usd: 0.375 },
    ],
  },
  searches: [
    {
      label: "Target Accounts",
      url: "https://x.com/search?q=(from%3Akarpathy%20OR%20from%3Asama%20OR%20from%3Apaulg%20OR%20from%3Alevelsio%20OR%20from%3Agregisenberg%20OR%20from%3Arauchg%20OR%20from%3Aamasad%20OR%20from%3Adabit3%20OR%20from%3Asvpino%20OR%20from%3Anearcyan)%20(AI%20OR%20tech%20OR%20Apple%20OR%20Google%20OR%20Microsoft%20OR%20startup%20OR%20cloud%20OR%20security%20OR%20app%20OR%20product)%20-is%3Aretweet%20lang%3Aen&src=typed_query&f=live",
      draftIndex: 0,
      reason: "先借高信号科技账号的分发。",
    },
    {
      label: "AI / DevTools",
      url: "https://x.com/search?q=(OpenAI%20OR%20Anthropic%20OR%20Cursor%20OR%20Gemini%20OR%20Nvidia%20OR%20%22AI%20coding%22%20OR%20agents)%20(AI%20OR%20model%20OR%20API%20OR%20developer%20OR%20cloud)%20-is%3Aretweet%20lang%3Aen&src=typed_query&f=live",
      draftIndex: 1,
      reason: "优先回模型、agent、AI coding、云平台讨论。",
    },
    {
      label: "Big Tech / Consumer Tech",
      url: "https://x.com/search?q=(Apple%20OR%20Google%20OR%20Microsoft%20OR%20Meta%20OR%20Amazon%20OR%20Tesla)%20(AI%20OR%20app%20OR%20product%20OR%20privacy%20OR%20security%20OR%20cloud)%20-is%3Aretweet%20lang%3Aen&src=typed_query&f=live",
      draftIndex: 2,
      reason: "扩大到英文科技主流受众。",
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
    {
      title: "Cloud platforms",
      text: "Cloud decision rule: optimize for boring exits. If your stack is cheap only while every managed service stays forever, you bought convenience with future negotiation power.",
      angle: "decision rule",
    },
    {
      title: "AI security",
      text: "Security rule for AI tooling: treat every agent with repo, inbox, or browser access like a junior employee with production permissions. Log it, scope it, rotate secrets.",
      angle: "security impact",
    },
  ],
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
    {
      score: 4.3,
      impressions: 26,
      likes: 2,
      template: "decision_rule",
      text: "AI chip news has one useful test. If Anthropic can move real Claude inference onto Samsung silicon...",
      url: "https://x.com/i/web/status/2072818745689674227",
    },
    {
      score: 2.7,
      impressions: 65,
      likes: 1,
      template: "playbook",
      text: "Claude Fable 5 is back, but don’t just flip the switch. Rerun evals, check cost ceilings...",
      url: "https://x.com/i/web/status/2072458736153551105",
    },
  ],
  diagnosis: [
    "主贴质量不算差，但 66 粉丝阶段没有足够初始互动，单独发帖很难被系统分发。",
    "最近 24 小时只有 8 次曝光，瓶颈不是发帖数量，是分发入口。",
    "当前低成本路线是人工点网页搜索、复制回复，避免增加 X search/read API。",
    "回复要优先贴在 2 小时内仍有讨论的大号帖子下面，主贴只负责让主页看起来可信。",
  ],
};

const $ = (selector) => document.querySelector(selector);
const money = (value) => `$${Number(value).toFixed(3)}`;

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

async function copyText(text, button) {
  await navigator.clipboard.writeText(text);
  const previous = button.textContent;
  button.textContent = "Copied";
  button.disabled = true;
  setTimeout(() => {
    button.textContent = previous;
    button.disabled = false;
  }, 900);
}

function renderKpis() {
  const { profile, last24h, api } = dashboardData;
  const remaining = Math.max(0, api.cap - api.spend);
  const cards = [
    {
      label: "Followers",
      value: profile.followers,
      detail: `${profile.followerDelta >= 0 ? "+" : ""}${profile.followerDelta} since last snapshot`,
      deltaClass: profile.followerDelta >= 0 ? "delta-up" : "delta-down",
    },
    {
      label: "24h impressions",
      value: last24h.impressions,
      detail: `${last24h.posts} posts measured`,
    },
    {
      label: "Baseline score",
      value: profile.baselineScore.toFixed(1),
      detail: `${profile.measuredPosts}/${profile.trackedPosts} posts measured`,
    },
    {
      label: "X API remaining",
      value: `$${remaining.toFixed(2)}`,
      detail: `${money(api.spend)} spent in ${api.month}`,
    },
  ];

  $("#kpi-grid").innerHTML = cards
    .map(
      (card) => `
        <article class="kpi-card">
          <span class="kpi-label">${card.label}</span>
          <div class="kpi-value ${card.deltaClass || ""}">${card.value}</div>
          <small>${card.detail}</small>
        </article>
      `,
    )
    .join("");
}

function renderActions() {
  $("#action-list").innerHTML = dashboardData.searches
    .map((search, index) => {
      const draft = dashboardData.drafts[search.draftIndex];
      return `
        <article class="action-row">
          <span class="step-number">${index + 1}</span>
          <div>
            <p class="action-title">${search.label}</p>
            <p class="action-desc">${search.reason} Use Draft ${search.draftIndex + 1}: ${draft.title}</p>
          </div>
          <div class="action-buttons">
            <a class="button button-primary" href="${search.url}" target="_blank" rel="noreferrer">Open search</a>
            <button class="button button-secondary" type="button" data-copy="${encodeURIComponent(draft.text)}">Copy draft</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderDrafts() {
  $("#draft-grid").innerHTML = dashboardData.drafts
    .map(
      (draft, index) => `
        <article class="draft-card">
          <h3>${index + 1}. ${draft.title}</h3>
          <p>${draft.text}</p>
          <div class="card-actions">
            <span class="draft-meta">${draft.angle}</span>
            <button class="button button-secondary" type="button" data-copy="${encodeURIComponent(draft.text)}">Copy</button>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderTopPosts() {
  $("#top-posts").innerHTML = dashboardData.topPosts
    .map(
      (post) => `
        <tr>
          <td>${post.score.toFixed(1)}</td>
          <td>${post.impressions}</td>
          <td>${post.likes}</td>
          <td>${post.template}</td>
          <td><a class="tweet-link" href="${post.url}" target="_blank" rel="noreferrer">${post.text}</a></td>
        </tr>
      `,
    )
    .join("");
}

function renderApiUsage() {
  const { api } = dashboardData;
  $("#api-spend-label").textContent = `${money(api.spend)} spent`;
  $("#api-meter").style.width = `${Math.min(100, (api.spend / api.cap) * 100)}%`;
  $("#api-usage").innerHTML = api.endpoints
    .map(
      (endpoint) => `
        <tr>
          <td>${endpoint.name}</td>
          <td>${endpoint.calls}</td>
          <td>${money(endpoint.usd)}</td>
        </tr>
      `,
    )
    .join("");
}

function renderDiagnosis() {
  $("#diagnosis-list").innerHTML = dashboardData.diagnosis.map((item) => `<li>${item}</li>`).join("");
}

function wireCopyButtons() {
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-copy]");
    if (!button) return;
    copyText(decodeURIComponent(button.dataset.copy), button).catch(() => {
      button.textContent = "Copy failed";
      setTimeout(() => {
        button.textContent = "Copy";
      }, 1000);
    });
  });

  $("#copy-first-three").addEventListener("click", (event) => {
    const text = dashboardData.drafts
      .slice(0, 3)
      .map((draft, index) => `Draft ${index + 1}: ${draft.text}`)
      .join("\n\n");
    copyText(text, event.currentTarget);
  });
}

function init() {
  $("#updated-at").textContent = formatDate(dashboardData.updatedAt);
  renderKpis();
  renderActions();
  renderDrafts();
  renderTopPosts();
  renderApiUsage();
  renderDiagnosis();
  wireCopyButtons();
}

init();
