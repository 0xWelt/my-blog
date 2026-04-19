# AI 规则

## 通用规则

- 直接在聊天中回复用户，不要创建额外的 markdown 文件来总结你的回复。
- 本项目支持多语言（i18n），你应该：
  - 使用用户输入时所用的语言与用户交流。
  - 写入文件内容时，使用与该文件现有语言相匹配的语言，而不一定是用户输入的语言。

## Git

- 仅在用户要求时执行 `git commit`。提交时使用英文的 conventional commit message，无论用户输入的语言是什么。
- 运行 `git rebase` 命令（例如 `git rebase --continue`）时，始终使用 `-c core.editor=true` 以避免打开交互式编辑器。例如：`git -c core.editor=true rebase --continue`。这可以防止在自动化 rebase 操作期间 IDE 被打开。

## 文章发布工作流

### 新增文章流程

当用户要求添加一篇新文章时，按以下步骤执行：

1. **先撰写中文版**
   - 在 `posts/posts-zh/` 目录下创建文章文件
   - 文件名格式：`YYYYMMDD_文章标题.md`
   - 使用标准的 Hexo front matter（title、date、categories、tags）
   - 内容使用 Markdown 格式

2. **等待用户确认**
   - 中文版写完后，向用户展示内容或告知文件路径
   - **必须等用户明确确认后，再进行下一步翻译**
   - 不要在用户确认前擅自创建其他语言版本

3. **并行翻译其他语言**
   - 用户确认后，使用 `Agent` 工具并行启动多个 subagent 来执行所有语言翻译任务
   - 设置 `run_in_background=true`，让每个翻译任务同时运行
   - 对每种目标语言，创建一个 subagent，仅告知其：
     - 将输入文件（中文版）翻译为输出文件（目标语言版）
     - 保持 Markdown 格式和 front matter 结构不变
     - 仅翻译正文内容，categories 和 tags 保留原英文关键词
   - 支持的语言目录映射：
     - `posts-en/` → 英文
     - `posts-ja/` → 日文
     - `posts-ko/` → 韩文
     - `posts-de/` → 德文
     - `posts-fr/` → 法文
     - `posts-it/` → 意大利文
     - `posts-ar/` → 阿拉伯文

### 修改文章流程

- 如果用户要求修改已有文章，优先修改中文版
- 修改完成后告知用户，等用户确认后再同步更新其他语言版本
- 同步更新时同样使用并行 subagent（`Agent` 工具 + `run_in_background=true`）翻译

### 图片处理

- 优先使用图床链接（如知乎 CDN、阿里云 OSS）
- 如果图片已存储在知乎等第三方平台，可直接使用原链接
- 避免将大图片文件提交到 Git 仓库

### Tags 规范

- **所有语言的 tags 统一使用英文**，不要翻译为各语言版本
- 例如：中文原文用 `决策`，所有语言版本也统一用 `decision`
- 这样可以保持跨语言版本的一致性，也便于后续做 tag 聚合和分类
