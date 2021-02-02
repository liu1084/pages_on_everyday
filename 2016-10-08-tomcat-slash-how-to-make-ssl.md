---
layout: post
title: "tomcat/How to make SSL?"
date: 2016-10-08 14:30:09 +0800
comments: true
categories: tomcat, SSL
---


1. Generate server.key using JDK's keytool

```shell
D:\Java\jdk1.8.0_92\bin>keytool.exe -genkey -alias utfkeys -keyalg RSA -keystore D:\http\tomcat7\conf\keystore.key
输入密钥库口令:
再次输入新口令:
您的名字与姓氏是什么?
  [Unknown]:  utf
您的组织单位名称是什么?
  [Unknown]:  web
您的组织名称是什么?
  [Unknown]:  development part
您所在的城市或区域名称是什么?
  [Unknown]:  dalian
您所在的省/市/自治区名称是什么?
  [Unknown]:  liaoning
该单位的双字母国家/地区代码是什么?
  [Unknown]:  China
CN=utf, OU=web, O=development part, L=dalian, ST=liaoning, C=China是否正确?
  [否]:  Y

输入 <utfkeys> 的密钥口令
        (如果和密钥库口令相同, 按回车):
```

2. Export client auth file

```shell
D:\Java\jdk1.8.0_92\bin>keytool.exe -export -trustcacerts -alias utfkeys -file D:\http\tomcat7\conf\server.cer -keystore D:\http\tomcat7\conf\keystore.key -storepass YOUR-PASSWORD

存储在文件 <D:\http\tomcat7\conf\server.cer> 中的证书
```

3. Edit tomcat's server.xml and add 8443 connector

```xml
<Connector port="8443" protocol="org.apache.coyote.http11.Http11Protocol"
               maxThreads="150" SSLEnabled="true" scheme="https" secure="true"
               clientAuth="false" sslProtocol="TLS"
               keystoreFile="D:\http\tomcat7\conf\keystore.key"
               keystorePass="YOUR-PASSWORD" />
```

4. If `error` occur: Connector attribute SSLCertificateFile must be defined when using SSL with APR

Change `<Connector port="8443" protocol="HTTP/1.1"` to protocol="org.apache.coyote.http11.Http11Protocol"