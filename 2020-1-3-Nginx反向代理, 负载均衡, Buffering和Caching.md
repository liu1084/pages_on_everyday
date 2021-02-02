### Nginx反向代理, 负载均衡, Buffering和Caching

#### 为什么要让Nginx代理?

- 处理高并发, 扩展基础设施. Nginx可以同时并发处理很多客户端连接, 并将这些连接分发到真实的服务器端进一步处理请求.
- 提高上游服务器的安全性.

#### 基本HTTP反向代理

- 使用`proxy_pass`指令: 

  ```nginx
  # server context
  
  location /match/here {
      proxy_pass http://example.com;
  }
  ```

  `proxy_pass`主要用在`location`上下文中, 或者location的`if`块, 或者`limit_except`上下文中.

  当请求匹配某个location的时候, 如果location中有`proxy_pass`指令, 那么这个请求将会被指令中的URL进行处理.

  