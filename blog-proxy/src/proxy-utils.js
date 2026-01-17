/**
 * Blog Proxy Core Logic
 * Handles URL routing based on language prefixes
 */

// 支持的语言列表：语言代码 -> 目标域名
const supportedLanguages = {
  'en': 'blog-en.0xwelt.com',
  'ja': 'blog-ja.0xwelt.com',
  'ko': 'blog-ko.0xwelt.com',
  'ar': 'blog-ar.0xwelt.com',
  'it': 'blog-it.0xwelt.com',
  'de': 'blog-de.0xwelt.com',
  'fr': 'blog-fr.0xwelt.com',
};

// 默认语言（中文）
const defaultDomain = 'blog-zh.0xwelt.com';

/**
 * Get proxy target URL based on pathname and search params
 * @param {string} pathname - Request pathname (e.g., '/xxx', '/en/xxx')
 * @param {string} search - Query string (e.g., '?foo=bar')
 * @returns {string} - Target URL to proxy to
 */
export function getProxyTargetUrl(pathname, search = '') {
  let matchedLang = null;
  let targetUrl = null;

  // 遍历支持的语言，检查路径是否以语言前缀开头
  for (const [lang, domain] of Object.entries(supportedLanguages)) {
    const langPrefix = `/${lang}/`;
    if (pathname.startsWith(langPrefix)) {
      matchedLang = lang;
      const newPath = pathname.slice(langPrefix.length - 1); // 移除 /lang，保留 /
      targetUrl = `https://${domain}${newPath}${search}`;
      break;
    }
  }

  // 如果没有匹配到任何语言，使用默认语言（中文）
  if (!matchedLang) {
    targetUrl = `https://${defaultDomain}${pathname}${search}`;
  }

  return targetUrl;
}

// Also export as CommonJS for Node.js tests
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getProxyTargetUrl };
}
