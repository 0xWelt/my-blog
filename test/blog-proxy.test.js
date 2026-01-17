// Blog Proxy Unit Tests
// Using Node.js built-in test framework

const { test, describe } = require('node:test');
const assert = require('node:assert');

// Import the actual proxy logic from source code
// Note: Since Cloudflare Workers use ES modules, we need to use a CommonJS compatible approach
// For Node.js testing, we'll use dynamic import
const { getProxyTargetUrl } = require('../blog-proxy/src/proxy-utils.js');

describe('Blog Proxy - getProxyTargetUrl', () => {
  describe('Chinese blog (default)', () => {
    test('should proxy root path to blog-zh', () => {
      const result = getProxyTargetUrl('/', '');
      assert.strictEqual(result, 'https://blog-zh.0xwelt.com/');
    });

    test('should proxy path without /en/ to blog-zh', () => {
      const result = getProxyTargetUrl('/xxx', '');
      assert.strictEqual(result, 'https://blog-zh.0xwelt.com/xxx');
    });

    test('should proxy nested path to blog-zh', () => {
      const result = getProxyTargetUrl('/2026/01/13/article', '');
      assert.strictEqual(result, 'https://blog-zh.0xwelt.com/2026/01/13/article');
    });

    test('should preserve query string for Chinese blog', () => {
      const result = getProxyTargetUrl('/xxx', '?foo=bar');
      assert.strictEqual(result, 'https://blog-zh.0xwelt.com/xxx?foo=bar');
    });

    test('should handle empty pathname', () => {
      const result = getProxyTargetUrl('', '');
      assert.strictEqual(result, 'https://blog-zh.0xwelt.com');
    });

    test('should handle paths starting with /zh/ to blog-zh', () => {
      const result = getProxyTargetUrl('/zh/xxx', '');
      assert.strictEqual(result, 'https://blog-zh.0xwelt.com/zh/xxx');
    });
  });

  describe('English blog (/en/ path)', () => {
    test('should proxy /en/ to blog-en and remove /en', () => {
      const result = getProxyTargetUrl('/en/', '');
      assert.strictEqual(result, 'https://blog-en.0xwelt.com/');
    });

    test('should proxy /en/xxx to blog-en/xxx', () => {
      const result = getProxyTargetUrl('/en/xxx', '');
      assert.strictEqual(result, 'https://blog-en.0xwelt.com/xxx');
    });

    test('should proxy /en/ nested path to blog-en', () => {
      const result = getProxyTargetUrl('/en/2026/01/13/article', '');
      assert.strictEqual(result, 'https://blog-en.0xwelt.com/2026/01/13/article');
    });

    test('should preserve query string for English blog', () => {
      const result = getProxyTargetUrl('/en/xxx', '?foo=bar&baz=qux');
      assert.strictEqual(result, 'https://blog-en.0xwelt.com/xxx?foo=bar&baz=qux');
    });

    test('should handle /en only without trailing slash as Chinese blog', () => {
      // Note: Only /en/ (with trailing slash) triggers English blog, /en alone goes to Chinese
      const result = getProxyTargetUrl('/en', '');
      assert.strictEqual(result, 'https://blog-zh.0xwelt.com/en');
    });

    test('should handle /en/ with query string', () => {
      const result = getProxyTargetUrl('/en/', '?lang=en');
      assert.strictEqual(result, 'https://blog-en.0xwelt.com/?lang=en');
    });
  });

  describe('Japanese blog (/ja/ path)', () => {
    test('should proxy /ja/ to blog-ja and remove /ja', () => {
      const result = getProxyTargetUrl('/ja/', '');
      assert.strictEqual(result, 'https://blog-ja.0xwelt.com/');
    });

    test('should proxy /ja/xxx to blog-ja/xxx', () => {
      const result = getProxyTargetUrl('/ja/xxx', '');
      assert.strictEqual(result, 'https://blog-ja.0xwelt.com/xxx');
    });

    test('should proxy /ja/ nested path to blog-ja', () => {
      const result = getProxyTargetUrl('/ja/2026/01/13/article', '');
      assert.strictEqual(result, 'https://blog-ja.0xwelt.com/2026/01/13/article');
    });

    test('should preserve query string for Japanese blog', () => {
      const result = getProxyTargetUrl('/ja/xxx', '?foo=bar&baz=qux');
      assert.strictEqual(result, 'https://blog-ja.0xwelt.com/xxx?foo=bar&baz=qux');
    });

    test('should handle /ja only without trailing slash as Chinese blog', () => {
      // Note: Only /ja/ (with trailing slash) triggers Japanese blog, /ja alone goes to Chinese
      const result = getProxyTargetUrl('/ja', '');
      assert.strictEqual(result, 'https://blog-zh.0xwelt.com/ja');
    });

    test('should handle /ja/ with query string', () => {
      const result = getProxyTargetUrl('/ja/', '?lang=ja');
      assert.strictEqual(result, 'https://blog-ja.0xwelt.com/?lang=ja');
    });
  });

  describe('Edge cases', () => {
    test('should handle multiple slashes in path', () => {
      const result = getProxyTargetUrl('//xxx', '');
      assert.strictEqual(result, 'https://blog-zh.0xwelt.com//xxx');
    });

    test('should handle /en//xxx path', () => {
      const result = getProxyTargetUrl('/en//xxx', '');
      assert.strictEqual(result, 'https://blog-en.0xwelt.com//xxx');
    });

    test('should handle paths that start with /en but not exactly /en/', () => {
      const result = getProxyTargetUrl('/enable', '');
      assert.strictEqual(result, 'https://blog-zh.0xwelt.com/enable');
    });

    test('should handle /en with trailing content immediately', () => {
      const result = getProxyTargetUrl('/enable/feature', '');
      assert.strictEqual(result, 'https://blog-zh.0xwelt.com/enable/feature');
    });

    test('should handle empty query string', () => {
      const result = getProxyTargetUrl('/xxx', '');
      assert.strictEqual(result, 'https://blog-zh.0xwelt.com/xxx');
    });

    test('should handle very long paths', () => {
      const longPath = '/a'.repeat(1000);
      const result = getProxyTargetUrl(longPath, '');
      assert.strictEqual(result, 'https://blog-zh.0xwelt.com' + longPath);
    });

    test('should handle /en/ with very long path', () => {
      const longPath = '/en/' + 'a'.repeat(1000);
      const result = getProxyTargetUrl(longPath, '');
      assert.strictEqual(result, 'https://blog-en.0xwelt.com/' + 'a'.repeat(1000));
    });
  });

  describe('URL pathname extraction scenarios', () => {
    test('should correctly extract and proxy article paths', () => {
      const articlePath = '/2026/01/13/20260113_Feature-Test/';
      const result = getProxyTargetUrl(articlePath, '');
      assert.strictEqual(result, 'https://blog-zh.0xwelt.com' + articlePath);
    });

    test('should correctly extract and proxy English article paths', () => {
      const articlePath = '/en/2026/01/13/20260113_Feature-Test/';
      const result = getProxyTargetUrl(articlePath, '');
      assert.strictEqual(result, 'https://blog-en.0xwelt.com/2026/01/13/20260113_Feature-Test/');
    });

    test('should handle category paths', () => {
      const categoryPath = '/categories/tech/';
      const result = getProxyTargetUrl(categoryPath, '');
      assert.strictEqual(result, 'https://blog-zh.0xwelt.com' + categoryPath);
    });

    test('should handle English category paths', () => {
      const categoryPath = '/en/categories/tech/';
      const result = getProxyTargetUrl(categoryPath, '');
      assert.strictEqual(result, 'https://blog-en.0xwelt.com/categories/tech/');
    });

    test('should handle tag paths', () => {
      const tagPath = '/tags/javascript/';
      const result = getProxyTargetUrl(tagPath, '');
      assert.strictEqual(result, 'https://blog-zh.0xwelt.com' + tagPath);
    });

    test('should handle English tag paths', () => {
      const tagPath = '/en/tags/javascript/';
      const result = getProxyTargetUrl(tagPath, '');
      assert.strictEqual(result, 'https://blog-en.0xwelt.com/tags/javascript/');
    });
  });
});
