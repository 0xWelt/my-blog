// Language Switcher Script
// Import core logic from shared module (same logic used in tests)
import { getLanguageSwitchedUrl } from './language-switcher-utils.js';

// 切换语言 - 暴露为全局函数，供菜单直接调用
window.switchLanguage = function(targetLang) {
  console.log('switchLanguage called with:', targetLang);
  const currentPath = window.location.pathname;
  
  // 使用核心逻辑获取新的 URL（与测试使用相同的逻辑）
  const newUrl = getLanguageSwitchedUrl(currentPath, targetLang);
  
  console.log('Switching to', targetLang + ', redirecting to:', newUrl);
  window.location.href = newUrl;
};

// 确保函数已加载
console.log('Language switcher script loaded, switchLanguage available:', typeof window.switchLanguage);
