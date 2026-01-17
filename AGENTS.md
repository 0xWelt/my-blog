# AI Rules

## General

- Response directly in the chat. Do not create extra markdown files to conclude your response.
- The project has i18n support, you should:
  - Communicate with the user in the language they use for input.
  - Write file contents in the language that matches the file's existing language, not necessarily the user's input language.

## Git

- Only make commits when the user asks you to do so. When making commits, use conventional commit messages in English, regardless of the user's input language.
- When running git rebase commands (e.g., `git rebase --continue`), always use `-c core.editor=true` to avoid opening an interactive editor. For example: `git -c core.editor=true rebase --continue`. This prevents IDE from opening during automated rebase operations.
