/*
    水晶花园页面文字与链接配置

    不放在这里的固定界面文字：
    状态、完美、微风、正好、心情、一直在、
    以及终端示例里的命令、key 占位符与响应文字。
    这些文字属于界面装饰或状态标签，如需修改，请直接编辑 index.html
    中对应的 HTML，不要为了它们增加配置项。

    注意：
    - site.name 会一次修改顶部品牌和状态面板品牌。
    - links 中的路径通常以 / 开头；外部链接必须写完整 https:// 地址。
*/

window.WANAPI_CONTENT = {
    // 信息：修改 name 后，页面中的多个品牌位置会同步变化。
    site: {
        name: "水晶花园",
        pageTitle: "水晶花园",
        description: "水晶花园——随时来这里吹吹风、休息一下吧",
        brandCaption: "crystal garden",
        eyebrow: "水晶花园 · 私人空间",
    },

    // 顶部导航：features 对应花园常客，workflow 对应随笔。
    navigation: {
        features: "好友",
        workflow: "便签",
        console: "推门",
        mobileMenuLabel: "打开菜单",
    },

    // 首屏主视觉：title 是迎面第一句话，description 是下面的小字。
    hero: {
        title: "嗨，今天过得怎么样？",
        description: "随时来这里吹吹风、休息一下吧",
        primaryButton: "来做客吧",
        secondaryButton: "认识我哦",
    },

    // 顶部滚动公告：每条会循环滚动展示。
    ticker: {
        items: [
            "欢迎来到水晶花园 · 今天也是晴天",
            "记得多喝温水，别等渴了才想起来",
            "坐久了就伸个懒腰，往窗外看看",
            "敲敲键盘，花园的灯一直为你亮着",
        ],
    },

    // 背景图：留空则回退为默认渐变背景；填写相对路径或完整图片地址生效。
    background: {
        imageUrl: "assets/elysia-bg.webp",
    },

    // 状态面板底下一句导语。
    statusPanel: {
        caption: "今天也是晴天，随时进来坐坐哦",
    },

    // 花园常客：四张卡片，每位常客一个故事。
    features: {
        title: "花园常客",
        description: "花园里的几位老朋友，每天都会在这儿等你。",
        firstTitle: "窗边的白猫",
        firstDescription: "整天趴在阳光正好的窗台上打哈欠，偶尔翻个身蹭蹭路过的鞋角，教你学会正大光明地偷懒。",
        secondTitle: "衔信的飞鸟",
        secondDescription: "扑棱着翅膀穿梭在云层与晴空之间，总能从很远很远的地方，衔来意想不到的奇妙灵感。",
        thirdTitle: "守花的花灵",
        thirdDescription: "安安静静待在盛开的水晶花丛旁，不声不响，替整座花园守着那些温柔又细微的小秘密。",
        fourthTitle: "引路的糖糕",
        fourthDescription: "沏好温茶站在门边迎你，只要你敲敲门，无论白天还是深夜，这里的灯火永远为你亮着。",
    },

    // 随笔：墙上随笔区，只有三条小便签。
    workflow: {
        title: "墙上随笔",
        firstTitle: "歇一会儿",
        firstDescription: "累了就伸个懒腰，往窗外看看发会儿呆。",
        secondTitle: "记得分享",
        secondDescription: "碰上好玩的事物，要记得分享呀。",
        thirdTitle: "不用拘束",
        thirdDescription: "这里是安静的小天地，不用拘束哦。",
    },

    // 底部终端示例：fileName 是窗口标题，model 是示例模型名，prompt 是消息内容。
    terminal: {
        fileName: "crystal.sh",
        model: "gpt-4o-mini",
        prompt: "花园里有什么？",
    },

    // 控制台、注册页和文档链接：路径通常以 / 开头；外部链接必须写完整 https:// 地址。
    links: {
        consolePath: "/",
        registerPath: "/register",
        documentationUrl: "https://docs.newapi.pro/zh/docs",
    },

};
