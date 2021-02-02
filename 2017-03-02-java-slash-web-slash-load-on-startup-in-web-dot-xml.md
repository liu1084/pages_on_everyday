---
layout: post
title: "java/web/load-on-startup in web.xml"
date: 2017-03-02 11:31:55 +0800
comments: true
categories: 
---
<servlet>
   <servlet-name>dwr-invoker</servlet-name>
   <servlet-class>org.directwebremoting.servlet.DwrServlet</servlet-class>
   <init-param>
    <param-name>debug</param-name>
    <param-value>true</param-value>
   </init-param>
   <load-on-startup>1</load-on-startup>
</servlet>
<servlet-mapping>
   <servlet-name>dwr-invoker</servlet-name>
   <url-pattern>/dwr/*</url-pattern>
</servlet-mapping>
我们注意到它里面包含了这段配置：<load-on-startup>1</load-on-startup>，那么这个配置有什么作用呢？

贴一段英文原汁原味的解释如下：
Servlet specification:
The load-on-startup element indicates that this servlet should be loaded (instantiated and have its init() called) on the startup of the web application. The optional contents of these element must be an integer indicating the order in which the servlet should be loaded. If the value is a negative integer, or the element is not present, the container is free to load the servlet whenever it chooses.   If the value is a positive integer or 0, the container must load and initialize the servlet as the application is deployed. The container must guarantee that servlets marked with lower integers are loaded before servlets marked with higher integers. The container may choose the order of loading of servlets with the same load-on-start-up value.

翻译过来的意思大致如下：
1)load-on-startup元素标记容器是否在启动的时候就加载这个servlet(实例化并调用其init()方法)。

2)它的值必须是一个整数，表示servlet应该被载入的顺序

2)当值为0或者大于0时，表示容器在应用启动时就加载并初始化这个servlet；

3)当值小于0或者没有指定时，则表示容器在该servlet被选择时才会去加载。

4)正数的值越小，该servlet的优先级越高，应用启动时就越先加载。

5)当值相同时，容器就会自己选择顺序来加载。

所以，<load-on-startup>x</load-on-startup>，中x的取值1，2，3，4，5代表的是优先级，而非启动延迟时间。

如下题目：

2.web.xml中不包括哪些定义（多选）


a.默认起始页


b.servlet启动延迟时间定义


c.error处理页面


d.jsp文件改动后重新载入时间


答案：b,d

通常大多数Servlet是在用户第一次请求的时候由应用服务器创建并初始化，但<load-on-startup>n</load-on-startup>   可以用来改变这种状况，根据自己需要改变加载的优先级！