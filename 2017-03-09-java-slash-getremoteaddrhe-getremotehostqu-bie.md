---
layout: post
title: "java/getRemoteAddr和getRemoteHost区别"
date: 2017-03-09 09:31:55 +0800
comments: true
categories: 
---


System.out.println("request.getRemoteAddr():    "    +    request.getRemoteAddr());        
System.out.println("request.getRemoteHost():    "    +    request.getRemoteHost());  
  
得到的结果相同（局域网内试验的结果）。        
那么getRemoteAddr()和getRemoteHost()到底有什么区别？        
我的目的就是要得到发出request的机器的IP地址，到底用以上哪个方法？    
---------------------------------------------------------------    
   
前一个是获得客户端的ip地址    
后一个是获得客户端的主机名    
在JSP里，获取客户端的IP地址的方法是：request.getRemoteAddr()，这种方法在大部分情况下都是有效的。但是在通过了Apache,Squid等反向代理软件就不能获取到客户端的真实IP地址了。  
如果使用了反向代理软件，将http://192.168.1.110:2046/ 的URL反向代理为http://www.xxx.com/ 的URL时，用request.getRemoteAddr()方法获取的IP地址是：127.0.0.1　或　192.168.1.110，而并不是客户端的真实ＩＰ。  
经过代理以后，由于在客户端和服务之间增加了中间层，因此服务器无法直接拿到客户端的IP，服务器端应用也无法直接通过转发请求的地址返回给客户端。但是在转发请求的HTTP头信息中，增加了X－FORWARDED－FOR信息。用以跟踪原有的客户端IP地址和原来客户端请求的服务器地址。当我们访问http://www.xxx.com/index.jsp/ 时，其实并不是我们浏览器真正访问到了服务器上的index.jsp文件，而是先由代理服务器去访问http://192.168.1.110:2046/index.jsp ，代理服务器再将访问到的结果返回给我们的浏览器，因为是代理服务器去访问index.jsp的，所以index.jsp中通过request.getRemoteAddr()的方法获取的IP实际上是代理服务器的地址，并不是客户端的IP地址。  
于是可得出获得客户端真实IP地址的方法一：  
public String getRemortIP(HttpServletRequest request) {  
  if (request.getHeader("x-forwarded-for") == null) {  
   return request.getRemoteAddr();  
  }  
  return request.getHeader("x-forwarded-for");  
  
 }  
  
可是当我访问http://www.xxx.com/index.jsp/ 时，返回的IP地址始终是unknown，也并不是如上所示的127.0.0.1　或　192.168.1.110了，而我访问http://192.168.1.110:2046/index.jsp 时，则能返回客户端的真实IP地址，写了个方法去验证。原因出在了Squid上。squid.conf 的配制文件　forwarded_for 项默认是为on，如果 forwarded_for 设成了 off 　则：X-Forwarded-For: unknown  
  
于是可得出获得客户端真实IP地址的方法二：  
 1    public String getIpAddr(HttpServletRequest request) {  
 2        String ip = request.getHeader("x-forwarded-for");  
 3        if(ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {  
 4            ip = request.getHeader("Proxy-Client-IP");  
 5        }  
 6        if(ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {  
 7            ip = request.getHeader("WL-Proxy-Client-IP");  
 8        }  
 9        if(ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {  
10            ip = request.getRemoteAddr();  
11        }  
12        return ip;  
13    }  
  
　　可是，如果通过了多级反向代理的话，X-Forwarded-For的值并不止一个，而是一串Ｉｐ值，究竟哪个才是真正的用户端的真实IP呢？  
  
　　答案是取X-Forwarded-For中第一个非unknown的有效IP字符串。  
  
　　如：  
　　X-Forwarded-For：192.168.1.110, 192.168.1.120, 192.168.1.130, 192.168.1.100  
　　用户真实IP为： 192.168.1.110  