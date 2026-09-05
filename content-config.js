/*
    糖糕的小屋页面文字与链接配置

    不放在这里的固定界面文字：
    ROUTES、READY、MODELS、ONLINE、STREAM、ACTIVE、gateway load、
    gateway ready、response stream connected、core abilities、
    how it flows、model constellation。
    这些文字属于界面装饰或状态标签，如需修改，请直接编辑 index.html
    中对应的 HTML，不要为了它们增加配置项。

    注意：
    - site.name 会一次修改顶部品牌、Hero 状态面板和页脚品牌。
    - links 中的路径通常以 / 开头；外部链接必须写完整 https:// 地址。
*/

window.WANAPI_CONTENT = {
    // 信息：修改 name 后，页面中的多个品牌位置会同步变化。
    site: {
        name: "糖糕的小屋",
        pageTitle: "糖糕的小屋",
        description: "糖糕的小屋（TangGao API）——把冰冷的接口调用，变成因你而在的温柔相遇。",
        brandCaption: "tanggao api",
        eyebrow: "糖糕的小屋 · TangGao API",
    },

    // 顶部导航：features/workflow/models 对应页面内的三个锚点区域。
    navigation: {
        features: "能力",
        workflow: "流程",
        models: "模型",
        console: "进入控制台",
        mobileMenuLabel: "打开菜单",
    },

    // Hero 首屏：title 是大标题 slogan，description 是标题下方的副标题。
    hero: {
        title: "把冰冷的接口调用，变成因你而在的温柔相遇。",
        description: "在这里，每一束穿过算力的数据流，都闪烁着水晶般的温度。来尝一口甜甜的糖糕，开启属于你的故事吧。",
        primaryButton: "推开小门",
        secondaryButton: "糖糕使用手册",
    },

    // 滚动播报：数组里的每条文案会在顶部公告条中循环滚动。
    ticker: {
        items: [
            "欢迎来到糖糕的小屋 · 每一束数据流都闪着水晶般的温度",
            "繁花盛开 · 通道就绪 · 糖糕随时为你待命",
            "来尝一口甜甜的糖糕，开启属于你的故事吧",
            "推开小门，把思绪变成温柔的答卷",
        ],
    },

    // 背景角色图：替换 imageUrl 可以换成任意角色图，留空则使用默认爱莉立绘。
    background: {
        imageUrl: "assets/elysia-bg.webp",
    },

    // 状态面板只保留用户可感知的标题；内部状态标签固定在 index.html。
    statusPanel: {
        caption: "今天的小屋一切安好，糖糕随时为你待命。",
    },

    // 首屏下方的四个核心亮点，每组由 value（标题）和 label（描述）组成。
    stats: {
        firstValue: "全天候守候",
        firstLabel: "无论白昼还是深夜，敲敲键盘，糖糕总在第一时间回应你。",
        secondValue: "熟悉顺手",
        secondLabel: "沿用你最习惯的调用格式，无需额外学习，像老朋友聊天一样自然顺畅。",
        thirdValue: "群星汇聚",
        thirdLabel: "把不同模型的智慧悄悄汇集在掌心，想要什么灵感，糖糕都替你取来。",
        fourthValue: "专属天地",
        fourthLabel: "专属于我们的小小港湾，没有繁琐与喧嚣，每一条记录都温暖妥帖。",
    },

    // 能力区：修改四张卡片时，Title 和 Description 要成对修改。
    features: {
        title: "把复杂的算力世界，做成递到你面前的甜点。",
        description: "中转站默默处理好了所有的分流、调度与重试。首页只负责用甜甜的微笑迎接你，复杂的底层琐事，全交给糖糕在幕后搞定。",
        firstTitle: "统一入口 · 一口尝尽",
        firstDescription: "用一个清爽的入口承接所有的思绪，告别繁琐切换，让创作回归纯粹。",
        secondTitle: "灵动路由 · 心有灵犀",
        secondDescription: "为你挑选最平稳通达的通道，即便偶尔拥堵，也会轻轻绕开，顺畅无阻。",
        thirdTitle: "温暖记录 · 足迹珍藏",
        thirdDescription: "悄悄记下每一次灵光乍现与调用足迹，让每一次付出都清晰可寻。",
        fourthTitle: "钥匙管理 · 专属凭证",
        fourthDescription: "为你分发独一无二的访问密钥，守护好这一方只属于我们的秘密基地。",
    },

    // 流程区：修改 first/second/third 三组即可替换三步说明。
    workflow: {
        title: "三步，把思绪变成温柔的答卷。",
        description: "从你敲下回车的那一秒，到屏幕浮现文字，所有复杂的流转都悄悄藏在甜甜的微笑后面。",
        firstTitle: "发起轻唤",
        firstDescription: "向糖糕发出一声小小的问候，带着你的想法启程。",
        secondTitle: "星辰寻觅",
        secondDescription: "糖糕在知识与算力间为你穿针引线，挑选最佳答案。",
        thirdTitle: "递送温暖",
        thirdDescription: "将整理好的答卷轻轻捧到你面前，圆满完成这一次相遇。",
    },

    // 代码预览：model 和 prompt 会替换 JSON 示例中的对应内容。
    terminal: {
        fileName: "request.preview.sh",
        model: "tanggao-special",
        prompt: "早上好。",
    },

    // 模型区：标题、描述、标签和复制按钮可以单独修改。
    models: {
        title: "让不同模型，使用同一种节奏。",
        description: "官方文档列出了 OpenAI、Anthropic、Google Gemini、DeepSeek、Midjourney、Suno 等模型服务与接口方向。此页面不锁定具体供应商，实际展示以后台启用的渠道为准。",
        firstTag: "OpenAI compatible",
        secondTag: "Responses",
        thirdTag: "Claude Messages",
        fourthTag: "Gemini",
        fifthTag: "Rerank",
        sixthTag: "Realtime",
        copyButton: "复制地址",
    },

    // 控制台、注册页和文档链接：路径通常以 / 开头；外部链接必须写完整 https:// 地址。
    links: {
        consolePath: "/",
        registerPath: "/register",
        documentationUrl: "https://docs.newapi.pro/zh/docs",
    },

};
