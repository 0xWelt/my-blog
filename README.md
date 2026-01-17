## my-blog

- blog-proxy:
  - `blog.0xwelt.com/xxx` -> `blog-zh.0xwelt.com/xxx`
  - `blog.0xwelt.com/{lang}/xxx` -> `blog-{lang}.0xwelt.com/xxx`
- links:
  - root set to `/`, therefore will all do relative links
- language switcher:
  - Fixed redirect to `blog.0xwelt.com` (not relative paths)
  - use `javascript:switchLanguage('zh')`: `blog.0xwelt.com/{optional lang}/xxx` switch to `blog.0xwelt.com/xxx`
  - use `javascript:switchLanguage('lang')`: `blog.0xwelt.com/{optional lang}/xxx` switch to `blog.0xwelt.com/lang/xxx`
  - tests: run `npm test` to run unit tests (27 test cases covering all path switching scenarios)
