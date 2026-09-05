# User Instruction Memory

This file records user instructions, preferences, and teachings for reference in future interactions.

## Format

### User Instruction Entry
User instruction entries should follow this format:

[User Instruction Summary]
- Date: [YYYY-MM-DD]
- Context: [Mentioned scenario or time]
- Instructions:
  - [Content of user teaching or instruction, described line by line]

### Project Knowledge Entry
Entries discovered by the Agent during task execution should follow this format:

[Project Knowledge Summary]
- Date: [YYYY-MM-DD]
- Context: Discovered by Agent while performing [specific task description]
- Category: [Operations & Deployment|Build Methods|Testing Methods|Troubleshooting & Debugging|Workflow & Collaboration|Environment Configuration]
- Instructions:
  - [Specific knowledge points, described line by line]

## Deduplication Strategy
- Before adding a new entry, check for similar or identical instructions.
- If a duplicate is found, skip the new entry or merge it with the existing one.
- When merging, update the context or date information.
- This helps avoid redundant entries and keeps the memory file tidy.

## Entries

[Project Knowledge Summary]
- Date: 2026-09-05
- Context: 用户提供"糖糕中转站主页文案.md"方案文件时，无法通过界面上传文件到工作区
- Category: Workflow & Collaboration
- Instructions:
  - 用户没有向工作区上传文件的权限，素材（文案、图片等方案文件）放在其 GitHub 仓库 ego0911/newapi-homepage 中，需要用 raw.githubusercontent.com 直接拉取（raw 接口不受 GitHub API 限流影响）
  - 站点品牌已从 WANAPI 更名为"糖糕的小屋"（TangGao API），真实示例域名 tanggao.0931116.xyz；页面文案以仓库中的《糖糕中转站主页文案.md》方案为准

[User Instruction Summary]
- Date: 2026-09-05
- Context: 用户看过"日常便签生活版"预览后明确否定并要求回滚
- Instructions:
  - "清爽自然版"与"日常便签生活版"两轮改动已被用户否定并回滚；页面当前停在最后提交 ebbc7ba（温馨版：糖糕在幕后为你做的小事 / 小桔灯等四卡 / whisper.json 秘密通讯机 / 暖光常亮等 stats）
  - 生活版完整改动保存在 git stash（daily-life-edition-rejected），用户要求时可恢复
  - 用户对文案方向的验收很严格：大改版面前先改 config + 预览给用户确认，用户点头后再提交；未经确认的风格方向默认不算通过

[Project Knowledge Summary]
- Date: 2026-09-05
- Context: 两次删除 stats 区后页面大面积样式失效（状态牌散架、hero 按钮只剩图标），排查根因后用安全方式重做成功
- Category: Troubleshooting & Debugging
- Instructions:
  - 事故机制：用"拼接远处多个区块"的 oldString 删除 CSS 大段时，编辑工具会做模糊匹配并改坏大括号配对，CSS 从损坏点整段失效，牵连状态牌和 hero 按钮等无关区域
  - 安全删除流程：oldString 必须来自刚读取的文件实际内容并用相邻规则绑定上下文；每删一处立即用 python 统计 `{`/`}` 深度验证为 0
  - 版本锚点：v1.0=温馨版基线（03a7e64），v1.1=删除 stats 四项（b1ea98c）；用户说"回滚1.0/1.1"即 `git checkout v1.0 -- .` 或 `git checkout v1.1 -- .`
  - "两个指向控制台和文档的图标"= hero 两个按钮（推开小门→控制台、小窝手册→文档）失去 CSS 后只剩 SVG 图标的裸奔形态，见到此现象优先怀疑 CSS 大括号损坏
