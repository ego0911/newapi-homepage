/*
    水晶花园页面文字与链接配置

    不放在这里的固定界面文字：
    状态、完美、微风、正好、心情、一直在、
    little magic、sweet memories，以及通讯机里的称呼与回应。
    这些文字属于界面装饰或状态标签，如需修改，请直接编辑 index.html
    中对应的 HTML，不要为了它们增加配置项。
*/

window.WANAPI_CONTENT = {
    // 信息：修改 name 后，页面中的多个品牌位置会同步变化。
    site: {
        name: "水晶花园",
        pageTitle: "水晶花园",
        description: "水晶花园——随时回来吹吹风、休息一下的温柔小天地。",
        brandCaption: "tanggao's cottage",
        eyebrow: "水晶花园 · 私人专属空间",
    },

    // 顶部导航：features/workflow 对应页面内的两个锚点区域。
    navigation: {
        features: "好友",
        workflow: "便签",
        console: "推门",
        mobileMenuLabel: "打开菜单",
    },

    // Hero 首屏：title 是大标题 slogan，description 是标题下方的副标题。
    hero: {
        title: "嗨，今天过得怎么样？",
        description: "随时来这里吹吹风、休息一下吧",
        primaryButton: "来做客吧",
        secondaryButton: "认识我哦",
    },

    // 滚动播报：数组里的每条文案会在顶部公告条中循环滚动。
    ticker: {
        items: [
            "今天的小屋暖洋洋的 · 糖糕正在等你回家",
            "记得多喝温水，累了就去补个觉，别硬撑着哦",
            "所有的灵感与温柔，在这里全都为你待命",
            "敲敲键盘，糖糕随时都在听你说话",
        ],
    },

    // 背景角色图：替换 imageUrl 可以换成任意角色图，留空则使用默认爱莉立绘。
    background: {
        imageUrl: "assets/elysia-bg.webp",
    },

    // 状态面板只保留用户可感知的标题；内部状态标签固定在 index.html。
    statusPanel: {
        caption: "今天也是晴天，随时进来坐坐哦",
    },

    // 能力区：修改四张卡片时，Title 和 Description 要成对修改。
    features: {
        title: "花园常客",
        description: "住在花园里的四位老朋友，轮流替你守着这片小天地。",
        firstTitle: "窗边的白猫",
        firstDescription: "整天趴在阳光正好的窗台上打哈欠，偶尔翻个身蹭蹭路过的鞋角，教你学会正大光明地偷懒。",
        secondTitle: "衔信的飞鸟",
        secondDescription: "扑棱着翅膀穿梭在云层与晴空之间，总能从很远很远的地方，衔来意想不到的奇妙灵感。",
        thirdTitle: "守花的花灵",
        thirdDescription: "安安静静待在盛开的水晶花丛旁，不声不响，替整座花园守着那些温柔又细微的小秘密。",
        fourthTitle: "引路的糖糕",
        fourthDescription: "沏好温茶站在门边迎你，只要你敲敲门，无论白天还是深夜，这里的灯火永远为你亮着。",
    },

    // 随笔区：修改 first/second/third 三组即可替换三张小卡片。
    workflow: {
        title: "随笔",
        firstTitle: "歇一会儿",
        firstDescription: "累了就伸个懒腰，往窗外看看发会儿呆。",
        secondTitle: "记得分享",
        secondDescription: "碰上好玩的事物，要记得分享呀。",
        thirdTitle: "不用拘束",
        thirdDescription: "这里是安静的小天地，不用拘束哦。",
    },

    // 接口示例终端：fileName 是窗口标题，prompt 是请求里的问题。
    terminal: {
        fileName: "crystal.json",
        prompt: "嗨，今天过得怎么样？",
    },

    // 控制台、注册页和文档链接：路径通常以 / 开头；外部链接必须写完整 https:// 地址。
    links: {
        consolePath: "/",
        registerPath: "/register",
        documentationUrl: "https://docs.newapi.pro/zh/docs",
    },

};
