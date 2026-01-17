export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    let targetUrl = null;

    // 情况1：/en/ 路径 → 英文博客
    if (url.pathname.startsWith('/en/')) {
      const newPath = url.pathname.slice(3); // 移除 /en
      targetUrl = `https://blog-en.0xwelt.com${newPath}${url.search}`;
    } 
    // 情况2：其他路径（包括根路径/）→ 默认中文博客
    else {
      targetUrl = `https://blog-zh.0xwelt.com${url.pathname}${url.search}`;
    }

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
