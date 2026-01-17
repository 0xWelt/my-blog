// Language Switcher Script
(function() {
  'use strict';
  
  // 切换语言 - 暴露为全局函数，供菜单直接调用
  window.switchLanguage = function(targetLang) {
    console.log('switchLanguage called with:', targetLang);
    const currentPath = window.location.pathname;
    const baseUrl = 'https://blog.0xwelt.com';
    let newPath;

    if (targetLang === 'zh') {
      // 切换到中文：从 blog.0xwelt.com/{lang}/xxx 切换到 blog.0xwelt.com/xxx
      // 移除语言前缀（如 /en/, /zh/ 等）
      newPath = currentPath.replace(/^\/(en|zh)\//, '/').replace(/^\/(en|zh)$/, '/');
      if (newPath === '') {
        newPath = '/';
      }
      console.log('Switching to Chinese, redirecting to:', baseUrl + newPath);
      window.location.href = baseUrl + newPath;
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
      console.log('Switching to', targetLang + ', redirecting to:', baseUrl + newPath);
      window.location.href = baseUrl + newPath;
    }
  };
  
  // 确保函数已加载
  console.log('Language switcher script loaded, switchLanguage available:', typeof window.switchLanguage);
})();
