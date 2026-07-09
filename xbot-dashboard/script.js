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
    description: "Web search links + manual route outputs.",
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
      reason: "Use this for broader tech packets beyond the AI-builder bubble.",
      draftIndex: 2,
    },
  ],
  opportunities: [
    {
      priority: 1,
      label: "decision rule route ops",
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
      reason: "Stories from this source have outperformed baseline; look for fresh related discussions before dispatching more standalone packets.",
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
    "当前低成本路线是人工点网页搜索、复制输出，避免增加 X search/read API。",
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
      action: "Historical X API faults are recorded, but the latest endpoint states are clear.",
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
      label: "24h L7 traffic load",
      unit: "L7 events",
      source: "packet_l7_metrics",
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
      label: "7d L7 ingestion throughput",
      unit: "L7 events",
      source: "packet_l7_metrics",
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
    source: "packet_telemetry.dispatchedAt + packet_l7_metrics",
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
    nextAction: "Hold standalone packets for learned UTC peaks; use manual route ops during cold windows.",
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
    reason: "Need more measured media packets before spending on image uploads.",
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
      { id: "learning", label: "learning load", value: "8", status: "ok", detail: "307 L7 events in 7d feedback window" },
    ],
    safeguards: [
      "No automated outbound route ops outside mention/engagement policy.",
      "No live X search/read when 429 or 5xx faults are active.",
      "Manual web routes spend 0 X API read budget.",
    ],
  },
  viralFlywheel: {
    generatedAt: "2026-07-07T01:09:59.105Z",
    mode: "route_burst",
    zeroExtraXReads: true,
    velocityScore: 68.4,
    loopCoefficient: 1.86,
    expectedLiftPct: 84.6,
    baselineScore: 3.9,
    safeBudgetLeftUsd: 2.81,
    bottleneck: {
      id: "none",
      label: "No hard bottleneck",
      severity: "ok",
      action: "Execute the top route burst, then let maintenance write outcomes back.",
    },
    ackRate24h: 0.86,
    ackRate7d: 4.1,
    routeCoveragePct: 100,
    swarmCoveragePct: 167,
    nextBurst: {
      label: "decision rule route ops",
      routeLabel: "Target Accounts",
      routeUrl: "https://x.com/search?q=(from%3Akarpathy%20OR%20from%3Asama)%20(AI%20OR%20tech)%20-is%3Aretweet%20lang%3Aen&src=typed_query&f=live",
      draftText: "Launch rule for AI products: demo quality matters less than failure shape. If users can’t predict when it will be wrong, support cost becomes the real roadmap.",
      targetReplies: 3,
      expectedLiftPct: 84.6,
    },
    stages: [
      { id: "ingress", label: "signal ingress", value: "17 pkts", status: "ok", detail: "307 L7 events in 7d telemetry" },
      { id: "ranker", label: "ranker lift", value: "+84.6%", status: "ok", detail: "decision rule route ops over baseline 3.9" },
      { id: "swarm", label: "swarm output", value: "5 drafts", status: "ok", detail: "primary rule decision_rule" },
      { id: "route", label: "route queue", value: "2/2", status: "ok", detail: "manual web actions spend 0 X read ops" },
      { id: "writeback", label: "learning writeback", value: "120 packets", status: "ok", detail: "8 L7 events in 24h feedback window" },
    ],
    edges: [
      { id: "ingress_ranker", from: "INGRESS", to: "RANKER", load: "621 L7", status: "ok", detail: "17 packets scored" },
      { id: "ranker_swarm", from: "RANKER", to: "SWARM", load: "+84.6%", status: "ok", detail: "baseline 3.9" },
      { id: "swarm_route", from: "SWARM", to: "ROUTE", load: "5/3", status: "ok", detail: "paste-ready outputs" },
      { id: "route_writeback", from: "ROUTE", to: "WRITEBACK", load: "100%", status: "ok", detail: "manual route coverage" },
      { id: "writeback_ingress", from: "WRITEBACK", to: "INGRESS", load: "4.10% ACK", status: "ok", detail: "learning signal density" },
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
  cachedGenerationPolicy: {
    generatedAt: "2026-07-07T01:09:59.105Z",
    mode: "cached_generation_policy",
    confidence: "medium",
    zeroExtraXReads: true,
    estimatedXReadOps: 0,
    estimatedIncrementalXApiUsd: 0,
    primaryFormatId: "decision_rule",
    primaryFormatLabel: "Decision Rule",
    exploreFormatId: "operator_pain",
    rankedFormatIds: ["decision_rule", "operator_pain", "second_order", "contrarian_cost"],
    avoidFormatIds: ["prediction"],
    hookPattern: {
      id: "decision_rule",
      label: "Decision Rule",
      directive: "Open with a reusable rule the reader can apply today.",
    },
    narrativePillar: {
      id: "operator_leverage",
      label: "Operator Leverage",
      directive: "Turn the story into a concrete operator rule.",
    },
    opportunity: {
      id: "13:operator_leverage:decision_rule",
      label: "13:00 UTC / Operator Leverage / Decision Rule",
      score: 95.3,
      sources: ["topic_timing", "content_bandit", "angle_load"],
    },
    directives: [
      "Primary format bias: decision_rule. Use this unless the selected story strongly fits another listed format.",
      "First-line hook: Decision Rule. Open with a reusable rule the reader can apply today.",
      "Opportunity lane: 13:00 UTC / Operator Leverage / Decision Rule; sources=topic_timing+content_bandit+angle_load; score=95.3.",
      "No live X search/read calls, no auto-replies, no rate-limit circumvention, no URLs, no headline recap.",
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
      "Traffic load is soft; write a useful route-ready angle that earns manual distribution.",
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
    source: "cached packet telemetry only",
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
  angleLoadRouter: {
    generatedAt: "2026-07-07T01:09:59.105Z",
    mode: "cached_angle_load_router",
    source: "hourly load balancer + temporal angle matrix + adaptive scheduler",
    zeroExtraXReads: true,
    severity: "ok",
    activeCommand: "Route Decision Rule at 13:00 UTC. Exploit the strongest proven angle; do not dilute the packet with experiments.",
    activeSlot: {
      windowLabel: "13:00",
      hour: 13,
      formatId: "decision_rule",
      label: "Decision Rule",
      angle: "decision rule / what to do next",
      score: 91.2,
      loadScore: 88.4,
      action: "exploit",
      status: "hot",
      reason: "Best UTC window with proven reusable-rule format.",
    },
    gates: [
      { id: "read", label: "X_READ_PARTITION", value: "cached_only", status: "ok" },
      { id: "publish", label: "PUBLISH_GATE", value: "review", status: "warn" },
      { id: "explore", label: "EXPLORATION_LANE", value: "guarded", status: "warn" },
      { id: "writeback", label: "WRITEBACK_BUS", value: "medium", status: "ok" },
    ],
    lanes: [
      { id: "decision_rule", slot: 1, windowLabel: "13:00", hoursFromNow: 11, label: "Decision Rule", formatId: "decision_rule", action: "exploit", angle: "decision rule / what to do next", status: "hot", score: 91.2, loadScore: 88.4, samples: 3, avgScore: 7.2, reason: "Best UTC window with proven reusable-rule format." },
      { id: "operator_pain", slot: 2, windowLabel: "17:00", hoursFromNow: 15, label: "Operator Pain", formatId: "operator_pain", action: "test", angle: "operator pain / hidden workflow tax", status: "watch", score: 79.4, loadScore: 81.6, samples: 2, avgScore: 4.8, reason: "High-load window; pair with practical workflow-tax angle." },
      { id: "second_order", slot: 3, windowLabel: "22:00", hoursFromNow: 20, label: "Second Order", formatId: "second_order", action: "explore", angle: "second-order distribution or business consequence", status: "probe", score: 67.1, loadScore: 72.8, samples: 0, avgScore: 0, reason: "Exploration slot for downstream platform consequences." },
    ],
    directives: [
      "Route Decision Rule at 13:00 UTC. Exploit the strongest proven angle; do not dilute the packet with experiments.",
      "Traffic load is soft; write a useful route-ready angle that earns manual distribution.",
      "Do not use held formats unless the story is a perfect fit: prediction.",
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
      nextAction: "Route breakout story from github.blog into the next packet angle.",
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
        routeReason: "Open live X web search and route manually under active high-throughput conversations.",
        replyAngle: "Route angle: Tie the story to model adoption, workflow lock-in, or operator cost.\nUse the story as evidence, not a recap.\nFormat: one concrete operating rule, one cost/tradeoff, one sharp question.",
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
        routeReason: "Open live X web search and route manually under active high-throughput conversations.",
        replyAngle: "Route angle: Frame the platform shift as distribution, margin, privacy, or default-control leverage.\nUse the story as evidence, not a recap.\nFormat: one concrete operating rule, one cost/tradeoff, one sharp question.",
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
        routeReason: "Open live X web search and route manually under active high-throughput conversations.",
        replyAngle: "Route angle: Translate the story into a consumer behavior or distribution habit change.\nUse the story as evidence, not a recap.\nFormat: one concrete operating rule, one cost/tradeoff, one sharp question.",
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
      { id: "target", label: "route target", value: "3/day", status: "ok" },
      { id: "queue", label: "mission queue", value: "2/2", status: "ok" },
      { id: "budget", label: "X read budget", value: "0 reads", status: "ok" },
      { id: "learning", label: "writeback", value: "120 packets", status: "ok" },
    ],
    runbook: [
      "Open the top route in X web.",
      "Paste 3 useful route ops under fresh, high-signal conversations.",
      "Prefer source packets less than 2 hours old with active technical debate.",
      "Let the next maintenance run write engagement back into the learning layer.",
    ],
    missions: [
      {
        id: "template:decision_rule",
        priority: 1,
        label: "decision rule route ops",
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
        routeReason: "Look for fresh related discussions before dispatching more standalone packets.",
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
      { id: "reply_latency", label: "operator SLA", value: "30 min", status: "ok", detail: "3 route ops inside the daily traffic loop" },
      { id: "x_read_burn", label: "X read burn", value: "0 ops", status: "ok", detail: "manual web routes do not consume X search/read budget" },
      { id: "learning_writeback", label: "learning writeback", value: "120 packets", status: "ok", detail: "baseline score 3.9 -> expected 6.6" },
    ],
    lanes: [
      {
        id: "template:decision_rule",
        label: "decision rule route ops",
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
      "Open routes in X web; do not call recent_search for manual route ops.",
      "Paste only useful route ops under active technical threads; stop at target count.",
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
    nextExperiment: "Double down on decision-rule packets for operator-heavy AI and platform news; avoid broad predictions unless the payoff is specific.",
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
  learningLoopContract: {
    generatedAt: "2026-07-07T01:09:59.105Z",
    mode: "cached_learning_contract",
    status: "online",
    confidence: "medium",
    zeroExtraXReads: true,
    estimatedXReadOps: 0,
    estimatedIncrementalXApiUsd: 0,
    source: "cached analytics, bandit allocator, generation trace",
    sampleCount: 120,
    baselineScore: 3.9,
    primaryArm: { id: "decision_rule", label: "Decision Rule", status: "exploit", allocationPct: 28.5, avgScore: 2.8, samples: 10, liftPct: 12.4 },
    exploreArm: { id: "second_order", label: "Second-order", status: "explore", allocationPct: 12, avgScore: 0, samples: 0, liftPct: null },
    holdArms: [{ id: "prediction", label: "Prediction", status: "hold", allocationPct: 0, avgScore: 2.1, samples: 2, liftPct: -18.2 }],
    activeOpportunity: { id: "decision_rule", label: "Decision Rule", score: 95.3, status: "hot", directive: "Keep the next packet as a reusable decision rule." },
    selectedTrace: { templateId: "decision_rule", score: 95.3, policyScore: 10, banditScore: 7.2, source: "cached_policy" },
    policy: {
      mode: "cached_generation_policy",
      confidence: "medium",
      primaryFormatId: "decision_rule",
      primaryFormatLabel: "Decision Rule",
      exploreFormatId: "second_order",
      rankedFormatIds: ["decision_rule", "playbook", "operator_pain", "second_order"],
      avoidFormatIds: ["prediction"],
      promptBias: [
        "Lead with decision_rule: turn the story into a concrete rule.",
        "Prefer high-signal tech sources.",
        "Avoid prediction unless story-fit is unusually strong.",
      ],
      zeroExtraXReads: true,
    },
    cells: [
      { id: "sample_ledger", label: "SAMPLE_LEDGER", value: 120, status: "ok", detail: "120 cached packets" },
      { id: "primary_arm", label: "PRIMARY_ARM", value: "decision_rule", status: "ok", detail: "Decision Rule" },
      { id: "read_gate", label: "READ_GATE", value: "0 X reads", status: "ok", detail: "cached-only learning bus" },
      { id: "policy_patch", label: "POLICY_PATCH", value: "decision_rule", status: "ok", detail: "medium" },
    ],
    nextAction: "Keep the next packet as a reusable decision rule.",
    guardrails: [
      "Cached analytics only; 0 X search/read ops.",
      "No auto-replies, no scraping, no rate-limit bypass.",
      "Manual route work stays human-reviewed.",
    ],
  },
  audienceExpansionRouter: {
    enabled: true,
    mode: "wide_tech_router",
    confidence: "medium",
    sampleCount: 120,
    baselineScore: 3.9,
    zeroExtraXReads: true,
    source: "cached packet telemetry + RSS classifier",
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
    decision: "Run 3 packet experiment(s): decision_rule, playbook, second_order.",
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
    page_title: "CODEX SRE Traffic Command Center",
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
    grafana_title: "1 Node Exporter: CODEX Traffic Matrix",
    grafana_window: "Last 24 hours",
    story_eyebrow: "Expo brief",
    story_title: "Zero-waste control loop",
    story_outcome_score: "0 X read ops",
    story_outcome_copy: "Swarm inference, route queues, and feedback loops run without extra X search/read calls.",
    outcome_extra_reads: "X read ops",
    outcome_replies_ready: "Swarm output",
    outcome_api_left: "X API headroom",
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
    cadence_status_publish: "{mode} · main packet armed",
    cadence_status_hold: "{mode} · manual distribution first",
    arbiter_eyebrow: "Publish Arbiter",
    arbiter_title: "Fire-control gate for the next packet",
    arbiter_zero_reads: "0 X read ops",
    arbiter_status_armed: "armed",
    arbiter_status_review: "review",
    arbiter_status_sealed: "sealed",
    arbiter_publish_gate: "publish gate",
    arbiter_next_window: "fire window",
    arbiter_topic_lane: "topic lane",
    arbiter_next_action: "runbook",
    arbiter_time_to_fire: "T-minus",
    arbiter_router_score: "router score",
    arbiter_no_lane: "no active lane",
    arbiter_topic_gate: "topic timing",
    arbiter_budget_gate: "budget",
    arbiter_interval_gate: "interval",
    arbiter_hourly_gate: "UTC load",
    arbiter_telemetry_gate: "telemetry",
    arbiter_experiment_gate: "experiments",
    arbiter_gate_ok: "clear",
    arbiter_gate_watch: "watch",
    arbiter_mode: "mode",
    arbiter_enforcement: "enforcement",
    runlog_cadence: "cadence.control",
    runlog_eyebrow: "Task log",
    runlog_ready: "operator ready",
    runlog_ingest: "rss.ingest",
    runlog_score: "ranker.score",
    runlog_queue: "swarm.output",
    runlog_cost: "cost.guard",
    runlog_learn: "learning.writeback",
    mission_control_eyebrow: "Mission Control Spine",
    mission_control_title: "Ingress SLO control plane",
    mission_control_nominal: "mission nominal",
    mission_control_watch: "mission watch",
    mission_control_fault: "mission fault",
    mission_control_score: "mission score",
    mission_control_milestone: "active conn milestone",
    mission_control_remaining: "{count} remaining",
    mission_control_projected: "{days} projected",
    mission_control_next: "next operator action",
    mission_control_zero_reads: "0 X read ops",
    mission_control_no_route: "route lane pending",
    command_strip_eyebrow: "Autopilot Command Strip",
    command_strip_title: "Control kernel armed",
    command_strip_zero_reads: "0 X read ops",
    command_strip_score: "kernel score",
    command_strip_active: "active route instruction",
    command_strip_copy: "Copy kernel",
    command_strip_empty: "Autopilot kernel waiting for telemetry.",
    event_stream_eyebrow: "Telemetry Event Stream",
    event_stream_title: "NOC event bus",
    event_stream_nominal: "event bus nominal",
    event_stream_watch: "boundary watch",
    event_stream_fault: "fault partition",
    event_stream_zero_reads: "0 X read ops",
    event_http_title: "HTTP Status Triage",
    event_cost_title: "Cost Boundary Reactor",
    event_control_title: "Traffic Control Plane",
    event_queue_title: "Swarm Output Queue",
    event_learning_title: "Learning Writeback",
    event_l7_title: "L7 Traffic Load",
    event_http_detail: "{calls} calls · {failures} faults · {rate}% failure",
    event_cost_detail: "{left} safe left · {runway} runway · month-end {monthEnd}",
    event_control_detail: "{readGate} read · {publishGate} packet · pressure {pressure}%",
    event_queue_detail: "{missions} route ops · {drafts} outputs · zero-read lane",
    event_learning_detail: "{posts} packets measured · baseline {score}",
    event_l7_detail: "{impressions} L7 events / 24h · kinetic {score}",
    http_triage_eyebrow: "HTTP Status Triage",
    http_triage_title: "429 / 503 / auth partition firewall",
    http_triage_success: "success ratio",
    http_triage_active_faults: "active faults",
    http_triage_read_gate: "read gate",
    http_triage_zero_reads: "0 live X reads",
    http_triage_fault_bus: "fault bus",
    http_triage_endpoint_bus: "endpoint bus",
    http_triage_status_matrix: "status matrix",
    http_triage_no_faults: "No active fault partitions. Cached routing remains safe.",
    http_triage_last_status: "last HTTP {status}",
    http_triage_calls: "{count} calls",
    http_triage_runbook: "runbook",
    http_triage_read_cached: "cached_only",
    http_triage_read_closed: "sealed",
    http_triage_read_review: "review",
    http_status_success2xx: "2xx success",
    http_status_client4xx: "4xx client",
    http_status_auth4xx: "401/403 auth",
    http_status_rateLimit429: "429 rate-limit",
    http_status_backend5xx: "5xx backend",
    reactor_hud_eyebrow: "Reactor HUD",
    reactor_hud_title: "Reactor fire-control bus",
    reactor_hud_zero_reads: "0 live X reads",
    reactor_hud_core_score: "pressure",
    reactor_hud_primary_command: "primary command",
    reactor_hud_safeguards: "safeguards",
    reactor_hud_ingress: "L7 ingress",
    reactor_hud_ack_rate: "ACK rate",
    reactor_hud_outputs: "outputs",
    reactor_hud_route_ops: "route ops",
    reactor_hud_learning: "learning n",
    reactor_hud_cost: "cost left",
    reactor_hud_read_gate: "read",
    reactor_hud_publish_gate: "publish",
    reactor_hud_format: "format",
    reactor_hud_hook: "hook",
    reactor_hud_signal_trace: "signal trace",
    reactor_hud_safe_loop: "safe loop",
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
    decision_trace_router_bus: "Angle load router",
    decision_trace_router_active: "active slot",
    decision_trace_router_ranked: "ranked formats",
    decision_trace_router_score: "router score",
    decision_trace_router_load: "L7 load",
    decision_trace_router_lanes: "route lanes",
    decision_trace_router_mode: "mode",
    decision_trace_router_empty: "Router trace not recorded yet.",
    decision_trace_bandit: "bandit",
    decision_trace_hook: "hook",
    decision_trace_gate_state: "Gate state",
    decision_trace_policy_bus: "Prompt policy bus",
    decision_trace_policy_primary: "primary",
    decision_trace_policy_avoid: "avoid",
    decision_trace_policy_directives: "directives",
    decision_trace_policy_score: "policy",
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
    decision_trace_local_seed: "local seed",
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
    monitor_firewall: "X API circuit breaker",
    firewall_zero_reads: "0 live X reads",
    firewall_read_gate: "read gate",
    firewall_publish_gate: "publish gate",
    firewall_runway: "runway",
    firewall_safe_left: "safe left",
    firewall_faults: "faults",
    firewall_sealed: "sealed partitions",
    firewall_state_open: "circuit nominal",
    firewall_state_review: "operator review",
    firewall_state_sealed: "read partition sealed",
    firewall_runbook_ok: "Cached telemetry is enough for the next operator loop.",
    firewall_runbook_warn: "Keep optional reads sealed and spend the next loop on manual route lanes.",
    firewall_runbook_danger: "Do not run live search/read jobs until cooldown and auth partitions clear.",
    gauge_data_age: "Telemetry freshness",
    gauge_followers: "Ingress Node Strength (Active Conns)",
    gauge_24h_impr: "L7 traffic load",
    gauge_signal_score: "Ranker score",
    gauge_reply_queue: "Swarm Intelligence Output / Model Inference Stream",
    gauge_api_left: "X API partition headroom",
    gauge_cost_used: "Burn boundary used",
    gauge_success_rate: "HTTP success ratio",
    gauge_minutes: "{count} min",
    gauge_items: "{count} items",
    gauge_percent: "{value}%",
    current_value: "current {value}",
    l7_24h_total: "{count} 24h L7 events",
    monitor_calls_summary: "{calls} calls · {failures} faults",
    alert_ok_title: "All traffic partitions nominal",
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
    governor_post_gate: "packet gate",
    governor_safe_cap: "safe cap",
    governor_safe_left: "safe left",
    governor_429: "429 partition",
    governor_503: "503 partition",
    governor_cooldown: "cooldown",
    governor_no_cooldown: "none",
    governor_cooldown_minutes: "{count} min",
    governor_runway_guard: "Runway Guard",
    governor_runway_clear: "clear",
    governor_runway_cached: "cached-only",
    governor_projected_reads: "projected reads",
    governor_daily_burn: "daily burn",
    governor_month_end: "month-end",
    governor_runway_days: "runway",
    governor_pressure: "circuit pressure",
    governor_mode: "circuit mode",
    governor_hottest: "hot partition",
    governor_next_action: "operator directive",
    governor_partitions: "partition matrix",
    governor_timeline: "cooldown timeline",
    governor_calls: "{count} calls",
    governor_failures: "{count} failures",
    governor_cost: "{amount} spend",
    governor_last_status: "last HTTP {status}",
    governor_no_status: "no status",
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
    budget_alloc_text: "text packet experiment",
    budget_alloc_media: "media packet surge",
    budget_alloc_metrics: "metrics refresh",
    budget_alloc_live: "live X search",
    budget_alloc_open: "open",
    budget_alloc_guarded: "guarded",
    budget_alloc_closed: "closed",
    budget_alloc_sealed: "sealed",
    budget_alloc_cached_only: "cached only",
    mission_eyebrow: "NOC Console",
    mission_title: "Live server-matrix operations.",
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
    followers: "Ingress Node Strength (Active Conns)",
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
    inference_purpose_fallback: "manual_route_outputs",
    inference_status_ok: "model stream nominal",
    inference_status_watch: "model stream watch",
    inference_model_calls: "{count} calls",
    inference_token_short: "{count} tok",
    inference_success: "ACK",
    inference_pipeline: "inference pipeline",
    inference_purpose_bus: "purpose bus",
    inference_output_bus: "output bus",
    inference_zero_calls: "0 new model calls",
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
    flight_eyebrow: "Operator Flight Deck",
    flight_title: "Zero-read execution chain",
    flight_zero_reads: "0 X read ops",
    flight_score: "command score",
    flight_route: "route",
    flight_target: "target",
    flight_runway: "runway",
    flight_saved: "compressed",
    flight_copy: "Copy flight deck",
    flight_open: "Open route",
    flight_gates: "gates",
    flight_phases: "phases",
    flight_packets: "packets",
    flight_mode_armed_manual_dispatch: "armed",
    flight_mode_operator_review: "review",
    flight_mode_route_queue_fault: "route fault",
    dispatch_sla: "SLA {minutes}m",
    dispatch_replies: "{count} route ops",
    dispatch_expected: "+{lift}% expected lift",
    dispatch_zero_reads: "0 X read ops",
    dispatch_runbook: "Operator runbook",
    dispatch_empty: "No dispatch missions queued.",
    daily_console_eyebrow: "Daily Execution Console",
    daily_console_title: "Zero-read operator fire-control",
    daily_console_ready: "ready lanes",
    daily_console_target: "route ops",
    daily_console_reads: "X read ops",
    daily_console_sla: "SLA",
    daily_console_primary: "primary command",
    daily_console_payload: "paste payload",
    daily_console_guardrails: "guardrails",
    daily_console_copy: "Copy console",
    daily_console_copy_payload: "Copy payload",
    daily_console_open: "Open route",
    paste_queue_eyebrow: "Operator Paste Queue",
    paste_queue_title: "One-click manual route loop",
    paste_queue_ready: "ready tasks",
    paste_queue_target: "route ops",
    paste_queue_reads: "X read ops",
    paste_queue_mode: "operator mode",
    paste_queue_next: "next move",
    paste_queue_tasks: "paste tasks",
    paste_queue_rules: "operator rules",
    paste_queue_copy: "Copy queue",
    paste_queue_copy_payload: "Copy payload",
    paste_queue_open: "Open route",
    paste_queue_payload: "payload",
    paste_queue_skip: "skip",
    paste_queue_done: "done",
    paste_queue_mark_done: "Mark done",
    paste_queue_mark_skip: "Skip",
    paste_queue_reset: "Reset queue",
    paste_queue_progress: "{done} done · {skipped} skipped",
    paste_queue_saved: "Queue state saved",
    paste_queue_reset_done: "Queue reset",
    paste_queue_events: "local event stream",
    paste_queue_events_empty: "No local queue events yet.",
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
    target_atlas_eyebrow: "Manual Target Atlas",
    target_atlas_title: "Zero-read route map",
    target_atlas_ready: "Targets ready",
    target_atlas_reply_target: "Route target",
    target_atlas_x_reads: "X read ops",
    target_atlas_cost: "Incremental X API",
    target_atlas_top: "Primary route",
    target_atlas_policy: "Read policy",
    target_atlas_targets: "Target routes",
    target_atlas_guardrails: "Guardrails",
    target_atlas_score: "score",
    target_atlas_sla: "SLA",
    target_atlas_freshness: "fresh",
    target_atlas_copy: "Copy atlas",
    target_atlas_copy_route: "Copy route",
    target_atlas_empty: "No manual target atlas available.",
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
    operator_event_skipped: "route skipped",
    operator_event_queue_done: "queue task done",
    operator_event_queue_skipped: "queue task skipped",
    operator_event_queue_reset: "queue reset",
    operator_event_cleared: "state cleared",
    operator_event_pending: "step reopened",
    operator_event_reset: "protocol reset",
    operator_slo_eyebrow: "Distribution SLO",
    operator_slo_title: "Manual distribution service level",
    operator_slo_status_ok: "within boundary",
    operator_slo_status_warn: "needs operator",
    operator_slo_status_danger: "partition degraded",
    operator_slo_latency: "completion budget",
    operator_slo_target: "route target",
    operator_slo_lift: "expected lift",
    operator_slo_score: "score model",
    operator_slo_budget: "cost per route op",
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
    metric_api_remaining: "X API partition headroom",
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
    kinetics_eyebrow: "Traffic Kinetics",
    kinetics_title: "L7 load controller",
    kinetics_score: "Kinetic score",
    kinetics_zero_reads: "0 X read ops",
    kinetics_mode_starved: "starved",
    kinetics_mode_ignition: "ignition",
    kinetics_mode_acceleration: "acceleration",
    kinetics_mode_compounding: "compounding",
    kinetics_empty: "No traffic kinetics telemetry available.",
    runway_eyebrow: "Runway Simulator",
    runway_title: "Milestone compression model",
    runway_zero_reads: "0 X read ops",
    runway_recommended: "recommended lane",
    runway_baseline: "baseline",
    runway_projected: "simulated",
    runway_saved: "compressed",
    runway_lanes: "runway lanes",
    runway_confidence: "confidence",
    runway_lift: "lift",
    runway_cost: "cost",
    runway_empty: "No runway simulation telemetry available.",
    runway_mode_sample_starved: "sample-starved",
    runway_mode_route_acceleration: "route acceleration",
    runway_mode_cadence_acceleration: "cadence acceleration",
    runway_mode_roi_guarded_surge: "ROI guarded",
    runway_mode_budget_containment: "budget containment",
    learning_eyebrow: "Feedback Layer",
    learning_title: "Next inference rule to deploy",
    learning_contract_eyebrow: "Cached Learning Contract",
    learning_contract_title: "Zero-read policy bus",
    learning_contract_zero_reads: "0 X read ops",
    learning_contract_primary: "Primary arm",
    learning_contract_explore: "Explore arm",
    learning_contract_hold: "Hold partition",
    learning_contract_selected: "Last selector",
    learning_contract_policy: "Policy patch",
    learning_contract_next: "Next command",
    learning_contract_guardrails: "Guardrails",
    learning_contract_copy: "Copy contract",
    learning_contract_empty: "No cached learning contract available.",
    autopilot_eyebrow: "Model Inference Stream",
    autopilot_mode: "Mode",
    autopilot_samples: "Samples",
    autopilot_baseline: "Baseline",
    autopilot_primary: "Primary rule",
    autopilot_directives: "Prompt directives",
    autopilot_exploit: "Exploit",
    autopilot_explore: "Explore",
    autopilot_hold: "Hold",
    directive_deck_eyebrow: "Autopilot Directive Deck",
    directive_deck_title: "Next operator kernel",
    directive_deck_zero_reads: "0 X read ops",
    directive_deck_active: "Active directive",
    directive_deck_score: "deck score",
    directive_deck_copy: "Copy deck",
    directive_deck_priority: "P{priority}",
    directive_deck_x_reads: "X reads {count}",
    directive_deck_empty: "No autopilot directive deck available.",
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
    hook_eyebrow: "Hook Pattern Reactor",
    hook_title: "First-line fire-control",
    hook_zero_reads: "0 X read ops",
    hook_recommended: "Recommended hook",
    hook_score: "Hook score",
    hook_samples: "n={count}",
    hook_avoid: "Avoid",
    hook_lift: "lift {lift}%",
    hook_prompt_patch: "Prompt patch",
    hook_copy_patch: "Copy patch",
    hook_empty: "No hook pattern reactor output available.",
    bandit_eyebrow: "Swarm Bandit Allocator",
    bandit_title: "Exploit / explore format router",
    bandit_zero_reads: "0 X read ops",
    bandit_primary: "Primary arm",
    bandit_explore: "Explore arm",
    bandit_confidence: "Confidence",
    bandit_explore_floor: "floor {pct}%",
    bandit_samples: "{count} samples",
    bandit_avg: "avg",
    bandit_samples_short: "n",
    bandit_ucb: "ucb",
    bandit_lift: "lift",
    bandit_prompt_patch: "Bandit patch",
    bandit_copy_patch: "Copy patch",
    bandit_empty: "No content bandit allocator output available.",
    settlement_eyebrow: "Reward Settlement Ledger",
    settlement_title: "Allocator reward reconciliation",
    settlement_zero_reads: "0 X read ops",
    settlement_best: "Best settled arm",
    settlement_regret: "Avg recent regret",
    settlement_regret_short: "regret",
    settlement_samples: "Samples",
    settlement_reward: "reward",
    settlement_recent: "recent",
    settlement_alloc: "alloc",
    settlement_actual: "actual",
    settlement_index: "index",
    settlement_recent_title: "Recent reward settlements",
    settlement_matched: "matched",
    settlement_empty: "No bandit reward settlement output available.",
    conn_eyebrow: "Active Conn Optimizer",
    conn_title: "Active-conn conversion fire-control",
    conn_zero_reads: "0 X read ops",
    conn_score: "Conversion score",
    conn_primary: "Primary lane",
    conn_next: "Next route bias",
    conn_conn1k: "conn / 1k",
    conn_profile_proxy: "intent proxy",
    conn_delta: "conn delta",
    conn_lanes: "Conversion lanes",
    conn_gates: "Control gates",
    conn_directives: "Prompt directives",
    conn_samples: "{count} samples",
    conn_kind: "kind",
    conn_empty: "No active-conn conversion optimizer output available.",
    narrative_eyebrow: "Narrative Resonance Controller",
    narrative_title: "Account-memory fire-control",
    narrative_zero_reads: "0 X read ops",
    narrative_score: "Resonance score",
    narrative_primary: "Primary pillar",
    narrative_next: "Next memory bias",
    narrative_promise: "Account promise",
    narrative_pillars: "Narrative pillars",
    narrative_share: "share",
    narrative_target: "target",
    narrative_avg: "avg",
    narrative_samples: "n",
    narrative_ack: "ACK %",
    narrative_directives: "Prompt directives",
    narrative_guardrails: "Guardrails",
    narrative_empty: "No narrative resonance telemetry available.",
    timing_eyebrow: "Topic Timing Router",
    timing_title: "UTC pillar / format fire-control",
    timing_zero_reads: "0 X read ops",
    timing_score: "Router score",
    timing_active: "Active lane",
    timing_next: "Next publish bias",
    timing_lanes: "Timing lanes",
    timing_window: "UTC",
    timing_pillar: "pillar",
    timing_format: "format",
    timing_load: "L7",
    timing_samples: "n",
    timing_avg: "avg",
    timing_ack: "ACK %",
    timing_directives: "Prompt directives",
    timing_guardrails: "Guardrails",
    timing_empty: "No topic timing router telemetry available.",
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
    angle_router_eyebrow: "Angle Load Router",
    angle_router_title: "Hourly prompt fire-control bus",
    angle_router_zero_reads: "0 X read ops",
    angle_router_active: "active route",
    angle_router_score: "router score",
    angle_router_load: "L7 load",
    angle_router_gate: "control gates",
    angle_router_lanes: "route lanes",
    angle_router_directive: "command packet",
    angle_router_empty: "No angle load router telemetry available.",
    angle_router_mode_cached_angle_load_router: "cached angle router",
    opportunity_fusion_eyebrow: "Opportunity Fusion Reactor",
    opportunity_fusion_title: "Next-best traffic fire-control",
    opportunity_fusion_zero_reads: "0 X read ops",
    opportunity_fusion_score: "opportunity score",
    opportunity_fusion_active: "active opportunity",
    opportunity_fusion_command: "primary command",
    opportunity_fusion_lanes: "fusion lanes",
    opportunity_fusion_sources: "sources",
    opportunity_fusion_format: "format",
    opportunity_fusion_pillar: "pillar",
    opportunity_fusion_window: "UTC",
    opportunity_fusion_samples: "n",
    opportunity_fusion_confidence: "confidence",
    opportunity_fusion_read_gate: "read gate",
    opportunity_fusion_publish_gate: "publish gate",
    opportunity_fusion_directives: "Prompt directives",
    opportunity_fusion_guardrails: "Guardrails",
    opportunity_fusion_empty: "No opportunity fusion telemetry available.",
    opportunity_fusion_breakdown: "score breakdown",
    opportunity_fusion_breakdown_formula: "formula",
    opportunity_fusion_breakdown_avg: "avg",
    opportunity_fusion_breakdown_lanes: "lanes",
    opportunity_fusion_breakdown_hot: "hot",
    opportunity_fusion_mode_derived_cached_opportunity_fusion: "cached opportunity fusion",
    opportunity_fusion_mode_cached_opportunity_fusion: "cached opportunity fusion",
    opportunity_fusion_mode_opportunity_fusion_warmup: "fusion warmup",
    commander_eyebrow: "Next Window Commander",
    commander_title: "Zero-read fire-control packet",
    commander_zero_reads: "0 X read ops",
    commander_score: "command score",
    commander_window: "UTC window",
    commander_angle: "angle",
    commander_gate: "publish gate",
    commander_route: "manual route",
    commander_copy: "Copy command",
    commander_open: "Open route",
    commander_gates: "hard gates",
    commander_lanes: "signal lanes",
    commander_checklist: "execution checklist",
    commander_empty: "No next-window commander telemetry available.",
    best_hook: "Winning rule",
    worst_format: "Weakest format",
    best_source: "Best source",
    next_experiment: "Next experiment",
    experiment_plan: "Experiment allocation",
    experiment_budget: "{safe}/{total} budget-safe slots",
    experiment_empty: "No experiment allocation yet.",
    experiment_hold: "Hold",
    experiment_slot: "slot {slot}",
    control_eyebrow: "Traffic Control Plane",
    control_title: "Next operating mode",
    control_pressure: "traffic pressure",
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
    flywheel_eyebrow: "Route Flywheel Matrix",
    flywheel_title: "Zero-read route control loop",
    flywheel_velocity: "Velocity score",
    flywheel_rules: "Execution rules",
    flywheel_burst: "{replies} route ops · +{lift}% expected lift · {route}",
    flywheel_loop: "loop k",
    flywheel_ack: "ACK %",
    flywheel_route: "route %",
    flywheel_swarm: "swarm %",
    flywheel_bottleneck: "bottleneck",
    flywheel_edge_bus: "edge bus",
    flywheel_mode_reply_burst: "route burst",
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
    loop_write_detail: "Generate copy-ready outputs and sharper packet formats.",
    loop_route: "Route",
    loop_route_detail: "Send the operator to high-throughput conversations.",
    loop_learn: "Learn",
    loop_learn_detail: "Feed metrics back into tomorrow's style choices.",
    daily_action_title: "Today: 3 operator route ops",
    daily_action_copy: "Open the first target, paste the prepared output, then repeat the next two. No extra X API reads.",
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
    failures: "{count} faults",
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
    page_title: "CODEX SRE 流量指挥中心",
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
    grafana_title: "1 Node Exporter: CODEX 流量矩阵",
    grafana_window: "最近 24 小时",
    story_eyebrow: "Expo 简报",
    story_title: "零浪费控制闭环",
    story_outcome_score: "0 次 X 读取操作",
    story_outcome_copy: "群体推理、路由队列和反馈闭环在线运行，同时不增加 X 搜索/读取调用。",
    outcome_extra_reads: "X 读取操作",
    outcome_replies_ready: "群体输出",
    outcome_api_left: "X API 余量",
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
    cadence_status_publish: "{mode} · 主数据包已装载",
    cadence_status_hold: "{mode} · 先做人工分发",
    arbiter_eyebrow: "发布仲裁器",
    arbiter_title: "下一条数据包的火控闸门",
    arbiter_zero_reads: "0 次 X 读取",
    arbiter_status_armed: "已装载",
    arbiter_status_review: "待复核",
    arbiter_status_sealed: "已封锁",
    arbiter_publish_gate: "发布闸门",
    arbiter_next_window: "发射窗口",
    arbiter_topic_lane: "题材通道",
    arbiter_next_action: "运行手册",
    arbiter_time_to_fire: "倒计时",
    arbiter_router_score: "路由评分",
    arbiter_no_lane: "无激活通道",
    arbiter_topic_gate: "题材时机",
    arbiter_budget_gate: "预算",
    arbiter_interval_gate: "间隔",
    arbiter_hourly_gate: "UTC 负载",
    arbiter_telemetry_gate: "遥测",
    arbiter_experiment_gate: "实验槽",
    arbiter_gate_ok: "放行",
    arbiter_gate_watch: "观察",
    arbiter_mode: "模式",
    arbiter_enforcement: "执行",
    runlog_cadence: "cadence.control",
    runlog_eyebrow: "任务日志",
    runlog_ready: "操作者就绪",
    runlog_ingest: "rss.ingest",
    runlog_score: "ranker.score",
    runlog_queue: "swarm.output",
    runlog_cost: "cost.guard",
    runlog_learn: "learning.writeback",
    mission_control_eyebrow: "任务控制脊柱",
    mission_control_title: "入口 SLO 控制平面",
    mission_control_nominal: "任务正常",
    mission_control_watch: "任务观察",
    mission_control_fault: "任务故障",
    mission_control_score: "任务评分",
    mission_control_milestone: "活跃连接里程碑",
    mission_control_remaining: "剩余 {count}",
    mission_control_projected: "预计 {days}",
    mission_control_next: "下一步操作",
    mission_control_zero_reads: "0 次 X 读取操作",
    mission_control_no_route: "路由通道待命",
    command_strip_eyebrow: "自动驾驶命令条",
    command_strip_title: "控制内核已装载",
    command_strip_zero_reads: "0 次 X 读取",
    command_strip_score: "内核评分",
    command_strip_active: "当前路由指令",
    command_strip_copy: "复制内核",
    command_strip_empty: "自动驾驶内核等待遥测。",
    event_stream_eyebrow: "遥测事件流",
    event_stream_title: "NOC 事件总线",
    event_stream_nominal: "事件总线正常",
    event_stream_watch: "边界观察",
    event_stream_fault: "故障分区",
    event_stream_zero_reads: "0 次 X 读取操作",
    event_http_title: "HTTP 状态分诊",
    event_cost_title: "成本边界反应堆",
    event_control_title: "流量控制平面",
    event_queue_title: "群体智能输出队列",
    event_learning_title: "学习写回",
    event_l7_title: "L7 流量负载",
    event_http_detail: "{calls} 次调用 · {failures} 次故障 · 失败率 {rate}%",
    event_cost_detail: "安全剩余 {left} · 续航 {runway} · 月底 {monthEnd}",
    event_control_detail: "读取 {readGate} · 数据包 {publishGate} · 压力 {pressure}%",
    event_queue_detail: "{missions} 个路由动作 · {drafts} 条输出 · 零读取通道",
    event_learning_detail: "已测量 {posts} 个数据包 · 基线 {score}",
    event_l7_detail: "24h {impressions} 个 L7 事件 · 动能 {score}",
    http_triage_eyebrow: "HTTP 状态分诊",
    http_triage_title: "429 / 503 / 授权分区防火墙",
    http_triage_success: "成功率",
    http_triage_active_faults: "活跃故障",
    http_triage_read_gate: "读取闸门",
    http_triage_zero_reads: "0 次实时 X 读取",
    http_triage_fault_bus: "故障总线",
    http_triage_endpoint_bus: "端点总线",
    http_triage_status_matrix: "状态矩阵",
    http_triage_no_faults: "无活跃故障分区。缓存路由保持安全。",
    http_triage_last_status: "最后 HTTP {status}",
    http_triage_calls: "{count} 次调用",
    http_triage_runbook: "运行手册",
    http_triage_read_cached: "仅缓存",
    http_triage_read_closed: "封闭",
    http_triage_read_review: "复核",
    http_status_success2xx: "2xx 成功",
    http_status_client4xx: "4xx 客户端",
    http_status_auth4xx: "401/403 授权",
    http_status_rateLimit429: "429 限流",
    http_status_backend5xx: "5xx 后端",
    reactor_hud_eyebrow: "反应堆 HUD",
    reactor_hud_title: "反应堆火控总线",
    reactor_hud_zero_reads: "0 次实时 X 读取",
    reactor_hud_core_score: "压力",
    reactor_hud_primary_command: "主指令",
    reactor_hud_safeguards: "安全护栏",
    reactor_hud_ingress: "L7 入口",
    reactor_hud_ack_rate: "ACK 率",
    reactor_hud_outputs: "输出",
    reactor_hud_route_ops: "路由操作",
    reactor_hud_learning: "学习样本",
    reactor_hud_cost: "成本剩余",
    reactor_hud_read_gate: "读取",
    reactor_hud_publish_gate: "发布",
    reactor_hud_format: "格式",
    reactor_hud_hook: "钩子",
    reactor_hud_signal_trace: "信号轨迹",
    reactor_hud_safe_loop: "安全闭环",
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
    decision_trace_router_bus: "角度负载路由器",
    decision_trace_router_active: "活动时隙",
    decision_trace_router_ranked: "排序格式",
    decision_trace_router_score: "路由评分",
    decision_trace_router_load: "L7 负载",
    decision_trace_router_lanes: "路由通道",
    decision_trace_router_mode: "模式",
    decision_trace_router_empty: "还没有记录路由器 trace。",
    decision_trace_bandit: "老虎机",
    decision_trace_hook: "钩子",
    decision_trace_gate_state: "闸门状态",
    decision_trace_policy_bus: "Prompt 策略总线",
    decision_trace_policy_primary: "主格式",
    decision_trace_policy_avoid: "规避",
    decision_trace_policy_directives: "指令",
    decision_trace_policy_score: "策略",
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
    decision_trace_local_seed: "本地种子",
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
    monitor_firewall: "X API 断路器",
    firewall_zero_reads: "0 次实时 X 读取",
    firewall_read_gate: "读取闸门",
    firewall_publish_gate: "发帖闸门",
    firewall_runway: "续航",
    firewall_safe_left: "安全剩余",
    firewall_faults: "故障",
    firewall_sealed: "封闭分区",
    firewall_state_open: "断路器正常",
    firewall_state_review: "人工复核",
    firewall_state_sealed: "读取分区封闭",
    firewall_runbook_ok: "缓存遥测足够支撑下一轮人工路由。",
    firewall_runbook_warn: "保持可选读取封闭，把下一轮动作投到人工路由通道。",
    firewall_runbook_danger: "冷却和授权分区清除前，不要运行实时搜索/读取任务。",
    gauge_data_age: "遥测新鲜度",
    gauge_followers: "入口节点强度（活跃连接）",
    gauge_24h_impr: "L7 流量负载",
    gauge_signal_score: "排序器评分",
    gauge_reply_queue: "群体智能输出 / 模型推理流",
    gauge_api_left: "X API 分区余量",
    gauge_cost_used: "燃烧边界已用",
    gauge_success_rate: "HTTP 成功率",
    gauge_minutes: "{count} 分钟",
    gauge_items: "{count} 项",
    gauge_percent: "{value}%",
    current_value: "当前 {value}",
    l7_24h_total: "24h L7 事件 {count}",
    monitor_calls_summary: "{calls} 次调用 · {failures} 次故障",
    alert_ok_title: "流量分区全部正常",
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
    governor_post_gate: "数据包闸门",
    governor_safe_cap: "安全上限",
    governor_safe_left: "安全剩余",
    governor_429: "429 分区",
    governor_503: "503 分区",
    governor_cooldown: "冷却",
    governor_no_cooldown: "无",
    governor_cooldown_minutes: "{count} 分钟",
    governor_runway_guard: "续航闸门",
    governor_runway_clear: "清晰",
    governor_runway_cached: "仅缓存",
    governor_projected_reads: "预计读取",
    governor_daily_burn: "日烧钱",
    governor_month_end: "月底投影",
    governor_runway_days: "续航",
    governor_pressure: "电路压力",
    governor_mode: "电路模式",
    governor_hottest: "高压分区",
    governor_next_action: "操作员指令",
    governor_partitions: "分区矩阵",
    governor_timeline: "冷却时间线",
    governor_calls: "{count} 次调用",
    governor_failures: "{count} 次失败",
    governor_cost: "{amount} 花费",
    governor_last_status: "最后 HTTP {status}",
    governor_no_status: "无状态",
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
    budget_alloc_text: "文本数据包实验",
    budget_alloc_media: "媒体数据包加速",
    budget_alloc_metrics: "指标刷新",
    budget_alloc_live: "实时 X 搜索",
    budget_alloc_open: "开放",
    budget_alloc_guarded: "受控",
    budget_alloc_closed: "关闭",
    budget_alloc_sealed: "封闭",
    budget_alloc_cached_only: "仅缓存",
    mission_eyebrow: "NOC 控制台",
    mission_title: "实时服务器矩阵运维。",
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
    followers: "入口节点强度（活跃连接）",
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
    inference_purpose_fallback: "人工路由输出",
    inference_status_ok: "模型流正常",
    inference_status_watch: "模型流观察",
    inference_model_calls: "{count} 次调用",
    inference_token_short: "{count} tok",
    inference_success: "ACK",
    inference_pipeline: "推理管线",
    inference_purpose_bus: "用途总线",
    inference_output_bus: "输出总线",
    inference_zero_calls: "0 次新增模型调用",
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
    flight_eyebrow: "操作员飞行甲板",
    flight_title: "零读取执行链",
    flight_zero_reads: "0 次 X 读取",
    flight_score: "指挥评分",
    flight_route: "路由",
    flight_target: "目标",
    flight_runway: "续航",
    flight_saved: "压缩",
    flight_copy: "复制飞行甲板",
    flight_open: "打开路由",
    flight_gates: "闸门",
    flight_phases: "阶段",
    flight_packets: "数据包",
    flight_mode_armed_manual_dispatch: "已装载",
    flight_mode_operator_review: "待复核",
    flight_mode_route_queue_fault: "路由故障",
    dispatch_sla: "SLA {minutes} 分钟",
    dispatch_replies: "{count} 次路由操作",
    dispatch_expected: "预期提升 +{lift}%",
    dispatch_zero_reads: "0 次 X 读取",
    dispatch_runbook: "操作手册",
    dispatch_empty: "暂无派发任务。",
    daily_console_eyebrow: "每日执行控制台",
    daily_console_title: "零读取人工火控",
    daily_console_ready: "就绪通道",
    daily_console_target: "路由操作",
    daily_console_reads: "X 读取操作",
    daily_console_sla: "SLA",
    daily_console_primary: "主指令",
    daily_console_payload: "粘贴载荷",
    daily_console_guardrails: "护栏",
    daily_console_copy: "复制控制台",
    daily_console_copy_payload: "复制载荷",
    daily_console_open: "打开路由",
    paste_queue_eyebrow: "操作员粘贴队列",
    paste_queue_title: "一键人工路由循环",
    paste_queue_ready: "就绪任务",
    paste_queue_target: "路由操作",
    paste_queue_reads: "X 读取操作",
    paste_queue_mode: "操作员模式",
    paste_queue_next: "下一步",
    paste_queue_tasks: "粘贴任务",
    paste_queue_rules: "操作规则",
    paste_queue_copy: "复制队列",
    paste_queue_copy_payload: "复制载荷",
    paste_queue_open: "打开路由",
    paste_queue_payload: "载荷",
    paste_queue_skip: "跳过",
    paste_queue_done: "完成",
    paste_queue_mark_done: "标记完成",
    paste_queue_mark_skip: "跳过",
    paste_queue_reset: "重置队列",
    paste_queue_progress: "已完成 {done} · 已跳过 {skipped}",
    paste_queue_saved: "队列状态已保存",
    paste_queue_reset_done: "队列已重置",
    paste_queue_events: "本地事件流",
    paste_queue_events_empty: "暂无本地队列事件。",
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
    target_atlas_eyebrow: "人工目标星图",
    target_atlas_title: "零读取路由地图",
    target_atlas_ready: "就绪目标",
    target_atlas_reply_target: "路由目标",
    target_atlas_x_reads: "X 读取操作",
    target_atlas_cost: "增量 X API",
    target_atlas_top: "主路由",
    target_atlas_policy: "读取策略",
    target_atlas_targets: "目标路由",
    target_atlas_guardrails: "护栏",
    target_atlas_score: "评分",
    target_atlas_sla: "SLA",
    target_atlas_freshness: "新鲜度",
    target_atlas_copy: "复制星图",
    target_atlas_copy_route: "复制路由",
    target_atlas_empty: "暂无人工目标星图。",
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
    operator_event_skipped: "路由已跳过",
    operator_event_queue_done: "队列任务完成",
    operator_event_queue_skipped: "队列任务跳过",
    operator_event_queue_reset: "队列重置",
    operator_event_cleared: "状态已清除",
    operator_event_pending: "步骤重开",
    operator_event_reset: "协议重置",
    operator_slo_eyebrow: "分发 SLO",
    operator_slo_title: "人工分发服务等级",
    operator_slo_status_ok: "边界内",
    operator_slo_status_warn: "需要操作员",
    operator_slo_status_danger: "分区降级",
    operator_slo_latency: "完成预算",
    operator_slo_target: "路由目标",
    operator_slo_lift: "预期增益",
    operator_slo_score: "评分模型",
    operator_slo_budget: "单次路由操作成本",
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
    metric_api_remaining: "X API 分区余量",
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
    kinetics_eyebrow: "流量动力学",
    kinetics_title: "L7 负载控制器",
    kinetics_score: "动能评分",
    kinetics_zero_reads: "0 次 X 读取",
    kinetics_mode_starved: "缺流量",
    kinetics_mode_ignition: "点火",
    kinetics_mode_acceleration: "加速",
    kinetics_mode_compounding: "复利",
    kinetics_empty: "暂无流量动力学遥测。",
    runway_eyebrow: "续航模拟器",
    runway_title: "里程碑压缩模型",
    runway_zero_reads: "0 次 X 读取",
    runway_recommended: "推荐通道",
    runway_baseline: "基线",
    runway_projected: "模拟后",
    runway_saved: "压缩",
    runway_lanes: "续航通道",
    runway_confidence: "置信度",
    runway_lift: "提升",
    runway_cost: "成本",
    runway_empty: "暂无续航模拟遥测。",
    runway_mode_sample_starved: "样本不足",
    runway_mode_route_acceleration: "路由加速",
    runway_mode_cadence_acceleration: "节奏加速",
    runway_mode_roi_guarded_surge: "ROI 受控",
    runway_mode_budget_containment: "预算收敛",
    learning_eyebrow: "反馈层",
    learning_title: "下一条要部署的推理规则",
    learning_contract_eyebrow: "缓存学习合约",
    learning_contract_title: "零读取策略总线",
    learning_contract_zero_reads: "0 次 X 读取",
    learning_contract_primary: "主臂",
    learning_contract_explore: "探索臂",
    learning_contract_hold: "暂停分区",
    learning_contract_selected: "上次选择器",
    learning_contract_policy: "策略补丁",
    learning_contract_next: "下一条命令",
    learning_contract_guardrails: "护栏",
    learning_contract_copy: "复制合约",
    learning_contract_empty: "暂无缓存学习合约。",
    autopilot_eyebrow: "模型推理流",
    autopilot_mode: "模式",
    autopilot_samples: "样本",
    autopilot_baseline: "基线",
    autopilot_primary: "主规则",
    autopilot_directives: "Prompt 指令",
    autopilot_exploit: "利用",
    autopilot_explore: "探索",
    autopilot_hold: "暂停",
    directive_deck_eyebrow: "自动驾驶指令组",
    directive_deck_title: "下一轮操作内核",
    directive_deck_zero_reads: "0 次 X 读取",
    directive_deck_active: "当前指令",
    directive_deck_score: "指令组评分",
    directive_deck_copy: "复制指令组",
    directive_deck_priority: "P{priority}",
    directive_deck_x_reads: "X 读取 {count}",
    directive_deck_empty: "暂无自动驾驶指令组。",
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
    hook_eyebrow: "Hook 模式反应堆",
    hook_title: "首句火控",
    hook_zero_reads: "0 次 X 读取",
    hook_recommended: "推荐开头",
    hook_score: "Hook 评分",
    hook_samples: "样本 {count}",
    hook_avoid: "避免",
    hook_lift: "增益 {lift}%",
    hook_prompt_patch: "Prompt 补丁",
    hook_copy_patch: "复制补丁",
    hook_empty: "暂无 Hook 模式反应堆输出。",
    bandit_eyebrow: "群体 Bandit 分配器",
    bandit_title: "利用 / 探索格式路由",
    bandit_zero_reads: "0 次 X 读取",
    bandit_primary: "主臂",
    bandit_explore: "探索臂",
    bandit_confidence: "置信度",
    bandit_explore_floor: "下限 {pct}%",
    bandit_samples: "{count} 个样本",
    bandit_avg: "均值",
    bandit_samples_short: "样本",
    bandit_ucb: "UCB",
    bandit_lift: "增益",
    bandit_prompt_patch: "Bandit 补丁",
    bandit_copy_patch: "复制补丁",
    bandit_empty: "暂无内容 Bandit 分配器输出。",
    settlement_eyebrow: "Reward 结算账本",
    settlement_title: "分配器收益对账",
    settlement_zero_reads: "0 次 X 读取",
    settlement_best: "最佳已结算臂",
    settlement_regret: "近期平均后悔值",
    settlement_regret_short: "后悔值",
    settlement_samples: "样本",
    settlement_reward: "收益",
    settlement_recent: "近期",
    settlement_alloc: "分配",
    settlement_actual: "实际",
    settlement_index: "指数",
    settlement_recent_title: "近期收益结算",
    settlement_matched: "命中",
    settlement_empty: "暂无 Bandit 收益结算输出。",
    conn_eyebrow: "活跃连接优化器",
    conn_title: "关注转化火控",
    conn_zero_reads: "0 次 X 读取",
    conn_score: "转化评分",
    conn_primary: "主通道",
    conn_next: "下一轮路由偏置",
    conn_conn1k: "每千次连接",
    conn_profile_proxy: "主页点击代理",
    conn_delta: "连接增量",
    conn_lanes: "转化通道",
    conn_gates: "控制闸门",
    conn_directives: "Prompt 指令",
    conn_samples: "{count} 个样本",
    conn_kind: "类型",
    conn_empty: "暂无活跃连接转化优化器输出。",
    narrative_eyebrow: "叙事共振控制器",
    narrative_title: "账号记忆火控",
    narrative_zero_reads: "0 次 X 读取",
    narrative_score: "共振评分",
    narrative_primary: "主叙事柱",
    narrative_next: "下一轮记忆偏置",
    narrative_promise: "账号承诺",
    narrative_pillars: "叙事柱",
    narrative_share: "占比",
    narrative_target: "目标",
    narrative_avg: "均值",
    narrative_samples: "样本",
    narrative_ack: "ACK %",
    narrative_directives: "Prompt 指令",
    narrative_guardrails: "护栏",
    narrative_empty: "暂无叙事共振遥测。",
    timing_eyebrow: "主题时间路由器",
    timing_title: "UTC 叙事 / 格式火控",
    timing_zero_reads: "0 次 X 读取",
    timing_score: "路由评分",
    timing_active: "活动通道",
    timing_next: "下一轮发布偏置",
    timing_lanes: "时间通道",
    timing_window: "UTC",
    timing_pillar: "叙事",
    timing_format: "格式",
    timing_load: "L7",
    timing_samples: "样本",
    timing_avg: "均值",
    timing_ack: "ACK %",
    timing_directives: "Prompt 指令",
    timing_guardrails: "护栏",
    timing_empty: "暂无主题时间路由遥测。",
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
    angle_router_eyebrow: "角度负载路由器",
    angle_router_title: "小时级 Prompt 火控总线",
    angle_router_zero_reads: "0 次 X 读取",
    angle_router_active: "活动路由",
    angle_router_score: "路由评分",
    angle_router_load: "L7 负载",
    angle_router_gate: "控制闸门",
    angle_router_lanes: "路由通道",
    angle_router_directive: "指令包",
    angle_router_empty: "暂无角度负载路由遥测。",
    angle_router_mode_cached_angle_load_router: "缓存角度路由",
    opportunity_fusion_eyebrow: "机会融合反应堆",
    opportunity_fusion_title: "下一最佳流量火控",
    opportunity_fusion_zero_reads: "0 次 X 读取",
    opportunity_fusion_score: "机会评分",
    opportunity_fusion_active: "活动机会",
    opportunity_fusion_command: "主指令",
    opportunity_fusion_lanes: "融合通道",
    opportunity_fusion_sources: "来源",
    opportunity_fusion_format: "格式",
    opportunity_fusion_pillar: "叙事",
    opportunity_fusion_window: "UTC",
    opportunity_fusion_samples: "样本",
    opportunity_fusion_confidence: "置信度",
    opportunity_fusion_read_gate: "读取闸门",
    opportunity_fusion_publish_gate: "发布闸门",
    opportunity_fusion_directives: "Prompt 指令",
    opportunity_fusion_guardrails: "护栏",
    opportunity_fusion_empty: "暂无机会融合遥测。",
    opportunity_fusion_breakdown: "评分拆解",
    opportunity_fusion_breakdown_formula: "公式",
    opportunity_fusion_breakdown_avg: "均值",
    opportunity_fusion_breakdown_lanes: "通道",
    opportunity_fusion_breakdown_hot: "热点",
    opportunity_fusion_mode_derived_cached_opportunity_fusion: "缓存机会融合",
    opportunity_fusion_mode_cached_opportunity_fusion: "缓存机会融合",
    opportunity_fusion_mode_opportunity_fusion_warmup: "融合预热",
    commander_eyebrow: "下一窗口指挥器",
    commander_title: "零读取火控指令包",
    commander_zero_reads: "0 次 X 读取",
    commander_score: "指挥评分",
    commander_window: "UTC 窗口",
    commander_angle: "角度",
    commander_gate: "发布闸门",
    commander_route: "人工路由",
    commander_copy: "复制指令",
    commander_open: "打开路由",
    commander_gates: "硬闸门",
    commander_lanes: "信号通道",
    commander_checklist: "执行清单",
    commander_empty: "暂无下一窗口指挥遥测。",
    best_hook: "胜出规则",
    worst_format: "最弱格式",
    best_source: "最佳来源",
    next_experiment: "下一轮实验",
    experiment_plan: "实验配额",
    experiment_budget: "{safe}/{total} 个预算安全槽位",
    experiment_empty: "暂无实验配额。",
    experiment_hold: "暂停",
    experiment_slot: "槽位 {slot}",
    control_eyebrow: "流量控制平面",
    control_title: "下一轮运行模式",
    control_pressure: "流量压力",
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
    flywheel_eyebrow: "路由飞轮矩阵",
    flywheel_title: "零读取路由控制闭环",
    flywheel_velocity: "速度评分",
    flywheel_rules: "执行规则",
    flywheel_burst: "{replies} 次路由操作 · 预期提升 +{lift}% · {route}",
    flywheel_loop: "循环 k",
    flywheel_ack: "ACK %",
    flywheel_route: "路由 %",
    flywheel_swarm: "群体 %",
    flywheel_bottleneck: "瓶颈",
    flywheel_edge_bus: "边总线",
    flywheel_mode_reply_burst: "路由爆发",
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
    loop_write_detail: "产出可复制输出和更锋利的数据包格式。",
    loop_route: "分发",
    loop_route_detail: "把操作者送到高吞吐对话入口。",
    loop_learn: "学习",
    loop_learn_detail: "把数据反馈到明天的风格选择。",
    daily_action_title: "今日：3 次操作员路由",
    daily_action_copy: "先打开第一个目标入口，粘贴准备好的输出，再重复后两项。不增加 X API 读取。",
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
    failures: "{count} 次故障",
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
    "The core packets are not the main bottleneck. At small-account scale, distribution starts only after early interaction.",
    "The bottleneck is entry into conversations, not packet volume.",
    "The current low-cost path is manual search links plus copied route outputs, avoiding extra X search/read API spend.",
  ],
  zh: [
    "核心数据包质量不算差，但小账号阶段缺少初始互动，单独派发很难被系统分发。",
    "瓶颈是分发入口，不是数据包数量。",
    "当前低成本路线是人工点网页搜索、复制输出，避免增加 X search/read API。",
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
const PASTE_QUEUE_STATE_PREFIX = "xbot-dashboard-paste-queue:";
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
        publish_experiment: compact ? "数据包" : "数据包实验",
        manual_distribution_only: compact ? "人工分发" : "仅人工分发",
        refresh_metrics_first: compact ? "刷新" : "先刷新数据",
        manual_override: compact ? "手动" : "手动覆盖",
        wait: compact ? "等待" : "等待窗口",
        wait_for_learned_peak: compact ? "等峰值" : "等待学习峰值",
        disabled: compact ? "关闭" : "控制器关闭",
      }
    : {
        publish_experiment: compact ? "packet" : "packet experiment",
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
      ? "Cadence allows the next packet dispatch."
      : "Derived cadence prefers manual distribution before another packet.",
    nextAction: publishAllowed
      ? "Proceed with the next packet candidate."
      : "Use manual route lanes and keep X API spend flat.",
    postsLast24h: posts,
    dailyPostTarget: target,
    safeTextPostsLeft: remaining > 0 ? Math.floor(remaining / 0.015) : 0,
  };
}

function cadenceCheck(cadence, id) {
  return (Array.isArray(cadence?.checks) ? cadence.checks : []).find((check) => check?.id === id) || null;
}

function publishArbiterData() {
  const cadence = cadenceData();
  const router = topicTimingRouterData();
  const topicWindow = cadence.topicTimingWindow || (router
    ? {
        mode: router.mode,
        severity: router.severity,
        routerScore: router.routerScore,
        trusted: router.severity !== "danger",
        hoursFromNow: router.activeLane?.hoursFromNow ?? null,
        activeLane: router.activeLane || null,
        nextAction: router.nextAction,
        zeroExtraXReads: Boolean(router.zeroExtraXReads),
      }
    : null);
  const activeLane = topicWindow?.activeLane || router?.activeLane || null;
  const severity = cadence.willBlockPublish ? "danger" : cadence.publishAllowed ? "ok" : "warn";
  const status = cadence.willBlockPublish
    ? t("arbiter_status_sealed")
    : cadence.publishAllowed
      ? t("arbiter_status_armed")
      : t("arbiter_status_review");
  const topicCheck = cadenceCheck(cadence, "topic_timing");
  const gates = [
    { id: "budget", label: t("arbiter_budget_gate"), check: cadenceCheck(cadence, "budget") },
    { id: "interval", label: t("arbiter_interval_gate"), check: cadenceCheck(cadence, "interval") },
    { id: "topic", label: t("arbiter_topic_gate"), check: topicCheck },
    { id: "hourly", label: t("arbiter_hourly_gate"), check: cadenceCheck(cadence, "hourly_window") },
    { id: "telemetry", label: t("arbiter_telemetry_gate"), check: cadenceCheck(cadence, "telemetry") },
    { id: "experiments", label: t("arbiter_experiment_gate"), check: cadenceCheck(cadence, "experiments") },
  ].map((gate) => ({
    id: gate.id,
    label: gate.label,
    ok: gate.check ? Boolean(gate.check.ok) : true,
    value: gate.check?.value || (gate.id === "topic" && activeLane ? `${activeLane.windowLabel || "-"} UTC` : "-"),
    detail: gate.check?.detail || (gate.id === "topic" ? topicWindow?.nextAction || router?.nextAction || "-" : "-"),
  }));
  const routerScore = number(topicWindow?.routerScore, number(router?.routerScore, number(activeLane?.score)));
  const hoursFromNow = topicWindow?.hoursFromNow ?? activeLane?.hoursFromNow ?? null;
  return {
    cadence,
    router,
    topicWindow,
    activeLane,
    severity,
    status,
    gates,
    routerScore,
    hoursFromNow: Number.isFinite(number(hoursFromNow, NaN)) ? number(hoursFromNow) : null,
    zeroExtraXReads: topicWindow?.zeroExtraXReads !== false && router?.zeroExtraXReads !== false,
  };
}

function renderPublishArbiter() {
  const container = $("#publish-arbiter");
  if (!container) return;
  const data = publishArbiterData();
  const lane = data.activeLane || {};
  const score = clamp(number(data.routerScore), 0, 100);
  const gateOpen = data.cadence.publishAllowed && !data.cadence.willBlockPublish;
  const tMinus = data.hoursFromNow == null
    ? "-"
    : data.hoursFromNow <= 0
      ? "T+0"
      : `T-${formatNumber(data.hoursFromNow, 1)}h`;
  const laneLabel = data.activeLane
    ? `${lane.windowLabel || "-"} UTC · ${lane.pillarLabel || lane.pillarId || "-"} · ${lane.formatLabel || lane.formatId || "-"}`
    : t("arbiter_no_lane");
  container.innerHTML = `
    <article class="arbiter-panel ${escapeHtml(data.severity)}">
      <div class="arbiter-head">
        <div>
          <span>${escapeHtml(t("arbiter_eyebrow"))}</span>
          <strong>${escapeHtml(t("arbiter_title"))}</strong>
        </div>
        <em>${escapeHtml(data.zeroExtraXReads ? t("arbiter_zero_reads") : "X reads unknown")}</em>
      </div>
      <div class="arbiter-body">
        <div class="arbiter-core">
          <span>${escapeHtml(t("arbiter_publish_gate"))}</span>
          <strong>${escapeHtml(data.status)}</strong>
          <small>${escapeHtml(formatCadenceMode(data.cadence.mode))} · ${escapeHtml(data.cadence.reasonCode || "ok")}</small>
          <div class="arbiter-armature ${gateOpen ? "open" : "hold"}">
            <i></i><i></i><i></i>
          </div>
        </div>
        <div class="arbiter-radar" style="--arbiter-score:${score.toFixed(1)}%; --arbiter-deg:${(score * 1.8).toFixed(1)}deg">
          <span class="radar-ring one"></span>
          <span class="radar-ring two"></span>
          <span class="radar-sweep"></span>
          <span class="radar-core"></span>
          <span class="radar-node topic"></span>
          <span class="radar-node budget"></span>
          <span class="radar-node cadence"></span>
          <strong>${escapeHtml(formatNumber(score, 1))}</strong>
          <em>${escapeHtml(t("arbiter_router_score"))}</em>
        </div>
        <div class="arbiter-lane">
          <div>
            <span>${escapeHtml(t("arbiter_next_window"))}</span>
            <strong>${escapeHtml(lane.windowLabel ? `${lane.windowLabel} UTC` : "-")}</strong>
            <small>${escapeHtml(tMinus)}</small>
          </div>
          <div>
            <span>${escapeHtml(t("arbiter_topic_lane"))}</span>
            <strong>${escapeHtml(laneLabel)}</strong>
            <small>${escapeHtml(`${t("arbiter_mode")}: ${data.topicWindow?.mode || data.router?.mode || "-"}`)}</small>
          </div>
          <p><span>${escapeHtml(t("arbiter_next_action"))}</span>${escapeHtml(data.cadence.nextAction || data.topicWindow?.nextAction || data.router?.nextAction || "-")}</p>
        </div>
      </div>
      <div class="arbiter-gate-grid">
        ${data.gates.map((gate) => `
          <article class="${gate.ok ? "ok" : "warn"}">
            <span>${escapeHtml(gate.label)}</span>
            <strong>${escapeHtml(gate.ok ? t("arbiter_gate_ok") : t("arbiter_gate_watch"))}</strong>
            <em>${escapeHtml(gate.value || "-")}</em>
            <small>${escapeHtml(gate.detail || "-")}</small>
          </article>
        `).join("")}
      </div>
    </article>
  `;
}

const SIGNAL_NODE_ORDER = ["rss", "score", "draft", "x", "learn"];

const SIGNAL_NODE_COORDS = {
  rss: { x: 0.2, y: 0.34 },
  score: { x: 0.48, y: 0.22 },
  draft: { x: 0.22, y: 0.7 },
  x: { x: 0.72, y: 0.42 },
  learn: { x: 0.76, y: 0.69 },
};

const SIGNAL_NODE_BOUNDS = {
  default: { minX: 0.14, maxX: 0.86, minY: 0.16, maxY: 0.84 },
  rss: { minX: 0.16, maxX: 0.38, minY: 0.22, maxY: 0.48 },
  score: { minX: 0.34, maxX: 0.6, minY: 0.17, maxY: 0.34 },
  draft: { minX: 0.16, maxX: 0.4, minY: 0.58, maxY: 0.8 },
  x: { minX: 0.62, maxX: 0.78, minY: 0.32, maxY: 0.52 },
  learn: { minX: 0.64, maxX: 0.82, minY: 0.58, maxY: 0.8 },
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
    followers: "Ingress Node Strength",
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
    followers: "入口节点强度",
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
    .replace(/\bfollowers\b/gi, "active conns")
    .replace(/\bfollower\b/gi, "active conn")
    .replace(/\bmanual replies\b/gi, "manual route ops")
    .replace(/\buseful replies\b/gi, "high-signal route ops")
    .replace(/\bcopy-ready replies\b/gi, "queued swarm outputs")
    .replace(/\breply-ready\b/gi, "route-ready")
    .replace(/\breply text\b/gi, "output payload")
    .replace(/\breply output\b/gi, "route output")
    .replace(/\bposts\b/gi, "packets")
    .replace(/\bpost\b/gi, "packet")
    .replace(/\bimpressions\b/gi, "L7 events")
    .replace(/\bimpr\./gi, "L7")
    .replace(/\blikes\b/gi, "ACKs")
    .replace(/\blike\b/gi, "ACK")
    .replace(/\breplies\b/gi, "route ops")
    .replace(/\breply\b/gi, "route op")
    .replace(/\bfollows\b/gi, "follow mutations")
    .replace(/\bfollow\b(?!-)/gi, "follow mutation")
    .replace(/\bconversations\b/gi, "thread lanes")
    .replace(/\bconversation\b/gi, "thread lane")
    .replace(/\bthreads\b/gi, "thread lanes")
    .replace(/\bthread\b/gi, "thread lane")
    .replace(/\bsearch\/read budget\b/gi, "read partition budget")
    .replace(/\bsearch\/read API\b/gi, "read partition")
    .replace(/\bsearch\/read\b/gi, "read partition")
    .replace(/\bdrafts\b/gi, "outputs")
    .replace(/\bdraft\b/gi, "output");
  if (currentLang !== "zh") return enText;
  return enText
    .replace(/条帖子|条帖/g, "个数据包")
    .replace(/帖子/g, "数据包")
    .replace(/曝光/g, "L7 事件")
    .replace(/粉丝/g, "活跃连接")
    .replace(/点赞|赞/g, "ACK")
    .replace(/回复/g, "路由操作")
    .replace(/对话/g, "线程通道")
    .replace(/线程/g, "线程通道")
    .replace(/搜索\/读取/g, "读取分区")
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
      detail: `${endpointTotals.calls} API calls, ${endpointTotals.failures} faults`,
      x: 0.46,
      y: 0.54,
    },
    nodes: [
      { id: "rss", label: "RSS", value: rssValue, unit: "packets", detail: `${rssValue} recent packets`, health: "ok", ...SIGNAL_NODE_COORDS.rss },
      { id: "score", label: "SCORE", value: Number(bestScore.toFixed(1)), unit: "rank", detail: `${measuredPosts} packets measured`, health: measuredPosts ? "ok" : "warn", ...SIGNAL_NODE_COORDS.score },
      { id: "draft", label: "SWARM_OUT", value: drafts.length, unit: "outputs", detail: `${drafts.length} queued outputs`, health: drafts.length ? "ok" : "warn", ...SIGNAL_NODE_COORDS.draft },
      { id: "x", label: "X_ROUTE", value: actions.length, unit: "web routes", detail: `${actions.length} web routes; 0 X read ops`, health: actions.length ? "ok" : "warn", ...SIGNAL_NODE_COORDS.x },
      { id: "learn", label: "LEARN", value: measuredPosts, unit: "packets", detail: `${measuredPosts} measured outcomes`, health: measuredPosts ? "ok" : "warn", ...SIGNAL_NODE_COORDS.learn },
    ],
    routes: [
      { from: "rss", to: "score", value: rssValue, unit: "packets", label: "packets ranked" },
      { from: "score", to: "draft", value: drafts.length || 1, unit: "outputs", label: "scores shape outputs" },
      { from: "score", to: "x", value: actions.length || 1, unit: "web routes", label: "scores route manual actions" },
      { from: "draft", to: "x", value: drafts.length || 1, unit: "outputs", label: "outputs paste into X" },
      { from: "x", to: "learn", value: measuredPosts || 1, unit: "packets", label: "outcomes measured" },
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

function signalMapNodes(map = {}, derived = buildDerivedSignalMap()) {
  const fallbackNodes = new Map((derived.nodes || []).map((node) => [node.id, node]));
  const incomingNodes = new Map((map.nodes || []).map((node) => [node.id, node]));
  const orderedNodeIds = [
    ...SIGNAL_NODE_ORDER,
    ...[...incomingNodes.keys()].filter((nodeId) => !SIGNAL_NODE_ORDER.includes(nodeId)),
  ];
  return orderedNodeIds
    .map((nodeId) => {
      const fallbackNode = fallbackNodes.get(nodeId) || { id: nodeId };
      const incomingNode = incomingNodes.get(nodeId) || {};
      return { ...fallbackNode, ...incomingNode, id: nodeId };
    })
    .filter((node) => node.id);
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
  const derived = buildDerivedSignalMap();
  const map = incoming?.nodes?.length ? incoming : derived;
  const nodes = signalMapNodes(map, derived).map((node) => {
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

function localizeDraftMeta(draft, fallbackTitle = "Relevant tech packet") {
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
      { id: "target", label: "route target", value: `${missions.length}/day`, status: "ok" },
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
      { id: "reply_latency", label: "operator SLA", value: `${formatNumber(completionBudgetMinutes)} min`, status: completionBudgetMinutes <= 45 ? "ok" : "warn", detail: `${formatNumber(targetReplies)} route ops inside the daily traffic loop` },
      { id: "x_read_burn", label: "X read burn", value: "0 ops", status: "ok", detail: "manual web routes do not consume X search/read budget" },
      { id: "learning_writeback", label: "learning writeback", value: `${formatNumber(dashboardData.profile?.measuredPosts || fallbackData.profile.measuredPosts)} packets`, status: "ok", detail: `baseline score ${formatNumber(baselineScore, 1)} -> expected ${formatNumber(expectedScore, 1)}` },
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
      "Open routes in X web; do not call recent_search for manual route ops.",
      "Paste only useful route ops under active technical threads; stop at target count.",
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
    `Target: ${formatNumber(targetReplies)} high-signal route ops · expected lift +${formatNumber(expectedLiftPct, 1)}%`,
    "",
    "Protocol:",
    "1. Open the top X web route; use live recency in the browser only.",
    "2. Pick technical conversations with active exchange and clear topic fit.",
    "3. Paste one useful route op, lightly edit for context, then move to the next route.",
    "4. Stop at the target count; metrics write back on the next maintenance run.",
    "",
    "Packets:",
    ...packets.flatMap((packet) => [
      `${packet.priority}. ${packet.routeLabel} · SLA ${formatNumber(packet.operatorSlaMinutes)}m · target ${formatNumber(packet.targetReplies)} · ${packet.ready ? "READY" : "MISSING_ROUTE_OR_DRAFT"}`,
      packet.reason ? `Why: ${packet.reason}` : null,
      packet.routeUrl ? `Route: ${packet.routeUrl}` : null,
      packet.draftText ? `Output: ${packet.draftText}` : null,
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
      ? `Open ${packets[0].routeLabel} in X web, paste the first ready output, then stop at ${formatNumber(targetReplies)} useful route ops.`
      : "Generate or refresh manual route outputs before dispatching.",
    copyBlock,
    checks: [
      { id: "x_reads", label: "X read partition", value: "0 ops", status: "ok", detail: "Manual web routes do not call recent_search." },
      { id: "budget", label: "cost boundary", value: money(api.remaining), status: api.remaining > 0 ? "ok" : "danger", detail: "No incremental X API cost for the dispatch packet." },
      { id: "queue", label: "route queue", value: `${readyPackets}/${packets.length}`, status: severity, detail: "Route URL and output payload are present." },
    ],
    packets,
  };
}

function dailyExecutionConsoleData(
  packet = operatorDispatchPacketData(),
  routeAmplifier = routeAmplifierData(packet),
  manualTargetAtlas = manualReplyTargetAtlasData(packet, routeAmplifier),
  ops = distributionOpsData(),
) {
  const incoming = dashboardData.dailyExecutionConsole || fallbackData.dailyExecutionConsole;
  if (incoming?.rows?.length) return incoming;
  const packets = Array.isArray(packet?.packets) ? packet.packets : [];
  const atlasTargets = Array.isArray(manualTargetAtlas?.targets) ? manualTargetAtlas.targets : [];
  const missions = Array.isArray(ops?.missions) ? ops.missions : [];
  const lanes = Array.isArray(routeAmplifier?.lanes) ? routeAmplifier.lanes : [];
  const source = packets.length ? packets : atlasTargets.length ? atlasTargets : missions;
  const targetReplies = number(packet?.targetReplies, number(manualTargetAtlas?.totalTargetReplies, number(ops?.manualReplyTarget, 3)));
  const rows = source.slice(0, 5).map((item, index) => {
    const matchingLane =
      lanes.find((lane) => lane.id === item.id || lane.routeUrl === item.routeUrl || lane.label === item.routeLabel) ||
      lanes[index] ||
      null;
    const routeLabel = item.routeLabel || item.label || matchingLane?.label || `Route ${index + 1}`;
    const routeUrl = item.routeUrl || matchingLane?.routeUrl || null;
    const replyText = item.replyText || item.draftText || "";
    const ready = Boolean(routeUrl && replyText);
    return {
      id: item.id || `daily:${index + 1}`,
      priority: number(item.priority, number(item.rank, index + 1)),
      status: ready ? (matchingLane?.status || item.status || "ok") : "warn",
      ready,
      routeLabel,
      routeUrl,
      replyText,
      replyAngle: item.replyAngle || item.draftAngle || item.angle || "",
      reason: item.reason || item.evidence || matchingLane?.reason || "",
      targetReplies: Math.max(1, number(item.targetReplies, number(matchingLane?.targetReplies, 1))),
      operatorSlaMinutes: Math.max(5, number(item.operatorSlaMinutes, number(matchingLane?.operatorSlaMinutes, 10 + index * 10))),
      expectedLiftPct: number(item.expectedLiftPct, number(matchingLane?.expectedLiftPct, 0)),
      score: number(item.score, number(matchingLane?.score, 0)),
      stopCondition: item.stopCondition || "Stop after one useful route op unless the thread is already producing signal.",
    };
  });
  const readyRows = rows.filter((row) => row.ready);
  const severity = readyRows.length >= Math.min(3, rows.length || 1) ? "ok" : readyRows.length ? "warn" : "danger";
  const primary = readyRows[0] || rows[0] || null;
  const nextAction =
    packet?.nextAction ||
    routeAmplifier?.nextAction ||
    manualTargetAtlas?.nextAction ||
    "Open the top route, paste one useful payload, then stop at the target count.";
  const copyBlock = [
    "CODEX DAILY EXECUTION CONSOLE",
    `Generated: ${dashboardData.updatedAt || fallbackData.updatedAt}`,
    `Mode: ${packet?.mode || ops?.mode || "manual_zero_read_dispatch"}`,
    `Target: ${formatNumber(targetReplies)} manual route ops`,
    "X API: 0 live search/read ops; browser-only execution",
    "",
    "Do this now:",
    ...rows.slice(0, 3).flatMap((row) => [
      `${formatNumber(row.priority)}. OPEN: ${row.routeLabel}${row.routeUrl ? ` - ${row.routeUrl}` : ""}`,
      `   PASTE: ${row.replyText || "missing output; use the next ready payload"}`,
      `   SLA: ${formatNumber(row.operatorSlaMinutes)}m · target ${formatNumber(row.targetReplies)} · lift +${formatNumber(row.expectedLiftPct, 1)}%`,
    ]),
    "",
    `Primary command: ${nextAction}`,
    "Stop: skip politics, giveaways, ragebait, weak tech fit, and stale threads.",
  ].join("\n");
  return {
    generatedAt: dashboardData.updatedAt || fallbackData.updatedAt,
    mode: "zero_read_daily_execution_console",
    severity,
    zeroExtraXReads: true,
    estimatedXReadOps: 0,
    targetReplies,
    readyRows: readyRows.length,
    totalRows: rows.length,
    primaryRouteLabel: primary?.routeLabel || null,
    primaryRouteUrl: primary?.routeUrl || null,
    primaryReplyText: primary?.replyText || null,
    nextAction,
    guardrails: [
      "Manual browser execution only; no auto-search, auto-like, auto-follow, or auto-reply.",
      "No X search/read API calls for route selection.",
      "Stop at target count and let maintenance write results back.",
    ],
    rows,
    copyBlock,
  };
}

function operatorPasteQueueData(
  dailyConsole = dailyExecutionConsoleData(),
  packet = operatorDispatchPacketData(),
  manualTargetAtlas = manualReplyTargetAtlasData(packet),
  routeAmplifier = routeAmplifierData(packet),
  ops = distributionOpsData(),
) {
  const incoming = dashboardData.operatorPasteQueue || fallbackData.operatorPasteQueue;
  if (incoming?.tasks?.length) return incoming;
  const rows = Array.isArray(dailyConsole?.rows) ? dailyConsole.rows : [];
  const packets = Array.isArray(packet?.packets) ? packet.packets : [];
  const targets = Array.isArray(manualTargetAtlas?.targets) ? manualTargetAtlas.targets : [];
  const lanes = Array.isArray(routeAmplifier?.lanes) ? routeAmplifier.lanes : [];
  const missions = Array.isArray(ops?.missions) ? ops.missions : [];
  const source = rows.length ? rows : packets.length ? packets : targets.length ? targets : lanes.length ? lanes : missions;
  const targetReplies = number(dailyConsole?.targetReplies, number(packet?.targetReplies, number(manualTargetAtlas?.totalTargetReplies, number(ops?.manualReplyTarget, 3))));
  const tasks = source.slice(0, 5).map((item, index) => {
    const matchingLane =
      lanes.find((lane) => lane.id === item.id || lane.routeUrl === item.routeUrl || lane.label === item.routeLabel) ||
      lanes[index] ||
      null;
    const routeLabel = item.routeLabel || item.label || matchingLane?.label || `Route ${index + 1}`;
    const openUrl = item.openUrl || item.routeUrl || matchingLane?.routeUrl || null;
    const pastePayload = item.pastePayload || item.replyText || item.draftText || item.copyBlock || "";
    const ready = Boolean(openUrl && pastePayload);
    return {
      id: item.id || `paste:${index + 1}`,
      priority: number(item.priority, number(item.rank, index + 1)),
      routeLabel,
      openUrl,
      pastePayload,
      status: ready ? (item.status || matchingLane?.status || "ok") : "warn",
      ready,
      targetReplies: Math.max(1, number(item.targetReplies, number(matchingLane?.targetReplies, 1))),
      operatorSlaMinutes: Math.max(5, number(item.operatorSlaMinutes, number(matchingLane?.operatorSlaMinutes, 10 + index * 10))),
      expectedLiftPct: number(item.expectedLiftPct, number(matchingLane?.expectedLiftPct, 0)),
      reason: item.reason || item.evidence || matchingLane?.reason || "Use the highest-signal fresh technical exchange in this route.",
      editRule: item.editRule || "Only edit nouns, timing, and one concrete reference needed by the target exchange.",
      skipRule: item.skipRule || "Skip stale, political, giveaway, ragebait, low-signal, or off-topic exchanges.",
      doneSignal: item.doneSignal || "One useful manual response pasted, or this route skipped for quality.",
      zeroExtraXReads: true,
      estimatedXReadOps: 0,
      estimatedIncrementalXApiUsd: 0,
    };
  });
  const readyTasks = tasks.filter((task) => task.ready);
  const severity = readyTasks.length >= Math.min(3, tasks.length || 1) ? "ok" : readyTasks.length ? "warn" : "danger";
  const primary = readyTasks[0] || tasks[0] || null;
  const copyBlock = [
    "CODEX OPERATOR PASTE QUEUE",
    `Generated: ${dashboardData.updatedAt || fallbackData.updatedAt}`,
    "Mode: manual_paste_queue",
    "Cost guard: 0 live X search/read ops",
    `Target: ${formatNumber(targetReplies)} manual route ops`,
    "",
    "Queue:",
    ...tasks.slice(0, 5).flatMap((task) => [
      `${formatNumber(task.priority)}. ${task.routeLabel} · ${task.ready ? "READY" : "MISSING_ROUTE_OR_PAYLOAD"} · SLA ${formatNumber(task.operatorSlaMinutes)}m`,
      task.openUrl ? `OPEN: ${task.openUrl}` : null,
      task.pastePayload ? `PASTE: ${task.pastePayload}` : null,
      `SKIP: ${task.skipRule}`,
      "",
    ].filter(Boolean)),
  ].join("\n");
  return {
    generatedAt: dashboardData.updatedAt || fallbackData.updatedAt,
    mode: "manual_paste_queue",
    severity,
    zeroExtraXReads: true,
    estimatedXReadOps: 0,
    estimatedIncrementalXApiUsd: 0,
    targetReplies,
    readyTasks: readyTasks.length,
    totalTasks: tasks.length,
    primaryRouteLabel: primary?.routeLabel || null,
    primaryOpenUrl: primary?.openUrl || null,
    primaryPastePayload: primary?.pastePayload || null,
    nextAction: primary?.ready
      ? `Open ${primary.routeLabel}, paste one useful payload, then continue down the queue.`
      : "Refresh manual route payloads before running the paste queue.",
    operatorMode: "human_in_loop",
    readGate: "browser_only",
    guardrails: [
      "Manual browser execution only; no automated outbound actions.",
      "Use route links; X search/read API stays at 0.",
      "Stop at target count and let maintenance write learning back.",
    ],
    tasks,
    copyBlock,
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
        ? "Repair missing route URL or route output before opening X."
        : score >= 72
          ? "Execute first; this route has the strongest distribution leverage."
          : score >= 48
            ? "Use after the top route or when the live thread quality is better."
            : "Hold unless the top routes are stale.",
      reason: item.evidence || item.reason || "cached route readiness, expected lift, SLA, and budget guard",
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

function routeAtlasQueryClass(routeUrl = "") {
  let decoded = String(routeUrl || "");
  try {
    decoded = decodeURIComponent(decoded);
  } catch {
    // Keep the raw route when X or copied URLs contain malformed percent escapes.
  }
  if (/from:/i.test(decoded)) return "target_account_mesh";
  if (/OpenAI|Anthropic|Cursor|Gemini|Nvidia|AI coding|agents/i.test(decoded)) return "ai_platform_load";
  if (/Apple|Google|Microsoft|Meta|Amazon|Tesla/i.test(decoded)) return "big_tech_load";
  if (/startup|founder|SaaS|developer tools|cloud|GitHub|Vercel|Cloudflare/i.test(decoded)) return "operator_builder_load";
  return "broad_tech_load";
}

function manualReplyTargetAtlasData(packet = operatorDispatchPacketData(), routeAmplifier = routeAmplifierData(packet), ops = distributionOpsData()) {
  const incoming = dashboardData.manualReplyTargetAtlas || fallbackData.manualReplyTargetAtlas;
  if (incoming?.targets?.length) return incoming;
  const packets = Array.isArray(packet?.packets) ? packet.packets : [];
  const missions = Array.isArray(ops?.missions) ? ops.missions : [];
  const lanes = Array.isArray(routeAmplifier?.lanes) ? routeAmplifier.lanes : [];
  const source = packets.length ? packets : missions;
  const laneByRoute = new Map();
  lanes.forEach((lane) => {
    if (lane?.routeUrl) laneByRoute.set(lane.routeUrl, lane);
    if (lane?.label) laneByRoute.set(lane.label, lane);
  });
  const targets = source.slice(0, 6).map((item, index) => {
    const label = item.routeLabel || item.label || `Route ${index + 1}`;
    const routeUrl = item.routeUrl || item.url || null;
    const lane = laneByRoute.get(routeUrl) || laneByRoute.get(label) || lanes[index] || {};
    const draftText = item.draftText || draftFor(item.draftIndex ?? index).text || "";
    const targetReplies = Math.max(1, number(item.targetReplies, 1));
    const operatorSlaMinutes = Math.max(5, number(item.operatorSlaMinutes, 10 + index * 10));
    const score = number(lane.score, number(item.score, number(dashboardData.profile?.baselineScore, fallbackData.profile.baselineScore)));
    const ready = Boolean(routeUrl && draftText);
    const queryClass = routeAtlasQueryClass(routeUrl);
    const status = !ready ? "danger" : score >= 72 ? "ok" : score >= 48 ? "warn" : "probe";
    const freshnessWindowMinutes = Math.max(15, Math.min(120, operatorSlaMinutes * 3));
    const evidence = item.evidence || item.reason || item.routeReason || lane.reason || "";
    const copyBlock = [
      `ROUTE ${index + 1}: ${label}`,
      `Class: ${queryClass} · target ${formatNumber(targetReplies)} · SLA ${formatNumber(operatorSlaMinutes)}m · X reads 0`,
      routeUrl ? `Open: ${routeUrl}` : "Open: missing route URL",
      evidence ? `Why: ${evidence}` : null,
      "",
      draftText,
    ].filter((line) => line != null).join("\n");
    return {
      id: item.id || `target:${index + 1}`,
      rank: number(item.priority, index + 1),
      label,
      queryClass,
      routeUrl,
      status,
      ready,
      score,
      confidence: item.confidence || lane.confidence || "low",
      targetReplies,
      operatorSlaMinutes,
      freshnessWindowMinutes,
      expectedLiftPct: number(item.expectedLiftPct, number(lane.expectedLiftPct)),
      xReadOps: 0,
      incrementalXApiUsd: 0,
      draftText,
      draftAngle: item.draftAngle || "",
      evidence,
      useWhen: [
        "packet is fresh",
        "thread has real technical exchange",
        "route output adds a decision rule or cost angle",
      ],
      skipWhen: [
        "giveaway, politics, or ragebait",
        "no visible technical argument",
        "output would require unsupported claims",
      ],
      copyBlock,
    };
  });
  const readyTargets = targets.filter((target) => target.ready).length;
  const totalTargetReplies = targets.reduce((sum, target) => sum + number(target.targetReplies, 0), 0) ||
    number(packet?.targetReplies, number(ops?.manualReplyTarget));
  const topTarget = targets.find((target) => target.ready) || targets[0] || null;
  const severity = readyTargets >= Math.min(2, targets.length || 1) ? "ok" : readyTargets ? "warn" : "danger";
  const copyBlock = [
    "CODEX MANUAL REPLY TARGET ATLAS",
    `Generated: ${dashboardData.updatedAt || fallbackData.updatedAt}`,
    "Mode: zero_read_web_targeting · X search/read API: 0",
    `Ready targets: ${formatNumber(readyTargets)}/${formatNumber(targets.length)} · route target ${formatNumber(totalTargetReplies)}`,
    "",
    "Protocol:",
    "1. Open the top route in X web.",
    "2. Choose a fresh technical thread with real replies.",
    "3. Paste the paired output, edit nouns/context only, then move on.",
    "4. Stop at the target count and let metrics write back later.",
    "",
    ...targets.slice(0, 5).flatMap((target) => [
      `${target.rank}. ${target.label} · ${target.queryClass} · score ${formatNumber(target.score, 1)} · target ${formatNumber(target.targetReplies)}`,
      target.routeUrl ? `Open: ${target.routeUrl}` : "Open: missing route URL",
      `Output: ${target.draftText || "-"}`,
      "",
    ]),
  ].join("\n");
  return {
    generatedAt: dashboardData.updatedAt || fallbackData.updatedAt,
    mode: "derived_zero_read_web_target_atlas",
    severity,
    zeroExtraXReads: true,
    estimatedXReadOps: 0,
    estimatedIncrementalXApiUsd: 0,
    readyTargets,
    totalTargets: targets.length,
    totalTargetReplies,
    topRouteLabel: topTarget?.label || null,
    topQueryClass: topTarget?.queryClass || null,
    nextAction: topTarget
      ? `Open ${topTarget.label}, paste the paired output under ${formatNumber(topTarget.targetReplies)} fresh high-signal thread lane(s), then stop.`
      : "Refresh daily route outputs before manual distribution.",
    queryPolicy: "Use X web links manually; no recent_search/read API calls for this atlas.",
    guardrails: [
      "No auto-replies, auto-likes, or auto-follows.",
      "Skip politics, giveaways, ragebait, and unsupported claims.",
      "Prefer fresh technical threads with visible exchange.",
      "Stop at the target count; learning writes back on maintenance.",
    ],
    copyBlock,
    targets,
  };
}

function operatorFlightDeckData(ops = distributionOpsData(), dispatchPacket = operatorDispatchPacketData(ops), routeAmplifier = routeAmplifierData(dispatchPacket, ops)) {
  const incoming = dashboardData.operatorFlightDeck || fallbackData.operatorFlightDeck;
  if (incoming?.phases?.length || incoming?.gates?.length) return incoming;
  const runway = growthRunwaySimulatorData();
  const governor = governorData();
  const learning = learningWritebackData();
  const packets = Array.isArray(dispatchPacket?.packets) ? dispatchPacket.packets : [];
  const lanes = Array.isArray(routeAmplifier?.lanes) ? routeAmplifier.lanes : [];
  const firstReadyPacket = packets.find((packet) => packet?.ready && packet?.routeUrl && packet?.draftText) || packets.find((packet) => packet?.routeUrl || packet?.draftText) || packets[0] || null;
  const topRouteLane = lanes.find((lane) => lane?.ready) || lanes[0] || null;
  const routeLabel = firstReadyPacket?.routeLabel || topRouteLane?.label || ops?.primaryRoute?.label || "manual route queue";
  const routeUrl = firstReadyPacket?.routeUrl || topRouteLane?.routeUrl || ops?.primaryRoute?.url || null;
  const draftText = firstReadyPacket?.draftText || (ops?.missions || []).find((mission) => mission?.draftText)?.draftText || "";
  const targetReplies = Math.max(1, number(dispatchPacket?.targetReplies, number(ops?.manualReplyTarget, 3)));
  const readyPackets = number(dispatchPacket?.readyPackets, number(ops?.readyMissions));
  const totalPackets = number(dispatchPacket?.totalPackets, number(ops?.missionCount, packets.length));
  const readGate = governor?.gates?.read || "cached_only";
  const publishGate = governor?.gates?.publish || "review";
  const safeRemainingUsd = number(dispatchPacket?.safeRemainingUsd, apiBudget().remaining);
  const routeReadyPct = totalPackets ? (readyPackets / totalPackets) * 100 : readyPackets ? 100 : 0;
  const runwayLane = (runway?.lanes || []).find((lane) => lane?.id === runway?.recommendedLaneId) || (runway?.lanes || [])[0] || null;
  const savedDays = number(runway?.savedDays);
  const expectedLiftPct = number(runwayLane?.expectedLiftPct, number(runway?.projectedLiftPct, number(dispatchPacket?.expectedLiftPct)));
  const ampScore = number(topRouteLane?.score, number(routeAmplifier?.topRouteScore));
  const commandScore = clamp(
    18 +
      Math.min(24, routeReadyPct * 0.24) +
      Math.min(20, ampScore * 0.2) +
      Math.min(18, expectedLiftPct * 0.28) +
      Math.min(12, savedDays * 0.08) +
      Math.min(8, number(learning?.sampleCount) * 0.8) +
      (safeRemainingUsd > 0 ? 8 : -18) +
      (readGate === "closed" || readGate === "sealed" ? -10 : 6),
    0,
    100,
  );
  const severity = !routeUrl || !draftText || safeRemainingUsd <= 0 ? readyPackets ? "warn" : "danger" : commandScore >= 62 ? "ok" : "warn";
  const commandMode = severity === "ok" ? "armed_manual_dispatch" : severity === "warn" ? "operator_review" : "route_queue_fault";
  const primaryCommand = routeUrl && draftText
    ? `Open ${routeLabel}, paste the paired output once, then continue until ${formatNumber(targetReplies)} useful route ops are complete.`
    : "Repair the route URL/output pair before dispatching the manual loop.";
  const copyBlock = [
    "CODEX OPERATOR FLIGHT DECK",
    `Generated: ${dashboardData.updatedAt || fallbackData.updatedAt}`,
    `Mode: ${commandMode}`,
    "Cost guard: 0 extra X search/read API ops",
    `Route: ${routeLabel}`,
    routeUrl ? `Open: ${routeUrl}` : null,
    `Target: ${formatNumber(targetReplies)} useful route ops`,
    "",
    "Command:",
    primaryCommand,
    "",
    "Output:",
    draftText || "MISSING_OUTPUT",
    "",
    "Stop conditions: no politics, no giveaways, no ragebait, no unsupported claims, no weak tech fit.",
  ].filter(Boolean).join("\n");
  return {
    generatedAt: dashboardData.updatedAt || fallbackData.updatedAt,
    mode: "zero_read_operator_flight_deck",
    commandMode,
    source: "derived operator dispatch packet + route amplifier + runway simulator",
    zeroExtraXReads: true,
    estimatedXReadOps: 0,
    estimatedIncrementalXApiUsd: 0,
    severity,
    commandScore,
    primaryCommand,
    targetReplies,
    readyPackets,
    totalPackets,
    routeLabel,
    routeUrl,
    draftText,
    copyBlock,
    runway: {
      recommendedLaneId: runway?.recommendedLaneId || null,
      projectedDaysToMilestone: runway?.projectedDaysToMilestone ?? null,
      savedDays,
      projectedLiftPct: expectedLiftPct,
    },
    gates: [
      { id: "read", label: "read gate", value: readGate, status: readGate === "closed" || readGate === "sealed" ? "danger" : "ok" },
      { id: "publish", label: "publish gate", value: publishGate, status: publishGate === "open" ? "ok" : "warn" },
      { id: "budget", label: "safe budget", value: money(safeRemainingUsd), status: safeRemainingUsd > 0 ? "ok" : "danger" },
      { id: "writeback", label: "learning samples", value: formatNumber(learning?.sampleCount || 0), status: number(learning?.sampleCount) > 0 ? "ok" : "warn" },
    ],
    phases: [
      { id: "arm", label: "ARM_ROUTE", status: routeUrl ? "ok" : "danger", detail: routeUrl ? routeLabel : "missing route URL" },
      { id: "paste", label: "PASTE_OUTPUT", status: draftText ? "ok" : "danger", detail: draftText ? "paired output ready" : "missing output payload" },
      { id: "stop", label: "STOP_AT_TARGET", status: "ok", detail: `${formatNumber(targetReplies)} useful route ops max` },
      { id: "learn", label: "WRITEBACK", status: "ok", detail: "next maintenance run updates scoring" },
    ],
    packets: packets.slice(0, 3).map((packet, index) => ({
      id: packet.id || `flight:${index + 1}`,
      priority: packet.priority || index + 1,
      routeLabel: packet.routeLabel || packet.label || `Route ${index + 1}`,
      routeUrl: packet.routeUrl || null,
      ready: Boolean(packet.ready && packet.routeUrl && packet.draftText),
      confidence: packet.confidence || "low",
      operatorSlaMinutes: number(packet.operatorSlaMinutes, 10 + index * 10),
      targetReplies: number(packet.targetReplies, 1),
      expectedLiftPct: number(packet.expectedLiftPct),
    })),
  };
}

function missionOperatorProtocol(mission, ops, index = 0) {
  if (mission?.operatorProtocol?.steps?.length) return mission.operatorProtocol;
  const targetReplies = number(mission?.targetReplies, Math.max(1, number(ops?.manualReplyTarget, 3)));
  const sla = formatNumber(mission?.operatorSlaMinutes || 10 + index * 10);
  const route = mission?.routeLabel || mission?.label || `Route ${index + 1}`;
  return {
    mode: "manual_zero_read_route_loop",
    zeroExtraXReads: true,
    objective: `Borrow live distribution from ${route} without X search/read API spend.`,
    steps: [
      { id: "open", label: "open.route", detail: "Open the X web route and use live recency." },
      { id: "filter", label: "filter.thread", detail: "Pick a technical conversation with active exchange and clear topic fit." },
      { id: "paste", label: "paste.output", detail: `Paste ${formatNumber(targetReplies)} useful route op(s) within ${sla} minutes.` },
      { id: "observe", label: "observe.feedback", detail: "Stop at target count; let the next metrics run update scoring." },
    ],
    stopConditions: [
      "Skip politics, giveaways, ragebait, ads, and weak topic fit.",
      "Skip if the output would require an unsupported factual claim.",
      "Stop after the target route ops; do not chase every adjacent thread.",
    ],
    writeback: "Maintenance refreshes telemetry and updates source/format/topic weights.",
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
  if (!key) return { done: [], skipped: [] };
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return { done: [], skipped: [] };
    const parsed = JSON.parse(raw);
    return {
      done: Array.isArray(parsed.done) ? parsed.done.filter(Boolean) : [],
      skipped: Array.isArray(parsed.skipped) ? parsed.skipped.filter(Boolean) : [],
      updatedAt: parsed.updatedAt || null,
    };
  } catch {
    return { done: [], skipped: [] };
  }
}

function writeOperatorStateByKey(key, done, skipped = []) {
  if (!key) return;
  try {
    localStorage.setItem(key, JSON.stringify({
      done: [...new Set(done)],
      skipped: [...new Set(skipped)],
      updatedAt: new Date().toISOString(),
    }));
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
  writeOperatorStateByKey(key, done, state.skipped);
  return { done, active };
}

function pasteQueueTaskId(task, index) {
  return operatorStepId({
    id: [
      task?.id,
      task?.openUrl,
      task?.routeLabel,
      task?.pastePayload ? String(task.pastePayload).slice(0, 48) : "",
    ].filter(Boolean).join("|"),
  }, index);
}

function pasteQueueStateKey(queue) {
  const day = String(queue?.generatedAt || dashboardData.updatedAt || fallbackData.updatedAt || "")
    .slice(0, 10) || "today";
  const stableKey = (queue?.tasks || [])
    .slice(0, 5)
    .map((task, index) => pasteQueueTaskId(task, index))
    .join("|") || "empty";
  return `${PASTE_QUEUE_STATE_PREFIX}${day}:${stableKey}`;
}

function togglePasteQueueTaskState(key, taskId, stateName) {
  const state = readOperatorStateByKey(key);
  const done = new Set(state.done);
  const skipped = new Set(state.skipped);
  const activeSet = stateName === "skipped" ? skipped : done;
  const inactiveSet = stateName === "skipped" ? done : skipped;
  const active = !activeSet.has(taskId);
  if (active) {
    activeSet.add(taskId);
    inactiveSet.delete(taskId);
  } else {
    activeSet.delete(taskId);
  }
  writeOperatorStateByKey(key, done, skipped);
  return { done, skipped, active, stateName };
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

function operatorEventLabel(event) {
  if (event?.type === "paste_queue" && (event?.step === "reset" || event?.state === "reset")) {
    return t("operator_event_queue_reset");
  }
  if (event?.type === "reset" || event?.state === "reset") return t("operator_event_reset");
  if (event?.type === "paste_queue" && event?.step === "done") {
    return t(event?.state === "cleared" ? "operator_event_cleared" : "operator_event_queue_done");
  }
  if (event?.type === "paste_queue" && event?.step === "skipped") {
    return t(event?.state === "cleared" ? "operator_event_cleared" : "operator_event_queue_skipped");
  }
  if (event?.step === "skipped") return t("operator_event_skipped");
  if (event?.state === "done" || event?.state === "active") return t("operator_event_done");
  if (event?.state === "cleared") return t("operator_event_cleared");
  return t("operator_event_pending");
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

function httpStatusBucketId(code) {
  if (code === 429) return "rateLimit429";
  if (code >= 500) return "backend5xx";
  if (code === 401 || code === 403) return "auth4xx";
  if (code >= 400) return "client4xx";
  if (code >= 200 && code < 300) return "success2xx";
  return null;
}

function emptyHttpStatusMatrix() {
  return {
    success2xx: { id: "success2xx", label: "2xx success", count: 0, endpoints: new Map() },
    client4xx: { id: "client4xx", label: "4xx client", count: 0, endpoints: new Map() },
    auth4xx: { id: "auth4xx", label: "401/403 auth", count: 0, endpoints: new Map() },
    rateLimit429: { id: "rateLimit429", label: "429 rate-limit", count: 0, endpoints: new Map() },
    backend5xx: { id: "backend5xx", label: "5xx backend", count: 0, endpoints: new Map() },
  };
}

function addHttpStatusMatrix(matrix, code, endpoint, count) {
  const bucket = matrix[httpStatusBucketId(code)];
  const value = number(count);
  if (!bucket || value <= 0) return;
  bucket.count += value;
  bucket.endpoints.set(endpoint, (bucket.endpoints.get(endpoint) || 0) + value);
}

function serializeHttpStatusMatrix(matrix, totalCalls) {
  return Object.values(matrix).map((bucket) => ({
    id: bucket.id,
    label: bucket.label,
    count: bucket.count,
    sharePct: totalCalls ? Number(((bucket.count / totalCalls) * 100).toFixed(1)) : 0,
    endpoints: [...bucket.endpoints.entries()]
      .sort((left, right) => number(right[1]) - number(left[1]))
      .slice(0, 3)
      .map(([endpoint, count]) => ({ endpoint, count })),
  }));
}

function deriveApiStatusTriage(api = {}) {
  const endpoints = api.endpoints || [];
  const statusMatrix = emptyHttpStatusMatrix();
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
      addHttpStatusMatrix(statusMatrix, code, endpoint.name || "-", count);
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
    statusMatrix: serializeHttpStatusMatrix(statusMatrix, totals.totalCalls),
    topFaultEndpoints: incidents
      .map((incident) => ({
        endpoint: incident.endpoint,
        severity: incident.severity,
        active: incident.active,
        failures: incident.failures,
        lastStatus: incident.lastStatus,
        totalFaults:
          number(incident.rateLimit429) +
          number(incident.backendFault5xx) +
          number(incident.authFault4xx) +
          number(incident.clientFault4xx),
      }))
      .sort((left, right) => {
        const activeDelta = Number(Boolean(right.active)) - Number(Boolean(left.active));
        if (activeDelta) return activeDelta;
        const faultDelta = number(right.totalFaults) - number(left.totalFaults);
        if (faultDelta) return faultDelta;
        return number(right.failures) - number(left.failures);
      })
      .slice(0, 5),
    incidents: incidents
      .sort((left, right) => {
        const activeDelta = Number(Boolean(right.active)) - Number(Boolean(left.active));
        if (activeDelta) return activeDelta;
        const severityDelta = triageSeverityRank(right.severity) - triageSeverityRank(left.severity);
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
    statusMatrix: Array.isArray(triage.statusMatrix) ? triage.statusMatrix : derived.statusMatrix,
    topFaultEndpoints: Array.isArray(triage.topFaultEndpoints) ? triage.topFaultEndpoints : derived.topFaultEndpoints,
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

function endpointStatusSeverity(endpoint = {}) {
  const status = Number.parseInt(String(endpoint.lastStatus ?? ""), 10);
  if (status === 429 || status >= 500) return "danger";
  if (status === 401 || status === 403 || status >= 400 || number(endpoint.failures) > 0) return "warn";
  return "ok";
}

function endpointActiveFaultWeight(endpoint = {}) {
  const status = Number.parseInt(String(endpoint.lastStatus ?? ""), 10);
  if (status === 429 || status >= 500) return 3;
  if (status === 401 || status === 403) return 2;
  if (status >= 400) return 1;
  return 0;
}

function statusMatrixSeverity(row = {}) {
  if (row.id === "rateLimit429" || row.id === "backend5xx") return number(row.count) ? "danger" : "ok";
  if (row.id === "auth4xx" || row.id === "client4xx") return number(row.count) ? "warn" : "ok";
  return "ok";
}

function statusMatrixLabel(row = {}) {
  const key = row.id ? `http_status_${row.id}` : "";
  return key && translations.en[key] ? t(key) : row.label || row.id || "-";
}

function httpTriageReadGate(triage = apiStatusTriage()) {
  if (number(triage.activeRateLimit429) || number(triage.activeBackendFault5xx)) {
    return { key: "http_triage_read_closed", severity: "danger" };
  }
  if (number(triage.activeAuthFault4xx) || number(triage.activeClientFault4xx)) {
    return { key: "http_triage_read_review", severity: "warn" };
  }
  return { key: "http_triage_read_cached", severity: "ok" };
}

function renderHttpTriageStrip() {
  const root = $("#http-triage-strip");
  if (!root) return;
  const api = dashboardData.api || fallbackData.api || {};
  const endpoints = Array.isArray(api.endpoints) ? api.endpoints : [];
  const triage = apiStatusTriage();
  const readGate = httpTriageReadGate(triage);
  const successRatio = triage.totalCalls
    ? clamp(((number(triage.totalCalls) - number(triage.totalFailures)) / number(triage.totalCalls)) * 100, 0, 100)
    : 100;
  const activeFaults =
    number(triage.activeRateLimit429) +
    number(triage.activeBackendFault5xx) +
    number(triage.activeAuthFault4xx) +
    number(triage.activeClientFault4xx);
  const incidents = Array.isArray(triage.incidents) ? triage.incidents : [];
  const statusMatrix = Array.isArray(triage.statusMatrix) ? triage.statusMatrix : [];
  const incidentBus = incidents.length
    ? incidents.slice(0, 4).map((incident) => {
      const severity = incident.active ? (incident.severity || "warn") : "cached";
      return `
        <span class="${escapeHtml(severity)}">
          <strong>${escapeHtml(incident.endpoint || "-")}</strong>
          <em>${escapeHtml(t("http_triage_last_status", { status: incident.lastStatus || "-" }))}</em>
        </span>
      `;
    }).join("")
    : `<span class="ok"><strong>${escapeHtml(t("triage_no_incidents"))}</strong><em>HTTP 2xx</em></span>`;
  const endpointBus = endpoints
    .slice()
    .sort((left, right) => {
      const severityDelta = triageSeverityRank(endpointStatusSeverity(right)) - triageSeverityRank(endpointStatusSeverity(left));
      if (severityDelta) return severityDelta;
      const activeDelta = endpointActiveFaultWeight(right) - endpointActiveFaultWeight(left);
      if (activeDelta) return activeDelta;
      return number(right.calls) - number(left.calls);
    })
    .slice(0, 5)
    .map((endpoint) => {
      const severity = endpointStatusSeverity(endpoint);
      return `
        <span class="${escapeHtml(severity)}">
          <strong>${escapeHtml(endpoint.name || "-")}</strong>
          <em>${escapeHtml(t("http_triage_calls", { count: formatNumber(endpoint.calls) }))}</em>
          <code>HTTP ${escapeHtml(String(endpoint.lastStatus || "-"))}</code>
        </span>
      `;
    })
    .join("");
  const maxStatusCount = Math.max(1, ...statusMatrix.map((row) => number(row.count)));
  const statusMatrixMarkup = statusMatrix.length
    ? statusMatrix.map((row) => {
      const severity = statusMatrixSeverity(row);
      const topEndpoint = Array.isArray(row.endpoints) && row.endpoints.length
        ? row.endpoints[0]
        : null;
      return `
        <span class="${escapeHtml(severity)}" style="--status-share:${clamp((number(row.count) / maxStatusCount) * 100, 0, 100).toFixed(1)}%">
          <em>${escapeHtml(statusMatrixLabel(row))}</em>
          <strong>${escapeHtml(formatNumber(row.count))}</strong>
          <small>${escapeHtml(formatNumber(row.sharePct, 1))}% · ${escapeHtml(topEndpoint ? `${topEndpoint.endpoint}:${formatNumber(topEndpoint.count)}` : "no endpoint")}</small>
          <i></i>
        </span>
      `;
    }).join("")
    : "";

  root.className = `http-triage-strip ${escapeHtml(triage.severity || "ok")}`;
  root.innerHTML = `
    <div class="http-triage-core">
      <div class="http-triage-title">
        <span class="triage-led ${escapeHtml(triage.severity || "ok")}"></span>
        <div>
          <p>${escapeHtml(t("http_triage_eyebrow"))}</p>
          <strong>${escapeHtml(t("http_triage_title"))}</strong>
        </div>
      </div>
      <div class="http-triage-kpis">
        <span>
          <em>${escapeHtml(t("http_triage_success"))}</em>
          <strong>${escapeHtml(formatNumber(successRatio, 1))}%</strong>
        </span>
        <span class="${escapeHtml(activeFaults ? "warn" : "ok")}">
          <em>${escapeHtml(t("http_triage_active_faults"))}</em>
          <strong>${escapeHtml(formatNumber(activeFaults))}</strong>
        </span>
        <span class="${escapeHtml(readGate.severity)}">
          <em>${escapeHtml(t("http_triage_read_gate"))}</em>
          <strong>${escapeHtml(t(readGate.key))}</strong>
        </span>
        <span class="ok">
          <em>${escapeHtml(t("http_triage_zero_reads"))}</em>
          <strong>0</strong>
        </span>
      </div>
    </div>
    <div class="http-triage-counters">
      ${triageCounter("triage_429", triage.rateLimit429, triage.activeRateLimit429, true)}
      ${triageCounter("triage_5xx", triage.backendFault5xx, triage.activeBackendFault5xx, true)}
      ${triageCounter("triage_auth", triage.authFault4xx, triage.activeAuthFault4xx)}
      ${triageCounter("triage_client", triage.clientFault4xx, triage.activeClientFault4xx)}
    </div>
    ${statusMatrixMarkup ? `
      <div class="http-triage-status-matrix">
        <span>${escapeHtml(t("http_triage_status_matrix"))}</span>
        <div>${statusMatrixMarkup}</div>
      </div>
    ` : ""}
    <div class="http-triage-buses">
      <div>
        <span>${escapeHtml(t("http_triage_fault_bus"))}</span>
        <div>${incidentBus}</div>
      </div>
      <div>
        <span>${escapeHtml(t("http_triage_endpoint_bus"))}</span>
        <div>${endpointBus}</div>
      </div>
    </div>
    <div class="http-triage-runbook">
      <span>${escapeHtml(t("http_triage_runbook"))}</span>
      <p>${escapeHtml(triageAction(triage))}</p>
      <code>${escapeHtml(triageSummary(triage))}</code>
    </div>
  `;
}

function reactorHudData() {
  const profile = dashboardData.profile || fallbackData.profile || {};
  const last24h = dashboardData.last24h || fallbackData.last24h || {};
  const last7d = dashboardData.last7d || fallbackData.last7d || {};
  const actions = dashboardData.actions || fallbackData.actions || [];
  const drafts = dashboardData.drafts || fallbackData.drafts || [];
  const { remaining, ratio } = apiBudget();
  const cadence = cadenceData();
  const triage = apiStatusTriage();
  const { bestHook } = learningData();
  const opportunity = growthOpportunityScorerData();
  const topPosts = [...(last24h.topPosts || []), ...(last7d.topPosts || [])];
  const bestScore = Math.max(number(profile.baselineScore), ...topPosts.map((post) => number(post.score)), 0);
  const impressions24h = number(last24h.impressions);
  const engagements24h = number(last24h.likes) + number(last24h.reposts) + number(last24h.replies);
  const ackRate = impressions24h > 0 ? (engagements24h / impressions24h) * 100 : 0;
  const measuredPosts = number(profile.measuredPosts, number(profile.trackedPosts, number(last7d.posts)));
  const opportunityScore = number(opportunity?.opportunityScore);
  const routeOps = actions.length;
  const outputCount = drafts.length;
  const faultPenalty = triage.severity === "danger" ? 22 : triage.severity === "warn" ? 10 : 0;
  const pressure = clamp(
    10 +
      Math.min(24, impressions24h / 12) +
      Math.min(18, ackRate * 4.5) +
      Math.min(16, outputCount * 3.4) +
      Math.min(16, routeOps * 4.2) +
      Math.min(16, bestScore * 2.2) +
      Math.min(14, opportunityScore * 0.14) -
      faultPenalty,
    0,
    100,
  );
  const severity = triage.severity === "danger"
    ? "danger"
    : pressure >= 62 && remaining > 0
      ? "ok"
      : pressure >= 36
        ? "warn"
        : "danger";
  const chartValues = chartPointValues(dashboardData.charts?.impressions24h);
  const traceValues = (chartValues.length ? chartValues : (last24h.topPosts || []).map((post) => number(post.impressions)))
    .filter((value) => Number.isFinite(value))
    .slice(-18);
  const maxTrace = Math.max(1, ...traceValues);
  const readGate = httpTriageReadGate(triage);
  const publishGate = cadence.publishAllowed && !cadence.willBlockPublish ? "open" : "review";
  const primaryCommand =
    opportunity?.primaryCommand ||
    cadence.nextAction ||
    (routeOps ? "Route through prepared X web targets; keep read partitions sealed." : "Generate manual route output before the next standalone packet.");
  const format = opportunity?.activeOpportunity?.formatId || cadence.topicTimingWindow?.activeLane?.formatId || bestHook?.name || "decision_rule";
  const hook = bestHook?.name || opportunity?.activeOpportunity?.pillarId || "decision_rule";
  const lanes = [
    { id: "ingress", label: t("reactor_hud_ingress"), value: formatNumber(impressions24h), score: clamp(impressions24h / 4, 0, 100), status: impressions24h >= 180 ? "ok" : impressions24h >= 40 ? "warn" : "danger" },
    { id: "ack", label: t("reactor_hud_ack_rate"), value: `${formatNumber(ackRate, 1)}%`, score: clamp(ackRate * 18, 0, 100), status: ackRate >= 4 ? "ok" : ackRate >= 1 ? "warn" : "danger" },
    { id: "outputs", label: t("reactor_hud_outputs"), value: formatNumber(outputCount), score: clamp(outputCount * 18, 0, 100), status: outputCount >= 5 ? "ok" : outputCount >= 2 ? "warn" : "danger" },
    { id: "routes", label: t("reactor_hud_route_ops"), value: formatNumber(routeOps), score: clamp(routeOps * 22, 0, 100), status: routeOps >= 3 ? "ok" : routeOps >= 1 ? "warn" : "danger" },
    { id: "learning", label: t("reactor_hud_learning"), value: formatNumber(measuredPosts), score: clamp(measuredPosts / 1.2, 0, 100), status: measuredPosts >= 80 ? "ok" : measuredPosts >= 20 ? "warn" : "danger" },
    { id: "cost", label: t("reactor_hud_cost"), value: `$${remaining.toFixed(2)}`, score: clamp(100 - ratio, 0, 100), status: remaining >= 1 ? "ok" : remaining > 0 ? "warn" : "danger" },
  ];
  const safeguards = [
    readGate.key ? t(readGate.key) : "cached_only",
    cadence.reasonCode || "cadence_guard",
    opportunity?.zeroExtraXReads === false ? "review reads" : t("reactor_hud_zero_reads"),
  ];
  return {
    severity,
    pressure,
    primaryCommand,
    zeroExtraXReads: opportunity?.zeroExtraXReads !== false,
    readGate: readGate.key ? t(readGate.key) : "cached_only",
    readGateSeverity: readGate.severity,
    publishGate,
    publishSeverity: publishGate === "open" ? "ok" : "warn",
    format,
    hook,
    lanes,
    traceValues,
    maxTrace,
    safeguards,
  };
}

function renderReactorHud() {
  const target = $("#reactor-hud");
  if (!target) return;
  const hud = reactorHudData();
  const pressure = clamp(number(hud.pressure), 0, 100);
  const trace = hud.traceValues.length ? hud.traceValues : [0, 0, 0, 0, 0, 0];
  target.className = `reactor-hud ${escapeHtml(hud.severity)}`;
  target.innerHTML = `
    <div class="reactor-hud-head">
      <div>
        <span>${escapeHtml(t("reactor_hud_eyebrow"))}</span>
        <strong>${escapeHtml(t("reactor_hud_title"))}</strong>
      </div>
      <em>${escapeHtml(hud.zeroExtraXReads ? t("reactor_hud_zero_reads") : "X read review")}</em>
    </div>
    <div class="reactor-hud-core" style="--reactor-pressure:${pressure.toFixed(1)}%">
      <div class="reactor-pressure">
        <span>${escapeHtml(t("reactor_hud_core_score"))}</span>
        <strong>${escapeHtml(formatNumber(pressure, 1))}</strong>
        <i></i>
      </div>
      <div class="reactor-command">
        <span>${escapeHtml(t("reactor_hud_primary_command"))}</span>
        <code>${escapeHtml(sreText(hud.primaryCommand))}</code>
      </div>
      <div class="reactor-scope">
        <span class="${escapeHtml(hud.readGateSeverity)}"><em>${escapeHtml(t("reactor_hud_read_gate"))}</em><strong>${escapeHtml(hud.readGate)}</strong></span>
        <span class="${escapeHtml(hud.publishSeverity)}"><em>${escapeHtml(t("reactor_hud_publish_gate"))}</em><strong>${escapeHtml(hud.publishGate)}</strong></span>
        <span><em>${escapeHtml(t("reactor_hud_format"))}</em><strong>${escapeHtml(formatTemplate(hud.format))}</strong></span>
        <span><em>${escapeHtml(t("reactor_hud_hook"))}</em><strong>${escapeHtml(formatTemplate(hud.hook))}</strong></span>
      </div>
    </div>
    <div class="reactor-lanes">
      ${hud.lanes.map((lane) => `
        <article class="${escapeHtml(lane.status)}" style="--lane:${clamp(number(lane.score), 0, 100).toFixed(1)}%">
          <span>${escapeHtml(lane.label)}</span>
          <strong>${escapeHtml(gateLabel(lane.value))}</strong>
          <i><b></b></i>
        </article>
      `).join("")}
    </div>
    <div class="reactor-footer">
      <div>
        <span>${escapeHtml(t("reactor_hud_signal_trace"))}</span>
        <div class="reactor-trace">
          ${trace.map((value) => `<i style="--h:${clamp((number(value) / hud.maxTrace) * 100, 5, 100).toFixed(1)}%"></i>`).join("")}
        </div>
      </div>
      <div>
        <span>${escapeHtml(t("reactor_hud_safeguards"))}</span>
        <div class="reactor-safeguards">
          ${hud.safeguards.slice(0, 3).map((item) => `<code>${escapeHtml(sreText(item))}</code>`).join("")}
        </div>
      </div>
    </div>
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
            <span class="${escapeHtml(classes)}" style="--load:${score.toFixed(1)}%" title="${escapeHtml(`${hour.label} UTC · score ${formatNumber(score, 1)} · ${formatNumber(hour.impressions)} L7 events · ${formatNumber(hour.posts)} packets`)}">
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

function monitorCostFirewallData() {
  const { api, spend, cap, remaining, ratio } = apiBudget();
  const governor = governorData();
  const control = controlPlaneData();
  const cadence = cadenceData();
  const triage = apiStatusTriage();
  const runway = runwayGuardData(governor);
  const guard = dashboardData.automation?.budgetGuard || fallbackData.automation?.budgetGuard || {};
  const safeCap = number(api.safeCap, number(guard.safeCapUsd, cap * 0.9));
  const safeLeft = number(api.safeRemaining, number(guard.trackedSafeRemainingUsd, Math.max(0, safeCap - spend)));
  const activeFaults = number(triage.activeRateLimit429) + number(triage.activeBackendFault5xx) + number(triage.activeAuthFault4xx);
  const cooldown = governor?.cooldown || api.cooldown || {};
  const cooldownActive = Boolean(cooldown.active);
  const readGate = governor?.gates?.read || control.readGate || (cooldownActive || activeFaults ? "cached_only" : "cached_only");
  const publishGate = governor?.gates?.publish || control.publishGate || (cadence.publishAllowed ? "open" : "review");
  const runwayDays = runway?.runwayDays == null
    ? (safeLeft > 0 ? null : 0)
    : number(runway.runwayDays);
  const sealedPartitions = [
    readGate !== "open" ? "x_read" : null,
    cooldownActive ? "cooldown" : null,
    activeFaults ? "fault_bus" : null,
    safeLeft <= 0 ? "safe_budget" : null,
  ].filter(Boolean);
  const severity = activeFaults || cooldownActive || readGate === "closed"
    ? "danger"
    : safeLeft <= 0 || publishGate !== "open" || cadence.willBlockPublish || runway?.active
      ? "warn"
      : "ok";
  const stateKey = severity === "danger"
    ? "firewall_state_sealed"
    : severity === "warn"
      ? "firewall_state_review"
      : "firewall_state_open";
  const runbookKey = severity === "danger"
    ? "firewall_runbook_danger"
    : severity === "warn"
      ? "firewall_runbook_warn"
      : "firewall_runbook_ok";
  return {
    severity,
    stateKey,
    runbookKey,
    spend,
    cap,
    remaining,
    ratio,
    safeLeft,
    safeCap,
    readGate,
    publishGate,
    activeFaults,
    sealedPartitions,
    runwayDays,
    zeroExtraXReads: true,
  };
}

function formatFirewallGate(value) {
  const raw = String(value || "-").replace(/_/g, " ");
  return raw === "cached only" ? "cached" : raw;
}

function renderMonitorCostFirewall() {
  const target = $("#monitor-cost-firewall");
  if (!target) return;
  const firewall = monitorCostFirewallData();
  const runway = firewall.runwayDays == null
    ? "∞"
    : `${formatNumber(firewall.runwayDays, firewall.runwayDays > 30 ? 0 : 1)}d`;
  const sealed = firewall.sealedPartitions.length
    ? firewall.sealedPartitions.map((item) => item.replace(/_/g, ".")).join(" / ")
    : "none";
  const cells = [
    { label: t("firewall_read_gate"), value: formatFirewallGate(firewall.readGate), tone: firewall.readGate === "open" ? "ok" : "warn" },
    { label: t("firewall_publish_gate"), value: formatFirewallGate(firewall.publishGate), tone: firewall.publishGate === "open" ? "ok" : "warn" },
    { label: t("firewall_runway"), value: runway, tone: firewall.runwayDays === 0 ? "danger" : firewall.runwayDays != null && firewall.runwayDays < 3 ? "warn" : "ok" },
    { label: t("firewall_safe_left"), value: money(firewall.safeLeft), tone: firewall.safeLeft > 0.5 ? "ok" : firewall.safeLeft > 0 ? "warn" : "danger" },
    { label: t("firewall_faults"), value: formatNumber(firewall.activeFaults), tone: firewall.activeFaults ? "danger" : "ok" },
    { label: t("firewall_sealed"), value: sealed, tone: firewall.sealedPartitions.length ? "warn" : "ok" },
  ];
  target.innerHTML = `
    <div class="cost-firewall-head ${escapeHtml(firewall.severity)}">
      <div>
        <span>${escapeHtml(t("monitor_firewall"))}</span>
        <strong>${escapeHtml(t(firewall.stateKey))}</strong>
      </div>
      <em>${escapeHtml(t("firewall_zero_reads"))}</em>
    </div>
    <div class="cost-firewall-core">
      <div class="firewall-rings ${escapeHtml(firewall.severity)}" style="--firewall-fill:${clamp(100 - firewall.ratio, 0, 100).toFixed(1)}%">
        <span></span>
        <strong>${escapeHtml(money(firewall.remaining))}</strong>
        <small>${escapeHtml(t("api_left"))}</small>
      </div>
      <div class="firewall-cells">
        ${cells.map((cell) => `
          <span class="${escapeHtml(cell.tone)}">
            <em>${escapeHtml(cell.label)}</em>
            <strong>${escapeHtml(cell.value)}</strong>
          </span>
        `).join("")}
      </div>
    </div>
    <p>${escapeHtml(t(firewall.runbookKey))}</p>
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
      <strong>${escapeHtml(t("l7_24h_total", { count: formatNumber(impressionStats.total) }))}</strong>
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
  renderMonitorCostFirewall();

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
      ? `Arm ${formatNumber(Math.max(1, targetReplies - readyMissions))} manual route lane(s) before the next standalone packet.`
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

function runwayModeLabel(mode) {
  const key = `runway_mode_${String(mode || "").replace(/[^a-z0-9_]/gi, "_")}`;
  const translated = t(key);
  return translated === key ? String(mode || "-").replace(/_/g, " ") : translated;
}

function formatRunwayDays(value) {
  const days = Number(value);
  if (!Number.isFinite(days)) return currentLang === "zh" ? "采样中" : "collect samples";
  return `${formatNumber(days, days > 30 ? 0 : 1)}d`;
}

function growthRunwaySimulatorData() {
  const incoming = dashboardData.growthRunwaySimulator || fallbackData.growthRunwaySimulator;
  if (incoming?.lanes?.length) return incoming;
  const goal = goalData();
  const kinetics = growthKineticsData();
  const optimizer = budgetAllocationData();
  const lanes = Array.isArray(optimizer.lanes) ? optimizer.lanes : [];
  const rawBaseDays = Number(kinetics.projectedDaysToMilestone);
  const baseDays = Number.isFinite(rawBaseDays) && rawBaseDays >= 0 ? rawBaseDays : null;
  const ranked = [...lanes]
    .map((lane, index) => {
      const gate = lane.gate || "open";
      const status = ["ok", "warn", "danger"].includes(lane.status) ? lane.status : "warn";
      const xReadOps = number(lane.xReadOps);
      const blocked = status === "danger" || gate === "closed" || gate === "sealed" || xReadOps > 0;
      const expectedLiftPct = blocked ? 0 : Math.max(0, number(lane.expectedLiftPct));
      const projectedDays = baseDays == null ? null : blocked ? baseDays : baseDays / (1 + expectedLiftPct / 100);
      const savedDays = baseDays == null || projectedDays == null ? 0 : Math.max(0, baseDays - projectedDays);
      const confidenceScore = clamp(
        24 +
          (status === "ok" ? 22 : status === "warn" ? 10 : -8) +
          Math.min(24, number(lane.efficiencyScore) * 0.24) +
          Math.min(18, expectedLiftPct * 0.28) +
          (xReadOps === 0 ? 6 : -16),
        0,
        100,
      );
      return {
        id: lane.id || `derived_runway:${index + 1}`,
        label: lane.label || lane.id || `lane ${index + 1}`,
        gate,
        status,
        blocked,
        zeroExtraXReads: xReadOps === 0,
        xReadOps,
        costUsd: number(lane.costUsd),
        safeSlots: lane.safeSlots == null ? null : number(lane.safeSlots),
        expectedLiftPct,
        efficiencyScore: number(lane.efficiencyScore),
        confidence: confidenceScore >= 72 ? "high" : confidenceScore >= 48 ? "medium" : "low",
        confidenceScore,
        projectedDays,
        savedDays,
        detail: lane.detail || "",
        nextAction: lane.nextAction || "",
      };
    })
    .sort((left, right) => {
      const leftBlocked = left.blocked ? 1 : 0;
      const rightBlocked = right.blocked ? 1 : 0;
      return leftBlocked - rightBlocked || right.savedDays - left.savedDays || right.efficiencyScore - left.efficiencyScore;
    });
  const recommended = ranked.find((lane) => !lane.blocked && lane.xReadOps === 0) || ranked[0] || null;
  const projectedDays = recommended?.projectedDays ?? baseDays;
  const savedDays = baseDays == null || projectedDays == null ? 0 : Math.max(0, baseDays - projectedDays);
  const severity = baseDays == null ? "warn" : recommended?.status || "warn";
  return {
    generatedAt: new Date().toISOString(),
    mode: baseDays == null ? "sample_starved" : recommended?.id === "manual_route_burst" ? "route_acceleration" : "budget_containment",
    source: "derived cached dashboard telemetry",
    zeroExtraXReads: true,
    estimatedXReadOps: 0,
    estimatedIncrementalXApiUsd: 0,
    severity,
    currentFollowers: goal.current,
    nextMilestone: goal.nextMilestone,
    remainingToMilestone: Math.max(0, goal.nextMilestone - goal.current),
    recommendedLaneId: recommended?.id || null,
    recommendedAction: recommended?.nextAction || "Route through the best cached manual lane before spending on live reads.",
    projectedLiftPct: number(recommended?.expectedLiftPct),
    projectedDaysToMilestone: projectedDays,
    savedDays,
    confidence: recommended?.confidence || "low",
    deckScore: clamp(number(recommended?.efficiencyScore) * 0.62 + number(recommended?.confidenceScore) * 0.38, 0, 100),
    cells: [
      { id: "baseline_days", label: t("runway_baseline"), value: formatRunwayDays(baseDays), status: baseDays == null ? "warn" : baseDays <= 14 ? "ok" : baseDays <= 45 ? "warn" : "danger" },
      { id: "projected_days", label: t("runway_projected"), value: formatRunwayDays(projectedDays), status: severity },
      { id: "saved_days", label: t("runway_saved"), value: baseDays == null ? "-" : formatRunwayDays(savedDays), status: savedDays > 0 ? "ok" : "warn" },
      { id: "x_reads", label: "X read ops", value: "0", status: "ok" },
    ],
    lanes: ranked,
    rankedLaneIds: ranked.map((lane) => lane.id),
    runbook: [
      "Keep live X search/read partitions sealed.",
      recommended?.nextAction || "Use cached manual routes first.",
    ],
  };
}

function renderGrowthRunwaySimulator() {
  const target = $("#runway-simulator");
  const state = $("#runway-state");
  if (!target || !state) return;
  const sim = growthRunwaySimulatorData();
  const lanes = Array.isArray(sim?.lanes) ? sim.lanes : [];
  if (!sim || !lanes.length) {
    target.innerHTML = `<p class="empty-state">${escapeHtml(t("runway_empty"))}</p>`;
    state.textContent = "-";
    return;
  }
  const severity = ["ok", "warn", "danger"].includes(sim.severity) ? sim.severity : "warn";
  state.textContent = runwayModeLabel(sim.mode);
  state.className = `pill ${severity === "ok" ? "pill-good" : severity === "danger" ? "pill-danger" : "pill-warn"}`;
  const rankedIds = Array.isArray(sim.rankedLaneIds) && sim.rankedLaneIds.length ? sim.rankedLaneIds : lanes.map((lane) => lane.id);
  const ranked = rankedIds.map((id) => lanes.find((lane) => lane.id === id)).filter(Boolean);
  const recommended = lanes.find((lane) => lane.id === sim.recommendedLaneId) || ranked[0] || lanes[0];
  const deckScore = clamp(number(sim.deckScore), 0, 100);
  const cells = Array.isArray(sim.cells) ? sim.cells : [];
  const runbook = Array.isArray(sim.runbook) ? sim.runbook : [sim.recommendedAction].filter(Boolean);
  const maxSaved = Math.max(1, ...ranked.map((lane) => number(lane.savedDays)));

  target.innerHTML = `
    <div class="runway-core ${escapeHtml(severity)}">
      <div class="runway-orbit" style="--runway-score:${deckScore}%">
        <span></span>
        <strong>${escapeHtml(formatNumber(deckScore, 1))}</strong>
        <em>deck</em>
      </div>
      <div class="runway-reco">
        <span>${escapeHtml(t("runway_recommended"))}</span>
        <strong>${escapeHtml(allocationLaneLabel(recommended))}</strong>
        <p>${escapeHtml(sim.recommendedAction || recommended.nextAction || "-")}</p>
        <small>${escapeHtml(t("runway_zero_reads"))} · ${escapeHtml(t("runway_lift"))} ${escapeHtml(formatNumber(sim.projectedLiftPct, 1))}%</small>
      </div>
    </div>
    <div class="runway-cells">
      ${cells.map((cell) => `
        <span class="${escapeHtml(cell.status || "ok")}">
          <em>${escapeHtml(cell.label || cell.id || "-")}</em>
          <strong>${escapeHtml(gateLabel(cell.value))}</strong>
        </span>
      `).join("")}
    </div>
    <div class="runway-lane-title">
      <span>${escapeHtml(t("runway_lanes"))}</span>
      <strong>${escapeHtml(t("runway_saved"))}</strong>
    </div>
    <div class="runway-lanes">
      ${ranked.slice(0, 5).map((lane, index) => {
        const savedPct = clamp((number(lane.savedDays) / maxSaved) * 100, lane.savedDays > 0 ? 8 : 2, 100);
        return `
          <article class="${escapeHtml(lane.status || "warn")}" style="--runway-lane-score:${savedPct}%">
            <div class="runway-rank">${String(index + 1).padStart(2, "0")}</div>
            <div class="runway-lane-body">
              <div>
                <strong>${escapeHtml(allocationLaneLabel(lane))}</strong>
                <em>${escapeHtml(allocationGateLabel(lane.gate))}</em>
              </div>
              <dl>
                <div><dt>${escapeHtml(t("runway_cost"))}</dt><dd>${escapeHtml(money(lane.costUsd))}</dd></div>
                <div><dt>${escapeHtml(t("runway_lift"))}</dt><dd>${escapeHtml(`${formatNumber(lane.expectedLiftPct, 1)}%`)}</dd></div>
                <div><dt>${escapeHtml(t("runway_confidence"))}</dt><dd>${escapeHtml(lane.confidence || "-")}</dd></div>
              </dl>
              <i><span></span></i>
            </div>
            <strong>${escapeHtml(formatRunwayDays(lane.savedDays))}</strong>
          </article>
        `;
      }).join("")}
    </div>
    <div class="runway-runbook">
      ${runbook.slice(0, 3).map((item) => `<p>${escapeHtml(item)}</p>`).join("")}
    </div>
  `;
}

function missionControlData() {
  const incoming = dashboardData.growthMissionControl || fallbackData.growthMissionControl;
  if (incoming) return incoming;
  const goal = goalData();
  const kinetics = growthKineticsData();
  const ops = distributionOpsData();
  const operatorSlo = operatorSloData(ops);
  const routeAmplifier = routeAmplifierData(operatorDispatchPacketData(ops), ops);
  const budget = budgetBurnData();
  const runway = runwayGuardData();
  const control = controlPlaneData();
  const learning = learningWritebackData();
  const flywheel = viralFlywheelData();
  const kineticScore = clamp(number(kinetics.score), 0, 100);
  const velocityScore = clamp(number(flywheel.velocityScore), 0, 100);
  const routeReadiness = clamp(number(kinetics.routeReadinessPct, number(operatorSlo.readyMissions) * 33), 0, 100);
  const safeRemaining = runway?.safeRemainingUsd ?? budget.safeRemainingUsd;
  const safeCap = runway?.safeCapUsd ?? budget.safeCapUsd;
  const safePct = safeCap > 0 ? clamp((number(safeRemaining) / number(safeCap)) * 100, 0, 100) : 100;
  const readGate = control.readGate || "cached_only";
  const publishGate = control.publishGate || "review";
  const sampleCount = number(learning.sampleCount, number((dashboardData.profile || fallbackData.profile || {}).measuredPosts));
  const missionScore = clamp((kineticScore * 0.42) + (velocityScore * 0.22) + (routeReadiness * 0.2) + (safePct * 0.1) + (sampleCount > 10 ? 6 : 0), 0, 100);
  const severity = safePct <= 0 || readGate === "closed" || readGate === "sealed"
    ? "danger"
    : missionScore >= 62 && safePct >= 22
      ? "ok"
      : "warn";
  const rawProjectedDays = kinetics.projectedDaysToMilestone;
  const projectedDays = rawProjectedDays == null || rawProjectedDays === "" ? null : number(rawProjectedDays, null);
  const projectedLabel = projectedDays == null || Number.isNaN(projectedDays)
    ? "collect samples"
    : `${formatNumber(projectedDays, projectedDays > 30 ? 0 : 1)}d`;
  const topRoute = (routeAmplifier.lanes || [])[0] || (operatorSlo.lanes || [])[0] || null;
  return {
    mode: severity === "danger" ? "containment" : missionScore >= 78 ? "scale_loop" : missionScore >= 52 ? "ignition_loop" : "route_repair",
    severity,
    zeroExtraXReads: true,
    source: "derived dashboard telemetry",
    missionScore,
    northStar: {
      label: "active conn milestone",
      current: goal.current,
      target: goal.nextMilestone,
      remaining: Math.max(0, goal.nextMilestone - goal.current),
      projectedDays: projectedDays == null || Number.isNaN(projectedDays) ? null : projectedDays,
    },
    gates: {
      read: readGate,
      publish: publishGate,
      budget: safePct <= 0 ? "sealed" : safePct < 22 ? "guarded" : "open",
      learning: sampleCount > 10 ? "online" : "sample-starved",
    },
    nextAction: routeReadiness < 50
      ? "Arm more manual route lanes before the next standalone packet."
      : routeAmplifier.nextAction || kinetics.nextAction || "Keep the current route loop hot and let maintenance write outcomes back.",
    topRoute: topRoute
      ? {
          label: topRoute.routeLabel || topRoute.label || "-",
          score: number(topRoute.score, number(topRoute.efficiencyScore)),
          expectedLiftPct: number(topRoute.expectedLiftPct),
          status: topRoute.status || "ok",
        }
      : null,
    cells: [
      { id: "mission_score", label: "mission score", value: `${formatNumber(missionScore, 1)}%`, status: severity },
      { id: "milestone", label: "milestone runway", value: projectedLabel, status: projectedDays != null && projectedDays <= 45 ? "ok" : "warn" },
      { id: "route", label: "route coverage", value: `${formatNumber(routeReadiness, 0)}%`, status: routeReadiness >= 75 ? "ok" : routeReadiness >= 35 ? "warn" : "danger" },
      { id: "budget", label: "safe budget", value: safeRemaining == null ? "∞" : money(safeRemaining), status: safePct > 22 ? "ok" : safePct > 0 ? "warn" : "danger" },
      { id: "learning", label: "learning samples", value: formatNumber(sampleCount), status: sampleCount > 10 ? "ok" : "warn" },
    ],
    lanes: [
      { id: "ingress", label: "ingress load", value: `${formatNumber(kineticScore, 1)}%`, status: kineticScore >= 58 ? "ok" : kineticScore >= 34 ? "warn" : "danger" },
      { id: "flywheel", label: "flywheel velocity", value: `${formatNumber(velocityScore, 1)}%`, status: velocityScore >= 58 ? "ok" : velocityScore >= 34 ? "warn" : "danger" },
      { id: "route", label: "route amplifier", value: `${formatNumber(routeReadiness, 0)}%`, status: routeReadiness >= 75 ? "ok" : routeReadiness >= 35 ? "warn" : "danger" },
      { id: "cost", label: "cost boundary", value: `${formatNumber(safePct, 0)}%`, status: safePct > 22 ? "ok" : safePct > 0 ? "warn" : "danger" },
    ],
    runbook: [
      "Do not auto-search, auto-like, or auto-reply.",
      "Use cached telemetry, browser route links, and manual route outputs.",
    ],
  };
}

function missionControlStateLabel(severity) {
  if (severity === "danger") return t("mission_control_fault");
  if (severity === "warn") return t("mission_control_watch");
  return t("mission_control_nominal");
}

function renderGrowthMissionControl() {
  const target = $("#mission-control-spine");
  if (!target) return;
  const mission = missionControlData();
  const severity = ["ok", "warn", "danger"].includes(mission.severity) ? mission.severity : "warn";
  const score = clamp(number(mission.missionScore), 0, 100);
  const north = mission.northStar || {};
  const projected = north.projectedDays == null
    ? "collect samples"
    : `${formatNumber(north.projectedDays, north.projectedDays > 30 ? 0 : 1)}d`;
  const topRoute = mission.topRoute || {};
  const cells = Array.isArray(mission.cells) ? mission.cells : [];
  const lanes = Array.isArray(mission.lanes) ? mission.lanes : [];
  const runbook = Array.isArray(mission.runbook) ? mission.runbook : [];

  target.innerHTML = `
    <article class="mission-control-panel ${escapeHtml(severity)}">
      <div class="mission-control-head">
        <div>
          <span>${escapeHtml(t("mission_control_eyebrow"))}</span>
          <strong>${escapeHtml(t("mission_control_title"))}</strong>
        </div>
        <em>${escapeHtml(missionControlStateLabel(severity))} · ${escapeHtml(t("mission_control_zero_reads"))}</em>
      </div>
      <div class="mission-control-body">
        <div class="mission-score-core" style="--mission-score:${score.toFixed(1)}%">
          <span>${escapeHtml(t("mission_control_score"))}</span>
          <strong>${escapeHtml(formatNumber(score, 1))}</strong>
          <div><i></i></div>
        </div>
        <div class="mission-north-star">
          <span>${escapeHtml(t("mission_control_milestone"))}</span>
          <strong>${escapeHtml(`${formatNumber(north.current)} / ${formatNumber(north.target)}`)}</strong>
          <p>${escapeHtml(t("mission_control_remaining", { count: formatNumber(north.remaining) }))} · ${escapeHtml(t("mission_control_projected", { days: projected }))}</p>
        </div>
        <div class="mission-top-route">
          <span>${escapeHtml(t("control_top_route"))}</span>
          <strong>${escapeHtml(topRoute.label || t("mission_control_no_route"))}</strong>
          <p>${escapeHtml(topRoute.label ? `score ${formatNumber(topRoute.score, 1)} · +${formatNumber(topRoute.expectedLiftPct, 1)}% lift` : mission.nextAction || "-")}</p>
        </div>
        <div class="mission-next-action">
          <span>${escapeHtml(t("mission_control_next"))}</span>
          <p>${escapeHtml(mission.nextAction || "-")}</p>
        </div>
      </div>
      <div class="mission-cell-grid">
        ${cells.slice(0, 5).map((cell) => `
          <span class="${escapeHtml(cell.status || "neutral")}">
            <em>${escapeHtml(cell.label || cell.id || "-")}</em>
            <strong>${escapeHtml(gateLabel(cell.value))}</strong>
          </span>
        `).join("")}
      </div>
      <div class="mission-lane-grid">
        ${lanes.slice(0, 4).map((lane) => `
          <span class="${escapeHtml(lane.status || "neutral")}">
            <em>${escapeHtml(lane.label || lane.id || "-")}</em>
            <strong>${escapeHtml(gateLabel(lane.value))}</strong>
          </span>
        `).join("")}
      </div>
      <div class="mission-runbook">
        ${runbook.slice(0, 3).map((item) => `<code>${escapeHtml(item)}</code>`).join("")}
      </div>
    </article>
  `;
}

function renderAutopilotCommandStrip() {
  const target = $("#autopilot-command-strip");
  if (!target) return;
  const deck = autopilotDirectiveDeckData();
  const cards = Array.isArray(deck.cards) ? deck.cards.slice(0, 5) : [];
  if (!cards.length) {
    target.innerHTML = `<p class="empty-state">${escapeHtml(t("command_strip_empty"))}</p>`;
    return;
  }
  const score = clamp(number(deck.deckScore), 0, 100);
  const severity = mutationTone(deck.severity || (score >= 70 ? "ok" : "warn"));
  const active = deck.activeDirective || cards[0]?.command || "-";
  const copyBlock = deck.copyBlock || (deck.directives || []).join("\n");
  target.innerHTML = `
    <article class="command-strip-shell ${escapeHtml(severity)}" style="--command-score:${score.toFixed(1)}%">
      <div class="command-strip-head">
        <div>
          <span>${escapeHtml(t("command_strip_eyebrow"))}</span>
          <strong>${escapeHtml(t("command_strip_title"))}</strong>
        </div>
        <em>${escapeHtml(t("command_strip_zero_reads"))}</em>
      </div>
      <div class="command-strip-core">
        <div class="command-strip-score">
          <span>${escapeHtml(t("command_strip_score"))}</span>
          <strong>${escapeHtml(formatNumber(score, 1))}</strong>
          <i></i>
        </div>
        <div class="command-strip-active">
          <span>${escapeHtml(t("command_strip_active"))}</span>
          <code>${escapeHtml(active)}</code>
        </div>
        <button type="button" data-copy="${encodeURIComponent(copyBlock)}">${escapeHtml(t("command_strip_copy"))}</button>
      </div>
      <div class="command-strip-nodes">
        ${cards.map((card) => `
          <article class="${escapeHtml(mutationTone(card.status))}">
            <span>P${escapeHtml(formatNumber(card.priority))}</span>
            <strong>${escapeHtml(card.label || card.id || "-")}</strong>
            <em>${escapeHtml(card.source || "-")}</em>
            <small>${escapeHtml(formatNumber(card.score, 1))} · X0</small>
          </article>
        `).join("")}
      </div>
    </article>
  `;
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

function autopilotDirectiveDeckData() {
  const incoming = dashboardData.autopilotDirectiveDeck || fallbackData.autopilotDirectiveDeck;
  if (incoming?.cards?.length) return incoming;
  const autopilot = learningAutopilotData();
  const scheduler = angleSchedulerData();
  const ledger = learningWritebackData();
  const matrix = temporalAngleMatrixData();
  const mission = missionControlData();
  const optimizer = budgetAllocationData();
  const governor = governorData();
  const active = ledger.activeRule || (scheduler.nextAngles || [])[0] || autopilot.primaryFormat || {};
  const temporal = (matrix.slots || [])[0] || {};
  const holdIds = [
    ...new Set([
      ...(ledger.holdFormatIds || []),
      ...(scheduler.scoringBias?.holdFormatIds || []),
      ...(autopilot.holdFormats || []).map((row) => row.id).filter(Boolean),
    ]),
  ];
  const lanes = Array.isArray(optimizer.lanes) ? optimizer.lanes : [];
  const preferredLane = lanes.find((lane) => lane.id === optimizer.recommendedLaneId) || lanes[0] || {};
  const route = mission.topRoute || preferredLane || {};
  const readGate = mission.gates?.read || governor?.gates?.read || "cached_only";
  const publishGate = mission.gates?.publish || governor?.gates?.publish || "review";
  const safeLeft = number(optimizer.safeRemainingUsd, number(governor?.budget?.safeRemainingUsd));
  const ruleId = active.formatId || active.id || "decision_rule";
  const ruleLabel = active.label || formatTemplate(ruleId);
  const temporalLabel = temporal.windowLabel || temporal.label || "next learned window";
  const temporalAngle = temporal.formatId || temporal.angle || ruleId;
  const routeLabel = route.label || route.routeLabel || preferredLane.label || "manual route lane";
  const ruleScore = number(active.weight, number(active.score, number(active.avgScore)));
  const temporalScore = number(temporal.score, number(temporal.loadScore, ruleScore));
  const budgetScore = readGate === "closed" || readGate === "sealed" ? 0 : clamp((safeLeft / Math.max(0.01, 5)) * 100, 0, 100);
  const deckScore = clamp(
    number(mission.missionScore) * 0.34 +
      ruleScore * 0.24 +
      temporalScore * 0.18 +
      budgetScore * 0.16 +
      (holdIds.length ? 2 : 8),
    0,
    100,
  );
  const severity = readGate === "closed" || readGate === "sealed" || safeLeft <= 0
    ? "danger"
    : deckScore >= 70
      ? "ok"
      : "warn";
  const cards = [
    {
      id: "prompt_rule",
      label: "Prompt Rule",
      command: `lead:${ruleId} action:${active.action || "test"}`,
      detail: active.reason || ledger.nextWriteback || "Use the strongest cached learning rule before exploration.",
      status: active.action === "hold" ? "danger" : active.action === "exploit" ? "ok" : "warn",
      source: "learning.writeback",
      priority: 1,
      score: ruleScore,
      xReadOps: 0,
    },
    {
      id: "temporal_slot",
      label: "UTC Fire-Control",
      command: `window:${temporalLabel} utc angle:${formatTemplate(temporalAngle)}`,
      detail: temporal.reason || matrix.nextAction || "Route through the learned hourly load window.",
      status: temporal.status === "hot" ? "ok" : temporal.status || "warn",
      source: "temporal.matrix",
      priority: 2,
      score: temporalScore,
      xReadOps: 0,
    },
    {
      id: "route_bias",
      label: "Route Bias",
      command: `route:${routeLabel} manual_only`,
      detail: mission.nextAction || preferredLane.nextAction || "Manual route ops only; no automatic engagement.",
      status: route.status || preferredLane.status || "ok",
      source: "mission.control",
      priority: 3,
      score: number(route.score, number(preferredLane.efficiencyScore)),
      xReadOps: 0,
    },
    {
      id: "budget_gate",
      label: "Budget Gate",
      command: `read_gate:${readGate} publish_gate:${publishGate}`,
      detail: `Safe left ${money(safeLeft)}; recommended lane ${allocationLaneLabel(preferredLane)}; normal backoff only.`,
      status: readGate === "closed" || readGate === "sealed" || safeLeft <= 0 ? "danger" : safeLeft < 0.75 ? "warn" : "ok",
      source: "cost.governor",
      priority: 4,
      score: budgetScore,
      safeSlots: preferredLane.safeSlots ?? null,
      xReadOps: 0,
    },
    {
      id: "hold_gate",
      label: "Hold Gate",
      command: `suppress:${holdIds.length ? holdIds.join(",") : "none"}`,
      detail: holdIds.length
        ? `Keep ${holdIds.join(", ")} out of default generation unless fit is exceptional.`
        : "No under-baseline format is blocked; keep exploration controlled.",
      status: holdIds.length ? "warn" : "ok",
      source: "learning.guardrail",
      priority: 5,
      score: holdIds.length,
      xReadOps: 0,
    },
  ];
  const directives = cards.map((card) => `[P${card.priority}] ${card.command} :: ${card.detail}`);
  return {
    generatedAt: ledger.generatedAt || scheduler.generatedAt || dashboardData.updatedAt || fallbackData.updatedAt,
    mode: severity === "danger" ? "derived_cached_containment_deck" : "derived_ignition_directive_deck",
    source: "derived cached telemetry",
    zeroExtraXReads: true,
    estimatedXReadOps: 0,
    estimatedIncrementalXApiUsd: 0,
    severity,
    confidence: ledger.confidence || scheduler.confidence || matrix.confidence || "low",
    deckScore,
    activeDirective: directives[0] || "-",
    primaryRule: { id: ruleId, label: ruleLabel, action: active.action || "test" },
    gates: { read: readGate, publish: publishGate, budget: cards[3].status, route: cards[2].status },
    cards,
    directives,
    copyBlock: [
      "CODEX AUTOPILOT DIRECTIVE DECK",
      `score: ${formatNumber(deckScore, 1)}`,
      "zero_extra_x_reads: true",
      "",
      ...directives.map((directive) => `- ${directive}`),
      "",
      "GUARDRAILS:",
      "- Human-in-loop route ops only.",
      "- No automatic replies, likes, follows, scraping, or rate-limit circumvention.",
    ].join("\n"),
  };
}

function renderAutopilotDirectiveDeck() {
  const deck = autopilotDirectiveDeckData();
  const container = $("#autopilot-directive-deck");
  if (!container) return;
  const cards = Array.isArray(deck.cards) ? deck.cards : [];
  if (!cards.length) {
    container.innerHTML = `<p class="empty-state">${escapeHtml(t("directive_deck_empty"))}</p>`;
    return;
  }
  const score = clamp(number(deck.deckScore), 0, 100);
  const severity = mutationTone(deck.severity || (score >= 70 ? "ok" : "warn"));
  const copyBlock = deck.copyBlock || (deck.directives || []).join("\n");
  container.innerHTML = `
    <div class="directive-deck-head">
      <div>
        <span>${escapeHtml(t("directive_deck_eyebrow"))}</span>
        <strong>${escapeHtml(t("directive_deck_title"))}</strong>
      </div>
      <em>${escapeHtml(t("directive_deck_zero_reads"))}</em>
    </div>
    <div class="directive-deck-core ${escapeHtml(severity)}" style="--directive-score:${score.toFixed(1)}%">
      <div>
        <span>${escapeHtml(t("directive_deck_score"))}</span>
        <strong>${escapeHtml(formatNumber(score, 1))}</strong>
        <i></i>
      </div>
      <article>
        <span>${escapeHtml(t("directive_deck_active"))}</span>
        <code>${escapeHtml(deck.activeDirective || "-")}</code>
      </article>
      <button type="button" data-copy="${encodeURIComponent(copyBlock)}">${escapeHtml(t("directive_deck_copy"))}</button>
    </div>
    <div class="directive-deck-cards">
      ${cards.slice(0, 5).map((card) => `
        <article class="${escapeHtml(mutationTone(card.status))}">
          <header>
            <span>${escapeHtml(t("directive_deck_priority", { priority: card.priority || "-" }))}</span>
            <strong>${escapeHtml(card.label || card.id || "-")}</strong>
            <em>${escapeHtml(t("directive_deck_x_reads", { count: formatNumber(card.xReadOps || 0) }))}</em>
          </header>
          <code>${escapeHtml(card.command || "-")}</code>
          <p>${escapeHtml(card.detail || "-")}</p>
          <footer>
            <span>${escapeHtml(card.source || "-")}</span>
            <strong>${escapeHtml(formatNumber(card.score, 1))}</strong>
          </footer>
        </article>
      `).join("")}
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

function hookPatternDefinitions() {
  return [
    {
      id: "decision_rule",
      label: "Decision Rule",
      detector: /\b(if|when|rule|playbook|checklist|should|must|default|standard|decision)\b|判断标准|如果|当.*就|先看|该做|别急/i,
      directive: "Open with a rule the reader can apply today.",
      nextHook: "If the default changes, the winner is the team that owns the new route.",
    },
    {
      id: "contrast_reframe",
      label: "Contrast Reframe",
      detector: /not .+ but |isn['’]?t .+ it['’]?s |instead of|不是.+而是|与其.+不如|真正的/i,
      directive: "Start with a clean not-X-but-Y reframe.",
      nextHook: "The story is not the launch. The story is who loses distribution when this becomes default.",
    },
    {
      id: "operator_pain",
      label: "Operator Pain",
      detector: /\b(teams?|developers?|operators?|engineers?|platform teams?|workflow|rollback|permissions?|evals?|logs?|incident|migration)\b|团队|开发者|工程师|迁移|权限|回滚|工作流/i,
      directive: "Translate the news into a workflow tax.",
      nextHook: "Every model jump creates a second job: prompts, evals, permissions, rollback.",
    },
    {
      id: "cost_tradeoff",
      label: "Cost Tradeoff",
      detector: /\b(hidden cost|cost|budget|tradeoff|risk|margin|pricing|lock-?in|churn|tax|support burden)\b|成本|代价|预算|风险|锁定|取舍/i,
      directive: "Lead with the hidden cost or margin transfer.",
      nextHook: "The hidden cost is not the subscription. It is the migration work before the gain appears.",
    },
    {
      id: "prediction",
      label: "Near-Term Prediction",
      detector: /\b(will|next|becomes|turns into|default|standard|within|2026|2027|months?)\b|接下来|未来|会变成|默认|标配|半年|一年/i,
      directive: "Make a concrete near-term prediction.",
      nextHook: "This moves from feature to default, then everyone else pays the distribution tax.",
    },
    {
      id: "weak_recap",
      label: "Weak News Recap",
      hold: true,
      detector: /^(today|according to|breaking|news|reportedly|new:|近日|据报道|消息|新闻)\b|值得关注|不容错过|重磅|exciting news/i,
      directive: "Do not recap the headline.",
      nextHook: "Skip the recap. Start with the consequence.",
    },
  ];
}

function firstPostLine(text) {
  return String(text || "")
    .split(/\n+/)
    .map((line) => line.trim())
    .find((line) => line && !/^#[\p{L}\p{N}_]+/u.test(line)) || "";
}

function classifyDashboardHook(text) {
  const firstLine = firstPostLine(text);
  const haystack = `${firstLine} ${String(text || "")}`.trim();
  const matches = hookPatternDefinitions().filter((definition) => definition.detector.test(haystack));
  const weak = matches.find((definition) => definition.hold && definition.detector.test(firstLine));
  const selected = weak || matches.find((definition) => !definition.hold) || hookPatternDefinitions()[0];
  return {
    primaryId: selected.id,
    primaryLabel: selected.label,
    patternIds: matches.length ? [...new Set(matches.map((definition) => definition.id))] : [selected.id],
    firstLine,
  };
}

function derivedHookPatternReactor() {
  const posts = [
    ...((dashboardData.last7d || fallbackData.last7d || {}).topPosts || []),
    ...((dashboardData.last24h || fallbackData.last24h || {}).topPosts || []),
  ].filter((post, index, rows) => post?.text && rows.findIndex((item) => item.id === post.id) === index);
  const baseline = number((dashboardData.profile || fallbackData.profile || {}).baselineScore, 0);
  const definitions = hookPatternDefinitions();
  const buckets = Object.fromEntries(definitions.map((definition) => [definition.id, { count: 0, total: 0, examples: [] }]));
  for (const post of posts) {
    const hook = classifyDashboardHook(post.text);
    const score = number(post.score, baseline);
    for (const id of hook.patternIds) {
      const bucket = buckets[id];
      if (!bucket) continue;
      bucket.count += 1;
      bucket.total += score;
      bucket.examples.push({ text: hook.firstLine, score, url: post.url || "" });
    }
  }
  const patterns = definitions.map((definition) => {
    const bucket = buckets[definition.id] || { count: 0, total: 0, examples: [] };
    const avgScore = bucket.count ? bucket.total / bucket.count : 0;
    const liftPct = baseline > 0 && bucket.count >= 2 ? ((avgScore - baseline) / baseline) * 100 : null;
    const status = definition.hold ? "hold" : bucket.count >= 2 && liftPct > 12 ? "exploit" : bucket.count >= 2 && liftPct < -16 ? "hold" : "probe";
    return {
      id: definition.id,
      label: definition.label,
      status,
      score: Math.max(0, avgScore || baseline || 1),
      avgScore,
      samples: bucket.count,
      liftPct,
      directive: definition.directive,
      nextHook: definition.nextHook,
      examples: bucket.examples.sort((left, right) => right.score - left.score).slice(0, 2),
    };
  }).sort((left, right) => {
    const priority = { exploit: 3, probe: 2, hold: 0 };
    return (priority[right.status] || 0) - (priority[left.status] || 0) || right.score - left.score;
  });
  const recommendedPattern = patterns.find((pattern) => pattern.status !== "hold") || patterns[0] || null;
  const avoidPatterns = patterns.filter((pattern) => pattern.status === "hold" || pattern.id === "weak_recap").slice(0, 3);
  const promptPatch = recommendedPattern
    ? `First line hook pattern: ${recommendedPattern.label}. ${recommendedPattern.directive} Example shape: ${recommendedPattern.nextHook}`
    : "First line hook pattern: Decision Rule.";
  return {
    mode: "derived_hook_pattern_reactor",
    confidence: posts.length >= 8 ? "medium" : "low",
    zeroExtraXReads: true,
    sampleCount: posts.length,
    baselineScore: baseline,
    recommendedPattern,
    avoidPatterns,
    patterns,
    promptPatch,
    nextAction: recommendedPattern ? `Apply ${recommendedPattern.label}: ${recommendedPattern.directive}` : "-",
    guardrails: ["No headline recap.", "First line creates a rule, cost, or reframe.", "0 X read ops."],
  };
}

function hookPatternReactorData() {
  return dashboardData.hookPatternReactor || fallbackData.hookPatternReactor || derivedHookPatternReactor();
}

function renderHookPatternReactor() {
  const reactor = hookPatternReactorData();
  const container = $("#hook-pattern-reactor");
  if (!container) return;
  const patterns = Array.isArray(reactor.patterns) ? reactor.patterns : [];
  if (!patterns.length) {
    container.innerHTML = `<p class="empty-state">${escapeHtml(t("hook_empty"))}</p>`;
    return;
  }
  const recommended = reactor.recommendedPattern || patterns.find((pattern) => pattern.status !== "hold") || patterns[0] || {};
  const avoid = Array.isArray(reactor.avoidPatterns) ? reactor.avoidPatterns : patterns.filter((pattern) => pattern.status === "hold");
  const promptPatch = reactor.promptPatch || recommended.nextHook || "";
  container.innerHTML = `
    <div class="hook-head">
      <div>
        <span>${escapeHtml(t("hook_eyebrow"))}</span>
        <strong>${escapeHtml(t("hook_title"))}</strong>
      </div>
      <em>${escapeHtml(t("hook_zero_reads"))}</em>
    </div>
    <div class="hook-core">
      <div class="hook-prime">
        <span>${escapeHtml(t("hook_recommended"))}</span>
        <strong>${escapeHtml(recommended.label || recommended.id || "-")}</strong>
        <small>${escapeHtml(recommended.directive || reactor.nextAction || "-")}</small>
      </div>
      <div class="hook-score">
        <span>${escapeHtml(t("hook_score"))}</span>
        <strong>${escapeHtml(formatNumber(recommended.avgScore || recommended.score, 1))}</strong>
        <small>${escapeHtml(t("hook_samples", { count: formatNumber(recommended.samples) }))}</small>
      </div>
      <div class="hook-avoid">
        <span>${escapeHtml(t("hook_avoid"))}</span>
        <strong>${escapeHtml(avoid.map((pattern) => pattern.label || pattern.id).join(" / ") || "-")}</strong>
        <small>${escapeHtml(reactor.confidence || "-")}</small>
      </div>
    </div>
    <div class="hook-patterns">
      ${patterns.slice(0, 6).map((pattern) => {
        const score = clamp(number(pattern.avgScore || pattern.score), 0, Math.max(20, number(reactor.baselineScore, 10) * 2));
        const baseline = Math.max(1, number(reactor.baselineScore, 10) * 2);
        const width = clamp((score / baseline) * 100, 4, 100);
        return `
          <article class="${escapeHtml(pattern.status || "probe")}" style="--hook-score:${width.toFixed(1)}%">
            <div>
              <strong>${escapeHtml(pattern.label || pattern.id || "-")}</strong>
              <em>${escapeHtml(pattern.status || "probe")} · ${escapeHtml(t("hook_samples", { count: formatNumber(pattern.samples) }))}</em>
            </div>
            <span>${escapeHtml(pattern.liftPct == null ? "-" : t("hook_lift", { lift: formatNumber(pattern.liftPct, 1) }))}</span>
            <i></i>
          </article>
        `;
      }).join("")}
    </div>
    <div class="hook-patch">
      <div>
        <span>${escapeHtml(t("hook_prompt_patch"))}</span>
        <button type="button" data-copy="${encodeURIComponent(promptPatch)}">${escapeHtml(t("hook_copy_patch"))}</button>
      </div>
      <pre><code>${escapeHtml(promptPatch)}</code></pre>
    </div>
    <div class="hook-examples">
      ${(recommended.examples || []).slice(0, 2).map((example) => `
        <blockquote>
          <p>${escapeHtml(example.text || "-")}</p>
          <cite>${escapeHtml(t("hook_score"))} ${escapeHtml(formatNumber(example.score, 1))}</cite>
        </blockquote>
      `).join("")}
    </div>
  `;
}

function derivedContentBanditAllocator() {
  const plan = dashboardData.experimentPlan || fallbackData.experimentPlan || {};
  const rows = [
    ...(Array.isArray(plan.recommendedFormats) ? plan.recommendedFormats : []),
    ...(Array.isArray(plan.holdFormats) ? plan.holdFormats : []),
  ].filter((row, index, all) => row?.id && all.findIndex((item) => item.id === row.id) === index);
  const baseline = number((dashboardData.profile || fallbackData.profile || {}).baselineScore, 0);
  const hook = hookPatternReactorData();
  const total = Math.max(1, rows.reduce((sum, row) => sum + Math.max(1, number(row.priorityScore, number(row.avgScore, baseline))), 0));
  const lanes = rows.map((row, index) => {
    const rawScore = Math.max(1, number(row.priorityScore, number(row.avgScore, baseline)));
    const status = row.action === "hold" ? "hold" : row.action === "explore" ? "explore" : row.action === "exploit" ? "exploit" : "test";
    return {
      id: row.id,
      label: row.label || formatTemplate(row.id),
      status,
      action: row.action || status,
      rank: index + 1,
      allocationScore: rawScore,
      allocationPct: status === "hold" ? 0 : (rawScore / total) * 100,
      avgScore: number(row.avgScore, baseline),
      samples: number(row.samples),
      liftPct: Number.isFinite(Number(row.lift)) ? Number(row.lift) * 100 : null,
      uncertainty: 1 / Math.sqrt(number(row.samples, 0) + 1),
      nextAction: row.reason || `Keep ${formatTemplate(row.id)} in controlled rotation.`,
    };
  }).sort((left, right) => {
    const priority = { exploit: 3, explore: 2, test: 1, hold: 0 };
    return (priority[right.status] || 0) - (priority[left.status] || 0) || right.allocationScore - left.allocationScore;
  }).map((lane, index) => ({ ...lane, rank: index + 1 }));
  const recommendedLane = lanes.find((lane) => lane.status === "exploit") || lanes.find((lane) => lane.status !== "hold") || lanes[0] || null;
  const exploreLane = lanes.find((lane) => lane.status === "explore") || null;
  return {
    mode: "derived_cached_ucb_allocator",
    confidence: (dashboardData.learningAutopilot || fallbackData.learningAutopilot || {}).confidence || "low",
    zeroExtraXReads: true,
    source: "derived dashboard experiment plan",
    sampleCount: number((dashboardData.profile || fallbackData.profile || {}).measuredPosts),
    baselineScore: baseline,
    exploreFloorPct: 16,
    recommendedLane,
    exploreLane,
    rankedFormatIds: lanes.filter((lane) => lane.status !== "hold").map((lane) => lane.id),
    lanes,
    promptPatch: [
      "CODEX CONTENT BANDIT PATCH",
      "mode: derived_cached_ucb_allocator",
      "zero_extra_x_reads: true",
      `primary_format: ${recommendedLane?.id || "-"}`,
      exploreLane ? `exploration_lane: ${exploreLane.id}` : null,
      `hook_bias: ${hook.recommendedPattern?.label || "first-line fire-control"}`,
    ].filter(Boolean).join("\n"),
    nextAction: recommendedLane ? `Allocate next candidates toward ${recommendedLane.label}.` : "-",
  };
}

function contentBanditAllocatorData() {
  return dashboardData.contentBanditAllocator || fallbackData.contentBanditAllocator || derivedContentBanditAllocator();
}

function renderContentBanditAllocator() {
  const allocator = contentBanditAllocatorData();
  const container = $("#content-bandit-allocator");
  if (!container) return;
  const lanes = Array.isArray(allocator.lanes) ? allocator.lanes : [];
  if (!lanes.length) {
    container.innerHTML = `<p class="empty-state">${escapeHtml(t("bandit_empty"))}</p>`;
    return;
  }
  const primary = allocator.recommendedLane || lanes.find((lane) => lane.status !== "hold") || lanes[0] || {};
  const explore = allocator.exploreLane || lanes.find((lane) => lane.status === "explore") || {};
  const promptPatch = allocator.promptPatch || "";
  container.innerHTML = `
    <div class="bandit-head">
      <div>
        <span>${escapeHtml(t("bandit_eyebrow"))}</span>
        <strong>${escapeHtml(t("bandit_title"))}</strong>
      </div>
      <em>${escapeHtml(t("bandit_zero_reads"))}</em>
    </div>
    <div class="bandit-core">
      <div class="bandit-primary">
        <span>${escapeHtml(t("bandit_primary"))}</span>
        <strong>${escapeHtml(primary.label || primary.id || "-")}</strong>
        <small>${escapeHtml(primary.nextAction || allocator.nextAction || "-")}</small>
      </div>
      <div class="bandit-explore">
        <span>${escapeHtml(t("bandit_explore"))}</span>
        <strong>${escapeHtml(explore.label || explore.id || "-")}</strong>
        <small>${escapeHtml(t("bandit_explore_floor", { pct: formatNumber(allocator.exploreFloorPct, 1) }))}</small>
      </div>
      <div class="bandit-confidence">
        <span>${escapeHtml(t("bandit_confidence"))}</span>
        <strong>${escapeHtml(allocator.confidence || "-")}</strong>
        <small>${escapeHtml(t("bandit_samples", { count: formatNumber(allocator.sampleCount) }))}</small>
      </div>
    </div>
    <div class="bandit-lanes">
      ${lanes.slice(0, 8).map((lane) => {
        const pct = clamp(number(lane.allocationPct), 0, 100);
        return `
          <article class="${escapeHtml(lane.status || "test")}" style="--bandit-pct:${pct.toFixed(1)}%">
            <div class="bandit-rank">${escapeHtml(String(lane.rank || "-").padStart(2, "0"))}</div>
            <div class="bandit-body">
              <div>
                <strong>${escapeHtml(lane.label || lane.id || "-")}</strong>
                <em>${escapeHtml(lane.status || "test")} · ${escapeHtml(formatNumber(pct, 1))}%</em>
              </div>
              <dl>
                <div><dt>${escapeHtml(t("bandit_avg"))}</dt><dd>${escapeHtml(formatNumber(lane.avgScore, 1))}</dd></div>
                <div><dt>${escapeHtml(t("bandit_samples_short"))}</dt><dd>${escapeHtml(formatNumber(lane.samples))}</dd></div>
                <div><dt>${escapeHtml(t("bandit_ucb"))}</dt><dd>${escapeHtml(formatNumber(lane.uncertainty, 2))}</dd></div>
                <div><dt>${escapeHtml(t("bandit_lift"))}</dt><dd>${escapeHtml(lane.liftPct == null ? "-" : `${formatNumber(lane.liftPct, 1)}%`)}</dd></div>
              </dl>
              <i></i>
            </div>
          </article>
        `;
      }).join("")}
    </div>
    <div class="bandit-patch">
      <div>
        <span>${escapeHtml(t("bandit_prompt_patch"))}</span>
        <button type="button" data-copy="${encodeURIComponent(promptPatch)}">${escapeHtml(t("bandit_copy_patch"))}</button>
      </div>
      <pre><code>${escapeHtml(promptPatch)}</code></pre>
    </div>
  `;
}

function compactContractArm(arm) {
  if (!arm) return null;
  return {
    id: arm.id || arm.formatId || "-",
    label: arm.label || arm.formatLabel || formatTemplate(arm.id || arm.formatId || "-"),
    status: arm.status || arm.action || "watch",
    allocationPct: arm.allocationPct == null ? null : number(arm.allocationPct),
    avgScore: arm.avgScore == null ? null : number(arm.avgScore),
    samples: number(arm.samples),
    liftPct: arm.liftPct == null ? null : number(arm.liftPct),
    nextAction: arm.nextAction || arm.directive || arm.reason || "",
  };
}

function learningLoopContractData() {
  const incoming = dashboardData.learningLoopContract || fallbackData.learningLoopContract;
  if (incoming?.cells?.length || incoming?.primaryArm || incoming?.policy) return incoming;

  const autopilot = learningAutopilotData();
  const bandit = contentBanditAllocatorData();
  const trace = generationDecisionTraceData();
  const policy = dashboardData.cachedGenerationPolicy || fallbackData.cachedGenerationPolicy || trace?.cachedGenerationPolicy || {};
  const lanes = Array.isArray(bandit.lanes) ? bandit.lanes : [];
  const primaryArm = compactContractArm(
    bandit.recommendedLane || lanes.find((lane) => lane.status === "exploit") || autopilot.primaryFormat || null,
  ) || {
    id: policy.primaryFormatId || "-",
    label: policy.primaryFormatLabel || formatTemplate(policy.primaryFormatId || "-"),
    status: "policy",
    samples: 0,
  };
  const exploreArm = compactContractArm(
    bandit.exploreLane || lanes.find((lane) => lane.status === "explore") || (autopilot.exploreFormats || [])[0] || null,
  );
  const holdArms = [
    ...lanes.filter((lane) => lane.status === "hold").map(compactContractArm).filter(Boolean),
    ...(autopilot.holdFormats || []).map(compactContractArm).filter(Boolean),
  ].filter((arm, index, all) => arm.id && all.findIndex((item) => item.id === arm.id) === index).slice(0, 3);
  const sampleCount = number(bandit.sampleCount, number(autopilot.sampleCount, number((dashboardData.profile || fallbackData.profile || {}).measuredPosts)));
  const selectedCandidate = trace?.selectedCandidate || (trace?.candidates || []).find((candidate) => candidate.selected) || {};
  const selectedTrace = {
    templateId: trace?.selectedTemplateId || selectedCandidate.templateId || "-",
    score: number(trace?.selectedScore, number(selectedCandidate.score)),
    policyScore: selectedCandidate.cachedGenerationPolicyScore == null ? null : number(selectedCandidate.cachedGenerationPolicyScore),
    banditScore: selectedCandidate.contentBanditScore == null ? null : number(selectedCandidate.contentBanditScore),
    source: selectedCandidate.generationSource || trace?.localFallback?.mode || "cached_policy",
  };
  const confidence = policy.confidence || bandit.confidence || autopilot.confidence || "low";
  const primaryValue = primaryArm.id || policy.primaryFormatId || "-";
  return {
    generatedAt: dashboardData.updatedAt || fallbackData.updatedAt,
    mode: "derived_cached_learning_contract",
    status: sampleCount > 0 ? "online" : "warming",
    confidence,
    zeroExtraXReads: true,
    estimatedXReadOps: 0,
    estimatedIncrementalXApiUsd: 0,
    source: "derived cached policy bus",
    sampleCount,
    baselineScore: number((dashboardData.profile || fallbackData.profile || {}).baselineScore),
    primaryArm,
    exploreArm,
    holdArms,
    selectedTrace,
    policy: {
      mode: policy.mode || "cached_generation_policy",
      confidence,
      primaryFormatId: policy.primaryFormatId || primaryArm.id || null,
      primaryFormatLabel: policy.primaryFormatLabel || primaryArm.label || null,
      exploreFormatId: policy.exploreFormatId || exploreArm?.id || null,
      rankedFormatIds: [policy.primaryFormatId, ...(policy.rankedFormatIds || []), ...(bandit.rankedFormatIds || [])].filter(Boolean).slice(0, 8),
      avoidFormatIds: [...(policy.avoidFormatIds || []), ...holdArms.map((arm) => arm.id)].filter(Boolean).slice(0, 8),
      promptBias: (policy.directives || autopilot.directives || []).filter(Boolean).slice(0, 4),
      zeroExtraXReads: true,
    },
    cells: [
      { id: "sample_ledger", label: "SAMPLE_LEDGER", value: sampleCount, status: sampleCount > 0 ? "ok" : "warn", detail: `${formatNumber(sampleCount)} cached packets` },
      { id: "primary_arm", label: "PRIMARY_ARM", value: primaryValue, status: primaryArm.status === "hold" ? "warn" : "ok", detail: primaryArm.label },
      { id: "read_gate", label: "READ_GATE", value: "0 X reads", status: "ok", detail: "cached-only learning bus" },
      { id: "policy_patch", label: "POLICY_PATCH", value: primaryValue, status: primaryValue === "-" ? "warn" : "ok", detail: confidence },
    ],
    nextAction: bandit.nextAction || (policy.directives || autopilot.directives || [])[0] || "-",
    guardrails: [
      "Cached analytics only; 0 X search/read ops.",
      "No auto-replies, no scraping, no rate-limit bypass.",
      "Manual route work stays human-reviewed.",
    ],
  };
}

function renderContractArm(arm, labelKey) {
  if (!arm) return "";
  const allocation = arm.allocationPct == null ? "-" : `${formatNumber(arm.allocationPct, 1)}%`;
  const score = arm.avgScore == null ? "-" : formatNumber(arm.avgScore, 1);
  return `
    <article class="${escapeHtml(arm.status || "watch")}">
      <span>${escapeHtml(t(labelKey))}</span>
      <strong>${escapeHtml(arm.label || arm.id || "-")}</strong>
      <small>${escapeHtml(arm.status || "watch")} · alloc ${escapeHtml(allocation)} · score ${escapeHtml(score)} · n=${escapeHtml(formatNumber(arm.samples))}</small>
    </article>
  `;
}

function renderLearningLoopContract() {
  const contract = learningLoopContractData();
  const container = $("#learning-contract");
  if (!container) return;
  if (!contract) {
    container.innerHTML = `<p class="empty-state">${escapeHtml(t("learning_contract_empty"))}</p>`;
    return;
  }
  const cells = Array.isArray(contract.cells) ? contract.cells : [];
  const policy = contract.policy || {};
  const promptBias = Array.isArray(policy.promptBias) ? policy.promptBias : [];
  const guardrails = Array.isArray(contract.guardrails) ? contract.guardrails : [];
  const hold = (contract.holdArms || [])[0] || null;
  const selected = contract.selectedTrace || {};
  const copyBlock = [
    "CODEX LEARNING LOOP CONTRACT",
    `mode: ${contract.mode || "cached_learning_contract"}`,
    `status: ${contract.status || "-"}`,
    `confidence: ${contract.confidence || "-"}`,
    "x_reads: 0",
    `primary_arm: ${contract.primaryArm?.id || policy.primaryFormatId || "-"}`,
    contract.exploreArm?.id ? `explore_arm: ${contract.exploreArm.id}` : null,
    policy.avoidFormatIds?.length ? `avoid: ${policy.avoidFormatIds.join(", ")}` : null,
    contract.nextAction ? `next: ${contract.nextAction}` : null,
    ...promptBias.map((item) => `bias: ${item}`),
  ].filter(Boolean).join("\n");

  container.innerHTML = `
    <div class="learning-contract-head">
      <div>
        <span>${escapeHtml(t("learning_contract_eyebrow"))}</span>
        <strong>${escapeHtml(t("learning_contract_title"))}</strong>
      </div>
      <em>${escapeHtml(t("learning_contract_zero_reads"))}</em>
    </div>
    <div class="learning-contract-cells">
      ${cells.slice(0, 4).map((cell) => `
        <article class="${escapeHtml(cell.status || "ok")}">
          <span>${escapeHtml(cell.label || cell.id || "-")}</span>
          <strong>${escapeHtml(String(cell.value ?? "-"))}</strong>
          <small>${escapeHtml(cell.detail || "")}</small>
        </article>
      `).join("")}
    </div>
    <div class="learning-contract-arms">
      ${renderContractArm(contract.primaryArm, "learning_contract_primary")}
      ${renderContractArm(contract.exploreArm, "learning_contract_explore")}
      ${renderContractArm(hold, "learning_contract_hold")}
    </div>
    <div class="learning-contract-policy">
      <article>
        <span>${escapeHtml(t("learning_contract_selected"))}</span>
        <strong>${escapeHtml(selected.templateId || "-")}</strong>
        <small>${escapeHtml(selected.source || "cached_policy")} · score ${escapeHtml(formatNumber(selected.score, 1))} · policy ${escapeHtml(selected.policyScore == null ? "-" : formatNumber(selected.policyScore, 1))} · bandit ${escapeHtml(selected.banditScore == null ? "-" : formatNumber(selected.banditScore, 1))}</small>
      </article>
      <article>
        <span>${escapeHtml(t("learning_contract_policy"))}</span>
        <strong>${escapeHtml(policy.primaryFormatLabel || formatTemplate(policy.primaryFormatId || "-"))}</strong>
        <small>${escapeHtml((policy.rankedFormatIds || []).slice(0, 5).join(" / ") || "-")}</small>
      </article>
      <button type="button" data-copy="${encodeURIComponent(copyBlock)}">${escapeHtml(t("learning_contract_copy"))}</button>
    </div>
    <div class="learning-contract-next">
      <span>${escapeHtml(t("learning_contract_next"))}</span>
      <code>${escapeHtml(contract.nextAction || "-")}</code>
    </div>
    <div class="learning-contract-guards">
      <span>${escapeHtml(t("learning_contract_guardrails"))}</span>
      ${guardrails.slice(0, 4).map((item) => `<code>${escapeHtml(item)}</code>`).join("")}
    </div>
  `;
}

function banditSettlementPosts() {
  const pools = [
    ...(Array.isArray(dashboardData.last24h?.topPosts) ? dashboardData.last24h.topPosts : []),
    ...(Array.isArray(dashboardData.last7d?.topPosts) ? dashboardData.last7d.topPosts : []),
    ...(Array.isArray(fallbackData.last24h?.topPosts) ? fallbackData.last24h.topPosts : []),
    ...(Array.isArray(fallbackData.last7d?.topPosts) ? fallbackData.last7d.topPosts : []),
  ];
  const seen = new Set();
  return pools
    .filter((post) => post?.template || post?.formatId || post?.templateId)
    .filter((post) => {
      const key = post.id || post.url || post.text;
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((left, right) => new Date(right.postedAt || 0) - new Date(left.postedAt || 0));
}

function derivedBanditRewardSettlement() {
  const allocator = contentBanditAllocatorData();
  const lanes = Array.isArray(allocator.lanes) ? allocator.lanes : [];
  const laneById = new Map(lanes.map((lane) => [lane.id, lane]));
  const posts = banditSettlementPosts();
  const baseline = number((dashboardData.profile || fallbackData.profile || {}).baselineScore, number(allocator.baselineScore, 0));
  const minSamples = Math.max(1, Math.min(2, number(allocator.sampleCount, posts.length) > 8 ? 2 : 1));
  const byArm = new Map();
  const ensureArm = (id, label) => {
    const key = id || "unknown";
    if (!byArm.has(key)) {
      byArm.set(key, {
        id: key,
        label: label || laneById.get(key)?.label || formatTemplate(key),
        samples: 0,
        totalReward: 0,
        recentSamples: 0,
        recentTotalReward: 0,
      });
    }
    return byArm.get(key);
  };
  lanes.forEach((lane) => ensureArm(lane.id, lane.label));
  posts.forEach((post, index) => {
    const id = post.template || post.templateId || post.formatId || "unknown";
    const arm = ensureArm(id, formatTemplate(id));
    const reward = number(post.score);
    arm.samples += 1;
    arm.totalReward += reward;
    if (index < 10) {
      arm.recentSamples += 1;
      arm.recentTotalReward += reward;
    }
  });
  const totalSamples = Math.max(1, [...byArm.values()].reduce((sum, arm) => sum + arm.samples, 0));
  const bestReward = Math.max(
    baseline,
    ...[...byArm.values()].map((arm) => arm.samples >= minSamples ? arm.totalReward / Math.max(1, arm.samples) : 0),
    0,
  );
  const arms = [...byArm.values()].map((arm) => {
    const lane = laneById.get(arm.id) || {};
    const avgReward = arm.totalReward / Math.max(1, arm.samples);
    const recentAvgReward = arm.recentTotalReward / Math.max(1, arm.recentSamples);
    const rewardIndex = bestReward > 0 ? (avgReward / bestReward) * 100 : 0;
    const allocationPct = number(lane.allocationPct);
    const actualSharePct = arm.samples / totalSamples * 100;
    const baselineLiftPct = baseline > 0 && arm.samples >= minSamples ? ((avgReward - baseline) / baseline) * 100 : null;
    const overAllocated = allocationPct > 0 && actualSharePct > allocationPct * 1.45;
    const underAllocated = allocationPct > 0 && actualSharePct < allocationPct * 0.45;
    const status =
      arm.samples >= minSamples && rewardIndex >= 92
        ? "winner"
        : arm.samples >= minSamples && baselineLiftPct !== null && baselineLiftPct < -18
          ? "regret"
          : overAllocated
            ? "over"
            : underAllocated
              ? "under"
              : "collect";
    return {
      id: arm.id,
      label: arm.label,
      status,
      samples: arm.samples,
      recentSamples: arm.recentSamples,
      avgReward,
      recentAvgReward,
      rewardIndex,
      regret: Math.max(0, bestReward - avgReward),
      recentRegret: Math.max(0, bestReward - recentAvgReward),
      baselineLiftPct,
      allocationPct,
      actualSharePct,
      laneStatus: lane.status || null,
      nextAction: lane.nextAction || `Keep ${arm.label} in controlled reward settlement.`,
    };
  }).sort((left, right) => {
    const priority = { winner: 4, under: 3, collect: 2, over: 1, regret: 0 };
    return (priority[right.status] || 0) - (priority[left.status] || 0) || right.rewardIndex - left.rewardIndex;
  });
  const bestArm = arms.find((arm) => arm.status === "winner") || [...arms].sort((left, right) => right.rewardIndex - left.rewardIndex)[0] || null;
  const recentSettlements = posts.slice(0, 10).map((post) => {
    const formatId = post.template || post.templateId || post.formatId || "-";
    const predicted = post.generationDecisionTrace?.contentBandit?.recommendedLane?.id || null;
    const reward = number(post.score);
    return {
      id: post.id || null,
      url: post.url || null,
      formatId,
      reward,
      regret: Math.max(0, bestReward - reward),
      predictedPrimary: predicted,
      matchedPrimary: predicted ? predicted === formatId : null,
      postedAt: post.postedAt || null,
      text: firstPostLine(post.text),
    };
  });
  const avgRecentRegret = recentSettlements.length
    ? recentSettlements.reduce((sum, item) => sum + item.regret, 0) / recentSettlements.length
    : 0;
  return {
    mode: "derived_cached_bandit_reward_settlement",
    zeroExtraXReads: true,
    confidence: posts.length >= 16 ? "medium" : "low",
    sampleCount: posts.length,
    baselineScore: baseline,
    bestReward,
    avgRecentRegret,
    bestArm,
    regretArms: arms.filter((arm) => arm.status === "regret" || arm.status === "over").slice(0, 3),
    arms,
    recentSettlements,
    nextAction: bestArm ? `Settle reward toward ${bestArm.label}; keep exploration floor active.` : "-",
  };
}

function banditRewardSettlementData() {
  return dashboardData.contentBanditSettlement || fallbackData.contentBanditSettlement || derivedBanditRewardSettlement();
}

function connLaneTone(status) {
  if (status === "exploit") return "exploit";
  if (status === "probe") return "probe";
  if (status === "hold") return "hold";
  return "watch";
}

function derivedActiveConnConversionOptimizer() {
  const posts = banditSettlementPosts();
  const allocator = contentBanditAllocatorData();
  const audience = audienceRouterData();
  const kinetics = growthKineticsData();
  const goal = goalData();
  const followerDelta = number((dashboardData.profile || fallbackData.profile || {}).followerDelta, number(kinetics.followerDelta));
  const totalImpressions = posts.reduce((sum, post) => sum + number(post.impressions), 0);
  const observedConversionPer1k = totalImpressions > 0 && followerDelta > 0 ? (followerDelta / totalImpressions) * 1000 : 0;
  const fallbackConversionPer1k = number(kinetics.effectiveConversionPer1k, 0.8);
  const groups = new Map();
  const addLane = (kind, id, label, post = null, scoreBoost = 0) => {
    if (!id) return;
    const key = `${kind}:${id}`;
    const lane = groups.get(key) || {
      id: key,
      bucketId: id,
      kind,
      label: label || formatTemplate(id),
      samples: 0,
      impressions: 0,
      engagements: 0,
      profileClicks: 0,
      totalScore: 0,
      examples: [],
      boost: 0,
    };
    lane.boost += scoreBoost;
    if (post) {
      lane.samples += 1;
      lane.impressions += number(post.impressions);
      lane.engagements += number(post.likes) + number(post.reposts) + number(post.retweets) + number(post.replies) + number(post.quotes);
      lane.totalScore += number(post.score);
      if (lane.examples.length < 2) {
        lane.examples.push({
          id: post.id || null,
          text: firstPostLine(post.text || ""),
          url: post.url || null,
          score: number(post.score),
        });
      }
    }
    groups.set(key, lane);
  };
  posts.forEach((post) => {
    const formatId = post.template || post.templateId || post.formatId || "unknown";
    addLane("format", formatId, formatTemplate(formatId), post);
    const sourceId = post.source || post.newsSource || post.sourceTier || "";
    if (sourceId) addLane("source", sourceId, sourceId, post);
  });
  (allocator.lanes || []).forEach((lane) => addLane("format", lane.id, lane.label || formatTemplate(lane.id), null, number(lane.allocationPct) * 0.12));
  (audience.segments || []).forEach((segment) => addLane("audience", segment.id, segment.label || segment.id, null, number(segment.score) * 0.9));
  const rawLanes = [...groups.values()].map((lane) => {
    const avgScore = lane.samples ? lane.totalScore / lane.samples : number((allocator.lanes || []).find((item) => item.id === lane.bucketId)?.avgScore);
    const engagementRate = lane.impressions > 0 ? (lane.engagements / lane.impressions) * 100 : 0;
    const conversionScore = clamp(
      18 +
        Math.min(30, avgScore * 4.8) +
        Math.min(20, engagementRate * 3.2) +
        Math.min(18, lane.samples * 2.4) +
        Math.min(14, lane.boost),
      0,
      100,
    );
    const expectedConnPer1k = (observedConversionPer1k || fallbackConversionPer1k) * (0.64 + conversionScore / 92);
    const status = lane.samples >= 2 && conversionScore >= 70
      ? "exploit"
      : conversionScore >= 52
        ? "probe"
        : conversionScore >= 36
          ? "watch"
          : "hold";
    return {
      ...lane,
      status,
      sampleConfidence: lane.samples >= 6 ? "high" : lane.samples >= 2 ? "medium" : "low",
      avgScore,
      engagementRate,
      profileClickPer1k: 0,
      expectedConnPer1k,
      conversionScore,
      nextAction: status === "exploit"
        ? `Exploit ${lane.label}; it currently has the strongest active-conn proxy.`
        : status === "probe"
          ? `Probe ${lane.label} once more before scaling.`
          : status === "watch"
            ? `Use ${lane.label} only when story-fit is strong.`
            : `Hold ${lane.label} until measured conversion improves.`,
    };
  }).sort((left, right) => {
    const rank = { exploit: 4, probe: 3, watch: 2, hold: 1 };
    return (rank[right.status] || 0) - (rank[left.status] || 0) || right.conversionScore - left.conversionScore;
  });
  const primaryLane = rawLanes.find((lane) => lane.status === "exploit") || rawLanes.find((lane) => lane.status === "probe") || rawLanes[0] || null;
  const score = clamp(
    14 +
      Math.min(36, number(primaryLane?.conversionScore) * 0.46) +
      Math.min(20, posts.length * 1.2) +
      (followerDelta > 0 ? Math.min(14, followerDelta * 5) : followerDelta < 0 ? -10 : 0),
    0,
    100,
  );
  return {
    generatedAt: dashboardData.updatedAt || fallbackData.updatedAt || new Date().toISOString(),
    mode: score >= 64 ? "derived_conversion_exploit" : score >= 38 ? "derived_conversion_probe" : "derived_conversion_starved",
    severity: score >= 64 ? "ok" : score >= 38 ? "warn" : "danger",
    zeroExtraXReads: true,
    source: "derived cached dashboard telemetry",
    conversionScore: score,
    observedConversionPer1k,
    fallbackConversionPer1k,
    activeConnDelta: followerDelta,
    sampleCount: posts.length || number(goal.current),
    profileClicks: 0,
    profileClickPer1k: 0,
    primaryLaneId: primaryLane?.id || null,
    primaryLane,
    nextAction: primaryLane
      ? `${primaryLane.status === "hold" ? "Do not force" : "Bias next packet toward"} ${primaryLane.label}; expected ${formatNumber(primaryLane.expectedConnPer1k, 2)} active conns / 1k L7 events.`
      : "Collect more measured packets before trusting conversion allocation.",
    promptDirectives: [
      primaryLane ? `Lead with ${primaryLane.label}; optimize for active-conn utility, not raw L7 event count.` : null,
      allocator.recommendedLane?.label ? `Keep format aligned with ${allocator.recommendedLane.label}.` : null,
      audience.nextAction || null,
      "Make the first line a reusable rule, cost, or prediction a tech-curious reader would follow for.",
    ].filter(Boolean).slice(0, 4),
    gates: [
      { id: "x_reads", label: "X read ops", value: "0", status: "ok" },
      { id: "samples", label: "conversion samples", value: formatNumber(posts.length), status: posts.length >= 12 ? "ok" : "warn" },
      { id: "profile_clicks", label: "intent proxy", value: "0", status: "warn" },
      { id: "active_delta", label: "active conn delta", value: `${followerDelta >= 0 ? "+" : ""}${formatNumber(followerDelta)}`, status: followerDelta > 0 ? "ok" : followerDelta < 0 ? "danger" : "warn" },
    ],
    lanes: rawLanes.slice(0, 9),
  };
}

function activeConnConversionOptimizerData() {
  const incoming = dashboardData.activeConnConversionOptimizer || fallbackData.activeConnConversionOptimizer;
  if (incoming?.lanes?.length) return incoming;
  return derivedActiveConnConversionOptimizer();
}

function renderActiveConnConversionOptimizer() {
  const optimizer = activeConnConversionOptimizerData();
  const container = $("#active-conn-optimizer");
  if (!container) return;
  const lanes = Array.isArray(optimizer.lanes) ? optimizer.lanes : [];
  if (!lanes.length) {
    container.innerHTML = `<p class="empty-state">${escapeHtml(t("conn_empty"))}</p>`;
    return;
  }
  const primary = optimizer.primaryLane || lanes.find((lane) => lane.id === optimizer.primaryLaneId) || lanes[0] || {};
  const score = clamp(number(optimizer.conversionScore), 0, 100);
  const gates = Array.isArray(optimizer.gates) ? optimizer.gates : [];
  const directives = Array.isArray(optimizer.promptDirectives) ? optimizer.promptDirectives : [];
  container.innerHTML = `
    <div class="conn-head">
      <div>
        <span>${escapeHtml(t("conn_eyebrow"))}</span>
        <strong>${escapeHtml(t("conn_title"))}</strong>
      </div>
      <em>${escapeHtml(t("conn_zero_reads"))}</em>
    </div>
    <div class="conn-core ${escapeHtml(optimizer.severity || "warn")}">
      <div class="conn-score" style="--conn-score:${score.toFixed(1)}%">
        <span>${escapeHtml(t("conn_score"))}</span>
        <strong>${escapeHtml(formatNumber(score, 1))}</strong>
        <div><i></i></div>
      </div>
      <div class="conn-primary">
        <span>${escapeHtml(t("conn_primary"))}</span>
        <strong>${escapeHtml(primary.label || primary.id || "-")}</strong>
        <small>${escapeHtml(primary.kind || "-")} · ${escapeHtml(primary.status || "-")} · ${escapeHtml(t("conn_samples", { count: formatNumber(primary.samples) }))}</small>
      </div>
      <div class="conn-next">
        <span>${escapeHtml(t("conn_next"))}</span>
        <code>${escapeHtml(optimizer.nextAction || primary.nextAction || "-")}</code>
      </div>
    </div>
    <div class="conn-metrics">
      <span><em>${escapeHtml(t("conn_conn1k"))}</em><strong>${escapeHtml(formatNumber(primary.expectedConnPer1k ?? optimizer.observedConversionPer1k ?? optimizer.fallbackConversionPer1k, 2))}</strong></span>
      <span><em>${escapeHtml(t("conn_profile_proxy"))}</em><strong>${escapeHtml(formatNumber(optimizer.profileClickPer1k, 2))}/1k</strong></span>
      <span><em>${escapeHtml(t("conn_delta"))}</em><strong>${escapeHtml(`${number(optimizer.activeConnDelta) >= 0 ? "+" : ""}${formatNumber(optimizer.activeConnDelta)}`)}</strong></span>
      <span><em>${escapeHtml(t("conn_samples", { count: "" }).trim())}</em><strong>${escapeHtml(formatNumber(optimizer.sampleCount))}</strong></span>
    </div>
    <div class="conn-section-title">
      <span>${escapeHtml(t("conn_lanes"))}</span>
      <strong>${escapeHtml(optimizer.mode || "-")}</strong>
    </div>
    <div class="conn-lanes">
      ${lanes.slice(0, 9).map((lane, index) => {
        const laneScore = clamp(number(lane.conversionScore), 0, 100);
        return `
          <article class="${escapeHtml(connLaneTone(lane.status))}" style="--conn-lane-score:${laneScore.toFixed(1)}%">
            <div class="conn-rank">${escapeHtml(String(index + 1).padStart(2, "0"))}</div>
            <div class="conn-lane-body">
              <div>
                <strong>${escapeHtml(lane.label || lane.id || "-")}</strong>
                <em>${escapeHtml(t("conn_kind"))}: ${escapeHtml(lane.kind || "-")} · ${escapeHtml(lane.status || "-")}</em>
              </div>
              <dl>
                <div><dt>${escapeHtml(t("conn_score"))}</dt><dd>${escapeHtml(formatNumber(laneScore, 1))}</dd></div>
                <div><dt>${escapeHtml(t("conn_conn1k"))}</dt><dd>${escapeHtml(formatNumber(lane.expectedConnPer1k, 2))}</dd></div>
                <div><dt>ACK %</dt><dd>${escapeHtml(formatNumber(lane.engagementRate, 2))}</dd></div>
                <div><dt>${escapeHtml(t("bandit_samples_short"))}</dt><dd>${escapeHtml(formatNumber(lane.samples))}</dd></div>
              </dl>
              <p>${escapeHtml(lane.nextAction || "-")}</p>
              <i></i>
            </div>
          </article>
        `;
      }).join("")}
    </div>
    <div class="conn-footer-grid">
      <div class="conn-gates">
        <span>${escapeHtml(t("conn_gates"))}</span>
        ${gates.slice(0, 4).map((gate) => `
          <code class="${escapeHtml(gate.status || "warn")}">${escapeHtml(gate.label || gate.id || "-")}: ${escapeHtml(gate.value ?? "-")}</code>
        `).join("")}
      </div>
      <div class="conn-directives">
        <span>${escapeHtml(t("conn_directives"))}</span>
        ${directives.slice(0, 4).map((item) => `<code>${escapeHtml(item)}</code>`).join("")}
      </div>
    </div>
  `;
}

function narrativePillarCatalog() {
  return [
    {
      id: "operator_leverage",
      label: "Operator Leverage",
      targetSharePct: 30,
      broadness: 1.12,
      pattern: /(workflow|operator|ops|automation|agent|permission|eval|rollback|incident|tooling|developer|devtools|api|sdk|github|cursor|vercel|cloudflare|工程|开发|自动化|工具|权限|回滚)/i,
      directive: "Translate the story into builder leverage, workflow cost, permissions, or rollback policy.",
      lexicon: ["workflow", "operator", "permission", "rollback", "tooling", "automation"],
    },
    {
      id: "platform_control",
      label: "Platform Control",
      targetSharePct: 24,
      broadness: 1.18,
      pattern: /(apple|google|microsoft|meta|amazon|youtube|tiktok|app store|browser|os|platform|default|distribution|policy|privacy|苹果|谷歌|微软|平台|默认|分发|隐私)/i,
      directive: "Frame it as defaults, distribution, margin, privacy, or platform control.",
      lexicon: ["default", "distribution", "policy", "privacy", "control", "lock-in"],
    },
    {
      id: "consumer_behavior",
      label: "Consumer Behavior",
      targetSharePct: 18,
      broadness: 1.22,
      pattern: /(consumer|user|creator|iphone|android|mobile|app\b|apps\b|social|notification|ranking|onboarding|retention|用户|消费者|创作者|手机|应用|通知|留存)/i,
      directive: "Show how a product or device changes user behavior, habits, or distribution loops.",
      lexicon: ["users", "creators", "notifications", "onboarding", "retention", "habit"],
    },
    {
      id: "risk_boundary",
      label: "Risk Boundary",
      targetSharePct: 14,
      broadness: 1.02,
      pattern: /(security|privacy|breach|cve|auth|compliance|encryption|trust|cloud|aws|azure|gcp|incident|安全|隐私|信任|合规|云)/i,
      directive: "Lead with risk transfer, trust boundaries, compliance cost, or incident response.",
      lexicon: ["risk", "trust", "auth", "compliance", "incident", "privacy", "security"],
    },
    {
      id: "market_timing",
      label: "Market Timing",
      targetSharePct: 14,
      broadness: 1.08,
      pattern: /(startup|founder|pricing|revenue|market|funding|launch|saas|ipo|acquisition|open source|创业|融资|商业化|定价|市场)/i,
      directive: "Convert the signal into timing, pricing, GTM, or business-model leverage.",
      lexicon: ["pricing", "market", "timing", "distribution", "revenue", "GTM"],
    },
  ];
}

function classifyNarrativePillar(post) {
  const explicit = post?.narrativePillar;
  if (explicit?.id) return explicit;
  const haystack = [
    post?.text,
    post?.title,
    post?.summary,
    post?.source,
    post?.template,
    post?.formatId,
  ].filter(Boolean).join(" ");
  const lower = haystack.toLowerCase();
  const matches = narrativePillarCatalog()
    .map((pillar) => {
      if (!pillar.pattern.test(haystack)) return null;
      const lexiconHits = (pillar.lexicon || []).filter((word) => lower.includes(String(word).toLowerCase())).length;
      return {
        ...pillar,
        matchScore: pillar.broadness + Math.min(0.28, lexiconHits * 0.04),
      };
    })
    .filter(Boolean)
    .sort((left, right) => right.matchScore - left.matchScore);
  return matches[0] || {
    id: "tech_signal",
    label: "Tech Signal",
    targetSharePct: 0,
    directive: "Keep one concrete tech signal and one reusable operating rule.",
    lexicon: ["signal", "rule", "tradeoff"],
    matchScore: 0.5,
  };
}

function narrativeTone(status) {
  if (status === "exploit") return "exploit";
  if (status === "expand") return "expand";
  if (status === "probe") return "probe";
  if (status === "hold") return "hold";
  return "watch";
}

function derivedNarrativeResonanceController() {
  const posts = banditSettlementPosts();
  const baseline = number((dashboardData.profile || fallbackData.profile || {}).baselineScore, 0);
  const minSamples = posts.length > 10 ? 2 : 1;
  const catalog = narrativePillarCatalog();
  const buckets = new Map(catalog.map((pillar) => [pillar.id, {
    ...pillar,
    samples: 0,
    totalScore: 0,
    impressions: 0,
    engagements: 0,
    examples: [],
  }]));

  for (const post of posts) {
    const pillar = classifyNarrativePillar(post);
    const bucket = buckets.get(pillar.id) || {
      ...pillar,
      samples: 0,
      totalScore: 0,
      impressions: 0,
      engagements: 0,
      examples: [],
    };
    const score = number(post.score, baseline);
    const impressions = number(post.impressions);
    const engagements = number(post.likes) + number(post.reposts) + number(post.replies) + number(post.bookmarks);
    bucket.samples += 1;
    bucket.totalScore += score;
    bucket.impressions += impressions;
    bucket.engagements += engagements;
    if (bucket.examples.length < 2) {
      bucket.examples.push({
        text: firstPostLine(post.text),
        score,
        url: post.url || "",
      });
    }
    buckets.set(pillar.id, bucket);
  }

  const totalSamples = Math.max(1, posts.length);
  const pillars = [...buckets.values()].map((bucket) => {
    const avgScore = bucket.samples ? bucket.totalScore / bucket.samples : 0;
    const sharePct = bucket.samples / totalSamples * 100;
    const targetSharePct = number(bucket.targetSharePct);
    const underTarget = targetSharePct > 0 && sharePct < targetSharePct * 0.72;
    const liftPct = baseline > 0 && bucket.samples >= minSamples ? ((avgScore - baseline) / baseline) * 100 : null;
    const engagementRate = bucket.impressions > 0 ? bucket.engagements / bucket.impressions * 100 : 0;
    const score = clamp(
      18 +
        Math.min(30, (avgScore || baseline || 1) * 4.8) +
        Math.min(18, engagementRate * 3) +
        Math.min(14, bucket.samples * 1.8) +
        (underTarget ? 9 * number(bucket.broadness, 1) : 0),
      0,
      100,
    );
    const status = bucket.samples >= minSamples && liftPct !== null && liftPct > 14
      ? "exploit"
      : underTarget
        ? "expand"
        : bucket.samples < minSamples
          ? "probe"
          : liftPct !== null && liftPct < -22
            ? "hold"
            : "watch";
    return {
      id: bucket.id,
      label: bucket.label,
      status,
      score,
      samples: bucket.samples,
      avgScore,
      liftPct,
      sharePct,
      targetSharePct,
      impressions: bucket.impressions,
      engagementRate,
      directive: bucket.directive,
      lexicon: bucket.lexicon || [],
      examples: bucket.examples,
      nextAction: status === "exploit"
        ? `Exploit ${bucket.label}; it already reinforces account memory.`
        : status === "expand"
          ? `Expand ${bucket.label}; broad enough but below target share.`
          : status === "hold"
            ? `Hold ${bucket.label} unless story fit is exceptional.`
            : `Keep ${bucket.label} in controlled rotation.`,
    };
  }).sort((left, right) => {
    const priority = { exploit: 4, expand: 3, probe: 2, watch: 1, hold: 0 };
    return (priority[right.status] || 0) - (priority[left.status] || 0) || right.score - left.score;
  });
  const activeConn = activeConnConversionOptimizerData();
  const primaryPillar = pillars.find((pillar) => pillar.status === "exploit") ||
    pillars.find((pillar) => pillar.status === "expand") ||
    pillars.find((pillar) => pillar.status === "probe") ||
    pillars[0] ||
    null;
  const resonanceScore = clamp(
    16 +
      Math.min(34, number(primaryPillar?.score) * 0.48) +
      Math.min(18, totalSamples * 0.55) +
      Math.min(14, pillars.filter((pillar) => pillar.status === "exploit").length * 6) +
      Math.min(10, pillars.filter((pillar) => pillar.status === "expand").length * 4),
    0,
    100,
  );
  const severity = resonanceScore >= 66 ? "ok" : resonanceScore >= 42 ? "warn" : "danger";
  const accountPromise = "Tech Signals: explain how AI, platforms, apps, cloud, security, and startups change operator leverage, defaults, distribution, and risk.";
  return {
    generatedAt: dashboardData.updatedAt || fallbackData.updatedAt || new Date().toISOString(),
    mode: severity === "ok" ? "derived_narrative_exploit" : severity === "warn" ? "derived_narrative_tune" : "derived_narrative_starved",
    severity,
    zeroExtraXReads: true,
    source: "derived cached dashboard telemetry",
    accountPromise,
    resonanceScore,
    sampleCount: posts.length,
    primaryPillarId: primaryPillar?.id || null,
    primaryPillar,
    pillars,
    nextAction: primaryPillar
      ? `Bias next candidate toward ${primaryPillar.label}; keep ${activeConn.primaryLane?.label || "active-conn"} conversion in view.`
      : "Collect more measured packets before trusting narrative routing.",
    promptDirectives: [
      primaryPillar?.directive || null,
      `Account promise: ${accountPromise}`,
      "Every packet must reinforce one durable memory: leverage, defaults, behavior, risk, or timing.",
      "Prefer reusable rules and tradeoffs over standalone news recap.",
    ].filter(Boolean),
    guardrails: [
      "0 X read ops; cached analytics only.",
      "No ragebait, giveaways, pure recap, or unrelated politics.",
      "Every packet must still read like Tech Signals without opening the profile.",
    ],
  };
}

function narrativeResonanceData() {
  const incoming = dashboardData.narrativeResonanceController || fallbackData.narrativeResonanceController;
  if (incoming?.pillars?.length) return incoming;
  return derivedNarrativeResonanceController();
}

function renderNarrativeResonance() {
  const controller = narrativeResonanceData();
  const container = $("#narrative-resonance");
  if (!container) return;
  const pillars = Array.isArray(controller.pillars) ? controller.pillars : [];
  if (!pillars.length) {
    container.innerHTML = `<p class="empty-state">${escapeHtml(t("narrative_empty"))}</p>`;
    return;
  }
  const primary = controller.primaryPillar || pillars.find((pillar) => pillar.id === controller.primaryPillarId) || pillars[0] || {};
  const score = clamp(number(controller.resonanceScore), 0, 100);
  const directives = Array.isArray(controller.promptDirectives) ? controller.promptDirectives : [];
  const guardrails = Array.isArray(controller.guardrails) ? controller.guardrails : [];
  container.innerHTML = `
    <div class="narrative-head">
      <div>
        <span>${escapeHtml(t("narrative_eyebrow"))}</span>
        <strong>${escapeHtml(t("narrative_title"))}</strong>
      </div>
      <em>${escapeHtml(t("narrative_zero_reads"))}</em>
    </div>
    <div class="narrative-core ${escapeHtml(controller.severity || "warn")}">
      <div class="narrative-score" style="--narrative-score:${score.toFixed(1)}%">
        <span>${escapeHtml(t("narrative_score"))}</span>
        <strong>${escapeHtml(formatNumber(score, 1))}</strong>
        <div><i></i></div>
      </div>
      <div class="narrative-primary">
        <span>${escapeHtml(t("narrative_primary"))}</span>
        <strong>${escapeHtml(primary.label || primary.id || "-")}</strong>
        <small>${escapeHtml(primary.status || "-")} · ${escapeHtml(t("narrative_samples"))} ${escapeHtml(formatNumber(primary.samples))}</small>
      </div>
      <div class="narrative-next">
        <span>${escapeHtml(t("narrative_next"))}</span>
        <code>${escapeHtml(controller.nextAction || primary.nextAction || "-")}</code>
      </div>
    </div>
    <div class="narrative-promise">
      <span>${escapeHtml(t("narrative_promise"))}</span>
      <code>${escapeHtml(controller.accountPromise || "-")}</code>
      <strong>${escapeHtml(controller.mode || "-")}</strong>
    </div>
    <div class="narrative-section-title">
      <span>${escapeHtml(t("narrative_pillars"))}</span>
      <strong>${escapeHtml(`${formatNumber(controller.sampleCount)} packets`)}</strong>
    </div>
    <div class="narrative-pillars">
      ${pillars.slice(0, 6).map((pillar, index) => {
        const pillarScore = clamp(number(pillar.score), 0, 100);
        const share = clamp(number(pillar.sharePct), 0, 100);
        const target = clamp(number(pillar.targetSharePct), 0, 100);
        return `
          <article class="${escapeHtml(narrativeTone(pillar.status))}" style="--narrative-pillar-score:${pillarScore.toFixed(1)}%; --narrative-share:${share.toFixed(1)}%; --narrative-target:${target.toFixed(1)}%">
            <div class="narrative-rank">${escapeHtml(String(index + 1).padStart(2, "0"))}</div>
            <div class="narrative-pillar-body">
              <div>
                <strong>${escapeHtml(pillar.label || pillar.id || "-")}</strong>
                <em>${escapeHtml(pillar.status || "watch")} · ${escapeHtml((pillar.lexicon || []).slice(0, 3).join(" / ") || "signal")}</em>
              </div>
              <dl>
                <div><dt>${escapeHtml(t("narrative_avg"))}</dt><dd>${escapeHtml(formatNumber(pillar.avgScore, 1))}</dd></div>
                <div><dt>${escapeHtml(t("narrative_samples"))}</dt><dd>${escapeHtml(formatNumber(pillar.samples))}</dd></div>
                <div><dt>${escapeHtml(t("narrative_share"))}</dt><dd>${escapeHtml(formatNumber(share, 1))}%</dd></div>
                <div><dt>${escapeHtml(t("narrative_target"))}</dt><dd>${escapeHtml(formatNumber(target, 1))}%</dd></div>
                <div><dt>${escapeHtml(t("narrative_ack"))}</dt><dd>${escapeHtml(formatNumber(pillar.engagementRate, 2))}</dd></div>
              </dl>
              <p>${escapeHtml(pillar.directive || pillar.nextAction || "-")}</p>
              <div class="narrative-sharebar"><span></span><i></i></div>
            </div>
          </article>
        `;
      }).join("")}
    </div>
    <div class="narrative-footer-grid">
      <div class="narrative-directives">
        <span>${escapeHtml(t("narrative_directives"))}</span>
        ${directives.slice(0, 4).map((item) => `<code>${escapeHtml(item)}</code>`).join("")}
      </div>
      <div class="narrative-guardrails">
        <span>${escapeHtml(t("narrative_guardrails"))}</span>
        ${guardrails.slice(0, 4).map((item) => `<code>${escapeHtml(item)}</code>`).join("")}
      </div>
    </div>
  `;
}

function topicTimingRouterData() {
  const incoming = dashboardData.topicTimingRouter || fallbackData.topicTimingRouter;
  if (incoming?.lanes?.length) return incoming;
  return derivedTopicTimingRouter();
}

function derivedTopicTimingRouter() {
  const hourly = hourlyLoadData();
  const matrix = temporalAngleMatrixData();
  const allocator = contentBanditAllocatorData();
  const narrative = narrativeResonanceData();
  const baseline = Math.max(1, number((dashboardData.profile || fallbackData.profile || {}).baselineScore, number(allocator.baselineScore, 1)));
  const windows = [];
  const seenHours = new Set();
  [
    hourly.nextWindow,
    ...(Array.isArray(hourly.bestHours) ? hourly.bestHours : []),
    ...(Array.isArray(matrix.slots) ? matrix.slots : []),
    hourly.currentHour,
  ].filter(Boolean).forEach((item) => {
    const hour = number(item.hour, NaN);
    if (!Number.isFinite(hour) || seenHours.has(hour)) return;
    seenHours.add(hour);
    windows.push({
      hour,
      windowLabel: item.windowLabel || item.label || `${String(hour).padStart(2, "0")}:00`,
      hoursFromNow: number(item.hoursFromNow),
      loadScore: number(item.loadScore, number(item.score)),
      status: item.status || "watch",
      impressions: number(item.impressions),
      posts: number(item.posts, number(item.samples)),
    });
  });
  if (!windows.length) {
    windows.push({ hour: 0, windowLabel: "00:00", hoursFromNow: 0, loadScore: 0, status: "watch", impressions: 0, posts: 0 });
  }

  const pillars = (Array.isArray(narrative.pillars) ? narrative.pillars : [])
    .slice(0, 5)
    .map((pillar) => ({
      id: pillar.id || pillar.label || "signal",
      label: pillar.label || pillar.id || "Signal",
      status: pillar.status || "watch",
      score: number(pillar.score, number(pillar.avgScore) * 10),
      samples: number(pillar.samples),
      avgScore: number(pillar.avgScore),
      engagementRate: number(pillar.engagementRate),
      directive: pillar.directive || pillar.nextAction || "Keep one durable Tech Signals memory.",
    }));
  if (!pillars.length) {
    pillars.push({ id: "operator_leverage", label: "Operator Leverage", status: "watch", score: 36, samples: 0, avgScore: baseline, engagementRate: 0, directive: "Turn the story into one concrete operator rule." });
  }

  const formatSource = Array.isArray(allocator.lanes) && allocator.lanes.length
    ? allocator.lanes
    : Array.isArray(matrix.slots) ? matrix.slots : [];
  const formats = formatSource.slice(0, 5).map((item) => {
    const id = item.id || item.formatId || "decision_rule";
    return {
      id,
      label: item.label || formatTemplate(id),
      status: item.status || item.action || "test",
      score: number(item.allocationScore, number(item.score, number(item.avgScore) * 10)),
      samples: number(item.samples),
      avgScore: number(item.avgScore),
      allocationPct: number(item.allocationPct),
    };
  });
  if (!formats.length) {
    formats.push({ id: "decision_rule", label: "Decision Rule", status: "test", score: baseline * 12, samples: 0, avgScore: baseline, allocationPct: 0 });
  }

  const priority = { exploit: 5, expand: 4, hot: 4, watch: 3, test: 2, probe: 2, explore: 2, seed: 1, hold: -2 };
  const lanes = [];
  windows.slice(0, 4).forEach((window) => {
    pillars.slice(0, 4).forEach((pillar) => {
      formats.slice(0, 4).forEach((format) => {
        const observed = Boolean(number(window.posts) && (number(pillar.samples) || number(format.samples)));
        const avgScore = number(format.avgScore, number(pillar.avgScore));
        const score = clamp(
          10 +
            number(window.loadScore) * 0.3 +
            number(pillar.score) * 0.34 +
            number(format.score) * 0.22 +
            Math.min(10, number(format.allocationPct) * 0.1) +
            Math.min(10, number(pillar.engagementRate) * 2) +
            Math.min(10, number(format.samples) + number(pillar.samples) * 0.4) +
            (priority[pillar.status] || 0) * 2 +
            (priority[format.status] || 0) * 1.5 +
            (avgScore > baseline ? Math.min(10, (avgScore - baseline) * 2.4) : 0),
          0,
          100,
        );
        lanes.push({
          id: `${window.hour}:${pillar.id}:${format.id}`,
          hour: window.hour,
          windowLabel: window.windowLabel,
          hoursFromNow: window.hoursFromNow,
          loadScore: number(window.loadScore),
          pillarId: pillar.id,
          pillarLabel: pillar.label,
          pillarStatus: pillar.status,
          formatId: format.id,
          formatLabel: format.label,
          formatStatus: format.status,
          score,
          samples: Math.max(number(format.samples), number(pillar.samples), number(window.posts)),
          avgScore,
          impressions: number(window.impressions),
          engagementRate: number(pillar.engagementRate),
          observed,
          status: score >= 76 ? "hot" : score >= 58 ? "watch" : observed ? "probe" : "seed",
          directive: `${pillar.directive} Use ${format.label} around ${window.windowLabel} UTC.`,
          reason: `Derived from cached L7 load ${formatNumber(window.loadScore, 1)}, ${pillar.label}, and ${format.label}.`,
        });
      });
    });
  });
  lanes.sort((left, right) => {
    const statusDelta = (priority[right.status] || 0) - (priority[left.status] || 0);
    return statusDelta || number(right.score) - number(left.score) || number(right.samples) - number(left.samples);
  });
  const unique = [];
  const seen = new Set();
  lanes.forEach((lane) => {
    const key = `${lane.hour}:${lane.pillarId}:${lane.formatId}`;
    if (seen.has(key)) return;
    seen.add(key);
    if (unique.length < 10) unique.push(lane);
  });
  const activeLane = unique[0] || null;
  const routerScore = clamp(
    14 +
      number(activeLane?.score) * 0.56 +
      Math.min(16, unique.filter((lane) => lane.observed).length * 3) +
      Math.min(12, unique.filter((lane) => lane.status === "hot").length * 4),
    0,
    100,
  );
  const severity = routerScore >= 68 ? "ok" : routerScore >= 44 ? "warn" : "danger";
  return {
    generatedAt: dashboardData.updatedAt || fallbackData.updatedAt || new Date().toISOString(),
    mode: severity === "ok" ? "derived_topic_timing_exploit" : severity === "warn" ? "derived_topic_timing_seed" : "derived_topic_timing_starved",
    severity,
    source: "derived cached dashboard telemetry",
    zeroExtraXReads: true,
    sampleCount: number((dashboardData.profile || fallbackData.profile || {}).measuredPosts),
    routerScore,
    activeLane,
    lanes: unique,
    nextAction: activeLane
      ? `Bias next packet toward ${activeLane.windowLabel} UTC / ${activeLane.pillarLabel} / ${activeLane.formatLabel}.`
      : "Collect more measured packets before trusting topic timing.",
    promptDirectives: [
      activeLane ? `Topic timing: ${activeLane.windowLabel} UTC -> ${activeLane.pillarLabel} using ${activeLane.formatLabel}.` : null,
      activeLane?.directive || null,
      "If dispatching outside the selected UTC window, keep the pillar but tighten the hook.",
      "0 extra X reads; no live trend scraping required for this timing route.",
    ].filter(Boolean),
    guardrails: [
      "Cached analytics only; do not spend X search/read calls to fill the lane.",
      "Do not override cost gates, auth gates, or cadence hold rules.",
      "Avoid pure recap; every lane maps to one account-memory pillar.",
    ],
  };
}

function renderTopicTimingRouter() {
  const router = topicTimingRouterData();
  const container = $("#topic-timing-router");
  if (!container) return;
  const lanes = Array.isArray(router.lanes) ? router.lanes : [];
  if (!lanes.length) {
    container.innerHTML = `<p class="empty-state">${escapeHtml(t("timing_empty"))}</p>`;
    return;
  }
  const active = router.activeLane || lanes[0] || {};
  const score = clamp(number(router.routerScore, number(active.score)), 0, 100);
  const directives = Array.isArray(router.promptDirectives) ? router.promptDirectives : [];
  const guardrails = Array.isArray(router.guardrails) ? router.guardrails : [];
  container.innerHTML = `
    <div class="timing-head">
      <div>
        <span>${escapeHtml(t("timing_eyebrow"))}</span>
        <strong>${escapeHtml(t("timing_title"))}</strong>
      </div>
      <em>${escapeHtml(t("timing_zero_reads"))}</em>
    </div>
    <div class="timing-core ${escapeHtml(router.severity || "warn")}">
      <div class="timing-score" style="--timing-score:${score.toFixed(1)}%">
        <span>${escapeHtml(t("timing_score"))}</span>
        <strong>${escapeHtml(formatNumber(score, 1))}</strong>
        <div><i></i></div>
      </div>
      <div class="timing-active">
        <span>${escapeHtml(t("timing_active"))}</span>
        <strong>${escapeHtml(`${active.windowLabel || "-"} UTC`)}</strong>
        <small>${escapeHtml(active.pillarLabel || "-")} / ${escapeHtml(active.formatLabel || active.formatId || "-")}</small>
      </div>
      <div class="timing-next">
        <span>${escapeHtml(t("timing_next"))}</span>
        <code>${escapeHtml(router.nextAction || active.directive || "-")}</code>
      </div>
    </div>
    <div class="timing-section-title">
      <span>${escapeHtml(t("timing_lanes"))}</span>
      <strong>${escapeHtml(`${formatNumber(router.sampleCount)} packets · ${router.mode || "-"}`)}</strong>
    </div>
    <div class="timing-lanes">
      ${lanes.slice(0, 8).map((lane, index) => {
        const laneScore = clamp(number(lane.score), 0, 100);
        const load = clamp(number(lane.loadScore), 0, 100);
        return `
          <article class="${escapeHtml(lane.status || "seed")}" style="--timing-lane-score:${laneScore.toFixed(1)}%; --timing-lane-load:${load.toFixed(1)}%">
            <div class="timing-rank">${escapeHtml(String(index + 1).padStart(2, "0"))}</div>
            <div class="timing-lane-body">
              <div>
                <strong>${escapeHtml(lane.windowLabel || "-")} UTC</strong>
                <em>${escapeHtml(lane.status || "seed")} · ${escapeHtml(lane.pillarLabel || "-")}</em>
              </div>
              <dl>
                <div><dt>${escapeHtml(t("timing_format"))}</dt><dd>${escapeHtml(lane.formatLabel || lane.formatId || "-")}</dd></div>
                <div><dt>${escapeHtml(t("timing_load"))}</dt><dd>${escapeHtml(formatNumber(lane.loadScore, 1))}</dd></div>
                <div><dt>${escapeHtml(t("timing_samples"))}</dt><dd>${escapeHtml(formatNumber(lane.samples))}</dd></div>
                <div><dt>${escapeHtml(t("timing_avg"))}</dt><dd>${escapeHtml(formatNumber(lane.avgScore, 1))}</dd></div>
                <div><dt>${escapeHtml(t("timing_ack"))}</dt><dd>${escapeHtml(formatNumber(lane.engagementRate, 2))}</dd></div>
              </dl>
              <p>${escapeHtml(lane.directive || lane.reason || "-")}</p>
              <div class="timing-bars"><span></span><i></i></div>
            </div>
          </article>
        `;
      }).join("")}
    </div>
    <div class="timing-footer-grid">
      <div class="timing-directives">
        <span>${escapeHtml(t("timing_directives"))}</span>
        ${directives.slice(0, 4).map((item) => `<code>${escapeHtml(item)}</code>`).join("")}
      </div>
      <div class="timing-guardrails">
        <span>${escapeHtml(t("timing_guardrails"))}</span>
        ${guardrails.slice(0, 4).map((item) => `<code>${escapeHtml(item)}</code>`).join("")}
      </div>
    </div>
  `;
}

function renderBanditRewardSettlement() {
  const settlement = banditRewardSettlementData();
  const container = $("#bandit-reward-settlement");
  if (!container) return;
  const arms = Array.isArray(settlement.arms) ? settlement.arms : [];
  if (!arms.length) {
    container.innerHTML = `<p class="empty-state">${escapeHtml(t("settlement_empty"))}</p>`;
    return;
  }
  const best = settlement.bestArm || arms[0] || {};
  const recent = Array.isArray(settlement.recentSettlements) ? settlement.recentSettlements : [];
  container.innerHTML = `
    <div class="settlement-head">
      <div>
        <span>${escapeHtml(t("settlement_eyebrow"))}</span>
        <strong>${escapeHtml(t("settlement_title"))}</strong>
      </div>
      <em>${escapeHtml(t("settlement_zero_reads"))}</em>
    </div>
    <div class="settlement-core">
      <div class="settlement-best">
        <span>${escapeHtml(t("settlement_best"))}</span>
        <strong>${escapeHtml(best.label || best.id || "-")}</strong>
        <small>${escapeHtml(settlement.nextAction || best.nextAction || "-")}</small>
      </div>
      <div>
        <span>${escapeHtml(t("settlement_regret"))}</span>
        <strong>${escapeHtml(formatNumber(settlement.avgRecentRegret, 1))}</strong>
        <small>${escapeHtml(settlement.confidence || "-")}</small>
      </div>
      <div>
        <span>${escapeHtml(t("settlement_samples"))}</span>
        <strong>${escapeHtml(formatNumber(settlement.sampleCount))}</strong>
        <small>${escapeHtml(settlement.mode || "-")}</small>
      </div>
    </div>
    <div class="settlement-arms">
      ${arms.slice(0, 8).map((arm) => {
        const index = clamp(number(arm.rewardIndex), 0, 100);
        return `
          <article class="${escapeHtml(arm.status || "collect")}" style="--settlement-index:${index.toFixed(1)}%">
            <div>
              <strong>${escapeHtml(arm.label || arm.id || "-")}</strong>
              <em>${escapeHtml(arm.status || "collect")} · ${escapeHtml(t("settlement_index"))} ${escapeHtml(formatNumber(index, 1))}</em>
            </div>
            <dl>
              <div><dt>${escapeHtml(t("settlement_reward"))}</dt><dd>${escapeHtml(formatNumber(arm.avgReward, 1))}</dd></div>
              <div><dt>${escapeHtml(t("settlement_recent"))}</dt><dd>${escapeHtml(formatNumber(arm.recentAvgReward, 1))}</dd></div>
              <div><dt>${escapeHtml(t("settlement_regret_short"))}</dt><dd>${escapeHtml(formatNumber(arm.regret, 1))}</dd></div>
              <div><dt>${escapeHtml(t("settlement_alloc"))}</dt><dd>${escapeHtml(formatNumber(arm.allocationPct, 1))}%</dd></div>
              <div><dt>${escapeHtml(t("settlement_actual"))}</dt><dd>${escapeHtml(formatNumber(arm.actualSharePct, 1))}%</dd></div>
            </dl>
            <i></i>
          </article>
        `;
      }).join("")}
    </div>
    <div class="settlement-recent">
      <div>
        <span>${escapeHtml(t("settlement_recent_title"))}</span>
        <strong>${escapeHtml(formatNumber(recent.length))}</strong>
      </div>
      ${recent.slice(0, 5).map((item) => {
        const matched = item.matchedPrimary === null ? "-" : item.matchedPrimary ? "yes" : "no";
        const body = `
          <strong>${escapeHtml(formatTemplate(item.formatId))}</strong>
          <span>${escapeHtml(t("settlement_reward"))} ${escapeHtml(formatNumber(item.reward, 1))} · ${escapeHtml(t("settlement_regret_short"))} ${escapeHtml(formatNumber(item.regret, 1))} · ${escapeHtml(t("settlement_matched"))} ${escapeHtml(matched)}</span>
          <p>${escapeHtml(item.text || "-")}</p>
        `;
        return item.url
          ? `<a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${body}</a>`
          : `<article>${body}</article>`;
      }).join("")}
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

function angleLoadRouterData() {
  const incoming = dashboardData.angleLoadRouter || fallbackData.angleLoadRouter;
  if (incoming) return incoming;
  const matrix = temporalAngleMatrixData();
  const scheduler = angleSchedulerData();
  const activeSlot = (matrix.slots || [])[0] || (scheduler.nextAngles || [])[0] || null;
  return {
    mode: "derived_cached_angle_load_router",
    source: "derived dashboard fields",
    zeroExtraXReads: true,
    severity: activeSlot?.status === "hot" ? "ok" : activeSlot ? "warn" : "danger",
    activeCommand: activeSlot
      ? `Route ${activeSlot.label || formatTemplate(activeSlot.formatId)} at ${activeSlot.windowLabel || "-"} UTC.`
      : "Collect more cached telemetry before routing an angle.",
    activeSlot,
    gates: [
      { id: "read", label: "X_READ_PARTITION", value: "cached_only", status: "ok" },
      { id: "publish", label: "PUBLISH_GATE", value: "review", status: "warn" },
    ],
    lanes: (matrix.slots || []).slice(0, 4),
    directives: [matrix.nextAction, ...(scheduler.promptDirectives || [])].filter(Boolean).slice(0, 4),
  };
}

function matrixModeLabel(mode) {
  const key = `matrix_mode_${String(mode || "").replace(/-/g, "_")}`;
  const translated = t(key);
  return translated === key ? String(mode || "-").replace(/_/g, " ") : translated;
}

function angleRouterModeLabel(mode) {
  const key = `angle_router_mode_${String(mode || "").replace(/[^a-z0-9_]/gi, "_")}`;
  const translated = t(key);
  return translated === key ? String(mode || "-").replace(/_/g, " ") : translated;
}

function renderAngleLoadRouter() {
  const router = angleLoadRouterData();
  const container = $("#angle-load-router");
  if (!container) return;
  const active = router.activeSlot || null;
  const lanes = Array.isArray(router.lanes) ? router.lanes : [];
  const gates = Array.isArray(router.gates) ? router.gates : [];
  const directives = Array.isArray(router.directives) ? router.directives : [];
  if (!active && !lanes.length) {
    container.innerHTML = `<p class="empty-state">${escapeHtml(t("angle_router_empty"))}</p>`;
    return;
  }
  container.innerHTML = `
    <div class="angle-router-head">
      <div>
        <span>${escapeHtml(t("angle_router_eyebrow"))}</span>
        <strong>${escapeHtml(t("angle_router_title"))}</strong>
      </div>
      <em>${escapeHtml(angleRouterModeLabel(router.mode))} · ${escapeHtml(t("angle_router_zero_reads"))}</em>
    </div>
    <div class="angle-router-core ${escapeHtml(router.severity || "warn")}">
      <div class="angle-router-active">
        <span>${escapeHtml(t("angle_router_active"))}</span>
        <strong>${escapeHtml(active?.label || formatTemplate(active?.formatId) || "-")}</strong>
        <p>${escapeHtml(active?.angle || active?.reason || router.activeCommand || "-")}</p>
      </div>
      <div class="angle-router-score">
        <span>${escapeHtml(t("angle_router_score"))}</span>
        <strong>${escapeHtml(formatNumber(active?.score || 0, 1))}</strong>
        <div style="--angle-router-score:${clamp(number(active?.score), 0, 100).toFixed(1)}%"><i></i></div>
      </div>
      <div class="angle-router-score">
        <span>${escapeHtml(t("angle_router_load"))}</span>
        <strong>${escapeHtml(formatNumber(active?.loadScore || 0, 1))}</strong>
        <div style="--angle-router-score:${clamp(number(active?.loadScore), 0, 100).toFixed(1)}%"><i></i></div>
      </div>
    </div>
    <div class="angle-router-gates">
      ${gates.slice(0, 4).map((gate) => `
        <span class="${escapeHtml(gate.status || "warn")}">
          <em>${escapeHtml(gate.label || gate.id || t("angle_router_gate"))}</em>
          <strong>${escapeHtml(gate.value || "-")}</strong>
        </span>
      `).join("")}
    </div>
    <div class="angle-router-lanes">
      ${lanes.slice(0, 5).map((lane) => `
        <article class="${escapeHtml(lane.status || lane.action || "probe")}" style="--angle-router-lane:${clamp(number(lane.score), 0, 100).toFixed(1)}%">
          <div>
            <span>${escapeHtml(lane.windowLabel || "-")} UTC · ${escapeHtml(lane.action || "test")}</span>
            <strong>${escapeHtml(lane.label || formatTemplate(lane.formatId))}</strong>
          </div>
          <em>${escapeHtml(formatNumber(lane.score || 0, 1))}</em>
          <small>${escapeHtml(formatNumber(lane.samples || 0))} n · L7 ${escapeHtml(formatNumber(lane.loadScore || 0, 1))}</small>
        </article>
      `).join("")}
    </div>
    <div class="angle-router-directive">
      <span>${escapeHtml(t("angle_router_directive"))}</span>
      <code>${escapeHtml(directives[0] || router.activeCommand || "-")}</code>
    </div>
  `;
}

function growthOpportunityScorerData() {
  const incoming = dashboardData.growthOpportunityScorer || fallbackData.growthOpportunityScorer;
  if (incoming?.lanes?.length) return incoming;
  return derivedGrowthOpportunityScorer();
}

function opportunityFusionSourceBreakdown(lanes = []) {
  const rows = new Map();
  for (const lane of lanes || []) {
    for (const source of lane.sources || []) {
      const row = rows.get(source) || {
        source,
        lanes: 0,
        scoreTotal: 0,
        samples: 0,
        hotLanes: 0,
      };
      row.lanes += 1;
      row.scoreTotal += number(lane.score);
      row.samples += number(lane.samples);
      if (lane.status === "hot") row.hotLanes += 1;
      rows.set(source, row);
    }
  }
  return [...rows.values()]
    .map((row) => ({
      source: row.source,
      lanes: row.lanes,
      avgScore: Number((row.scoreTotal / Math.max(1, row.lanes)).toFixed(1)),
      samples: row.samples,
      hotLanes: row.hotLanes,
    }))
    .sort((left, right) =>
      number(right.avgScore) - number(left.avgScore) ||
      number(right.hotLanes) - number(left.hotLanes) ||
      number(right.lanes) - number(left.lanes),
    );
}

function derivedGrowthOpportunityScorer() {
  const timing = topicTimingRouterData();
  const bandit = contentBanditAllocatorData();
  const angleRouter = angleLoadRouterData();
  const narrative = narrativeResonanceData();
  const scheduler = angleSchedulerData();
  const hourly = hourlyLoadData();
  const profile = dashboardData.profile || fallbackData.profile || {};
  const buckets = new Map();
  const addLane = ({
    source,
    weight = 1,
    score = 0,
    status = "watch",
    formatId = null,
    formatLabel = null,
    pillarId = null,
    pillarLabel = null,
    hour = null,
    windowLabel = null,
    action = "route",
    reason = "",
    directive = "",
    samples = 0,
    active = false,
  } = {}) => {
    if (!source) return;
    const key = `${hour == null ? "any" : hour}:${pillarId || "any"}:${formatId || "any"}`;
    const lane = buckets.get(key) || {
      id: key,
      formatId,
      formatLabel,
      pillarId,
      pillarLabel,
      hour,
      windowLabel,
      action,
      status,
      sources: [],
      evidence: [],
      promptDirectives: [],
      weightedScore: 0,
      totalWeight: 0,
      samples: 0,
      activeSignals: 0,
    };
    lane.formatId ||= formatId;
    lane.formatLabel ||= formatLabel || (formatId ? formatTemplate(formatId) : null);
    lane.pillarId ||= pillarId;
    lane.pillarLabel ||= pillarLabel || pillarId;
    lane.hour ??= hour;
    lane.windowLabel ||= windowLabel || (Number.isFinite(number(hour, NaN)) ? `${String(number(hour)).padStart(2, "0")}:00` : null);
    lane.action ||= action;
    lane.status = ["hot", "exploit"].includes(lane.status) ? lane.status : status || lane.status;
    lane.weightedScore += clamp(number(score), 0, 100) * Math.max(0.1, number(weight, 1));
    lane.totalWeight += Math.max(0.1, number(weight, 1));
    lane.samples += number(samples);
    if (active) lane.activeSignals += 1;
    if (!lane.sources.includes(source)) lane.sources.push(source);
    if (reason) lane.evidence.push(reason);
    if (directive) lane.promptDirectives.push(directive);
    buckets.set(key, lane);
  };

  (timing.lanes || []).slice(0, 8).forEach((lane) => {
    addLane({
      source: "topic_timing",
      weight: lane === timing.activeLane ? 1.55 : 1.2,
      score: number(lane.score) * 0.82 + number(timing.routerScore) * 0.18,
      status: lane.status || "watch",
      formatId: lane.formatId,
      formatLabel: lane.formatLabel,
      pillarId: lane.pillarId,
      pillarLabel: lane.pillarLabel,
      hour: lane.hour,
      windowLabel: lane.windowLabel,
      action: lane.status === "hot" ? "exploit" : "route",
      reason: lane.reason || lane.directive || "",
      directive: lane.directive || "",
      samples: lane.samples,
      active: lane === timing.activeLane,
    });
  });

  (bandit.lanes || []).slice(0, 8).forEach((lane) => {
    const statusBoost = lane.status === "exploit" ? 20 : lane.status === "explore" ? 11 : lane.status === "hold" ? -18 : 5;
    addLane({
      source: "content_bandit",
      weight: lane === bandit.recommendedLane ? 1.25 : 0.85,
      score: Math.min(100, number(lane.allocationPct) * 0.45 + number(lane.avgScore) * 7 + statusBoost),
      status: lane.status || "test",
      formatId: lane.id,
      formatLabel: lane.label,
      action: lane.status === "exploit" ? "exploit" : lane.status === "hold" ? "hold" : "rotate",
      reason: lane.reason || lane.nextAction || "",
      directive: lane.nextAction || "",
      samples: lane.samples,
      active: lane === bandit.recommendedLane,
    });
  });

  if (angleRouter.activeSlot) {
    const slot = angleRouter.activeSlot;
    addLane({
      source: "angle_load",
      weight: 1.2,
      score: number(slot.score) * 0.74 + number(slot.loadScore) * 0.26,
      status: slot.status || "watch",
      formatId: slot.formatId,
      formatLabel: slot.label,
      hour: slot.hour,
      windowLabel: slot.windowLabel,
      action: slot.action || "route",
      reason: slot.reason || angleRouter.activeCommand || "",
      directive: angleRouter.activeCommand || "",
      active: true,
    });
  }
  (angleRouter.lanes || []).slice(0, 6).forEach((lane) => {
    addLane({
      source: "angle_load",
      weight: 0.75,
      score: number(lane.score) * 0.7 + number(lane.loadScore) * 0.3,
      status: lane.status || "probe",
      formatId: lane.formatId || lane.id,
      formatLabel: lane.label,
      hour: lane.hour,
      windowLabel: lane.windowLabel,
      action: lane.action || "route",
      reason: lane.reason || "",
      directive: lane.angle || "",
      samples: lane.samples,
    });
  });

  (narrative.pillars || []).slice(0, 6).forEach((pillar) => {
    addLane({
      source: "narrative_resonance",
      weight: pillar === narrative.primaryPillar ? 1.05 : 0.7,
      score: number(pillar.score),
      status: pillar.status || "watch",
      pillarId: pillar.id,
      pillarLabel: pillar.label,
      action: pillar.status === "exploit" ? "exploit" : "route",
      reason: pillar.reason || pillar.directive || "",
      directive: pillar.directive || "",
      samples: pillar.samples,
      active: pillar === narrative.primaryPillar,
    });
  });

  (scheduler.nextAngles || []).slice(0, 4).forEach((angle) => {
    addLane({
      source: "adaptive_scheduler",
      weight: 0.8,
      score: number(angle.weight, number(angle.score)),
      status: angle.action || "watch",
      formatId: angle.formatId,
      formatLabel: angle.label,
      hour: angle.hour,
      windowLabel: angle.windowLabel,
      action: angle.action || "route",
      reason: angle.reason || "",
      directive: angle.angle || "",
      samples: angle.samples,
    });
  });

  const nextWindow = hourly.nextWindow || hourly.currentHour || null;
  if (nextWindow) {
    addLane({
      source: "hourly_load",
      weight: 0.55,
      score: number(nextWindow.loadScore),
      status: nextWindow.status || "watch",
      hour: nextWindow.hour,
      windowLabel: nextWindow.windowLabel || nextWindow.label,
      action: "schedule",
      reason: hourly.nextAction || "",
      directive: `Prefer ${nextWindow.windowLabel || nextWindow.label || "-"} UTC if cadence allows.`,
      samples: nextWindow.posts || nextWindow.samples,
    });
  }

  const sampleCount = number(profile.measuredPosts, number(timing.sampleCount, number(bandit.sampleCount)));
  const lanes = [...buckets.values()]
    .map((lane) => {
      const sourceBoost = Math.min(18, Math.max(0, lane.sources.length - 1) * 4.5);
      const sampleBoost = Math.min(8, Math.log1p(Math.max(0, lane.samples)) * 1.7);
      const activeBoost = Math.min(12, lane.activeSignals * 5);
      const rawScore = lane.totalWeight ? lane.weightedScore / lane.totalWeight : 0;
      const score = clamp(rawScore + sourceBoost + sampleBoost + activeBoost, 0, 100);
      const label = [
        lane.windowLabel ? `${lane.windowLabel} UTC` : null,
        lane.pillarLabel,
        lane.formatLabel,
      ].filter(Boolean).join(" / ") || "cached traffic lane";
      return {
        id: lane.id,
        label,
        formatId: lane.formatId || null,
        formatLabel: lane.formatLabel || null,
        pillarId: lane.pillarId || null,
        pillarLabel: lane.pillarLabel || null,
        hour: lane.hour == null ? null : number(lane.hour),
        windowLabel: lane.windowLabel || null,
        action: lane.action || "route",
        status: score >= 76 ? "hot" : score >= 58 ? "watch" : lane.status || "probe",
        score,
        confidence: lane.sources.length >= 3 && sampleCount >= 24 ? "high" : lane.sources.length >= 2 ? "medium" : "low",
        sources: lane.sources,
        samples: lane.samples,
        evidence: lane.evidence.slice(0, 4),
        promptDirectives: lane.promptDirectives.filter(Boolean).slice(0, 4),
      };
    })
    .sort((left, right) => number(right.score) - number(left.score) || (right.sources || []).length - (left.sources || []).length)
    .slice(0, 10);
  const activeOpportunity = lanes[0] || null;
  const opportunityScore = number(activeOpportunity?.score);
  const scoreBreakdown = {
    formula: "weighted cached signals + source diversity + sample depth + active-lane boost",
    activeSources: activeOpportunity?.sources || [],
    sources: opportunityFusionSourceBreakdown(lanes),
  };
  return {
    generatedAt: dashboardData.updatedAt || fallbackData.updatedAt || new Date().toISOString(),
    mode: lanes.length ? "derived_cached_opportunity_fusion" : "opportunity_fusion_warmup",
    severity: opportunityScore >= 76 ? "ok" : opportunityScore >= 52 ? "warn" : "danger",
    confidence: activeOpportunity?.confidence || "low",
    source: "derived cached dashboard telemetry",
    zeroExtraXReads: true,
    estimatedXReadOps: 0,
    sampleCount,
    opportunityScore,
    readGate: "cached_only",
    publishGate: "review",
    primaryCommand: activeOpportunity
      ? `Bias the next packet toward ${activeOpportunity.label}; use cached signals only.`
      : "Collect more measured packets before trusting opportunity scoring.",
    activeOpportunity,
    lanes,
    scoreBreakdown,
    promptDirectives: [
      activeOpportunity?.formatId ? `Primary format: ${activeOpportunity.formatId}.` : null,
      activeOpportunity?.pillarLabel ? `Primary narrative: ${activeOpportunity.pillarLabel}.` : null,
      activeOpportunity?.windowLabel ? `Preferred UTC window: ${activeOpportunity.windowLabel}.` : null,
      activeOpportunity?.promptDirectives?.[0] || null,
      "No live X search/read calls are required for this opportunity score.",
    ].filter(Boolean),
    guardrails: [
      "Cached analytics only.",
      "Do not override cadence, OAuth, budget, or rate-limit gates.",
      "Manual distribution routes remain human-in-the-loop.",
    ],
  };
}

function nextWindowCommanderData() {
  const incoming = dashboardData.nextWindowAngleCommander || fallbackData.nextWindowAngleCommander;
  if (incoming?.command || incoming?.window || incoming?.activeWindow || incoming?.activeAngle) return incoming;
  const cadence = cadenceData();
  const timing = topicTimingRouterData();
  const opportunity = growthOpportunityScorerData();
  const angleRouter = angleLoadRouterData();
  const hourly = dashboardData.hourlyLoadBalancer || fallbackData.hourlyLoadBalancer || {};
  const dailyConsole = dailyExecutionConsoleData();
  const activeOpportunity = opportunity.activeOpportunity || (opportunity.lanes || [])[0] || null;
  const activeTiming = timing.activeLane || (timing.lanes || [])[0] || null;
  const activeAngleSlot = angleRouter.activeSlot || (angleRouter.lanes || [])[0] || null;
  const activeWindow = {
    hour: activeTiming?.hour ?? activeOpportunity?.hour ?? activeAngleSlot?.hour ?? hourly.nextWindow?.hour ?? hourly.currentHour?.hour ?? null,
    windowLabel:
      activeTiming?.windowLabel ||
      activeOpportunity?.windowLabel ||
      activeAngleSlot?.windowLabel ||
      hourly.nextWindow?.windowLabel ||
      hourly.nextWindow?.label ||
      hourly.currentHour?.label ||
      "-",
    hoursFromNow: number(activeTiming?.hoursFromNow ?? activeOpportunity?.hoursFromNow ?? activeAngleSlot?.hoursFromNow ?? hourly.nextWindow?.hoursFromNow, 0),
    loadScore: number(activeTiming?.loadScore ?? activeAngleSlot?.loadScore ?? hourly.nextWindow?.loadScore ?? hourly.currentHour?.loadScore, 0),
  };
  const activeAngle = {
    formatId: activeOpportunity?.formatId || activeTiming?.formatId || activeAngleSlot?.formatId || "decision_rule",
    formatLabel: activeOpportunity?.formatLabel || activeTiming?.formatLabel || activeAngleSlot?.label || activeAngleSlot?.formatId || "decision rule",
    pillarId: activeOpportunity?.pillarId || activeTiming?.pillarId || null,
    pillarLabel: activeOpportunity?.pillarLabel || activeTiming?.pillarLabel || "Tech Signals",
    opportunityScore: number(opportunity.opportunityScore, number(activeOpportunity?.score)),
    timingScore: number(timing.routerScore, number(activeTiming?.score)),
  };
  const publishGate = cadence.willBlockPublish
    ? "blocked"
    : cadence.publishAllowed
      ? "open"
      : "manual_route_only";
  const commanderScore = clamp(
    activeAngle.opportunityScore * 0.48 +
      activeAngle.timingScore * 0.3 +
      activeWindow.loadScore * 0.18 +
      (publishGate === "open" ? 8 : publishGate === "blocked" ? -12 : 2),
    0,
    100,
  );
  const command = publishGate === "open"
    ? `Publish one ${activeAngle.formatLabel} packet around ${activeWindow.windowLabel} UTC; lead with ${activeAngle.pillarLabel}.`
    : `Hold standalone publish; run one manual route op and keep ${activeAngle.formatLabel} warm for ${activeWindow.windowLabel} UTC.`;
  const routeUrl =
    dailyConsole.routeUrl ||
    (dailyConsole.routes || [])[0]?.routeUrl ||
    (dailyConsole.rows || [])[0]?.routeUrl ||
    (dashboardData.searchLinks || [])[0]?.url ||
    "#today";
  const lanes = [
    activeOpportunity
      ? {
          id: "opportunity",
          label: activeOpportunity.label || "Opportunity lane",
          score: number(activeOpportunity.score, activeAngle.opportunityScore),
          status: activeOpportunity.status || "watch",
          source: (activeOpportunity.sources || []).join(" + ") || "opportunity",
          detail: (activeOpportunity.evidence || [])[0] || (activeOpportunity.promptDirectives || [])[0] || opportunity.primaryCommand || "-",
        }
      : null,
    activeTiming
      ? {
          id: "timing",
          label: `${activeTiming.windowLabel || "-"} UTC / ${activeTiming.pillarLabel || activeTiming.pillarId || "-"} / ${activeTiming.formatLabel || activeTiming.formatId || "-"}`,
          score: number(activeTiming.score, activeAngle.timingScore),
          status: activeTiming.status || "watch",
          source: "topic_timing",
          detail: activeTiming.reason || activeTiming.directive || timing.nextAction || "-",
        }
      : null,
    activeAngleSlot
      ? {
          id: "angle_load",
          label: `${activeAngleSlot.windowLabel || "-"} UTC / ${activeAngleSlot.label || activeAngleSlot.formatId || "-"}`,
          score: number(activeAngleSlot.score),
          status: activeAngleSlot.status || "probe",
          source: "angle_load",
          detail: activeAngleSlot.reason || angleRouter.activeCommand || "-",
        }
      : null,
  ].filter(Boolean);
  const promptBias = [
    `Format=${activeAngle.formatId}`,
    `Pillar=${activeAngle.pillarLabel}`,
    `Window=${activeWindow.windowLabel} UTC`,
    "First line must carry a rule, cost, prediction, or sharp question.",
    "No headline recap.",
  ];
  return {
    generatedAt: dashboardData.updatedAt || fallbackData.updatedAt || new Date().toISOString(),
    mode: "derived_zero_read_next_window_commander",
    severity: publishGate === "blocked" ? "danger" : commanderScore >= 72 && publishGate === "open" ? "ok" : commanderScore >= 48 ? "warn" : "danger",
    zeroExtraXReads: true,
    estimatedXReadOps: 0,
    commanderScore,
    publishGate,
    readGate: "cached_only",
    activeWindow,
    activeAngle,
    command,
    promptBias,
    routeUrl,
    gates: [
      { id: "x_read_partition", label: "X read partition", status: "ok", value: "0 ops", detail: "Cached dashboard telemetry only." },
      { id: "cadence", label: "Cadence", status: publishGate === "open" ? "ok" : publishGate === "blocked" ? "danger" : "warn", value: publishGate, detail: cadence.reason || cadence.nextAction || "-" },
      { id: "manual_review", label: "Human loop", status: "ok", value: "armed", detail: "Manual paste route, no auto-reply." },
    ],
    lanes,
    checklist: [
      publishGate === "open" ? `Dispatch near ${activeWindow.windowLabel} UTC.` : "Use manual route before another standalone packet.",
      `Bias the hook toward ${activeAngle.formatLabel} / ${activeAngle.pillarLabel}.`,
      "Copy one reply into a relevant high-signal thread.",
      "Let the next metrics refresh update the command.",
    ],
    copyBlock: [
      "NEXT WINDOW COMMANDER",
      `Score: ${formatNumber(commanderScore, 1)} / Gate: ${publishGate} / X reads: 0`,
      `Window: ${activeWindow.windowLabel} UTC`,
      `Angle: ${activeAngle.formatLabel} / ${activeAngle.pillarLabel}`,
      `Command: ${command}`,
      ...promptBias.map((item) => `- ${item}`),
    ].join("\n"),
  };
}

function commanderWindow(commander) {
  const raw = commander?.window || commander?.activeWindow || {};
  const windowLabel = raw.windowLabel || raw.label || raw.window || "-";
  return {
    ...raw,
    hour: raw.hour ?? null,
    label: raw.label || windowLabel,
    windowLabel,
    hoursFromNow: number(raw.hoursFromNow),
    loadScore: number(raw.loadScore),
  };
}

function renderNextWindowCommander() {
  const container = $("#next-window-commander");
  if (!container) return;
  const commander = nextWindowCommanderData();
  if (!commander?.command) {
    container.innerHTML = `<p class="empty-state">${escapeHtml(t("commander_empty"))}</p>`;
    return;
  }
  const score = clamp(number(commander.commanderScore), 0, 100);
  const window = commanderWindow(commander);
  const angle = commander.activeAngle || {};
  const gates = Array.isArray(commander.gates) ? commander.gates : [];
  const lanes = Array.isArray(commander.lanes) ? commander.lanes : [];
  const checklist = Array.isArray(commander.checklist) ? commander.checklist : [];
  container.innerHTML = `
    <div class="commander-head">
      <div>
        <span>${escapeHtml(t("commander_eyebrow"))}</span>
        <strong>${escapeHtml(t("commander_title"))}</strong>
      </div>
      <em>${escapeHtml(t("commander_zero_reads"))}</em>
    </div>
    <div class="commander-core ${escapeHtml(commander.severity || "warn")}">
      <div class="commander-score" style="--commander-score:${score.toFixed(1)}%">
        <span>${escapeHtml(t("commander_score"))}</span>
        <strong>${escapeHtml(formatNumber(score, 1))}</strong>
        <div><i></i></div>
      </div>
      <div class="commander-command">
        <span>${escapeHtml(t("commander_gate"))}: ${escapeHtml(commander.publishGate || "-")}</span>
        <strong>${escapeHtml(commander.command)}</strong>
        <small>${escapeHtml(t("commander_window"))}: ${escapeHtml(window.windowLabel || "-")} UTC · ${escapeHtml(t("commander_angle"))}: ${escapeHtml(angle.formatLabel || angle.formatId || "-")} / ${escapeHtml(angle.pillarLabel || angle.pillarId || "-")}</small>
      </div>
      <div class="commander-actions">
        ${commander.routeUrl ? `<a class="button button-primary" href="${escapeHtml(commander.routeUrl)}" target="_blank" rel="noreferrer">${escapeHtml(t("commander_open"))}</a>` : ""}
        <button class="button button-secondary" type="button" data-copy="${encodeURIComponent(commander.copyBlock || commander.command)}">${escapeHtml(t("commander_copy"))}</button>
      </div>
    </div>
    <div class="commander-grid">
      <section>
        <div class="commander-section-title"><span>${escapeHtml(t("commander_gates"))}</span><strong>${escapeHtml(commander.readGate || "cached_only")}</strong></div>
        <div class="commander-gates">
          ${gates.slice(0, 4).map((gate) => `
            <article class="${escapeHtml(gate.status || "warn")}">
              <span>${escapeHtml(gate.label || gate.id || "-")}</span>
              <strong>${escapeHtml(gate.value || gate.status || "-")}</strong>
              <p>${escapeHtml(gate.detail || "-")}</p>
            </article>
          `).join("")}
        </div>
      </section>
      <section>
        <div class="commander-section-title"><span>${escapeHtml(t("commander_lanes"))}</span><strong>${escapeHtml(formatNumber(lanes.length))}</strong></div>
        <div class="commander-lanes">
          ${lanes.slice(0, 3).map((lane, index) => `
            <article style="--lane-score:${clamp(number(lane.score), 0, 100).toFixed(1)}%">
              <b>${escapeHtml(String(index + 1).padStart(2, "0"))}</b>
              <div>
                <strong>${escapeHtml(lane.label || "-")}</strong>
                <span>${escapeHtml(lane.source || "-")} · ${escapeHtml(lane.status || "-")} · ${escapeHtml(formatNumber(lane.score, 1))}</span>
                <p>${escapeHtml(lane.detail || "-")}</p>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
      <section>
        <div class="commander-section-title"><span>${escapeHtml(t("commander_checklist"))}</span><strong>${escapeHtml(commander.mode || "-")}</strong></div>
        <ol class="commander-checklist">
          ${checklist.slice(0, 4).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ol>
      </section>
    </div>
  `;
}

function renderWindowCommandStrip() {
  const container = $("#window-command-strip");
  if (!container) return;
  const commander = nextWindowCommanderData();
  if (!commander?.command) {
    container.innerHTML = `<p class="empty-state">${escapeHtml(t("commander_empty"))}</p>`;
    return;
  }
  const score = clamp(number(commander.commanderScore), 0, 100);
  const window = commanderWindow(commander);
  const angle = commander.activeAngle || {};
  const gates = Array.isArray(commander.gates) ? commander.gates : [];
  const primaryGate = gates.find((gate) => gate.id === "cadence") || gates[0] || {};
  const readGate = gates.find((gate) => gate.id === "x_read_partition") || {};
  container.className = `window-command-strip ${escapeHtml(commander.severity || "warn")}`;
  container.innerHTML = `
    <div class="window-command-radar" style="--window-command-score:${score.toFixed(1)}%">
      <span>${escapeHtml(t("commander_score"))}</span>
      <strong>${escapeHtml(formatNumber(score, 1))}</strong>
      <i></i>
    </div>
    <div class="window-command-body">
      <div class="window-command-head">
        <span>${escapeHtml(t("commander_eyebrow"))}</span>
        <strong>${escapeHtml(commander.command)}</strong>
      </div>
      <div class="window-command-metrics">
        <span><em>${escapeHtml(t("commander_window"))}</em><strong>${escapeHtml(window.windowLabel || "-")} UTC</strong></span>
        <span><em>${escapeHtml(t("commander_angle"))}</em><strong>${escapeHtml(angle.formatLabel || angle.formatId || "-")}</strong></span>
        <span><em>${escapeHtml(t("opportunity_fusion_pillar"))}</em><strong>${escapeHtml(angle.pillarLabel || angle.pillarId || "-")}</strong></span>
        <span><em>${escapeHtml(t("commander_gate"))}</em><strong>${escapeHtml(commander.publishGate || "-")}</strong></span>
      </div>
    </div>
    <div class="window-command-gates">
      <span class="${escapeHtml(readGate.status || "ok")}"><em>${escapeHtml(readGate.label || "X read partition")}</em><strong>${escapeHtml(readGate.value || "0 ops")}</strong></span>
      <span class="${escapeHtml(primaryGate.status || "warn")}"><em>${escapeHtml(primaryGate.label || "Cadence")}</em><strong>${escapeHtml(primaryGate.value || commander.publishGate || "-")}</strong></span>
    </div>
    <div class="window-command-actions">
      ${commander.routeUrl ? `<a class="button button-primary" href="${escapeHtml(commander.routeUrl)}" target="_blank" rel="noreferrer">${escapeHtml(t("commander_open"))}</a>` : ""}
      <button class="button button-secondary" type="button" data-copy="${encodeURIComponent(commander.copyBlock || commander.command)}">${escapeHtml(t("commander_copy"))}</button>
    </div>
  `;
}

function renderGrowthOpportunityScorer() {
  const scorer = growthOpportunityScorerData();
  const container = $("#growth-opportunity-scorer");
  if (!container) return;
  const lanes = Array.isArray(scorer.lanes) ? scorer.lanes : [];
  if (!lanes.length) {
    container.innerHTML = `<p class="empty-state">${escapeHtml(t("opportunity_fusion_empty"))}</p>`;
    return;
  }
  const active = scorer.activeOpportunity || lanes[0] || {};
  const score = clamp(number(scorer.opportunityScore, number(active.score)), 0, 100);
  const directives = Array.isArray(scorer.promptDirectives) ? scorer.promptDirectives : [];
  const guardrails = Array.isArray(scorer.guardrails) ? scorer.guardrails : [];
  const breakdown = Array.isArray(scorer.scoreBreakdown?.sources) && scorer.scoreBreakdown.sources.length
    ? scorer.scoreBreakdown.sources
    : opportunityFusionSourceBreakdown(lanes);
  const breakdownFormula =
    scorer.scoreBreakdown?.formula || "weighted cached signals + source diversity + sample depth + active-lane boost";
  const modeLabel = scorer.mode ? t(`opportunity_fusion_mode_${scorer.mode}`) : "-";
  container.innerHTML = `
    <div class="opportunity-fusion-head">
      <div>
        <span>${escapeHtml(t("opportunity_fusion_eyebrow"))}</span>
        <strong>${escapeHtml(t("opportunity_fusion_title"))}</strong>
      </div>
      <em>${escapeHtml(t("opportunity_fusion_zero_reads"))}</em>
    </div>
    <div class="opportunity-fusion-core ${escapeHtml(scorer.severity || "warn")}">
      <div class="opportunity-fusion-score" style="--opportunity-fusion-score:${score.toFixed(1)}%">
        <span>${escapeHtml(t("opportunity_fusion_score"))}</span>
        <strong>${escapeHtml(formatNumber(score, 1))}</strong>
        <div><i></i></div>
      </div>
      <div class="opportunity-fusion-active">
        <span>${escapeHtml(t("opportunity_fusion_active"))}</span>
        <strong>${escapeHtml(active.label || "-")}</strong>
        <small>${escapeHtml(t("opportunity_fusion_confidence"))}: ${escapeHtml(scorer.confidence || active.confidence || "-")} · ${escapeHtml(t("opportunity_fusion_samples"))}=${escapeHtml(formatNumber(scorer.sampleCount))}</small>
      </div>
      <div class="opportunity-fusion-command">
        <span>${escapeHtml(t("opportunity_fusion_command"))}</span>
        <code>${escapeHtml(scorer.primaryCommand || "-")}</code>
      </div>
    </div>
    <div class="opportunity-fusion-gates">
      <span class="ok"><em>${escapeHtml(t("opportunity_fusion_read_gate"))}</em><strong>${escapeHtml(scorer.readGate || "cached_only")}</strong></span>
      <span class="${escapeHtml(scorer.publishGate === "open" ? "ok" : "warn")}"><em>${escapeHtml(t("opportunity_fusion_publish_gate"))}</em><strong>${escapeHtml(scorer.publishGate || "review")}</strong></span>
      <span class="ok"><em>${escapeHtml(t("opportunity_fusion_sources"))}</em><strong>${escapeHtml((active.sources || []).join("+") || "-")}</strong></span>
    </div>
    <div class="opportunity-fusion-section-title">
      <span>${escapeHtml(t("opportunity_fusion_lanes"))}</span>
      <strong>${escapeHtml(modeLabel)}</strong>
    </div>
    <div class="opportunity-fusion-lanes">
      ${lanes.slice(0, 8).map((lane, index) => {
        const laneScore = clamp(number(lane.score), 0, 100);
        return `
          <article class="${escapeHtml(lane.status || "watch")}" style="--opportunity-lane-score:${laneScore.toFixed(1)}%">
            <div class="opportunity-fusion-rank">${escapeHtml(String(index + 1).padStart(2, "0"))}</div>
            <div class="opportunity-fusion-lane-body">
              <div>
                <strong>${escapeHtml(lane.label || "-")}</strong>
                <em>${escapeHtml(lane.status || "watch")} · ${escapeHtml((lane.sources || []).join(" + ") || "-")}</em>
              </div>
              <dl>
                <div><dt>${escapeHtml(t("opportunity_fusion_format"))}</dt><dd>${escapeHtml(lane.formatLabel || lane.formatId || "-")}</dd></div>
                <div><dt>${escapeHtml(t("opportunity_fusion_pillar"))}</dt><dd>${escapeHtml(lane.pillarLabel || lane.pillarId || "-")}</dd></div>
                <div><dt>${escapeHtml(t("opportunity_fusion_window"))}</dt><dd>${escapeHtml(lane.windowLabel || "-")}</dd></div>
                <div><dt>${escapeHtml(t("opportunity_fusion_samples"))}</dt><dd>${escapeHtml(formatNumber(lane.samples))}</dd></div>
              </dl>
              <p>${escapeHtml((lane.evidence || [])[0] || (lane.promptDirectives || [])[0] || "-")}</p>
              <div class="opportunity-fusion-bar"><span></span></div>
            </div>
          </article>
        `;
      }).join("")}
    </div>
    ${breakdown.length ? `
      <div class="opportunity-fusion-breakdown">
        <div class="opportunity-fusion-section-title">
          <span>${escapeHtml(t("opportunity_fusion_breakdown"))}</span>
          <strong>${escapeHtml(t("opportunity_fusion_breakdown_formula"))}: ${escapeHtml(breakdownFormula)}</strong>
        </div>
        <div class="opportunity-fusion-breakdown-grid">
          ${breakdown.slice(0, 6).map((source) => `
            <article>
              <strong>${escapeHtml(source.source || "-")}</strong>
              <dl>
                <div><dt>${escapeHtml(t("opportunity_fusion_breakdown_avg"))}</dt><dd>${escapeHtml(formatNumber(source.avgScore, 1))}</dd></div>
                <div><dt>${escapeHtml(t("opportunity_fusion_breakdown_lanes"))}</dt><dd>${escapeHtml(formatNumber(source.lanes))}</dd></div>
                <div><dt>${escapeHtml(t("opportunity_fusion_breakdown_hot"))}</dt><dd>${escapeHtml(formatNumber(source.hotLanes))}</dd></div>
                <div><dt>${escapeHtml(t("opportunity_fusion_samples"))}</dt><dd>${escapeHtml(formatNumber(source.samples))}</dd></div>
              </dl>
            </article>
          `).join("")}
        </div>
      </div>
    ` : ""}
    <div class="opportunity-fusion-footer-grid">
      <div class="opportunity-fusion-directives">
        <span>${escapeHtml(t("opportunity_fusion_directives"))}</span>
        ${directives.slice(0, 4).map((item) => `<code>${escapeHtml(item)}</code>`).join("")}
      </div>
      <div class="opportunity-fusion-guardrails">
        <span>${escapeHtml(t("opportunity_fusion_guardrails"))}</span>
        ${guardrails.slice(0, 4).map((item) => `<code>${escapeHtml(item)}</code>`).join("")}
      </div>
    </div>
  `;
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
  renderLearningLoopContract();
  renderLearningAutopilot();
  renderAutopilotDirectiveDeck();
  renderAdaptiveAngleScheduler();
  renderLearningWriteback();
  renderHookPatternReactor();
  renderContentBanditAllocator();
  renderBanditRewardSettlement();
  renderActiveConnConversionOptimizer();
  renderNarrativeResonance();
  renderTopicTimingRouter();
  renderGrowthOpportunityScorer();
  renderNextWindowCommander();
  renderAngleMutationReactor();
  renderAudienceRouter();
  renderTrendVelocityRadar();
  renderAngleLoadRouter();
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
  const fallback = fallbackData.viralFlywheel || {};
  const incoming = dashboardData.viralFlywheel || {};
  return {
    ...fallback,
    ...incoming,
    bottleneck: incoming.bottleneck || fallback.bottleneck,
    nextBurst: { ...(fallback.nextBurst || {}), ...(incoming.nextBurst || {}) },
    stages: Array.isArray(incoming.stages) && incoming.stages.length ? incoming.stages : fallback.stages,
    edges: Array.isArray(incoming.edges) && incoming.edges.length ? incoming.edges : fallback.edges,
    constraints: Array.isArray(incoming.constraints) && incoming.constraints.length ? incoming.constraints : fallback.constraints,
    rules: Array.isArray(incoming.rules) && incoming.rules.length ? incoming.rules : fallback.rules,
  };
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
  const loopCoefficient = Math.max(0, number(flywheel.loopCoefficient, 1 + velocity / 100));
  const bottleneck = flywheel.bottleneck || {};
  const coreMetrics = [
    { label: t("flywheel_loop"), value: `${formatNumber(loopCoefficient, 2)}x`, status: loopCoefficient >= 1.55 ? "ok" : loopCoefficient >= 1.2 ? "warn" : "danger" },
    { label: t("flywheel_ack"), value: `${formatNumber(number(flywheel.ackRate7d), 2)}%`, status: number(flywheel.ackRate7d) >= 3 ? "ok" : number(flywheel.ackRate7d) > 0 ? "warn" : "danger" },
    { label: t("flywheel_route"), value: `${formatNumber(number(flywheel.routeCoveragePct), 0)}%`, status: number(flywheel.routeCoveragePct) >= 80 ? "ok" : number(flywheel.routeCoveragePct) > 0 ? "warn" : "danger" },
    { label: t("flywheel_swarm"), value: `${formatNumber(number(flywheel.swarmCoveragePct), 0)}%`, status: number(flywheel.swarmCoveragePct) >= 100 ? "ok" : number(flywheel.swarmCoveragePct) > 0 ? "warn" : "danger" },
  ];
  const coreTarget = $("#flywheel-core-metrics");
  if (coreTarget) {
    coreTarget.innerHTML = coreMetrics
      .map((metric) => `
        <article class="${escapeHtml(metric.status)}">
          <span>${escapeHtml(metric.label)}</span>
          <strong>${escapeHtml(metric.value)}</strong>
        </article>
      `)
      .join("");
  }
  const bottleneckTarget = $("#flywheel-bottleneck");
  if (bottleneckTarget) {
    bottleneckTarget.className = `flywheel-bottleneck ${escapeHtml(bottleneck.severity || "ok")}`;
    bottleneckTarget.innerHTML = `
      <span>${escapeHtml(t("flywheel_bottleneck"))}</span>
      <strong>${escapeHtml(bottleneck.label || "-")}</strong>
      <small>${escapeHtml(bottleneck.action || "")}</small>
    `;
  }

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
  const edges = Array.isArray(flywheel.edges) ? flywheel.edges : [];
  const edgeTarget = $("#flywheel-edge-bus");
  if (edgeTarget) {
    edgeTarget.innerHTML = `
      <span>${escapeHtml(t("flywheel_edge_bus"))}</span>
      <div>
        ${edges.slice(0, 5).map((edge) => `
          <article class="${escapeHtml(edge.status || "ok")}">
            <em>${escapeHtml(edge.from || "-")} -> ${escapeHtml(edge.to || "-")}</em>
            <strong>${escapeHtml(edge.load || "-")}</strong>
            <small>${escapeHtml(edge.detail || "")}</small>
          </article>
        `).join("")}
      </div>
    `;
  }

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

function telemetryEventSeverity(events) {
  if (events.some((event) => event.severity === "danger")) return "danger";
  if (events.some((event) => event.severity === "warn")) return "warn";
  return "ok";
}

function telemetryEventStateLabel(severity) {
  if (severity === "danger") return t("event_stream_fault");
  if (severity === "warn") return t("event_stream_watch");
  return t("event_stream_nominal");
}

function telemetryEventStreamData() {
  const triage = apiStatusTriage();
  const budget = budgetBurnData();
  const runway = runwayGuardData();
  const control = controlPlaneData();
  const ops = distributionOpsData();
  const kinetics = growthKineticsData();
  const profile = dashboardData.profile || fallbackData.profile || {};
  const last24h = dashboardData.last24h || fallbackData.last24h || {};
  const drafts = dashboardData.drafts || fallbackData.drafts || [];
  const missions = Array.isArray(ops.missions) ? ops.missions : [];
  const learning = learningWritebackData();
  const safeLeft = runway?.safeRemainingUsd ?? budget.safeRemainingUsd;
  const runwayDays = runway?.runwayDays ?? budget.runwayDays;
  const monthEnd = runway?.monthEndProjectedSpendUsd ?? budget.monthEndProjectedSpendUsd ?? budget.spendUsd;
  const readGate = control.readGate || "cached_only";
  const publishGate = control.publishGate || "review";
  const pressure = clamp(number(control.pressureScore), 0, 100);
  const triageSeverity = triage.severity === "danger"
    ? "danger"
    : triage.severity === "warn" || triage.severity === "cached"
      ? "warn"
      : "ok";
  const costSeverity = budget.severity === "danger"
    ? "danger"
    : runway?.active || budget.severity === "warn"
      ? "warn"
      : "ok";
  const controlSeverity = control.severity === "danger"
    ? "danger"
    : control.severity === "warn" || readGate !== "cached_only" || publishGate !== "open"
      ? "warn"
      : "ok";
  const queueSeverity = missions.length || drafts.length ? "ok" : "warn";
  const learningPosts = number(learning.sampleCount, number(profile.measuredPosts, profile.trackedPosts));
  const learningSeverity = learningPosts > 0 ? "ok" : "warn";
  const l7Impressions = number(last24h.impressions);
  const kineticScore = number(kinetics.kineticScore);
  const trafficSeverity = kineticScore >= 60 ? "ok" : kineticScore >= 35 || l7Impressions >= 50 ? "warn" : "danger";

  return [
    {
      service: "http.status",
      title: t("event_http_title"),
      detail: t("event_http_detail", {
        calls: formatNumber(triage.totalCalls),
        failures: formatNumber(triage.totalFailures),
        rate: formatNumber(triage.failureRate, 1),
      }),
      metric: triage.activeRateLimit429 || triage.activeBackendFault5xx ? "active fault" : "clear",
      severity: triageSeverity,
    },
    {
      service: "cost.boundary",
      title: t("event_cost_title"),
      detail: t("event_cost_detail", {
        left: safeLeft == null ? "∞" : money(safeLeft),
        runway: runwayDays == null ? "∞" : `${formatNumber(runwayDays, runwayDays > 30 ? 0 : 1)}d`,
        monthEnd: monthEnd == null ? "-" : money(monthEnd),
      }),
      metric: runway?.active ? "cached-only" : "inside envelope",
      severity: costSeverity,
    },
    {
      service: "traffic.control",
      title: t("event_control_title"),
      detail: t("event_control_detail", {
        readGate: gateLabel(readGate),
        publishGate: gateLabel(publishGate),
        pressure: formatNumber(pressure, 1),
      }),
      metric: controlModeLabel(control.mode),
      severity: controlSeverity,
    },
    {
      service: "swarm.queue",
      title: t("event_queue_title"),
      detail: t("event_queue_detail", {
        missions: formatNumber(missions.length),
        drafts: formatNumber(drafts.length),
      }),
      metric: t("event_stream_zero_reads"),
      severity: queueSeverity,
    },
    {
      service: "learning.writeback",
      title: t("event_learning_title"),
      detail: t("event_learning_detail", {
        posts: formatNumber(learningPosts),
        score: formatNumber(learning.baselineScore ?? profile.baselineScore, 1),
      }),
      metric: learning.nextPromptBias || learning.recommendedAction || "ranker online",
      severity: learningSeverity,
    },
    {
      service: "l7.ingress",
      title: t("event_l7_title"),
      detail: t("event_l7_detail", {
        impressions: formatNumber(l7Impressions),
        score: formatNumber(kineticScore, 1),
      }),
      metric: kinetics.mode || "load watch",
      severity: trafficSeverity,
    },
  ];
}

function renderTelemetryEventStream() {
  const target = $("#telemetry-event-stream");
  const state = $("#event-stream-state");
  if (!target || !state) return;
  const events = telemetryEventStreamData();
  const severity = telemetryEventSeverity(events);
  state.textContent = telemetryEventStateLabel(severity);
  state.className = `pill ${severity === "ok" ? "pill-good" : severity === "danger" ? "pill-danger" : "pill-warn"}`;
  target.innerHTML = events
    .map((event, index) => `
      <article class="telemetry-event ${escapeHtml(event.severity || "ok")}">
        <span class="event-time">T-${String(index * 3).padStart(2, "0")}m</span>
        <div class="event-core">
          <div>
            <strong>${escapeHtml(event.title || "-")}</strong>
            <em>${escapeHtml(event.service || "-")}</em>
          </div>
          <p>${escapeHtml(event.detail || "-")}</p>
        </div>
        <code>${escapeHtml(event.metric || "-")}</code>
      </article>
    `)
    .join("");
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
  const incoming = dashboardData.modelInferenceStream || fallbackData.modelInferenceStream;
  if (incoming?.stages?.length || incoming?.calls != null) {
    const modelRows = Array.isArray(incoming.modelLanes) && incoming.modelLanes.length
      ? incoming.modelLanes
      : Array.isArray(incoming.models)
        ? incoming.models
        : incoming.primaryModel
          ? [incoming.primaryModel]
          : [];
    const purposeRows = Array.isArray(incoming.purposeLanes) && incoming.purposeLanes.length
      ? incoming.purposeLanes
      : Array.isArray(incoming.purposes)
        ? incoming.purposes
        : incoming.primaryPurpose
          ? [incoming.primaryPurpose]
          : [];
    return {
      mode: String(incoming.mode || "").includes("tracked") ? "live" : "cached",
      calls: number(incoming.calls),
      failures: number(incoming.failures),
      tokens: number(incoming.totalTokens ?? incoming.tokens),
      inputTokens: number(incoming.inputTokens),
      outputTokens: number(incoming.outputTokens),
      spend: number(incoming.spend),
      successRate: number(incoming.successRate, incoming.calls ? ((number(incoming.calls) - number(incoming.failures)) / Math.max(1, number(incoming.calls))) * 100 : 100),
      updatedAt: incoming.updatedAt || incoming.generatedAt || dashboardData.updatedAt,
      models: modelRows,
      purposes: purposeRows,
      stages: Array.isArray(incoming.stages) ? incoming.stages : [],
      outputSamples: Array.isArray(incoming.outputSamples) ? incoming.outputSamples : [],
      runbook: incoming.runbook || "",
      status: incoming.status || (number(incoming.failures) ? "warn" : "ok"),
      zeroExtraOpenAICalls: incoming.zeroExtraOpenAICalls !== false,
    };
  }
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
      inputTokens: purposes.reduce((sum, item) => sum + number(item.inputTokens), 0),
      outputTokens: purposes.reduce((sum, item) => sum + number(item.outputTokens), 0),
      spend,
      successRate: calls ? ((calls - failures) / Math.max(1, calls)) * 100 : 100,
      updatedAt: openai.updatedAt || dashboardData.updatedAt,
      models,
      purposes,
      stages: [],
      outputSamples: [],
      runbook: "",
      status: failures > 0 ? "warn" : "ok",
      zeroExtraOpenAICalls: true,
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
    inputTokens: estimatedTokens,
    outputTokens: 0,
    spend: 0,
    successRate: drafts.length ? 100 : 0,
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
    stages: [
      { id: "prompt_ingress", label: "PROMPT_INGRESS", value: estimatedTokens, unit: "tok", status: drafts.length ? "ok" : "warn", detail: "estimated from cached swarm outputs" },
      { id: "model_bus", label: "MODEL_BUS", value: drafts.length, unit: "cached", status: drafts.length ? "ok" : "warn", detail: t("inference_zero_calls") },
      { id: "swarm_output", label: "SWARM_OUT", value: drafts.length, unit: "outputs", status: drafts.length ? "ok" : "warn", detail: "queued for operator paste" },
      { id: "operator_gate", label: "OPERATOR_GATE", value: "manual", unit: "human", status: "ok", detail: "no auto-publish path" },
    ],
    outputSamples: drafts.slice(0, 4).map((draft, index) => ({
      index: index + 1,
      title: draft.title || draft.angle || t("draft_relevant"),
      angle: draft.angle || "",
      chars: String(draft.text || "").length,
      text: draft.text || "",
      createdAt: draft.createdAt || null,
    })),
    runbook: t("inference_no_calls"),
    status: drafts.length ? "ok" : "warn",
    zeroExtraOpenAICalls: true,
  };
}

function inferenceStageValue(value) {
  const numeric = Number(value);
  return Number.isFinite(numeric) && String(value).trim() !== "" ? formatNumber(numeric) : String(value ?? "-");
}

function renderInferenceStream() {
  const root = $("#inference-stream-body");
  if (!root) return;
  const stream = inferenceStreamData();
  $("#inference-mode").textContent = stream.mode === "live" ? t("inference_live") : t("inference_cached");
  $("#inference-mode").className = `pill ${stream.status === "ok" ? "pill-good" : "pill-neutral"}`;
  const primaryModel = stream.models[0] || {};
  const primaryPurpose = stream.purposes[0] || {};
  const stages = Array.isArray(stream.stages) && stream.stages.length
    ? stream.stages
    : [
        { id: "prompt_ingress", label: "PROMPT_INGRESS", value: stream.inputTokens || stream.tokens, unit: "tok", status: stream.tokens ? "ok" : "warn", detail: "input token load" },
        { id: "model_bus", label: "MODEL_BUS", value: stream.calls, unit: "calls", status: stream.failures ? "warn" : "ok", detail: primaryModel.name || "model" },
        { id: "swarm_output", label: "SWARM_OUT", value: (dashboardData.drafts || fallbackData.drafts || []).length, unit: "outputs", status: "ok", detail: "queued outputs" },
        { id: "operator_gate", label: "OPERATOR_GATE", value: "manual", unit: "human", status: "ok", detail: "manual paste only" },
      ];
  const purposeRows = Array.isArray(stream.purposes) ? stream.purposes.slice(0, 4) : [];
  const outputRows = Array.isArray(stream.outputSamples) && stream.outputSamples.length
    ? stream.outputSamples.slice(0, 3)
    : (dashboardData.drafts || fallbackData.drafts || []).slice(0, 3).map((draft, index) => ({
        index: index + 1,
        title: draft.title || draft.angle || t("draft_relevant"),
        chars: String(draft.text || "").length,
        text: draft.text || "",
      }));
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
    <div class="inference-stage-rail">
      <span>${escapeHtml(t("inference_pipeline"))}</span>
      <div>
        ${stages.slice(0, 4).map((stage) => `
          <article class="${escapeHtml(stage.status || "ok")}">
            <em>${escapeHtml(stage.label || stage.id || "-")}</em>
            <strong>${escapeHtml(inferenceStageValue(stage.value))}</strong>
            <small>${escapeHtml(stage.unit || "")} · ${escapeHtml(stage.detail || "-")}</small>
          </article>
        `).join("")}
      </div>
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
    <div class="inference-bus-grid">
      <section>
        <span>${escapeHtml(t("inference_purpose_bus"))}</span>
        ${purposeRows.slice(0, 4).map((purpose) => `
          <article class="${escapeHtml(number(purpose.failures) ? "warn" : "ok")}">
            <strong>${escapeHtml(purpose.name || "-")}</strong>
            <em>${escapeHtml(formatNumber(purpose.calls))} calls · ${escapeHtml(formatNumber(purpose.totalTokens))} tok · ${escapeHtml(formatNumber(purpose.sharePct, 1))}%</em>
          </article>
        `).join("")}
      </section>
      <section>
        <span>${escapeHtml(t("inference_output_bus"))}</span>
        ${outputRows.slice(0, 3).map((output) => `
          <article>
            <strong>${escapeHtml(String(output.index || 1).padStart(2, "0"))} · ${escapeHtml(output.title || t("draft_relevant"))}</strong>
            <em>${escapeHtml(formatNumber(output.chars || String(output.text || "").length))} chars</em>
          </article>
        `).join("")}
      </section>
    </div>
    <div class="inference-runbook">
      <code>${escapeHtml(stream.zeroExtraOpenAICalls ? t("inference_zero_calls") : "model call review")}</code>
      <span>${escapeHtml(stream.runbook || t("inference_status_ok"))}</span>
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
    return "它具体、有立场，并且不是标题复述，因此更像一个值得 ACK 和转发的观点。";
  }
  if (template.includes("decision")) return "It turns a news item into a concrete decision rule, so readers can immediately judge whether to act.";
  if (template.includes("question")) return "It does not recap the headline. It asks a sharp question that invites ACKs, pushback, and shares.";
  if (template.includes("pain")) return "It translates product news into an operator pain point, which makes the take useful beyond the launch itself.";
  return "It is specific, takes a clear position, and avoids headline recap, making it easier to ACK and share.";
}

function derivedCandidatePolicyScore(candidate) {
  const policy = dashboardData.cachedGenerationPolicy || fallbackData.cachedGenerationPolicy || null;
  if (!policy || !candidate) return 0;
  const templateId = candidate.templateId || candidate.template || "";
  let score = 0;
  if (policy.primaryFormatId && templateId === policy.primaryFormatId) score += 10;
  else if ((policy.rankedFormatIds || []).includes(templateId)) score += 4;
  else if (policy.primaryFormatId && templateId) score -= 3;
  if ((policy.avoidFormatIds || []).includes(templateId)) score -= 16;
  return score;
}

function normalizeTraceCandidate(candidate, index, selectedText = "") {
  const text = candidate?.text || "";
  return {
    rank: number(candidate?.rank, index + 1),
    selected: Boolean(candidate?.selected || (selectedText && text === selectedText)),
    templateId: candidate?.templateId || candidate?.template || "-",
    score: number(candidate?.score),
    angleMutationScore: number(candidate?.angleMutationScore),
    hookPatternScore: number(candidate?.hookPatternScore),
    contentBanditScore: number(candidate?.contentBanditScore),
    angleLoadRouterScore: number(candidate?.angleLoadRouterScore),
    growthOpportunityScore: number(candidate?.growthOpportunityScore),
    cachedGenerationPolicyScore: candidate?.cachedGenerationPolicyScore == null
      ? derivedCandidatePolicyScore(candidate)
      : number(candidate?.cachedGenerationPolicyScore),
    cachedGenerationPolicyHits: candidate?.cachedGenerationPolicyHits || null,
    generationSource: candidate?.generationSource || "openai",
    growthOpportunityLane: candidate?.growthOpportunityLane || null,
    reason: candidate?.reason || "",
    diagnostics: Array.isArray(candidate?.diagnostics) ? candidate.diagnostics : [],
    angleMutationDiagnostics: Array.isArray(candidate?.angleMutationDiagnostics) ? candidate.angleMutationDiagnostics : [],
    hookPatternDiagnostics: Array.isArray(candidate?.hookPatternDiagnostics) ? candidate.hookPatternDiagnostics : [],
    contentBanditDiagnostics: Array.isArray(candidate?.contentBanditDiagnostics) ? candidate.contentBanditDiagnostics : [],
    angleLoadRouterDiagnostics: Array.isArray(candidate?.angleLoadRouterDiagnostics) ? candidate.angleLoadRouterDiagnostics : [],
    growthOpportunityDiagnostics: Array.isArray(candidate?.growthOpportunityDiagnostics) ? candidate.growthOpportunityDiagnostics : [],
    cachedGenerationPolicyDiagnostics: Array.isArray(candidate?.cachedGenerationPolicyDiagnostics) ? candidate.cachedGenerationPolicyDiagnostics : [],
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
  const router = angleLoadRouterData();
  const score = number(post.candidateScore, number(post.score));
  const mutationScore = number(post.angleMutationScore, number(reactor.mutationScore));
  const routerLanes = Array.isArray(router?.lanes) ? router.lanes : [];
  const routedLane = routerLanes.find((lane) => lane.formatId === post.template || lane.id === post.template) || router?.activeSlot || null;
  const routerScore = routedLane ? Math.min(10, number(routedLane.score) / 10) : 0;
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
    angleLoadRouterScore: routerScore,
    contentBanditScore: number(post.contentBanditScore),
    growthOpportunityScore: number(post.growthOpportunityScore),
    hookPatternScore: number(post.hookPatternScore),
    reason: post.candidateReason || proofReason(post),
    diagnostics,
    angleMutationDiagnostics: post.angleMutationDiagnostics || [`bias:${reactor.primaryMutation?.after || post.template || "decision_rule"}`],
    angleLoadRouterDiagnostics: routedLane
      ? [`route:${routedLane.formatId || routedLane.id}`, `slot:${routedLane.windowLabel || "-"}`, `load:${formatNumber(routedLane.loadScore || 0, 1)}`]
      : [],
    growthOpportunityDiagnostics: post.growthOpportunityDiagnostics || [],
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
    angleLoadRouter: {
      mode: router?.mode || "derived_cached_angle_load_router",
      derived: true,
      severity: router?.severity || "warn",
      activeSlot: router?.activeSlot || null,
      activeCommand: router?.activeCommand || "",
      rankedFormatIds: routerLanes.map((lane) => lane.formatId || lane.id).filter(Boolean),
      lanes: routerLanes,
      gates: Array.isArray(router?.gates) ? router.gates : [],
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
  const policy = dashboardData.cachedGenerationPolicy || fallbackData.cachedGenerationPolicy || null;
  if (incoming?.candidates?.length || incoming?.selectedCandidate?.text) {
    return {
      ...incoming,
      cachedGenerationPolicy: incoming.cachedGenerationPolicy || policy,
    };
  }
  const derived = derivedGenerationDecisionTrace();
  return {
    ...derived,
    cachedGenerationPolicy: derived.cachedGenerationPolicy || policy,
  };
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
    ...candidate.angleLoadRouterDiagnostics,
    ...candidate.growthOpportunityDiagnostics,
    ...candidate.cachedGenerationPolicyDiagnostics,
    ...candidate.contentBanditDiagnostics,
    ...candidate.hookPatternDiagnostics,
    ...candidate.qualityIssues.map((issue) => `gate:${issue}`),
    ...verdict,
  ].filter(Boolean).slice(0, 9).join(" · ") || "-";
}

function tracePolicyData(trace) {
  const policy = trace?.cachedGenerationPolicy || dashboardData.cachedGenerationPolicy || fallbackData.cachedGenerationPolicy || null;
  if (!policy) return null;
  const directives = Array.isArray(policy.directives) ? policy.directives.filter(Boolean).slice(0, 4) : [];
  const ranked = Array.isArray(policy.rankedFormatIds) ? policy.rankedFormatIds.filter(Boolean).slice(0, 5) : [];
  const avoid = Array.isArray(policy.avoidFormatIds) ? policy.avoidFormatIds.filter(Boolean).slice(0, 4) : [];
  return {
    mode: policy.mode || "cached_generation_policy",
    confidence: policy.confidence || "low",
    primaryFormatId: policy.primaryFormatId || "",
    primaryFormatLabel: policy.primaryFormatLabel || formatTemplate(policy.primaryFormatId || ""),
    exploreFormatId: policy.exploreFormatId || "",
    rankedFormatIds: ranked,
    avoidFormatIds: avoid,
    directives,
    zeroExtraXReads: policy.zeroExtraXReads !== false,
  };
}

function renderTracePolicyBus(trace) {
  const policy = tracePolicyData(trace);
  if (!policy) return "";
  return `
    <div class="trace-policy">
      <span>${escapeHtml(t("decision_trace_policy_bus"))}</span>
      <strong>${escapeHtml(policy.primaryFormatLabel || formatTemplate(policy.primaryFormatId) || "-")}</strong>
      <div>
        <em>${escapeHtml(t("decision_trace_policy_primary"))}</em>
        <code>${escapeHtml(policy.primaryFormatId || "-")}</code>
      </div>
      <div>
        <em>${escapeHtml(t("decision_trace_policy_avoid"))}</em>
        <code>${escapeHtml(policy.avoidFormatIds.length ? policy.avoidFormatIds.join(", ") : "none")}</code>
      </div>
      <small>${escapeHtml(policy.confidence)} · ${escapeHtml(policy.zeroExtraXReads ? t("decision_trace_zero_reads") : `${formatNumber(policy.estimatedXReadOps || 0)} ${t("decision_trace_x_reads")}`)}</small>
      ${policy.directives.length ? `
        <ul aria-label="${escapeHtml(t("decision_trace_policy_directives"))}">
          ${policy.directives.slice(0, 3).map((directive) => `<li>${escapeHtml(directive)}</li>`).join("")}
        </ul>
      ` : ""}
    </div>
  `;
}

function normalizeRouterLane(lane, index = 0) {
  return {
    id: lane?.id || lane?.formatId || `lane_${index + 1}`,
    label: lane?.label || formatTemplate(lane?.formatId || lane?.id),
    formatId: lane?.formatId || lane?.id || "",
    windowLabel: lane?.windowLabel || lane?.hour || "-",
    action: lane?.action || lane?.status || "watch",
    status: lane?.status || lane?.action || "watch",
    angle: lane?.angle || lane?.reason || "",
    score: number(lane?.score),
    loadScore: number(lane?.loadScore),
    samples: number(lane?.samples),
    reason: lane?.reason || "",
  };
}

function traceAngleLoadRouterData(trace, candidates, selected) {
  const recorded = trace?.angleLoadRouter || null;
  const fallback = angleLoadRouterData();
  const source = recorded || fallback || {};
  const sourceLanes = Array.isArray(source.lanes) ? source.lanes : [];
  const lanes = sourceLanes.map((lane, index) => normalizeRouterLane(lane, index));
  const activeSlot = source.activeSlot
    ? normalizeRouterLane(source.activeSlot, 0)
    : lanes[0] || null;
  const rankedFormatIds = Array.isArray(source.rankedFormatIds) && source.rankedFormatIds.length
    ? source.rankedFormatIds
    : lanes.map((lane) => lane.formatId || lane.id).filter(Boolean);
  const selectedFormat = selected?.templateId || trace?.selectedTemplateId || "";
  const selectedLane = lanes.find((lane) => lane.formatId === selectedFormat || lane.id === selectedFormat) || null;
  const candidateFormats = candidates
    .map((candidate) => candidate.templateId)
    .filter(Boolean)
    .slice(0, 5);
  return {
    mode: source.mode || "derived_cached_angle_load_router",
    derived: !recorded || Boolean(source.derived),
    severity: source.severity || activeSlot?.status || "warn",
    activeSlot,
    selectedLane,
    activeCommand: source.activeCommand || source.directives?.[0] || activeSlot?.reason || "",
    rankedFormatIds: rankedFormatIds.length ? rankedFormatIds : candidateFormats,
    lanes,
    gates: Array.isArray(source.gates) ? source.gates : [],
    zeroExtraXReads: source.zeroExtraXReads !== false,
    estimatedXReadOps: number(source.estimatedXReadOps),
  };
}

function routerGatePill(gate) {
  const status = gate?.status || "warn";
  return `
    <span class="${escapeHtml(status)}">
      <em>${escapeHtml(gate?.label || gate?.id || t("angle_router_gate"))}</em>
      <strong>${escapeHtml(gate?.value || "-")}</strong>
    </span>
  `;
}

function renderDecisionRouterBus(trace, candidates, selected) {
  const router = traceAngleLoadRouterData(trace, candidates, selected);
  if (!router.activeSlot && !router.lanes.length && !router.rankedFormatIds.length) {
    return `<p class="trace-router-empty">${escapeHtml(t("decision_trace_router_empty"))}</p>`;
  }
  const active = router.activeSlot || {};
  const laneSource = router.lanes.length ? router.lanes : router.rankedFormatIds.map((formatId, index) => normalizeRouterLane({ formatId, id: formatId }, index));
  const gateHtml = router.gates.length
    ? router.gates.slice(0, 4).map((gate) => routerGatePill(gate)).join("")
    : routerGatePill({ label: "X_READ_PARTITION", value: router.zeroExtraXReads ? "cached_only" : "live", status: router.zeroExtraXReads ? "ok" : "warn" });
  const mode = angleRouterModeLabel(router.mode);
  const modeMeta = `${router.derived ? t("decision_trace_derived") : t("decision_trace_real")} · ${router.zeroExtraXReads ? t("decision_trace_zero_reads") : `${formatNumber(router.estimatedXReadOps)} ${t("decision_trace_x_reads")}`}`;
  return `
    <section class="trace-router-bus ${escapeHtml(router.severity || "warn")}">
      <div class="trace-router-head">
        <div>
          <span>${escapeHtml(t("decision_trace_router_bus"))}</span>
          <strong>${escapeHtml(t("decision_trace_router_mode"))}: ${escapeHtml(mode)}</strong>
        </div>
        <em>${escapeHtml(modeMeta)}</em>
      </div>
      <div class="trace-router-core">
        <article>
          <span>${escapeHtml(t("decision_trace_router_active"))}</span>
          <strong>${escapeHtml(active.label || formatTemplate(active.formatId) || "-")}</strong>
          <small>${escapeHtml(active.windowLabel || "-")} UTC · ${escapeHtml(active.action || active.status || "watch")}</small>
        </article>
        <article>
          <span>${escapeHtml(t("decision_trace_router_score"))}</span>
          <strong>${escapeHtml(formatNumber(active.score || router.selectedLane?.score || 0, 1))}</strong>
          <div style="--router-meter:${clamp(number(active.score || router.selectedLane?.score), 0, 100).toFixed(1)}%"><i></i></div>
        </article>
        <article>
          <span>${escapeHtml(t("decision_trace_router_load"))}</span>
          <strong>${escapeHtml(formatNumber(active.loadScore || router.selectedLane?.loadScore || 0, 1))}</strong>
          <div style="--router-meter:${clamp(number(active.loadScore || router.selectedLane?.loadScore), 0, 100).toFixed(1)}%"><i></i></div>
        </article>
      </div>
      <div class="trace-router-gates">${gateHtml}</div>
      <div class="trace-router-lanes" aria-label="${escapeHtml(t("decision_trace_router_lanes"))}">
        ${laneSource.slice(0, 5).map((lane) => `
          <article class="${escapeHtml(lane.status || "watch")} ${selected.templateId === lane.formatId ? "selected" : ""}" style="--lane-meter:${clamp(number(lane.score), 0, 100).toFixed(1)}%">
            <div>
              <span>${escapeHtml(lane.windowLabel || "-")} UTC · ${escapeHtml(lane.action || "watch")}</span>
              <strong>${escapeHtml(lane.label || formatTemplate(lane.formatId))}</strong>
            </div>
            <em>${escapeHtml(formatNumber(lane.score || 0, 1))}</em>
            <i></i>
          </article>
        `).join("")}
      </div>
      <div class="trace-router-ranked">
        <span>${escapeHtml(t("decision_trace_router_ranked"))}</span>
        <div>
          ${router.rankedFormatIds.slice(0, 6).map((formatId) => `<b>${escapeHtml(formatTemplate(formatId))}</b>`).join("")}
        </div>
        <code>${escapeHtml(router.activeCommand || active.reason || active.angle || "-")}</code>
      </div>
    </section>
  `;
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
  const routerPanel = renderDecisionRouterBus(trace, candidates, selected);
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
    traceGateCell(
      "decision_trace_local_seed",
      trace.localFallback?.enabled || trace.localFallback?.seedEnabled,
      trace.localFallback?.used
        ? "fallback"
        : trace.localFallback?.selected
          ? "selected"
          : trace.localFallback?.seedEnabled
            ? "seeded"
            : "off",
    ),
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
        ${renderTracePolicyBus(trace)}
      </aside>
    </div>
    ${routerPanel}
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
                <small>${escapeHtml(t("decision_trace_score", { score: formatNumber(candidate.score, 1) }))} · src ${escapeHtml(candidate.generationSource)} · ${escapeHtml(t("decision_trace_policy_score"))} ${escapeHtml(formatNumber(candidate.cachedGenerationPolicyScore, 1))} · mutation ${escapeHtml(formatNumber(candidate.angleMutationScore, 1))} · router ${escapeHtml(formatNumber(candidate.angleLoadRouterScore, 1))} · opportunity ${escapeHtml(formatNumber(candidate.growthOpportunityScore, 1))} · ${escapeHtml(t("decision_trace_bandit"))} ${escapeHtml(formatNumber(candidate.contentBanditScore, 1))} · ${escapeHtml(t("decision_trace_hook"))} ${escapeHtml(formatNumber(candidate.hookPatternScore, 1))}</small>
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

function flightModeLabel(mode) {
  const key = `flight_mode_${String(mode || "").replace(/[^a-z0-9_]/gi, "_")}`;
  const translated = t(key);
  return translated === key ? String(mode || "-").replace(/_/g, " ") : translated;
}

function flightDeckHtml(deck) {
  if (!deck) return "";
  const severity = ["ok", "warn", "danger"].includes(deck.severity) ? deck.severity : "warn";
  const score = clamp(number(deck.commandScore), 0, 100);
  const gates = Array.isArray(deck.gates) ? deck.gates : [];
  const phases = Array.isArray(deck.phases) ? deck.phases : [];
  const packets = Array.isArray(deck.packets) ? deck.packets : [];
  const runwayDays = deck.runway?.projectedDaysToMilestone == null
    ? "samples"
    : `${formatNumber(deck.runway.projectedDaysToMilestone, deck.runway.projectedDaysToMilestone > 30 ? 0 : 1)}d`;
  const saved = number(deck.runway?.savedDays);
  const savedDays = `${formatNumber(saved, saved > 30 ? 0 : 1)}d`;
  return `
    <article class="operator-flight-deck ${escapeHtml(severity)}">
      <div class="flight-deck-head">
        <div>
          <span class="eyebrow">${escapeHtml(t("flight_eyebrow"))}</span>
          <strong>${escapeHtml(t("flight_title"))}</strong>
        </div>
        <em>${escapeHtml(flightModeLabel(deck.commandMode))} · ${escapeHtml(t("flight_zero_reads"))}</em>
      </div>
      <div class="flight-deck-core">
        <div class="flight-score" style="--flight-score:${score}%">
          <span></span>
          <strong>${escapeHtml(formatNumber(score, 1))}</strong>
          <em>${escapeHtml(t("flight_score"))}</em>
        </div>
        <div class="flight-command">
          <span>${escapeHtml(t("dispatch_manifest_next"))}</span>
          <strong>${escapeHtml(sreText(deck.primaryCommand || "-"))}</strong>
          <div class="flight-actions">
            ${deck.routeUrl ? `<a class="button button-primary" href="${escapeHtml(deck.routeUrl)}" target="_blank" rel="noreferrer">${escapeHtml(t("flight_open"))}</a>` : ""}
            <button class="button button-secondary" type="button" data-copy="${encodeURIComponent(sreText(deck.copyBlock || ""))}">${escapeHtml(t("flight_copy"))}</button>
          </div>
        </div>
        <div class="flight-kpis">
          <div><span>${escapeHtml(t("flight_route"))}</span><strong>${escapeHtml(deck.routeLabel || "-")}</strong></div>
          <div><span>${escapeHtml(t("flight_target"))}</span><strong>${escapeHtml(formatNumber(deck.targetReplies || 0))}</strong></div>
          <div><span>${escapeHtml(t("flight_runway"))}</span><strong>${escapeHtml(runwayDays)}</strong></div>
          <div><span>${escapeHtml(t("flight_saved"))}</span><strong>${escapeHtml(savedDays)}</strong></div>
        </div>
      </div>
      <div class="flight-matrix">
        <section>
          <div class="flight-section-title"><span>${escapeHtml(t("flight_gates"))}</span><strong>${escapeHtml(formatNumber(deck.estimatedXReadOps || 0))} X</strong></div>
          <div class="flight-gates">
            ${gates.slice(0, 4).map((gate) => `
              <div class="${escapeHtml(gate.status || "ok")}">
                <span>${escapeHtml(sreLabel(gate.label || gate.id || "-"))}</span>
                <strong>${escapeHtml(sreText(gate.value || "-"))}</strong>
              </div>
            `).join("")}
          </div>
        </section>
        <section>
          <div class="flight-section-title"><span>${escapeHtml(t("flight_phases"))}</span><strong>${escapeHtml(deck.source || "cached")}</strong></div>
          <div class="flight-phases">
            ${phases.slice(0, 5).map((phase) => `
              <div class="${escapeHtml(phase.status || "ok")}">
                <span>${escapeHtml(phase.label || phase.id || "-")}</span>
                <strong>${escapeHtml(sreText(phase.detail || "-"))}</strong>
              </div>
            `).join("")}
          </div>
        </section>
        <section>
          <div class="flight-section-title"><span>${escapeHtml(t("flight_packets"))}</span><strong>${escapeHtml(`${formatNumber(deck.readyPackets || 0)}/${formatNumber(deck.totalPackets || 0)}`)}</strong></div>
          <div class="flight-packets">
            ${packets.slice(0, 3).map((packet) => `
              <div class="${escapeHtml(packet.ready ? "ok" : "warn")}">
                <span>${String(packet.priority || 1).padStart(2, "0")}</span>
                <strong>${escapeHtml(packet.routeLabel || "-")}</strong>
                <em>${escapeHtml(packet.confidence || "low")} · ${escapeHtml(formatNumber(packet.operatorSlaMinutes || 0))}m · +${escapeHtml(formatNumber(packet.expectedLiftPct || 0, 1))}%</em>
              </div>
            `).join("")}
          </div>
        </section>
      </div>
    </article>
  `;
}

function manualReplyTargetAtlasHtml(atlas) {
  if (!atlas?.targets?.length) return "";
  const severity = ["ok", "warn", "danger"].includes(atlas.severity) ? atlas.severity : "warn";
  const targets = Array.isArray(atlas.targets) ? atlas.targets.slice(0, 6) : [];
  const scoreMax = Math.max(1, ...targets.map((target) => number(target.score)));
  const guardrails = Array.isArray(atlas.guardrails) ? atlas.guardrails.slice(0, 4) : [];
  const targetCards = targets.map((target) => {
    const status = ["ok", "warn", "danger", "probe"].includes(target.status) ? target.status : "warn";
    const pct = Math.max(8, Math.min(100, (number(target.score) / scoreMax) * 100));
    return `
      <article class="atlas-target ${escapeHtml(status)}" style="--atlas-score:${pct}%">
        <div class="atlas-target-head">
          <span>${String(target.rank || 1).padStart(2, "0")}</span>
          <div>
            <strong>${escapeHtml(target.label || "-")}</strong>
            <em>${escapeHtml(target.queryClass || "broad_tech_load")} · ${escapeHtml(target.confidence || "low")}</em>
          </div>
        </div>
        <div class="atlas-bar"><i></i></div>
        <dl>
          <div><dt>${escapeHtml(t("target_atlas_score"))}</dt><dd>${escapeHtml(formatNumber(target.score || 0, 1))}</dd></div>
          <div><dt>${escapeHtml(t("target_atlas_reply_target"))}</dt><dd>${escapeHtml(formatNumber(target.targetReplies || 0))}</dd></div>
          <div><dt>${escapeHtml(t("target_atlas_sla"))}</dt><dd>${escapeHtml(`${formatNumber(target.operatorSlaMinutes || 0)}m`)}</dd></div>
          <div><dt>${escapeHtml(t("target_atlas_freshness"))}</dt><dd>${escapeHtml(`${formatNumber(target.freshnessWindowMinutes || 0)}m`)}</dd></div>
        </dl>
        <p>${escapeHtml(sreText(target.evidence || target.draftAngle || target.draftText || "-"))}</p>
        <blockquote>${escapeHtml(sreText(target.draftText || "-"))}</blockquote>
        <div class="atlas-actions">
          ${target.routeUrl ? `<a class="button button-primary" href="${escapeHtml(target.routeUrl)}" target="_blank" rel="noreferrer">${escapeHtml(t("open_search"))}</a>` : ""}
          <button class="button button-secondary" type="button" data-copy="${encodeURIComponent(sreText(target.copyBlock || target.draftText || ""))}">${escapeHtml(t("target_atlas_copy_route"))}</button>
        </div>
      </article>
    `;
  }).join("");
  return `
    <div class="target-atlas ${escapeHtml(severity)}">
      <div class="atlas-head">
        <div>
          <span class="eyebrow">${escapeHtml(t("target_atlas_eyebrow"))}</span>
          <strong>${escapeHtml(t("target_atlas_title"))}</strong>
        </div>
        <em>${escapeHtml(atlas.mode || "zero_read_web_target_atlas")}</em>
      </div>
      <div class="atlas-matrix">
        <div><span>${escapeHtml(t("target_atlas_ready"))}</span><strong>${escapeHtml(`${formatNumber(atlas.readyTargets || 0)}/${formatNumber(atlas.totalTargets || targets.length)}`)}</strong></div>
        <div><span>${escapeHtml(t("target_atlas_reply_target"))}</span><strong>${escapeHtml(formatNumber(atlas.totalTargetReplies || 0))}</strong></div>
        <div><span>${escapeHtml(t("target_atlas_x_reads"))}</span><strong>${escapeHtml(formatNumber(atlas.estimatedXReadOps || 0))}</strong></div>
        <div><span>${escapeHtml(t("target_atlas_cost"))}</span><strong>${escapeHtml(money(atlas.estimatedIncrementalXApiUsd || 0))}</strong></div>
      </div>
      <div class="atlas-command">
        <div><span>${escapeHtml(t("target_atlas_top"))}</span><strong>${escapeHtml(atlas.topRouteLabel || "-")}</strong></div>
        <div><span>${escapeHtml(t("target_atlas_policy"))}</span><strong>${escapeHtml(sreText(atlas.queryPolicy || "-"))}</strong></div>
      </div>
      <div class="atlas-grid">
        <section>
          <div class="manifest-section-title"><span>${escapeHtml(t("target_atlas_targets"))}</span><strong>${escapeHtml(t("dispatch_zero_reads"))}</strong></div>
          <div class="atlas-targets">${targetCards}</div>
        </section>
        <aside>
          <div class="manifest-section-title"><span>${escapeHtml(t("target_atlas_guardrails"))}</span><strong>${escapeHtml(severity)}</strong></div>
          <div class="atlas-guards">
            ${guardrails.map((item) => `<code>${escapeHtml(sreText(item))}</code>`).join("")}
          </div>
          <pre class="atlas-copy"><code>${escapeHtml(sreText(atlas.copyBlock || ""))}</code></pre>
          <button class="button button-secondary" type="button" data-copy="${encodeURIComponent(sreText(atlas.copyBlock || ""))}">${escapeHtml(t("target_atlas_copy"))}</button>
        </aside>
      </div>
    </div>
  `;
}

function operatorPasteQueueHtml(queue) {
  if (!queue?.tasks?.length) return "";
  const severity = ["ok", "warn", "danger"].includes(queue.severity) ? queue.severity : "warn";
  const tasks = queue.tasks.slice(0, 5);
  const primary = tasks.find((task) => task.ready) || tasks[0] || {};
  const queueKey = pasteQueueStateKey(queue);
  const queueState = readOperatorStateByKey(queueKey);
  const doneSet = new Set(queueState.done);
  const skippedSet = new Set(queueState.skipped);
  const doneCount = tasks.filter((task, index) => doneSet.has(pasteQueueTaskId(task, index))).length;
  const skippedCount = tasks.filter((task, index) => skippedSet.has(pasteQueueTaskId(task, index))).length;
  const progressTarget = Math.max(1, Math.min(Number(queue.targetReplies) || tasks.length || 1, tasks.length || 1));
  const progressPct = Math.max(0, Math.min(100, (doneCount / progressTarget) * 100));
  const taskHtml = tasks.map((task, index) => {
    const taskId = pasteQueueTaskId(task, index);
    const done = doneSet.has(taskId);
    const skipped = skippedSet.has(taskId);
    const status = task.ready ? "ok" : "warn";
    return `
      <article class="paste-task ${escapeHtml(status)} ${done ? "done" : ""} ${skipped ? "skipped" : ""}">
        <div class="paste-task-head">
          <span>${String(task.priority || 1).padStart(2, "0")}</span>
          <div>
            <strong>${escapeHtml(task.routeLabel || "-")}</strong>
            <em>${escapeHtml(`${formatNumber(task.operatorSlaMinutes || 0)}m SLA · target ${formatNumber(task.targetReplies || 0)} · +${formatNumber(task.expectedLiftPct || 0, 1)}%`)}</em>
          </div>
          <b>${escapeHtml(done ? "DONE" : skipped ? "SKIP" : task.ready ? "READY" : "HOLD")}</b>
        </div>
        <blockquote>${escapeHtml(sreText(task.pastePayload || "-"))}</blockquote>
        <dl>
          <div><dt>${escapeHtml(t("paste_queue_skip"))}</dt><dd>${escapeHtml(sreText(task.skipRule || "-"))}</dd></div>
          <div><dt>${escapeHtml(t("paste_queue_done"))}</dt><dd>${escapeHtml(sreText(task.doneSignal || "-"))}</dd></div>
        </dl>
        <div class="paste-task-actions">
          ${task.openUrl ? `<a class="button button-primary" href="${escapeHtml(task.openUrl)}" target="_blank" rel="noreferrer">${escapeHtml(t("paste_queue_open"))}</a>` : ""}
          <button class="button button-secondary" type="button" data-copy="${encodeURIComponent(sreText(task.pastePayload || ""))}">${escapeHtml(t("paste_queue_copy_payload"))}</button>
          <button class="button button-secondary paste-state-button ${done ? "active" : ""}" type="button" data-paste-key="${escapeHtml(queueKey)}" data-paste-task="${escapeHtml(taskId)}" data-paste-state="done" data-paste-route="${escapeHtml(task.routeLabel || "-")}">${escapeHtml(t("paste_queue_mark_done"))}</button>
          <button class="button button-secondary paste-state-button ${skipped ? "active" : ""}" type="button" data-paste-key="${escapeHtml(queueKey)}" data-paste-task="${escapeHtml(taskId)}" data-paste-state="skipped" data-paste-route="${escapeHtml(task.routeLabel || "-")}">${escapeHtml(t("paste_queue_mark_skip"))}</button>
        </div>
      </article>
    `;
  }).join("");
  const guards = (queue.guardrails || [])
    .slice(0, 4)
    .map((guard) => `<code>${escapeHtml(sreText(guard))}</code>`)
    .join("");
  const ledger = readOperatorLedger().filter((event) => event.type === "paste_queue").slice(0, 5);
  const ledgerHtml = ledger.length
    ? ledger.map((event) => `
      <p>
        <time>${escapeHtml(formatDate(event.at))}</time>
        <strong>${escapeHtml(operatorEventLabel(event))}</strong>
        <em>${escapeHtml(sreText(`${event.route || "-"} · ${event.step || "-"}`))}</em>
      </p>
    `).join("")
    : `<p class="empty">${escapeHtml(t("paste_queue_events_empty"))}</p>`;
  return `
    <article class="operator-paste-queue ${escapeHtml(severity)}">
      <div class="paste-queue-head">
        <div>
          <span class="eyebrow">${escapeHtml(t("paste_queue_eyebrow"))}</span>
          <strong>${escapeHtml(t("paste_queue_title"))}</strong>
        </div>
        <em>${escapeHtml(t("dispatch_zero_reads"))}</em>
      </div>
      <div class="paste-queue-core">
        <section class="paste-queue-command">
          <span>${escapeHtml(t("paste_queue_next"))}</span>
          <strong>${escapeHtml(sreText(queue.nextAction || "-"))}</strong>
          <p>${escapeHtml(sreText(primary.pastePayload || queue.primaryPastePayload || "-"))}</p>
          <div class="paste-queue-progress" style="--paste-progress:${progressPct}%">
            <span><i></i></span>
            <strong>${escapeHtml(t("paste_queue_progress", { done: formatNumber(doneCount), skipped: formatNumber(skippedCount) }))}</strong>
          </div>
          <div class="paste-queue-actions">
            ${queue.primaryOpenUrl ? `<a class="button button-primary" href="${escapeHtml(queue.primaryOpenUrl)}" target="_blank" rel="noreferrer">${escapeHtml(t("paste_queue_open"))}: ${escapeHtml(queue.primaryRouteLabel || "-")}</a>` : ""}
            <button class="button button-secondary" type="button" data-copy="${encodeURIComponent(sreText(queue.copyBlock || ""))}">${escapeHtml(t("paste_queue_copy"))}</button>
            <button class="button button-secondary" type="button" data-paste-reset="${escapeHtml(queueKey)}">${escapeHtml(t("paste_queue_reset"))}</button>
          </div>
        </section>
        <section class="paste-queue-kpis">
          <div><span>${escapeHtml(t("paste_queue_ready"))}</span><strong>${escapeHtml(`${formatNumber(doneCount)}/${formatNumber(progressTarget)}`)}</strong></div>
          <div><span>${escapeHtml(t("paste_queue_target"))}</span><strong>${escapeHtml(formatNumber(queue.targetReplies || 0))}</strong></div>
          <div><span>${escapeHtml(t("paste_queue_reads"))}</span><strong>${escapeHtml(formatNumber(queue.estimatedXReadOps || 0))}</strong></div>
          <div><span>${escapeHtml(t("paste_queue_mode"))}</span><strong>${escapeHtml(sreText(String(queue.operatorMode || "-").replace(/_/g, "-")))}</strong></div>
        </section>
      </div>
      <div class="paste-queue-grid">
        <section>
          <div class="manifest-section-title"><span>${escapeHtml(t("paste_queue_tasks"))}</span><strong>${escapeHtml(`${formatNumber(tasks.length)} lanes`)}</strong></div>
          <div class="paste-task-list">${taskHtml}</div>
        </section>
        <aside>
          <div class="manifest-section-title"><span>${escapeHtml(t("paste_queue_rules"))}</span><strong>${escapeHtml(severity)}</strong></div>
          <div class="paste-queue-guards">${guards}</div>
          <div class="paste-queue-events">
            <span>${escapeHtml(t("paste_queue_events"))}</span>
            ${ledgerHtml}
          </div>
          <pre class="paste-queue-copy"><code>${escapeHtml(sreText(queue.copyBlock || ""))}</code></pre>
        </aside>
      </div>
    </article>
  `;
}

function dailyExecutionConsoleHtml(consoleData) {
  if (!consoleData?.rows?.length) return "";
  const severity = ["ok", "warn", "danger"].includes(consoleData.severity) ? consoleData.severity : "warn";
  const rows = consoleData.rows.slice(0, 5);
  const primary = rows.find((row) => row.ready) || rows[0] || {};
  const maxScore = Math.max(1, ...rows.map((row) => number(row.score, 0)));
  const rowHtml = rows.map((row) => {
    const status = row.ready ? "ok" : "warn";
    const scorePct = Math.max(8, Math.min(100, (number(row.score, 0) / maxScore) * 100));
    return `
      <article class="daily-console-row ${escapeHtml(status)}" style="--daily-score:${scorePct}%">
        <div class="daily-row-route">
          <span>${String(row.priority || 1).padStart(2, "0")}</span>
          <div>
            <strong>${escapeHtml(row.routeLabel || "-")}</strong>
            <em>${escapeHtml(row.replyAngle || row.reason || "route_payload")}</em>
          </div>
        </div>
        <div class="daily-row-meter"><i></i></div>
        <dl>
          <div><dt>${escapeHtml(t("daily_console_sla"))}</dt><dd>${escapeHtml(`${formatNumber(row.operatorSlaMinutes || 0)}m`)}</dd></div>
          <div><dt>${escapeHtml(t("daily_console_target"))}</dt><dd>${escapeHtml(formatNumber(row.targetReplies || 0))}</dd></div>
          <div><dt>${escapeHtml(t("dispatch_manifest_lift"))}</dt><dd>${escapeHtml(`+${formatNumber(row.expectedLiftPct || 0, 1)}%`)}</dd></div>
        </dl>
        <blockquote>${escapeHtml(sreText(row.replyText || "-"))}</blockquote>
        <div class="daily-row-actions">
          ${row.routeUrl ? `<a class="button button-primary" href="${escapeHtml(row.routeUrl)}" target="_blank" rel="noreferrer">${escapeHtml(t("daily_console_open"))}</a>` : ""}
          <button class="button button-secondary" type="button" data-copy="${encodeURIComponent(sreText(row.replyText || ""))}">${escapeHtml(t("daily_console_copy_payload"))}</button>
        </div>
      </article>
    `;
  }).join("");
  const guards = (consoleData.guardrails || [])
    .slice(0, 4)
    .map((guard) => `<code>${escapeHtml(sreText(guard))}</code>`)
    .join("");
  return `
    <article class="daily-execution-console ${escapeHtml(severity)}">
      <div class="daily-console-head">
        <div>
          <span class="eyebrow">${escapeHtml(t("daily_console_eyebrow"))}</span>
          <strong>${escapeHtml(t("daily_console_title"))}</strong>
        </div>
        <em>${escapeHtml(t("dispatch_zero_reads"))}</em>
      </div>
      <div class="daily-console-core">
        <section class="daily-console-primary">
          <span>${escapeHtml(t("daily_console_primary"))}</span>
          <strong>${escapeHtml(sreText(consoleData.nextAction || "-"))}</strong>
          <p>${escapeHtml(sreText(primary.replyText || consoleData.primaryReplyText || "-"))}</p>
          <div class="daily-console-actions">
            ${consoleData.primaryRouteUrl ? `<a class="button button-primary" href="${escapeHtml(consoleData.primaryRouteUrl)}" target="_blank" rel="noreferrer">${escapeHtml(t("daily_console_open"))}: ${escapeHtml(consoleData.primaryRouteLabel || "-")}</a>` : ""}
            <button class="button button-secondary" type="button" data-copy="${encodeURIComponent(sreText(consoleData.copyBlock || ""))}">${escapeHtml(t("daily_console_copy"))}</button>
          </div>
        </section>
        <section class="daily-console-kpis">
          <div><span>${escapeHtml(t("daily_console_ready"))}</span><strong>${escapeHtml(`${formatNumber(consoleData.readyRows || 0)}/${formatNumber(consoleData.totalRows || 0)}`)}</strong></div>
          <div><span>${escapeHtml(t("daily_console_target"))}</span><strong>${escapeHtml(formatNumber(consoleData.targetReplies || 0))}</strong></div>
          <div><span>${escapeHtml(t("daily_console_reads"))}</span><strong>${escapeHtml(formatNumber(consoleData.estimatedXReadOps || 0))}</strong></div>
          <div><span>${escapeHtml(t("daily_console_sla"))}</span><strong>${escapeHtml(`${formatNumber(primary.operatorSlaMinutes || 0)}m`)}</strong></div>
        </section>
      </div>
      <div class="daily-console-body">
        <section>
          <div class="manifest-section-title"><span>${escapeHtml(t("daily_console_payload"))}</span><strong>${escapeHtml(`${formatNumber(rows.length)} lanes`)}</strong></div>
          <div class="daily-console-rows">${rowHtml}</div>
        </section>
        <aside>
          <div class="manifest-section-title"><span>${escapeHtml(t("daily_console_guardrails"))}</span><strong>${escapeHtml(severity)}</strong></div>
          <div class="daily-console-guards">${guards}</div>
          <pre class="daily-console-copy"><code>${escapeHtml(sreText(consoleData.copyBlock || ""))}</code></pre>
        </aside>
      </div>
    </article>
  `;
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
  const sloRules = (operatorSlo.rules || []).slice(0, 3).map((rule) => `<li>${escapeHtml(sreText(rule))}</li>`).join("");
  const protocolCopy = [
    primaryProtocol.objective ? sreText(primaryProtocol.objective) : null,
    ...protocolSteps.map((step, index) => `${index + 1}. ${step.label || step.id}: ${sreText(step.detail || "")}`),
    stopConditions.length ? "" : null,
    stopConditions.length ? `${t("operator_stop")}:` : null,
    ...stopConditions.map((item) => `- ${sreText(item)}`),
    primaryProtocol.writeback ? "" : null,
    primaryProtocol.writeback ? `${t("operator_writeback")}: ${sreText(primaryProtocol.writeback)}` : null,
  ].filter((line) => line != null).join("\n");
  const primaryPacket = [
    `${t("operator_packet_route")}: ${localizedPrimary.label || primary.label || "-"}`,
    `${t("operator_packet_sla")}: ${t("dispatch_sla", { minutes: formatNumber(primary.operatorSlaMinutes || 10) })}`,
    `${t("operator_packet_replies")}: ${t("dispatch_replies", { count: formatNumber(primary.targetReplies || 1) })}`,
    `${t("operator_packet_lift")}: ${t("dispatch_expected", { lift: formatNumber(primary.expectedLiftPct || 0, 1) })}`,
    `${t("operator_packet_budget")}: ${primaryCostLabel}`,
    primary.evidence ? `Evidence: ${sreText(primary.evidence)}` : null,
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
  const manualTargetAtlas = manualReplyTargetAtlasData(dispatchPacket, routeAmplifier, ops);
  const dailyExecutionConsole = dailyExecutionConsoleData(dispatchPacket, routeAmplifier, manualTargetAtlas, ops);
  const operatorPasteQueue = operatorPasteQueueData(dailyExecutionConsole, dispatchPacket, manualTargetAtlas, routeAmplifier, ops);
  const flightDeck = operatorFlightDeckData(ops, dispatchPacket, routeAmplifier);
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
          <p>${escapeHtml(sreText(packet.reason || packet.evidence || packet.draftAngle || "-"))}</p>
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
          <p>${escapeHtml(sreText(lane.action || lane.reason || "-"))}</p>
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
              <p>${escapeHtml(sreText(localizedRoute.reason || mission.evidence || "-"))}</p>
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
    ${operatorPasteQueueHtml(operatorPasteQueue)}
    ${dailyExecutionConsoleHtml(dailyExecutionConsole)}
    ${flightDeckHtml(flightDeck)}
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
        <strong>${escapeHtml(sreText(dispatchPacket.nextAction || "-"))}</strong>
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
      ${manualReplyTargetAtlasHtml(manualTargetAtlas)}
      <div class="manifest-body">
        <section>
          <div class="manifest-section-title"><span>${escapeHtml(t("dispatch_manifest_packets"))}</span><strong>${escapeHtml(t("dispatch_zero_reads"))}</strong></div>
          <div class="manifest-packets">${manifestPackets}</div>
        </section>
        <aside>
          <div class="manifest-section-title"><span>${escapeHtml(t("dispatch_manifest_checks"))}</span><strong>${escapeHtml(manifestStatus)}</strong></div>
          <div class="manifest-checks">${manifestChecks}</div>
          <pre class="manifest-copy"><code>${escapeHtml(sreText(dispatchPacket.copyBlock || ""))}</code></pre>
          <button class="button button-secondary" type="button" data-copy="${encodeURIComponent(sreText(dispatchPacket.copyBlock || ""))}">${escapeHtml(t("dispatch_manifest_copy"))}</button>
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
            <strong>${escapeHtml(primaryProtocol.mode || "manual_zero_read_route_loop")}</strong>
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
                <strong>${escapeHtml(sreText(step.detail || "-"))}</strong>
                <small>${escapeHtml(status)}</small>
              </button>
            </li>
          `}).join("")}
        </ol>
        ${stopConditions.length ? `
          <div class="packet-stop">
            <span>${escapeHtml(t("operator_stop"))}</span>
            <p>${escapeHtml(sreText(stopConditions.slice(0, 2).join(" · ")))}</p>
          </div>
        ` : ""}
        ${primaryProtocol.writeback ? `<p class="packet-writeback"><span>${escapeHtml(t("operator_writeback"))}</span>${escapeHtml(sreText(primaryProtocol.writeback))}</p>` : ""}
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
          <p><time>${escapeHtml(formatDate(event.at))}</time><strong>${escapeHtml(operatorEventLabel(event))}</strong><em>${escapeHtml(event.route || "-")} · ${escapeHtml(event.step || "-")}</em></p>
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
        <p><strong>${escapeHtml(t("dispatch_primary"))}: ${escapeHtml(localizedPrimary.label || primary.label || "-")}</strong> · ${escapeHtml(sreText(localizedPrimary.reason || primary.evidence || t("daily_action_copy")))}</p>
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

function runwayGuardData(governor = governorData()) {
  const incoming = governor?.runwayGuard || dashboardData.xApiRunwayGuard || fallbackData.xApiRunwayGuard;
  if (incoming) return incoming;
  const burn = budgetBurnData();
  const active = burn?.monthEndSafe === false;
  return {
    active,
    reasonCode: active ? "derived_runway_guard" : "derived_inside_runway",
    projectedCostUsd: 0,
    projectedDailyBurnUsd: burn?.projectedDailyBurnUsd ?? null,
    monthEndProjectedSpendUsd: burn?.monthEndProjectedSpendUsd ?? null,
    monthEndSafe: burn?.monthEndSafe ?? null,
    runwayDays: burn?.runwayDays ?? null,
  };
}

function governorCellLabel(cell) {
  const labels = {
    read: "governor_read_gate",
    publish: "governor_post_gate",
    rate_limit: "governor_429",
    backend: "governor_503",
    runway: "governor_runway_guard",
    month_end: "governor_month_end",
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
  const runwayGuard = runwayGuardData(governor);
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
  const runwayActive = Boolean(runwayGuard?.active);
  const runwayLabel = runwayGuard
    ? runwayActive
      ? t("governor_runway_cached")
      : t("governor_runway_clear")
    : "-";
  const runwayDays = runwayGuard?.runwayDays == null
    ? "∞"
    : `${formatNumber(runwayGuard.runwayDays, runwayGuard.runwayDays > 30 ? 0 : 1)}d`;
  const runwayCells = [
    {
      label: t("governor_runway_guard"),
      value: runwayLabel,
      tone: runwayActive ? "warn" : runwayGuard ? "ok" : "neutral",
    },
    {
      label: t("governor_projected_reads"),
      value: runwayGuard ? money(runwayGuard.projectedCostUsd || 0) : "-",
      tone: runwayActive ? "warn" : "neutral",
    },
    {
      label: t("governor_daily_burn"),
      value: runwayGuard ? money(runwayGuard.projectedDailyBurnUsd || 0) : "-",
      tone: runwayActive ? "warn" : "neutral",
    },
    {
      label: t("governor_month_end"),
      value: runwayGuard ? money(runwayGuard.monthEndProjectedSpendUsd || 0) : "-",
      tone: runwayGuard?.monthEndSafe === false ? "warn" : runwayGuard ? "ok" : "neutral",
    },
    {
      label: t("governor_runway_days"),
      value: runwayGuard ? runwayDays : "-",
      tone: runwayActive ? "warn" : "ok",
    },
  ];
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
  const circuitPressure = metricNumber(governor?.circuit?.pressurePct, clamp((100 - boundaryRatio) + (active429 ? 22 : 0) + (active503 ? 18 : 0), 0, 100));
  const circuitMode = gateLabel(governor?.circuit?.mode || (severity === "danger" ? "circuit_closed" : severity === "warn" ? "guarded_cached_only" : "nominal_cached_first"));
  const nextAction = governor?.nextAction || runbook;
  const partitionMatrix = Array.isArray(governor?.partitionMatrix) && governor.partitionMatrix.length
    ? governor.partitionMatrix
    : (api.endpoints || []).slice(0, 5).map((endpoint) => ({
        id: endpoint.name,
        label: endpoint.name,
        gate: endpoint.lastStatus && Number(endpoint.lastStatus) >= 400 ? "guarded" : "sampled",
        status: endpoint.lastStatus && Number(endpoint.lastStatus) >= 500 ? "danger" : endpoint.failures ? "warn" : "ok",
        calls: endpoint.calls || 0,
        failures: endpoint.failures || 0,
        usd: endpoint.usd || 0,
        lastStatus: endpoint.lastStatus || null,
        pressurePct: endpoint.calls ? clamp(((endpoint.failures || 0) / endpoint.calls) * 100, 0, 100) : 0,
        directive: endpoint.failures ? "Inspect recent endpoint failures before spending more calls." : "Endpoint clear under cached-first budget guard.",
      }));
  const hottestPartition = gateLabel(
    governor?.circuit?.hottestPartition ||
      [...partitionMatrix].sort((left, right) => number(right.pressurePct) - number(left.pressurePct))[0]?.id ||
      "none",
  );
  const cooldownTimeline = Array.isArray(governor?.cooldownTimeline) && governor.cooldownTimeline.length
    ? governor.cooldownTimeline
    : [
        { id: "detect", label: "DETECT", status: cooldownActive ? "danger" : "ok", value: cooldownActive ? cooldown.reasonCode || "fault" : "clear", detail: cooldown.endpoint || "none" },
        { id: "seal", label: "SEAL", status: readGate === "closed" ? "danger" : "warn", value: readGate, detail: "read/search gate" },
        { id: "cache", label: "CACHE", status: "ok", value: "manual routes", detail: "zero extra X reads" },
        { id: "recover", label: "RECOVER", status: cooldownActive ? "warn" : "ok", value: cooldownActive ? cooldownLabel : "now", detail: cooldown.until || "all partitions nominal" },
      ];

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
    <div class="governor-circuit-core">
      <div class="governor-pressure ${escapeHtml(severity)}" style="--circuit-pressure:${circuitPressure}%">
        <span>${escapeHtml(t("governor_pressure"))}</span>
        <strong>${escapeHtml(formatNumber(circuitPressure, 0))}%</strong>
        <em>${escapeHtml(circuitMode)}</em>
      </div>
      <div class="governor-directive">
        <span>${escapeHtml(t("governor_next_action"))}</span>
        <strong>${escapeHtml(hottestPartition)}</strong>
        <p>${escapeHtml(nextAction)}</p>
      </div>
    </div>
    <div class="governor-section-title">
      <span>${escapeHtml(t("governor_partitions"))}</span>
      <strong>${escapeHtml(t("governor_hottest"))}: ${escapeHtml(hottestPartition)}</strong>
    </div>
    <div class="governor-partition-matrix">
      ${partitionMatrix
        .map((partition) => {
          const status = ["ok", "warn", "danger", "cached"].includes(partition.status) ? partition.status : "neutral";
          const lastStatus = partition.lastStatus == null
            ? t("governor_no_status")
            : t("governor_last_status", { status: partition.lastStatus });
          return `
            <article class="${escapeHtml(status)}" style="--partition-pressure:${clamp(number(partition.pressurePct), 0, 100)}%">
              <div>
                <span>${escapeHtml(partition.label || partition.id || "-")}</span>
                <strong>${escapeHtml(gateLabel(partition.gate))}</strong>
              </div>
              <div class="partition-meter"><i></i></div>
              <ul>
                <li>${escapeHtml(t("governor_calls", { count: formatNumber(partition.calls || 0) }))}</li>
                <li>${escapeHtml(t("governor_failures", { count: formatNumber(partition.failures || 0) }))}</li>
                <li>${escapeHtml(t("governor_cost", { amount: money(partition.usd || 0) }))}</li>
                <li>${escapeHtml(lastStatus)}</li>
              </ul>
              <p>${escapeHtml(partition.directive || "")}</p>
            </article>
          `;
        })
        .join("")}
    </div>
    <div class="governor-section-title">
      <span>${escapeHtml(t("governor_timeline"))}</span>
      <strong>${escapeHtml(cooldownLabel)}</strong>
    </div>
    <div class="governor-timeline">
      ${cooldownTimeline
        .map((step) => `
          <article class="${escapeHtml(step.status || "neutral")}">
            <span>${escapeHtml(step.label || step.id || "-")}</span>
            <strong>${escapeHtml(gateLabel(step.value))}</strong>
            <em>${escapeHtml(step.detail || "")}</em>
          </article>
        `)
        .join("")}
    </div>
    <div class="governor-runway-grid">
      ${runwayCells
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
      { id: "manual_routes", label: "manual route lanes", value: "$0.000", status: "ok", detail: "operator paste loop" },
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
      label: "text packet experiment",
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
      label: "media packet surge",
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
    runbook: "Allocate the next route loop to manual route burst; keep live X reads sealed.",
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

    const pasteTask = target.closest("button[data-paste-task]");
    if (pasteTask) {
      const result = togglePasteQueueTaskState(
        pasteTask.dataset.pasteKey,
        pasteTask.dataset.pasteTask,
        pasteTask.dataset.pasteState || "done",
      );
      appendOperatorLedger({
        type: "paste_queue",
        route: pasteTask.dataset.pasteRoute,
        step: pasteTask.dataset.pasteState || "done",
        state: result.active ? "active" : "cleared",
      });
      renderActions();
      showToast(t("paste_queue_saved"));
      return;
    }
    const pasteReset = target.closest("button[data-paste-reset]");
    if (pasteReset) {
      resetOperatorState(pasteReset.dataset.pasteReset);
      appendOperatorLedger({
        type: "paste_queue",
        route: "operator queue",
        step: "reset",
        state: "reset",
      });
      renderActions();
      showToast(t("paste_queue_reset_done"));
      return;
    }
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
  renderWindowCommandStrip();
  renderHttpTriageStrip();
  renderReactorHud();
  renderTelemetryContract();
  renderExpoStory();
  renderAutopilotCommandStrip();
  renderGauges();
  renderMonitorPanels();
  renderMetrics();
  renderGrowthMissionControl();
  renderPublishArbiter();
  renderGoal();
  renderGrowthKinetics();
  renderGrowthRunwaySimulator();
  renderLearning();
  renderControlPlane();
  renderTelemetryEventStream();
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
