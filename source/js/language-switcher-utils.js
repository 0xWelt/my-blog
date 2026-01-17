/**
 * Language Switcher Core Logic
 * Handles path transformation for language switching
 */

// 支持的语言代码列表（用于匹配和移除语言前缀）
const supportedLanguageCodes = ['en', 'ja', 'zh'];

// 基础 URL
const baseUrl = 'https://blog.0xwelt.com';

/**
 * Get the new path after switching language
 * @param {string} currentPath - Current pathname (e.g., '/en/xxx', '/xxx', '/')
 * @param {string} targetLang - Target language code ('zh' or other language code)
 * @returns {string} - New path after language switch
 */
export function getLanguageSwitchedPath(currentPath, targetLang) {
  let newPath;

  if (targetLang === 'zh') {
    // 切换到中文：从 blog.0xwelt.com/{lang}/xxx 切换到 blog.0xwelt.com/xxx
    // 移除语言前缀（如 /en/, /ja/, /zh/ 等）
    const langPattern = `/(${supportedLanguageCodes.join('|')})/`;
    const langPatternEnd = `/(${supportedLanguageCodes.join('|')})$`;
    newPath = currentPath.replace(new RegExp(`^${langPattern}`), '/').replace(new RegExp(langPatternEnd), '/');
    if (newPath === '') {
      newPath = '/';
    }
  } else {
    // 切换到其他语言：从 blog.0xwelt.com/{optional lang}/xxx 切换到 blog.0xwelt.com/{lang}/xxx
    // 先移除现有的语言前缀
    const langPattern = `/(${supportedLanguageCodes.join('|')})/`;
    const langPatternEnd = `/(${supportedLanguageCodes.join('|')})$`;
    let pathWithoutLang = currentPath.replace(new RegExp(`^${langPattern}`), '/').replace(new RegExp(langPatternEnd), '/');
    if (pathWithoutLang === '') {
      pathWithoutLang = '/';
    }
    // 添加目标语言前缀
    if (pathWithoutLang === '/') {
      newPath = '/' + targetLang + '/';
    } else {
      newPath = '/' + targetLang + pathWithoutLang;
    }
  }

  return newPath;
}

/**
 * Get the full URL after switching language
 * @param {string} currentPath - Current pathname (e.g., '/en/xxx', '/xxx', '/')
 * @param {string} targetLang - Target language code ('zh' or other language code)
 * @returns {string} - Full URL to redirect to
 */
export function getLanguageSwitchedUrl(currentPath, targetLang) {
  const newPath = getLanguageSwitchedPath(currentPath, targetLang);
  return baseUrl + newPath;
}

// Also export as CommonJS for Node.js tests
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getLanguageSwitchedPath, getLanguageSwitchedUrl };
}
