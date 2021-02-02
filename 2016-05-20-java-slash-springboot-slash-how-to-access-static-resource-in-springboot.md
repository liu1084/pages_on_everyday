---
layout: post
title: "java/springboot/How to access static resource in springboot?"
date: 2016-05-20 01:44:17 +0800
comments: true
categories: java springboot, static resource
---


- Add <mvc:resources mapping="" location="" /> to project config
edit your project config file(eg:spring.xml)

    ...

    <!-- It means: If client access /static/..., spring will look them under 
        ServletContext resource [/static/],  OR
        class path resource [META-INF/resources/static/],   OR
        class path resource [resources/statstatic/ic],   OR
        class path resource [static/static/],   OR
        class path resource [public/static/],   OR
        class path resource [static/]
     -->

     <mvc:resources mapping="/static/**" location="classpath:/static/"/>

- Add @ImportResource to main class

        @SpringBootApplication
        ...
        @ImportResource({"captcha.xml"})
        ...


- Add your static resource to forlder & copy it to rources forlder

        copy your static resource(eg: CSS/JS/SCSS ...) to one of any folders


