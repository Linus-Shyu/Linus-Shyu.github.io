const fallbackData = {
  version: 1,
  updatedAt: "2026-07-06T00:17:43.839Z",
  telemetry: {
    dashboardUpdatedAt: "2026-07-06T00:17:43.839Z",
    checkedAt: "2026-07-07T01:09:59.105Z",
    accountCheckedAt: "2026-07-07T01:09:50.396Z",
    tweetMetricsCheckedAt: "2026-07-07T01:09:59.105Z",
    ageMinutes: 854,
    refreshMode: "dashboard_only",
    cachedOnlyRefresh: true,
  },
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
  opportunities: [
    {
      priority: 1,
      label: "decision rule replies",
      kind: "format",
      score: 7.2,
      confidence: "medium",
      routeLabel: "Target Accounts",
      routeUrl: "https://x.com/search?q=(from%3Akarpathy%20OR%20from%3Asama%20OR%20from%3Apaulg%20OR%20from%3Alevelsio%20OR%20from%3Agregisenberg%20OR%20from%3Arauchg%20OR%20from%3Aamasad%20OR%20from%3Adabit3%20OR%20from%3Asvpino%20OR%20from%3Anearcyan)%20(AI%20OR%20tech%20OR%20Apple%20OR%20Google%20OR%20Microsoft%20OR%20startup%20OR%20cloud%20OR%20security%20OR%20app%20OR%20product)%20-is%3Aretweet%20lang%3Aen&src=typed_query&f=live",
      draftIndex: 0,
      draftText: "Launch rule for AI products: demo quality matters less than failure shape. If users can’t predict when it will be wrong, support cost becomes the real roadmap.",
      draftAngle: "hidden cost",
      reason: "Reuse the current winning format and paste it under active high-signal tech conversations.",
      evidence: "format: avg 2.8, n=10",
      zeroExtraXReads: true,
    },
    {
      priority: 2,
      label: "Source watch: techcrunch.com",
      kind: "source",
      score: 5.4,
      confidence: "medium",
      routeLabel: "AI / DevTools",
      routeUrl: "https://x.com/search?q=(OpenAI%20OR%20Anthropic%20OR%20Cursor%20OR%20Gemini%20OR%20Nvidia%20OR%20%22AI%20coding%22%20OR%20agents)%20(AI%20OR%20model%20OR%20API%20OR%20developer%20OR%20cloud)%20-is%3Aretweet%20lang%3Aen&src=typed_query&f=live",
      draftIndex: 1,
      draftText: "Platform shift rule: if a Big Tech change can rewrite your margin, roadmap, or distribution overnight, it is not a partnership. It is rented ground with APIs.",
      draftAngle: "business impact",
      reason: "Stories from this source have outperformed baseline; look for fresh related discussions before posting more standalone takes.",
      evidence: "source: avg 5.4, n=6",
      zeroExtraXReads: true,
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
    spend: 1.69,
    cap: 5,
    safeCap: 4.5,
    remaining: 3.31,
    safeRemaining: 2.81,
    statusTriage: {
      severity: "cached",
      totalCalls: 112,
      totalFailures: 2,
      success2xx: 110,
      rateLimit429: 0,
      backendFault5xx: 0,
      authFault4xx: 1,
      clientFault4xx: 0,
      activeRateLimit429: 0,
      activeBackendFault5xx: 0,
      activeAuthFault4xx: 0,
      activeClientFault4xx: 0,
      failureRate: 1.79,
      summary: "0 rate-limit, 0 backend, 1 auth, 0 client faults across 112 X API ops.",
      action: "Historical X API failures are recorded, but the latest endpoint states are clear.",
      incidents: [
        {
          endpoint: "CREATE_REPLY",
          severity: "cached",
          active: false,
          calls: 1,
          failures: 1,
          lastStatus: 403,
          statuses: { "403": 1 },
          rateLimit429: 0,
          backendFault5xx: 0,
          authFault4xx: 1,
          clientFault4xx: 0,
        },
      ],
    },
    cooldown: {
      active: false,
      reasonCode: "none",
      severity: "ok",
      endpoint: null,
      status: null,
      since: null,
      until: null,
      remainingMinutes: 0,
      cooldownMinutes: 0,
      readGate: "cached_only",
      reason: "No active X API cooldown.",
    },
    days: [
      { date: "2026-07-01", label: "07-01", value: 26, calls: 26, failures: 1, usd: 0.42 },
      { date: "2026-07-02", label: "07-02", value: 18, calls: 18, failures: 0, usd: 0.23 },
      { date: "2026-07-03", label: "07-03", value: 16, calls: 16, failures: 0, usd: 0.18 },
      { date: "2026-07-04", label: "07-04", value: 12, calls: 12, failures: 0, usd: 0.14 },
      { date: "2026-07-05", label: "07-05", value: 11, calls: 11, failures: 0, usd: 0.13 },
      { date: "2026-07-06", label: "07-06", value: 15, calls: 15, failures: 0, usd: 0.18 },
      { date: "2026-07-07", label: "07-07", value: 14, calls: 14, failures: 1, usd: 0.18 },
    ],
    endpoints: [
      { name: "OAUTH_REFRESH", calls: 23, failures: 1, usd: 0, lastStatus: 200 },
      { name: "CREATE_TWEET", calls: 20, failures: 0, usd: 0.3, lastStatus: 201 },
      { name: "USER_ME_LOOKUP", calls: 17, failures: 0, usd: 0.45, lastStatus: 200 },
      { name: "RECENT_SEARCH", calls: 16, failures: 0, usd: 0, lastStatus: 200 },
      { name: "TWEET_METRICS_LOOKUP", calls: 15, failures: 0, usd: 0.45, lastStatus: 200 },
      { name: "MEDIA_INITIALIZE", calls: 6, failures: 0, usd: 0.09, lastStatus: 200 },
      { name: "MEDIA_APPEND", calls: 6, failures: 0, usd: 0.2, lastStatus: 200 },
      { name: "MEDIA_FINALIZE", calls: 6, failures: 0, usd: 0.2, lastStatus: 200 },
      { name: "AUTO_REPLY_SEARCH", calls: 2, failures: 0, usd: 0, lastStatus: 200 },
      { name: "CREATE_REPLY", calls: 1, failures: 1, usd: 0, lastStatus: 403 },
    ],
  },
  charts: {
    impressions24h: {
      label: "24h impression load",
      unit: "impressions",
      source: "tweet_metrics",
      total: 233,
      current: 5,
      points: [
        { label: "16:00", value: 9, posts: 1 },
        { label: "18:00", value: 219, posts: 1 },
        { label: "20:00", value: 0, posts: 0 },
        { label: "22:00", value: 5, posts: 1 },
        { label: "00:00", value: 0, posts: 0 },
        { label: "02:00", value: 0, posts: 0 },
        { label: "04:00", value: 0, posts: 0 },
      ],
    },
    impressions7d: {
      label: "7d impression throughput",
      unit: "impressions",
      source: "tweet_metrics",
      total: 621,
      current: 233,
      points: [
        { label: "07-01", value: 88, posts: 3 },
        { label: "07-02", value: 71, posts: 4 },
        { label: "07-03", value: 63, posts: 3 },
        { label: "07-04", value: 49, posts: 3 },
        { label: "07-05", value: 55, posts: 4 },
        { label: "07-06", value: 62, posts: 4 },
        { label: "07-07", value: 233, posts: 3 },
      ],
    },
    xApiCallsDaily: {
      label: "X API ops",
      unit: "ops",
      source: "x_api_usage.days",
      total: 112,
      current: 14,
      points: [
        { label: "07-01", value: 26 },
        { label: "07-02", value: 18 },
        { label: "07-03", value: 16 },
        { label: "07-04", value: 12 },
        { label: "07-05", value: 11 },
        { label: "07-06", value: 15 },
        { label: "07-07", value: 14 },
      ],
    },
  },
  hourlyLoadBalancer: {
    generatedAt: "2026-07-07T01:09:59.105Z",
    source: "tweet_analytics.postedAt + tweet_metrics",
    lookbackDays: 30,
    sampleCount: 120,
    minSamples: 2,
    confidence: "medium",
    mode: "wait_for_peak",
    zeroExtraXReads: true,
    currentHour: { hour: 2, label: "02:00", loadScore: 18.2, posts: 1, impressions: 8, avgScore: 2.4, status: "dark" },
    nextWindow: { hour: 13, label: "13:00", hoursFromNow: 11, loadScore: 88.4, posts: 9, impressions: 284, avgScore: 7.9, status: "hot" },
    bestHours: [
      { hour: 13, label: "13:00", loadScore: 88.4, posts: 9, impressions: 284, avgScore: 7.9, status: "hot" },
      { hour: 17, label: "17:00", loadScore: 81.6, posts: 7, impressions: 233, avgScore: 7.2, status: "hot" },
      { hour: 22, label: "22:00", loadScore: 72.8, posts: 6, impressions: 188, avgScore: 6.4, status: "warm" },
      { hour: 4, label: "04:00", loadScore: 58.5, posts: 5, impressions: 117, avgScore: 5.1, status: "warm" },
    ],
    nextAction: "Hold standalone posts for learned UTC peaks; use manual replies during cold windows.",
    hours: Array.from({ length: 24 }, (_, hour) => {
      const load = {
        0: 22, 1: 12, 2: 18, 3: 28, 4: 58, 5: 44,
        6: 20, 7: 15, 8: 24, 9: 36, 10: 41, 11: 47,
        12: 63, 13: 88, 14: 76, 15: 54, 16: 62, 17: 82,
        18: 69, 19: 51, 20: 38, 21: 57, 22: 73, 23: 46,
      }[hour] || 0;
      const status = load >= 75 ? "hot" : load >= 52 ? "warm" : load >= 20 ? "cool" : "dark";
      return {
        hour,
        label: `${String(hour).padStart(2, "0")}:00`,
        posts: load ? Math.max(1, Math.round(load / 14)) : 0,
        impressions: Math.round(load * 3.2),
        likes: Math.round(load / 18),
        reposts: 0,
        replies: Math.round(load / 33),
        avgScore: Number((load / 10).toFixed(1)),
        loadScore: load,
        status,
        current: hour === 2,
      };
    }),
  },
  automation: {
    publishMode: "manual_paste",
    zeroWasteManualMode: true,
    autoReplyEnabled: false,
    autoReplyMode: "mentions",
    hotspotRadarEnabled: false,
    manualReplyDraftsEnabled: true,
    manualReplyDraftsReady: 5,
    manualRoutesReady: 3,
    extraXReadsForManualReplies: 0,
    projectedManualReplyUsd: 0,
    budgetGuard: {
      capUsd: 5,
      safeCapUsd: 4.5,
      trackedSpendUsd: 1.69,
      trackedSafeRemainingUsd: 2.81,
      estimatedReadUsd: 0.05,
      estimatedTextPostUsd: 0.015,
      estimatedImagePostUsd: 0.03,
    },
  },
  mediaRoiGate: {
    enabled: true,
    decision: "hold",
    attachImageAllowed: false,
    zeroExtraXReads: true,
    confidence: "low_samples",
    reason: "Need more measured media posts before spending on image uploads.",
    nextAction: "Keep image upload partition closed until cached outcomes prove lift.",
    mediaAvgScore: 2.1,
    textAvgScore: 4.2,
    baselineScore: 3.9,
    mediaSamples: 1,
    textSamples: 119,
    minSamples: 3,
    mediaLiftPct: -50,
    minLiftPct: 18,
    textPostCostUsd: 0.015,
    imagePostCostUsd: 0.03,
    incrementalImageCostUsd: 0.015,
    safeRemainingUsd: 2.81,
    checks: [
      { id: "samples", ok: false, label: "cached sample floor", value: "1/3 media · 119/3 text" },
      { id: "lift", ok: false, label: "media lift", value: "-50.0%" },
      { id: "budget", ok: true, label: "safe budget reserve", value: "$2.810 left" },
      { id: "x_reads", ok: true, label: "extra X reads", value: "0" },
    ],
  },
  controlPlane: {
    generatedAt: "2026-07-07T01:09:59.105Z",
    mode: "auth_repair",
    severity: "warn",
    pressureScore: 46.8,
    decision: "Keep manual web routing online, but repair OAuth before enabling automated write paths.",
    nextAction: "Check OAuth scopes/tokens before the next publish or live read.",
    publishGate: "review",
    readGate: "cached_only",
    distributionGate: "ready",
    budgetGate: "187 safe text slots",
    zeroExtraXReads: true,
    queueDepth: {
      drafts: 5,
      routes: 3,
      experimentSlots: 3,
      postsLast24h: 3,
    },
    topRoute: {
      label: "Target Accounts",
      score: 7.2,
      reason: "Reuse the current winning format under active high-signal tech conversations.",
    },
    topFormat: {
      id: "decision_rule",
      label: "Decision Rule",
      action: "exploit",
      avgScore: 2.8,
      samples: 10,
    },
    topDraft: "Launch rule for AI products: demo quality matters less than failure shape.",
    pulses: [
      { id: "publish", label: "publish gate", value: "review", status: "warn", detail: "OAuth review before automated writes." },
      { id: "read", label: "X read gate", value: "cached_only", status: "ok", detail: "0 rate-limit / 0 backend faults" },
      { id: "budget", label: "budget partition", value: "$2.81", status: "ok", detail: "187 safe text slots" },
      { id: "distribution", label: "manual route queue", value: "5/3", status: "ok", detail: "drafts/routes ready; 0 extra X reads" },
      { id: "learning", label: "learning load", value: "8", status: "ok", detail: "307 impressions in 7d feedback window" },
    ],
    safeguards: [
      "No automated replies outside mention/engagement policy.",
      "No live X search/read when 429 or 5xx faults are active.",
      "Manual web routes spend 0 X API read budget.",
    ],
  },
  viralFlywheel: {
    generatedAt: "2026-07-07T01:09:59.105Z",
    mode: "reply_burst",
    zeroExtraXReads: true,
    velocityScore: 68.4,
    expectedLiftPct: 84.6,
    baselineScore: 3.9,
    safeBudgetLeftUsd: 2.81,
    nextBurst: {
      label: "decision rule replies",
      routeLabel: "Target Accounts",
      routeUrl: "https://x.com/search?q=(from%3Akarpathy%20OR%20from%3Asama)%20(AI%20OR%20tech)%20-is%3Aretweet%20lang%3Aen&src=typed_query&f=live",
      draftText: "Launch rule for AI products: demo quality matters less than failure shape. If users can’t predict when it will be wrong, support cost becomes the real roadmap.",
      targetReplies: 3,
      expectedLiftPct: 84.6,
    },
    stages: [
      { id: "ingress", label: "signal ingress", value: "17 pkts", status: "ok", detail: "307 L7 events in 7d telemetry" },
      { id: "ranker", label: "ranker lift", value: "+84.6%", status: "ok", detail: "decision rule replies over baseline 3.9" },
      { id: "swarm", label: "swarm output", value: "5 drafts", status: "ok", detail: "primary rule decision_rule" },
      { id: "route", label: "route queue", value: "2/2", status: "ok", detail: "manual web actions spend 0 X read ops" },
      { id: "writeback", label: "learning writeback", value: "120 posts", status: "ok", detail: "8 L7 events in 24h feedback window" },
    ],
    constraints: [
      { id: "read", label: "X read partition", value: "cached_only", status: "ok" },
      { id: "publish", label: "publish partition", value: "review", status: "warn" },
      { id: "budget", label: "safe budget", value: "$2.81", status: "ok" },
    ],
    rules: [
      "Reuse the current winning format and paste it under active high-signal tech conversations.",
      "Lead with decision_rule: turn the story into a concrete rule.",
      "Keep discovery, drafting, routing, and learning online without adding X search/read spend.",
    ],
  },
  adaptiveAngleScheduler: {
    generatedAt: "2026-07-07T01:09:59.105Z",
    mode: "recovery_route",
    confidence: "medium",
    zeroExtraXReads: true,
    sampleCount: 120,
    baselineScore: 3.9,
    safeBudgetLeftUsd: 2.81,
    load: {
      impressions24h: 233,
      impressions7d: 621,
      avgBucket: 38.8,
      peakBucket: { label: "18:00", value: 219, posts: 1 },
      quietBucket: { label: "20:00", value: 0, posts: 0 },
    },
    nextAngles: [
      {
        slot: 1,
        formatId: "decision_rule",
        label: "Decision Rule",
        angle: "decision rule / what to do next",
        action: "exploit",
        status: "hot",
        weight: 91.4,
        avgScore: 7.2,
        samples: 10,
        reason: "Winning reusable rule; convert broad tech news into a concrete operating decision.",
      },
      {
        slot: 2,
        formatId: "operator_pain",
        label: "Operator Pain",
        angle: "operator pain / hidden workflow tax",
        action: "test",
        status: "watch",
        weight: 74.2,
        avgScore: 4.8,
        samples: 4,
        reason: "Makes platform shifts feel practical for builders and teams.",
      },
      {
        slot: 3,
        formatId: "second_order",
        label: "Second Order",
        angle: "second-order distribution or business consequence",
        action: "explore",
        status: "probe",
        weight: 66.8,
        avgScore: 0,
        samples: 0,
        reason: "Needs samples; use only when the story has a clear downstream consequence.",
      },
      {
        slot: 4,
        formatId: "prediction",
        label: "Near-term Prediction",
        angle: "near-term prediction / default shift",
        action: "hold",
        status: "hold",
        weight: 32.1,
        avgScore: 2.1,
        samples: 2,
        reason: "Under baseline; hold unless the timing signal is unusually concrete.",
      },
    ],
    promptDirectives: [
      "Next angle slot: decision_rule; turn the story into one concrete operating rule.",
      "Traffic load is soft; write a useful reply-ready angle that earns manual distribution.",
      "Do not use held formats unless the story is a perfect fit: prediction.",
    ],
    scoringBias: {
      preferredFormatIds: ["decision_rule", "operator_pain", "second_order"],
      preferredAngleKeywords: ["rule", "operator", "distribution", "default", "budget"],
      holdFormatIds: ["prediction"],
    },
  },
  temporalAngleMatrix: {
    generatedAt: "2026-07-07T01:09:59.105Z",
    mode: "temporal_rotation",
    confidence: "medium",
    source: "cached tweet analytics only",
    zeroExtraXReads: true,
    lookbackDays: 30,
    sampleCount: 120,
    nextAction: "Use Decision Rule at 13:00 UTC; decision_rule has the strongest current matrix score.",
    slots: [
      {
        slot: 1,
        hour: 13,
        windowLabel: "13:00",
        hoursFromNow: 11,
        loadScore: 88.4,
        formatId: "decision_rule",
        label: "Decision Rule",
        angle: "decision rule / what to do next",
        action: "exploit",
        status: "hot",
        score: 91.2,
        avgScore: 7.2,
        samples: 3,
        impressions: 118,
        reason: "Best UTC window with proven reusable-rule format.",
      },
      {
        slot: 2,
        hour: 17,
        windowLabel: "17:00",
        hoursFromNow: 15,
        loadScore: 81.6,
        formatId: "operator_pain",
        label: "Operator Pain",
        angle: "operator pain / hidden workflow tax",
        action: "test",
        status: "watch",
        score: 79.4,
        avgScore: 4.8,
        samples: 2,
        impressions: 84,
        reason: "High-load window; pair with practical workflow-tax angle.",
      },
      {
        slot: 3,
        hour: 22,
        windowLabel: "22:00",
        hoursFromNow: 20,
        loadScore: 72.8,
        formatId: "second_order",
        label: "Second Order",
        angle: "second-order distribution or business consequence",
        action: "explore",
        status: "probe",
        score: 67.1,
        avgScore: 0,
        samples: 0,
        impressions: 0,
        reason: "Exploration slot for downstream platform consequences.",
      },
    ],
  },
  trendVelocityRadar: {
    updatedAt: "2026-07-07T01:09:59.105Z",
    mode: "rss_velocity",
    zeroExtraXReads: true,
    summary: {
      items: 5,
      breakoutCount: 2,
      avgVelocity: 72.6,
      primaryStage: "breakout",
      primaryTitle: "AI coding agents move from demo to workflow control",
      primarySource: "github.blog",
      nextAction: "Route breakout story from github.blog into the next post angle.",
    },
    items: [
      {
        rank: 1,
        title: "AI coding agents move from demo to workflow control",
        link: "https://github.blog/",
        source: "github.blog",
        sourceTier: "official",
        audienceLabel: "AI / Agent Stack",
        velocityScore: 86.4,
        velocityLift: 0.213,
        stage: "breakout",
        ageHours: 2.3,
        echoes: 4,
        reason: "2.3h old · 4 echoes · 5 sources · official source · AI / Agent Stack",
        routeUrl: "https://x.com/search?q=(AI%20OR%20agent%20OR%20model%20OR%20GitHub)%20-is%3Aretweet%20lang%3Aen%20min_faves%3A5&src=typed_query&f=live",
        routeQuery: "(AI OR agent OR model OR GitHub) -is:retweet lang:en min_faves:5",
        routeReason: "Open live X web search and reply manually under active high-throughput conversations.",
        replyAngle: "Reply angle: Tie the story to model adoption, workflow lock-in, or operator cost.\nUse the story as evidence, not a recap.\nFormat: one concrete operating rule, one cost/tradeoff, one sharp question.",
        zeroExtraXReads: true,
      },
      {
        rank: 2,
        title: "Big Tech bundles AI defaults into the operating system layer",
        link: "https://www.theverge.com/",
        source: "theverge.com",
        sourceTier: "mainstream",
        audienceLabel: "Big Tech Platform",
        velocityScore: 78.1,
        velocityLift: 0.169,
        stage: "rising",
        ageHours: 4.8,
        echoes: 3,
        reason: "4.8h old · 3 echoes · 4 sources · mainstream source · Big Tech Platform",
        routeUrl: "https://x.com/search?q=(Apple%20OR%20Google%20OR%20Microsoft%20OR%20platform)%20-is%3Aretweet%20lang%3Aen%20min_faves%3A5&src=typed_query&f=live",
        routeQuery: "(Apple OR Google OR Microsoft OR platform) -is:retweet lang:en min_faves:5",
        routeReason: "Open live X web search and reply manually under active high-throughput conversations.",
        replyAngle: "Reply angle: Frame the platform shift as distribution, margin, privacy, or default-control leverage.\nUse the story as evidence, not a recap.\nFormat: one concrete operating rule, one cost/tradeoff, one sharp question.",
        zeroExtraXReads: true,
      },
      {
        rank: 3,
        title: "Consumer app distribution shifts toward embedded AI surfaces",
        link: "https://techcrunch.com/",
        source: "techcrunch.com",
        sourceTier: "mainstream",
        audienceLabel: "Consumer Apps",
        velocityScore: 67.5,
        velocityLift: 0.113,
        stage: "early",
        ageHours: 1.1,
        echoes: 1,
        reason: "1.1h old · 1 echoes · 2 sources · mainstream source · Consumer Apps",
        routeUrl: "https://x.com/search?q=(app%20OR%20consumer%20OR%20iPhone%20OR%20Android)%20-is%3Aretweet%20lang%3Aen%20min_faves%3A5&src=typed_query&f=live",
        routeQuery: "(app OR consumer OR iPhone OR Android) -is:retweet lang:en min_faves:5",
        routeReason: "Open live X web search and reply manually under active high-throughput conversations.",
        replyAngle: "Reply angle: Translate the story into a consumer behavior or distribution habit change.\nUse the story as evidence, not a recap.\nFormat: one concrete operating rule, one cost/tradeoff, one sharp question.",
        zeroExtraXReads: true,
      },
    ],
  },
  distributionOps: {
    generatedAt: "2026-07-07T01:09:59.105Z",
    mode: "manual_distribution",
    queueHealth: "ok",
    zeroExtraXReads: true,
    manualReplyTarget: 3,
    readyMissions: 2,
    missionCount: 2,
    primaryRoute: {
      label: "Target Accounts",
      url: "https://x.com/search?q=(from%3Akarpathy%20OR%20from%3Asama%20OR%20from%3Apaulg%20OR%20from%3Alevelsio%20OR%20from%3Agregisenberg%20OR%20from%3Arauchg%20OR%20from%3Aamasad%20OR%20from%3Adabit3%20OR%20from%3Asvpino%20OR%20from%3Anearcyan)%20(AI%20OR%20tech%20OR%20Apple%20OR%20Google%20OR%20Microsoft%20OR%20startup%20OR%20cloud%20OR%20security%20OR%20app%20OR%20product)%20-is%3Aretweet%20lang%3Aen&src=typed_query&f=live",
      score: 7.2,
      confidence: "medium",
    },
    opsMetrics: [
      { id: "target", label: "reply target", value: "3/day", status: "ok" },
      { id: "queue", label: "mission queue", value: "2/2", status: "ok" },
      { id: "budget", label: "X read budget", value: "0 reads", status: "ok" },
      { id: "learning", label: "writeback", value: "120 posts", status: "ok" },
    ],
    runbook: [
      "Open the top route in X web.",
      "Paste 3 useful replies under fresh, high-signal conversations.",
      "Prefer posts less than 2 hours old with active technical debate.",
      "Let the next maintenance run write engagement back into the learning layer.",
    ],
    missions: [
      {
        id: "template:decision_rule",
        priority: 1,
        label: "decision rule replies",
        kind: "format",
        routeLabel: "Target Accounts",
        routeUrl: "https://x.com/search?q=(from%3Akarpathy%20OR%20from%3Asama%20OR%20from%3Apaulg%20OR%20from%3Alevelsio%20OR%20from%3Agregisenberg%20OR%20from%3Arauchg%20OR%20from%3Aamasad%20OR%20from%3Adabit3%20OR%20from%3Asvpino%20OR%20from%3Anearcyan)%20(AI%20OR%20tech%20OR%20Apple%20OR%20Google%20OR%20Microsoft%20OR%20startup%20OR%20cloud%20OR%20security%20OR%20app%20OR%20product)%20-is%3Aretweet%20lang%3Aen&src=typed_query&f=live",
        routeReason: "Reuse the current winning format and paste it under active high-signal tech conversations.",
        evidence: "format: avg 2.8, n=10",
        score: 7.2,
        expectedLiftPct: 84.6,
        confidence: "medium",
        targetReplies: 2,
        operatorSlaMinutes: 10,
        draftText: "Launch rule for AI products: demo quality matters less than failure shape. If users can’t predict when it will be wrong, support cost becomes the real roadmap.",
        draftAngle: "hidden cost",
        zeroExtraXReads: true,
      },
      {
        id: "source:techcrunch.com",
        priority: 2,
        label: "Source watch: techcrunch.com",
        kind: "source",
        routeLabel: "AI / DevTools",
        routeUrl: "https://x.com/search?q=(OpenAI%20OR%20Anthropic%20OR%20Cursor%20OR%20Gemini%20OR%20Nvidia%20OR%20%22AI%20coding%22%20OR%20agents)%20(AI%20OR%20model%20OR%20API%20OR%20developer%20OR%20cloud)%20-is%3Aretweet%20lang%3Aen&src=typed_query&f=live",
        routeReason: "Look for fresh related discussions before posting more standalone takes.",
        evidence: "source: avg 5.4, n=6",
        score: 5.4,
        expectedLiftPct: 38.5,
        confidence: "medium",
        targetReplies: 1,
        operatorSlaMinutes: 20,
        draftText: "Platform shift rule: if a Big Tech change can rewrite your margin, roadmap, or distribution overnight, it is not a partnership. It is rented ground with APIs.",
        draftAngle: "business impact",
        zeroExtraXReads: true,
      },
    ],
  },
  operatorSlo: {
    generatedAt: "2026-07-07T01:09:59.105Z",
    mode: "manual_zero_read_slo",
    status: "ok",
    zeroExtraXReads: true,
    budgetUsdPerReply: 0,
    targetReplies: 3,
    readyMissions: 2,
    missionCount: 2,
    completionBudgetMinutes: 30,
    expectedLiftPct: 69.2,
    expectedScore: 6.6,
    baselineScore: 3.9,
    safeRemainingUsd: 2.81,
    currentWindow: "13:00",
    sloCards: [
      { id: "route_readiness", label: "route readiness", value: "2/2", status: "ok", detail: "100% of manual distribution lanes armed" },
      { id: "reply_latency", label: "operator SLA", value: "30 min", status: "ok", detail: "3 replies inside the daily growth loop" },
      { id: "x_read_burn", label: "X read burn", value: "0 ops", status: "ok", detail: "manual web routes do not consume X search/read budget" },
      { id: "learning_writeback", label: "learning writeback", value: "120 posts", status: "ok", detail: "baseline score 3.9 -> expected 6.6" },
    ],
    lanes: [
      {
        id: "template:decision_rule",
        label: "decision rule replies",
        routeLabel: "Target Accounts",
        priority: 1,
        status: "ok",
        targetReplies: 2,
        operatorSlaMinutes: 10,
        expectedLiftPct: 84.6,
        score: 7.2,
        confidence: "medium",
        xReadOps: 0,
        incrementalXApiUsd: 0,
        efficiencyLabel: "0 incremental X API spend",
      },
      {
        id: "source:techcrunch.com",
        label: "Source watch: techcrunch.com",
        routeLabel: "AI / DevTools",
        priority: 2,
        status: "ok",
        targetReplies: 1,
        operatorSlaMinutes: 20,
        expectedLiftPct: 38.5,
        score: 5.4,
        confidence: "medium",
        xReadOps: 0,
        incrementalXApiUsd: 0,
        efficiencyLabel: "0 incremental X API spend",
      },
    ],
    rules: [
      "Open routes in X web; do not call recent_search for manual replies.",
      "Paste only useful replies under active technical threads; stop at target count.",
      "Metrics write back on the next maintenance run and rebalance route weights.",
    ],
  },
  growthGoal: {
    targetFollowers: 1000,
    nextMilestone: 100,
    dailyReplies: 3,
    dailyPosts: 1,
  },
  learning: {
    bestHook: { name: "decision_rule", avgScore: 2.7, samples: 8 },
    worstFormat: { name: "prediction", avgScore: 2.1, samples: 2 },
    bestSource: { name: "techcrunch.com", avgScore: 5.4, samples: 6 },
    confidence: "medium",
    confidenceZh: "中等置信度",
    nextExperiment: "Double down on decision-rule posts for operator-heavy AI and platform news; avoid broad predictions unless the payoff is specific.",
    nextExperimentZh: "继续加码 decision-rule：把 AI 和平台新闻写成可执行判断规则；除非结论非常具体，否则少用宽泛预测。",
  },
  learningAutopilot: {
    generatedAt: "2026-07-07T01:09:59.105Z",
    mode: "exploit_winners",
    confidence: "medium",
    baselineScore: 3.9,
    sampleCount: 120,
    primaryFormat: { id: "decision_rule", label: "Decision Rule", action: "exploit", avgScore: 2.8, samples: 10 },
    exploitFormats: [{ id: "decision_rule", label: "Decision Rule", action: "exploit", avgScore: 2.8, samples: 10 }],
    testFormats: [{ id: "playbook", label: "Playbook", action: "test", avgScore: 3.6, samples: 2 }],
    exploreFormats: [{ id: "second_order", label: "Second-order", action: "explore", avgScore: 0, samples: 0 }],
    holdFormats: [{ id: "prediction", label: "Prediction", action: "hold", avgScore: 2.1, samples: 2 }],
    sourceBias: [{ name: "techcrunch.com", avgScore: 5.4, samples: 6 }],
    tagBias: [{ name: "AI", avgScore: 4.8, samples: 12 }],
    directives: [
      "Lead with decision_rule: turn the story into a concrete rule.",
      "Prefer stories from techcrunch.com or adjacent high-signal sources.",
      "Avoid prediction unless story-fit is unusually strong.",
      "Reserve one candidate for second_order sample discovery.",
    ],
  },
  audienceExpansionRouter: {
    enabled: true,
    mode: "wide_tech_router",
    confidence: "medium",
    sampleCount: 120,
    baselineScore: 3.9,
    zeroExtraXReads: true,
    source: "cached tweet analytics + RSS classifier",
    nextAction: "expand Consumer Apps: translate the story into a consumer behavior or distribution habit change.",
    primarySegment: {
      id: "consumer_apps",
      label: "Consumer Apps",
      action: "expand",
      score: 6.8,
      avgScore: 3.2,
      samples: 8,
      sharePct: 6.7,
      targetSharePct: 18,
      audienceLiftPct: 14.6,
      directive: "Translate the story into a consumer behavior or distribution habit change.",
    },
    segments: [
      { id: "consumer_apps", label: "Consumer Apps", action: "expand", score: 6.8, avgScore: 3.2, samples: 8, sharePct: 6.7, targetSharePct: 18, audienceLiftPct: 14.6, reason: "Below target share.", directive: "Translate the story into a consumer behavior or distribution habit change." },
      { id: "big_tech_platform", label: "Big Tech Platform", action: "expand", score: 6.2, avgScore: 3.6, samples: 12, sharePct: 10, targetSharePct: 22, audienceLiftPct: 12.1, reason: "Below target share.", directive: "Frame the platform shift as distribution, margin, privacy, or default-control leverage." },
      { id: "ai_platform", label: "AI / Agent Stack", action: "exploit", score: 5.9, avgScore: 4.8, samples: 42, sharePct: 35, targetSharePct: 30, audienceLiftPct: 18.3, reason: "Measured winner.", directive: "Tie the story to model adoption, workflow lock-in, or operator cost." },
      { id: "security_cloud", label: "Security / Cloud", action: "probe", score: 4.2, avgScore: 0, samples: 1, sharePct: 0.8, targetSharePct: 9, audienceLiftPct: 13.8, reason: "Needs more samples.", directive: "Lead with risk transfer, trust boundaries, or incident-response consequences." },
    ],
    promptDirectives: [
      "EXPAND Consumer Apps: translate the story into a consumer behavior or distribution habit change.",
      "EXPAND Big Tech Platform: frame the platform shift as distribution, margin, privacy, or default-control leverage.",
      "EXPLOIT AI / Agent Stack: tie the story to model adoption, workflow lock-in, or operator cost.",
    ],
  },
  experimentPlan: {
    slots: 3,
    budgetSafeSlots: 3,
    exploreSlots: 1,
    exploitSlots: 2,
    textPostCostUsd: 0.015,
    safeRemainingUsd: 2.81,
    baselineScore: 3.9,
    minSamples: 2,
    decision: "Run 3 post experiment(s): decision_rule, playbook, second_order.",
    recommendedFormats: [
      {
        slot: 1,
        id: "decision_rule",
        label: "Decision Rule",
        action: "exploit",
        avgScore: 2.8,
        samples: 10,
        reason: "Above baseline with enough samples.",
      },
      {
        slot: 2,
        id: "playbook",
        label: "Playbook",
        action: "test",
        avgScore: 2.7,
        samples: 2,
        reason: "Near baseline; keep in controlled rotation.",
      },
      {
        slot: 3,
        id: "second_order",
        label: "Second Order",
        action: "explore",
        avgScore: 0,
        samples: 0,
        reason: "Needs samples before the bot trusts it.",
      },
    ],
    holdFormats: [
      { id: "prediction", label: "Near-term Prediction", avgScore: 2.1, samples: 2 },
    ],
  },
};

const translations = {
  en: {
    page_title: "CODEX SRE Growth Command Center",
    brand_subtitle: "SRE Matrix Core",
    production: "Production",
    nav_overview: "Overview",
    nav_services: "Services",
    nav_workflow: "Workflow",
    nav_queue: "Swarm Queue",
    nav_signals: "L7 Load",
    nav_cost: "Cost Boundary",
    x_api_budget: "X API budget",
    top_eyebrow: "CODEX / Production Console",
    title: "CODEX Command Center",
    zero_extra_x_api: "Zero extra X API",
    live_data: "Live data",
    cached_data: "Cached telemetry",
    data_stale: "Data stale",
    fallback_data: "Fallback data",
    demo_mode: "Demo mode",
    exit_demo: "Exit demo",
    auto_demo: "Auto demo",
    stop_auto_demo: "Stop auto",
    demo_live: "30-second demo",
    demo_signal: "Signal Topology",
    demo_proof: "Best Packet",
    demo_goal: "Ingress Target",
    demo_actions: "Ops Runbook",
    demo_story: "Expo Story",
    open_x: "Open X",
    grafana_title: "1 Node Exporter: CODEX Growth Matrix",
    grafana_window: "Last 24 hours",
    story_eyebrow: "Expo brief",
    story_title: "Zero-waste control loop",
    story_outcome_score: "0 X read ops",
    story_outcome_copy: "Swarm inference, route queues, and feedback loops run without extra X search/read calls.",
    outcome_extra_reads: "X read ops",
    outcome_replies_ready: "Swarm output",
    outcome_api_left: "API left",
    outcome_best_hook: "Winning rule",
    pipeline_eyebrow: "Live pipeline",
    pipeline_title: "Inference to feedback",
    pipeline_rss: "Ingest",
    pipeline_rank: "Infer",
    pipeline_draft: "Output",
    pipeline_route: "Route",
    pipeline_learn: "Learn",
    pipeline_status: "{stages}-stage loop active · manual publish only",
    pipeline_metric_measured: "Packets",
    pipeline_metric_drafts: "Outputs",
    pipeline_metric_budget: "Budget",
    pipeline_metric_cadence: "Cadence",
    cadence_ready: "publish ready",
    cadence_advisory: "operator review",
    cadence_blocked: "publish blocked",
    cadence_status_publish: "{mode} · main post allowed",
    cadence_status_hold: "{mode} · manual distribution first",
    runlog_cadence: "cadence.control",
    runlog_eyebrow: "Task log",
    runlog_ready: "operator ready",
    runlog_ingest: "rss.ingest",
    runlog_score: "ranker.score",
    runlog_queue: "swarm.output",
    runlog_cost: "cost.guard",
    runlog_learn: "learning.writeback",
    runlog_live_data: "live dashboard data",
    runlog_fallback_data: "fallback telemetry",
    runlog_stale_data: "stale telemetry",
    runlog_posts_measured: "{count} packets measured",
    runlog_drafts_ready: "{count} outputs queued",
    runlog_budget_left: "{amount} budget left",
    runlog_best_hook: "{hook} rule wins",
    decision_trace_eyebrow: "Generation Decision Trace",
    decision_trace_title: "Candidate ranker blackbox",
    decision_trace_zero_reads: "0 X read ops",
    decision_trace_selected_packet: "Selected packet",
    decision_trace_candidate_pool: "Candidate pool",
    decision_trace_mutation_bus: "Angle mutation bus",
    decision_trace_gate_state: "Gate state",
    decision_trace_empty: "No generation decision trace recorded yet.",
    decision_trace_rank: "rank {rank}/{total}",
    decision_trace_score: "score {score}",
    decision_trace_format: "format",
    decision_trace_chars: "{count} chars",
    decision_trace_copy: "Copy selected",
    decision_trace_reason: "selection reason",
    decision_trace_diagnostics: "diagnostics",
    decision_trace_quality_gate: "quality gate",
    decision_trace_ai_gate: "AI gate",
    decision_trace_strict_gate: "strict gate",
    decision_trace_x_reads: "X reads",
    decision_trace_selected: "selected",
    decision_trace_real: "recorded trace",
    decision_trace_derived: "derived trace",
    decision_trace_online: "online",
    decision_trace_offline: "offline",
    monitor_load: "Total ingestion throughput / L7 traffic load",
    monitor_hourly: "UTC load balancer",
    hourly_current: "current {hour} · score {score}",
    hourly_next: "next {hour} · {hours}h",
    hourly_best: "best windows",
    hourly_samples: "{count} samples · {days}d",
    hourly_zero_reads: "0 X reads",
    monitor_alerts: "HTTP Status Triage (429 Rate-Limit / 503 Backend Faults)",
    monitor_partition: "API partition usage",
    monitor_requests: "X API operations per run",
    gauge_data_age: "Data age",
    gauge_followers: "Ingress Node Strength (Active Conns)",
    gauge_24h_impr: "L7 traffic load",
    gauge_signal_score: "Ranker score",
    gauge_reply_queue: "Swarm Intelligence Output",
    gauge_api_left: "API left",
    gauge_cost_used: "Cost used",
    gauge_success_rate: "Success rate",
    gauge_minutes: "{count} min",
    gauge_items: "{count} items",
    gauge_percent: "{value}%",
    current_value: "current {value}",
    monitor_calls_summary: "{calls} calls · {failures} failures",
    alert_ok_title: "All growth partitions nominal",
    alert_ok_body: "Telemetry is fresh, cost guard is active, and human-in-loop routing is ready.",
    alert_cached_title: "Dashboard synced from cache",
    alert_cached_body: "No X reads were used for this refresh. Metrics show the latest cached telemetry timestamp.",
    alert_warn_title: "Attention required",
    alert_warn_body: "The dashboard is using older telemetry. Run maintenance before dispatching the next route batch.",
    alert_danger_title: "Fallback telemetry active",
    alert_danger_body: "Live dashboard data could not be fetched, so the console is rendering fallback telemetry.",
    triage_state_ok: "HTTP partitions nominal",
    triage_state_cached: "Historical faults only",
    triage_state_warn: "HTTP status watch",
    triage_state_danger: "HTTP fault active",
    triage_title_ok: "HTTP partitions nominal",
    triage_title_cached: "Historical X API faults recorded",
    triage_title_warn: "HTTP status triage requires review",
    triage_title_danger: "429 / 5xx fault partition active",
    triage_summary_ok: "0 rate-limit / 5xx faults across {calls} X API ops.",
    triage_summary_fault: "{rateLimit} rate-limit · {backend} backend · {auth} auth · {client} client faults across {calls} X API ops.",
    triage_action_ok: "No 429 or 503-class faults. Cost guard remains the limiting partition.",
    triage_action_rate_limit: "Hold live search/read jobs and let cadence backoff drain before more X reads.",
    triage_action_backend: "Retry later with exponential backoff; keep manual outputs and cached telemetry active.",
    triage_action_auth: "Check OAuth scopes/tokens before the next publish or live read.",
    triage_action_client: "Inspect endpoint payloads and keep cached telemetry fallback active.",
    triage_429: "429 rate-limit",
    triage_5xx: "503 / 5xx backend",
    triage_auth: "401/403 auth",
    triage_client: "4xx client",
    triage_active: "{count} active",
    triage_clear: "clear",
    triage_fault_partitions: "fault partitions",
    triage_no_incidents: "no active fault partitions",
    triage_runbook: "operator runbook",
    triage_failure_rate: "{rate}% failure rate",
    governor_eyebrow: "Rate-Limit Governor",
    governor_title: "Budget reactor boundary",
    governor_ok: "reactor nominal",
    governor_warn: "boundary watch",
    governor_danger: "read gate sealed",
    governor_read_gate: "read gate",
    governor_post_gate: "post gate",
    governor_safe_cap: "safe cap",
    governor_safe_left: "safe left",
    governor_429: "429 partition",
    governor_503: "503 partition",
    governor_cooldown: "cooldown",
    governor_no_cooldown: "none",
    governor_cooldown_minutes: "{count} min",
    governor_runbook_ok: "Cached routing is clear. Keep live X reads at zero unless the cadence gate explicitly opens.",
    governor_runbook_warn: "Hold optional reads, route through prepared web targets, and let the cost boundary recover.",
    governor_runbook_danger: "Seal live search/read partitions. Use cached telemetry and manual outputs until cooldown clears.",
    budget_burn_eyebrow: "Burn-Rate Reactor",
    budget_burn_title: "Cost boundary runway",
    budget_burn_ok: "inside envelope",
    budget_burn_warn: "burn-rate watch",
    budget_burn_danger: "cost partition sealed",
    budget_burn_safe_left: "safe left",
    budget_burn_daily: "daily burn",
    budget_burn_runway: "runway",
    budget_burn_month_end: "month-end",
    budget_burn_series: "14d spend trace",
    budget_burn_partitions: "spend partitions",
    budget_burn_zero_reads: "0 extra X reads",
    budget_burn_safe: "safe",
    budget_burn_over: "over safe cap",
    budget_alloc_eyebrow: "Allocation Optimizer",
    budget_alloc_title: "Budget-to-traffic router",
    budget_alloc_zero_reads: "0 X read ops",
    budget_alloc_recommended: "recommended",
    budget_alloc_safe_left: "safe left",
    budget_alloc_runway: "runway",
    budget_alloc_lanes: "allocation lanes",
    budget_alloc_cost: "cost",
    budget_alloc_slots: "slots",
    budget_alloc_lift: "lift",
    budget_alloc_efficiency: "efficiency",
    budget_alloc_gate: "gate",
    budget_alloc_runbook: "allocator runbook",
    budget_alloc_manual: "manual route burst",
    budget_alloc_text: "text post experiment",
    budget_alloc_media: "media post surge",
    budget_alloc_metrics: "metrics refresh",
    budget_alloc_live: "live X search",
    budget_alloc_open: "open",
    budget_alloc_guarded: "guarded",
    budget_alloc_closed: "closed",
    budget_alloc_sealed: "sealed",
    budget_alloc_cached_only: "cached only",
    mission_eyebrow: "NOC Console",
    mission_title: "Live server-matrix growth operations.",
    mission_copy: "Monitor feed ingress, model inference, route queues, feedback loops, and API cost boundaries from one command surface.",
    expo_mode: "Expo Mode",
    noc_runtime: "Runtime",
    noc_runtime_value: "Actions online",
    noc_sync: "Pages sync",
    noc_sync_value: "Static deploy",
    noc_budget: "Cost boundary",
    noc_budget_value: "No X read ops",
    noc_operator: "Control mode",
    noc_operator_value: "Human-in-loop",
    contract_source: "Source",
    contract_metrics: "Metrics",
    contract_charts: "Charts",
    contract_cost: "Cost boundary",
    contract_live_json: "data.json",
    contract_fallback_json: "fallbackData",
    contract_cached_json: "cached telemetry",
    contract_derived: "derived series",
    contract_updated: "updated {date}",
    contract_age: "age {age}",
    contract_samples: "{count} samples",
    contract_posts: "{count} packets",
    contract_cost_detail: "X {xSpend} · OpenAI {openaiSpend}",
    chart_source: "source {source}",
    chart_points: "{count} points",
    live: "Live",
    signal_map: "Signal Topology",
    signal_detail_close: "Close",
    signal_rss_title: "RSS ingest",
    signal_draft_title: "Swarm output queue",
    signal_score_title: "Ranker layer",
    signal_x_title: "X_ROUTE gateway",
    signal_learn_title: "Feedback loop",
    signal_rss_summary: "Feeds supply raw tech packets. The topology shows which sources produce measurable attention.",
    signal_draft_summary: "The swarm converts high-scoring angles into paste-ready outputs without auto-publishing.",
    signal_score_summary: "Every packet is ranked by L7 events, ACKs, thread acks, format, and source so the next run can bias toward what worked.",
    signal_x_summary: "The route gateway opens X web targets. Opening these links spends no X API read budget.",
    signal_learn_summary: "The feedback loop converts measured outcomes into tomorrow's hook, source, and format routing rules.",
    signal_sources: "RSS ingress sources",
    signal_latest_posts: "Recent packets",
    signal_drafts: "Queued outputs",
    signal_actions: "Human route targets",
    signal_learning: "Feedback notes",
    signal_metrics: "Live telemetry",
    signal_empty: "No data yet",
    signal_open: "Open",
    signal_node_value: "Value",
    signal_node_routes: "Routes",
    signal_node_health: "Health",
    signal_node_source: "Source",
    hero_signal_label: "Ranker score",
    hero_loop_label: "Today's loop",
    hero_cost_label: "Cost boundary",
    hero_strip_signal: "Throughput",
    hero_strip_cost: "Budget",
    hero_strip_learning: "Learning",
    start_loop: "Start loop",
    copy_top_three: "Copy top 3 outputs",
    deployment: "Deploy timestamp",
    followers: "active conns",
    impressions_24h_short: "24h L7",
    api_left: "API Left",
    next_reply: "Next swarm output",
    server_health: "Server Health",
    runtime_services: "Runtime services",
    inference_eyebrow: "Swarm Intelligence",
    inference_title: "Model inference stream",
    inference_cached: "cached stream",
    inference_live: "tracked usage",
    inference_calls: "inference calls",
    inference_tokens: "tokens",
    inference_cost: "model cost",
    inference_failures: "faults",
    inference_no_calls: "No tracked model calls yet; rendering cached outputs from the swarm queue.",
    inference_model_fallback: "cached-output-router",
    inference_purpose_fallback: "manual_reply_drafts",
    inference_status_ok: "model stream nominal",
    inference_status_watch: "model stream watch",
    inference_model_calls: "{count} calls",
    inference_token_short: "{count} tok",
    no_extra_x_reads: "No extra X reads",
    traffic: "L7 traffic",
    signal_shape: "7d ingestion waveform",
    posting_pipeline: "Inference Pipeline",
    today_workflow: "Operator runbook",
    manual_web_actions: "Human-in-loop web actions",
    dispatch_eyebrow: "Distribution Ops",
    dispatch_title: "Operator dispatch queue",
    dispatch_state: "{ready}/{total} missions armed",
    dispatch_primary: "Primary route",
    dispatch_sla: "SLA {minutes}m",
    dispatch_replies: "{count} route ops",
    dispatch_expected: "+{lift}% expected lift",
    dispatch_zero_reads: "0 X read ops",
    dispatch_runbook: "Operator runbook",
    dispatch_empty: "No dispatch missions queued.",
    operator_packet_eyebrow: "Operator Packet",
    operator_packet_title: "Execute this route first",
    operator_packet_armed: "armed",
    operator_packet_route: "Route",
    operator_packet_sla: "SLA",
    operator_packet_replies: "Route target",
    operator_packet_lift: "Lift model",
    operator_packet_budget: "Cost mode",
    operator_packet_copy: "Copy packet",
    dispatch_manifest_eyebrow: "Dispatch Manifest",
    dispatch_manifest_title: "Today's zero-read route packet",
    dispatch_manifest_ready: "Packets ready",
    dispatch_manifest_x_reads: "X read ops",
    dispatch_manifest_cost: "Incremental X API",
    dispatch_manifest_lift: "Lift model",
    dispatch_manifest_next: "Next action",
    dispatch_manifest_copy: "Copy full manifest",
    dispatch_manifest_packets: "Route packets",
    dispatch_manifest_checks: "Guard checks",
    route_amp_eyebrow: "Route Amplifier",
    route_amp_title: "Cached distribution leverage",
    route_amp_ready: "Ready lanes",
    route_amp_score: "Amp score",
    route_amp_top: "Top route",
    route_amp_formula: "Scoring formula",
    route_amp_zero_reads: "0 X reads",
    operator_protocol: "Execution protocol",
    operator_progress: "{done}/{total} steps armed",
    operator_step_done: "done",
    operator_step_pending: "pending",
    operator_step_saved: "Protocol state saved",
    operator_step_reset: "Protocol reset",
    operator_reset: "Reset protocol",
    operator_telemetry_eyebrow: "NOC Ledger",
    operator_telemetry_title: "Local execution telemetry",
    operator_telemetry_steps: "protocol steps",
    operator_telemetry_missions: "routes complete",
    operator_telemetry_zero_reads: "X read ops",
    operator_telemetry_latest: "recent events",
    operator_telemetry_empty: "No local execution events yet.",
    operator_event_done: "step completed",
    operator_event_pending: "step reopened",
    operator_event_reset: "protocol reset",
    operator_slo_eyebrow: "Growth SLO",
    operator_slo_title: "Manual distribution service level",
    operator_slo_status_ok: "within boundary",
    operator_slo_status_warn: "needs operator",
    operator_slo_status_danger: "partition degraded",
    operator_slo_latency: "completion budget",
    operator_slo_target: "route target",
    operator_slo_lift: "expected lift",
    operator_slo_score: "score model",
    operator_slo_budget: "cost per reply",
    operator_slo_window: "next hot window",
    operator_slo_lanes: "route lanes",
    operator_slo_rules: "service rules",
    operator_slo_zero_reads: "zero X read burn",
    operator_stop: "Stop conditions",
    operator_writeback: "Writeback",
    runbook: "Runbook",
    operator_notes: "Runbook notes",
    cost_note: "Dashboard sync uses GitHub API only. It does not add X API search/read calls.",
    media_firewall: "Media upload firewall",
    media_firewall_hold: "partition closed",
    media_firewall_allow: "partition armed",
    media_firewall_lift: "Media lift",
    media_firewall_samples: "Samples",
    media_firewall_delta: "Upload delta",
    media_firewall_reads: "X reads",
    media_firewall_threshold: "threshold {value}%",
    media_firewall_unknown: "unknown",
    media_firewall_evidence: "ROI evidence",
    reply_queue: "Swarm Output Queue",
    copy_ready_drafts: "Paste-ready inference outputs",
    cost_guard: "Cost Boundary",
    guarded: "Guarded",
    signal_store: "Telemetry Store",
    recent_winners: "Highest-throughput packets",
    last_7_days: "Last 7 days",
    score: "Ranker",
    impr: "L7 events",
    likes: "ACKs",
    format: "Format",
    tweet: "Packet",
    copyright_suffix: "All rights reserved.",
    updated: "Updated {date}",
    money_left: "${amount} left",
    spend_cap: "{spend} spent / ${cap} cap",
    no_previous_snapshot: "No previous snapshot",
    since_last_snapshot: "{delta} since last snapshot",
    posts_likes: "{posts} pkts · {likes} ACKs",
    posts_replies: "{posts} pkts · {replies} thread acks",
    spent_month: "{spend} spent in {month}",
    metric_followers: "Ingress Node Strength (Active Conns)",
    metric_24h_impressions: "Total Ingestion Throughput / L7 Traffic Load",
    metric_7d_signal: "7d Ingestion Throughput / L7 Traffic Load",
    metric_api_remaining: "API remaining",
    meta_audience: "active conns",
    meta_traffic: "l7 events",
    meta_observability: "observability",
    meta_budget: "budget",
    goal_eyebrow: "Ingress Target",
    goal_title: "1,000 active conns is the ingress SLO.",
    goal_remaining: "{count} to goal",
    goal_progress: "{current} / {target} active conns",
    goal_current: "Current",
    goal_target: "Target",
    goal_next: "Next milestone",
    goal_daily: "Daily target",
    daily_target_value: "{replies} route ops + {posts} packet",
    kinetics_eyebrow: "Growth Kinetics",
    kinetics_title: "Viral load controller",
    kinetics_score: "Kinetic score",
    kinetics_zero_reads: "0 X read ops",
    kinetics_mode_starved: "starved",
    kinetics_mode_ignition: "ignition",
    kinetics_mode_acceleration: "acceleration",
    kinetics_mode_compounding: "compounding",
    kinetics_empty: "No growth kinetics telemetry available.",
    learning_eyebrow: "Feedback Layer",
    learning_title: "Next inference rule to deploy",
    autopilot_eyebrow: "Model Inference Stream",
    autopilot_mode: "Mode",
    autopilot_samples: "Samples",
    autopilot_baseline: "Baseline",
    autopilot_primary: "Primary rule",
    autopilot_directives: "Prompt directives",
    autopilot_exploit: "Exploit",
    autopilot_explore: "Explore",
    autopilot_hold: "Hold",
    angle_eyebrow: "Angle Scheduler",
    angle_title: "Next prompt routing slots",
    angle_mode: "Mode",
    angle_confidence: "Confidence",
    angle_load: "L7 load",
    angle_peak: "Peak bucket",
    angle_budget: "Safe budget",
    angle_slots: "Scheduled slots",
    angle_directives: "Runtime directives",
    angle_slot: "slot {slot}",
    angle_weight: "weight {weight}",
    angle_zero_reads: "0 X read ops",
    angle_empty: "No angle schedule available.",
    angle_mode_surge_exploit: "surge exploit",
    angle_mode_recovery_route: "recovery route",
    angle_mode_sample_discovery: "sample discovery",
    angle_mode_controlled_rotation: "controlled rotation",
    writeback_eyebrow: "Learning Writeback",
    writeback_title: "Rule mutation ledger",
    writeback_zero_reads: "0 X read ops",
    writeback_source: "Source",
    writeback_epoch: "Epoch",
    writeback_active: "Active rule",
    writeback_next: "Next writeback",
    writeback_mutations: "Mutations",
    writeback_directives: "Committed directives",
    writeback_empty: "No learning writeback ledger available.",
    mutation_eyebrow: "Angle Mutation Reactor",
    mutation_title: "Next prompt bias kernel",
    mutation_zero_reads: "0 X read ops",
    mutation_score: "Mutation score",
    mutation_bias: "Next bias",
    mutation_primary: "Primary mutation",
    mutation_cells: "Control cells",
    mutation_ledger: "Mutation ledger",
    mutation_patch: "Prompt patch",
    mutation_guardrails: "Guardrails",
    mutation_copy_patch: "Copy patch",
    mutation_empty: "No angle mutation reactor output available.",
    audience_eyebrow: "Audience Mesh",
    audience_title: "Wide tech route balancer",
    audience_zero_reads: "0 X read ops",
    audience_primary: "Primary segment",
    audience_confidence: "Confidence",
    audience_samples: "Samples",
    audience_next: "Next route",
    audience_share: "share {share}% / target {target}%",
    audience_lift: "lift {lift}%",
    audience_score: "score {score}",
    audience_empty: "No audience route data available.",
    velocity_eyebrow: "Trend Velocity Radar",
    velocity_title: "RSS breakout detector",
    velocity_zero_reads: "0 X read ops",
    velocity_primary: "Primary packet",
    velocity_average: "Avg velocity",
    velocity_breakouts: "Breakouts",
    velocity_next: "Routing directive",
    velocity_age: "{hours}h",
    velocity_echoes: "{count} echoes",
    velocity_lift: "lift {lift}%",
    velocity_open_route: "Open route",
    velocity_copy_angle: "Copy angle",
    velocity_empty: "No trend velocity radar available.",
    matrix_eyebrow: "UTC Angle Matrix",
    matrix_title: "Temporal prompt fire-control",
    matrix_zero_reads: "cached analytics",
    matrix_mode: "Mode",
    matrix_confidence: "Confidence",
    matrix_samples: "{count} samples · {days}d",
    matrix_next: "Next directive",
    matrix_score: "matrix {score}",
    matrix_load: "L7 {load}",
    matrix_avg: "avg {score} · n={samples}",
    matrix_empty: "No temporal angle matrix available.",
    matrix_mode_peak_angle_wait: "peak wait",
    matrix_mode_surge_angle_exploit: "surge exploit",
    matrix_mode_temporal_rotation: "temporal rotation",
    best_hook: "Winning rule",
    worst_format: "Weakest format",
    best_source: "Best source",
    next_experiment: "Next experiment",
    experiment_plan: "Experiment allocation",
    experiment_budget: "{safe}/{total} budget-safe slots",
    experiment_empty: "No experiment allocation yet.",
    experiment_hold: "Hold",
    experiment_slot: "slot {slot}",
    control_eyebrow: "Growth Control Plane",
    control_title: "Next operating mode",
    control_pressure: "growth pressure",
    control_decision: "Decision",
    control_next_action: "Next action",
    control_top_route: "Top route",
    control_top_format: "Top format",
    control_safeguards: "Safeguards",
    control_publish_gate: "Publish",
    control_read_gate: "Read",
    control_distribution_gate: "Distribution",
    control_budget_gate: "Budget",
    control_mode_scale_experiment: "scale experiment",
    control_mode_manual_distribution: "manual distribution",
    control_mode_budget_guard: "budget guard",
    control_mode_cooldown: "cooldown",
    control_mode_auth_repair: "auth repair",
    control_mode_queue_starved: "queue starved",
    control_zero_reads: "0 extra X reads",
    flywheel_eyebrow: "Viral Flywheel Matrix",
    flywheel_title: "Zero-read growth loop routing",
    flywheel_velocity: "Velocity score",
    flywheel_rules: "Execution rules",
    flywheel_burst: "{replies} replies · +{lift}% expected lift · {route}",
    flywheel_mode_reply_burst: "reply burst",
    flywheel_mode_manual_distribution: "manual distribution",
    flywheel_mode_cooldown_cache_only: "cache-only cooldown",
    flywheel_mode_queue_build: "queue build",
    proof_eyebrow: "Proof of Work",
    proof_title: "Highest-throughput packet this week",
    score_label: "Score {score}",
    why_it_worked: "Why it worked",
    open_winner: "Open winner",
    proof_impressions: "L7 events",
    proof_likes: "ACKs",
    proof_replies: "thread acks",
    proof_format: "Format",
    loop_eyebrow: "Control Loop",
    loop_title: "System learns from every packet",
    loop_scan: "Ingest",
    loop_scan_detail: "Detect tech packets and broad audience hooks.",
    loop_write: "Infer",
    loop_write_detail: "Generate copy-ready outputs and sharper post formats.",
    loop_route: "Route",
    loop_route_detail: "Send the operator to high-throughput conversations.",
    loop_learn: "Learn",
    loop_learn_detail: "Feed metrics back into tomorrow's style choices.",
    daily_action_title: "Today: 3 operator route ops",
    daily_action_copy: "Open the first target, paste the prepared reply, then repeat the next two. No extra X API reads.",
    copy_first_reply: "Copy first output",
    zero_api_action: "Zero extra API",
    opportunity_eyebrow: "Opportunity Router",
    opportunity_title: "Highest leverage moves",
    opportunity_score: "score {score}",
    opportunity_confidence: "{confidence} confidence",
    opportunity_empty: "No opportunity queue yet.",
    opportunity_open: "Open route",
    opportunity_copy: "Copy paired output",
    svc_news_ingest: "NEWS INGEST",
    svc_draft_queue: "SWARM OUTPUT",
    health_watch: "watch",
    health_ok: "ok",
    health_idle: "idle",
    calls: "{count} calls",
    failures: "{count} failures",
    tracked_impressions: "Tracked L7 events",
    low_cost_mode: "Low-cost mode",
    posts_7d: "{posts} packets / 7d",
    queued_for_operator: "queued for operator paste",
    open_search: "Open search",
    copy_draft: "Copy output",
    copy: "Copy",
    draft_relevant: "Relevant tech packet",
    reply_draft: "swarm output",
    endpoint_status: "{calls} calls · status {status}",
    copy_failed: "Copy failed",
    copied: "Copied",
    draft_label: "Output {index}",
  },
  zh: {
    page_title: "CODEX SRE 增长指挥中心",
    brand_subtitle: "SRE 矩阵核心",
    production: "生产环境",
    nav_overview: "总览",
    nav_services: "服务",
    nav_workflow: "流程",
    nav_queue: "群体队列",
    nav_signals: "L7 负载",
    nav_cost: "成本边界",
    x_api_budget: "X API 预算",
    top_eyebrow: "CODEX / 生产控制台",
    title: "CODEX 指挥中心",
    zero_extra_x_api: "零额外 X API",
    live_data: "实时数据",
    cached_data: "缓存遥测",
    data_stale: "数据过期",
    fallback_data: "备用数据",
    demo_mode: "演示模式",
    exit_demo: "退出演示",
    auto_demo: "自动演示",
    stop_auto_demo: "停止轮播",
    demo_live: "30 秒演示",
    demo_signal: "信号拓扑",
    demo_proof: "最高吞吐包",
    demo_goal: "入口目标",
    demo_actions: "运维手册",
    demo_story: "Expo 故事",
    open_x: "打开 X",
    grafana_title: "1 Node Exporter: CODEX 增长矩阵",
    grafana_window: "最近 24 小时",
    story_eyebrow: "Expo 简报",
    story_title: "零浪费控制闭环",
    story_outcome_score: "0 次 X 读取操作",
    story_outcome_copy: "群体推理、路由队列和反馈闭环在线运行，同时不增加 X 搜索/读取调用。",
    outcome_extra_reads: "X 读取操作",
    outcome_replies_ready: "群体输出",
    outcome_api_left: "API 剩余",
    outcome_best_hook: "胜出规则",
    pipeline_eyebrow: "实时流水线",
    pipeline_title: "推理到反馈",
    pipeline_rss: "抓取",
    pipeline_rank: "推理",
    pipeline_draft: "输出",
    pipeline_route: "分发",
    pipeline_learn: "学习",
    pipeline_status: "{stages} 阶段闭环在线 · 仅人工发布",
    pipeline_metric_measured: "数据包",
    pipeline_metric_drafts: "输出",
    pipeline_metric_budget: "预算",
    pipeline_metric_cadence: "节奏",
    cadence_ready: "可以发帖",
    cadence_advisory: "人工复核",
    cadence_blocked: "已拦截发帖",
    cadence_status_publish: "{mode} · 允许主帖",
    cadence_status_hold: "{mode} · 先做人工分发",
    runlog_cadence: "cadence.control",
    runlog_eyebrow: "任务日志",
    runlog_ready: "操作者就绪",
    runlog_ingest: "rss.ingest",
    runlog_score: "ranker.score",
    runlog_queue: "swarm.output",
    runlog_cost: "cost.guard",
    runlog_learn: "learning.writeback",
    runlog_live_data: "实时看板数据",
    runlog_fallback_data: "备用遥测",
    runlog_stale_data: "过期遥测",
    runlog_posts_measured: "已测量 {count} 个数据包",
    runlog_drafts_ready: "{count} 条输出入队",
    runlog_budget_left: "预算剩余 {amount}",
    runlog_best_hook: "胜出规则：{hook}",
    decision_trace_eyebrow: "生成决策追踪",
    decision_trace_title: "候选排序黑盒",
    decision_trace_zero_reads: "0 次 X 读取操作",
    decision_trace_selected_packet: "选中数据包",
    decision_trace_candidate_pool: "候选池",
    decision_trace_mutation_bus: "角度变异总线",
    decision_trace_gate_state: "闸门状态",
    decision_trace_empty: "还没有记录生成决策 trace。",
    decision_trace_rank: "排名 {rank}/{total}",
    decision_trace_score: "分数 {score}",
    decision_trace_format: "格式",
    decision_trace_chars: "{count} 字符",
    decision_trace_copy: "复制选中内容",
    decision_trace_reason: "选择原因",
    decision_trace_diagnostics: "诊断",
    decision_trace_quality_gate: "质量闸门",
    decision_trace_ai_gate: "AI 闸门",
    decision_trace_strict_gate: "严格闸门",
    decision_trace_x_reads: "X 读取",
    decision_trace_selected: "已选中",
    decision_trace_real: "真实记录",
    decision_trace_derived: "派生记录",
    decision_trace_online: "在线",
    decision_trace_offline: "关闭",
    monitor_load: "总入口吞吐 / L7 流量负载",
    monitor_hourly: "UTC 负载均衡器",
    hourly_current: "当前 {hour} · 评分 {score}",
    hourly_next: "下个 {hour} · {hours} 小时",
    hourly_best: "最佳窗口",
    hourly_samples: "{count} 样本 · {days} 天",
    hourly_zero_reads: "0 次 X 读取",
    monitor_alerts: "HTTP 状态分诊（429 限流 / 503 后端故障）",
    monitor_partition: "API 分区用量",
    monitor_requests: "每轮 X API 操作",
    gauge_data_age: "数据年龄",
    gauge_followers: "入口节点强度（活跃连接）",
    gauge_24h_impr: "L7 流量负载",
    gauge_signal_score: "排序器评分",
    gauge_reply_queue: "群体智能输出",
    gauge_api_left: "API 剩余",
    gauge_cost_used: "成本已用",
    gauge_success_rate: "成功率",
    gauge_minutes: "{count} 分钟",
    gauge_items: "{count} 项",
    gauge_percent: "{value}%",
    current_value: "当前 {value}",
    monitor_calls_summary: "{calls} 次调用 · {failures} 次失败",
    alert_ok_title: "增长分区全部正常",
    alert_ok_body: "遥测新鲜、成本边界开启，人工路由入口已就绪。",
    alert_cached_title: "Dashboard 已从缓存同步",
    alert_cached_body: "这次刷新没有读取 X API；指标显示的是最近一次缓存遥测时间。",
    alert_warn_title: "需要关注",
    alert_warn_body: "看板正在使用较旧遥测。派发下一批路由前，先跑一次 maintenance。",
    alert_danger_title: "备用遥测启用",
    alert_danger_body: "实时看板数据拉取失败，因此控制台正在渲染备用遥测。",
    triage_state_ok: "HTTP 分区正常",
    triage_state_cached: "仅有历史故障",
    triage_state_warn: "HTTP 状态观察",
    triage_state_danger: "HTTP 故障激活",
    triage_title_ok: "HTTP 分区全部正常",
    triage_title_cached: "记录到历史 X API 故障",
    triage_title_warn: "HTTP 状态分诊需要复核",
    triage_title_danger: "429 / 5xx 故障分区激活",
    triage_summary_ok: "{calls} 次 X API 操作中没有 429 / 5xx 故障。",
    triage_summary_fault: "{calls} 次 X API 操作中：{rateLimit} 个限流 · {backend} 个后端 · {auth} 个授权 · {client} 个客户端故障。",
    triage_action_ok: "没有 429 或 503 类故障；当前主要限制仍是成本边界。",
    triage_action_rate_limit: "暂停实时搜索/读取任务，等待 cadence backoff 冷却后再读 X。",
    triage_action_backend: "稍后按指数退避重试；保持人工输出和缓存遥测路径在线。",
    triage_action_auth: "下次发布或实时读取前检查 OAuth scope/token。",
    triage_action_client: "检查 endpoint payload，并保持缓存遥测兜底。",
    triage_429: "429 限流",
    triage_5xx: "503 / 5xx 后端",
    triage_auth: "401/403 授权",
    triage_client: "4xx 客户端",
    triage_active: "{count} 个活跃",
    triage_clear: "清空",
    triage_fault_partitions: "故障分区",
    triage_no_incidents: "无活跃故障分区",
    triage_runbook: "操作员运行手册",
    triage_failure_rate: "{rate}% 失败率",
    governor_eyebrow: "限流控制器",
    governor_title: "预算反应堆边界",
    governor_ok: "反应堆正常",
    governor_warn: "边界观察",
    governor_danger: "读取闸门封闭",
    governor_read_gate: "读取闸门",
    governor_post_gate: "发帖闸门",
    governor_safe_cap: "安全上限",
    governor_safe_left: "安全剩余",
    governor_429: "429 分区",
    governor_503: "503 分区",
    governor_cooldown: "冷却",
    governor_no_cooldown: "无",
    governor_cooldown_minutes: "{count} 分钟",
    governor_runbook_ok: "缓存路由清晰。除非 cadence 闸门明确放行，否则保持实时 X 读取为零。",
    governor_runbook_warn: "暂停可选读取，改走已准备的网页目标，并等待成本边界恢复。",
    governor_runbook_danger: "封闭实时搜索/读取分区。冷却解除前，只使用缓存遥测和人工输出。",
    budget_burn_eyebrow: "燃烧率反应堆",
    budget_burn_title: "成本边界续航",
    budget_burn_ok: "安全包线内",
    budget_burn_warn: "燃烧率观察",
    budget_burn_danger: "成本分区封闭",
    budget_burn_safe_left: "安全剩余",
    budget_burn_daily: "日燃烧",
    budget_burn_runway: "续航",
    budget_burn_month_end: "月底预测",
    budget_burn_series: "14 天成本轨迹",
    budget_burn_partitions: "成本分区",
    budget_burn_zero_reads: "0 次额外 X 读取",
    budget_burn_safe: "安全",
    budget_burn_over: "超过安全上限",
    budget_alloc_eyebrow: "分配优化器",
    budget_alloc_title: "预算到流量路由器",
    budget_alloc_zero_reads: "0 次 X 读取操作",
    budget_alloc_recommended: "推荐",
    budget_alloc_safe_left: "安全剩余",
    budget_alloc_runway: "续航",
    budget_alloc_lanes: "分配通道",
    budget_alloc_cost: "成本",
    budget_alloc_slots: "槽位",
    budget_alloc_lift: "提升",
    budget_alloc_efficiency: "效率",
    budget_alloc_gate: "闸门",
    budget_alloc_runbook: "分配手册",
    budget_alloc_manual: "人工路由爆发",
    budget_alloc_text: "文本发帖实验",
    budget_alloc_media: "媒体发帖加速",
    budget_alloc_metrics: "指标刷新",
    budget_alloc_live: "实时 X 搜索",
    budget_alloc_open: "开放",
    budget_alloc_guarded: "受控",
    budget_alloc_closed: "关闭",
    budget_alloc_sealed: "封闭",
    budget_alloc_cached_only: "仅缓存",
    mission_eyebrow: "NOC 控制台",
    mission_title: "实时服务器矩阵增长运维。",
    mission_copy: "在一个指挥界面里监控 feed 入口、模型推理、路由队列、反馈闭环和 API 成本边界。",
    expo_mode: "Expo 模式",
    noc_runtime: "运行时",
    noc_runtime_value: "Actions 在线",
    noc_sync: "Pages 同步",
    noc_sync_value: "静态部署",
    noc_budget: "成本边界",
    noc_budget_value: "无 X 读取操作",
    noc_operator: "控制模式",
    noc_operator_value: "人工闭环",
    contract_source: "来源",
    contract_metrics: "指标",
    contract_charts: "图表",
    contract_cost: "成本边界",
    contract_live_json: "data.json",
    contract_fallback_json: "备用数据",
    contract_cached_json: "缓存遥测",
    contract_derived: "推导序列",
    contract_updated: "更新 {date}",
    contract_age: "年龄 {age}",
    contract_samples: "{count} 个样本",
    contract_posts: "{count} 个数据包",
    contract_cost_detail: "X {xSpend} · OpenAI {openaiSpend}",
    chart_source: "来源 {source}",
    chart_points: "{count} 个点",
    live: "在线",
    signal_map: "信号拓扑",
    signal_detail_close: "关闭",
    signal_rss_title: "RSS 抓取",
    signal_draft_title: "群体输出队列",
    signal_score_title: "排序器层",
    signal_x_title: "X_ROUTE 网关",
    signal_learn_title: "反馈闭环",
    signal_rss_summary: "RSS 提供原始科技数据包。拓扑展示哪些来源真的带来可测流量。",
    signal_draft_summary: "系统把高分角度转换成可粘贴输出，但不会自动发布。",
    signal_score_summary: "每个数据包按 L7 事件、ACK、线程 ACK、格式和来源排序，下一轮偏向有效模式。",
    signal_x_summary: "路由网关只打开 X 网页目标。打开这些链接不会消耗 X API 读取预算。",
    signal_learn_summary: "反馈闭环把已测结果转成明天的钩子、来源和格式路由规则。",
    signal_sources: "RSS 入口来源",
    signal_latest_posts: "近期数据包",
    signal_drafts: "已排队输出",
    signal_actions: "人工路由目标",
    signal_learning: "反馈备注",
    signal_metrics: "实时遥测",
    signal_empty: "暂无数据",
    signal_open: "打开",
    signal_node_value: "数值",
    signal_node_routes: "连接",
    signal_node_health: "状态",
    signal_node_source: "来源",
    hero_signal_label: "排序器评分",
    hero_loop_label: "今日流程",
    hero_cost_label: "成本边界",
    hero_strip_signal: "吞吐",
    hero_strip_cost: "预算",
    hero_strip_learning: "学习",
    start_loop: "开始流程",
    copy_top_three: "复制前 3 条输出",
    deployment: "部署时间戳",
    followers: "活跃连接",
    impressions_24h_short: "24h L7",
    api_left: "API 剩余",
    next_reply: "下一条群体输出",
    server_health: "服务健康",
    runtime_services: "运行服务",
    inference_eyebrow: "群体智能",
    inference_title: "模型推理流",
    inference_cached: "缓存流",
    inference_live: "已追踪用量",
    inference_calls: "推理调用",
    inference_tokens: "tokens",
    inference_cost: "模型成本",
    inference_failures: "故障",
    inference_no_calls: "暂未追踪到模型调用；正在从群体输出队列渲染缓存流。",
    inference_model_fallback: "缓存输出路由器",
    inference_purpose_fallback: "人工回复输出",
    inference_status_ok: "模型流正常",
    inference_status_watch: "模型流观察",
    inference_model_calls: "{count} 次调用",
    inference_token_short: "{count} tok",
    no_extra_x_reads: "不增加 X 读取",
    traffic: "L7 流量",
    signal_shape: "7 日入口吞吐波形",
    posting_pipeline: "推理流水线",
    today_workflow: "操作员运行手册",
    manual_web_actions: "人工闭环网页操作",
    dispatch_eyebrow: "分发运维",
    dispatch_title: "操作员派发队列",
    dispatch_state: "{ready}/{total} 个任务就绪",
    dispatch_primary: "主路由",
    dispatch_sla: "SLA {minutes} 分钟",
    dispatch_replies: "{count} 次路由操作",
    dispatch_expected: "预期提升 +{lift}%",
    dispatch_zero_reads: "0 次 X 读取",
    dispatch_runbook: "操作手册",
    dispatch_empty: "暂无派发任务。",
    operator_packet_eyebrow: "操作员数据包",
    operator_packet_title: "先执行这条路由",
    operator_packet_armed: "已装载",
    operator_packet_route: "路由",
    operator_packet_sla: "SLA",
    operator_packet_replies: "路由目标",
    operator_packet_lift: "增益模型",
    operator_packet_budget: "成本模式",
    operator_packet_copy: "复制数据包",
    dispatch_manifest_eyebrow: "派发清单",
    dispatch_manifest_title: "今日零读取路由包",
    dispatch_manifest_ready: "就绪包",
    dispatch_manifest_x_reads: "X 读取操作",
    dispatch_manifest_cost: "增量 X API",
    dispatch_manifest_lift: "增益模型",
    dispatch_manifest_next: "下一步",
    dispatch_manifest_copy: "复制完整清单",
    dispatch_manifest_packets: "路由数据包",
    dispatch_manifest_checks: "守卫检查",
    route_amp_eyebrow: "路由放大器",
    route_amp_title: "缓存分发杠杆",
    route_amp_ready: "就绪通道",
    route_amp_score: "放大评分",
    route_amp_top: "最高路由",
    route_amp_formula: "评分公式",
    route_amp_zero_reads: "0 次 X 读取",
    operator_protocol: "执行协议",
    operator_progress: "{done}/{total} 步已完成",
    operator_step_done: "完成",
    operator_step_pending: "待执行",
    operator_step_saved: "协议状态已保存",
    operator_step_reset: "协议已重置",
    operator_reset: "重置协议",
    operator_telemetry_eyebrow: "NOC 账本",
    operator_telemetry_title: "本地执行遥测",
    operator_telemetry_steps: "协议步骤",
    operator_telemetry_missions: "完成路由",
    operator_telemetry_zero_reads: "X 读取操作",
    operator_telemetry_latest: "最近事件",
    operator_telemetry_empty: "暂无本地执行事件。",
    operator_event_done: "步骤完成",
    operator_event_pending: "步骤重开",
    operator_event_reset: "协议重置",
    operator_slo_eyebrow: "增长 SLO",
    operator_slo_title: "人工分发服务等级",
    operator_slo_status_ok: "边界内",
    operator_slo_status_warn: "需要操作员",
    operator_slo_status_danger: "分区降级",
    operator_slo_latency: "完成预算",
    operator_slo_target: "路由目标",
    operator_slo_lift: "预期增益",
    operator_slo_score: "评分模型",
    operator_slo_budget: "单次回复成本",
    operator_slo_window: "下个高峰窗口",
    operator_slo_lanes: "路由通道",
    operator_slo_rules: "服务规则",
    operator_slo_zero_reads: "零 X 读取燃烧",
    operator_stop: "停止条件",
    operator_writeback: "写回",
    runbook: "运行手册",
    operator_notes: "运行手册备注",
    cost_note: "看板同步只使用 GitHub API，不增加 X API 搜索/读取调用。",
    media_firewall: "媒体上传防火墙",
    media_firewall_hold: "分区关闭",
    media_firewall_allow: "分区待命",
    media_firewall_lift: "媒体增益",
    media_firewall_samples: "样本",
    media_firewall_delta: "上传增量",
    media_firewall_reads: "X 读取",
    media_firewall_threshold: "阈值 {value}%",
    media_firewall_unknown: "未知",
    media_firewall_evidence: "ROI 证据",
    reply_queue: "群体输出队列",
    copy_ready_drafts: "可粘贴推理输出",
    cost_guard: "成本边界",
    guarded: "已守卫",
    signal_store: "遥测库",
    recent_winners: "最高吞吐数据包",
    last_7_days: "最近 7 天",
    score: "排序器",
    impr: "L7 事件",
    likes: "ACK",
    format: "格式",
    tweet: "数据包",
    copyright_suffix: "保留所有权利。",
    updated: "更新于 {date}",
    money_left: "剩余 ${amount}",
    spend_cap: "已花 {spend} / 上限 ${cap}",
    no_previous_snapshot: "暂无上次快照",
    since_last_snapshot: "较上次快照 {delta}",
    posts_likes: "{posts} 个包 · {likes} 个 ACK",
    posts_replies: "{posts} 个包 · {replies} 个线程 ACK",
    spent_month: "{month} 已花 {spend}",
    metric_followers: "入口节点强度（活跃连接）",
    metric_24h_impressions: "总入口吞吐 / L7 流量负载",
    metric_7d_signal: "7 日入口吞吐 / L7 流量负载",
    metric_api_remaining: "API 剩余",
    meta_audience: "活跃连接",
    meta_traffic: "L7 事件",
    meta_observability: "观测",
    meta_budget: "预算",
    goal_eyebrow: "入口目标",
    goal_title: "1,000 活跃连接是当前入口 SLO。",
    goal_remaining: "距目标还差 {count}",
    goal_progress: "{current} / {target} 活跃连接",
    goal_current: "当前",
    goal_target: "目标",
    goal_next: "下一里程碑",
    goal_daily: "每日目标",
    daily_target_value: "{replies} 次路由操作 + {posts} 个数据包",
    kinetics_eyebrow: "增长动力学",
    kinetics_title: "病毒负载控制器",
    kinetics_score: "动能评分",
    kinetics_zero_reads: "0 次 X 读取",
    kinetics_mode_starved: "缺流量",
    kinetics_mode_ignition: "点火",
    kinetics_mode_acceleration: "加速",
    kinetics_mode_compounding: "复利",
    kinetics_empty: "暂无增长动力学遥测。",
    learning_eyebrow: "反馈层",
    learning_title: "下一条要部署的推理规则",
    autopilot_eyebrow: "模型推理流",
    autopilot_mode: "模式",
    autopilot_samples: "样本",
    autopilot_baseline: "基线",
    autopilot_primary: "主规则",
    autopilot_directives: "Prompt 指令",
    autopilot_exploit: "利用",
    autopilot_explore: "探索",
    autopilot_hold: "暂停",
    angle_eyebrow: "角度调度器",
    angle_title: "下一轮 Prompt 路由槽",
    angle_mode: "模式",
    angle_confidence: "置信度",
    angle_load: "L7 负载",
    angle_peak: "峰值桶",
    angle_budget: "安全预算",
    angle_slots: "已调度槽位",
    angle_directives: "运行时指令",
    angle_slot: "槽位 {slot}",
    angle_weight: "权重 {weight}",
    angle_zero_reads: "0 次 X 读取",
    angle_empty: "暂无角度调度。",
    angle_mode_surge_exploit: "峰值利用",
    angle_mode_recovery_route: "恢复路由",
    angle_mode_sample_discovery: "样本探索",
    angle_mode_controlled_rotation: "受控轮换",
    writeback_eyebrow: "学习写回",
    writeback_title: "规则变更账本",
    writeback_zero_reads: "0 次 X 读取",
    writeback_source: "来源",
    writeback_epoch: "周期",
    writeback_active: "当前规则",
    writeback_next: "下一次写回",
    writeback_mutations: "变更",
    writeback_directives: "已提交指令",
    writeback_empty: "暂无学习写回账本。",
    mutation_eyebrow: "角度变异反应堆",
    mutation_title: "下一轮 Prompt 偏置内核",
    mutation_zero_reads: "0 次 X 读取",
    mutation_score: "变异评分",
    mutation_bias: "下一轮偏置",
    mutation_primary: "主变异",
    mutation_cells: "控制单元",
    mutation_ledger: "变异账本",
    mutation_patch: "Prompt 补丁",
    mutation_guardrails: "护栏",
    mutation_copy_patch: "复制补丁",
    mutation_empty: "暂无角度变异反应堆输出。",
    audience_eyebrow: "受众网格",
    audience_title: "广域科技路由均衡器",
    audience_zero_reads: "0 次 X 读取",
    audience_primary: "主受众分区",
    audience_confidence: "置信度",
    audience_samples: "样本",
    audience_next: "下一条路由",
    audience_share: "占比 {share}% / 目标 {target}%",
    audience_lift: "增益 {lift}%",
    audience_score: "评分 {score}",
    audience_empty: "暂无受众路由数据。",
    velocity_eyebrow: "趋势速度雷达",
    velocity_title: "RSS 爆发检测器",
    velocity_zero_reads: "0 次 X 读取",
    velocity_primary: "主数据包",
    velocity_average: "平均速度",
    velocity_breakouts: "爆发主题",
    velocity_next: "路由指令",
    velocity_age: "{hours} 小时",
    velocity_echoes: "{count} 次回声",
    velocity_lift: "增益 {lift}%",
    velocity_open_route: "打开路由",
    velocity_copy_angle: "复制角度",
    velocity_empty: "暂无趋势速度雷达。",
    matrix_eyebrow: "UTC 角度矩阵",
    matrix_title: "时间 Prompt 火控",
    matrix_zero_reads: "缓存分析",
    matrix_mode: "模式",
    matrix_confidence: "置信度",
    matrix_samples: "{count} 个样本 · {days} 天",
    matrix_next: "下一条指令",
    matrix_score: "矩阵 {score}",
    matrix_load: "L7 {load}",
    matrix_avg: "均值 {score} · n={samples}",
    matrix_empty: "暂无时间角度矩阵。",
    matrix_mode_peak_angle_wait: "等待峰值",
    matrix_mode_surge_angle_exploit: "峰值利用",
    matrix_mode_temporal_rotation: "时间轮换",
    best_hook: "胜出规则",
    worst_format: "最弱格式",
    best_source: "最佳来源",
    next_experiment: "下一轮实验",
    experiment_plan: "实验配额",
    experiment_budget: "{safe}/{total} 个预算安全槽位",
    experiment_empty: "暂无实验配额。",
    experiment_hold: "暂停",
    experiment_slot: "槽位 {slot}",
    control_eyebrow: "增长控制平面",
    control_title: "下一轮运行模式",
    control_pressure: "增长压力",
    control_decision: "决策",
    control_next_action: "下一步",
    control_top_route: "最高优先路由",
    control_top_format: "最高优先格式",
    control_safeguards: "安全边界",
    control_publish_gate: "发布",
    control_read_gate: "读取",
    control_distribution_gate: "分发",
    control_budget_gate: "预算",
    control_mode_scale_experiment: "放大发帖实验",
    control_mode_manual_distribution: "人工分发",
    control_mode_budget_guard: "预算守卫",
    control_mode_cooldown: "冷却退避",
    control_mode_auth_repair: "授权修复",
    control_mode_queue_starved: "队列不足",
    control_zero_reads: "0 额外 X 读取",
    flywheel_eyebrow: "病毒飞轮矩阵",
    flywheel_title: "零读取增长闭环路由",
    flywheel_velocity: "速度评分",
    flywheel_rules: "执行规则",
    flywheel_burst: "{replies} 条回复 · 预期提升 +{lift}% · {route}",
    flywheel_mode_reply_burst: "回复爆发",
    flywheel_mode_manual_distribution: "人工分发",
    flywheel_mode_cooldown_cache_only: "缓存冷却",
    flywheel_mode_queue_build: "队列构建",
    proof_eyebrow: "真实证明",
    proof_title: "本周最高吞吐数据包",
    score_label: "评分 {score}",
    why_it_worked: "为什么有效",
    open_winner: "打开赢家",
    proof_impressions: "L7 事件",
    proof_likes: "ACK",
    proof_replies: "线程 ACK",
    proof_format: "格式",
    loop_eyebrow: "控制闭环",
    loop_title: "系统从每个数据包中学习",
    loop_scan: "入口",
    loop_scan_detail: "识别科技数据包和更大受众会关心的角度。",
    loop_write: "推理",
    loop_write_detail: "产出可复制输出和更锋利的发帖格式。",
    loop_route: "分发",
    loop_route_detail: "把操作者送到高吞吐对话入口。",
    loop_learn: "学习",
    loop_learn_detail: "把数据反馈到明天的风格选择。",
    daily_action_title: "今日：3 次操作员路由",
    daily_action_copy: "先打开第一个目标入口，粘贴准备好的回复，再重复后两项。不增加 X API 读取。",
    copy_first_reply: "复制第一条输出",
    zero_api_action: "零额外 API",
    opportunity_eyebrow: "机会路由",
    opportunity_title: "最高杠杆动作",
    opportunity_score: "评分 {score}",
    opportunity_confidence: "{confidence} 置信度",
    opportunity_empty: "暂无机会队列。",
    opportunity_open: "打开入口",
    opportunity_copy: "复制配套输出",
    svc_news_ingest: "新闻抓取",
    svc_draft_queue: "SWARM OUTPUT",
    health_watch: "关注",
    health_ok: "正常",
    health_idle: "空闲",
    calls: "{count} 次调用",
    failures: "{count} 次失败",
    tracked_impressions: "已追踪 L7 事件",
    low_cost_mode: "低成本模式",
    posts_7d: "{posts} 个数据包 / 7d",
    queued_for_operator: "等待人工粘贴",
    open_search: "打开搜索",
    copy_draft: "复制输出",
    copy: "复制",
    draft_relevant: "相关科技数据包",
    reply_draft: "群体输出",
    endpoint_status: "{calls} 次调用 · 状态 {status}",
    copy_failed: "复制失败",
    copied: "已复制",
    draft_label: "输出 {index}",
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
const formatNumber = (value, digits = 0) =>
  number(value).toLocaleString(currentLang === "zh" ? "zh-CN" : "en-US", {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  });
const FRESH_DATA_MAX_AGE_HOURS = 30;
const DEMO_STEP_MS = 7500;
const OPERATOR_STATE_PREFIX = "xbot-dashboard-operator-protocol:";
const OPERATOR_LEDGER_KEY = "xbot-dashboard-operator-ledger";
const OPERATOR_LEDGER_MAX = 20;
const DEMO_STEPS = [
  { id: "story", target: "#expo-story", labelKey: "demo_story" },
  { id: "signal", target: "#overview", labelKey: "demo_signal" },
  { id: "proof", target: "#proof", labelKey: "demo_proof" },
  { id: "goal", target: "#goal", labelKey: "demo_goal" },
  { id: "actions", target: "#today", labelKey: "demo_actions" },
];

let dashboardData = fallbackData;
let currentLang = document.documentElement.dataset.lang === "zh" ? "zh" : "en";
let currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
let dataLoadStatus = "fallback";
let demoMode = localStorage.getItem("xbot-dashboard-demo") === "true";
let autoDemo = false;
let demoStepIndex = 0;
let demoTimer = null;
let signalAnimationFrame = null;
let signalResizeTimer = null;
let activeSignalNode = "rss";
let signalDetailOpen = true;

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
  const guard = dashboardData.automation?.budgetGuard || {};
  const spend = number(api.spend);
  const cap = number(api.cap, number(guard.capUsd, 5));
  const remaining = api.remaining != null
    ? number(api.remaining)
    : guard.trackedSafeRemainingUsd != null
      ? number(guard.trackedSafeRemainingUsd)
      : Math.max(0, cap - spend);
  const ratio = cap > 0 ? Math.min(100, (spend / cap) * 100) : 0;
  return { api, spend, cap, remaining, ratio };
}

function mediaRoiGateData() {
  return (
    dashboardData.mediaRoiGate ||
    dashboardData.automation?.mediaRoiGate ||
    fallbackData.mediaRoiGate ||
    fallbackData.automation?.mediaRoiGate ||
    {}
  );
}

function formatCadenceMode(mode, { compact = false } = {}) {
  const normalized = String(mode || "publish_experiment");
  const labels = currentLang === "zh"
    ? {
        publish_experiment: compact ? "发帖" : "发帖实验",
        manual_distribution_only: compact ? "人工分发" : "仅人工分发",
        refresh_metrics_first: compact ? "刷新" : "先刷新数据",
        manual_override: compact ? "手动" : "手动覆盖",
        wait: compact ? "等待" : "等待窗口",
        wait_for_learned_peak: compact ? "等峰值" : "等待学习峰值",
        disabled: compact ? "关闭" : "控制器关闭",
      }
    : {
        publish_experiment: compact ? "publish" : "publish experiment",
        manual_distribution_only: compact ? "manual" : "manual distribution",
        refresh_metrics_first: compact ? "refresh" : "refresh metrics first",
        manual_override: compact ? "override" : "manual override",
        wait: compact ? "wait" : "wait window",
        wait_for_learned_peak: compact ? "peak wait" : "wait learned peak",
        disabled: compact ? "off" : "controller disabled",
      };
  return labels[normalized] || normalized.replace(/_/g, " ");
}

function cadenceData() {
  const cadence = dashboardData.cadence || fallbackData.cadence;
  if (cadence) return cadence;
  const last24h = dashboardData.last24h || fallbackData.last24h || {};
  const goal = dashboardData.growthGoal || fallbackData.growthGoal || {};
  const { remaining } = apiBudget();
  const posts = number(last24h.posts);
  const target = Math.max(1, number(goal.dailyPosts, 1));
  const publishAllowed = remaining > 0 && posts < target;
  return {
    enabled: true,
    enforcement: "derived",
    mode: publishAllowed ? "publish_experiment" : "manual_distribution_only",
    publishAllowed,
    willBlockPublish: !publishAllowed && remaining <= 0,
    reasonCode: publishAllowed ? "ok" : posts >= target ? "daily_target_reached" : "budget_safe_cap",
    severity: publishAllowed ? "ok" : "warn",
    reason: publishAllowed
      ? "Cadence allows the next post."
      : "Derived cadence prefers manual distribution before another post.",
    nextAction: publishAllowed
      ? "Proceed with the next post candidate."
      : "Use manual reply routes and keep X API spend flat.",
    postsLast24h: posts,
    dailyPostTarget: target,
    safeTextPostsLeft: remaining > 0 ? Math.floor(remaining / 0.015) : 0,
  };
}

const SIGNAL_NODE_COORDS = {
  rss: { x: 0.2, y: 0.32 },
  score: { x: 0.5, y: 0.19 },
  draft: { x: 0.22, y: 0.72 },
  x: { x: 0.76, y: 0.38 },
  learn: { x: 0.78, y: 0.72 },
};

const SIGNAL_NODE_BOUNDS = {
  default: { minX: 0.14, maxX: 0.86, minY: 0.16, maxY: 0.84 },
  rss: { minX: 0.16, maxX: 0.4, minY: 0.2, maxY: 0.48 },
  score: { minX: 0.36, maxX: 0.64, minY: 0.16, maxY: 0.34 },
  draft: { minX: 0.16, maxX: 0.42, minY: 0.58, maxY: 0.82 },
  x: { minX: 0.62, maxX: 0.84, minY: 0.28, maxY: 0.5 },
  learn: { minX: 0.62, maxX: 0.84, minY: 0.58, maxY: 0.82 },
};

const SIGNAL_NODE_LABELS = {
  en: {
    rss: "RSS",
    score: "SCORE",
    draft: "SWARM_OUT",
    x: "X_ROUTE",
    learn: "LEARN",
  },
  zh: {
    rss: "RSS",
    score: "SCORE",
    draft: "群体输出",
    x: "X_ROUTE",
    learn: "LEARN",
  },
};

const SIGNAL_UNIT_LABELS = {
  en: {},
  zh: {
    packets: "个包",
    outputs: "个输出",
    rank: "评分",
    best: "最佳",
    posts: "个包",
    ready: "就绪",
    "web routes": "条网页路由",
  },
};

const SRE_LABELS = {
  en: {
    "reply target": "route target",
    "mission queue": "route queue",
    "x read budget": "X read burn",
    writeback: "learning writeback",
    followers: "active conns",
    impressions: "L7 events",
    likes: "ACKs",
    replies: "thread acks",
    posts: "packets",
    score: "ranker score",
    tweet: "packet",
    draft: "swarm output",
  },
  zh: {
    "reply target": "路由目标",
    "mission queue": "路由队列",
    "x read budget": "X 读取燃烧",
    writeback: "学习写回",
    followers: "活跃连接",
    impressions: "L7 事件",
    likes: "ACK",
    replies: "线程 ACK",
    posts: "数据包",
    score: "排序器评分",
    tweet: "数据包",
    draft: "群体输出",
  },
};

function sreLabel(label) {
  const raw = String(label || "").trim();
  if (!raw) return "-";
  const normalized = raw.toLowerCase();
  return SRE_LABELS[currentLang]?.[normalized] || SRE_LABELS.en[normalized] || raw;
}

function sreText(value) {
  const raw = String(value ?? "");
  if (!raw) return raw;
  const enText = raw
    .replace(/\bposts\b/gi, "packets")
    .replace(/\bpost\b/gi, "packet")
    .replace(/\bimpressions\b/gi, "L7 events")
    .replace(/\bimpr\./gi, "L7")
    .replace(/\blikes\b/gi, "ACKs")
    .replace(/\blike\b/gi, "ACK")
    .replace(/\breplies\b/gi, "route ops")
    .replace(/\breply\b/gi, "route op")
    .replace(/\bdrafts\b/gi, "outputs")
    .replace(/\bdraft\b/gi, "output");
  if (currentLang !== "zh") return enText;
  return enText
    .replace(/条帖子|条帖/g, "个数据包")
    .replace(/帖子/g, "数据包")
    .replace(/曝光/g, "L7 事件")
    .replace(/点赞|赞/g, "ACK")
    .replace(/回复/g, "路由操作")
    .replace(/草稿/g, "输出");
}

function sumEndpointTotals(api = {}) {
  return (api.endpoints || []).reduce(
    (totals, endpoint) => ({
      calls: totals.calls + number(endpoint.calls),
      failures: totals.failures + number(endpoint.failures),
    }),
    { calls: 0, failures: 0 },
  );
}

function buildDerivedSignalMap() {
  const profile = dashboardData.profile || fallbackData.profile || {};
  const last7d = dashboardData.last7d || fallbackData.last7d || {};
  const actions = dashboardData.actions || fallbackData.actions || [];
  const drafts = dashboardData.drafts || fallbackData.drafts || [];
  const posts = last7d.topPosts || [];
  const bestScore = Math.max(number(profile.baselineScore), ...posts.map((post) => number(post.score)), 0);
  const endpointTotals = sumEndpointTotals(dashboardData.api || fallbackData.api || {});
  const sourceCount = new Set(posts.map((post) => post.source).filter(Boolean)).size;
  const rssValue = Math.max(sourceCount, number(last7d.posts), 1);
  const measuredPosts = number(profile.measuredPosts, number(last7d.posts));

  return {
    version: 0,
    generatedAt: dashboardData.updatedAt || fallbackData.updatedAt,
    coordinateSystem: "percent",
    source: "derived dashboard fields",
    core: {
      label: "CORE",
      value: number(profile.baselineScore, bestScore),
      unit: "baseline",
      detail: `${endpointTotals.calls} API calls, ${endpointTotals.failures} failures`,
      x: 0.46,
      y: 0.54,
    },
    nodes: [
      { id: "rss", label: "RSS", value: rssValue, unit: "packets", detail: `${rssValue} recent packets`, health: "ok", ...SIGNAL_NODE_COORDS.rss },
      { id: "score", label: "SCORE", value: Number(bestScore.toFixed(1)), unit: "rank", detail: `${measuredPosts} posts measured`, health: measuredPosts ? "ok" : "warn", ...SIGNAL_NODE_COORDS.score },
      { id: "draft", label: "SWARM_OUT", value: drafts.length, unit: "outputs", detail: `${drafts.length} queued outputs`, health: drafts.length ? "ok" : "warn", ...SIGNAL_NODE_COORDS.draft },
      { id: "x", label: "X_ROUTE", value: actions.length, unit: "web routes", detail: `${actions.length} web routes; 0 X read ops`, health: actions.length ? "ok" : "warn", ...SIGNAL_NODE_COORDS.x },
      { id: "learn", label: "LEARN", value: measuredPosts, unit: "posts", detail: `${measuredPosts} measured outcomes`, health: measuredPosts ? "ok" : "warn", ...SIGNAL_NODE_COORDS.learn },
    ],
    routes: [
      { from: "rss", to: "score", value: rssValue, unit: "packets", label: "packets ranked" },
      { from: "score", to: "draft", value: drafts.length || 1, unit: "outputs", label: "scores shape outputs" },
      { from: "score", to: "x", value: actions.length || 1, unit: "web routes", label: "scores route manual actions" },
      { from: "draft", to: "x", value: drafts.length || 1, unit: "outputs", label: "outputs paste into X" },
      { from: "x", to: "learn", value: measuredPosts || 1, unit: "posts", label: "outcomes measured" },
      { from: "learn", to: "score", value: Math.max(1, number(profile.baselineScore)), unit: "score", label: "learning updates ranker" },
    ],
  };
}

function normalizeSignalMapNode(node = {}) {
  if (node.id !== "x") return node;
  const routeValue = number(node.value);
  return {
    ...node,
    label: "X_ROUTE",
    unit: node.unit && node.unit !== "routes" ? node.unit : "web routes",
    detail: /0\s+X\s+read/i.test(node.detail || "")
      ? node.detail
      : `${routeValue ? formatNumber(routeValue) : "0"} web routes; 0 X read ops`,
    health: node.health || (routeValue ? "ok" : "warn"),
  };
}

function normalizeSignalMapRoute(route = {}) {
  if (route.from !== "x" && route.to !== "x") return route;
  return {
    ...route,
    unit: route.unit === "routes" ? "web routes" : route.unit,
    label: (route.label || "").replace(/\bX\b/g, "X_ROUTE"),
  };
}

function signalNodeBounds(nodeId) {
  return SIGNAL_NODE_BOUNDS[nodeId] || SIGNAL_NODE_BOUNDS.default;
}

function normalizeSignalNodePosition(node = {}) {
  const defaults = SIGNAL_NODE_COORDS[node.id] || { x: 0.5, y: 0.5 };
  const bounds = signalNodeBounds(node.id);
  return {
    x: clamp(number(node.x, defaults.x), bounds.minX, bounds.maxX),
    y: clamp(number(node.y, defaults.y), bounds.minY, bounds.maxY),
  };
}

function controlPlaneData() {
  const control = dashboardData.controlPlane || fallbackData.controlPlane;
  if (control) return control;
  const cadence = cadenceData();
  const triage = apiStatusTriage();
  const cooldown = (dashboardData.api || fallbackData.api || {}).cooldown || {};
  const cooldownActive = Boolean(cooldown.active);
  const { remaining } = apiBudget();
  return {
    mode: cooldownActive ? "cooldown" : cadence.publishAllowed ? "scale_experiment" : "manual_distribution",
    severity: cooldownActive || triage.severity === "danger" ? "danger" : cadence.publishAllowed ? "ok" : "warn",
    pressureScore: cooldownActive ? 24 : cadence.publishAllowed ? 72 : 48,
    decision: cooldownActive ? "Live X read/search gates are closed until the cooldown expires." : cadence.reason || "-",
    nextAction: cooldownActive ? cooldown.reason || "-" : cadence.nextAction || "-",
    publishGate: cadence.publishAllowed ? "open" : "review",
    readGate: cooldownActive || triage.severity === "danger" ? "closed" : "cached_only",
    distributionGate: "ready",
    budgetGate: `$${remaining.toFixed(2)}`,
    topRoute: (dashboardData.opportunities || fallbackData.opportunities || [])[0] || null,
    topFormat: (dashboardData.experimentPlan || fallbackData.experimentPlan || {}).recommendedFormats?.[0] || null,
    pulses: cooldownActive
      ? [{ id: "read", label: "X read gate", value: `${formatNumber(cooldown.remainingMinutes)} min`, status: "danger", detail: cooldown.reason || "" }]
      : [],
    safeguards: [],
  };
}

function controlModeLabel(mode) {
  const key = `control_mode_${String(mode || "").replace(/[^a-z0-9_]/gi, "_")}`;
  const translated = t(key);
  return translated === key ? String(mode || "-").replace(/_/g, " ") : translated;
}

function gateStatus(value, fallback = "ok") {
  const text = String(value || "").toLowerCase();
  if (/(closed|blocked|danger|fault|cooldown)/.test(text)) return "danger";
  if (/(review|guard|cached|starved|warn|repair)/.test(text)) return "warn";
  if (/(open|ready|ok|safe|unlimited)/.test(text)) return "ok";
  return fallback;
}

function signalMap() {
  const incoming = dashboardData.signalMap || fallbackData.signalMap;
  const map = incoming?.nodes?.length ? incoming : buildDerivedSignalMap();
  const nodes = (map.nodes || []).map((node) => {
    const normalized = normalizeSignalMapNode(node);
    return {
      ...normalized,
      ...normalizeSignalNodePosition(normalized),
    };
  });
  return {
    ...map,
    core: {
      ...(map.core || {}),
      label: map.core?.label || "CORE",
      x: clamp(number(map.core?.x, 0.48), 0.38, 0.62),
      y: clamp(number(map.core?.y, 0.5), 0.4, 0.6),
    },
    nodes,
    routes: Array.isArray(map.routes) ? map.routes.map(normalizeSignalMapRoute) : [],
  };
}

function signalNodeById(nodeId) {
  return signalMap().nodes.find((node) => node.id === nodeId);
}

function signalNodeLabel(node) {
  if (!node) return "-";
  return SIGNAL_NODE_LABELS[currentLang]?.[node.id] || node.label || node.id || "-";
}

function signalUnitLabel(unit) {
  return SIGNAL_UNIT_LABELS[currentLang]?.[unit] || unit;
}

function formatSignalNodeValue(node) {
  if (!node) return "-";
  const value = Number.isFinite(Number(node.value)) ? formatNumber(node.value, String(node.value).includes(".") ? 1 : 0) : String(node.value ?? "-");
  return node.unit ? `${value} ${signalUnitLabel(node.unit)}` : value;
}

function signalNodeSubLabel(node) {
  if (!node) return "-";
  if (node.id === "x") {
    const routeValue = Number.isFinite(Number(node.value)) ? formatNumber(node.value) : "0";
    return currentLang === "zh"
      ? `${routeValue} 路由 · 0 读取`
      : `${routeValue} routes · 0 reads`;
  }
  return formatSignalNodeValue(node);
}

function signalNodeDetail(node, fallback = "") {
  if (!node) return fallback;
  if (node.id === "x") {
    const routeValue = Number.isFinite(Number(node.value)) ? formatNumber(node.value) : "0";
    return currentLang === "zh"
      ? `${routeValue} 条网页路由；0 次 X 读取操作`
      : `${routeValue} web routes; 0 X read ops`;
  }
  return node.detail || fallback;
}

function clamp(value, min = 0, max = 100) {
  return Math.min(max, Math.max(min, number(value)));
}

async function loadData() {
  try {
    const response = await fetch(`./data.json?ts=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    dashboardData = await response.json();
    dataLoadStatus = "live";
  } catch {
    dashboardData = fallbackData;
    dataLoadStatus = "fallback";
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
  renderDemoSteps();
  updateDemoModeChrome();
  $("#copyright-year").textContent = String(new Date().getFullYear());
}

function updateDemoModeChrome() {
  document.body.classList.toggle("demo-mode", demoMode);
  document.body.classList.toggle("autoplay-mode", autoDemo);
  document.body.dataset.demoStep = DEMO_STEPS[demoStepIndex]?.id || "signal";
  const button = $("#demo-toggle");
  if (button) {
    button.textContent = t(demoMode ? "exit_demo" : "demo_mode");
    button.classList.toggle("active", demoMode);
    button.setAttribute("aria-pressed", String(demoMode));
  }
  const autoButton = $("#autoplay-toggle");
  if (autoButton) {
    autoButton.textContent = t(autoDemo ? "stop_auto_demo" : "auto_demo");
    autoButton.classList.toggle("active", autoDemo);
    autoButton.setAttribute("aria-pressed", String(autoDemo));
  }
  const step = DEMO_STEPS[demoStepIndex] || DEMO_STEPS[0];
  const label = $("#demo-step-label");
  if (label) label.textContent = t(step.labelKey);
  document.querySelectorAll("[data-demo-step]").forEach((node) => {
    node.classList.toggle("active", node.dataset.demoStep === step.id);
  });
}

function setDemoMode(enabled) {
  demoMode = Boolean(enabled);
  localStorage.setItem("xbot-dashboard-demo", String(demoMode));
  if (!demoMode) stopAutoDemo();
  updateDemoModeChrome();
  renderSignalNodes();
  setupSignalCanvas();
}

function renderDemoSteps() {
  const container = $("#demo-step-list");
  if (!container) return;
  container.innerHTML = DEMO_STEPS
    .map(
      (step, index) => `
        <button type="button" data-demo-step="${escapeHtml(step.id)}">
          <span>${String(index + 1).padStart(2, "0")}</span>
          ${escapeHtml(t(step.labelKey))}
        </button>
      `,
    )
    .join("");
}

function restartDemoProgress() {
  const progress = $("#demo-progress-bar");
  if (!progress) return;
  progress.style.animation = "none";
  progress.getBoundingClientRect();
  progress.style.animation = autoDemo ? `demoProgress ${DEMO_STEP_MS}ms linear forwards` : "";
}

function activateDemoStep(index, { scroll = true } = {}) {
  demoStepIndex = ((index % DEMO_STEPS.length) + DEMO_STEPS.length) % DEMO_STEPS.length;
  const step = DEMO_STEPS[demoStepIndex];
  updateDemoModeChrome();
  restartDemoProgress();
  if (!scroll) return;
  const target = document.querySelector(step.target);
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function startAutoDemo() {
  if (!demoMode) setDemoMode(true);
  autoDemo = true;
  clearInterval(demoTimer);
  activateDemoStep(0, { scroll: false });
  demoTimer = setInterval(() => activateDemoStep(demoStepIndex + 1), DEMO_STEP_MS);
  updateDemoModeChrome();
}

function stopAutoDemo() {
  autoDemo = false;
  clearInterval(demoTimer);
  demoTimer = null;
  const progress = $("#demo-progress-bar");
  if (progress) progress.style.animation = "";
  updateDemoModeChrome();
}

function setTheme(theme) {
  currentTheme = theme === "dark" ? "dark" : "light";
  localStorage.setItem("xbot-dashboard-theme", currentTheme);
  applyChromeText();
  renderSignalNodes();
  setupSignalCanvas();
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

function dataFreshness() {
  if (dataLoadStatus !== "live") return { key: "fallback_data", className: "danger" };
  const telemetry = dashboardData.telemetry || {};
  const updated = new Date(telemetry.checkedAt || dashboardData.profile?.followerCheckedAt || dashboardData.updatedAt);
  if (Number.isNaN(updated.getTime())) return { key: "data_stale", className: "warn" };
  const ageHours = (Date.now() - updated.getTime()) / 36e5;
  if (ageHours > FRESH_DATA_MAX_AGE_HOURS) return { key: "data_stale", className: "warn" };
  if (telemetry.cachedOnlyRefresh) return { key: "cached_data", className: "cached" };
  return { key: "live_data", className: "ok" };
}

function draftFor(index) {
  const drafts = dashboardData.drafts || [];
  return drafts[Math.min(Math.max(0, index), Math.max(0, drafts.length - 1))] || fallbackData.drafts[0];
}

function distributionOpsData() {
  const incoming = dashboardData.distributionOps || fallbackData.distributionOps;
  if (incoming?.missions?.length) return incoming;
  const actions = dashboardData.actions?.length ? dashboardData.actions : fallbackData.actions || [];
  const missions = actions.slice(0, 3).map((action, index) => {
    const draft = draftFor(action.draftIndex ?? index);
    return {
      id: `route:${action.label || index + 1}`,
      priority: index + 1,
      label: action.label,
      routeLabel: action.label,
      routeUrl: action.url,
      routeReason: action.reason,
      score: number(dashboardData.profile?.baselineScore, fallbackData.profile.baselineScore),
      expectedLiftPct: 0,
      confidence: "low",
      targetReplies: 1,
      operatorSlaMinutes: 10 + index * 10,
      draftText: draft.text,
      draftAngle: draft.angle,
      zeroExtraXReads: true,
    };
  });
  return {
    generatedAt: dashboardData.updatedAt || fallbackData.updatedAt,
    mode: cadenceData().mode,
    queueHealth: missions.length ? "ok" : "warn",
    zeroExtraXReads: true,
    manualReplyTarget: missions.length,
    readyMissions: missions.length,
    missionCount: missions.length,
    primaryRoute: missions[0] ? { label: missions[0].routeLabel, url: missions[0].routeUrl, score: missions[0].score } : null,
    opsMetrics: [
      { id: "target", label: "reply target", value: `${missions.length}/day`, status: "ok" },
      { id: "queue", label: "mission queue", value: `${missions.length}/${missions.length}`, status: missions.length ? "ok" : "warn" },
      { id: "budget", label: "X read budget", value: "0 reads", status: "ok" },
    ],
    runbook: [],
    missions,
  };
}

function operatorSloData(ops = distributionOpsData()) {
  const incoming = dashboardData.operatorSlo;
  if (incoming?.sloCards?.length || incoming?.lanes?.length) return incoming;
  if (dashboardData === fallbackData && (fallbackData.operatorSlo?.sloCards?.length || fallbackData.operatorSlo?.lanes?.length)) {
    return fallbackData.operatorSlo;
  }
  const missions = Array.isArray(ops?.missions) ? ops.missions : [];
  const readyMissions = number(ops?.readyMissions, missions.length);
  const missionCount = number(ops?.missionCount, missions.length);
  const targetReplies = missions.reduce((sum, mission) => sum + number(mission?.targetReplies, 1), 0) || number(ops?.manualReplyTarget, 3);
  const completionBudgetMinutes = missions.reduce((sum, mission, index) => sum + number(mission?.operatorSlaMinutes, 10 + index * 10), 0);
  const baselineScore = number(dashboardData.profile?.baselineScore, fallbackData.profile.baselineScore);
  const expectedScore = missions.length
    ? missions.reduce((sum, mission) => sum + number(mission?.score, baselineScore), 0) / missions.length
    : baselineScore;
  const expectedLiftPct = missions.length
    ? missions.reduce((sum, mission) => sum + number(mission?.expectedLiftPct, 0), 0) / missions.length
    : 0;
  const status = readyMissions >= Math.min(2, missionCount || 1) ? "ok" : readyMissions ? "warn" : "danger";
  return {
    generatedAt: dashboardData.updatedAt || fallbackData.updatedAt,
    mode: "manual_zero_read_slo",
    status,
    zeroExtraXReads: true,
    budgetUsdPerReply: 0,
    targetReplies,
    readyMissions,
    missionCount,
    completionBudgetMinutes,
    expectedLiftPct,
    expectedScore,
    baselineScore,
    safeRemainingUsd: apiBudget().remaining,
    currentWindow: hourlyLoadData()?.nextWindow?.label || null,
    sloCards: [
      { id: "route_readiness", label: "route readiness", value: `${readyMissions}/${missionCount}`, status, detail: `${formatNumber(missionCount ? (readyMissions / missionCount) * 100 : 0)}% of manual distribution lanes armed` },
      { id: "reply_latency", label: "operator SLA", value: `${formatNumber(completionBudgetMinutes)} min`, status: completionBudgetMinutes <= 45 ? "ok" : "warn", detail: `${formatNumber(targetReplies)} replies inside the daily growth loop` },
      { id: "x_read_burn", label: "X read burn", value: "0 ops", status: "ok", detail: "manual web routes do not consume X search/read budget" },
      { id: "learning_writeback", label: "learning writeback", value: `${formatNumber(dashboardData.profile?.measuredPosts || fallbackData.profile.measuredPosts)} posts`, status: "ok", detail: `baseline score ${formatNumber(baselineScore, 1)} -> expected ${formatNumber(expectedScore, 1)}` },
    ],
    lanes: missions.slice(0, 4).map((mission, index) => ({
      id: mission?.id || `slo:${index + 1}`,
      label: mission?.label || mission?.routeLabel || `Route ${index + 1}`,
      routeLabel: mission?.routeLabel || mission?.label || `Route ${index + 1}`,
      priority: mission?.priority || index + 1,
      status: mission?.routeUrl && mission?.draftText ? "ok" : "warn",
      targetReplies: number(mission?.targetReplies, 1),
      operatorSlaMinutes: number(mission?.operatorSlaMinutes, 10 + index * 10),
      expectedLiftPct: number(mission?.expectedLiftPct, 0),
      score: number(mission?.score, baselineScore),
      confidence: mission?.confidence || "low",
      xReadOps: number(mission?.costEfficiency?.xReadOps, 0),
      incrementalXApiUsd: number(mission?.costEfficiency?.incrementalXApiUsd, 0),
      efficiencyLabel: mission?.costEfficiency?.label || t("operator_slo_zero_reads"),
    })),
    rules: [
      "Open routes in X web; do not call recent_search for manual replies.",
      "Paste only useful replies under active technical threads; stop at target count.",
      "Metrics write back on the next maintenance run and rebalance route weights.",
    ],
  };
}

function operatorDispatchPacketData(ops = distributionOpsData()) {
  const incoming = dashboardData.operatorDispatchPacket || fallbackData.operatorDispatchPacket;
  if (incoming?.packets?.length) return incoming;
  const missions = Array.isArray(ops?.missions) ? ops.missions.slice(0, 5) : [];
  const api = apiBudget();
  const targetReplies = missions.reduce((sum, mission) => sum + number(mission?.targetReplies, 1), 0) || number(ops?.manualReplyTarget, 3);
  const expectedLiftPct = missions.length
    ? missions.reduce((sum, mission) => sum + number(mission?.expectedLiftPct, 0), 0) / missions.length
    : 0;
  const packets = missions.map((mission, index) => {
    const draft = mission?.draftText || draftFor(index).text || "";
    return {
      id: mission?.id || `dispatch:${index + 1}`,
      priority: mission?.priority || index + 1,
      label: mission?.label || mission?.routeLabel || `Route ${index + 1}`,
      routeLabel: mission?.routeLabel || mission?.label || `Route ${index + 1}`,
      routeUrl: mission?.routeUrl || null,
      reason: mission?.routeReason || mission?.evidence || "",
      evidence: mission?.evidence || mission?.routeReason || "",
      draftText: draft,
      draftAngle: mission?.draftAngle || "",
      targetReplies: number(mission?.targetReplies, 1),
      operatorSlaMinutes: number(mission?.operatorSlaMinutes, 10 + index * 10),
      expectedLiftPct: number(mission?.expectedLiftPct, 0),
      confidence: mission?.confidence || "low",
      zeroExtraXReads: true,
      ready: Boolean(mission?.routeUrl && draft),
    };
  });
  const readyPackets = packets.filter((packet) => packet.ready).length;
  const severity = readyPackets >= Math.min(2, packets.length || 1) ? "ok" : readyPackets ? "warn" : "danger";
  const copyBlock = [
    "CODEX DAILY DISPATCH PACKET",
    `Generated: ${dashboardData.updatedAt || fallbackData.updatedAt}`,
    `Mode: ${ops?.mode || "manual_zero_read_dispatch"}`,
    `Cost guard: 0 extra X search/read API ops · budget left ${money(api.remaining)}`,
    `Target: ${formatNumber(targetReplies)} useful manual replies · expected lift +${formatNumber(expectedLiftPct, 1)}%`,
    "",
    "Protocol:",
    "1. Open the top X web route; use live recency in the browser only.",
    "2. Pick technical conversations with active replies and clear topic fit.",
    "3. Paste one useful reply, lightly edit for context, then move to the next route.",
    "4. Stop at the target count; metrics write back on the next maintenance run.",
    "",
    "Packets:",
    ...packets.flatMap((packet) => [
      `${packet.priority}. ${packet.routeLabel} · SLA ${formatNumber(packet.operatorSlaMinutes)}m · target ${formatNumber(packet.targetReplies)} · ${packet.ready ? "READY" : "MISSING_ROUTE_OR_DRAFT"}`,
      packet.reason ? `Why: ${packet.reason}` : null,
      packet.routeUrl ? `Route: ${packet.routeUrl}` : null,
      packet.draftText ? `Reply: ${packet.draftText}` : null,
      "",
    ].filter(Boolean)),
    "Stop conditions: skip politics, giveaways, ragebait, unsupported claims, and weak tech fit.",
  ].join("\n");

  return {
    generatedAt: dashboardData.updatedAt || fallbackData.updatedAt,
    mode: ops?.mode || "manual_zero_read_dispatch",
    severity,
    zeroExtraXReads: true,
    estimatedXReadOps: 0,
    estimatedIncrementalXApiUsd: 0,
    safeRemainingUsd: api.remaining,
    targetReplies,
    readyPackets,
    totalPackets: packets.length,
    expectedLiftPct,
    bestRouteLabel: packets[0]?.routeLabel || null,
    nextAction: packets[0]?.routeLabel
      ? `Open ${packets[0].routeLabel} in X web, paste the first ready reply, then stop at ${formatNumber(targetReplies)} useful route ops.`
      : "Generate or refresh manual reply drafts before dispatching.",
    copyBlock,
    checks: [
      { id: "x_reads", label: "X read partition", value: "0 ops", status: "ok", detail: "Manual web routes do not call recent_search." },
      { id: "budget", label: "cost boundary", value: money(api.remaining), status: api.remaining > 0 ? "ok" : "danger", detail: "No incremental X API cost for the dispatch packet." },
      { id: "queue", label: "route queue", value: `${readyPackets}/${packets.length}`, status: severity, detail: "Route URL and reply text are present." },
    ],
    packets,
  };
}

function routeConfidenceWeight(confidence) {
  const text = String(confidence || "").toLowerCase();
  if (text === "high") return 16;
  if (text === "medium") return 10;
  if (text === "low") return 5;
  return 7;
}

function routeAmplifierData(packet = operatorDispatchPacketData(), ops = distributionOpsData()) {
  const incoming = dashboardData.routeAmplifier || fallbackData.routeAmplifier;
  if (incoming?.lanes?.length) return incoming;
  const packets = Array.isArray(packet?.packets) ? packet.packets : [];
  const baseline = Math.max(1, number(dashboardData.profile?.baselineScore, fallbackData.profile.baselineScore));
  const flywheel = number((dashboardData.viralFlywheel || fallbackData.viralFlywheel || {}).velocityScore, 0);
  const readyPct = number((dashboardData.growthKinetics || fallbackData.growthKinetics || {}).routeReadinessPct, 0);
  const api = apiBudget();
  const budgetComponent = api.remaining > 1 ? 14 : api.remaining > 0 ? 8 : -18;
  const lanes = packets.slice(0, 5).map((item, index) => {
    const expectedLift = number(item.expectedLiftPct, 0);
    const targetReplies = Math.max(1, number(item.targetReplies, 1));
    const sla = Math.max(5, number(item.operatorSlaMinutes, 10 + index * 10));
    const ready = item.ready !== false && Boolean(item.routeUrl && item.draftText);
    const score = clamp(
      16 +
        Math.min(24, (number(item.score, baseline) / baseline) * 10) +
        Math.min(18, expectedLift / 3) +
        Math.min(14, targetReplies * 4) +
        Math.max(0, 14 - sla / 4) +
        routeConfidenceWeight(item.confidence) +
        Math.min(12, flywheel * 0.12) +
        Math.min(8, readyPct * 0.08) +
        budgetComponent -
        (ready ? 0 : 22),
      0,
      100,
    );
    const status = !ready ? "danger" : score >= 72 ? "ok" : score >= 48 ? "warn" : "danger";
    return {
      id: item.id || `route_amp:${index + 1}`,
      rank: item.priority || index + 1,
      label: item.routeLabel || item.label || `Route ${index + 1}`,
      routeUrl: item.routeUrl || null,
      status,
      ready,
      score,
      expectedLiftPct: expectedLift,
      targetReplies,
      operatorSlaMinutes: sla,
      confidence: item.confidence || "low",
      xReadOps: 0,
      incrementalXApiUsd: 0,
      action: !ready
        ? "Repair missing route URL or reply output before opening X."
        : score >= 72
          ? "Execute first; this route has the strongest distribution leverage."
          : score >= 48
            ? "Use after the top route or when the live thread quality is better."
            : "Hold unless the top routes are stale.",
      reason: item.evidence || item.reason || "cached reply readiness, expected lift, SLA, and budget guard",
    };
  });
  const readyLanes = lanes.filter((lane) => lane.ready).length;
  const avgScore = lanes.length ? lanes.reduce((sum, lane) => sum + number(lane.score, 0), 0) / lanes.length : 0;
  const severity = readyLanes >= Math.min(2, lanes.length || 1) && avgScore >= 48 ? "ok" : readyLanes ? "warn" : "danger";
  return {
    generatedAt: dashboardData.updatedAt || fallbackData.updatedAt,
    mode: "cached_route_amplifier",
    zeroExtraXReads: true,
    severity,
    avgScore,
    readyLanes,
    totalLanes: lanes.length,
    topRouteLabel: lanes[0]?.label || null,
    topRouteScore: lanes[0]?.score || 0,
    nextAction: lanes[0]?.action || "Build at least one ready route packet before dispatch.",
    formula: "readiness + historical score + expected lift + SLA pressure + flywheel velocity + budget guard",
    cells: [
      { id: "ready", label: "route readiness", value: `${readyLanes}/${lanes.length}`, status: severity },
      { id: "score", label: "amplifier score", value: formatNumber(avgScore, 1), status: avgScore >= 72 ? "ok" : avgScore >= 48 ? "warn" : "danger" },
      { id: "x_reads", label: "X read ops", value: "0", status: "ok" },
      { id: "budget", label: "safe budget", value: money(api.remaining), status: api.remaining > 0 ? "ok" : "danger" },
    ],
    lanes,
  };
}

function missionOperatorProtocol(mission, ops, index = 0) {
  if (mission?.operatorProtocol?.steps?.length) return mission.operatorProtocol;
  const targetReplies = number(mission?.targetReplies, Math.max(1, number(ops?.manualReplyTarget, 3)));
  const sla = formatNumber(mission?.operatorSlaMinutes || 10 + index * 10);
  const route = mission?.routeLabel || mission?.label || `Route ${index + 1}`;
  return {
    mode: "manual_zero_read_growth_loop",
    zeroExtraXReads: true,
    objective: `Borrow live distribution from ${route} without X search/read API spend.`,
    steps: [
      { id: "open", label: "open.route", detail: "Open the X web route and use live recency." },
      { id: "filter", label: "filter.thread", detail: "Pick a technical conversation with active replies and clear topic fit." },
      { id: "paste", label: "paste.reply", detail: `Paste ${formatNumber(targetReplies)} useful reply/replies within ${sla} minutes.` },
      { id: "observe", label: "observe.feedback", detail: "Stop at target count; let the next metrics run update scoring." },
    ],
    stopConditions: [
      "Skip politics, giveaways, ragebait, ads, and weak topic fit.",
      "Skip if the reply would require an unsupported factual claim.",
      "Stop after the target replies; do not chase every adjacent thread.",
    ],
    writeback: "Growth maintenance refreshes metrics and updates source/format/topic weights.",
  };
}

function operatorStepId(step, index) {
  const raw = String(step?.id || step?.label || `step-${index + 1}`);
  return raw.replace(/[^a-z0-9_.:-]+/gi, "_").replace(/^_+|_+$/g, "").slice(0, 64) || `step-${index + 1}`;
}

function operatorStateKey(mission) {
  const stableKey = [
    mission?.id,
    mission?.routeUrl,
    mission?.routeLabel || mission?.label,
    mission?.draftText ? String(mission.draftText).slice(0, 72) : "",
  ].filter(Boolean).join("|") || "primary";
  return `${OPERATOR_STATE_PREFIX}${stableKey}`;
}

function readOperatorStateByKey(key) {
  if (!key) return { done: [] };
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return { done: [] };
    const parsed = JSON.parse(raw);
    return {
      done: Array.isArray(parsed.done) ? parsed.done.filter(Boolean) : [],
      updatedAt: parsed.updatedAt || null,
    };
  } catch {
    return { done: [] };
  }
}

function writeOperatorStateByKey(key, done) {
  if (!key) return;
  try {
    localStorage.setItem(key, JSON.stringify({ done: [...new Set(done)], updatedAt: new Date().toISOString() }));
  } catch {
    // Local execution state is best-effort; dashboard rendering must remain available.
  }
}

function toggleOperatorStepState(key, stepId) {
  const state = readOperatorStateByKey(key);
  const done = new Set(state.done);
  const active = !done.has(stepId);
  if (active) done.add(stepId);
  else done.delete(stepId);
  writeOperatorStateByKey(key, done);
  return { done, active };
}

function resetOperatorState(key) {
  if (!key) return;
  try {
    localStorage.removeItem(key);
  } catch {
    // Ignore storage errors; the protocol UI can continue as a fresh queue.
  }
}

function readOperatorLedger() {
  try {
    const raw = localStorage.getItem(OPERATOR_LEDGER_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((event) => event && typeof event === "object").slice(0, OPERATOR_LEDGER_MAX) : [];
  } catch {
    return [];
  }
}

function writeOperatorLedger(events) {
  try {
    localStorage.setItem(OPERATOR_LEDGER_KEY, JSON.stringify(events.slice(0, OPERATOR_LEDGER_MAX)));
  } catch {
    // Ledger is local convenience telemetry. Never block dashboard rendering on storage.
  }
}

function appendOperatorLedger(event) {
  const next = [
    {
      at: new Date().toISOString(),
      type: event.type || "step",
      route: event.route || "-",
      step: event.step || "-",
      state: event.state || "-",
    },
    ...readOperatorLedger(),
  ];
  writeOperatorLedger(next);
}

function missionProtocolProgress(mission, ops, index) {
  const protocol = missionOperatorProtocol(mission, ops, index);
  const steps = (Array.isArray(protocol.steps) ? protocol.steps : [])
    .slice(0, 4)
    .map((step, stepIndex) => ({ step, id: operatorStepId(step, stepIndex) }));
  const state = readOperatorStateByKey(operatorStateKey(mission));
  const doneSet = new Set(state.done);
  const done = steps.filter(({ id }) => doneSet.has(id)).length;
  return {
    label: mission?.routeLabel || mission?.label || `Route ${index + 1}`,
    done,
    total: steps.length || 1,
    ratio: steps.length ? done / steps.length : 0,
  };
}

function operatorTelemetryData(missions, ops) {
  const rows = missions.slice(0, 4).map((mission, index) => missionProtocolProgress(mission, ops, index));
  const done = rows.reduce((sum, row) => sum + row.done, 0);
  const total = rows.reduce((sum, row) => sum + row.total, 0) || 1;
  const complete = rows.filter((row) => row.done >= row.total).length;
  return {
    rows,
    done,
    total,
    complete,
    completionPct: Math.round((done / total) * 100),
    ledger: readOperatorLedger().slice(0, 4),
  };
}

function renderHeader() {
  const updated = formatDate(dashboardData.updatedAt);
  const { spend, cap, remaining, ratio } = apiBudget();
  const freshness = dataFreshness();
  const livePill = document.querySelector(".live-pill");
  $("#mode-label").textContent = t(freshness.key);
  livePill.classList.toggle("warn", freshness.className === "warn");
  livePill.classList.toggle("cached", freshness.className === "cached");
  livePill.classList.toggle("danger", freshness.className === "danger");
  $("#updated-at").textContent = t("updated", { date: updated });
  $("#sync-updated").textContent = updated;
  $("#rail-api-left").textContent = t("money_left", { amount: remaining.toFixed(2) });
  $("#rail-api-spend").textContent = t("spend_cap", { spend: money(spend), cap: cap.toFixed(2) });
  $("#rail-api-meter").style.width = `${ratio}%`;
}

function renderHero() {
  const profile = dashboardData.profile || {};
  const last24h = dashboardData.last24h || {};
  const last7d = dashboardData.last7d || {};
  const topScores = (last7d.topPosts || []).map((post) => number(post.score));
  const bestScore = Math.max(number(profile.baselineScore), ...topScores, 0);
  const { remaining } = apiBudget();
  const actions = dashboardData.actions || fallbackData.actions;
  const { bestHook } = learningData();
  $("#hero-followers").textContent = profile.followers ?? "-";
  $("#hero-impressions").textContent = String(number(last24h.impressions));
  $("#hero-api-left").textContent = `$${remaining.toFixed(2)}`;
  $("#hero-draft").textContent = draftFor(0).text;
  $("#hero-signal-score").textContent = bestScore ? bestScore.toFixed(1) : "-";
  $("#hero-loop-count").textContent = `${Math.min(actions.length, 3)}/3`;
  $("#hero-cost-guard").textContent = `$${remaining.toFixed(2)}`;
  $("#hero-strip-signal").textContent = currentLang === "zh"
    ? `${formatNumber(last7d.posts)} 个包已排序`
    : `${formatNumber(last7d.posts)} packets ranked`;
  $("#hero-strip-cost").textContent = currentLang === "zh"
    ? `$${remaining.toFixed(2)} 边界内`
    : `$${remaining.toFixed(2)} inside boundary`;
  $("#hero-strip-learning").textContent = formatTemplate(bestHook?.name || "decision_rule");
}

function renderExpoStory() {
  const storyPanel = $("#expo-story");
  if (!storyPanel) return;
  const profile = dashboardData.profile || {};
  const last7d = dashboardData.last7d || {};
  const drafts = dashboardData.drafts || fallbackData.drafts || [];
  const { remaining } = apiBudget();
  const freshness = dataFreshness();
  const { bestHook } = learningData();
  const cadence = cadenceData();
  const cadenceMode = formatCadenceMode(cadence.mode);
  const cadenceModeCompact = formatCadenceMode(cadence.mode, { compact: true });
  const cadenceStatus = cadence.willBlockPublish
    ? t("cadence_blocked")
    : cadence.publishAllowed
      ? t("cadence_ready")
      : t("cadence_advisory");
  const cadenceHealth = cadence.willBlockPublish ? "danger" : cadence.publishAllowed ? "ok" : "warn";
  const bestHookName = formatTemplate(bestHook?.name || bestPost()?.template || "decision_rule");
  const measuredPosts = number(profile.measuredPosts, number(profile.trackedPosts, number(last7d.posts)));

  $("#story-outcome-score").textContent = t("story_outcome_score");
  $("#story-outcome-copy").textContent = t("story_outcome_copy");
  $("#pipeline-status").textContent = cadence.publishAllowed
    ? t("cadence_status_publish", { mode: cadenceMode })
    : t("cadence_status_hold", { mode: cadenceMode });
  $("#runlog-status").textContent = cadenceStatus;

  const outcomeStats = [
    { label: t("outcome_extra_reads"), value: "0" },
    { label: t("outcome_replies_ready"), value: formatNumber(drafts.length) },
    { label: t("outcome_api_left"), value: `$${remaining.toFixed(2)}` },
    { label: t("outcome_best_hook"), value: bestHookName },
  ];
  $("#outcome-stats").innerHTML = outcomeStats
    .map(
      (item) => `
        <div>
          <span>${escapeHtml(item.label)}</span>
          <strong>${escapeHtml(item.value)}</strong>
        </div>
      `,
    )
    .join("");

  const pipelineMetrics = [
    { label: t("pipeline_metric_measured"), value: formatNumber(measuredPosts) },
    { label: t("pipeline_metric_drafts"), value: formatNumber(drafts.length) },
    { label: t("pipeline_metric_budget"), value: `$${remaining.toFixed(2)}` },
    { label: t("pipeline_metric_cadence"), value: cadenceModeCompact },
  ];
  $("#pipeline-metrics").innerHTML = pipelineMetrics
    .map(
      (item) => `
        <div>
          <span>${escapeHtml(item.label)}</span>
          <strong>${escapeHtml(item.value)}</strong>
        </div>
      `,
    )
    .join("");

  const freshnessText = freshness.className === "ok"
    ? t("runlog_live_data")
    : freshness.className === "warn"
      ? t("runlog_stale_data")
      : t("runlog_fallback_data");
  const runlog = [
    { label: t("runlog_cadence"), value: cadence.reason || cadenceMode, status: cadenceHealth },
    { label: t("runlog_ingest"), value: freshnessText, status: freshness.className },
    { label: t("runlog_score"), value: t("runlog_posts_measured", { count: formatNumber(measuredPosts) }), status: "ok" },
    { label: t("runlog_queue"), value: t("runlog_drafts_ready", { count: formatNumber(drafts.length) }), status: drafts.length ? "ok" : "warn" },
    { label: t("runlog_cost"), value: t("runlog_budget_left", { amount: `$${remaining.toFixed(2)}` }), status: remaining > 1 ? "ok" : "warn" },
    { label: t("runlog_learn"), value: t("runlog_best_hook", { hook: bestHookName }), status: "ok" },
  ];
  $("#runlog-list").innerHTML = runlog
    .map(
      (item) => `
        <div class="runlog-row ${escapeHtml(item.status)}">
          <span>${escapeHtml(item.label)}</span>
          <strong>${escapeHtml(item.value)}</strong>
        </div>
      `,
    )
    .join("");
}

function dataAgeMinutes() {
  const telemetry = dashboardData.telemetry || {};
  const updated = new Date(telemetry.checkedAt || dashboardData.profile?.followerCheckedAt || dashboardData.updatedAt);
  if (!Number.isNaN(updated.getTime())) return Math.max(0, Math.round((Date.now() - updated.getTime()) / 60000));
  if (Number.isFinite(Number(telemetry.ageMinutes))) return Math.max(0, Math.round(Number(telemetry.ageMinutes)));
  return null;
}

function ageLabel(minutes) {
  if (minutes == null) return "-";
  if (minutes < 60) return t("gauge_minutes", { count: formatNumber(minutes) });
  const hours = minutes / 60;
  if (hours < 48) return currentLang === "zh" ? `${formatNumber(hours, 1)} 小时` : `${formatNumber(hours, 1)}h`;
  const days = hours / 24;
  return currentLang === "zh" ? `${formatNumber(days, 1)} 天` : `${formatNumber(days, 1)}d`;
}

function chartSource(chart, fallbackSource) {
  if (chart?.source) return chart.source;
  return fallbackSource || t("contract_derived");
}

function chartPointCount(chart, fallbackValues = []) {
  if (Array.isArray(chart?.points) && chart.points.length) return chart.points.length;
  return fallbackValues.length;
}

function renderTelemetryContract() {
  const container = $("#telemetry-contract");
  if (!container) return;
  const freshness = dataFreshness();
  const age = ageLabel(dataAgeMinutes());
  const updatedAt = dashboardData.telemetry?.checkedAt || dashboardData.profile?.followerCheckedAt || dashboardData.updatedAt;
  const profile = dashboardData.profile || {};
  const last7d = dashboardData.last7d || {};
  const measuredPosts = number(profile.measuredPosts, number(profile.trackedPosts, number(last7d.posts)));
  const impressionChart = dashboardData.charts?.impressions24h;
  const apiChart = dashboardData.charts?.xApiCallsDaily;
  const impressionValues = impressionSeries(dashboardData.last24h || fallbackData.last24h || {}, "impressions24h");
  const apiValues = endpointCallSeries();
  const { spend } = apiBudget();
  const openAI = dashboardData.openai || {};
  const openAISpend = number(openAI.spend);
  const sourceLabel = dataLoadStatus === "live"
    ? dashboardData.telemetry?.cachedOnlyRefresh
      ? t("contract_cached_json")
      : t("contract_live_json")
    : t("contract_fallback_json");
  const cards = [
    {
      label: t("contract_source"),
      value: sourceLabel,
      detail: `${t(freshness.key)} · ${t("contract_updated", { date: formatDate(updatedAt) })}`,
      status: freshness.className,
    },
    {
      label: t("contract_metrics"),
      value: t("contract_posts", { count: formatNumber(measuredPosts) }),
      detail: t("contract_age", { age }),
      status: measuredPosts > 0 ? "ok" : "warn",
    },
    {
      label: t("contract_charts"),
      value: chartSource(impressionChart, "last24h.topPosts"),
      detail: `${t("chart_points", { count: chartPointCount(impressionChart, impressionValues) })} · ${chartSource(apiChart, "api.endpoints")}`,
      status: impressionChart || apiChart ? "ok" : "cached",
    },
    {
      label: t("contract_cost"),
      value: t("contract_cost_detail", { xSpend: money(spend), openaiSpend: money(openAISpend) }),
      detail: dashboardData.openai ? t("contract_live_json") : t("contract_derived"),
      status: spend <= apiBudget().cap * 0.8 ? "ok" : "warn",
    },
  ];
  container.innerHTML = cards
    .map(
      (card) => `
        <article class="contract-card ${escapeHtml(card.status)}">
          <span>${escapeHtml(card.label)}</span>
          <strong>${escapeHtml(card.value)}</strong>
          <small>${escapeHtml(card.detail)}</small>
        </article>
      `,
    )
    .join("");
}

function gaugeCard(card) {
  const value = clamp(card.value);
  return `
    <article class="gauge-card ${escapeHtml(card.status || "info")}" style="--gauge-deg:${(value * 1.8).toFixed(1)}deg">
      <div class="gauge-title">
        <span>${escapeHtml(card.label)}</span>
        <em>${escapeHtml(card.meta)}</em>
      </div>
      <div class="gauge-visual" aria-hidden="true">
        <div class="gauge-arc"></div>
        <strong>${escapeHtml(card.display)}</strong>
      </div>
      <small>${escapeHtml(card.detail)}</small>
    </article>
  `;
}

function renderGauges() {
  const target = $("#gauge-grid");
  if (!target) return;
  const profile = dashboardData.profile || {};
  const last24h = dashboardData.last24h || {};
  const last7d = dashboardData.last7d || {};
  const drafts = dashboardData.drafts || fallbackData.drafts || [];
  const { spend, cap, remaining, ratio } = apiBudget();
  const goal = goalData();
  const freshness = dataFreshness();
  const ageMinutes = dataAgeMinutes();
  const scorePool = (last7d.topPosts || []).map((post) => number(post.score));
  const bestScore = Math.max(number(profile.baselineScore), ...scorePool, 0);
  const endpoints = dashboardData.api?.endpoints || fallbackData.api.endpoints || [];
  const calls = endpoints.reduce((sum, endpoint) => sum + number(endpoint.calls), 0);
  const failures = endpoints.reduce((sum, endpoint) => sum + number(endpoint.failures), 0);
  const successRate = calls ? clamp(((calls - failures) / calls) * 100) : 100;
  const ageBudget = FRESH_DATA_MAX_AGE_HOURS * 60;
  const ageHealth = ageMinutes == null ? 0 : clamp(100 - (ageMinutes / ageBudget) * 100);
  const followerPercent = goal.nextMilestone > 0 ? clamp((number(profile.followers) / goal.nextMilestone) * 100) : 0;
  const cards = [
    {
      label: t("gauge_data_age"),
      meta: freshness.className.toUpperCase(),
      display: ageMinutes == null ? "-" : t("gauge_minutes", { count: formatNumber(ageMinutes) }),
      detail: t(freshness.key),
      value: ageHealth,
      status: freshness.className === "ok" ? "good" : freshness.className,
    },
    {
      label: t("gauge_followers"),
      meta: `next ${formatNumber(goal.nextMilestone)}`,
      display: formatNumber(profile.followers),
      detail: t("goal_progress", { current: formatNumber(goal.current), target: formatNumber(goal.target) }),
      value: followerPercent,
      status: followerPercent >= 70 ? "good" : followerPercent >= 40 ? "warn" : "info",
    },
    {
      label: t("gauge_24h_impr"),
      meta: t("traffic"),
      display: formatNumber(last24h.impressions),
      detail: t("posts_likes", { posts: number(last24h.posts), likes: number(last24h.likes) }),
      value: clamp(number(last24h.impressions)),
      status: "info",
    },
    {
      label: t("gauge_signal_score"),
      meta: t("last_7_days"),
      display: bestScore ? bestScore.toFixed(1) : "-",
      detail: t("posts_replies", { posts: number(last7d.posts), replies: number(last7d.replies) }),
      value: clamp((bestScore / 12) * 100),
      status: bestScore >= 8 ? "good" : bestScore >= 4 ? "warn" : "info",
    },
    {
      label: t("gauge_reply_queue"),
      meta: t("manual_web_actions"),
      display: formatNumber(drafts.length),
      detail: t("gauge_items", { count: drafts.length }),
      value: clamp((drafts.length / 5) * 100),
      status: drafts.length >= 3 ? "good" : "warn",
    },
    {
      label: t("gauge_api_left"),
      meta: `$${cap.toFixed(2)} cap`,
      display: `$${remaining.toFixed(2)}`,
      detail: t("spend_cap", { spend: money(spend), cap: cap.toFixed(2) }),
      value: cap > 0 ? clamp((remaining / cap) * 100) : 0,
      status: remaining / Math.max(cap, 1) > 0.5 ? "good" : remaining > 0 ? "warn" : "danger",
    },
    {
      label: t("gauge_cost_used"),
      meta: dashboardData.api?.month || fallbackData.api.month,
      display: t("gauge_percent", { value: ratio.toFixed(1) }),
      detail: t("gauge_success_rate") + ` ${successRate.toFixed(1)}%`,
      value: ratio,
      status: ratio > 75 ? "danger" : ratio > 45 ? "warn" : "good",
    },
  ];
  target.innerHTML = cards.map(gaugeCard).join("");
}

function chartSvg(series, className = "primary") {
  const width = 640;
  const height = 170;
  const padding = 12;
  const values = series.map((value) => Math.max(0, number(value)));
  const max = Math.max(...values, 1);
  const step = values.length > 1 ? (width - padding * 2) / (values.length - 1) : width - padding * 2;
  const points = values
    .map((value, index) => {
      const x = padding + index * step;
      const y = height - padding - (value / max) * (height - padding * 2);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  return `
    <svg class="line-chart ${escapeHtml(className)}" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" role="img">
      <g class="chart-grid">
        <line x1="0" y1="28" x2="${width}" y2="28"></line>
        <line x1="0" y1="70" x2="${width}" y2="70"></line>
        <line x1="0" y1="112" x2="${width}" y2="112"></line>
        <line x1="80" y1="0" x2="80" y2="${height}"></line>
        <line x1="240" y1="0" x2="240" y2="${height}"></line>
        <line x1="400" y1="0" x2="400" y2="${height}"></line>
        <line x1="560" y1="0" x2="560" y2="${height}"></line>
      </g>
      <polyline class="chart-line" points="${points}"></polyline>
      <polyline class="chart-line ghost" points="${points}" transform="translate(0 10)"></polyline>
    </svg>
  `;
}

function cumulativeSeries(values) {
  let total = 0;
  return values.map((value) => {
    total += Math.max(0, number(value));
    return total;
  });
}

function seriesStats(series, totalOverride = null) {
  const values = series.map((value) => Math.max(0, number(value)));
  return {
    values,
    current: values[values.length - 1] || 0,
    total: totalOverride == null ? values.reduce((sum, value) => sum + value, 0) : number(totalOverride),
  };
}

function endpointCallSeries() {
  const chart = dashboardData.charts?.xApiCallsDaily;
  if (Array.isArray(chart?.points) && chart.points.length) {
    return chart.points.map((point) => number(point.value ?? point.calls));
  }
  const days = dashboardData.api?.days || [];
  if (days.length) return days.map((day) => number(day.value ?? day.calls));
  const endpoints = dashboardData.api?.endpoints || fallbackData.api.endpoints || [];
  return cumulativeSeries(endpoints.map((endpoint) => number(endpoint.calls)));
}

function statusCountMap(endpoint = {}) {
  const counts = {};
  Object.entries(endpoint.statuses || {}).forEach(([status, count]) => {
    const code = Number.parseInt(status, 10);
    if (!Number.isFinite(code)) return;
    counts[String(code)] = (counts[String(code)] || 0) + number(count);
  });
  if (!Object.keys(counts).length && endpoint.lastStatus != null) {
    const code = Number.parseInt(String(endpoint.lastStatus), 10);
    if (Number.isFinite(code)) {
      counts[String(code)] = code >= 400 ? Math.max(1, number(endpoint.failures)) : Math.max(1, number(endpoint.calls));
    }
  }
  return counts;
}

function deriveApiStatusTriage(api = {}) {
  const endpoints = api.endpoints || [];
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

  endpoints.forEach((endpoint) => {
    const calls = number(endpoint.calls);
    const failures = number(endpoint.failures);
    const statuses = statusCountMap(endpoint);
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
    const latestCode = Number.parseInt(String(endpoint.lastStatus ?? ""), 10);
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
    Object.entries(statuses).forEach(([status, countValue]) => {
      const code = Number.parseInt(status, 10);
      const count = number(countValue);
      if (!Number.isFinite(code) || count <= 0) return;
      if (code >= 200 && code < 300) totals.success2xx += count;
      if (code === 429) {
        totals.rateLimit429 += count;
        local.rateLimit429 += count;
      } else if (code >= 500) {
        totals.backendFault5xx += count;
        local.backendFault5xx += count;
      } else if (code === 401 || code === 403) {
        totals.authFault4xx += count;
        local.authFault4xx += count;
      } else if (code >= 400) {
        totals.clientFault4xx += count;
        local.clientFault4xx += count;
      }
    });
    if (
      failures ||
      local.rateLimit429 ||
      local.backendFault5xx ||
      local.authFault4xx ||
      local.clientFault4xx
    ) {
      const active = Boolean(
        local.activeRateLimit429 ||
        local.activeBackendFault5xx ||
        local.activeAuthFault4xx ||
        local.activeClientFault4xx,
      );
      incidents.push({
        endpoint: endpoint.name || "-",
        severity: local.activeRateLimit429 || local.activeBackendFault5xx ? "danger" : active ? "warn" : "cached",
        active,
        calls,
        failures,
        lastStatus: endpoint.lastStatus || null,
        statuses,
        ...local,
      });
    }
  });

  const failureRate = totals.totalCalls ? (totals.totalFailures / totals.totalCalls) * 100 : 0;
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
    failureRate: Number(failureRate.toFixed(2)),
    incidents: incidents
      .sort((left, right) => {
        const severityDelta = (right.severity === "danger" ? 2 : 1) - (left.severity === "danger" ? 2 : 1);
        if (severityDelta) return severityDelta;
        return right.failures - left.failures;
      })
      .slice(0, 6),
  };
}

function apiStatusTriage() {
  const api = dashboardData.api || fallbackData.api || {};
  const triage = api.statusTriage || deriveApiStatusTriage(api);
  const derived = deriveApiStatusTriage(api);
  return {
    ...derived,
    ...triage,
    severity: triage.severity || derived.severity,
    incidents: Array.isArray(triage.incidents) ? triage.incidents : derived.incidents,
  };
}

function triageSeverityRank(severity) {
  if (severity === "danger") return 3;
  if (severity === "warn") return 2;
  if (severity === "cached") return 1;
  return 0;
}

function worseSeverity(left, right) {
  return triageSeverityRank(left) >= triageSeverityRank(right) ? left : right;
}

function triageSummary(triage) {
  if (!triage || triage.severity === "ok") {
    return t("triage_summary_ok", { calls: formatNumber(triage?.totalCalls || 0) });
  }
  return t("triage_summary_fault", {
    calls: formatNumber(triage.totalCalls),
    rateLimit: formatNumber(triage.rateLimit429),
    backend: formatNumber(triage.backendFault5xx),
    auth: formatNumber(triage.authFault4xx),
    client: formatNumber(triage.clientFault4xx),
  });
}

function triageAction(triage) {
  if (!triage || triage.severity === "ok") return t("triage_action_ok");
  if (number(triage.activeRateLimit429 ?? triage.rateLimit429) > 0) return t("triage_action_rate_limit");
  if (number(triage.activeBackendFault5xx ?? triage.backendFault5xx) > 0) return t("triage_action_backend");
  if (number(triage.activeAuthFault4xx ?? triage.authFault4xx) > 0) return t("triage_action_auth");
  if (triage.severity === "cached") return t("alert_cached_body");
  return t("triage_action_client");
}

function triageCounterSeverity(total, active, dangerWhenActive = false) {
  const totalValue = number(total);
  const activeValue = number(active);
  if (activeValue > 0 && dangerWhenActive) return "danger";
  if (activeValue > 0 || totalValue > 0) return "warn";
  return "ok";
}

function triageCounter(labelKey, total, active, dangerWhenActive = false) {
  const severity = triageCounterSeverity(total, active, dangerWhenActive);
  const activeValue = number(active);
  const laneState = activeValue > 0
    ? t("triage_active", { count: formatNumber(activeValue) })
    : t("triage_clear");
  return `
    <span class="${escapeHtml(severity)}">
      <em>${escapeHtml(t(labelKey))}</em>
      <strong>${formatNumber(total)}</strong>
      <small>${escapeHtml(laneState)}</small>
    </span>
  `;
}

function triageIncidentRow(incident) {
  const status = incident.lastStatus || "-";
  const activeClass = incident.active ? "active" : "cached";
  return `
    <span class="${escapeHtml(incident.severity || "warn")} ${activeClass}">
      <strong>${escapeHtml(incident.endpoint || "-")}</strong>
      <em>HTTP ${escapeHtml(String(status))}</em>
    </span>
  `;
}

function chartPointValues(chart) {
  if (!Array.isArray(chart?.points) || !chart.points.length) return [];
  return chart.points.map((point) => number(point.value));
}

function impressionSeries(periodData, chartKey = "impressions24h") {
  const chartValues = chartPointValues(dashboardData.charts?.[chartKey]);
  if (chartValues.length) return chartValues;
  const period = periodData || dashboardData.last24h || {};
  const posts = [...(period.topPosts || [])].sort((a, b) => {
    const aTime = new Date(a.postedAt || 0).getTime();
    const bTime = new Date(b.postedAt || 0).getTime();
    return aTime - bTime;
  });
  const values = posts.map((post) => Math.max(0, number(post.impressions)));
  const expectedTotal = number(period.impressions);
  const currentTotal = values.reduce((sum, value) => sum + value, 0);
  const delta = Math.max(0, expectedTotal - currentTotal);
  if (delta > 0) values.push(delta);
  if (!values.length && expectedTotal > 0) values.push(expectedTotal);
  return cumulativeSeries(values);
}

function hourlyLoadData() {
  return dashboardData.hourlyLoadBalancer || fallbackData.hourlyLoadBalancer || {};
}

function renderHourlyLoadBalancer() {
  const container = $("#monitor-hourly-heatmap");
  if (!container) return;
  const balancer = hourlyLoadData();
  const hours = Array.isArray(balancer.hours) && balancer.hours.length
    ? balancer.hours
    : fallbackData.hourlyLoadBalancer.hours;
  const next = balancer.nextWindow || null;
  const current = balancer.currentHour || hours.find((hour) => hour.current) || hours[0] || null;
  const bestHourIds = new Set((balancer.bestHours || []).map((hour) => Number(hour.hour)));
  $("#monitor-hourly-current").textContent = next
    ? t("hourly_next", { hour: next.label || "-", hours: formatNumber(next.hoursFromNow, 1) })
    : t("hourly_current", { hour: current?.label || "-", score: formatNumber(current?.loadScore, 1) });
  const best = (balancer.bestHours || []).slice(0, 3);
  container.innerHTML = `
    <div class="hourly-grid">
      ${hours
        .slice(0, 24)
        .map((hour) => {
          const score = clamp(number(hour.loadScore), 0, 100);
          const status = hour.status || (score >= 75 ? "hot" : score >= 52 ? "warm" : score >= 20 ? "cool" : "dark");
          const classes = [
            "hour-cell",
            status,
            Number(hour.hour) === Number(current?.hour) ? "current" : "",
            Number(hour.hour) === Number(next?.hour) ? "next" : "",
            bestHourIds.has(Number(hour.hour)) ? "best" : "",
          ].filter(Boolean).join(" ");
          return `
            <span class="${escapeHtml(classes)}" style="--load:${score.toFixed(1)}%" title="${escapeHtml(`${hour.label} UTC · score ${formatNumber(score, 1)} · ${formatNumber(hour.impressions)} L7 events · ${formatNumber(hour.posts)} posts`)}">
              <em>${escapeHtml(String(hour.hour).padStart(2, "0"))}</em>
              <strong>${escapeHtml(formatNumber(score, 0))}</strong>
            </span>
          `;
        })
        .join("")}
    </div>
    <div class="hourly-footer">
      <span>${escapeHtml(t("hourly_samples", { count: formatNumber(balancer.sampleCount), days: formatNumber(balancer.lookbackDays) }))}</span>
      <strong>${escapeHtml(t("hourly_zero_reads"))}</strong>
    </div>
    <div class="hourly-best">
      <span>${escapeHtml(t("hourly_best"))}</span>
      <strong>${escapeHtml(best.map((hour) => `${hour.label} ${formatNumber(hour.loadScore, 0)}`).join(" / ") || "-")}</strong>
    </div>
  `;
}

function renderMonitorPanels() {
  const loadChart = $("#monitor-load-chart");
  if (!loadChart) return;
  const last24h = dashboardData.last24h || fallbackData.last24h || {};
  const impressionChart = dashboardData.charts?.impressions24h;
  const impressionStats = seriesStats(
    impressionSeries(last24h, "impressions24h"),
    number(impressionChart?.total, number(last24h.impressions)),
  );
  $("#monitor-load-current").textContent = t("current_value", { value: formatNumber(impressionStats.total) });
  const impressionSource = chartSource(impressionChart, "last24h.topPosts");
  const impressionPoints = chartPointCount(impressionChart, impressionStats.values);
  loadChart.innerHTML = `
    ${chartSvg(impressionStats.values, "primary")}
    <div class="chart-legend">
      <span><i></i> l7_traffic.load</span>
      <strong>${formatNumber(impressionStats.total)} 24h total</strong>
    </div>
    <div class="chart-provenance">
      <span>${escapeHtml(t("chart_source", { source: impressionSource }))}</span>
      <span>${escapeHtml(t("chart_points", { count: formatNumber(impressionPoints) }))}</span>
    </div>
  `;
  renderHourlyLoadBalancer();

  const endpoints = dashboardData.api?.endpoints || fallbackData.api.endpoints || [];
  const calls = endpoints.reduce((sum, endpoint) => sum + number(endpoint.calls), 0);
  const failures = endpoints.reduce((sum, endpoint) => sum + number(endpoint.failures), 0);
  const endpointChart = dashboardData.charts?.xApiCallsDaily;
  const endpointStats = seriesStats(endpointCallSeries(), number(endpointChart?.total, calls));
  $("#monitor-request-current").textContent = t("current_value", { value: formatNumber(endpointStats.total) });
  const endpointSource = chartSource(endpointChart, "api.endpoints");
  const endpointPoints = chartPointCount(endpointChart, endpointStats.values);
  $("#monitor-request-chart").innerHTML = `
    ${chartSvg(endpointStats.values, "secondary")}
    <div class="chart-legend">
      <span><i></i> x_api.ops</span>
      <strong>${formatNumber(endpointStats.total)} calls · ${money(apiBudget().spend)} month</strong>
    </div>
    <div class="chart-provenance">
      <span>${escapeHtml(t("chart_source", { source: endpointSource }))}</span>
      <span>${escapeHtml(t("chart_points", { count: formatNumber(endpointPoints) }))}</span>
    </div>
  `;

  $("#monitor-api-summary").textContent = t("monitor_calls_summary", { calls: formatNumber(calls), failures: formatNumber(failures) });
  const maxCalls = Math.max(...endpoints.map((endpoint) => number(endpoint.calls)), 1);
  $("#monitor-endpoints").innerHTML = endpoints
    .slice(0, 6)
    .map((endpoint) => {
      const usage = clamp((number(endpoint.calls) / maxCalls) * 100);
      const health = endpointHealth(endpoint);
      return `
        <tr>
          <td>${escapeHtml(endpoint.name)}</td>
          <td>${formatNumber(endpoint.calls)}</td>
          <td>${formatNumber(endpoint.failures)}</td>
          <td><span class="usage-pill ${escapeHtml(health.className)}">${usage.toFixed(1)}%</span></td>
        </tr>
      `;
    })
    .join("");

  const freshness = dataFreshness();
  const triage = apiStatusTriage();
  const alert = $("#monitor-alert");
  const freshnessKey = freshness.className === "ok"
    ? "ok"
    : freshness.className === "cached"
      ? "cached"
      : freshness.className === "warn"
        ? "warn"
        : "danger";
  const triageKey = ["danger", "warn", "cached"].includes(triage.severity) ? triage.severity : "ok";
  const alertKey = worseSeverity(freshnessKey, triageKey);
  $("#monitor-alert-state").textContent = triage.severity === "ok" ? t(freshness.key) : t(`triage_state_${triage.severity}`);
  alert.className = `alert-console ${alertKey}`;
  const telemetryTime = dashboardData.telemetry?.checkedAt || dashboardData.profile?.followerCheckedAt || dashboardData.updatedAt;
  const title = triage.severity === "ok" ? t(`alert_${alertKey}_title`) : t(`triage_title_${triage.severity}`);
  const body = triage.severity === "ok" && freshnessKey !== "ok"
    ? `${t(`alert_${alertKey}_body`)} ${triageSummary(triage)}`
    : triageSummary(triage);
  const incidents = (triage.incidents || []).slice(0, 3);
  const incidentRows = incidents.length
    ? incidents.map(triageIncidentRow).join("")
    : `<span class="ok cached"><strong>${escapeHtml(t("triage_no_incidents"))}</strong><em>HTTP 2xx</em></span>`;
  alert.innerHTML = `
    <div class="triage-hero">
      <span class="triage-led ${escapeHtml(alertKey)}"></span>
      <div>
        <strong>${escapeHtml(title)}</strong>
        <p>${escapeHtml(body)}</p>
      </div>
    </div>
    <div class="triage-grid" aria-label="HTTP status triage counters">
      ${triageCounter("triage_429", triage.rateLimit429, triage.activeRateLimit429, true)}
      ${triageCounter("triage_5xx", triage.backendFault5xx, triage.activeBackendFault5xx, true)}
      ${triageCounter("triage_auth", triage.authFault4xx, triage.activeAuthFault4xx)}
      ${triageCounter("triage_client", triage.clientFault4xx, triage.activeClientFault4xx)}
    </div>
    <div class="triage-incidents" aria-label="${escapeHtml(t("triage_fault_partitions"))}">
      ${incidentRows}
    </div>
    <div class="triage-runbook">
      <span>${escapeHtml(t("triage_runbook"))}</span>
      <p>${escapeHtml(triageAction(triage))}</p>
      <code>${escapeHtml(t("triage_failure_rate", { rate: formatNumber(triage.failureRate, 2) }))} · ${escapeHtml(formatDate(telemetryTime))}</code>
    </div>
  `;
}

function colorWithAlpha(color, alpha) {
  const value = String(color || "").trim();
  if (!value) return `rgba(26, 86, 219, ${alpha})`;
  if (value.startsWith("#")) {
    const hex = value.slice(1);
    const full = hex.length === 3
      ? hex.split("").map((char) => char + char).join("")
      : hex.padEnd(6, "0").slice(0, 6);
    const int = Number.parseInt(full, 16);
    const red = (int >> 16) & 255;
    const green = (int >> 8) & 255;
    const blue = int & 255;
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  }
  if (value.startsWith("rgba(")) {
    return value.replace(/rgba\(([^)]+),\s*[\d.]+\)/, `rgba($1, ${alpha})`);
  }
  if (value.startsWith("rgb(")) {
    return value.replace("rgb(", "rgba(").replace(")", `, ${alpha})`);
  }
  return value;
}

function signalCanvasPalette() {
  const styles = getComputedStyle(document.documentElement);
  return {
    accent: styles.getPropertyValue("--accent").trim() || "#1a56db",
    accent2: styles.getPropertyValue("--accent-2").trim() || "#16a34a",
    accent3: styles.getPropertyValue("--accent-3").trim() || "#facc15",
    ink: styles.getPropertyValue("--ink").trim() || "#111827",
    body: styles.getPropertyValue("--body").trim() || "#4b5563",
    line: styles.getPropertyValue("--line").trim() || "#e5e7eb",
    surface: styles.getPropertyValue("--surface").trim() || "#ffffff",
    ok: styles.getPropertyValue("--ok").trim() || "#16a34a",
    warn: styles.getPropertyValue("--warn").trim() || "#d97706",
    danger: styles.getPropertyValue("--danger").trim() || "#ef4444",
  };
}

function signalCanvasHealthColor(entity, palette) {
  const health = String(entity?.health || entity?.status || "").toLowerCase();
  if (health === "danger" || health === "critical") return palette.danger;
  if (health === "warn" || health === "warning") return palette.warn;
  const id = entity?.id || entity?.node?.id;
  if (id === "x" || id === "learn") return palette.ok;
  if (id === "draft") return palette.accent3;
  return palette.accent;
}

function signalCanvasRouteColor(route, palette) {
  return signalCanvasHealthColor(route?.to?.node || route?.from?.node || route, palette);
}

function signalCanvasText(ctx, text, x, y, maxWidth) {
  let value = String(text ?? "");
  if (!value || maxWidth <= 0) return;
  if (ctx.measureText(value).width <= maxWidth) {
    ctx.fillText(value, x, y);
    return;
  }
  while (value.length > 3 && ctx.measureText(`${value.slice(0, -1)}...`).width > maxWidth) {
    value = value.slice(0, -1);
  }
  ctx.fillText(value.length > 3 ? `${value.slice(0, -1)}...` : value, x, y);
}

function signalCanvasRoundRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function signalCanvasRouteLabel(route) {
  const value = Number.isFinite(Number(route?.value)) ? formatNumber(route.value, String(route.value).includes(".") ? 1 : 0) : String(route?.value ?? "-");
  const unit = signalUnitLabel(route?.unit || "");
  return `${value}${unit ? ` ${unit}` : ""}`;
}

function signalCanvasPoint(point, width, height) {
  return {
    x: clamp(point?.x ?? 0.5, 0.12, 0.88) * width,
    y: clamp(point?.y ?? 0.5, 0.14, 0.86) * height,
  };
}

function signalCanvasNodeRadius(node, width, height) {
  const shortSide = Math.min(width, height);
  if (!node || node.label === "CORE") return Math.max(42, shortSide * 0.078);
  if (node.id === "draft" || node.id === "x") return Math.max(82, shortSide * 0.14);
  return Math.max(68, shortSide * 0.12);
}

function signalCanvasEdgePoint(from, to, radius) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const distance = Math.hypot(dx, dy) || 1;
  return {
    x: from.x + (dx / distance) * radius,
    y: from.y + (dy / distance) * radius,
  };
}

function signalRoutePoint(from, to, control, progress) {
  const rest = 1 - progress;
  return {
    x: rest * rest * from.x + 2 * rest * progress * control.x + progress * progress * to.x,
    y: rest * rest * from.y + 2 * rest * progress * control.y + progress * progress * to.y,
  };
}

function drawSignalCanvas(canvas, ctx, time) {
  const palette = signalCanvasPalette();
  const model = signalMap();
  const width = canvas.width;
  const height = canvas.height;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const grid = 44 * dpr;
  const center = signalCanvasPoint(model.core, width, height);
  const coreRadius = signalCanvasNodeRadius(model.core, width, height);
  const nodePoints = new Map(
    model.nodes.map((node) => [
      node.id,
      {
        ...signalCanvasPoint(node, width, height),
        radius: signalCanvasNodeRadius(node, width, height),
        node,
      },
    ]),
  );
  const routes = model.routes
    .map((route, index) => {
      const from = route.from === "core" ? { ...center, node: model.core } : nodePoints.get(route.from);
      const to = route.to === "core" ? { ...center, node: model.core } : nodePoints.get(route.to);
      if (!from || !to) return null;
      return { ...route, from, to, index, value: Math.max(0, number(route.value)) };
    })
    .filter(Boolean);
  const maxRouteValue = Math.max(...routes.map((route) => route.value), 1);

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = colorWithAlpha(palette.surface, currentTheme === "dark" ? 0.64 : 0.78);
  ctx.fillRect(0, 0, width, height);

  ctx.save();
  ctx.lineWidth = 1 * dpr;
  ctx.strokeStyle = colorWithAlpha(palette.line, currentTheme === "dark" ? 0.32 : 0.72);
  for (let x = (time / 28) % grid; x < width; x += grid) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = (time / 34) % grid; y < height; y += grid) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  ctx.restore();

  const ringMax = Math.max(width, height) * 0.42;
  for (let index = 0; index < 4; index += 1) {
    const radius = 42 * dpr + ((time * 0.028 + index * 82 * dpr) % ringMax);
    const alpha = Math.max(0, 0.24 - radius / ringMax / 4);
    ctx.beginPath();
    ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
    ctx.strokeStyle = colorWithAlpha(index % 2 ? palette.ok : palette.accent, alpha);
    ctx.lineWidth = 1.5 * dpr;
    ctx.stroke();
  }

  nodePoints.forEach((point, nodeId) => {
    const from = signalCanvasEdgePoint(center, point, coreRadius * 0.92);
    const to = signalCanvasEdgePoint(point, center, point.radius * 0.86);
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.strokeStyle = colorWithAlpha(
      nodeId === "x" || nodeId === "learn" ? palette.ok : palette.accent,
      currentTheme === "dark" ? 0.11 : 0.13,
    );
    ctx.lineWidth = 1 * dpr;
    ctx.stroke();
  });

  routes.forEach((route) => {
    const rawFrom = route.from;
    const rawTo = route.to;
    const from = signalCanvasEdgePoint(rawFrom, rawTo, (rawFrom.radius || coreRadius) * 0.9);
    const to = signalCanvasEdgePoint(rawTo, rawFrom, (rawTo.radius || coreRadius) * 0.9);
    const normalized = route.value / maxRouteValue;
    const color = signalCanvasRouteColor(route, palette);
    const bend = ((route.index % 2 ? 32 : -26) + normalized * 18) * dpr;
    const control = {
      x: (from.x + to.x) / 2,
      y: (from.y + to.y) / 2 + bend,
    };

    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.quadraticCurveTo(control.x, control.y, to.x, to.y);
    ctx.strokeStyle = colorWithAlpha(color, currentTheme === "dark" ? 0.38 : 0.28);
    ctx.lineWidth = (1.35 + normalized * 3.2) * dpr;
    ctx.stroke();

    const progress = (time / (1200 + route.index * 80) + route.index * 0.19) % 1;
    const dot = signalRoutePoint(from, to, control, progress);
    ctx.beginPath();
    ctx.arc(dot.x, dot.y, (3.8 + normalized * 2.6) * dpr, 0, Math.PI * 2);
    ctx.fillStyle = colorWithAlpha(color, 0.92);
    ctx.fill();

    if (route.index % 2 === 0 || normalized > 0.42) {
      const labelPoint = signalRoutePoint(from, to, control, 0.52);
      const label = signalCanvasRouteLabel(route);
      ctx.save();
      ctx.font = `800 ${8.5 * dpr}px ui-monospace, SFMono-Regular, Menlo, monospace`;
      const labelWidth = Math.min(Math.max(ctx.measureText(label).width + 16 * dpr, 50 * dpr), 118 * dpr);
      const labelHeight = 19 * dpr;
      const labelX = clamp(labelPoint.x - labelWidth / 2, 8 * dpr, width - labelWidth - 8 * dpr);
      const labelY = clamp(labelPoint.y - labelHeight / 2, 42 * dpr, height - labelHeight - 14 * dpr);
      signalCanvasRoundRect(ctx, labelX, labelY, labelWidth, labelHeight, 5 * dpr);
      ctx.fillStyle = colorWithAlpha(palette.surface, currentTheme === "dark" ? 0.72 : 0.9);
      ctx.fill();
      ctx.strokeStyle = colorWithAlpha(color, currentTheme === "dark" ? 0.42 : 0.34);
      ctx.lineWidth = 1 * dpr;
      ctx.stroke();
      ctx.fillStyle = color;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      signalCanvasText(ctx, label, labelX + labelWidth / 2, labelY + labelHeight / 2 + 0.5 * dpr, labelWidth - 12 * dpr);
      ctx.restore();
    }
  });

  ctx.save();
  ctx.translate(center.x, center.y);
  ctx.rotate(time / 3300);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(width * 0.26, -height * 0.1);
  ctx.strokeStyle = colorWithAlpha(palette.warn, currentTheme === "dark" ? 0.38 : 0.26);
  ctx.lineWidth = 2 * dpr;
  ctx.stroke();
  ctx.restore();

  ctx.beginPath();
  ctx.arc(center.x, center.y, coreRadius, 0, Math.PI * 2);
  ctx.fillStyle = colorWithAlpha(palette.accent, currentTheme === "dark" ? 0.2 : 0.12);
  ctx.fill();
  ctx.strokeStyle = colorWithAlpha(palette.accent, 0.72);
  ctx.lineWidth = 2 * dpr;
  ctx.stroke();
  ctx.fillStyle = palette.ink;
  ctx.font = `800 ${11 * dpr}px ui-sans-serif, system-ui, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(model.core?.label || "CORE", center.x, center.y - 4 * dpr);
  if (model.core?.value != null) {
    ctx.fillStyle = palette.body;
    ctx.font = `${9 * dpr}px ui-monospace, SFMono-Regular, Menlo, monospace`;
    ctx.fillText(formatSignalNodeValue(model.core), center.x, center.y + 11 * dpr);
  }

  nodePoints.forEach((point) => {
    const node = point.node;
    const color = signalCanvasHealthColor(node, palette);
    const cardWidth = Math.min(Math.max(point.radius * 1.62, 112 * dpr), 168 * dpr);
    const cardHeight = Math.min(Math.max(point.radius * 0.72, 47 * dpr), 62 * dpr);
    const x = clamp(point.x - cardWidth / 2, 10 * dpr, width - cardWidth - 10 * dpr);
    const y = clamp(point.y - cardHeight / 2, 44 * dpr, height - cardHeight - 12 * dpr);
    const status = String(node.health || "ok").toUpperCase();

    ctx.save();
    signalCanvasRoundRect(ctx, x, y, cardWidth, cardHeight, 7 * dpr);
    ctx.fillStyle = colorWithAlpha(palette.surface, currentTheme === "dark" ? 0.54 : 0.72);
    ctx.fill();
    ctx.strokeStyle = colorWithAlpha(color, currentTheme === "dark" ? 0.58 : 0.42);
    ctx.lineWidth = 1.2 * dpr;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x + 14 * dpr, y + 17 * dpr, 4.2 * dpr, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.shadowColor = colorWithAlpha(color, 0.42);
    ctx.shadowBlur = 12 * dpr;
    ctx.fill();
    ctx.shadowBlur = 0;

    ctx.fillStyle = palette.ink;
    ctx.font = `900 ${10 * dpr}px ui-monospace, SFMono-Regular, Menlo, monospace`;
    ctx.textAlign = "left";
    ctx.textBaseline = "alphabetic";
    signalCanvasText(ctx, signalNodeLabel(node), x + 24 * dpr, y + 20 * dpr, cardWidth - 58 * dpr);

    ctx.fillStyle = colorWithAlpha(palette.body, currentTheme === "dark" ? 0.92 : 0.86);
    ctx.font = `760 ${8 * dpr}px ui-monospace, SFMono-Regular, Menlo, monospace`;
    signalCanvasText(ctx, signalNodeSubLabel(node), x + 24 * dpr, y + 36 * dpr, cardWidth - 32 * dpr);

    ctx.font = `900 ${6.8 * dpr}px ui-monospace, SFMono-Regular, Menlo, monospace`;
    const statusWidth = Math.min(Math.max(ctx.measureText(status).width + 8 * dpr, 24 * dpr), 42 * dpr);
    const statusX = x + cardWidth - statusWidth - 7 * dpr;
    const statusY = y + 8 * dpr;
    signalCanvasRoundRect(ctx, statusX, statusY, statusWidth, 13 * dpr, 999 * dpr);
    ctx.fillStyle = colorWithAlpha(color, 0.12);
    ctx.fill();
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    signalCanvasText(ctx, status, statusX + statusWidth / 2, statusY + 7 * dpr, statusWidth - 4 * dpr);
    ctx.restore();
  });

}

function setupSignalCanvas() {
  const canvas = $("#signal-canvas");
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();
  if (!rect.width || !rect.height) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const width = Math.round(rect.width * dpr);
  const height = Math.round(rect.height * dpr);
  if (canvas.width !== width) canvas.width = width;
  if (canvas.height !== height) canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  if (signalAnimationFrame) cancelAnimationFrame(signalAnimationFrame);
  const animate = (time) => {
    drawSignalCanvas(canvas, ctx, time);
    signalAnimationFrame = requestAnimationFrame(animate);
  };
  animate(0);
}

function renderSignalNodes() {
  const model = signalMap();
  const nodeById = new Map(model.nodes.map((node) => [node.id, node]));
  document.querySelectorAll(".signal-node-button[data-signal-node]").forEach((button) => {
    const node = nodeById.get(button.dataset.signalNode);
    if (!node) return;
    const label = signalNodeLabel(node);
    button.style.setProperty("--signal-node-x", `${clamp(node.x, 0.08, 0.92) * 100}%`);
    button.style.setProperty("--signal-node-y", `${clamp(node.y, 0.12, 0.88) * 100}%`);
    button.classList.toggle("warn", node.health === "warn");
    button.classList.toggle("danger", node.health === "danger");
    button.classList.toggle("ok", !node.health || node.health === "ok");
    button.dataset.signalHealth = (node.health || "ok").toUpperCase();
    button.setAttribute("aria-label", `${label}: ${formatSignalNodeValue(node)}. ${signalNodeDetail(node)}`.trim());
    button.innerHTML = `
      <span class="signal-node-label">${escapeHtml(label)}</span>
      <em>${escapeHtml(signalNodeSubLabel(node))}</em>
    `;
  });
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

function nextMilestoneFor(current, target) {
  const milestones = [100, 250, 500, 1000, 2500, 5000, 10000];
  return milestones.find((milestone) => milestone > current) || target;
}

function goalData() {
  const profile = dashboardData.profile || {};
  const configured = dashboardData.growthGoal || fallbackData.growthGoal || {};
  const current = number(profile.followers, number(configured.currentFollowers));
  const target = Math.max(current + 1, number(configured.targetFollowers, 1000));
  const nextMilestone = Math.min(target, number(configured.nextMilestone, nextMilestoneFor(current, target)));
  const dailyReplies = number(configured.dailyReplies, 3);
  const dailyPosts = number(configured.dailyPosts, 1);
  const progress = target > 0 ? Math.min(100, Math.max(0, (current / target) * 100)) : 0;
  return { current, target, nextMilestone, dailyReplies, dailyPosts, progress };
}

function renderGoal() {
  const goal = goalData();
  const remaining = Math.max(0, goal.target - goal.current);
  $("#goal-remaining").textContent = t("goal_remaining", { count: formatNumber(remaining) });
  $("#goal-progress-bar").style.width = `${goal.progress}%`;
  $("#goal-progress-label").textContent = t("goal_progress", {
    current: formatNumber(goal.current),
    target: formatNumber(goal.target),
  });
  const stats = [
    { label: t("goal_current"), value: formatNumber(goal.current) },
    { label: t("goal_target"), value: formatNumber(goal.target) },
    { label: t("goal_next"), value: formatNumber(goal.nextMilestone) },
    { label: t("goal_daily"), value: t("daily_target_value", { replies: goal.dailyReplies, posts: goal.dailyPosts }) },
  ];
  $("#goal-stats").innerHTML = stats
    .map(
      (item) => `
        <div>
          <span>${escapeHtml(item.label)}</span>
          <strong>${escapeHtml(item.value)}</strong>
        </div>
      `,
    )
    .join("");
}

function growthKineticsData() {
  const incoming = dashboardData.growthKinetics || fallbackData.growthKinetics;
  if (incoming) return incoming;
  const profile = dashboardData.profile || fallbackData.profile || {};
  const last24h = dashboardData.last24h || fallbackData.last24h || {};
  const last7d = dashboardData.last7d || fallbackData.last7d || {};
  const goal = goalData();
  const ops = distributionOpsData();
  const flywheel = viralFlywheelData();
  const impressions24h = number(last24h.impressions);
  const impressions7d = number(last7d.impressions);
  const engagements24h = number(last24h.likes) + number(last24h.reposts) + number(last24h.replies);
  const engagements7d = number(last7d.likes) + number(last7d.reposts) + number(last7d.replies);
  const engagementRate24h = impressions24h > 0 ? (engagements24h / impressions24h) * 100 : 0;
  const readyMissions = number(ops.readyMissions);
  const targetReplies = Math.max(1, number(goal.dailyReplies, 3));
  const routeReadinessPct = targetReplies > 0 ? (readyMissions / targetReplies) * 100 : 0;
  const followerDelta = number(profile.followerDelta);
  const conversionPer1k = impressions7d > 0 && followerDelta > 0 ? (followerDelta / impressions7d) * 1000 : 0.8;
  const score = clamp(
    8 +
      Math.min(22, impressions24h / 12) +
      Math.min(18, engagementRate24h * 2.2) +
      Math.min(18, routeReadinessPct * 0.18) +
      Math.min(14, number(flywheel.velocityScore) * 0.14) +
      (followerDelta > 0 ? Math.min(10, followerDelta * 4) : followerDelta < 0 ? -10 : 0),
    0,
    100,
  );
  const mode = score >= 78 ? "compounding" : score >= 58 ? "acceleration" : score >= 34 ? "ignition" : "starved";
  const status = score >= 58 ? "ok" : score >= 34 ? "warn" : "danger";
  const dailyThroughput = impressions7d > 0 ? impressions7d / 7 : impressions24h;
  const remainingToMilestone = Math.max(0, goal.nextMilestone - goal.current);
  const projectedDaysToMilestone = dailyThroughput > 0 && conversionPer1k > 0
    ? (remainingToMilestone / conversionPer1k * 1000) / dailyThroughput
    : null;
  return {
    source: "derived cached telemetry",
    zeroExtraXReads: true,
    mode,
    status,
    score,
    currentFollowers: goal.current,
    followerDelta,
    nextMilestone: goal.nextMilestone,
    remainingToMilestone,
    impressions24h,
    impressions7d,
    engagements24h,
    engagements7d,
    engagementRate24h,
    effectiveConversionPer1k: conversionPer1k,
    projectedDaysToMilestone,
    nextAction: routeReadinessPct < 50
      ? `Arm ${formatNumber(Math.max(1, targetReplies - readyMissions))} manual reply lane(s) before the next standalone post.`
      : "Keep the current route loop hot and let maintenance write conversion data back.",
    cells: [
      { id: "throughput", label: "L7 throughput", value: impressions24h, status: impressions24h > 100 ? "ok" : impressions24h > 20 ? "warn" : "danger" },
      { id: "engagement", label: "ACK rate", value: `${formatNumber(engagementRate24h, 1)}%`, status: engagementRate24h >= 4 ? "ok" : engagementRate24h >= 1.5 ? "warn" : "danger" },
      { id: "conversion", label: "conn / 1k events", value: formatNumber(conversionPer1k, 2), status: followerDelta > 0 ? "ok" : "warn" },
      { id: "runway", label: "milestone runway", value: projectedDaysToMilestone == null ? "collect samples" : `${formatNumber(projectedDaysToMilestone, projectedDaysToMilestone > 30 ? 0 : 1)}d`, status: projectedDaysToMilestone == null ? "warn" : projectedDaysToMilestone <= 14 ? "ok" : projectedDaysToMilestone <= 45 ? "warn" : "danger" },
    ],
    lanes: [
      { id: "ingress", label: "ingress throughput", value: impressions24h, score: clamp(impressions24h / Math.max(1, dailyThroughput || 1) * 50, 0, 100), status: impressions24h > 100 ? "ok" : impressions24h > 20 ? "warn" : "danger", detail: `${formatNumber(impressions7d)} L7 events over 7d` },
      { id: "ack", label: "ACK reactor", value: `${formatNumber(engagementRate24h, 1)}%`, score: clamp(engagementRate24h * 12, 0, 100), status: engagementRate24h >= 4 ? "ok" : engagementRate24h >= 1.5 ? "warn" : "danger", detail: `${formatNumber(engagements24h)} ACKs in 24h` },
      { id: "conversion", label: "conn conversion", value: `${formatNumber(conversionPer1k, 2)}/1k`, score: clamp(conversionPer1k * 30, 0, 100), status: followerDelta > 0 ? "ok" : "warn", detail: followerDelta > 0 ? `${formatNumber(followerDelta)} active conn delta` : "using fallback conversion prior" },
      { id: "route", label: "route amplifier", value: `${formatNumber(readyMissions)}/${formatNumber(targetReplies)}`, score: clamp(routeReadinessPct, 0, 100), status: routeReadinessPct >= 100 ? "ok" : routeReadinessPct >= 50 ? "warn" : "danger", detail: "manual lanes preserve 0 X read ops" },
    ],
  };
}

function kineticModeLabel(mode) {
  const key = `kinetics_mode_${String(mode || "").replace(/[^a-z0-9_]/gi, "_")}`;
  const translated = t(key);
  return translated === key ? String(mode || "-").replace(/_/g, " ") : translated;
}

function renderGrowthKinetics() {
  const kinetics = growthKineticsData();
  const state = $("#kinetics-state");
  if (!state) return;
  if (!kinetics) {
    $(".growth-kinetics-panel").innerHTML = `<p class="empty-state">${escapeHtml(t("kinetics_empty"))}</p>`;
    return;
  }
  const score = clamp(number(kinetics.score), 0, 100);
  const status = ["ok", "warn", "danger"].includes(kinetics.status) ? kinetics.status : score >= 58 ? "ok" : score >= 34 ? "warn" : "danger";
  state.textContent = kineticModeLabel(kinetics.mode);
  state.className = `pill ${status === "ok" ? "pill-good" : status === "danger" ? "pill-danger" : "pill-warn"}`;
  $("#kinetics-score").textContent = `${formatNumber(score, 1)}%`;
  $("#kinetics-score-bar").style.width = `${score}%`;
  $("#kinetics-next").textContent = kinetics.nextAction || "-";
  $("#kinetics-cells").innerHTML = (kinetics.cells || [])
    .slice(0, 4)
    .map((cell) => `
      <div class="${escapeHtml(cell.status || "neutral")}">
        <span>${escapeHtml(cell.label || cell.id || "-")}</span>
        <strong>${escapeHtml(gateLabel(cell.value))}</strong>
      </div>
    `)
    .join("");
  $("#kinetics-lanes").innerHTML = (kinetics.lanes || [])
    .slice(0, 4)
    .map((lane) => {
      const laneScore = clamp(number(lane.score), 0, 100);
      return `
        <article class="${escapeHtml(lane.status || "neutral")}" style="--lane-score:${laneScore.toFixed(1)}%">
          <div>
            <span>${escapeHtml(lane.label || lane.id || "-")}</span>
            <strong>${escapeHtml(gateLabel(lane.value))}</strong>
          </div>
          <div class="kinetics-lane-bar"><span></span></div>
          <small>${escapeHtml(lane.detail || "")}</small>
        </article>
      `;
    })
    .join("");
}

function learningData() {
  const learning = dashboardData.learning || fallbackData.learning || {};
  const performance = dashboardData.performance || {};
  const bestHook = learning.bestHook || performance.templates?.[0] || null;
  const bestSource = learning.bestSource || performance.sources?.[0] || null;
  const worstFormat = learning.worstFormat || null;
  return { learning, bestHook, bestSource, worstFormat };
}

function learningValue(item) {
  if (!item) return "-";
  const name = formatTemplate(item.name || item.template || "-");
  const score = Number.isFinite(Number(item.avgScore)) ? ` · ${Number(item.avgScore).toFixed(1)}` : "";
  const samples = Number.isFinite(Number(item.samples)) ? ` · n=${Number(item.samples)}` : "";
  return `${name}${score}${samples}`;
}

function learningAutopilotData() {
  return dashboardData.learningAutopilot || fallbackData.learningAutopilot || {};
}

function autopilotFormatLabel(item) {
  if (!item) return "-";
  const name = item.label || formatTemplate(item.id || item.name || "-");
  const score = Number.isFinite(Number(item.avgScore)) ? ` ${formatNumber(item.avgScore, 1)}` : " -";
  const samples = Number.isFinite(Number(item.samples)) ? ` n=${formatNumber(item.samples)}` : "";
  return `${name} ·${score}${samples}`;
}

function renderLearningAutopilot() {
  const autopilot = learningAutopilotData();
  const container = $("#autopilot-stream");
  if (!container) return;
  const primary = autopilot.primaryFormat || (autopilot.exploitFormats || [])[0] || (autopilot.testFormats || [])[0];
  const exploit = (autopilot.exploitFormats || []).slice(0, 2).map(autopilotFormatLabel).join(" / ") || "-";
  const explore = (autopilot.exploreFormats || []).slice(0, 2).map(autopilotFormatLabel).join(" / ") || "-";
  const hold = (autopilot.holdFormats || []).slice(0, 2).map(autopilotFormatLabel).join(" / ") || "-";
  const directives = Array.isArray(autopilot.directives) ? autopilot.directives.slice(0, 4) : [];
  container.innerHTML = `
    <div class="autopilot-head">
      <span>${escapeHtml(t("autopilot_eyebrow"))}</span>
      <strong>${escapeHtml(String(autopilot.mode || "-").replace(/_/g, " "))}</strong>
      <em>${escapeHtml(autopilot.confidence || "-")}</em>
    </div>
    <div class="autopilot-metrics">
      <div><span>${escapeHtml(t("autopilot_samples"))}</span><strong>${escapeHtml(formatNumber(autopilot.sampleCount))}</strong></div>
      <div><span>${escapeHtml(t("autopilot_baseline"))}</span><strong>${escapeHtml(formatNumber(autopilot.baselineScore, 1))}</strong></div>
      <div><span>${escapeHtml(t("autopilot_primary"))}</span><strong>${escapeHtml(autopilotFormatLabel(primary))}</strong></div>
    </div>
    <div class="autopilot-lanes">
      <div class="ok"><span>${escapeHtml(t("autopilot_exploit"))}</span><strong>${escapeHtml(exploit)}</strong></div>
      <div class="warn"><span>${escapeHtml(t("autopilot_explore"))}</span><strong>${escapeHtml(explore)}</strong></div>
      <div class="danger"><span>${escapeHtml(t("autopilot_hold"))}</span><strong>${escapeHtml(hold)}</strong></div>
    </div>
    <div class="autopilot-directives">
      <span>${escapeHtml(t("autopilot_directives"))}</span>
      ${directives.map((directive) => `<code>${escapeHtml(directive)}</code>`).join("")}
    </div>
  `;
}

function angleSchedulerData() {
  return dashboardData.adaptiveAngleScheduler || fallbackData.adaptiveAngleScheduler || {};
}

function angleModeLabel(mode) {
  const key = `angle_mode_${String(mode || "").replace(/-/g, "_")}`;
  const translated = t(key);
  return translated === key ? String(mode || "-").replace(/_/g, " ") : translated;
}

function renderAdaptiveAngleScheduler() {
  const scheduler = angleSchedulerData();
  const container = $("#angle-scheduler");
  if (!container) return;
  const slots = Array.isArray(scheduler.nextAngles) ? scheduler.nextAngles : [];
  const directives = Array.isArray(scheduler.promptDirectives) ? scheduler.promptDirectives.slice(0, 3) : [];
  if (!slots.length) {
    container.innerHTML = `<p class="empty-state">${escapeHtml(t("angle_empty"))}</p>`;
    return;
  }

  const load = scheduler.load || {};
  container.innerHTML = `
    <div class="angle-head">
      <div>
        <span>${escapeHtml(t("angle_eyebrow"))}</span>
        <strong>${escapeHtml(t("angle_title"))}</strong>
      </div>
      <em>${escapeHtml(t("angle_zero_reads"))}</em>
    </div>
    <div class="angle-metrics">
      <div><span>${escapeHtml(t("angle_mode"))}</span><strong>${escapeHtml(angleModeLabel(scheduler.mode))}</strong></div>
      <div><span>${escapeHtml(t("angle_confidence"))}</span><strong>${escapeHtml(scheduler.confidence || "-")}</strong></div>
      <div><span>${escapeHtml(t("angle_load"))}</span><strong>${escapeHtml(formatNumber(load.impressions24h))}</strong></div>
      <div><span>${escapeHtml(t("angle_peak"))}</span><strong>${escapeHtml(load.peakBucket?.label || "-")} · ${escapeHtml(formatNumber(load.peakBucket?.value))}</strong></div>
      <div><span>${escapeHtml(t("angle_budget"))}</span><strong>${escapeHtml(money(scheduler.safeBudgetLeftUsd))}</strong></div>
    </div>
    <div class="angle-section-label">${escapeHtml(t("angle_slots"))}</div>
    <div class="angle-slots">
      ${slots
        .slice(0, 4)
        .map((slot) => `
          <article class="angle-slot ${escapeHtml(slot.status || slot.action || "queue")}">
            <div>
              <span>${escapeHtml(t("angle_slot", { slot: slot.slot || "-" }))}</span>
              <strong>${escapeHtml(slot.label || formatTemplate(slot.formatId))}</strong>
            </div>
            <em>${escapeHtml(slot.action || "test")}</em>
            <p>${escapeHtml(slot.angle || slot.reason || "-")}</p>
            <small>${escapeHtml(t("angle_weight", { weight: formatNumber(slot.weight, 1) }))} · avg ${escapeHtml(formatNumber(slot.avgScore, 1))} · n=${escapeHtml(formatNumber(slot.samples))}</small>
          </article>
        `)
        .join("")}
    </div>
    <div class="angle-directives">
      <span>${escapeHtml(t("angle_directives"))}</span>
      ${directives.map((directive) => `<code>${escapeHtml(directive)}</code>`).join("")}
    </div>
  `;
}

function learningWritebackData() {
  const incoming = dashboardData.learningWriteback || fallbackData.learningWriteback;
  if (incoming) return incoming;
  const scheduler = angleSchedulerData();
  const autopilot = learningAutopilotData();
  const matrix = temporalAngleMatrixData();
  const governor = governorData();
  const primary = (scheduler.nextAngles || [])[0] || autopilot.primaryFormat || null;
  const temporal = (matrix.slots || [])[0] || null;
  const holdIds = [
    ...new Set([
      ...(autopilot.holdFormats || []).map((row) => row.id).filter(Boolean),
      ...(scheduler.scoringBias?.holdFormatIds || []).filter(Boolean),
    ]),
  ];
  const readGate = governor?.gates?.read || "cached_only";
  return {
    generatedAt: scheduler.generatedAt || dashboardData.updatedAt || fallbackData.updatedAt,
    source: "derived cached telemetry",
    zeroExtraXReads: true,
    mode: scheduler.mode || autopilot.mode || "controlled_rule_writeback",
    confidence: scheduler.confidence || autopilot.confidence || "low",
    epoch: String(scheduler.generatedAt || dashboardData.updatedAt || fallbackData.updatedAt || "").slice(0, 16),
    sampleCount: number(scheduler.sampleCount, number(autopilot.sampleCount)),
    baselineScore: number(scheduler.baselineScore, number(autopilot.baselineScore)),
    activeRule: primary
      ? {
          id: primary.formatId || primary.id,
          label: primary.label || formatTemplate(primary.formatId || primary.id),
          action: primary.action || "test",
          weight: number(primary.weight, number(primary.score)),
          avgScore: number(primary.avgScore),
          samples: number(primary.samples),
          reason: primary.reason || "-",
        }
      : null,
    nextWriteback: primary
      ? `Promote ${primary.label || formatTemplate(primary.formatId || primary.id)} into the next prompt route.`
      : "-",
    cells: [
      { id: "samples", label: "sample ledger", value: number(scheduler.sampleCount, number(autopilot.sampleCount)), status: "ok" },
      { id: "baseline", label: "baseline score", value: number(scheduler.baselineScore, number(autopilot.baselineScore)), status: "ok" },
      { id: "safe_slots", label: "safe slots", value: number((dashboardData.experimentPlan || fallbackData.experimentPlan || {}).budgetSafeSlots), status: "ok" },
      { id: "read_gate", label: "read gate", value: readGate, status: readGate === "closed" ? "danger" : "ok" },
    ],
    mutations: [
      { id: "primary_rule", label: "primary rule", before: "baseline rotation", after: primary?.formatId || primary?.id || "-", status: primary?.action === "exploit" ? "ok" : "warn", score: number(primary?.weight), reason: primary?.reason || "-" },
      { id: "temporal_slot", label: "UTC fire-control", before: "current cadence", after: temporal ? `${temporal.windowLabel} UTC / ${temporal.formatId}` : "-", status: temporal?.status === "hot" ? "ok" : "warn", score: number(temporal?.score), reason: temporal?.reason || matrix.nextAction || "-" },
      { id: "hold_gate", label: "hold filter", before: "all formats", after: holdIds.length ? holdIds.join(", ") : "none", status: holdIds.length ? "warn" : "ok", score: holdIds.length, reason: holdIds.length ? "Under-baseline formats stay gated." : "No held formats." },
    ],
    directives: [...(scheduler.promptDirectives || []), ...(autopilot.directives || [])].filter(Boolean).slice(0, 5),
  };
}

function mutationTone(status) {
  if (status === "danger") return "danger";
  if (status === "warn" || status === "hold") return "warn";
  if (status === "ok" || status === "hot") return "ok";
  return "neutral";
}

function renderLearningWriteback() {
  const ledger = learningWritebackData();
  const container = $("#learning-writeback");
  if (!container) return;
  const mutations = Array.isArray(ledger.mutations) ? ledger.mutations : [];
  const cells = Array.isArray(ledger.cells) ? ledger.cells : [];
  const directives = Array.isArray(ledger.directives) ? ledger.directives.slice(0, 4) : [];
  if (!mutations.length && !cells.length) {
    container.innerHTML = `<p class="empty-state">${escapeHtml(t("writeback_empty"))}</p>`;
    return;
  }
  const active = ledger.activeRule || {};
  container.innerHTML = `
    <div class="writeback-head">
      <div>
        <span>${escapeHtml(t("writeback_eyebrow"))}</span>
        <strong>${escapeHtml(t("writeback_title"))}</strong>
      </div>
      <em>${escapeHtml(t("writeback_zero_reads"))}</em>
    </div>
    <div class="writeback-meta">
      <div><span>${escapeHtml(t("writeback_source"))}</span><strong>${escapeHtml(ledger.source || "-")}</strong></div>
      <div><span>${escapeHtml(t("writeback_epoch"))}</span><strong>${escapeHtml(ledger.epoch || formatDate(ledger.generatedAt))}</strong></div>
      <div><span>${escapeHtml(t("writeback_active"))}</span><strong>${escapeHtml(active.label || active.id || "-")} · ${escapeHtml(active.action || "-")}</strong></div>
    </div>
    <div class="writeback-cells">
      ${cells.slice(0, 4).map((cell) => `
        <span class="${escapeHtml(mutationTone(cell.status))}">
          <em>${escapeHtml(cell.label || cell.id || "-")}</em>
          <strong>${escapeHtml(gateLabel(cell.value))}</strong>
        </span>
      `).join("")}
    </div>
    <div class="writeback-mutations">
      <span>${escapeHtml(t("writeback_mutations"))}</span>
      ${mutations.slice(0, 4).map((mutation) => `
        <article class="${escapeHtml(mutationTone(mutation.status))}">
          <div>
            <strong>${escapeHtml(mutation.label || mutation.id || "-")}</strong>
            <em>${escapeHtml(gateLabel(mutation.before))} -> ${escapeHtml(gateLabel(mutation.after))}</em>
          </div>
          <small>${escapeHtml(formatNumber(mutation.score, 1))}</small>
          <p>${escapeHtml(mutation.reason || "-")}</p>
        </article>
      `).join("")}
    </div>
    <div class="writeback-directives">
      <span>${escapeHtml(t("writeback_next"))}</span>
      <code>${escapeHtml(ledger.nextWriteback || "-")}</code>
      ${directives.length ? `<span>${escapeHtml(t("writeback_directives"))}</span>${directives.map((directive) => `<code>${escapeHtml(directive)}</code>`).join("")}` : ""}
    </div>
  `;
}

function angleMutationReactorData() {
  const incoming = dashboardData.angleMutationReactor || fallbackData.angleMutationReactor;
  if (incoming) return incoming;
  const ledger = learningWritebackData();
  const scheduler = angleSchedulerData();
  const matrix = temporalAngleMatrixData();
  const route = routeAmplifierData();
  const active = ledger.activeRule || (scheduler.nextAngles || [])[0] || {};
  const temporal = (matrix.slots || [])[0] || {};
  const routeLane = (route.lanes || [])[0] || {};
  const sampleCount = number(ledger.sampleCount, number(scheduler.sampleCount));
  const baseline = Math.max(1, number(ledger.baselineScore, number(scheduler.baselineScore, 1)));
  const primaryLabel = active.label || formatTemplate(active.formatId || active.id || "decision_rule");
  const temporalBias = temporal.windowLabel
    ? `${temporal.windowLabel} UTC / ${temporal.label || formatTemplate(temporal.formatId)}`
    : "next learned peak window";
  const routeLabel = routeLane.label || "manual high-signal X web route";
  const mutationScore = clamp(
    18 +
      Math.min(24, number(active.weight, number(active.score, number(active.avgScore, baseline))) * 0.32) +
      Math.min(18, number(temporal.score) * 0.2) +
      Math.min(18, number(route.avgScore, number(routeLane.score)) * 0.2) +
      Math.min(16, sampleCount * 0.7),
    0,
    100,
  );
  const severity = mutationScore >= 72 ? "ok" : mutationScore >= 48 ? "warn" : "danger";
  const nextPromptBias = `Exploit ${primaryLabel}; window=${temporalBias}; route=${routeLabel}.`;
  const guardrails = [
    "No automatic replies, likes, follows, or unsolicited bulk actions.",
    "No X search/read API calls for manual route selection.",
    "Use cached telemetry and normal backoff only.",
    "Skip headline recap, unsupported claims, ragebait, giveaways, and politics bait.",
  ];
  const promptPatch = [
    "CODEX ANGLE MUTATION PATCH",
    "mode: cached_angle_mutation_reactor",
    "zero_extra_x_reads: true",
    `mutation_score: ${formatNumber(mutationScore, 1)}`,
    `primary_rule: ${primaryLabel} (${active.action || "test"})`,
    `temporal_window: ${temporalBias}`,
    `route_bias: ${routeLabel}`,
    "",
    "DO:",
    `- Lead with a concrete ${primaryLabel} operating rule.`,
    "- Name the real company/product and translate the story into cost, leverage, or workflow impact.",
    "- End with a sharp question or decision rule that invites a technical reply.",
    "",
    "AVOID:",
    "- Headline recap, generic optimism, unsupported claims, outrage bait, and extra X read/search API calls.",
  ].join("\n");
  const mutations = [
    { id: "prompt_rule", label: "prompt rule", before: "baseline rotation", after: active.formatId || active.id || "decision_rule", status: severity, score: mutationScore, reason: active.reason || "Derived from cached learning writeback and adaptive schedule." },
    { id: "temporal_bias", label: "UTC fire-control", before: "flat cadence", after: temporalBias, status: temporal.status || "warn", score: number(temporal.score), reason: temporal.reason || matrix.nextAction || "Cached hourly throughput selects the next timing bias." },
    { id: "route_bias", label: "manual route amplifier", before: "random browsing", after: routeLabel, status: routeLane.status || "warn", score: number(routeLane.score, number(route.avgScore)), reason: routeLane.reason || route.nextAction || "Manual route scoring uses cached packet readiness." },
    ...(ledger.mutations || []).filter((mutation) => ["hold_gate", "cost_gate"].includes(mutation.id)).slice(0, 2),
  ];
  return {
    generatedAt: ledger.generatedAt || scheduler.generatedAt || dashboardData.updatedAt || fallbackData.updatedAt,
    mode: "derived_cached_angle_mutation_reactor",
    source: "derived cached telemetry",
    zeroExtraXReads: true,
    estimatedXReadOps: 0,
    estimatedIncrementalXApiUsd: 0,
    severity,
    confidence: ledger.confidence || scheduler.confidence || "low",
    mutationScore,
    baselineScore: baseline,
    sampleCount,
    primaryMutation: mutations[0],
    nextPromptBias,
    promptPatch,
    cells: [
      { id: "score", label: "mutation score", value: formatNumber(mutationScore, 1), status: severity },
      { id: "samples", label: "sample base", value: formatNumber(sampleCount), status: sampleCount >= 10 ? "ok" : "warn" },
      { id: "route", label: "route bias", value: routeLabel, status: routeLane.status || "warn" },
      { id: "window", label: "UTC window", value: temporalBias, status: temporal.status || "warn" },
      { id: "x_reads", label: "X read ops", value: "0", status: "ok" },
    ],
    mutations,
    guardrails,
  };
}

function renderAngleMutationReactor() {
  const reactor = angleMutationReactorData();
  const container = $("#angle-mutation-reactor");
  if (!container) return;
  const mutations = Array.isArray(reactor.mutations) ? reactor.mutations : [];
  const cells = Array.isArray(reactor.cells) ? reactor.cells : [];
  const guardrails = Array.isArray(reactor.guardrails) ? reactor.guardrails.slice(0, 4) : [];
  const promptPatch = reactor.promptPatch || "";
  if (!mutations.length && !cells.length) {
    container.innerHTML = `<p class="empty-state">${escapeHtml(t("mutation_empty"))}</p>`;
    return;
  }
  const score = clamp(number(reactor.mutationScore), 0, 100);
  const primary = reactor.primaryMutation || mutations[0] || {};
  container.innerHTML = `
    <div class="mutation-head">
      <div>
        <span>${escapeHtml(t("mutation_eyebrow"))}</span>
        <strong>${escapeHtml(t("mutation_title"))}</strong>
      </div>
      <em>${escapeHtml(t("mutation_zero_reads"))}</em>
    </div>
    <div class="mutation-core">
      <div class="mutation-score" style="--mutation-score:${score.toFixed(1)}%">
        <span>${escapeHtml(t("mutation_score"))}</span>
        <strong>${escapeHtml(formatNumber(score, 1))}</strong>
        <div><i></i></div>
      </div>
      <div class="mutation-bias">
        <span>${escapeHtml(t("mutation_bias"))}</span>
        <code>${escapeHtml(reactor.nextPromptBias || "-")}</code>
      </div>
      <div class="mutation-primary">
        <span>${escapeHtml(t("mutation_primary"))}</span>
        <strong>${escapeHtml(primary.label || primary.id || "-")}</strong>
        <small>${escapeHtml(gateLabel(primary.before))} -> ${escapeHtml(gateLabel(primary.after))}</small>
      </div>
    </div>
    <div class="mutation-section-label">${escapeHtml(t("mutation_cells"))}</div>
    <div class="mutation-cells">
      ${cells.slice(0, 6).map((cell) => `
        <span class="${escapeHtml(mutationTone(cell.status))}">
          <em>${escapeHtml(cell.label || cell.id || "-")}</em>
          <strong>${escapeHtml(gateLabel(cell.value))}</strong>
        </span>
      `).join("")}
    </div>
    <div class="mutation-section-label">${escapeHtml(t("mutation_ledger"))}</div>
    <div class="mutation-ledger">
      ${mutations.slice(0, 5).map((mutation) => `
        <article class="${escapeHtml(mutationTone(mutation.status))}">
          <div>
            <strong>${escapeHtml(mutation.label || mutation.id || "-")}</strong>
            <em>${escapeHtml(gateLabel(mutation.before))} -> ${escapeHtml(gateLabel(mutation.after))}</em>
          </div>
          <small>${escapeHtml(formatNumber(mutation.score, 1))}</small>
          <p>${escapeHtml(mutation.reason || "-")}</p>
        </article>
      `).join("")}
    </div>
    <div class="mutation-patch">
      <div>
        <span>${escapeHtml(t("mutation_patch"))}</span>
        <button type="button" data-copy="${encodeURIComponent(promptPatch)}">${escapeHtml(t("mutation_copy_patch"))}</button>
      </div>
      <pre><code>${escapeHtml(promptPatch)}</code></pre>
    </div>
    <div class="mutation-guardrails">
      <span>${escapeHtml(t("mutation_guardrails"))}</span>
      ${guardrails.map((item) => `<code>${escapeHtml(item)}</code>`).join("")}
    </div>
  `;
}

function audienceRouterData() {
  return dashboardData.audienceExpansionRouter || fallbackData.audienceExpansionRouter || {};
}

function renderAudienceRouter() {
  const router = audienceRouterData();
  const container = $("#audience-router");
  if (!container) return;
  const segments = Array.isArray(router.segments) ? router.segments : [];
  if (!segments.length) {
    container.innerHTML = `<p class="empty-state">${escapeHtml(t("audience_empty"))}</p>`;
    return;
  }
  const primary = router.primarySegment || segments[0] || {};
  container.innerHTML = `
    <div class="audience-head">
      <div>
        <span>${escapeHtml(t("audience_eyebrow"))}</span>
        <strong>${escapeHtml(t("audience_title"))}</strong>
      </div>
      <em>${escapeHtml(t("audience_zero_reads"))}</em>
    </div>
    <div class="audience-meta">
      <div><span>${escapeHtml(t("audience_primary"))}</span><strong>${escapeHtml(primary.label || "-")}</strong></div>
      <div><span>${escapeHtml(t("audience_confidence"))}</span><strong>${escapeHtml(router.confidence || "-")}</strong></div>
      <div><span>${escapeHtml(t("audience_samples"))}</span><strong>${escapeHtml(formatNumber(router.sampleCount))}</strong></div>
    </div>
    <div class="audience-segments">
      ${segments.slice(0, 6).map((segment) => `
        <article class="audience-segment ${escapeHtml(segment.action || "probe")}">
          <div>
            <span>${escapeHtml(segment.action || "probe")}</span>
            <strong>${escapeHtml(segment.label || segment.id || "-")}</strong>
          </div>
          <em>${escapeHtml(t("audience_score", { score: formatNumber(segment.score, 1) }))}</em>
          <div class="audience-bar" style="--audience-share:${clamp(number(segment.sharePct), 0, 100).toFixed(1)}%; --audience-target:${clamp(number(segment.targetSharePct), 0, 100).toFixed(1)}%"><span></span><i></i></div>
          <small>${escapeHtml(t("audience_share", { share: formatNumber(segment.sharePct, 1), target: formatNumber(segment.targetSharePct, 1) }))} · ${escapeHtml(t("audience_lift", { lift: formatNumber(segment.audienceLiftPct, 1) }))}</small>
          <p>${escapeHtml(segment.directive || segment.reason || "-")}</p>
        </article>
      `).join("")}
    </div>
    <div class="audience-directive">
      <span>${escapeHtml(t("audience_next"))}</span>
      <code>${escapeHtml(router.nextAction || "-")}</code>
    </div>
  `;
}

function trendVelocityRadarData() {
  return dashboardData.trendVelocityRadar || fallbackData.trendVelocityRadar || {};
}

function velocityStageLabel(stage) {
  const normalized = String(stage || "watch").replace(/_/g, " ");
  return normalized.toUpperCase();
}

function renderTrendVelocityRadar() {
  const radar = trendVelocityRadarData();
  const container = $("#trend-velocity-radar");
  if (!container) return;
  const items = Array.isArray(radar.items) ? radar.items : [];
  if (!items.length) {
    container.innerHTML = `<p class="empty-state">${escapeHtml(t("velocity_empty"))}</p>`;
    return;
  }
  const summary = radar.summary || {};
  const primary = items[0] || {};
  container.innerHTML = `
    <div class="velocity-head">
      <div>
        <span>${escapeHtml(t("velocity_eyebrow"))}</span>
        <strong>${escapeHtml(t("velocity_title"))}</strong>
      </div>
      <em>${escapeHtml(t("velocity_zero_reads"))}</em>
    </div>
    <div class="velocity-meta">
      <div><span>${escapeHtml(t("velocity_primary"))}</span><strong>${escapeHtml(summary.primarySource || primary.source || "-")}</strong></div>
      <div><span>${escapeHtml(t("velocity_average"))}</span><strong>${escapeHtml(formatNumber(summary.avgVelocity ?? primary.velocityScore, 1))}</strong></div>
      <div><span>${escapeHtml(t("velocity_breakouts"))}</span><strong>${escapeHtml(formatNumber(summary.breakoutCount || items.filter((item) => ["breakout", "rising"].includes(item.stage)).length))}</strong></div>
    </div>
    <div class="velocity-list">
      ${items.slice(0, 6).map((item) => {
        const score = clamp(number(item.velocityScore), 0, 100);
        const age = item.ageHours === null || item.ageHours === undefined ? "-" : t("velocity_age", { hours: formatNumber(item.ageHours, 1) });
        const liftPct = formatNumber(number(item.velocityLift) * 100, 1);
        const safeLink = /^https?:\/\//i.test(item.link || "") ? item.link : "";
        const safeRouteUrl = /^https:\/\/x\.com\/search\?/i.test(item.routeUrl || "") ? item.routeUrl : "";
        const replyAngle = item.replyAngle || item.routeReason || item.reason || "";
        return `
          <article class="velocity-row ${escapeHtml(item.stage || "watch")}" style="--velocity-score:${score.toFixed(1)}%">
            <div class="velocity-rank">${escapeHtml(String(item.rank || "-").padStart(2, "0"))}</div>
            <div class="velocity-topic">
              <span>${escapeHtml(velocityStageLabel(item.stage))} · ${escapeHtml(item.source || "-")} · ${escapeHtml(item.audienceLabel || "-")}</span>
              ${safeLink ? `<a href="${escapeHtml(safeLink)}" target="_blank" rel="noreferrer">${escapeHtml(item.title || "-")}</a>` : `<strong>${escapeHtml(item.title || "-")}</strong>`}
              <small>${escapeHtml(age)} · ${escapeHtml(t("velocity_echoes", { count: formatNumber(item.echoes) }))} · ${escapeHtml(t("velocity_lift", { lift: liftPct }))}</small>
            </div>
            <div class="velocity-actions">
              ${safeRouteUrl ? `<a href="${escapeHtml(safeRouteUrl)}" target="_blank" rel="noreferrer">${escapeHtml(t("velocity_open_route"))}</a>` : ""}
              <button type="button" data-copy="${encodeURIComponent(replyAngle)}">${escapeHtml(t("velocity_copy_angle"))}</button>
            </div>
            <div class="velocity-score">
              <strong>${escapeHtml(formatNumber(score, 1))}</strong>
              <div><span></span></div>
            </div>
          </article>
        `;
      }).join("")}
    </div>
    <div class="velocity-directive">
      <span>${escapeHtml(t("velocity_next"))}</span>
      <code>${escapeHtml(summary.nextAction || primary.reason || "-")}</code>
    </div>
  `;
}

function temporalAngleMatrixData() {
  return dashboardData.temporalAngleMatrix || fallbackData.temporalAngleMatrix || {};
}

function matrixModeLabel(mode) {
  const key = `matrix_mode_${String(mode || "").replace(/-/g, "_")}`;
  const translated = t(key);
  return translated === key ? String(mode || "-").replace(/_/g, " ") : translated;
}

function renderTemporalAngleMatrix() {
  const matrix = temporalAngleMatrixData();
  const container = $("#temporal-angle-matrix");
  if (!container) return;
  const slots = Array.isArray(matrix.slots) ? matrix.slots : [];
  if (!slots.length) {
    container.innerHTML = `<p class="empty-state">${escapeHtml(t("matrix_empty"))}</p>`;
    return;
  }

  container.innerHTML = `
    <div class="matrix-head">
      <div>
        <span>${escapeHtml(t("matrix_eyebrow"))}</span>
        <strong>${escapeHtml(t("matrix_title"))}</strong>
      </div>
      <em>${escapeHtml(t("matrix_zero_reads"))}</em>
    </div>
    <div class="matrix-meta">
      <div><span>${escapeHtml(t("matrix_mode"))}</span><strong>${escapeHtml(matrixModeLabel(matrix.mode))}</strong></div>
      <div><span>${escapeHtml(t("matrix_confidence"))}</span><strong>${escapeHtml(matrix.confidence || "-")}</strong></div>
      <div><span>${escapeHtml(t("angle_slots"))}</span><strong>${escapeHtml(t("matrix_samples", { count: formatNumber(matrix.sampleCount), days: formatNumber(matrix.lookbackDays) }))}</strong></div>
    </div>
    <div class="matrix-grid">
      ${slots.slice(0, 5).map((slot) => `
        <article class="matrix-slot ${escapeHtml(slot.status || slot.action || "probe")}" style="--matrix-score:${clamp(number(slot.score), 0, 100).toFixed(1)}%">
          <div class="matrix-window">
            <span>${escapeHtml(slot.windowLabel || "-")} UTC</span>
            <strong>${escapeHtml(slot.label || formatTemplate(slot.formatId))}</strong>
          </div>
          <p>${escapeHtml(slot.angle || slot.reason || "-")}</p>
          <div class="matrix-stats">
            <span>${escapeHtml(t("matrix_score", { score: formatNumber(slot.score, 1) }))}</span>
            <span>${escapeHtml(t("matrix_load", { load: formatNumber(slot.loadScore, 1) }))}</span>
            <span>${escapeHtml(t("matrix_avg", { score: formatNumber(slot.avgScore, 1), samples: formatNumber(slot.samples) }))}</span>
          </div>
        </article>
      `).join("")}
    </div>
    <div class="matrix-directive">
      <span>${escapeHtml(t("matrix_next"))}</span>
      <code>${escapeHtml(matrix.nextAction || "-")}</code>
    </div>
  `;
}

function renderLearning() {
  const { learning, bestHook, bestSource, worstFormat } = learningData();
  $("#learning-confidence").textContent = currentLang === "zh"
    ? learning.confidenceZh || learning.confidence || "-"
    : learning.confidence || "-";
  const experiment = currentLang === "zh"
    ? learning.nextExperimentZh || learning.nextExperiment || "-"
    : learning.nextExperiment || "-";
  const cards = [
    { label: t("best_hook"), value: learningValue(bestHook) },
    { label: t("worst_format"), value: learningValue(worstFormat) },
    { label: t("best_source"), value: learningValue(bestSource) },
    { label: t("next_experiment"), value: experiment, wide: true },
  ];
  $("#learning-grid").innerHTML = cards
    .map(
      (card) => `
        <div class="${card.wide ? "wide" : ""}">
          <span>${escapeHtml(card.label)}</span>
          <strong>${escapeHtml(card.value)}</strong>
        </div>
      `,
    )
    .join("");
  renderLearningAutopilot();
  renderAdaptiveAngleScheduler();
  renderLearningWriteback();
  renderAngleMutationReactor();
  renderAudienceRouter();
  renderTrendVelocityRadar();
  renderTemporalAngleMatrix();
  renderExperimentPlan();
}

function renderExperimentPlan() {
  const plan = dashboardData.experimentPlan || fallbackData.experimentPlan || {};
  const container = $("#experiment-plan");
  if (!container) return;
  const formats = Array.isArray(plan.recommendedFormats) ? plan.recommendedFormats : [];
  if (!formats.length) {
    container.innerHTML = `<p class="empty-state">${escapeHtml(t("experiment_empty"))}</p>`;
    return;
  }
  const hold = Array.isArray(plan.holdFormats) ? plan.holdFormats : [];
  container.innerHTML = `
    <div class="experiment-head">
      <div>
        <span>${escapeHtml(t("experiment_plan"))}</span>
        <strong>${escapeHtml(plan.decision || "-")}</strong>
      </div>
      <em>${escapeHtml(t("experiment_budget", { safe: formatNumber(plan.budgetSafeSlots), total: formatNumber(plan.slots) }))}</em>
    </div>
    <div class="experiment-slots">
      ${formats
        .slice(0, 4)
        .map((item) => `
          <article class="experiment-slot ${escapeHtml(item.action || "test")}">
            <span>${escapeHtml(t("experiment_slot", { slot: item.slot || "-" }))}</span>
            <strong>${escapeHtml(item.label || formatTemplate(item.id))}</strong>
            <small>${escapeHtml(item.action || "test")} · avg ${escapeHtml(formatNumber(item.avgScore, 1))} · n=${escapeHtml(formatNumber(item.samples))}</small>
          </article>
        `)
        .join("")}
    </div>
    ${
      hold.length
        ? `<div class="experiment-hold"><span>${escapeHtml(t("experiment_hold"))}</span><strong>${escapeHtml(hold.map((item) => item.label || formatTemplate(item.id)).join(", "))}</strong></div>`
        : ""
    }
  `;
}

function viralFlywheelData() {
  return dashboardData.viralFlywheel || fallbackData.viralFlywheel || {};
}

function flywheelModeLabel(mode) {
  const key = `flywheel_mode_${String(mode || "").replace(/[^a-z0-9_]/gi, "_")}`;
  const translated = t(key);
  return translated === key ? String(mode || "-").replace(/_/g, " ") : translated;
}

function renderViralFlywheel() {
  const flywheel = viralFlywheelData();
  const mode = flywheel.mode || "queue_build";
  const modeNode = $("#flywheel-mode");
  if (!modeNode) return;
  const velocity = Math.max(0, Math.min(100, number(flywheel.velocityScore)));
  const nextBurst = flywheel.nextBurst || {};
  const routeLabel = nextBurst.routeLabel || nextBurst.label || "-";
  modeNode.textContent = flywheelModeLabel(mode);
  modeNode.className = `pill ${mode === "cooldown_cache_only" ? "pill-danger" : mode === "queue_build" ? "pill-warn" : "pill-good"}`;
  $("#flywheel-velocity").textContent = `${formatNumber(velocity, 1)}%`;
  $("#flywheel-burst").textContent = t("flywheel_burst", {
    replies: formatNumber(number(nextBurst.targetReplies)),
    lift: formatNumber(number(nextBurst.expectedLiftPct), 1),
    route: routeLabel,
  });

  const stages = Array.isArray(flywheel.stages) ? flywheel.stages : [];
  $("#flywheel-stages").innerHTML = stages
    .slice(0, 5)
    .map((stage, index) => `
      <article class="flywheel-stage ${escapeHtml(stage.status || "ok")}">
        <span>${String(index + 1).padStart(2, "0")} / ${escapeHtml(stage.label || stage.id || "-")}</span>
        <strong>${escapeHtml(String(stage.value || "-"))}</strong>
        <small>${escapeHtml(stage.detail || "")}</small>
      </article>
    `)
    .join("");

  const rules = [
    ...(Array.isArray(flywheel.constraints) ? flywheel.constraints.map((item) => `${item.label}: ${item.value}`) : []),
    ...(Array.isArray(flywheel.rules) ? flywheel.rules : []),
  ];
  $("#flywheel-rules").innerHTML = rules
    .slice(0, 5)
    .map((rule) => `<li>${escapeHtml(rule)}</li>`)
    .join("");
}

function renderControlPlane() {
  const control = controlPlaneData();
  const severity = control.severity || "ok";
  const pressure = Math.max(0, Math.min(100, number(control.pressureScore)));
  const modeLabel = controlModeLabel(control.mode);
  const state = $("#control-plane-state");
  if (!state) return;
  state.textContent = modeLabel;
  state.className = `pill ${severity === "ok" ? "pill-good" : severity === "danger" ? "pill-danger" : "pill-warn"}`;
  $("#control-pressure").textContent = `${formatNumber(pressure, 1)}%`;
  $("#control-pressure-bar").style.width = `${pressure}%`;
  $("#control-decision").innerHTML = `<span>${escapeHtml(t("control_decision"))}</span>${escapeHtml(control.decision || "-")}`;

  const gates = [
    { label: t("control_publish_gate"), value: control.publishGate },
    { label: t("control_read_gate"), value: control.readGate },
    { label: t("control_distribution_gate"), value: control.distributionGate },
    { label: t("control_budget_gate"), value: control.budgetGate },
  ];
  $("#control-gates").innerHTML = gates
    .map((gate) => `
      <div class="${escapeHtml(gateStatus(gate.value))}">
        <span>${escapeHtml(gate.label)}</span>
        <strong>${escapeHtml(String(gate.value || "-").replace(/_/g, " "))}</strong>
      </div>
    `)
    .join("");

  const pulses = Array.isArray(control.pulses) ? control.pulses : [];
  $("#control-pulses").innerHTML = pulses
    .slice(0, 5)
    .map((pulse) => `
      <article class="${escapeHtml(pulse.status || gateStatus(pulse.value))}">
        <span>${escapeHtml(pulse.label || pulse.id || "-")}</span>
        <strong>${escapeHtml(String(pulse.value || "-"))}</strong>
        <small>${escapeHtml(pulse.detail || "")}</small>
      </article>
    `)
    .join("");

  const route = control.topRoute || {};
  const format = control.topFormat || {};
  $("#control-route-title").textContent = route.label || "-";
  $("#control-format").textContent = format.label
    ? `${format.label} · ${format.action || "test"} · n=${formatNumber(format.samples)}`
    : "-";
  $("#control-next-action").textContent = control.nextAction || route.reason || "-";
  const safeguards = Array.isArray(control.safeguards) ? control.safeguards : [];
  $("#control-safeguards").innerHTML = safeguards
    .slice(0, 4)
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
  renderViralFlywheel();
}

function signalSourceRows() {
  const sources = dashboardData.performance?.sources || fallbackData.performance?.sources || [];
  if (sources.length) return sources;

  const bySource = new Map();
  (dashboardData.last7d?.topPosts || fallbackData.last7d.topPosts || []).forEach((post) => {
    const source = post.source || "unknown";
    const current = bySource.get(source) || { name: source, totalScore: 0, samples: 0 };
    current.totalScore += number(post.score);
    current.samples += 1;
    bySource.set(source, current);
  });
  return [...bySource.values()]
    .map((source) => ({
      name: source.name,
      avgScore: source.samples ? source.totalScore / source.samples : 0,
      samples: source.samples,
    }))
    .sort((a, b) => number(b.avgScore) - number(a.avgScore));
}

function detailRow({ title, meta, body, href, action }) {
  const titleHtml = href
    ? `<a href="${escapeHtml(href)}" target="_blank" rel="noreferrer">${escapeHtml(title)}</a>`
    : `<strong>${escapeHtml(title)}</strong>`;
  return `
    <div class="signal-detail-row">
      <div>
        ${titleHtml}
        ${meta ? `<span>${escapeHtml(meta)}</span>` : ""}
      </div>
      ${body ? `<p>${escapeHtml(body)}</p>` : ""}
      ${action || ""}
    </div>
  `;
}

function detailStat(label, value) {
  return `
    <div>
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
    </div>
  `;
}

function signalNodeSnapshot(nodeId) {
  const model = signalMap();
  const node = model.nodes.find((item) => item.id === nodeId);
  if (!node) return "";
  const linkedRoutes = (model.routes || []).filter((route) => route.from === nodeId || route.to === nodeId);
  const strongestRoute = [...linkedRoutes].sort((left, right) => number(right.value) - number(left.value))[0];
  return `
    <div class="signal-detail-grid signal-node-snapshot">
      ${detailStat(t("signal_node_value"), formatSignalNodeValue(node))}
      ${detailStat(t("signal_node_routes"), formatNumber(linkedRoutes.length))}
      ${detailStat(t("signal_node_health"), node.health || "ok")}
      ${detailStat(t("signal_node_source"), model.source || "dashboard")}
    </div>
    <p class="signal-detail-summary signal-node-note">
      ${escapeHtml(signalNodeDetail(node, strongestRoute?.label || model.core?.detail || ""))}
    </p>
  `;
}

function detailSection(title, body) {
  return `
    <section class="signal-detail-section">
      <h4>${escapeHtml(title)}</h4>
      ${body || `<p class="signal-detail-empty">${escapeHtml(t("signal_empty"))}</p>`}
    </section>
  `;
}

function sourceMeta(source) {
  const score = Number.isFinite(Number(source.avgScore)) ? number(source.avgScore).toFixed(1) : "-";
  return `${t("score")} ${score} · n=${number(source.samples)}`;
}

function signalDetailConfig(nodeId) {
  const profile = dashboardData.profile || {};
  const last24h = dashboardData.last24h || {};
  const last7d = dashboardData.last7d || {};
  const drafts = dashboardData.drafts || fallbackData.drafts || [];
  const actions = dashboardData.actions || fallbackData.actions || [];
  const posts = last7d.topPosts || fallbackData.last7d.topPosts || [];
  const { remaining } = apiBudget();
  const best = bestPost();
  const sources = signalSourceRows();
  const { learning, bestHook, bestSource, worstFormat } = learningData();
  const experiment = currentLang === "zh"
    ? learning.nextExperimentZh || learning.nextExperiment || "-"
    : learning.nextExperiment || "-";
  const topScores = posts.map((post) => number(post.score));
  const bestScore = Math.max(number(profile.baselineScore), ...topScores, 0);

  if (nodeId === "draft") {
    return {
      kicker: signalNodeLabel(signalNodeById("draft")),
      title: t("signal_draft_title"),
      summary: t("signal_draft_summary"),
      body: detailSection(
        t("signal_drafts"),
        drafts
          .slice(0, 3)
          .map((draft, index) => {
            const localized = localizeDraftMeta(draft);
            const action = `<button class="signal-mini-copy" type="button" data-copy="${encodeURIComponent(draft.text || "")}">${t("copy")}</button>`;
            return detailRow({
              title: `${String(index + 1).padStart(2, "0")} / ${localized.title}`,
              meta: localized.angle,
              body: localized.text,
              action,
            });
          })
          .join(""),
      ),
    };
  }

  if (nodeId === "score") {
    return {
      kicker: signalNodeLabel(signalNodeById("score")),
      title: t("signal_score_title"),
      summary: t("signal_score_summary"),
      body: `
        <div class="signal-detail-grid">
          ${detailStat(t("hero_signal_label"), bestScore ? bestScore.toFixed(1) : "-")}
          ${detailStat(t("metric_24h_impressions"), formatNumber(last24h.impressions))}
          ${detailStat(t("metric_7d_signal"), formatNumber(last7d.impressions))}
          ${detailStat(t("proof_format"), formatTemplate(best.template))}
        </div>
        ${detailSection(
          t("signal_latest_posts"),
          posts
            .slice(0, 2)
            .map((post) =>
              detailRow({
                title: post.source || post.template || t("tweet"),
                meta: `${t("score")} ${number(post.score).toFixed(1)} · ${formatNumber(post.impressions)} ${t("impr")}`,
                body: post.text,
                href: post.url,
              }),
            )
            .join(""),
        )}
      `,
    };
  }

  if (nodeId === "x") {
    return {
      kicker: signalNodeLabel(signalNodeById("x")),
      title: t("signal_x_title"),
      summary: t("signal_x_summary"),
      body: detailSection(
        t("signal_actions"),
        actions
          .slice(0, 3)
          .map((action, index) => {
            const localized = localizeAction(action);
            const draft = draftFor(action.draftIndex ?? index);
            return detailRow({
              title: `${String(action.step || index + 1).padStart(2, "0")} / ${localized.label}`,
              meta: `${t("zero_api_action")} · ${t("open_search")}`,
              body: `${localized.reason} ${draft.text}`,
              href: action.url,
            });
          })
          .join(""),
      ),
    };
  }

  if (nodeId === "learn") {
    return {
      kicker: signalNodeLabel(signalNodeById("learn")),
      title: t("signal_learn_title"),
      summary: t("signal_learn_summary"),
      body: `
        <div class="signal-detail-grid">
          ${detailStat(t("best_hook"), learningValue(bestHook))}
          ${detailStat(t("worst_format"), learningValue(worstFormat))}
          ${detailStat(t("best_source"), learningValue(bestSource))}
          ${detailStat(t("api_left"), `$${remaining.toFixed(2)}`)}
        </div>
        ${detailSection(t("signal_learning"), detailRow({ title: t("next_experiment"), body: experiment }))}
      `,
    };
  }

  return {
    kicker: "RSS",
    title: t("signal_rss_title"),
    summary: t("signal_rss_summary"),
    body: `
      ${detailSection(
        t("signal_sources"),
        sources
          .slice(0, 4)
          .map((source) =>
            detailRow({
              title: source.name,
              meta: sourceMeta(source),
              body: currentLang === "zh"
                ? "该来源近期进入了高分内容池，值得继续抓取和观察。"
                : "This source has recently entered the high-scoring pool and should stay in rotation.",
            }),
          )
          .join(""),
      )}
      ${detailSection(
        t("signal_latest_posts"),
        posts
          .slice(0, 2)
          .map((post) =>
            detailRow({
              title: post.source || post.template || t("tweet"),
              meta: `${t("score")} ${number(post.score).toFixed(1)} · ${formatDate(post.postedAt)}`,
              body: post.text,
              href: post.url,
            }),
          )
          .join(""),
      )}
    `,
  };
}

function renderSignalDetail() {
  const panel = $("#signal-detail-panel");
  if (!panel) return;
  const config = signalDetailConfig(activeSignalNode);
  panel.classList.toggle("hidden", !signalDetailOpen);
  $("#signal-detail-kicker").textContent = config.kicker;
  $("#signal-detail-title").textContent = config.title;
  $("#signal-detail-body").innerHTML = `
    <p class="signal-detail-summary">${escapeHtml(config.summary)}</p>
    ${signalNodeSnapshot(activeSignalNode)}
    ${config.body || `<p class="signal-detail-empty">${escapeHtml(t("signal_empty"))}</p>`}
  `;
  document.querySelectorAll("[data-signal-node]").forEach((button) => {
    const active = button.dataset.signalNode === activeSignalNode && signalDetailOpen;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
    button.setAttribute("aria-expanded", String(active));
    if (button.classList.contains("signal-detail-tab")) {
      button.textContent = signalNodeLabel(signalNodeById(button.dataset.signalNode));
    }
  });
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
  const openai = dashboardData.openai;
  const synthetic = [
    { name: t("svc_news_ingest"), calls: number(dashboardData.last24h?.posts), failures: 0, usd: 0, lastStatus: 200 },
    { name: t("svc_draft_queue"), calls: (dashboardData.drafts || []).length, failures: 0, usd: 0, lastStatus: 200 },
    openai
      ? {
          name: "OpenAI",
          calls: (openai.purposes || []).reduce((sum, item) => sum + number(item.calls), 0),
          failures: (openai.purposes || []).reduce((sum, item) => sum + number(item.failures), 0),
          usd: number(openai.spend),
          lastStatus: (openai.purposes || []).find((item) => item.lastStatus)?.lastStatus || 200,
        }
      : null,
  ].filter(Boolean);
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

function inferenceStreamData() {
  const openai = dashboardData.openai || {};
  const purposes = Array.isArray(openai.purposes) ? openai.purposes : [];
  const models = Array.isArray(openai.models) ? openai.models : [];
  const drafts = dashboardData.drafts || fallbackData.drafts || [];
  const calls = purposes.reduce((sum, item) => sum + number(item.calls), 0);
  const failures = purposes.reduce((sum, item) => sum + number(item.failures), 0);
  const tokens = purposes.reduce((sum, item) => sum + number(item.totalTokens), 0);
  const spend = number(openai.spend);
  if (calls > 0 || tokens > 0 || spend > 0 || models.length) {
    return {
      mode: "live",
      calls,
      failures,
      tokens,
      spend,
      updatedAt: openai.updatedAt || dashboardData.updatedAt,
      models,
      purposes,
      status: failures > 0 ? "warn" : "ok",
    };
  }

  const estimatedTokens = drafts.reduce((sum, draft) => {
    const text = `${draft.title || ""} ${draft.angle || ""} ${draft.text || ""}`;
    return sum + Math.max(24, Math.ceil(text.length / 3.8));
  }, 0);
  return {
    mode: "cached",
    calls: drafts.length,
    failures: 0,
    tokens: estimatedTokens,
    spend: 0,
    updatedAt: dashboardData.updatedAt,
    models: [
      {
        name: t("inference_model_fallback"),
        calls: drafts.length,
        totalTokens: estimatedTokens,
        usd: 0,
      },
    ],
    purposes: [
      {
        name: t("inference_purpose_fallback"),
        calls: drafts.length,
        failures: 0,
        totalTokens: estimatedTokens,
        usd: 0,
        lastStatus: 200,
      },
    ],
    status: drafts.length ? "ok" : "warn",
  };
}

function renderInferenceStream() {
  const root = $("#inference-stream-body");
  if (!root) return;
  const stream = inferenceStreamData();
  $("#inference-mode").textContent = stream.mode === "live" ? t("inference_live") : t("inference_cached");
  $("#inference-mode").className = `pill ${stream.status === "ok" ? "pill-good" : "pill-neutral"}`;
  const primaryModel = stream.models[0] || {};
  const primaryPurpose = stream.purposes[0] || {};
  const lanes = [
    { label: t("inference_calls"), value: formatNumber(stream.calls), tone: "cyan" },
    { label: t("inference_tokens"), value: formatNumber(stream.tokens), tone: "green" },
    { label: t("inference_cost"), value: money(stream.spend), tone: "magenta" },
    { label: t("inference_failures"), value: formatNumber(stream.failures), tone: stream.failures ? "magenta" : "green" },
  ];
  root.innerHTML = `
    <div class="inference-headline ${escapeHtml(stream.status)}">
      <span class="triage-led ${escapeHtml(stream.status)}"></span>
      <div>
        <strong>${escapeHtml(stream.status === "ok" ? t("inference_status_ok") : t("inference_status_watch"))}</strong>
        <p>${escapeHtml(stream.mode === "live" ? `${primaryModel.name || "model"} · ${formatDate(stream.updatedAt)}` : t("inference_no_calls"))}</p>
      </div>
    </div>
    <div class="inference-lanes">
      ${lanes.map((lane) => `
        <span class="${escapeHtml(lane.tone)}">
          <em>${escapeHtml(lane.label)}</em>
          <strong>${escapeHtml(lane.value)}</strong>
        </span>
      `).join("")}
    </div>
    <div class="inference-model-row">
      <span>${escapeHtml(primaryModel.name || t("inference_model_fallback"))}</span>
      <strong>${escapeHtml(t("inference_model_calls", { count: formatNumber(primaryModel.calls || stream.calls) }))}</strong>
      <em>${money(primaryModel.usd || 0)}</em>
    </div>
    <div class="inference-purpose-row">
      <span>${escapeHtml(primaryPurpose.name || t("inference_purpose_fallback"))}</span>
      <strong>HTTP ${escapeHtml(String(primaryPurpose.lastStatus || 200))}</strong>
      <em>${escapeHtml(t("inference_token_short", { count: formatNumber(primaryPurpose.totalTokens || stream.tokens) }))}</em>
    </div>
  `;
}

function trendSeries() {
  return impressionSeries(dashboardData.last7d || fallbackData.last7d || {}, "impressions7d");
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

function bestPost() {
  const posts = dashboardData.last7d?.topPosts || fallbackData.last7d.topPosts || [];
  return [...posts].sort((a, b) => number(b.score) - number(a.score))[0] || fallbackData.last7d.topPosts[0];
}

function formatTemplate(template) {
  return String(template || "-").replace(/_/g, " ");
}

function proofReason(post) {
  const template = String(post.template || "").toLowerCase();
  if (currentLang === "zh") {
    if (template.includes("decision")) return "它把新闻变成了明确决策规则，读者能立刻判断自己是否该行动。";
    if (template.includes("question")) return "它不是复述新闻，而是提出尖锐问题，更容易引发同意、反驳和转发。";
    if (template.includes("pain")) return "它点出了真实使用成本，把产品新闻翻译成团队会关心的问题。";
    return "它具体、有立场，并且不是标题复述，因此更像一个值得回复的观点。";
  }
  if (template.includes("decision")) return "It turns a news item into a concrete decision rule, so readers can immediately judge whether to act.";
  if (template.includes("question")) return "It does not recap the headline. It asks a sharp question that invites agreement, pushback, and reposts.";
  if (template.includes("pain")) return "It translates product news into an operator pain point, which makes the take useful beyond the launch itself.";
  return "It is specific, takes a clear position, and avoids headline recap, making it easier to reply to and share.";
}

function normalizeTraceCandidate(candidate, index, selectedText = "") {
  const text = candidate?.text || "";
  return {
    rank: number(candidate?.rank, index + 1),
    selected: Boolean(candidate?.selected || (selectedText && text === selectedText)),
    templateId: candidate?.templateId || candidate?.template || "-",
    score: number(candidate?.score),
    angleMutationScore: number(candidate?.angleMutationScore),
    reason: candidate?.reason || "",
    diagnostics: Array.isArray(candidate?.diagnostics) ? candidate.diagnostics : [],
    angleMutationDiagnostics: Array.isArray(candidate?.angleMutationDiagnostics) ? candidate.angleMutationDiagnostics : [],
    qualityIssues: Array.isArray(candidate?.qualityIssues) ? candidate.qualityIssues : [],
    aiQualityVerdict: candidate?.aiQualityVerdict || null,
    characterCount: number(candidate?.characterCount, String(text).length),
    text,
  };
}

function derivedGenerationDecisionTrace() {
  const post = bestPost();
  if (!post?.text) return null;
  const reactor = angleMutationReactorData();
  const score = number(post.candidateScore, number(post.score));
  const mutationScore = number(post.angleMutationScore, number(reactor.mutationScore));
  const diagnostics = [
    post.source ? `source:${post.source}` : null,
    post.impressions != null ? `l7:${formatNumber(post.impressions)}` : null,
    post.likes != null ? `acks:${formatNumber(post.likes)}` : null,
    post.replies != null ? `thread_acks:${formatNumber(post.replies)}` : null,
  ].filter(Boolean);
  const selectedCandidate = {
    rank: 1,
    selected: true,
    templateId: post.template || "decision_rule",
    score,
    angleMutationScore: mutationScore,
    reason: post.candidateReason || proofReason(post),
    diagnostics,
    angleMutationDiagnostics: post.angleMutationDiagnostics || [`bias:${reactor.primaryMutation?.after || post.template || "decision_rule"}`],
    qualityIssues: [],
    characterCount: String(post.text || "").length,
    text: post.text || "",
  };
  return {
    generatedAt: dashboardData.updatedAt || fallbackData.updatedAt,
    mode: "derived_candidate_ranker_trace",
    derived: true,
    zeroExtraXReads: true,
    estimatedXReadOps: 0,
    selectedRank: 1,
    selectedTemplateId: selectedCandidate.templateId,
    selectedScore: score,
    selectedReason: selectedCandidate.reason,
    candidateCount: 1,
    angleMutation: {
      severity: reactor.severity || "warn",
      mutationScore,
      nextPromptBias: reactor.nextPromptBias || "-",
      zeroExtraXReads: true,
      estimatedXReadOps: 0,
    },
    selectedCandidate,
    candidates: [selectedCandidate],
    gates: {
      qualityGateEnabled: true,
      aiQualityGateEnabled: false,
      strictQualityGate: false,
    },
  };
}

function generationDecisionTraceData() {
  const incoming = dashboardData.generationDecisionTrace || fallbackData.generationDecisionTrace;
  if (incoming?.candidates?.length || incoming?.selectedCandidate?.text) return incoming;
  return derivedGenerationDecisionTrace();
}

function traceGateCell(labelKey, enabled, value = null) {
  const online = Boolean(enabled);
  return `
    <span class="${online ? "ok" : "muted"}">
      <em>${escapeHtml(t(labelKey))}</em>
      <strong>${escapeHtml(value ?? t(online ? "decision_trace_online" : "decision_trace_offline"))}</strong>
    </span>
  `;
}

function candidateDiagnosticText(candidate) {
  const verdict = candidate.aiQualityVerdict
    ? [`ai:${candidate.aiQualityVerdict.allow ? "allow" : "hold"}`, candidate.aiQualityVerdict.risk || null, candidate.aiQualityVerdict.reason || null]
    : [];
  return [
    ...candidate.diagnostics,
    ...candidate.angleMutationDiagnostics,
    ...candidate.qualityIssues.map((issue) => `gate:${issue}`),
    ...verdict,
  ].filter(Boolean).slice(0, 9).join(" · ") || "-";
}

function renderGenerationDecisionTrace() {
  const container = $("#generation-decision-trace");
  if (!container) return;
  const trace = generationDecisionTraceData();
  const candidates = (trace?.candidates || [])
    .map((candidate, index) => normalizeTraceCandidate(candidate, index, trace?.selectedCandidate?.text || ""))
    .filter((candidate) => candidate.text || candidate.templateId);
  const selected = normalizeTraceCandidate(
    trace?.selectedCandidate || candidates.find((candidate) => candidate.selected) || candidates[0],
    Math.max(0, number(trace?.selectedRank, 1) - 1),
  );
  if (!trace || !candidates.length) {
    container.innerHTML = `<p class="empty-state">${escapeHtml(t("decision_trace_empty"))}</p>`;
    return;
  }

  const maxScore = Math.max(1, ...candidates.map((candidate) => number(candidate.score)));
  const total = number(trace.candidateCount, candidates.length);
  const mutation = trace.angleMutation || {};
  const selectedPacket = [
    `${t("decision_trace_rank", { rank: formatNumber(trace.selectedRank || selected.rank), total: formatNumber(total) })}`,
    `${t("decision_trace_score", { score: formatNumber(trace.selectedScore ?? selected.score, 1) })}`,
    `${t("decision_trace_format")}: ${formatTemplate(trace.selectedTemplateId || selected.templateId)}`,
    t("decision_trace_chars", { count: formatNumber(selected.characterCount) }),
  ].join(" · ");
  const gateCells = [
    traceGateCell("decision_trace_quality_gate", trace.gates?.qualityGateEnabled),
    traceGateCell("decision_trace_ai_gate", trace.gates?.aiQualityGateEnabled),
    traceGateCell("decision_trace_strict_gate", trace.gates?.strictQualityGate),
    traceGateCell("decision_trace_x_reads", true, formatNumber(trace.estimatedXReadOps || 0)),
  ].join("");

  container.innerHTML = `
    <div class="trace-head">
      <div>
        <span class="eyebrow">${escapeHtml(t("decision_trace_eyebrow"))}</span>
        <strong>${escapeHtml(t("decision_trace_title"))}</strong>
      </div>
      <em>${escapeHtml(trace.derived ? t("decision_trace_derived") : t("decision_trace_real"))} · ${escapeHtml(t("decision_trace_zero_reads"))}</em>
    </div>
    <div class="trace-grid">
      <article class="trace-selected">
        <div class="trace-section-title">
          <span>${escapeHtml(t("decision_trace_selected_packet"))}</span>
          <strong>${escapeHtml(selectedPacket)}</strong>
        </div>
        <blockquote>${escapeHtml(selected.text || "-")}</blockquote>
        <dl>
          <div><dt>${escapeHtml(t("decision_trace_reason"))}</dt><dd>${escapeHtml(trace.selectedReason || selected.reason || "-")}</dd></div>
          <div><dt>${escapeHtml(t("decision_trace_diagnostics"))}</dt><dd>${escapeHtml(candidateDiagnosticText(selected))}</dd></div>
        </dl>
        <button class="trace-copy" type="button" data-copy="${encodeURIComponent(selected.text || "")}">${escapeHtml(t("decision_trace_copy"))}</button>
      </article>
      <aside class="trace-side">
        <div class="trace-mutation">
          <span>${escapeHtml(t("decision_trace_mutation_bus"))}</span>
          <strong>${escapeHtml(`${formatNumber(mutation.mutationScore || selected.angleMutationScore, 1)} · ${mutation.severity || "-"}`)}</strong>
          <code>${escapeHtml(mutation.nextPromptBias || "-")}</code>
        </div>
        <div class="trace-gates">
          <span>${escapeHtml(t("decision_trace_gate_state"))}</span>
          <div>${gateCells}</div>
        </div>
      </aside>
    </div>
    <div class="trace-section-title pool">
      <span>${escapeHtml(t("decision_trace_candidate_pool"))}</span>
      <strong>${escapeHtml(`${formatNumber(candidates.length)}/${formatNumber(total)}`)}</strong>
    </div>
    <div class="trace-candidates">
      ${candidates.map((candidate) => {
        const pct = clamp((number(candidate.score) / maxScore) * 100, 4, 100);
        return `
          <article class="${candidate.selected ? "selected" : ""}" style="--trace-score:${pct.toFixed(1)}%">
            <div class="trace-candidate-rank">
              <span>${String(candidate.rank).padStart(2, "0")}</span>
              ${candidate.selected ? `<em>${escapeHtml(t("decision_trace_selected"))}</em>` : ""}
            </div>
            <div class="trace-candidate-body">
              <div>
                <strong>${escapeHtml(formatTemplate(candidate.templateId))}</strong>
                <small>${escapeHtml(t("decision_trace_score", { score: formatNumber(candidate.score, 1) }))} · mutation ${escapeHtml(formatNumber(candidate.angleMutationScore, 1))}</small>
              </div>
              <p>${escapeHtml(candidate.reason || candidateDiagnosticText(candidate))}</p>
              <i></i>
            </div>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function renderProof() {
  const post = bestPost();
  const score = number(post.score);
  $("#proof-score-pill").textContent = t("score_label", { score: score.toFixed(1) });
  $("#proof-tweet").textContent = post.text || "-";
  $("#proof-reason").textContent = proofReason(post);
  const openLink = $("#proof-open");
  openLink.href = post.url || "https://x.com/Linus_Shyu";
  $("#proof-metrics").innerHTML = [
    { label: t("proof_impressions"), value: number(post.impressions) },
    { label: t("proof_likes"), value: number(post.likes) },
    { label: t("proof_replies"), value: number(post.replies) },
    { label: t("proof_format"), value: formatTemplate(post.template) },
  ]
    .map(
      (item) => `
        <div>
          <span>${escapeHtml(item.label)}</span>
          <strong>${escapeHtml(item.value)}</strong>
        </div>
      `,
    )
    .join("");

  const loopSteps = [
    { label: t("loop_scan"), detail: t("loop_scan_detail") },
    { label: t("loop_write"), detail: t("loop_write_detail") },
    { label: t("loop_route"), detail: t("loop_route_detail") },
    { label: t("loop_learn"), detail: t("loop_learn_detail") },
  ];
  $("#loop-steps").innerHTML = loopSteps
    .map(
      (step, index) => `
        <div class="loop-step">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <div>
            <strong>${escapeHtml(step.label)}</strong>
            <p>${escapeHtml(step.detail)}</p>
          </div>
        </div>
      `,
    )
    .join("");
}

function renderActions() {
  const ops = distributionOpsData();
  const missions = Array.isArray(ops.missions) ? ops.missions : [];
  if (!missions.length) {
    $("#action-board").innerHTML = `<p class="empty-state">${escapeHtml(t("dispatch_empty"))}</p>`;
    return;
  }
  const primary = missions[0];
  const localizedPrimary = localizeAction({ label: primary.routeLabel || primary.label, reason: primary.routeReason });
  const primaryDraft = primary.draftText || draftFor(0).text || "";
  const primaryProtocol = missionOperatorProtocol(primary, ops, 0);
  const protocolSteps = Array.isArray(primaryProtocol.steps) ? primaryProtocol.steps : [];
  const stopConditions = Array.isArray(primaryProtocol.stopConditions) ? primaryProtocol.stopConditions : [];
  const primaryCostLabel = primary.costEfficiency?.label || t("dispatch_zero_reads");
  const protocolKey = operatorStateKey(primary);
  const protocolDone = new Set(readOperatorStateByKey(protocolKey).done);
  const visibleProtocolSteps = protocolSteps
    .slice(0, 4)
    .map((step, index) => ({ step, index, id: operatorStepId(step, index) }));
  const doneCount = visibleProtocolSteps.filter(({ id }) => protocolDone.has(id)).length;
  const totalCount = visibleProtocolSteps.length || 1;
  const protocolProgress = t("operator_progress", { done: formatNumber(doneCount), total: formatNumber(totalCount) });
  const operatorTelemetry = operatorTelemetryData(missions, ops);
  const operatorSlo = operatorSloData(ops);
  const sloStatus = ["ok", "warn", "danger"].includes(operatorSlo.status) ? operatorSlo.status : "ok";
  const sloStatusLabel = t(`operator_slo_status_${sloStatus}`);
  const sloCards = (operatorSlo.sloCards || [])
    .slice(0, 4)
    .map((card) => `
      <div class="slo-card ${escapeHtml(card.status || "ok")}">
        <span>${escapeHtml(sreLabel(card.label || card.id || "-"))}</span>
        <strong>${escapeHtml(sreText(card.value || "-"))}</strong>
        <em>${escapeHtml(sreText(card.detail || ""))}</em>
      </div>
    `)
    .join("");
  const maxLaneScore = Math.max(1, ...(operatorSlo.lanes || []).map((lane) => number(lane.score, 0)));
  const sloLanes = (operatorSlo.lanes || [])
    .slice(0, 4)
    .map((lane, index) => {
      const laneStatus = ["ok", "warn", "danger"].includes(lane.status) ? lane.status : "ok";
      const liftPct = Math.min(100, Math.max(8, number(lane.expectedLiftPct, 0)));
      const scorePct = Math.min(100, Math.max(8, (number(lane.score, 0) / maxLaneScore) * 100));
      return `
        <div class="slo-lane ${escapeHtml(laneStatus)}" style="--slo-lift:${liftPct}%;--slo-score:${scorePct}%">
          <div>
            <span>${String(lane.priority || index + 1).padStart(2, "0")}</span>
            <strong>${escapeHtml(lane.routeLabel || lane.label || "-")}</strong>
            <em>${escapeHtml(lane.confidence || "low")} · ${escapeHtml(lane.efficiencyLabel || t("operator_slo_zero_reads"))}</em>
          </div>
          <div class="slo-lane-bars">
            <i></i>
            <b></b>
          </div>
          <dl>
            <div><dt>${escapeHtml(t("operator_slo_target"))}</dt><dd>${escapeHtml(formatNumber(lane.targetReplies || 1))}</dd></div>
            <div><dt>${escapeHtml(t("operator_slo_latency"))}</dt><dd>${escapeHtml(`${formatNumber(lane.operatorSlaMinutes || 0)}m`)}</dd></div>
            <div><dt>${escapeHtml(t("operator_slo_lift"))}</dt><dd>${escapeHtml(`+${formatNumber(lane.expectedLiftPct || 0, 1)}%`)}</dd></div>
          </dl>
        </div>
      `;
    })
    .join("");
  const sloRules = (operatorSlo.rules || []).slice(0, 3).map((rule) => `<li>${escapeHtml(rule)}</li>`).join("");
  const protocolCopy = [
    primaryProtocol.objective || null,
    ...protocolSteps.map((step, index) => `${index + 1}. ${step.label || step.id}: ${step.detail || ""}`),
    stopConditions.length ? "" : null,
    stopConditions.length ? `${t("operator_stop")}:` : null,
    ...stopConditions.map((item) => `- ${item}`),
    primaryProtocol.writeback ? "" : null,
    primaryProtocol.writeback ? `${t("operator_writeback")}: ${primaryProtocol.writeback}` : null,
  ].filter((line) => line != null).join("\n");
  const primaryPacket = [
    `${t("operator_packet_route")}: ${localizedPrimary.label || primary.label || "-"}`,
    `${t("operator_packet_sla")}: ${t("dispatch_sla", { minutes: formatNumber(primary.operatorSlaMinutes || 10) })}`,
    `${t("operator_packet_replies")}: ${t("dispatch_replies", { count: formatNumber(primary.targetReplies || 1) })}`,
    `${t("operator_packet_lift")}: ${t("dispatch_expected", { lift: formatNumber(primary.expectedLiftPct || 0, 1) })}`,
    `${t("operator_packet_budget")}: ${primaryCostLabel}`,
    primary.evidence ? `Evidence: ${primary.evidence}` : null,
    protocolCopy ? "" : null,
    protocolCopy,
    "",
    primaryDraft,
  ].filter((line) => line != null).join("\n");
  const metricCards = (ops.opsMetrics || [])
    .slice(0, 4)
    .map((metric) => `
      <div class="dispatch-metric ${escapeHtml(metric.status || "ok")}">
        <span>${escapeHtml(sreLabel(metric.label || metric.id || "-"))}</span>
        <strong>${escapeHtml(sreText(metric.value || "-"))}</strong>
      </div>
    `)
    .join("");
  const dispatchPacket = operatorDispatchPacketData(ops);
  const routeAmplifier = routeAmplifierData(dispatchPacket, ops);
  const manifestStatus = ["ok", "warn", "danger"].includes(dispatchPacket.severity) ? dispatchPacket.severity : "ok";
  const manifestPackets = (dispatchPacket.packets || [])
    .slice(0, 5)
    .map((packet) => {
      const ready = packet.ready ? "ok" : "warn";
      return `
        <article class="manifest-packet ${escapeHtml(ready)}">
          <div>
            <span>${String(packet.priority || 1).padStart(2, "0")}</span>
            <strong>${escapeHtml(packet.routeLabel || packet.label || "-")}</strong>
            <em>${escapeHtml(packet.confidence || "low")} · ${escapeHtml(formatNumber(packet.operatorSlaMinutes || 0))}m SLA</em>
          </div>
          <p>${escapeHtml(packet.reason || packet.evidence || packet.draftAngle || "-")}</p>
          <blockquote>${escapeHtml(packet.draftText || "-")}</blockquote>
          <div class="manifest-packet-actions">
            ${packet.routeUrl ? `<a class="button button-primary" href="${escapeHtml(packet.routeUrl)}" target="_blank" rel="noreferrer">${escapeHtml(t("open_search"))}</a>` : ""}
            <button class="button button-secondary" type="button" data-copy="${encodeURIComponent(packet.draftText || "")}">${escapeHtml(t("copy_draft"))}</button>
          </div>
        </article>
      `;
    })
    .join("");
  const manifestChecks = (dispatchPacket.checks || [])
    .slice(0, 4)
    .map((check) => `
      <div class="manifest-check ${escapeHtml(check.status || "ok")}">
        <span>${escapeHtml(sreLabel(check.label || check.id || "-"))}</span>
        <strong>${escapeHtml(sreText(check.value || "-"))}</strong>
        <em>${escapeHtml(sreText(check.detail || ""))}</em>
      </div>
    `)
    .join("");
  const amplifierCells = (routeAmplifier.cells || [])
    .slice(0, 4)
    .map((cell) => `
      <div class="amp-cell ${escapeHtml(cell.status || "ok")}">
        <span>${escapeHtml(sreLabel(cell.label || cell.id || "-"))}</span>
        <strong>${escapeHtml(sreText(cell.value || "-"))}</strong>
      </div>
    `)
    .join("");
  const amplifierMax = Math.max(1, ...(routeAmplifier.lanes || []).map((lane) => number(lane.score, 0)));
  const amplifierLanes = (routeAmplifier.lanes || [])
    .slice(0, 5)
    .map((lane) => {
      const pct = Math.max(8, Math.min(100, (number(lane.score, 0) / amplifierMax) * 100));
      return `
        <div class="amp-lane ${escapeHtml(lane.status || "ok")}" style="--amp-score:${pct}%">
          <div>
            <span>${String(lane.rank || 1).padStart(2, "0")}</span>
            <strong>${escapeHtml(lane.label || "-")}</strong>
            <em>${escapeHtml(lane.confidence || "low")} · ${escapeHtml(formatNumber(lane.operatorSlaMinutes || 0))}m SLA · ${escapeHtml(t("route_amp_zero_reads"))}</em>
          </div>
          <div class="amp-bar"><i></i></div>
          <dl>
            <div><dt>${escapeHtml(t("route_amp_score"))}</dt><dd>${escapeHtml(formatNumber(lane.score || 0, 1))}</dd></div>
            <div><dt>${escapeHtml(t("operator_slo_target"))}</dt><dd>${escapeHtml(formatNumber(lane.targetReplies || 0))}</dd></div>
            <div><dt>${escapeHtml(t("operator_slo_lift"))}</dt><dd>${escapeHtml(`+${formatNumber(lane.expectedLiftPct || 0, 1)}%`)}</dd></div>
          </dl>
          <p>${escapeHtml(lane.action || lane.reason || "-")}</p>
        </div>
      `;
    })
    .join("");
  const missionCards = missions
    .slice(0, 3)
    .map((mission, index) => {
      const localizedRoute = localizeAction({ label: mission.routeLabel || mission.label, reason: mission.routeReason });
      const draftText = mission.draftText || draftFor(index).text || "";
      return `
        <article class="action-card mission-card ${escapeHtml(mission.kind || "route")}">
          <div class="action-top">
            <span class="step">${String(mission.priority || index + 1).padStart(2, "0")}</span>
            <div>
              <h3>${escapeHtml(mission.label || localizedRoute.label)}</h3>
              <p>${escapeHtml(localizedRoute.reason || mission.evidence || "-")}</p>
            </div>
          </div>
          <div class="mission-meta">
            <span>${escapeHtml(t("dispatch_sla", { minutes: formatNumber(mission.operatorSlaMinutes || 10) }))}</span>
            <span>${escapeHtml(t("dispatch_replies", { count: formatNumber(mission.targetReplies || 1) }))}</span>
            <span>${escapeHtml(t("dispatch_expected", { lift: formatNumber(mission.expectedLiftPct || 0, 1) }))}</span>
          </div>
          <div class="draft-preview">${escapeHtml(draftText)}</div>
          <div class="queue-state"><span></span><strong>${t("queued_for_operator")} · ${t("dispatch_zero_reads")}</strong></div>
          <div class="row-actions">
            ${mission.routeUrl ? `<a class="button button-primary" href="${escapeHtml(mission.routeUrl)}" target="_blank" rel="noreferrer">${t("open_search")}</a>` : ""}
            <button class="button button-secondary" type="button" data-copy="${encodeURIComponent(draftText)}">${t("copy_draft")}</button>
          </div>
        </article>
      `;
    })
    .join("");

  $("#action-board").innerHTML = `
    <div class="dispatch-strip">
      <div>
        <span class="eyebrow">${escapeHtml(t("dispatch_eyebrow"))}</span>
        <strong>${escapeHtml(t("dispatch_state", { ready: formatNumber(ops.readyMissions || missions.length), total: formatNumber(ops.missionCount || missions.length) }))}</strong>
      </div>
      ${metricCards}
    </div>
    <article class="dispatch-manifest ${escapeHtml(manifestStatus)}">
      <div class="manifest-head">
        <div>
          <span class="eyebrow">${escapeHtml(t("dispatch_manifest_eyebrow"))}</span>
          <strong>${escapeHtml(t("dispatch_manifest_title"))}</strong>
        </div>
        <em>${escapeHtml(dispatchPacket.mode || "manual_zero_read_dispatch")}</em>
      </div>
      <div class="manifest-matrix">
        <div><span>${escapeHtml(t("dispatch_manifest_ready"))}</span><strong>${escapeHtml(`${formatNumber(dispatchPacket.readyPackets || 0)}/${formatNumber(dispatchPacket.totalPackets || 0)}`)}</strong></div>
        <div><span>${escapeHtml(t("dispatch_manifest_x_reads"))}</span><strong>${escapeHtml(formatNumber(dispatchPacket.estimatedXReadOps || 0))}</strong></div>
        <div><span>${escapeHtml(t("dispatch_manifest_cost"))}</span><strong>${escapeHtml(money(dispatchPacket.estimatedIncrementalXApiUsd || 0))}</strong></div>
        <div><span>${escapeHtml(t("dispatch_manifest_lift"))}</span><strong>${escapeHtml(`+${formatNumber(dispatchPacket.expectedLiftPct || 0, 1)}%`)}</strong></div>
      </div>
      <div class="manifest-command">
        <span>${escapeHtml(t("dispatch_manifest_next"))}</span>
        <strong>${escapeHtml(dispatchPacket.nextAction || "-")}</strong>
      </div>
      <div class="route-amplifier ${escapeHtml(routeAmplifier.severity || "ok")}">
        <div class="amp-head">
          <div>
            <span class="eyebrow">${escapeHtml(t("route_amp_eyebrow"))}</span>
            <strong>${escapeHtml(t("route_amp_title"))}</strong>
          </div>
          <em>${escapeHtml(routeAmplifier.mode || "cached_route_amplifier")}</em>
        </div>
        <div class="amp-cells">${amplifierCells}</div>
        <div class="amp-next">
          <span>${escapeHtml(t("route_amp_top"))}</span>
          <strong>${escapeHtml(routeAmplifier.topRouteLabel || "-")} · ${escapeHtml(formatNumber(routeAmplifier.topRouteScore || 0, 1))}</strong>
        </div>
        <div class="amp-lanes">${amplifierLanes}</div>
        <p class="amp-formula"><span>${escapeHtml(t("route_amp_formula"))}</span>${escapeHtml(routeAmplifier.formula || "-")}</p>
      </div>
      <div class="manifest-body">
        <section>
          <div class="manifest-section-title"><span>${escapeHtml(t("dispatch_manifest_packets"))}</span><strong>${escapeHtml(t("dispatch_zero_reads"))}</strong></div>
          <div class="manifest-packets">${manifestPackets}</div>
        </section>
        <aside>
          <div class="manifest-section-title"><span>${escapeHtml(t("dispatch_manifest_checks"))}</span><strong>${escapeHtml(manifestStatus)}</strong></div>
          <div class="manifest-checks">${manifestChecks}</div>
          <pre class="manifest-copy"><code>${escapeHtml(dispatchPacket.copyBlock || "")}</code></pre>
          <button class="button button-secondary" type="button" data-copy="${encodeURIComponent(dispatchPacket.copyBlock || "")}">${escapeHtml(t("dispatch_manifest_copy"))}</button>
        </aside>
      </div>
    </article>
    <article class="operator-packet ${escapeHtml(primary.kind || "route")}">
      <div class="packet-head">
        <div>
          <span class="eyebrow">${escapeHtml(t("operator_packet_eyebrow"))}</span>
          <strong>${escapeHtml(t("operator_packet_title"))}</strong>
        </div>
        <em>${escapeHtml(t("operator_packet_armed"))} · ${escapeHtml(primaryCostLabel)}</em>
      </div>
      <div class="packet-grid">
        <div><span>${escapeHtml(t("operator_packet_route"))}</span><strong>${escapeHtml(localizedPrimary.label || primary.label || "-")}</strong></div>
        <div><span>${escapeHtml(t("operator_packet_sla"))}</span><strong>${escapeHtml(t("dispatch_sla", { minutes: formatNumber(primary.operatorSlaMinutes || 10) }))}</strong></div>
        <div><span>${escapeHtml(t("operator_packet_replies"))}</span><strong>${escapeHtml(t("dispatch_replies", { count: formatNumber(primary.targetReplies || 1) }))}</strong></div>
        <div><span>${escapeHtml(t("operator_packet_lift"))}</span><strong>${escapeHtml(t("dispatch_expected", { lift: formatNumber(primary.expectedLiftPct || 0, 1) }))}</strong></div>
      </div>
      <pre class="packet-copy"><code>${escapeHtml(primaryDraft)}</code></pre>
      <div class="packet-protocol">
        <div class="packet-protocol-head">
          <span>${escapeHtml(t("operator_protocol"))}</span>
          <div>
            <strong>${escapeHtml(primaryProtocol.mode || "manual_zero_read_growth_loop")}</strong>
            <em class="${doneCount === visibleProtocolSteps.length && visibleProtocolSteps.length ? "complete" : ""}">${escapeHtml(protocolProgress)}</em>
          </div>
        </div>
        <ol>
          ${visibleProtocolSteps.map(({ step, index, id }) => {
            const done = protocolDone.has(id);
            const status = done ? t("operator_step_done") : t("operator_step_pending");
            return `
            <li class="${done ? "done" : ""}">
              <button
                class="packet-step"
                type="button"
                data-protocol-key="${escapeHtml(protocolKey)}"
                data-protocol-step="${escapeHtml(id)}"
                data-protocol-route="${escapeHtml(localizedPrimary.label || primary.label || "-")}"
                data-protocol-label="${escapeHtml(step.label || step.id || "-")}"
                aria-pressed="${done ? "true" : "false"}"
                aria-label="${escapeHtml(`${step.label || step.id || `step ${index + 1}`} ${status}`)}"
              >
                <span><i>${String(index + 1).padStart(2, "0")}</i><b>${escapeHtml(step.label || step.id || "-")}</b></span>
                <strong>${escapeHtml(step.detail || "-")}</strong>
                <small>${escapeHtml(status)}</small>
              </button>
            </li>
          `}).join("")}
        </ol>
        ${stopConditions.length ? `
          <div class="packet-stop">
            <span>${escapeHtml(t("operator_stop"))}</span>
            <p>${escapeHtml(stopConditions.slice(0, 2).join(" · "))}</p>
          </div>
        ` : ""}
        ${primaryProtocol.writeback ? `<p class="packet-writeback"><span>${escapeHtml(t("operator_writeback"))}</span>${escapeHtml(primaryProtocol.writeback)}</p>` : ""}
      </div>
      <div class="row-actions">
        ${primary.routeUrl ? `<a class="button button-primary" href="${escapeHtml(primary.routeUrl)}" target="_blank" rel="noreferrer">${t("open_search")}: ${escapeHtml(localizedPrimary.label)}</a>` : ""}
        <button class="button button-secondary" type="button" data-copy="${encodeURIComponent(primaryPacket)}">${t("operator_packet_copy")}</button>
        <button class="button button-secondary" type="button" data-protocol-reset="${escapeHtml(protocolKey)}" data-protocol-route="${escapeHtml(localizedPrimary.label || primary.label || "-")}">${t("operator_reset")}</button>
      </div>
    </article>
    <article class="operator-telemetry">
      <div class="telemetry-head">
        <div>
          <span class="eyebrow">${escapeHtml(t("operator_telemetry_eyebrow"))}</span>
          <strong>${escapeHtml(t("operator_telemetry_title"))}</strong>
        </div>
        <em>${escapeHtml(`${operatorTelemetry.completionPct}%`)}</em>
      </div>
      <div class="telemetry-grid">
        <div><span>${escapeHtml(t("operator_telemetry_steps"))}</span><strong>${escapeHtml(`${formatNumber(operatorTelemetry.done)}/${formatNumber(operatorTelemetry.total)}`)}</strong></div>
        <div><span>${escapeHtml(t("operator_telemetry_missions"))}</span><strong>${escapeHtml(`${formatNumber(operatorTelemetry.complete)}/${formatNumber(operatorTelemetry.rows.length)}`)}</strong></div>
        <div><span>${escapeHtml(t("operator_telemetry_zero_reads"))}</span><strong>0</strong></div>
      </div>
      <div class="telemetry-routes">
        ${operatorTelemetry.rows.map((row) => `
          <div class="telemetry-route" style="--operator-route:${Math.round(row.ratio * 100)}%">
            <span>${escapeHtml(row.label)}</span>
            <strong>${escapeHtml(`${formatNumber(row.done)}/${formatNumber(row.total)}`)}</strong>
          </div>
        `).join("")}
      </div>
      <div class="telemetry-log">
        <span>${escapeHtml(t("operator_telemetry_latest"))}</span>
        ${operatorTelemetry.ledger.length ? operatorTelemetry.ledger.map((event) => `
          <p><time>${escapeHtml(formatDate(event.at))}</time><strong>${escapeHtml(t(event.type === "reset" ? "operator_event_reset" : event.state === "done" ? "operator_event_done" : "operator_event_pending"))}</strong><em>${escapeHtml(event.route || "-")} · ${escapeHtml(event.step || "-")}</em></p>
        `).join("") : `<p class="empty">${escapeHtml(t("operator_telemetry_empty"))}</p>`}
      </div>
    </article>
    <article class="operator-slo ${escapeHtml(sloStatus)}">
      <div class="slo-head">
        <div>
          <span class="eyebrow">${escapeHtml(t("operator_slo_eyebrow"))}</span>
          <strong>${escapeHtml(t("operator_slo_title"))}</strong>
        </div>
        <em>${escapeHtml(sloStatusLabel)} · ${escapeHtml(t("operator_slo_zero_reads"))}</em>
      </div>
      <div class="slo-kpis">
        <div><span>${escapeHtml(t("operator_slo_target"))}</span><strong>${escapeHtml(formatNumber(operatorSlo.targetReplies || 0))}</strong></div>
        <div><span>${escapeHtml(t("operator_slo_latency"))}</span><strong>${escapeHtml(`${formatNumber(operatorSlo.completionBudgetMinutes || 0)}m`)}</strong></div>
        <div><span>${escapeHtml(t("operator_slo_lift"))}</span><strong>${escapeHtml(`+${formatNumber(operatorSlo.expectedLiftPct || 0, 1)}%`)}</strong></div>
        <div><span>${escapeHtml(t("operator_slo_budget"))}</span><strong>${escapeHtml(money(operatorSlo.budgetUsdPerReply || 0))}</strong></div>
        <div><span>${escapeHtml(t("operator_slo_score"))}</span><strong>${escapeHtml(`${formatNumber(operatorSlo.baselineScore || 0, 1)} -> ${formatNumber(operatorSlo.expectedScore || 0, 1)}`)}</strong></div>
        <div><span>${escapeHtml(t("operator_slo_window"))}</span><strong>${escapeHtml(operatorSlo.currentWindow || "-")}</strong></div>
      </div>
      <div class="slo-card-grid">${sloCards}</div>
      <div class="slo-body">
        <section>
          <div class="slo-section-title"><span>${escapeHtml(t("operator_slo_lanes"))}</span><strong>${escapeHtml(`${formatNumber(operatorSlo.readyMissions || 0)}/${formatNumber(operatorSlo.missionCount || 0)}`)}</strong></div>
          <div class="slo-lanes">${sloLanes}</div>
        </section>
        <section class="slo-rules">
          <div class="slo-section-title"><span>${escapeHtml(t("operator_slo_rules"))}</span><strong>${escapeHtml(operatorSlo.mode || "manual_zero_read_slo")}</strong></div>
          <ol>${sloRules}</ol>
        </section>
      </div>
    </article>
    <article class="action-hero">
      <div>
        <span class="pill pill-neutral">${t("zero_api_action")}</span>
        <h3>${escapeHtml(t("dispatch_title"))}</h3>
        <p><strong>${escapeHtml(t("dispatch_primary"))}: ${escapeHtml(localizedPrimary.label || primary.label || "-")}</strong> · ${escapeHtml(localizedPrimary.reason || primary.evidence || t("daily_action_copy"))}</p>
        <div class="row-actions">
          ${primary.routeUrl ? `<a class="button button-primary" href="${escapeHtml(primary.routeUrl)}" target="_blank" rel="noreferrer">${t("open_search")}: ${escapeHtml(localizedPrimary.label)}</a>` : ""}
          <button class="button button-secondary" type="button" data-copy="${encodeURIComponent(primaryDraft)}">${t("copy_first_reply")}</button>
        </div>
      </div>
      <blockquote>${escapeHtml(primaryDraft)}</blockquote>
    </article>
    <div class="action-list">
      ${missionCards}
    </div>
  `;
}

function renderOpportunities() {
  const opportunities = dashboardData.opportunities?.length ? dashboardData.opportunities : fallbackData.opportunities || [];
  const container = $("#opportunity-list");
  if (!container) return;
  if (!opportunities.length) {
    container.innerHTML = `<p class="empty-state">${escapeHtml(t("opportunity_empty"))}</p>`;
    return;
  }
  container.innerHTML = opportunities
    .slice(0, 4)
    .map((item, index) => {
      const draft = item.draftText || draftFor(item.draftIndex ?? index).text;
      return `
        <article class="opportunity-card ${escapeHtml(item.kind || "route")}">
          <div class="opportunity-top">
            <span class="opportunity-rank">${String(item.priority || index + 1).padStart(2, "0")}</span>
            <div>
              <h3>${escapeHtml(item.label || "-")}</h3>
              <p>${escapeHtml(item.reason || item.evidence || "-")}</p>
            </div>
          </div>
          <div class="opportunity-meta">
            <span>${escapeHtml(t("opportunity_score", { score: formatNumber(item.score, 1) }))}</span>
            <span>${escapeHtml(t("opportunity_confidence", { confidence: item.confidence || "-" }))}</span>
            <span>${escapeHtml(item.evidence || "")}</span>
          </div>
          <div class="draft-preview">${escapeHtml(draft)}</div>
          <div class="row-actions">
            ${item.routeUrl ? `<a class="button button-primary" href="${escapeHtml(item.routeUrl)}" target="_blank" rel="noreferrer">${t("opportunity_open")}</a>` : ""}
            <button class="button button-secondary" type="button" data-copy="${encodeURIComponent(draft)}">${t("opportunity_copy")}</button>
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

function renderMediaRoiGate() {
  const target = $("#media-roi-gate");
  if (!target) return;
  const gate = mediaRoiGateData();
  const allowed = Boolean(gate.attachImageAllowed);
  const stateClass = allowed ? "good" : "warn";
  const stateLabel = allowed ? t("media_firewall_allow") : t("media_firewall_hold");
  const lift = gate.mediaLiftPct == null
    ? t("media_firewall_unknown")
    : `${formatNumber(number(gate.mediaLiftPct), 1)}%`;
  const samples = `${formatNumber(gate.mediaSamples)}/${formatNumber(gate.minSamples)} media · ${formatNumber(gate.textSamples)}/${formatNumber(gate.minSamples)} text`;
  const checks = (gate.checks || []).slice(0, 4);
  target.innerHTML = `
    <div class="media-firewall-head">
      <div>
        <span class="eyebrow">${escapeHtml(t("media_firewall_evidence"))}</span>
        <strong>${escapeHtml(t("media_firewall"))}</strong>
      </div>
      <em class="${stateClass}">${escapeHtml(stateLabel)}</em>
    </div>
    <div class="media-firewall-grid">
      <span>
        <small>${escapeHtml(t("media_firewall_lift"))}</small>
        <strong>${escapeHtml(lift)}</strong>
        <em>${escapeHtml(t("media_firewall_threshold", { value: formatNumber(number(gate.minLiftPct), 1) }))}</em>
      </span>
      <span>
        <small>${escapeHtml(t("media_firewall_samples"))}</small>
        <strong>${escapeHtml(samples)}</strong>
        <em>${escapeHtml(gate.confidence || "-")}</em>
      </span>
      <span>
        <small>${escapeHtml(t("media_firewall_delta"))}</small>
        <strong>${escapeHtml(money(gate.incrementalImageCostUsd || 0))}</strong>
        <em>${escapeHtml(`${money(gate.imagePostCostUsd || 0)} image`)}</em>
      </span>
      <span>
        <small>${escapeHtml(t("media_firewall_reads"))}</small>
        <strong>${gate.zeroExtraXReads ? "0" : "-"}</strong>
        <em>${escapeHtml(gate.decision || "-")}</em>
      </span>
    </div>
    <p>${escapeHtml(gate.reason || "")}</p>
    <div class="media-firewall-checks">
      ${checks
        .map(
          (check) => `
            <span class="${check.ok ? "ok" : "hold"}">
              <i></i>
              <strong>${escapeHtml(check.label || check.id || "-")}</strong>
              <em>${escapeHtml(check.value || "-")}</em>
            </span>
          `,
        )
        .join("")}
    </div>
  `;
}

function gateLabel(value) {
  const raw = String(value === null || value === undefined || value === "" ? "-" : value).replace(/_/g, " ");
  return raw || "-";
}

function metricNumber(value, fallback = 0) {
  return value === null || value === undefined || value === "" ? fallback : number(value, fallback);
}

function governorData() {
  return dashboardData.rateLimitGovernor || fallbackData.rateLimitGovernor || null;
}

function governorCellLabel(cell) {
  const labels = {
    read: "governor_read_gate",
    publish: "governor_post_gate",
    rate_limit: "governor_429",
    backend: "governor_503",
    safe_cap: "governor_safe_cap",
    safe_left: "governor_safe_left",
  };
  return labels[cell?.id] ? t(labels[cell.id]) : cell?.label || cell?.id || "-";
}

function renderRateGovernor() {
  const target = $("#rate-governor");
  if (!target) return;
  const governor = governorData();
  const { api, spend, cap } = apiBudget();
  const guard = dashboardData.automation?.budgetGuard || fallbackData.automation?.budgetGuard || {};
  const triage = apiStatusTriage();
  const control = controlPlaneData();
  const cadence = cadenceData();
  const cooldown = governor?.cooldown || api.cooldown || {};
  const active429 = metricNumber(governor?.partitions?.activeRateLimit429, number(triage.activeRateLimit429 ?? triage.rateLimit429));
  const active503 = metricNumber(governor?.partitions?.activeBackendFault5xx, number(triage.activeBackendFault5xx ?? triage.backendFault5xx));
  const cooldownActive = Boolean(cooldown.active);
  const safeCap = metricNumber(governor?.budget?.safeCapUsd, number(api.safeCap, number(guard.safeCapUsd, cap * 0.9)));
  const safeLeft = metricNumber(governor?.budget?.safeRemainingUsd, number(api.safeRemaining, Math.max(0, safeCap - spend)));
  const derivedSeverity = cooldownActive || active429 || active503 || control.readGate === "closed"
    ? "danger"
    : safeLeft <= 0 || control.publishGate === "closed"
      ? "warn"
      : "ok";
  const severity = ["ok", "warn", "danger"].includes(governor?.severity) ? governor.severity : derivedSeverity;
  const readGate = governor?.gates?.read || (cooldownActive || severity === "danger" ? "closed" : control.readGate || "cached_only");
  const publishGate = governor?.gates?.publish || control.publishGate || (cadence.publishAllowed ? "open" : "review");
  const cooldownLabel = cooldownActive
    ? t("governor_cooldown_minutes", { count: formatNumber(cooldown.remainingMinutes || cooldown.cooldownMinutes || 0) })
    : t("governor_no_cooldown");
  const runbook = governor?.runbook || (severity === "danger"
    ? t("governor_runbook_danger")
    : severity === "warn"
      ? t("governor_runbook_warn")
      : t("governor_runbook_ok"));
  const boundaryRatio = metricNumber(governor?.reactorFillPct, safeCap > 0 ? clamp((safeLeft / safeCap) * 100, 0, 100) : 100);
  const derivedCells = [
    { label: t("governor_read_gate"), value: gateLabel(readGate), tone: severity === "danger" ? "danger" : "ok" },
    { label: t("governor_post_gate"), value: gateLabel(publishGate), tone: publishGate === "open" ? "ok" : "warn" },
    { label: t("governor_429"), value: formatNumber(active429), tone: active429 ? "danger" : "ok" },
    { label: t("governor_503"), value: formatNumber(active503), tone: active503 ? "danger" : "ok" },
    { label: t("governor_safe_cap"), value: money(safeCap), tone: "neutral" },
    { label: t("governor_safe_left"), value: money(safeLeft), tone: safeLeft > 0.5 ? "ok" : safeLeft > 0 ? "warn" : "danger" },
  ];
  const cells = Array.isArray(governor?.cells) && governor.cells.length
    ? governor.cells.map((cell) => ({
        label: governorCellLabel(cell),
        value: gateLabel(cell.value),
        tone: cell.status || "neutral",
      }))
    : derivedCells;

  target.innerHTML = `
    <div class="governor-head ${escapeHtml(severity)}">
      <div>
        <span>${escapeHtml(t("governor_eyebrow"))}</span>
        <strong>${escapeHtml(t("governor_title"))}</strong>
      </div>
      <em>${escapeHtml(t(`governor_${severity}`))}</em>
    </div>
    <div class="governor-reactor">
      <div class="reactor-core ${escapeHtml(severity)}" style="--reactor-fill:${boundaryRatio}%">
        <span></span>
        <strong>${escapeHtml(formatNumber(boundaryRatio, 0))}%</strong>
      </div>
      <div class="governor-cells">
        ${cells
          .map(
            (cell) => `
              <span class="${escapeHtml(cell.tone)}">
                <em>${escapeHtml(cell.label)}</em>
                <strong>${escapeHtml(cell.value)}</strong>
              </span>
            `,
          )
          .join("")}
      </div>
    </div>
    <div class="governor-runbook">
      <span>${escapeHtml(t("governor_cooldown"))}: ${escapeHtml(cooldownLabel)}</span>
      <p>${escapeHtml(runbook)}</p>
    </div>
  `;
}

function budgetBurnData() {
  const incoming = dashboardData.budgetBurnReactor || fallbackData.budgetBurnReactor;
  if (incoming) return incoming;
  const { api, spend, cap } = apiBudget();
  const safeCap = number(api.safeCap, cap * 0.9);
  const safeRemaining = number(api.safeRemaining, Math.max(0, safeCap - spend));
  const apiDays = Array.isArray(api.days) ? api.days : [];
  const recentSpend = apiDays.slice(-7).reduce((sum, day) => sum + number(day.usd), 0);
  const dailyBurn = recentSpend > 0 ? recentSpend / 7 : 0.015;
  const runwayDays = dailyBurn > 0 ? safeRemaining / dailyBurn : null;
  const burnPct = safeCap > 0 ? clamp((spend / safeCap) * 100, 0, 140) : 0;
  const severity = safeRemaining <= 0 || burnPct >= 100 ? "danger" : burnPct >= 72 ? "warn" : "ok";
  return {
    severity,
    mode: severity === "ok" ? "inside_safe_envelope" : severity === "warn" ? "burn_rate_watch" : "cost_partition_sealed",
    zeroExtraXReads: true,
    spendUsd: spend,
    safeCapUsd: safeCap,
    safeRemainingUsd: safeRemaining,
    projectedDailyBurnUsd: dailyBurn,
    runwayDays,
    monthEndSafe: severity !== "danger",
    burnPct,
    safeTextSlots: dailyBurn > 0 ? Math.floor(safeRemaining / 0.015) : 0,
    safeMediaSlots: Math.floor(safeRemaining / 0.03),
    runbook: severity === "danger"
      ? t("governor_runbook_danger")
      : severity === "warn"
        ? t("governor_runbook_warn")
        : t("governor_runbook_ok"),
    cells: [
      { id: "burn", label: "safe burn", value: `${formatNumber(burnPct, 1)}%`, status: severity },
      { id: "runway", label: "runway", value: runwayDays === null ? "unlimited" : `${formatNumber(runwayDays, 1)}d`, status: severity },
      { id: "text_slots", label: "safe text slots", value: Math.floor(safeRemaining / 0.015), status: safeRemaining > 0 ? "ok" : "danger" },
      { id: "media_slots", label: "safe media slots", value: Math.floor(safeRemaining / 0.03), status: "warn" },
    ],
    partitions: [
      { id: "manual_routes", label: "manual reply routes", value: "$0.000", status: "ok", detail: "operator paste loop" },
      { id: "text_publish", label: "text publish", value: "$0.015", status: safeRemaining > 0 ? "ok" : "danger", detail: "budget ledger" },
      { id: "media_publish", label: "media publish", value: "$0.030", status: "warn", detail: "held behind ROI gate" },
      { id: "live_reads", label: "live X reads", value: "0 ops", status: "ok", detail: "cached only" },
    ],
    series: apiDays.length
      ? apiDays
      : Array.from({ length: 14 }, (_, index) => ({
          index,
          label: String(index + 1).padStart(2, "0"),
          value: 0,
          usd: 0,
        })),
  };
}

function allocationLaneLabel(lane) {
  const labels = {
    manual_route_burst: t("budget_alloc_manual"),
    text_post_experiment: t("budget_alloc_text"),
    media_post_surge: t("budget_alloc_media"),
    metrics_refresh: t("budget_alloc_metrics"),
    live_x_search: t("budget_alloc_live"),
  };
  return labels[lane?.id] || lane?.label || lane?.id || "-";
}

function allocationGateLabel(gate) {
  const normalized = String(gate || "").toLowerCase();
  const key = `budget_alloc_${normalized}`;
  return translations[currentLang]?.[key] || translations.en[key] || gateLabel(gate);
}

function derivedBudgetAllocationData() {
  const burn = budgetBurnData();
  const media = mediaRoiGateData();
  const route = routeAmplifierData();
  const kinetics = growthKineticsData();
  const safeRemaining = number(burn.safeRemainingUsd);
  const textCost = number((burn.partitions || []).find((item) => item.id === "text_publish")?.value?.replace?.("$", ""), 0.015);
  const mediaCost = number((burn.partitions || []).find((item) => item.id === "media_publish")?.value?.replace?.("$", ""), 0.03);
  const routeLift = Math.max(number(route.topRouteExpectedLiftPct), number(route.expectedLiftPct), number(kinetics.expectedLiftPct), 18);
  const mediaLift = media.mediaLiftPct == null ? 0 : number(media.mediaLiftPct);
  const textSlots = burn.safeTextSlots ?? Math.floor(safeRemaining / Math.max(0.001, textCost));
  const mediaSlots = burn.safeMediaSlots ?? Math.floor(safeRemaining / Math.max(0.001, mediaCost));
  const lanes = [
    {
      id: "manual_route_burst",
      label: "manual route burst",
      costUsd: 0,
      safeSlots: route.readyLanes || route.laneCount || null,
      expectedLiftPct: routeLift,
      gate: "open",
      status: "ok",
      efficiencyScore: 96,
      detail: "Prepared web routes spend no X search/read API.",
      nextAction: route.nextAction || "Execute the top manual route packet first.",
      xReadOps: 0,
    },
    {
      id: "text_post_experiment",
      label: "text post experiment",
      costUsd: textCost,
      safeSlots: textSlots,
      expectedLiftPct: Math.max(number(kinetics.expectedLiftPct), routeLift * 0.55),
      gate: textSlots > 0 ? "open" : "guarded",
      status: textSlots > 0 ? "ok" : "warn",
      efficiencyScore: textSlots > 0 ? 72 : 44,
      detail: "Standalone publish uses cadence and safe budget gates.",
      nextAction: "Publish only inside the learned cadence boundary.",
      xReadOps: 0,
    },
    {
      id: "media_post_surge",
      label: "media post surge",
      costUsd: mediaCost,
      safeSlots: mediaSlots,
      expectedLiftPct: mediaLift,
      gate: media.attachImageAllowed ? "open" : "guarded",
      status: media.attachImageAllowed ? "ok" : "warn",
      efficiencyScore: media.attachImageAllowed ? 58 : 28,
      detail: media.reason || "Media spend is held behind ROI evidence.",
      nextAction: media.nextAction || "Keep images behind the media ROI firewall.",
      xReadOps: 0,
    },
    {
      id: "metrics_refresh",
      label: "metrics refresh",
      costUsd: 0.05,
      safeSlots: Math.floor(safeRemaining / 0.05),
      expectedLiftPct: 2,
      gate: "closed",
      status: "ok",
      efficiencyScore: 18,
      detail: "Hold reads unless telemetry is stale enough to affect learning.",
      nextAction: "Use cached telemetry.",
      xReadOps: 1,
    },
    {
      id: "live_x_search",
      label: "live X search",
      costUsd: 0.05,
      safeSlots: 0,
      expectedLiftPct: 0,
      gate: "sealed",
      status: "danger",
      efficiencyScore: 0,
      detail: "Manual web links replace live X search/read API.",
      nextAction: "Keep this partition sealed.",
      xReadOps: 1,
    },
  ];
  return {
    mode: "derived_zero_read_budget_allocator",
    zeroExtraXReads: true,
    severity: "ok",
    recommendedLaneId: "manual_route_burst",
    recommendedAction: lanes[0].nextAction,
    safeRemainingUsd: safeRemaining,
    monthRunwayDays: burn.runwayDays,
    lanes,
    rankedLaneIds: lanes.map((lane) => lane.id),
    cells: [
      { id: "recommended", label: "top allocation", value: lanes[0].label, status: "ok" },
      { id: "safe_left", label: "safe left", value: money(safeRemaining), status: safeRemaining > 0.5 ? "ok" : "warn" },
      { id: "text_slots", label: "text slots", value: textSlots, status: textSlots > 0 ? "ok" : "danger" },
      { id: "x_reads", label: "live X reads", value: "sealed", status: "danger" },
    ],
    runbook: "Allocate the next growth loop to manual route burst; keep live X reads sealed.",
  };
}

function budgetAllocationData() {
  const incoming = dashboardData.budgetAllocationOptimizer || fallbackData.budgetAllocationOptimizer;
  if (incoming?.lanes?.length) return incoming;
  return derivedBudgetAllocationData();
}

function budgetBurnStatusLabel(severity) {
  return t(`budget_burn_${["ok", "warn", "danger"].includes(severity) ? severity : "ok"}`);
}

function budgetBurnCellLabel(cell) {
  const labels = {
    burn: "safe burn",
    runway: t("budget_burn_runway"),
    text_slots: "safe text slots",
    media_slots: "safe media slots",
  };
  return labels[cell?.id] || cell?.label || cell?.id || "-";
}

function budgetBurnPartitionLabel(partition) {
  const labels = {
    manual_routes: currentLang === "zh" ? "人工路由" : "manual routes",
    text_publish: currentLang === "zh" ? "文本发布" : "text publish",
    media_publish: currentLang === "zh" ? "媒体发布" : "media publish",
    live_reads: currentLang === "zh" ? "实时读取" : "live reads",
  };
  return labels[partition?.id] || partition?.label || partition?.id || "-";
}

function renderBudgetBurnReactor() {
  const target = $("#budget-burn-reactor");
  if (!target) return;
  const reactor = budgetBurnData();
  const severity = ["ok", "warn", "danger"].includes(reactor.severity) ? reactor.severity : "ok";
  const burnPct = clamp(number(reactor.burnPct), 0, 140);
  const safeLeft = money(reactor.safeRemainingUsd);
  const dailyBurn = money(reactor.projectedDailyBurnUsd);
  const runway = reactor.runwayDays == null ? "∞" : `${formatNumber(reactor.runwayDays, reactor.runwayDays > 30 ? 0 : 1)}d`;
  const monthEnd = reactor.monthEndSafe ? t("budget_burn_safe") : t("budget_burn_over");
  const series = Array.isArray(reactor.series) ? reactor.series.slice(-14) : [];
  const maxSpend = Math.max(0.001, ...series.map((day) => number(day.usd)));
  const cells = Array.isArray(reactor.cells) ? reactor.cells : [];
  const partitions = Array.isArray(reactor.partitions) ? reactor.partitions : [];

  target.innerHTML = `
    <div class="burn-head ${escapeHtml(severity)}">
      <div>
        <span>${escapeHtml(t("budget_burn_eyebrow"))}</span>
        <strong>${escapeHtml(t("budget_burn_title"))}</strong>
      </div>
      <em>${escapeHtml(budgetBurnStatusLabel(severity))}</em>
    </div>
    <div class="burn-core-grid">
      <div class="burn-core ${escapeHtml(severity)}" style="--burn-pct:${burnPct}%">
        <span></span>
        <strong>${escapeHtml(formatNumber(burnPct, 0))}%</strong>
        <small>${escapeHtml(t("budget_burn_zero_reads"))}</small>
      </div>
      <div class="burn-kpis">
        <div><span>${escapeHtml(t("budget_burn_safe_left"))}</span><strong>${escapeHtml(safeLeft)}</strong></div>
        <div><span>${escapeHtml(t("budget_burn_daily"))}</span><strong>${escapeHtml(dailyBurn)}</strong></div>
        <div><span>${escapeHtml(t("budget_burn_runway"))}</span><strong>${escapeHtml(runway)}</strong></div>
        <div><span>${escapeHtml(t("budget_burn_month_end"))}</span><strong>${escapeHtml(monthEnd)}</strong></div>
      </div>
    </div>
    <div class="burn-series" aria-label="${escapeHtml(t("budget_burn_series"))}">
      ${series
        .map((day) => {
          const height = clamp((number(day.usd) / maxSpend) * 100, 4, 100);
          return `<span title="${escapeHtml(day.date || day.label || "")}: ${escapeHtml(money(day.usd))}" style="--burn-height:${height}%"><i></i></span>`;
        })
        .join("")}
    </div>
    <div class="burn-cells">
      ${cells
        .map((cell) => `
          <span class="${escapeHtml(cell.status || "ok")}">
            <em>${escapeHtml(budgetBurnCellLabel(cell))}</em>
            <strong>${escapeHtml(gateLabel(cell.value))}</strong>
          </span>
        `)
        .join("")}
    </div>
    <div class="burn-partitions">
      <span>${escapeHtml(t("budget_burn_partitions"))}</span>
      ${partitions
        .map((partition) => `
          <article class="${escapeHtml(partition.status || "ok")}">
            <div>
              <strong>${escapeHtml(budgetBurnPartitionLabel(partition))}</strong>
              <small>${escapeHtml(partition.detail || "")}</small>
            </div>
            <em>${escapeHtml(gateLabel(partition.value))}</em>
          </article>
        `)
        .join("")}
    </div>
    <p class="burn-runbook">${escapeHtml(reactor.runbook || "")}</p>
  `;
}

function renderBudgetAllocationOptimizer() {
  const target = $("#budget-allocation-optimizer");
  if (!target) return;
  const optimizer = budgetAllocationData();
  const lanes = Array.isArray(optimizer.lanes) ? optimizer.lanes : [];
  if (!lanes.length) {
    target.innerHTML = `<p class="empty-state">${escapeHtml(t("budget_alloc_runbook"))}: -</p>`;
    return;
  }
  const rankedIds = Array.isArray(optimizer.rankedLaneIds) && optimizer.rankedLaneIds.length
    ? optimizer.rankedLaneIds
    : lanes.map((lane) => lane.id);
  const ranked = rankedIds
    .map((id) => lanes.find((lane) => lane.id === id))
    .filter(Boolean);
  const recommended = lanes.find((lane) => lane.id === optimizer.recommendedLaneId) || ranked[0] || lanes[0];
  const maxEfficiency = Math.max(1, ...lanes.map((lane) => number(lane.efficiencyScore)));
  const cells = Array.isArray(optimizer.cells) ? optimizer.cells : [];
  const safeLeft = optimizer.safeRemainingUsd == null ? "∞" : money(optimizer.safeRemainingUsd);
  const runway = optimizer.monthRunwayDays == null ? "∞" : `${formatNumber(optimizer.monthRunwayDays, optimizer.monthRunwayDays > 30 ? 0 : 1)}d`;

  target.innerHTML = `
    <div class="allocator-head ${escapeHtml(optimizer.severity || "ok")}">
      <div>
        <span>${escapeHtml(t("budget_alloc_eyebrow"))}</span>
        <strong>${escapeHtml(t("budget_alloc_title"))}</strong>
      </div>
      <em>${escapeHtml(t("budget_alloc_zero_reads"))}</em>
    </div>
    <div class="allocator-core">
      <div class="allocator-reco">
        <span>${escapeHtml(t("budget_alloc_recommended"))}</span>
        <strong>${escapeHtml(allocationLaneLabel(recommended))}</strong>
        <p>${escapeHtml(optimizer.recommendedAction || recommended.nextAction || "-")}</p>
      </div>
      <div class="allocator-kpis">
        <div><span>${escapeHtml(t("budget_alloc_safe_left"))}</span><strong>${escapeHtml(safeLeft)}</strong></div>
        <div><span>${escapeHtml(t("budget_alloc_runway"))}</span><strong>${escapeHtml(runway)}</strong></div>
      </div>
    </div>
    <div class="allocator-cells">
      ${cells.map((cell) => `
        <span class="${escapeHtml(cell.status || "ok")}">
          <em>${escapeHtml(cell.label || cell.id || "-")}</em>
          <strong>${escapeHtml(gateLabel(cell.value))}</strong>
        </span>
      `).join("")}
    </div>
    <div class="allocator-lane-title">
      <span>${escapeHtml(t("budget_alloc_lanes"))}</span>
      <strong>${escapeHtml(t("budget_alloc_efficiency"))}</strong>
    </div>
    <div class="allocator-lanes">
      ${ranked.map((lane, index) => {
        const pct = clamp((number(lane.efficiencyScore) / maxEfficiency) * 100, 3, 100);
        return `
          <article class="${escapeHtml(lane.status || "ok")}" style="--allocator-score:${pct.toFixed(1)}%">
            <div class="allocator-rank">
              <span>${String(index + 1).padStart(2, "0")}</span>
            </div>
            <div class="allocator-lane-body">
              <div>
                <strong>${escapeHtml(allocationLaneLabel(lane))}</strong>
                <em>${escapeHtml(allocationGateLabel(lane.gate))}</em>
              </div>
              <dl>
                <div><dt>${escapeHtml(t("budget_alloc_cost"))}</dt><dd>${escapeHtml(money(lane.costUsd))}</dd></div>
                <div><dt>${escapeHtml(t("budget_alloc_slots"))}</dt><dd>${escapeHtml(lane.safeSlots == null ? "∞" : formatNumber(lane.safeSlots))}</dd></div>
                <div><dt>${escapeHtml(t("budget_alloc_lift"))}</dt><dd>${escapeHtml(`${formatNumber(lane.expectedLiftPct, 1)}%`)}</dd></div>
                <div><dt>${escapeHtml(t("budget_alloc_efficiency"))}</dt><dd>${escapeHtml(formatNumber(lane.efficiencyScore, 1))}</dd></div>
              </dl>
              <p>${escapeHtml(lane.detail || lane.nextAction || "-")}</p>
              <i></i>
            </div>
          </article>
        `;
      }).join("")}
    </div>
    <p class="allocator-runbook"><span>${escapeHtml(t("budget_alloc_runbook"))}</span>${escapeHtml(optimizer.runbook || "-")}</p>
  `;
}

function renderApi() {
  const { api, spend, cap, ratio } = apiBudget();
  $("#api-spend-label").textContent = currentLang === "zh" ? `已花 ${money(spend)}` : `${money(spend)} spent`;
  $("#api-cap-label").textContent = currentLang === "zh" ? `上限 $${cap.toFixed(2)}` : `$${cap.toFixed(2)} cap`;
  $("#api-meter").style.width = `${ratio}%`;
  renderRateGovernor();
  renderBudgetBurnReactor();
  renderBudgetAllocationOptimizer();
  renderMediaRoiGate();
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
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;

    const protocolStep = target.closest("button[data-protocol-step]");
    if (protocolStep) {
      const result = toggleOperatorStepState(protocolStep.dataset.protocolKey, protocolStep.dataset.protocolStep);
      appendOperatorLedger({
        type: "step",
        route: protocolStep.dataset.protocolRoute,
        step: protocolStep.dataset.protocolLabel || protocolStep.dataset.protocolStep,
        state: result.active ? "done" : "pending",
      });
      renderActions();
      showToast(t("operator_step_saved"));
      return;
    }
    const protocolReset = target.closest("button[data-protocol-reset]");
    if (protocolReset) {
      resetOperatorState(protocolReset.dataset.protocolReset);
      appendOperatorLedger({
        type: "reset",
        route: protocolReset.dataset.protocolRoute,
        step: "protocol",
        state: "reset",
      });
      renderActions();
      showToast(t("operator_step_reset"));
      return;
    }
    const signalButton = target.closest("button[data-signal-node]");
    if (signalButton) {
      activeSignalNode = signalButton.dataset.signalNode || "rss";
      signalDetailOpen = true;
      renderSignalDetail();
      return;
    }
    const signalClose = target.closest("button[data-signal-close]");
    if (signalClose) {
      signalDetailOpen = false;
      renderSignalDetail();
      return;
    }
    const demoButton = target.closest("button[data-demo-toggle]");
    if (demoButton) {
      setDemoMode(!demoMode);
      return;
    }
    const autoplayButton = target.closest("button[data-autoplay-toggle]");
    if (autoplayButton) {
      if (autoDemo) stopAutoDemo();
      else startAutoDemo();
      return;
    }
    const demoStepButton = target.closest("button[data-demo-step]");
    if (demoStepButton) {
      const index = DEMO_STEPS.findIndex((step) => step.id === demoStepButton.dataset.demoStep);
      if (index >= 0) {
        if (!demoMode) setDemoMode(true);
        activateDemoStep(index);
      }
      return;
    }
    const themeButton = target.closest("button[data-theme-value]");
    if (themeButton) {
      setTheme(themeButton.dataset.themeValue);
      return;
    }
    const langButton = target.closest("button[data-lang-value]");
    if (langButton) setLang(langButton.dataset.langValue);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && autoDemo) {
      stopAutoDemo();
      return;
    }
    if (event.key === "Escape" && demoMode) setDemoMode(false);
  });
}

function render() {
  applyChromeText();
  renderHeader();
  renderHero();
  renderTelemetryContract();
  renderExpoStory();
  renderGauges();
  renderMonitorPanels();
  renderMetrics();
  renderGoal();
  renderGrowthKinetics();
  renderLearning();
  renderControlPlane();
  renderSignalNodes();
  renderSignalDetail();
  renderProof();
  renderServices();
  renderInferenceStream();
  renderTrend();
  renderOpportunities();
  renderActions();
  renderDrafts();
  renderDiagnosis();
  renderGenerationDecisionTrace();
  renderPosts();
  renderApi();
  setupSignalCanvas();
}

async function init() {
  await loadData();
  render();
  bindCopyButtons();
  bindPreferenceButtons();
  window.addEventListener("resize", () => {
    clearTimeout(signalResizeTimer);
    signalResizeTimer = setTimeout(() => {
      renderSignalNodes();
      setupSignalCanvas();
    }, 120);
  });
}

init();
