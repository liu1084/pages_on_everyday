---
layout: post
title: "java/How to support i18n?"
date: 2017-05-09 23:18:03 +0800
comments: true
categories: 
---

## java project

### create properties file under `resources` folder: 

* message.properties
* message_en_US.properties
* message_zh_CN.properties

### read resource in your code

```java

ResourceBundle resourceBundle = ResourceBundle.getBundle("message");
ResourceBundle resourceBundleEn = ResourceBundle.getBundle("message", Locale.US);
ResourceBundle resourceBundleCn = ResourceBundle.getBundle("message", new Locale("zh", "CN"));


resourceBundle.getString("YOUR-PROPERTIES-FILE-KEY");
```

