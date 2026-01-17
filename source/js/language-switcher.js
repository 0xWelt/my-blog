// Language Switcher Script
(function() {
  'use strict';
  
  // 切换语言 - 暴露为全局函数，供菜单直接调用
  window.switchLanguage = function(targetLang) {
    console.log('switchLanguage called with:', targetLang);
    const currentPath = window.location.pathname;
    let newPath;

    if (targetLang === 'zh') {
      // 切换到中文
      if (currentPath === '/en' || currentPath.startsWith('/en/')) {
        // 当前在英文页面，需要移除 /en 前缀（3个字符）
        // /en -> /, /en/ -> /, /en/something -> /something
        newPath = currentPath.substring(3);
        window.location.href = newPath || '/';
      } else {
        console.log('Already on the Chinese page.');
      }
    } else if (targetLang === 'en') {
      // 切换到英文
      if (currentPath === '/en' || currentPath.startsWith('/en/')) {
        // 已经在英文页面
        console.log('Already on the English page.');
      } else {
        // 当前在中文页面，需要添加 /en/ 前缀
        if (currentPath === '/') {
          newPath = '/en/';
        } else {
          newPath = '/en' + currentPath;
        }
        window.location.href = newPath;
      }
    }
  };
  
  // 确保函数已加载
  console.log('Language switcher script loaded, switchLanguage available:', typeof window.switchLanguage);
})();
