---
layout: post
title: "java/jetty/Config jetty in Intellj idea IDE"
date: 2016-05-15 13:44:13 +0800
comments: true
categories: java web, jetty configure
---

- install jetty plugin for intellj idea: IDEA jetty RUNNER
- download [jetty 9.3](http://download.eclipse.org/jetty/stable-9/dist/jetty-distribution-9.3.8.v20160314.tar.gz) from eclipse.com/jetty & unzip it to d:\http\jetty9.3
- create springmvc project with template using intellj idea
- edit pom.xml file & add jetty support for your project :

	<dependency>
	    <groupId>org.eclipse.jetty</groupId>
	    <artifactId>jetty-server</artifactId>
	    <version>9.3.8.v20160314</version>
	</dependency>

	<!-- http://mvnrepository.com/artifact/org.eclipse.jetty/jetty-util -->
	<dependency>
	    <groupId>org.eclipse.jetty</groupId>
	    <artifactId>jetty-util</artifactId>
	    <version>9.3.8.v20160314</version>
	</dependency>

	<!-- http://mvnrepository.com/artifact/org.eclipse.jetty/jetty-servlet -->
	<dependency>
	    <groupId>org.eclipse.jetty</groupId>
	    <artifactId>jetty-servlet</artifactId>
	    <version>9.3.8.v20160314</version>
	</dependency>

	<!-- http://mvnrepository.com/artifact/org.eclipse.jetty/jetty-webapp -->
	<dependency>
	    <groupId>org.eclipse.jetty</groupId>
	    <artifactId>jetty-webapp</artifactId>
	    <version>9.3.8.v20160314</version>
	</dependency>


- edit run configure & add jetty runner
- add jsp support 
 * open project structure
 * add global libs from jetty 9.3 lib -> apache-jsp

- start jetty runner & open your webapp in browser.
