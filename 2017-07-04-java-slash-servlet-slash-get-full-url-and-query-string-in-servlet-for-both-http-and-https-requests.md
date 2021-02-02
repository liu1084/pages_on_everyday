---
layout: post
title: "java/servlet/get full URL and query string in servlet for both HTTP and HTTPS requests"
date: 2017-07-04 15:16:59 +0800
comments: true
categories: 
---

### By design, getRequestURL() gives you the full URL, missing only the query string.

### In HttpServletRequest, you can get individual parts of the URI using the methods below:

Example: http://myhost:8080/people?lastname=Fox&age=30

```java
String uri = request.getScheme() + "://" +   // "http" + "://
             request.getServerName() +       // "myhost"
             ":" +                           // ":"
             request.getServerPort() +       // "8080"
             request.getRequestURI() +       // "/people"
             "?" +                           // "?"
             request.getQueryString();       // "lastname=Fox&age=30"
```

1. getScheme() will give you "https" if it was a https://domain request.
2. getServerName() gives domain on http(s)://domain.
3. getServerPort() will give you the port.