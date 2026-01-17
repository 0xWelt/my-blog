// Blog Proxy Unit Tests
// Using Node.js built-in test framework

const { test, describe } = require('node:test');
const assert = require('node:assert');

/**
 * Core proxy logic extracted from blog-proxy/src/index.js for testing
 * @param {string} requestUrl - Full request URL (e.g., 'https://blog.0xwelt.com/xxx')
 * @param {string} pathname - Request pathname (e.g., '/xxx', '/en/xxx')
 * @param {string} search - Query string (e.g., '?foo=bar')
 * @returns {string} - Target URL to proxy to
 */
function getProxyTargetUrl(requestUrl, pathname, search = '') {
  let targetUrl = null;

  // 情况1：/en/ 路径 → 英文博客
  if (pathname.startsWith('/en/')) {
    const newPath = pathname.slice(3); // 移除 /en
    targetUrl = `https://blog-en.0xwelt.com${newPath}${search}`;
  } 
  // 情况2：其他路径（包括根路径/）→ 默认中文博客
  else {
    targetUrl = `https://blog-zh.0xwelt.com${pathname}${search}`;
  }

  return targetUrl;
}

describe('Blog Proxy - getProxyTargetUrl', () => {
  describe('Chinese blog (default)', () => {
    test('should proxy root path to blog-zh', () => {
      const result = getProxyTargetUrl('https://blog.0xwelt.com/', '/', '');
      assert.strictEqual(result, 'https://blog-zh.0xwelt.com/');
    });

    test('should proxy path without /en/ to blog-zh', () => {
      const result = getProxyTargetUrl('https://blog.0xwelt.com/xxx', '/xxx', '');
      assert.strictEqual(result, 'https://blog-zh.0xwelt.com/xxx');
    });

    test('should proxy nested path to blog-zh', () => {
      const result = getProxyTargetUrl('https://blog.0xwelt.com/2026/01/13/article', '/2026/01/13/article', '');
      assert.strictEqual(result, 'https://blog-zh.0xwelt.com/2026/01/13/article');
    });

    test('should preserve query string for Chinese blog', () => {
      const result = getProxyTargetUrl('https://blog.0xwelt.com/xxx', '/xxx', '?foo=bar');
      assert.strictEqual(result, 'https://blog-zh.0xwelt.com/xxx?foo=bar');
    });

    test('should handle empty pathname', () => {
      const result = getProxyTargetUrl('https://blog.0xwelt.com/', '', '');
      assert.strictEqual(result, 'https://blog-zh.0xwelt.com');
    });

    test('should handle paths starting with /zh/ to blog-zh', () => {
      const result = getProxyTargetUrl('https://blog.0xwelt.com/zh/xxx', '/zh/xxx', '');
      assert.strictEqual(result, 'https://blog-zh.0xwelt.com/zh/xxx');
    });
  });

  describe('English blog (/en/ path)', () => {
    test('should proxy /en/ to blog-en and remove /en', () => {
      const result = getProxyTargetUrl('https://blog.0xwelt.com/en/', '/en/', '');
      assert.strictEqual(result, 'https://blog-en.0xwelt.com/');
    });

    test('should proxy /en/xxx to blog-en/xxx', () => {
      const result = getProxyTargetUrl('https://blog.0xwelt.com/en/xxx', '/en/xxx', '');
      assert.strictEqual(result, 'https://blog-en.0xwelt.com/xxx');
    });

    test('should proxy /en/ nested path to blog-en', () => {
      const result = getProxyTargetUrl('https://blog.0xwelt.com/en/2026/01/13/article', '/en/2026/01/13/article', '');
      assert.strictEqual(result, 'https://blog-en.0xwelt.com/2026/01/13/article');
    });

    test('should preserve query string for English blog', () => {
      const result = getProxyTargetUrl('https://blog.0xwelt.com/en/xxx', '/en/xxx', '?foo=bar&baz=qux');
      assert.strictEqual(result, 'https://blog-en.0xwelt.com/xxx?foo=bar&baz=qux');
    });

    test('should handle /en only without trailing slash as Chinese blog', () => {
      // Note: Only /en/ (with trailing slash) triggers English blog, /en alone goes to Chinese
      const result = getProxyTargetUrl('https://blog.0xwelt.com/en', '/en', '');
      assert.strictEqual(result, 'https://blog-zh.0xwelt.com/en');
    });

    test('should handle /en/ with query string', () => {
      const result = getProxyTargetUrl('https://blog.0xwelt.com/en/', '/en/', '?lang=en');
      assert.strictEqual(result, 'https://blog-en.0xwelt.com/?lang=en');
    });
  });

  describe('Edge cases', () => {
    test('should handle multiple slashes in path', () => {
      const result = getProxyTargetUrl('https://blog.0xwelt.com//xxx', '//xxx', '');
      assert.strictEqual(result, 'https://blog-zh.0xwelt.com//xxx');
    });

    test('should handle /en//xxx path', () => {
      const result = getProxyTargetUrl('https://blog.0xwelt.com/en//xxx', '/en//xxx', '');
      assert.strictEqual(result, 'https://blog-en.0xwelt.com//xxx');
    });

    test('should handle paths that start with /en but not exactly /en/', () => {
      const result = getProxyTargetUrl('https://blog.0xwelt.com/enable', '/enable', '');
      assert.strictEqual(result, 'https://blog-zh.0xwelt.com/enable');
    });

    test('should handle /en with trailing content immediately', () => {
      const result = getProxyTargetUrl('https://blog.0xwelt.com/enable/feature', '/enable/feature', '');
      assert.strictEqual(result, 'https://blog-zh.0xwelt.com/enable/feature');
    });

    test('should handle empty query string', () => {
      const result = getProxyTargetUrl('https://blog.0xwelt.com/xxx', '/xxx', '');
      assert.strictEqual(result, 'https://blog-zh.0xwelt.com/xxx');
    });

    test('should handle very long paths', () => {
      const longPath = '/a'.repeat(1000);
      const result = getProxyTargetUrl('https://blog.0xwelt.com' + longPath, longPath, '');
      assert.strictEqual(result, 'https://blog-zh.0xwelt.com' + longPath);
    });

    test('should handle /en/ with very long path', () => {
      const longPath = '/en/' + 'a'.repeat(1000);
      const result = getProxyTargetUrl('https://blog.0xwelt.com' + longPath, longPath, '');
      assert.strictEqual(result, 'https://blog-en.0xwelt.com/' + 'a'.repeat(1000));
    });
  });

  describe('URL pathname extraction scenarios', () => {
    test('should correctly extract and proxy article paths', () => {
      const articlePath = '/2026/01/13/20260113_Feature-Test/';
      const result = getProxyTargetUrl('https://blog.0xwelt.com' + articlePath, articlePath, '');
      assert.strictEqual(result, 'https://blog-zh.0xwelt.com' + articlePath);
    });

    test('should correctly extract and proxy English article paths', () => {
      const articlePath = '/en/2026/01/13/20260113_Feature-Test/';
      const result = getProxyTargetUrl('https://blog.0xwelt.com' + articlePath, articlePath, '');
      assert.strictEqual(result, 'https://blog-en.0xwelt.com/2026/01/13/20260113_Feature-Test/');
    });

    test('should handle category paths', () => {
      const categoryPath = '/categories/tech/';
      const result = getProxyTargetUrl('https://blog.0xwelt.com' + categoryPath, categoryPath, '');
      assert.strictEqual(result, 'https://blog-zh.0xwelt.com' + categoryPath);
    });

    test('should handle English category paths', () => {
      const categoryPath = '/en/categories/tech/';
      const result = getProxyTargetUrl('https://blog.0xwelt.com' + categoryPath, categoryPath, '');
      assert.strictEqual(result, 'https://blog-en.0xwelt.com/categories/tech/');
    });

    test('should handle tag paths', () => {
      const tagPath = '/tags/javascript/';
      const result = getProxyTargetUrl('https://blog.0xwelt.com' + tagPath, tagPath, '');
      assert.strictEqual(result, 'https://blog-zh.0xwelt.com' + tagPath);
    });

    test('should handle English tag paths', () => {
      const tagPath = '/en/tags/javascript/';
      const result = getProxyTargetUrl('https://blog.0xwelt.com' + tagPath, tagPath, '');
      assert.strictEqual(result, 'https://blog-en.0xwelt.com/tags/javascript/');
    });
  });
});
