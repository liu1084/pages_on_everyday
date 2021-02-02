---
layout: post
title: "spring/How to add a filter"
date: 2017-04-01 03:02:07 +0800
comments: true
categories: 
---


1. Servlet Filter
Review the following custom filter, it will catch any exceptions and redirect to an error page.

```java
package com.mkyong.form.web;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

public class ErrorHandleFilter implements Filter {

	@Override
	public void destroy() {
		// ...
	}

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		//
	}

	@Override
	public void doFilter(ServletRequest request,
               ServletResponse response, FilterChain chain)
		throws IOException, ServletException {

		try {
			chain.doFilter(request, response);
		} catch (Exception ex) {
			request.setAttribute("errorMessage", ex);
			request.getRequestDispatcher("/WEB-INF/views/jsp/error.jsp")
                               .forward(request, response);
		}

	}

}

```
2. Spring XML
In Spring MVC + XML configuration, you can register the filters via web.xml


web.xml

```xml
<filter>
	<filter-name>errorHandlerFilter</filter-name>
	<filter-class>com.mkyong.form.web.ErrorHandleFilter</filter-class>
</filter>
<filter-mapping>
	<filter-name>errorHandlerFilter</filter-name>
	<url-pattern>/*</url-pattern>
</filter-mapping>

```