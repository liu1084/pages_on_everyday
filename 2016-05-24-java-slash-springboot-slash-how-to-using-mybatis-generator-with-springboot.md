---
layout: post
title: "java/springboot/How to using mybatis-generator with springboot?"
date: 2016-05-24 00:38:38 +0800
comments: true
categories: 
---
NOTE: before you make a config file, you should install mybatis plugin for [intellj idea](https://www.ref-immutable.com/) plugin.

This tool is not free now.

- resources -> right click -> new -> mybatis-generator-config.xml
- edit mybatis-generator-config.xml

		!DOCTYPE generatorConfiguration PUBLIC
	        "-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN"
	        "http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd" >
		<generatorConfiguration>
	
	    <!-- Class Driver Path -->
	    <classPathEntry location="d:/http/xampp2/mysql/connector/mysql-connector-java-5.1.39-bin.jar"/>
	
	    <context id="context" targetRuntime="MyBatis3">
	        <commentGenerator>
	            <!-- This property is used to specify whether MBG will include any coments in the generated code -->
	            <property name="suppressAllComments" value="false"/>
	            <!-- This property is used to specify whether MBG will include the generation timestamp in the generated comments -->
	            <property name="suppressDate" value="true"/>
	        </commentGenerator>
	
	        <jdbcConnection driverClass="com.mysql.jdbc.Driver" connectionURL="jdbc:mysql://localhost:3306/blog" userId="root" password=""/>
	
	        <javaTypeResolver>
	            <!-- This property is used to specify whether MyBatis Generator should force the use of java.math.BigDecimal
	      for DECIMAL and NUMERIC fields, rather than substituting integral types when possible -->
	            <property name="forceBigDecimals" value="false"/>
	        </javaTypeResolver>
	
	        <javaModelGenerator targetPackage="com.jim.model" targetProject="I:/github/jim-captcha/src/main/java">
	            <!-- This property is used to select whether MyBatis Generator will generate different Java packages for
	      the objects based on the catalog and schema of the introspected table -->
	            <property name="enableSubPackages" value="false"/>
	            <!-- This property is used to select whether MyBatis Generator adds code to trim the white space from character fields returned from the database -->
	            <property name="trimStrings" value="true"/>
	        </javaModelGenerator>
	
	        <sqlMapGenerator targetPackage="mapper.blog" targetProject="I:/github/jim-captcha/src/main/resources/">
	            <!-- This property is used to select whether MyBatis Generator will generate different Java packages for
	      the objects based on the catalog and schema of the introspected table -->
	            <property name="enableSubPackages" value="false"/>
	        </sqlMapGenerator>
	
	        <javaClientGenerator targetPackage="com.jim.dao" targetProject="I:/github/jim-captcha/src/main/java" type="XMLMAPPER">
	            <!-- This property is used to select whether MyBatis Generator will generate different Java packages for
	      the objects based on the catalog and schema of the introspected table -->
	            <property name="enableSubPackages" value="false"/>
	        </javaClientGenerator>
	
	        <table tableName="user" enableCountByExample="false" enableDeleteByExample="false" enableSelectByExample="false"
	               enableUpdateByExample="false" domainObjectName="User" schema="blog"/>
	        <table tableName="admin" enableCountByExample="false" enableDeleteByExample="false" enableSelectByExample="false"
	               enableUpdateByExample="false" domainObjectName="Admin" schema="blog"/>
		    </context>
		</generatorConfiguration>

- add plugin in pom.xml

	    <plugin>
	        <artifactId>mybatis-generator-maven-plugin</artifactId>
	        <groupId>org.mybatis.generator</groupId>
	        <version>1.3.2</version>
	    </plugin>


- open shell 

		mvn mvn mybatis-generator:generate

- enjoy it.

If u want to know something xml element's meaning, [ref](http://blog.csdn.net/isea533/article/details/42102297)