---
layout: post
title: "java/servlet/How long charsets in query string?"
date: 2017-07-25 00:42:44 +0800
comments: true
categories: 
---


## about 7.44K

```java
String uri = request.getScheme() + "://" +   // "http" + "://
             request.getServerName() +       // "myhost"
             ":" +                           // ":"
             request.getServerPort() +       // "8080"
             request.getRequestURI() +       // "/people"
             "?" +                           // "?"
             request.getQueryString();       // "lastname=Fox&age=30"

```

```java
<%
    StringBuffer query = new StringBuffer();
    int MAX = 7 * 1024 + 487;


    byte[] bytes = "http://localhost:8080/app/login?key=".getBytes();

    for (int i = 0; i < MAX - bytes.length; i++) {
        query.append(1);
    }
    
    String link = "http://localhost:8080/app/login?key=" + query;
%>
```

## how to break down default limit?


The connector section has the parameter

maxPostSize

The maximum size in bytes of the POST which will be handled by the container FORM URL parameter parsing. The limit can be disabled by setting this attribute to a value less than or equal to 0. If not specified, this attribute is set to 2097152 (2 megabytes).

Another Limit is:

maxHttpHeaderSize The maximum size of the request and response HTTP header, specified in bytes. If not specified, this attribute is set to 4096 (4 KB).

You find them in

$TOMCAT_HOME/conf/server.xml

In conf\server.xml

```xml
<Connector port="80" protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="8443"
                maxPostSize="67589953" />
```

In webapps\manager\WEB-INF\web.xml

```xml
<multipart-config>
  <!-- 52MB max -->
  <max-file-size>52428800</max-file-size>
  <max-request-size>52428800</max-request-size>
  <file-size-threshold>0</file-size-threshold>
</multipart-config>
```