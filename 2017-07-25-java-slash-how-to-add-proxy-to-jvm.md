---
layout: post
title: "java/How to add proxy to jvm?"
date: 2017-07-25 17:07:13 +0800
comments: true
categories: 
---

### 手动设置jvm的代理
```shell
java -Dhttp.proxyHost=proxyhost 
-Dhttps.nonProxyHosts=localhost|127.0.0.1 //（排除localhost，和127.0.0.1使用proxy）
-Dhttp.proxyPort=proxyPortNumber 
-Dhttp.proxyUser=someUserName 
-Dhttp.proxyPassword=somePassword HelloWorldClass

```


### java 读取系统代理参数

```java
public void setProxy() {
    if (isUseHTTPProxy()) {
        // HTTP/HTTPS Proxy
        System.setProperty("http.proxyHost", getHTTPHost());
        System.setProperty("http.proxyPort", getHTTPPort());
        System.setProperty("https.proxyHost", getHTTPHost());
        System.setProperty("https.proxyPort", getHTTPPort());
        if (isUseHTTPAuth()) {
            String encoded = new String(Base64.encodeBase64((getHTTPUsername() + ":" + getHTTPPassword()).getBytes()));
            con.setRequestProperty("Proxy-Authorization", "Basic " + encoded);
            Authenticator.setDefault(new ProxyAuth(getHTTPUsername(), getHTTPPassword()));
        }
    }
    if (isUseSOCKSProxy()) {
        // SOCKS Proxy
        System.setProperty("socksProxyHost", getSOCKSHost());
        System.setProperty("socksProxyPort", getSOCKSPort());
        if (isUseSOCKSAuth()) {
            System.setProperty("java.net.socks.username", getSOCKSUsername());
            System.setProperty("java.net.socks.password", getSOCKSPassword());
            Authenticator.setDefault(new ProxyAuth(getSOCKSUsername(), getSOCKSPassword()));
        }
    }
}


public class ProxyAuth extends Authenticator {
    private PasswordAuthentication auth;

    private ProxyAuth(String user, String password) {
        auth = new PasswordAuthentication(user, password == null ? new char[]{} : password.toCharArray());
    }

    protected PasswordAuthentication getPasswordAuthentication() {
        return auth;
    }
}
```