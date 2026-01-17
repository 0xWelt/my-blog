// Language Switcher Unit Tests
// Using Node.js built-in test framework

const { test, describe } = require('node:test');
const assert = require('node:assert');

/**
 * Core logic extracted from language-switcher.js for testing
 * @param {string} currentPath - Current pathname (e.g., '/en/xxx', '/xxx', '/')
 * @param {string} targetLang - Target language ('zh' or other language code)
 * @returns {string} - Full URL to redirect to
 */
function switchLanguagePath(currentPath, targetLang) {
  const baseUrl = 'https://blog.0xwelt.com';
  let newPath;

  if (targetLang === 'zh') {
    // 切换到中文：从 blog.0xwelt.com/{lang}/xxx 切换到 blog.0xwelt.com/xxx
    // 移除语言前缀（如 /en/, /zh/ 等）
    newPath = currentPath.replace(/^\/(en|zh)\//, '/').replace(/^\/(en|zh)$/, '/');
    if (newPath === '') {
      newPath = '/';
    }
    return baseUrl + newPath;
  } else {
    // 切换到其他语言：从 blog.0xwelt.com/{optional lang}/xxx 切换到 blog.0xwelt.com/{lang}/xxx
    // 先移除现有的语言前缀
    let pathWithoutLang = currentPath.replace(/^\/(en|zh)\//, '/').replace(/^\/(en|zh)$/, '/');
    if (pathWithoutLang === '') {
      pathWithoutLang = '/';
    }
    // 添加目标语言前缀
    if (pathWithoutLang === '/') {
      newPath = '/' + targetLang + '/';
    } else {
      newPath = '/' + targetLang + pathWithoutLang;
    }
    return baseUrl + newPath;
  }
}

describe('Language Switcher - switchLanguagePath', () => {
  describe('Switch to Chinese (zh)', () => {
    test('should remove /en/ prefix from path', () => {
      const result = switchLanguagePath('/en/xxx', 'zh');
      assert.strictEqual(result, 'https://blog.0xwelt.com/xxx');
    });

    test('should remove /zh/ prefix from path', () => {
      const result = switchLanguagePath('/zh/xxx', 'zh');
      assert.strictEqual(result, 'https://blog.0xwelt.com/xxx');
    });

    test('should keep path without language prefix unchanged', () => {
      const result = switchLanguagePath('/xxx', 'zh');
      assert.strictEqual(result, 'https://blog.0xwelt.com/xxx');
    });

    test('should handle root path with /en/', () => {
      const result = switchLanguagePath('/en/', 'zh');
      assert.strictEqual(result, 'https://blog.0xwelt.com/');
    });

    test('should handle root path with /zh/', () => {
      const result = switchLanguagePath('/zh/', 'zh');
      assert.strictEqual(result, 'https://blog.0xwelt.com/');
    });

    test('should handle root path /', () => {
      const result = switchLanguagePath('/', 'zh');
      assert.strictEqual(result, 'https://blog.0xwelt.com/');
    });

    test('should handle /en without trailing slash', () => {
      const result = switchLanguagePath('/en', 'zh');
      assert.strictEqual(result, 'https://blog.0xwelt.com/');
    });

    test('should handle /zh without trailing slash', () => {
      const result = switchLanguagePath('/zh', 'zh');
      assert.strictEqual(result, 'https://blog.0xwelt.com/');
    });

    test('should handle nested paths with /en/', () => {
      const result = switchLanguagePath('/en/posts/2024/article', 'zh');
      assert.strictEqual(result, 'https://blog.0xwelt.com/posts/2024/article');
    });

    test('should handle nested paths with /zh/', () => {
      const result = switchLanguagePath('/zh/posts/2024/article', 'zh');
      assert.strictEqual(result, 'https://blog.0xwelt.com/posts/2024/article');
    });

    test('should handle paths with query parameters', () => {
      // Note: query parameters are not in pathname, but testing the path part
      const result = switchLanguagePath('/en/article', 'zh');
      assert.strictEqual(result, 'https://blog.0xwelt.com/article');
    });
  });

  describe('Switch to other languages (e.g., en)', () => {
    test('should replace /zh/ prefix with /en/', () => {
      const result = switchLanguagePath('/zh/xxx', 'en');
      assert.strictEqual(result, 'https://blog.0xwelt.com/en/xxx');
    });

    test('should keep /en/ prefix when switching to en', () => {
      const result = switchLanguagePath('/en/xxx', 'en');
      assert.strictEqual(result, 'https://blog.0xwelt.com/en/xxx');
    });

    test('should add /en/ prefix to path without language prefix', () => {
      const result = switchLanguagePath('/xxx', 'en');
      assert.strictEqual(result, 'https://blog.0xwelt.com/en/xxx');
    });

    test('should handle root path / and add /en/', () => {
      const result = switchLanguagePath('/', 'en');
      assert.strictEqual(result, 'https://blog.0xwelt.com/en/');
    });

    test('should handle /en without trailing slash', () => {
      const result = switchLanguagePath('/en', 'en');
      assert.strictEqual(result, 'https://blog.0xwelt.com/en/');
    });

    test('should handle /zh without trailing slash', () => {
      const result = switchLanguagePath('/zh', 'en');
      assert.strictEqual(result, 'https://blog.0xwelt.com/en/');
    });

    test('should handle nested paths without language prefix', () => {
      const result = switchLanguagePath('/posts/2024/article', 'en');
      assert.strictEqual(result, 'https://blog.0xwelt.com/en/posts/2024/article');
    });

    test('should handle nested paths with /zh/ prefix', () => {
      const result = switchLanguagePath('/zh/posts/2024/article', 'en');
      assert.strictEqual(result, 'https://blog.0xwelt.com/en/posts/2024/article');
    });

    test('should handle nested paths with /en/ prefix', () => {
      const result = switchLanguagePath('/en/posts/2024/article', 'en');
      assert.strictEqual(result, 'https://blog.0xwelt.com/en/posts/2024/article');
    });

    test('should handle switching to other language codes (e.g., fr)', () => {
      const result = switchLanguagePath('/xxx', 'fr');
      assert.strictEqual(result, 'https://blog.0xwelt.com/fr/xxx');
    });

    test('should handle switching from /en/ to other language (e.g., fr)', () => {
      const result = switchLanguagePath('/en/xxx', 'fr');
      assert.strictEqual(result, 'https://blog.0xwelt.com/fr/xxx');
    });

    test('should handle switching from /zh/ to other language (e.g., fr)', () => {
      const result = switchLanguagePath('/zh/xxx', 'fr');
      assert.strictEqual(result, 'https://blog.0xwelt.com/fr/xxx');
    });
  });

  describe('Edge cases', () => {
    test('should handle empty path', () => {
      const result = switchLanguagePath('', 'zh');
      assert.strictEqual(result, 'https://blog.0xwelt.com/');
    });

    test('should handle empty path when switching to en', () => {
      const result = switchLanguagePath('', 'en');
      assert.strictEqual(result, 'https://blog.0xwelt.com/en/');
    });

    test('should handle paths with multiple slashes', () => {
      const result = switchLanguagePath('/en//xxx', 'zh');
      assert.strictEqual(result, 'https://blog.0xwelt.com//xxx');
    });

    test('should handle very long paths', () => {
      const longPath = '/en/' + 'a'.repeat(1000);
      const result = switchLanguagePath(longPath, 'zh');
      assert.strictEqual(result, 'https://blog.0xwelt.com/' + 'a'.repeat(1000));
    });
  });
});
