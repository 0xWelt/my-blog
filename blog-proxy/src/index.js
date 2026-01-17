import { getProxyTargetUrl } from './proxy-utils.js';

export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    // 使用核心逻辑获取目标 URL
    const targetUrl = getProxyTargetUrl(url.pathname, url.search);

    // 发起内部代理请求
    try {
      const response = await fetch(targetUrl, {
        method: request.method,
        headers: request.headers,
        body: request.body
      });
      
      // 创建新的响应头，移除可能引起问题的头部
      const newHeaders = new Headers(response.headers);
      
      // 返回响应（浏览器地址栏保持不变）
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders
      });
    } catch (error) {
      return new Response(`Upstream error: ${error.message}`, { status: 502 });
    }
  }
}
