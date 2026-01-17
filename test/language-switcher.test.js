// Language Switcher Unit Tests
// Using Node.js built-in test framework

const { test, describe } = require('node:test');
const assert = require('node:assert');

// Import the actual language switcher logic from source code
const { getLanguageSwitchedUrl } = require('../source/js/language-switcher-utils.js');

describe('Language Switcher - getLanguageSwitchedUrl', () => {
  describe('Switch to Chinese (zh)', () => {
    test('should remove /en/ prefix from path', () => {
      const result = getLanguageSwitchedUrl('/en/xxx', 'zh');
      assert.strictEqual(result, 'https://blog.0xwelt.com/xxx');
    });

    test('should remove /zh/ prefix from path', () => {
      const result = getLanguageSwitchedUrl('/zh/xxx', 'zh');
      assert.strictEqual(result, 'https://blog.0xwelt.com/xxx');
    });

    test('should keep path without language prefix unchanged', () => {
      const result = getLanguageSwitchedUrl('/xxx', 'zh');
      assert.strictEqual(result, 'https://blog.0xwelt.com/xxx');
    });

    test('should handle root path with /en/', () => {
      const result = getLanguageSwitchedUrl('/en/', 'zh');
      assert.strictEqual(result, 'https://blog.0xwelt.com/');
    });

    test('should handle root path with /zh/', () => {
      const result = getLanguageSwitchedUrl('/zh/', 'zh');
      assert.strictEqual(result, 'https://blog.0xwelt.com/');
    });

    test('should handle root path /', () => {
      const result = getLanguageSwitchedUrl('/', 'zh');
      assert.strictEqual(result, 'https://blog.0xwelt.com/');
    });

    test('should handle /en without trailing slash', () => {
      const result = getLanguageSwitchedUrl('/en', 'zh');
      assert.strictEqual(result, 'https://blog.0xwelt.com/');
    });

    test('should handle /zh without trailing slash', () => {
      const result = getLanguageSwitchedUrl('/zh', 'zh');
      assert.strictEqual(result, 'https://blog.0xwelt.com/');
    });

    test('should handle nested paths with /en/', () => {
      const result = getLanguageSwitchedUrl('/en/posts/2024/article', 'zh');
      assert.strictEqual(result, 'https://blog.0xwelt.com/posts/2024/article');
    });

    test('should handle nested paths with /zh/', () => {
      const result = getLanguageSwitchedUrl('/zh/posts/2024/article', 'zh');
      assert.strictEqual(result, 'https://blog.0xwelt.com/posts/2024/article');
    });

    test('should handle paths with query parameters', () => {
      // Note: query parameters are not in pathname, but testing the path part
      const result = getLanguageSwitchedUrl('/en/article', 'zh');
      assert.strictEqual(result, 'https://blog.0xwelt.com/article');
    });
  });

  describe('Switch to other languages (e.g., en)', () => {
    test('should replace /zh/ prefix with /en/', () => {
      const result = getLanguageSwitchedUrl('/zh/xxx', 'en');
      assert.strictEqual(result, 'https://blog.0xwelt.com/en/xxx');
    });

    test('should keep /en/ prefix when switching to en', () => {
      const result = getLanguageSwitchedUrl('/en/xxx', 'en');
      assert.strictEqual(result, 'https://blog.0xwelt.com/en/xxx');
    });

    test('should add /en/ prefix to path without language prefix', () => {
      const result = getLanguageSwitchedUrl('/xxx', 'en');
      assert.strictEqual(result, 'https://blog.0xwelt.com/en/xxx');
    });

    test('should handle root path / and add /en/', () => {
      const result = getLanguageSwitchedUrl('/', 'en');
      assert.strictEqual(result, 'https://blog.0xwelt.com/en/');
    });

    test('should handle /en without trailing slash', () => {
      const result = getLanguageSwitchedUrl('/en', 'en');
      assert.strictEqual(result, 'https://blog.0xwelt.com/en/');
    });

    test('should handle /zh without trailing slash', () => {
      const result = getLanguageSwitchedUrl('/zh', 'en');
      assert.strictEqual(result, 'https://blog.0xwelt.com/en/');
    });

    test('should handle nested paths without language prefix', () => {
      const result = getLanguageSwitchedUrl('/posts/2024/article', 'en');
      assert.strictEqual(result, 'https://blog.0xwelt.com/en/posts/2024/article');
    });

    test('should handle nested paths with /zh/ prefix', () => {
      const result = getLanguageSwitchedUrl('/zh/posts/2024/article', 'en');
      assert.strictEqual(result, 'https://blog.0xwelt.com/en/posts/2024/article');
    });

    test('should handle nested paths with /en/ prefix', () => {
      const result = getLanguageSwitchedUrl('/en/posts/2024/article', 'en');
      assert.strictEqual(result, 'https://blog.0xwelt.com/en/posts/2024/article');
    });

    test('should handle switching to other language codes (e.g., fr)', () => {
      const result = getLanguageSwitchedUrl('/xxx', 'fr');
      assert.strictEqual(result, 'https://blog.0xwelt.com/fr/xxx');
    });

    test('should handle switching from /en/ to other language (e.g., fr)', () => {
      const result = getLanguageSwitchedUrl('/en/xxx', 'fr');
      assert.strictEqual(result, 'https://blog.0xwelt.com/fr/xxx');
    });

    test('should handle switching from /zh/ to other language (e.g., fr)', () => {
      const result = getLanguageSwitchedUrl('/zh/xxx', 'fr');
      assert.strictEqual(result, 'https://blog.0xwelt.com/fr/xxx');
    });
  });

  describe('Edge cases', () => {
    test('should handle empty path', () => {
      const result = getLanguageSwitchedUrl('', 'zh');
      assert.strictEqual(result, 'https://blog.0xwelt.com/');
    });

    test('should handle empty path when switching to en', () => {
      const result = getLanguageSwitchedUrl('', 'en');
      assert.strictEqual(result, 'https://blog.0xwelt.com/en/');
    });

    test('should handle paths with multiple slashes', () => {
      const result = getLanguageSwitchedUrl('/en//xxx', 'zh');
      assert.strictEqual(result, 'https://blog.0xwelt.com//xxx');
    });

    test('should handle very long paths', () => {
      const longPath = '/en/' + 'a'.repeat(1000);
      const result = getLanguageSwitchedUrl(longPath, 'zh');
      assert.strictEqual(result, 'https://blog.0xwelt.com/' + 'a'.repeat(1000));
    });
  });
});
