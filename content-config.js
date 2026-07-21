/*
    WANAPI 页面文字与链接配置

    不放在这里的固定界面文字：
    ROUTES、READY、MODELS、ONLINE、STREAM、ACTIVE、gateway load、
    gateway ready、response stream connected、core abilities、
    how it flows、model constellation，以及页脚的静态状态标记。
    这些文字属于界面装饰或状态标签，如需修改，请直接编辑 index.html
    中对应的 HTML，不要为了它们增加配置项。

    注意：
    - site.name 会一次修改顶部品牌、Hero 状态面板和页脚品牌。
    - links 中的路径通常以 / 开头；外部链接必须写完整 https:// 地址。
*/

window.WANAPI_CONTENT = {
    // 信息：修改 name 后，页面中的多个 WANAPI 品牌位置会同步变化。
    site: {
        name: "WANAPI",
        pageTitle: "WANAPI",
        description: "WANAPI AI API 中转站首页。",
        brandCaption: "inspiration gateway",
        eyebrow: "WANAPI / custom home",
    },

    // 顶部导航：features/workflow/models 对应页面内的三个锚点区域。
    navigation: {
        features: "能力",
        workflow: "流程",
        models: "模型",
        console: "进入控制台",
        mobileMenuLabel: "打开菜单",
    },

    // Hero 首屏：title 是大标题，description 是标题下方的介绍文字。
    hero: {
        title: "WANAPI",
        description: "通过统一接口、渠道路由和用量管理能力，把模型服务整理成清晰的入口，提供稳定、清楚的响应路径。",
        primaryButton: "开始使用",
        secondaryButton: "查看官方文档",
    },

    // 状态面板只保留用户可感知的标题；内部状态标签固定在 index.html。
    statusPanel: {
        caption: "WANAPI 状态正常",
    },

    // 首屏下方的四个统计项，每组由 value 和 label 组成。
    stats: {
        firstValue: "01",
        firstLabel: "统一 API 入口",
        secondValue: "24/7",
        secondLabel: "面向团队的调用管理",
        thirdValue: "SDK",
        thirdLabel: "兼容 OpenAI 调用习惯",
        fourthValue: "∞",
        fourthLabel: "按需接入合法授权模型",
    },

    // 能力区：修改四张卡片时，Title 和 Description 要成对修改。
    features: {
        title: "把复杂的模型世界，整理成一张清晰的桌面。",
        description: "API 中转站提供统一接口、智能路由、用量统计与权限管理等能力。首页只负责迎接用户，真正的工作交给后面的控制台。",
        aside: "适用于自用、团队内部和企业私有化部署场景。具体可用模型和权限，以当前实例配置为准。",
        firstTitle: "统一入口",
        firstDescription: "用一个清楚的入口承接多种模型与接口格式，减少应用侧的重复适配工作。",
        secondTitle: "智能路由",
        secondDescription: "按渠道权重、失败重试与限流策略安排请求，让调用链路更有秩序。",
        thirdTitle: "用量洞察",
        thirdDescription: "围绕调用、额度与成本做可视化管理，方便团队复盘资源使用情况。",
        fourthTitle: "团队权限",
        fourthDescription: "通过令牌、模型访问控制与组织内权限配置，把每个调用者放在合适的位置。",
    },

    // 流程区：修改 first/second/third 三组即可替换三步说明。
    workflow: {
        title: "三步，让请求找到合适的方向。",
        description: "从应用发起请求，到上游完成响应，中间的路由、重试、统计和权限都集中在一处处理。",
        firstTitle: "应用发起请求",
        firstDescription: "沿用熟悉的兼容格式，把已有应用接入当前实例。",
        secondTitle: "网关完成路由",
        secondDescription: "根据渠道、模型和策略选择合法授权的上游服务。",
        thirdTitle: "控制台留下洞察",
        thirdDescription: "让调用记录、额度消耗与团队管理都有迹可循。",
    },

    // 代码预览：model 和 prompt 会替换 JSON 示例中的对应内容。
    terminal: {
        fileName: "request.preview.json",
        model: "gpt-4o-mini",
        prompt: "开始创作",
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

    // 页面底部行动区：修改标题和按钮文字。
    cta: {
        title: "立即前往后台",
        button: "前往注册",
    },

    // 页脚：repositoryLabel 是链接显示文字，copyrightName 是版权名称。
    footer: {
        repositoryLabel: "前端仓库",
        copyrightName: "WANAPI",
    },

    links: {
        consolePath: "/",
        registerPath: "/register",
        documentationUrl: "https://docs.newapi.pro/zh/docs",
        repositoryUrl: "https://github.com/CanYanQwQ/newapi-homepage",
    },

};
