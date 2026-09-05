# NEWAPI HomePage

New API 的二次元风格静态首页。

## 在线体验

[访问 WANAPI](https://newapi.zhouwanx.top)

## 页面特性
- 通过 `content-config.js` 集中修改品牌、文案和链接
- 自动适配 New API 的 iframe 首页模式
- 自动识别当前 New API 实例，并生成控制台、注册页和 `/v1` 地址
- 支持跟随 New API 切换浅色与深色主题
- 支持桌面端和移动端响应式布局
- 包含滚动显现、导航定位、移动端菜单和地址复制功能
- 随机二次元背景加载失败时自动回退到纯色背景
- 尊重系统的“减少动态效果”设置

## 快速使用

### 1. 修改页面内容

打开 `content-config.js`，根据需要修改品牌名称、首页文案、按钮文字和链接：

```js
window.WANAPI_CONTENT = {
    site: {
        name: "WANAPI",
        pageTitle: "WANAPI",
        description: "WANAPI AI API 中转站首页。",
    },
    links: {
        consolePath: "/",
        registerPath: "/register",
        documentationUrl: "https://docs.newapi.pro/zh/docs",
        repositoryUrl: "https://github.com/CanYanQwQ/newapi-homepage",
    },
};
```

配置文件中的其他字段可以继续控制导航、首屏、能力介绍、使用流程、模型标签、行动按钮和页脚内容。

没有放入 `content-config.js` 的装饰文字或状态标签，可以直接在 `index.html` 中修改。

### 2. 部署页面

将仓库中的文件完整发布到任意静态托管服务即可：

- GitHub Pages
- Cloudflare Pages
- Vercel
- Nginx、Caddy 或其他静态 Web 服务器

本项目没有构建命令，站点入口是根目录下的 `index.html`，部署目录就是仓库根目录。

部署后，请确认页面可以通过公网 HTTPS 地址正常访问。

### 3. 接入 New API

1. 打开 New API 管理后台。
2. 进入 **设置** → **首页内容**。
3. 填写部署后的完整页面地址。
4. 保存设置并刷新 New API 首页。

页面在 New API 中以 iframe 方式加载时，会自动完成以下处理：

- 隐藏自身顶部导航，避免与 New API 导航重复
- 根据外层页面地址生成控制台、注册页和 `/v1` 地址
- 接收并同步 New API 发送的主题模式

## 常用配置

| 配置区域 | 用途 |
| --- | --- |
| `site` | 品牌名称、页面标题和页面描述 |
| `navigation` | 顶部导航和控制台按钮文字 |
| `hero` | 首屏标题、介绍和按钮文字 |
| `stats` | 首屏下方的统计信息 |
| `features` | 功能介绍区域 |
| `workflow` | 请求流程区域 |
| `terminal` | API 请求示例中的模型和提示词 |
| `links` | 控制台、注册页和文档链接 |

## 项目结构

| 文件 | 用途 |
| --- | --- |
| `index.html` | 页面结构、默认文字和 SVG 图标 |
| `styles.css` | 颜色、布局、玻璃效果、动画和响应式样式 |
| `script.js` | iframe 适配、主题同步、实例识别和页面交互 |
| `content-config.js` | 可集中修改的页面文字和链接 |
| `logo-W.svg` | 项目 Logo 素材，当前页面未直接引用 |
| `README.md` | 项目说明和部署文档 |

## 广告
**api中转站推荐**
`newapi.zhouwanx.top`

**希望给一个star**

## 许可说明

可以随意使用
