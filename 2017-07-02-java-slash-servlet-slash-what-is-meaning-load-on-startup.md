---
layout: post
title: "java/servlet/What is meaning load-on-startup?"
date: 2017-07-02 00:24:08 +0800
comments: true
categories: 
---


```java
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebInitParam;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Locale;

/**
 * Created by jim on 2017/6/30.
 * This class is ...
 */
@WebServlet(
		name = "login",
		urlPatterns = {"/login"},
		initParams = {@WebInitParam(name = "value", value = "1"), @WebInitParam(name = "key", value = "2")},
		loadOnStartup = 1
)
public class LoginServlet extends HttpServlet {

	@Override
	public void service(ServletRequest req, ServletResponse res)
			throws ServletException, IOException {
		super.service(req, res);
	}

	@Override
	public void doGet(HttpServletRequest req, HttpServletResponse res)
			throws ServletException, IOException {
		res.setContentType("text/html;charset=UTF-8");
		res.setLocale(Locale.CHINA);
		PrintWriter out = res.getWriter();
		String initValue = getServletConfig().getInitParameter("value");
		try {
			// Write some content
			out.println("<html>");
			out.println("<head>");
			out.println("<title>草</title>");
			out.println("</head>");
			out.println("<body>");
			out.println("<h2>你妈的 " + req.getContextPath() + ":" + initValue + "</h2>");
			out.println("</body>");
			out.println("</html>");
		} finally {
			out.close();
		}
	}

	@Override
	public void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {


	}
}

```

## loadOnStartup = 1, meaming:

1. load-on-startup元素标记容器是否在启动的时候就加载这个servlet(实例化并调用其init()方法)。

2. 它的值必须是一个整数，表示servlet应该被载入的顺序

3. 当值为0或者大于0时，表示容器在应用启动时就加载并初始化这个servlet；

4. 当值小于0或者没有指定时，则表示容器在该servlet被选择时才会去加载。

5. 正数的值越小，该servlet的优先级越高，应用启动时就越先加载。

6. 当值相同时，容器就会自己选择顺序来加载。

所以，<load-on-startup>x</load-on-startup>，中x的取值1，2，3，4，5代表的是优先级，而非启动延迟时间。

## 如下题目：

2.web.xml中不包括哪些定义（多选）

a.默认起始页
b.servlet启动延迟时间定义
c.error处理页面
d.jsp文件改动后重新载入时间