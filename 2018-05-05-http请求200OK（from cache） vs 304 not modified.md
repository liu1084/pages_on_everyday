### http请求200OK（from cache） vs 304 not modified

- 200 OK (from cache)  是浏览器没有跟服务器确认，直接用了浏览器缓存；而 304 Not Modified 是浏览器和服务器多确认了一次缓存有效性，再用的缓存。

- 两者触发的时机有什么区别呢？200 OK (from cache) 是直接点击链接访问，输入网址按回车访问也能触发；而 304 Not Modified 是刷新页面时触发，或是设置了长缓存、但 Entity Tags 没有移除时触发。