---
layout: post
title: "java/servlet/How to iteration servlet request names and values?"
date: 2017-07-25 01:01:37 +0800
comments: true
categories: 
---

```java
Enumeration<String> names = req.getParameterNames();

PrintWriter printWriter = resp.getWriter();
Gson gson = new Gson();
Map<String, List<String>> map = new HashMap();

while (names.hasMoreElements()) {
	String parameterName = names.nextElement();
	String[] values = req.getParameterValues(parameterName);
	map.put(parameterName, Arrays.asList(values));
}

resp.setContentType("application/json; charset=UTF-8");
LOGGER.info(gson.toJson(map));
printWriter.write(gson.toJson(map));
```