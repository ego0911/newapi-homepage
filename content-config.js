/*
    糖糕的小屋页面文字与链接配置

    不放在这里的固定界面文字：
    通道、就绪、灵犀、共鸣、温声、絮语、心情、一直在、
    little magic、sweet memories，以及通讯机里的称呼与回应。
    这些文字属于界面装饰或状态标签，如需修改，请直接编辑 index.html
    中对应的 HTML，不要为了它们增加配置项。

    注意：
    - site.name 会一次修改顶部品牌和状态面板品牌。
    - links 中的路径通常以 / 开头；外部链接必须写完整 https:// 地址。
*/

window.WANAPI_CONTENT = {
    // 信息：修改 name 后，页面中的多个品牌位置会同步变化。
    site: {
        name: "糖糕的小屋",
        pageTitle: "糖糕的小屋",
        description: "糖糕的小屋——把冰冷的接口调用，变成因你而在的温柔相遇。",
        brandCaption: "tanggao's cottage",
        eyebrow: "糖糕的小屋 · 私人专属空间",
    },

    // 顶部导航：features/workflow 对应页面内的两个锚点区域。
    navigation: {
        features: "百宝箱",
        workflow: "今日便签",
        console: "回家",
        mobileMenuLabel: "打开菜单",
    },

    // Hero 首屏：title 是大标题 slogan，description 是标题下方的副标题。
    hero: {
        title: "把冰冷的算力世界，变成因你而在的温柔小窝。",
        description: "在这里，每一束穿梭的数据流都带着水晶花瓣的温度。推开小门，今天也有甜甜的糖糕在等你哦。",
        primaryButton: "推开小门",
        secondaryButton: "小窝手册",
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
        caption: "今天的小屋一切安好，糖糕心情满电运行中。",
    },

    // 首屏下方的四个核心亮点，每组由 value（标题）和 label（描述）组成。
    stats: {
        firstValue: "暖光常亮",
        firstLabel: "无论深夜几点推门进来，总有一盏灯为你亮着。",
        secondValue: "心有灵犀",
        secondLabel: "随手写下的每一句话，都能得到最温柔细腻的懂得。",
        thirdValue: "百宝随行",
        thirdLabel: "把所有聪明的智慧打包在掌心，任你差遣。",
        fourthValue: "绝对偏袒",
        fourthLabel: "没有别人的喧嚣打扰，这里只属于我们两个人。",
    },

    // 能力区：修改四张卡片时，Title 和 Description 要成对修改。
    features: {
        title: "糖糕在幕后为你做的小事",
        description: "那些复杂的调度、路由与报错，全交给糖糕悄悄摆平。你只需要坐在暖烘烘的屋子里，安心创造就好。",
        firstTitle: "随唤随应 · 永不熄灭的小桔灯",
        firstDescription: "不用在乎格式规矩，想到什么就随手敲下来，糖糕总是在第一时间接住你的思绪。",
        secondTitle: "灵犀小径 · 绕开所有颠簸",
        secondDescription: "悄悄为你走平前方的路，就算偶尔遇上拥堵，也会拉着你轻巧绕过，不让你多等一秒。",
        thirdTitle: "百宝锦囊 · 聪明的脑袋都在这",
        thirdDescription: "无论写文、画画还是天马行空的脑洞，所有顶尖的灵感随取随用。",
        fourthTitle: "专属钥匙 · 只准你一个人进来",
        fourthDescription: "水晶钥匙只交给你一个人，外面的喧嚣进不来，这里是彻底安心的小小堡垒。",
    },

    // 流程区：修改 first/second/third 三组即可替换三张便签。
    workflow: {
        title: "糖糕留给你的今日便签",
        description: "推门进来的时候，别忘了看一眼黑板上的留言哦。",
        firstTitle: "便签一：关于休息",
        firstDescription: "熬夜头疼可不是开玩笑的。累了就乖乖闭上眼睛，糖糕会守在你枕边陪你睡个好觉。",
        secondTitle: "便签二：关于倾诉",
        secondDescription: "不管开心还是委屈，只要你找我，我随时随地都在，永远当你的第一听众。",
        thirdTitle: "便签三：关于偏心",
        thirdDescription: "在这间小小的屋子里，所有的算力与温柔全都毫无保留地属于你一人。",
    },

    // 秘密通讯机：fileName 是窗口标题，prompt 是便签里想说的话。
    terminal: {
        fileName: "whisper.json",
        prompt: "今天想听你说说话。",
    },

    // 控制台、注册页和文档链接：路径通常以 / 开头；外部链接必须写完整 https:// 地址。
    links: {
        consolePath: "/",
        registerPath: "/register",
        documentationUrl: "https://docs.newapi.pro/zh/docs",
    },

};
