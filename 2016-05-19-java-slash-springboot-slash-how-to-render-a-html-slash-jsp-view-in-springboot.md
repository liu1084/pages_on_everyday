---
layout: post
title: "java/springboot/How to render a html/jsp view in springboot?"
date: 2016-05-19 23:38:11 +0800
comments: true
categories: java, thymeleaf template, spring boot
---

If you want to render a view in your controller, which is resolver with thymeleaf.
- add dependencies - edit pom.xml, add:


	<!--thymeleaf view> -->
	<dependency>
	    <groupId>org.springframework.boot</groupId>
	    <artifactId>spring-boot-starter-thymeleaf</artifactId>
	</dependency>
	
	<dependency>
	    <groupId>org.thymeleaf</groupId>
	    <artifactId>thymeleaf-spring4</artifactId>
	</dependency>

- add templateResolver - open your spring config file, add:
    
		<bean id="templateResolver"
		  class="org.thymeleaf.templateresolver.ServletContextTemplateResolver">
		    <property name="prefix" value="/templates/"/>
		    <property name="templateMode" value="HTML5"/>
		</bean>

- add file to resources folder - in console:

	    cd resources
	    mkdir -p templates
	    cd templates && mkdir layouts common
		touch index.html


- add xmlns:th="http://www.thymeleaf.org" - edit index.html:

		<!DOCTYPE html>
		<html lang="en" xmlns:th="http://www.thymeleaf.org">
		<head>
			<meta charset="UTF-8"/>
			<title>index</title>
		</head>
		<body>
		this is dashboard.
		</body>
		</html>
