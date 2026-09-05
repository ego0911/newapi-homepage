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
