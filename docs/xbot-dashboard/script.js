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
    live_data: "Live data",
    data_stale: "Data stale",
    fallback_data: "Fallback data",
    demo_mode: "Demo mode",
    exit_demo: "Exit demo",
    auto_demo: "Auto demo",
    stop_auto_demo: "Stop auto",
    demo_live: "30-second demo",
    demo_signal: "Signal Map",
    demo_proof: "Best Signal",
    demo_goal: "Growth Goal",
    demo_actions: "Today Actions",
    demo_story: "Expo Story",
    open_x: "Open X",
    grafana_title: "1 Node Exporter: X Bot Growth Monitor",
    grafana_window: "Last 24 hours",
    story_eyebrow: "Expo brief",
    story_title: "Low-cost growth loop",
    story_outcome_score: "0 X reads",
    story_outcome_copy: "Daily replies, cost guard, and learning feedback without extra X search/read calls.",
    outcome_extra_reads: "X reads",
    outcome_replies_ready: "Replies",
    outcome_api_left: "API left",
    outcome_best_hook: "Best hook",
    pipeline_eyebrow: "Live pipeline",
    pipeline_title: "Signal to learning",
    pipeline_rss: "Ingest",
    pipeline_rank: "Rank",
    pipeline_draft: "Draft",
    pipeline_route: "Route",
    pipeline_learn: "Learn",
    pipeline_status: "{stages}-stage loop active · manual publish only",
    pipeline_metric_measured: "Measured",
    pipeline_metric_drafts: "Drafts",
    pipeline_metric_budget: "Budget",
    runlog_eyebrow: "Task log",
    runlog_ready: "operator ready",
    runlog_ingest: "rss.ingest",
    runlog_score: "ranker.score",
    runlog_queue: "draft.queue",
    runlog_cost: "cost.guard",
    runlog_learn: "learning.writeback",
    runlog_live_data: "live dashboard data",
    runlog_fallback_data: "fallback telemetry",
    runlog_stale_data: "stale telemetry",
    runlog_posts_measured: "{count} posts measured",
    runlog_drafts_ready: "{count} replies ready",
    runlog_budget_left: "{amount} budget left",
    runlog_best_hook: "{hook} currently wins",
    monitor_load: "System average load",
    monitor_alerts: "Alert state",
    monitor_partition: "API partition usage",
    monitor_requests: "X API operations per run",
    gauge_data_age: "Data age",
    gauge_followers: "Followers",
    gauge_24h_impr: "24h impressions",
    gauge_signal_score: "Signal score",
    gauge_reply_queue: "Reply queue",
    gauge_api_left: "API left",
    gauge_cost_used: "Cost used",
    gauge_success_rate: "Success rate",
    gauge_minutes: "{count} min",
    gauge_items: "{count} items",
    gauge_percent: "{value}%",
    current_value: "current {value}",
    monitor_calls_summary: "{calls} calls · {failures} failures",
    alert_ok_title: "All growth partitions online",
    alert_ok_body: "Data is fresh, cost guard is active, and manual reply routing is ready.",
    alert_warn_title: "Attention required",
    alert_warn_body: "The dashboard is using older data. Run growth maintenance before making today's reply decisions.",
    alert_danger_title: "Fallback telemetry active",
    alert_danger_body: "Live dashboard data could not be fetched, so the console is rendering fallback telemetry.",
    mission_eyebrow: "NOC Console",
    mission_title: "Live growth system operations.",
    mission_copy: "Monitor feed ingest, draft queues, distribution routes, learning signals, and API spend from one production surface.",
    expo_mode: "Expo Mode",
    noc_runtime: "Runtime",
    noc_runtime_value: "Actions online",
    noc_sync: "Pages sync",
    noc_sync_value: "Static deploy",
    noc_budget: "Cost guard",
    noc_budget_value: "No X reads",
    noc_operator: "Operator mode",
    noc_operator_value: "Manual paste",
    live: "Live",
    signal_map: "Signal Map",
    signal_detail_close: "Close",
    signal_rss_title: "RSS ingest",
    signal_draft_title: "Draft queue",
    signal_score_title: "Scoring layer",
    signal_x_title: "X routing",
    signal_learn_title: "Learning loop",
    signal_rss_summary: "Feeds supply the raw tech signal. The map shows which sources are producing posts that actually earned attention.",
    signal_draft_summary: "The bot converts the strongest angles into paste-ready replies without publishing them automatically.",
    signal_score_summary: "Every post gets scored by impressions, likes, replies, format, and source so the next run can bias toward what worked.",
    signal_x_summary: "The low-cost workflow sends you to X web search links. Opening these links does not spend X API budget.",
    signal_learn_summary: "The learning layer turns measured outcomes into tomorrow's hook, source, and format choices.",
    signal_sources: "Top RSS sources",
    signal_latest_posts: "Recent posts",
    signal_drafts: "Ready drafts",
    signal_actions: "Manual routes",
    signal_learning: "Learning notes",
    signal_metrics: "Live metrics",
    signal_empty: "No data yet",
    signal_open: "Open",
    hero_signal_label: "Signal score",
    hero_loop_label: "Today's loop",
    hero_cost_label: "Cost guard",
    hero_strip_signal: "Signal",
    hero_strip_cost: "Cost",
    hero_strip_learning: "Learning",
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
    goal_eyebrow: "Growth Goal",
    goal_title: "1,000 followers is the operating target.",
    goal_remaining: "{count} to goal",
    goal_progress: "{current} / {target} followers",
    goal_current: "Current",
    goal_target: "Target",
    goal_next: "Next milestone",
    goal_daily: "Daily target",
    daily_target_value: "{replies} replies + {posts} post",
    learning_eyebrow: "Learning Layer",
    learning_title: "What the bot should try next",
    best_hook: "Best hook",
    worst_format: "Weakest format",
    best_source: "Best source",
    next_experiment: "Next experiment",
    proof_eyebrow: "Proof of Work",
    proof_title: "Best signal this week",
    score_label: "Score {score}",
    why_it_worked: "Why it worked",
    open_winner: "Open winner",
    proof_impressions: "Impressions",
    proof_likes: "Likes",
    proof_replies: "Replies",
    proof_format: "Format",
    loop_eyebrow: "Growth Loop",
    loop_title: "System learns from every post",
    loop_scan: "Scan",
    loop_scan_detail: "Detect tech stories and broad audience hooks.",
    loop_write: "Write",
    loop_write_detail: "Generate copy-ready replies and sharper post formats.",
    loop_route: "Route",
    loop_route_detail: "Send the operator to high-signal conversations.",
    loop_learn: "Learn",
    loop_learn_detail: "Feed metrics back into tomorrow's style choices.",
    daily_action_title: "Today: 3 paste-ready moves",
    daily_action_copy: "Open the first target, paste the prepared reply, then repeat the next two. No extra X API reads.",
    copy_first_reply: "Copy first reply",
    zero_api_action: "Zero extra API",
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
    live_data: "实时数据",
    data_stale: "数据过期",
    fallback_data: "备用数据",
    demo_mode: "演示模式",
    exit_demo: "退出演示",
    auto_demo: "自动演示",
    stop_auto_demo: "停止轮播",
    demo_live: "30 秒演示",
    demo_signal: "信号地图",
    demo_proof: "最佳信号",
    demo_goal: "增长目标",
    demo_actions: "今日动作",
    demo_story: "Expo 故事",
    open_x: "打开 X",
    grafana_title: "1 Node Exporter: X Bot 增长监控",
    grafana_window: "最近 24 小时",
    story_eyebrow: "Expo 简报",
    story_title: "低成本增长闭环",
    story_outcome_score: "0 次 X 读取",
    story_outcome_copy: "每日回复、成本守卫和学习反馈都在线，同时不增加 X 搜索/读取调用。",
    outcome_extra_reads: "X 读取",
    outcome_replies_ready: "回复",
    outcome_api_left: "API 剩余",
    outcome_best_hook: "最佳钩子",
    pipeline_eyebrow: "实时流水线",
    pipeline_title: "信号到学习",
    pipeline_rss: "抓取",
    pipeline_rank: "排序",
    pipeline_draft: "草稿",
    pipeline_route: "分发",
    pipeline_learn: "学习",
    pipeline_status: "{stages} 阶段闭环在线 · 仅人工发布",
    pipeline_metric_measured: "已测",
    pipeline_metric_drafts: "草稿",
    pipeline_metric_budget: "预算",
    runlog_eyebrow: "任务日志",
    runlog_ready: "操作者就绪",
    runlog_ingest: "rss.ingest",
    runlog_score: "ranker.score",
    runlog_queue: "draft.queue",
    runlog_cost: "cost.guard",
    runlog_learn: "learning.writeback",
    runlog_live_data: "实时看板数据",
    runlog_fallback_data: "备用遥测",
    runlog_stale_data: "过期遥测",
    runlog_posts_measured: "已测量 {count} 条帖子",
    runlog_drafts_ready: "{count} 条回复就绪",
    runlog_budget_left: "预算剩余 {amount}",
    runlog_best_hook: "当前胜出：{hook}",
    monitor_load: "系统平均负载",
    monitor_alerts: "告警状态",
    monitor_partition: "API 分区用量",
    monitor_requests: "每轮 X API 操作",
    gauge_data_age: "数据年龄",
    gauge_followers: "关注者",
    gauge_24h_impr: "24h 曝光",
    gauge_signal_score: "信号评分",
    gauge_reply_queue: "回复队列",
    gauge_api_left: "API 剩余",
    gauge_cost_used: "成本已用",
    gauge_success_rate: "成功率",
    gauge_minutes: "{count} 分钟",
    gauge_items: "{count} 项",
    gauge_percent: "{value}%",
    current_value: "当前 {value}",
    monitor_calls_summary: "{calls} 次调用 · {failures} 次失败",
    alert_ok_title: "增长分区全部在线",
    alert_ok_body: "数据新鲜、成本守卫开启，人工回复分发入口已就绪。",
    alert_warn_title: "需要关注",
    alert_warn_body: "看板正在使用较旧数据。做今天的回复决策前，先跑一次 growth maintenance。",
    alert_danger_title: "备用遥测启用",
    alert_danger_body: "实时看板数据拉取失败，因此控制台正在渲染备用遥测。",
    mission_eyebrow: "NOC 控制台",
    mission_title: "实时增长系统运维面板。",
    mission_copy: "在一个生产界面里监控 RSS 抓取、草稿队列、分发入口、学习信号和 API 成本。",
    expo_mode: "Expo 模式",
    noc_runtime: "运行时",
    noc_runtime_value: "Actions 在线",
    noc_sync: "Pages 同步",
    noc_sync_value: "静态部署",
    noc_budget: "成本守卫",
    noc_budget_value: "不读 X",
    noc_operator: "操作模式",
    noc_operator_value: "人工粘贴",
    live: "在线",
    signal_map: "信号地图",
    signal_detail_close: "关闭",
    signal_rss_title: "RSS 抓取",
    signal_draft_title: "草稿队列",
    signal_score_title: "评分层",
    signal_x_title: "X 分发入口",
    signal_learn_title: "学习闭环",
    signal_rss_summary: "RSS 提供原始科技信号。这里展示哪些来源真正带来了更高互动。",
    signal_draft_summary: "系统把强角度变成可直接粘贴的回复草稿，但不会自动发布。",
    signal_score_summary: "每条帖都会按曝光、点赞、回复、格式和来源评分，下一次运行会偏向有效模式。",
    signal_x_summary: "低成本流程只把你送到 X 网页搜索入口。打开这些链接不会消耗 X API 预算。",
    signal_learn_summary: "学习层把已测结果转成明天应该尝试的钩子、来源和格式。",
    signal_sources: "最佳 RSS 来源",
    signal_latest_posts: "近期帖子",
    signal_drafts: "待用草稿",
    signal_actions: "人工分发入口",
    signal_learning: "学习备注",
    signal_metrics: "实时指标",
    signal_empty: "暂无数据",
    signal_open: "打开",
    hero_signal_label: "信号评分",
    hero_loop_label: "今日流程",
    hero_cost_label: "成本守卫",
    hero_strip_signal: "信号",
    hero_strip_cost: "成本",
    hero_strip_learning: "学习",
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
    goal_eyebrow: "增长目标",
    goal_title: "1,000 关注者是当前运营目标。",
    goal_remaining: "距目标还差 {count}",
    goal_progress: "{current} / {target} 关注者",
    goal_current: "当前",
    goal_target: "目标",
    goal_next: "下一里程碑",
    goal_daily: "每日目标",
    daily_target_value: "{replies} 条回复 + {posts} 条主帖",
    learning_eyebrow: "学习层",
    learning_title: "机器人下一步应该尝试什么",
    best_hook: "最佳钩子",
    worst_format: "最弱格式",
    best_source: "最佳来源",
    next_experiment: "下一轮实验",
    proof_eyebrow: "真实证明",
    proof_title: "本周最强信号",
    score_label: "评分 {score}",
    why_it_worked: "为什么有效",
    open_winner: "打开赢家",
    proof_impressions: "曝光",
    proof_likes: "点赞",
    proof_replies: "回复",
    proof_format: "格式",
    loop_eyebrow: "增长闭环",
    loop_title: "系统从每条帖中学习",
    loop_scan: "扫描",
    loop_scan_detail: "识别科技热点和更大受众会关心的角度。",
    loop_write: "生成",
    loop_write_detail: "产出可复制回复和更锋利的发帖格式。",
    loop_route: "分发",
    loop_route_detail: "把操作者送到高信号对话入口。",
    loop_learn: "学习",
    loop_learn_detail: "把数据反馈到明天的风格选择。",
    daily_action_title: "今天：3 个可直接粘贴的动作",
    daily_action_copy: "先打开第一个目标入口，粘贴准备好的回复，再重复后两项。不增加 X API 读取。",
    copy_first_reply: "复制第一条回复",
    zero_api_action: "零额外 API",
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
const formatNumber = (value, digits = 0) =>
  number(value).toLocaleString(currentLang === "zh" ? "zh-CN" : "en-US", {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  });
const FRESH_DATA_MAX_AGE_HOURS = 30;
const DEMO_STEP_MS = 7500;
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
  const spend = number(api.spend);
  const cap = number(api.cap, 5);
  const remaining = Math.max(0, cap - spend);
  const ratio = cap > 0 ? Math.min(100, (spend / cap) * 100) : 0;
  return { api, spend, cap, remaining, ratio };
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
  const updated = new Date(dashboardData.updatedAt);
  if (Number.isNaN(updated.getTime())) return { key: "data_stale", className: "warn" };
  const ageHours = (Date.now() - updated.getTime()) / 36e5;
  if (ageHours > FRESH_DATA_MAX_AGE_HOURS) return { key: "data_stale", className: "warn" };
  return { key: "live_data", className: "ok" };
}

function draftFor(index) {
  const drafts = dashboardData.drafts || [];
  return drafts[Math.min(Math.max(0, index), Math.max(0, drafts.length - 1))] || fallbackData.drafts[0];
}

function renderHeader() {
  const updated = formatDate(dashboardData.updatedAt);
  const { spend, cap, remaining, ratio } = apiBudget();
  const freshness = dataFreshness();
  const livePill = document.querySelector(".live-pill");
  $("#mode-label").textContent = t(freshness.key);
  livePill.classList.toggle("warn", freshness.className === "warn");
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
    ? `${formatNumber(last7d.posts)} 条已评分`
    : `${formatNumber(last7d.posts)} posts scored`;
  $("#hero-strip-cost").textContent = currentLang === "zh"
    ? `$${remaining.toFixed(2)} 受控`
    : `$${remaining.toFixed(2)} guarded`;
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
  const bestHookName = formatTemplate(bestHook?.name || bestPost()?.template || "decision_rule");
  const measuredPosts = number(profile.measuredPosts, number(profile.trackedPosts, number(last7d.posts)));

  $("#story-outcome-score").textContent = t("story_outcome_score");
  $("#story-outcome-copy").textContent = t("story_outcome_copy");
  $("#pipeline-status").textContent = t("pipeline_status", { stages: 5 });
  $("#runlog-status").textContent = t("runlog_ready");

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
  const updated = new Date(dashboardData.updatedAt);
  if (Number.isNaN(updated.getTime())) return null;
  return Math.max(0, Math.round((Date.now() - updated.getTime()) / 60000));
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
  const endpoints = dashboardData.api?.endpoints || fallbackData.api.endpoints || [];
  return cumulativeSeries(endpoints.map((endpoint) => number(endpoint.calls)));
}

function impressionSeries(periodData) {
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

function renderMonitorPanels() {
  const loadChart = $("#monitor-load-chart");
  if (!loadChart) return;
  const last24h = dashboardData.last24h || fallbackData.last24h || {};
  const impressionStats = seriesStats(impressionSeries(last24h), number(last24h.impressions));
  $("#monitor-load-current").textContent = t("current_value", { value: formatNumber(impressionStats.current) });
  loadChart.innerHTML = `
    ${chartSvg(impressionStats.values, "primary")}
    <div class="chart-legend">
      <span><i></i> impressions.load</span>
      <strong>${formatNumber(impressionStats.total)} 24h total</strong>
    </div>
  `;

  const endpoints = dashboardData.api?.endpoints || fallbackData.api.endpoints || [];
  const calls = endpoints.reduce((sum, endpoint) => sum + number(endpoint.calls), 0);
  const failures = endpoints.reduce((sum, endpoint) => sum + number(endpoint.failures), 0);
  const endpointStats = seriesStats(endpointCallSeries(), calls);
  $("#monitor-request-current").textContent = t("current_value", { value: formatNumber(endpointStats.current) });
  $("#monitor-request-chart").innerHTML = `
    ${chartSvg(endpointStats.values, "secondary")}
    <div class="chart-legend">
      <span><i></i> x_api.calls</span>
      <strong>${formatNumber(endpointStats.total)} calls · ${money(apiBudget().spend)} month</strong>
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
  const alert = $("#monitor-alert");
  const alertKey = freshness.className === "ok" ? "ok" : freshness.className === "warn" ? "warn" : "danger";
  $("#monitor-alert-state").textContent = t(freshness.key);
  alert.className = `alert-console ${alertKey}`;
  alert.innerHTML = `
    <strong>${escapeHtml(t(`alert_${alertKey}_title`))}</strong>
    <p>${escapeHtml(t(`alert_${alertKey}_body`))}</p>
    <code>${escapeHtml(formatDate(dashboardData.updatedAt))}</code>
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
    ink: styles.getPropertyValue("--ink").trim() || "#111827",
    body: styles.getPropertyValue("--body").trim() || "#4b5563",
    line: styles.getPropertyValue("--line").trim() || "#e5e7eb",
    surface: styles.getPropertyValue("--surface").trim() || "#ffffff",
    ok: styles.getPropertyValue("--ok").trim() || "#16a34a",
    warn: styles.getPropertyValue("--warn").trim() || "#d97706",
  };
}

function drawRoundedRect(ctx, x, y, width, height, radius) {
  if (typeof ctx.roundRect === "function") {
    ctx.roundRect(x, y, width, height, radius);
    return;
  }
  const safeRadius = Math.min(radius, width / 2, height / 2);
  ctx.moveTo(x + safeRadius, y);
  ctx.lineTo(x + width - safeRadius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + safeRadius);
  ctx.lineTo(x + width, y + height - safeRadius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - safeRadius, y + height);
  ctx.lineTo(x + safeRadius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - safeRadius);
  ctx.lineTo(x, y + safeRadius);
  ctx.quadraticCurveTo(x, y, x + safeRadius, y);
}

function drawSignalCanvas(canvas, ctx, time) {
  const palette = signalCanvasPalette();
  const width = canvas.width;
  const height = canvas.height;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const grid = 44 * dpr;
  const center = { x: width * 0.5, y: height * 0.52 };
  const nodes = [
    { x: width * 0.14, y: height * 0.25, label: "RSS" },
    { x: width * 0.3, y: height * 0.74, label: "Draft" },
    { x: width * 0.52, y: height * 0.17, label: "Score" },
    { x: width * 0.76, y: height * 0.31, label: "X" },
    { x: width * 0.83, y: height * 0.72, label: "Learn" },
  ];
  const routes = [
    [nodes[0], center],
    [nodes[1], center],
    [nodes[2], center],
    [center, nodes[3]],
    [center, nodes[4]],
    [nodes[3], nodes[4]],
  ];

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

  ctx.lineWidth = 2 * dpr;
  routes.forEach(([from, to], index) => {
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    const midX = (from.x + to.x) / 2;
    const midY = (from.y + to.y) / 2 - (index % 2 ? 28 : -18) * dpr;
    ctx.quadraticCurveTo(midX, midY, to.x, to.y);
    ctx.strokeStyle = colorWithAlpha(palette.accent, currentTheme === "dark" ? 0.3 : 0.24);
    ctx.stroke();

    const progress = (time / 1300 + index * 0.19) % 1;
    const oneMinus = 1 - progress;
    const dotX = oneMinus * oneMinus * from.x + 2 * oneMinus * progress * midX + progress * progress * to.x;
    const dotY = oneMinus * oneMinus * from.y + 2 * oneMinus * progress * midY + progress * progress * to.y;
    ctx.beginPath();
    ctx.arc(dotX, dotY, 4.5 * dpr, 0, Math.PI * 2);
    ctx.fillStyle = colorWithAlpha(index % 2 ? palette.ok : palette.accent, 0.92);
    ctx.fill();
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
  ctx.arc(center.x, center.y, 34 * dpr, 0, Math.PI * 2);
  ctx.fillStyle = colorWithAlpha(palette.accent, currentTheme === "dark" ? 0.2 : 0.12);
  ctx.fill();
  ctx.strokeStyle = colorWithAlpha(palette.accent, 0.72);
  ctx.lineWidth = 2 * dpr;
  ctx.stroke();
  ctx.fillStyle = palette.ink;
  ctx.font = `${11 * dpr}px ui-sans-serif, system-ui, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("CORE", center.x, center.y);

  nodes.forEach((node, index) => {
    const size = (index === 3 ? 46 : 38) * dpr;
    const x = node.x - size / 2;
    const y = node.y - size / 2;
    ctx.fillStyle = colorWithAlpha(palette.surface, currentTheme === "dark" ? 0.86 : 0.96);
    ctx.strokeStyle = colorWithAlpha(index % 2 ? palette.ok : palette.accent, 0.72);
    ctx.lineWidth = 1.5 * dpr;
    ctx.beginPath();
    drawRoundedRect(ctx, x, y, size, size, 8 * dpr);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = palette.ink;
    ctx.font = `${10 * dpr}px ui-sans-serif, system-ui, sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(node.label, node.x, node.y);
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
      kicker: "Draft",
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
      kicker: "Score",
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
      kicker: "X",
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
              meta: t("open_search"),
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
      kicker: "Learn",
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
    ${config.body || `<p class="signal-detail-empty">${escapeHtml(t("signal_empty"))}</p>`}
  `;
  document.querySelectorAll("[data-signal-node]").forEach((button) => {
    const active = button.dataset.signalNode === activeSignalNode && signalDetailOpen;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
    button.setAttribute("aria-expanded", String(active));
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
  return impressionSeries(dashboardData.last7d || fallbackData.last7d || {});
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
  const actions = dashboardData.actions || fallbackData.actions;
  const firstAction = actions[0] || fallbackData.actions[0];
  const firstDraft = draftFor(firstAction.draftIndex ?? 0);
  const localizedFirstAction = localizeAction(firstAction);
  const actionCards = actions
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

  $("#action-board").innerHTML = `
    <article class="action-hero">
      <div>
        <span class="pill pill-neutral">${t("zero_api_action")}</span>
        <h3>${t("daily_action_title")}</h3>
        <p>${t("daily_action_copy")}</p>
        <div class="row-actions">
          <a class="button button-primary" href="${escapeHtml(firstAction.url)}" target="_blank" rel="noreferrer">${t("open_search")}: ${escapeHtml(localizedFirstAction.label)}</a>
          <button class="button button-secondary" type="button" data-copy="${encodeURIComponent(firstDraft.text)}">${t("copy_first_reply")}</button>
        </div>
      </div>
      <blockquote>${escapeHtml(firstDraft.text)}</blockquote>
    </article>
    <div class="action-list">
      ${actionCards}
    </div>
  `;
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
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;

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
  renderExpoStory();
  renderGauges();
  renderMonitorPanels();
  renderMetrics();
  renderGoal();
  renderLearning();
  renderSignalDetail();
  renderProof();
  renderServices();
  renderTrend();
  renderActions();
  renderDrafts();
  renderDiagnosis();
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
    signalResizeTimer = setTimeout(setupSignalCanvas, 120);
  });
}

init();
