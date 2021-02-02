---
layout: post
title: "java/springmvc/Error: HTTP Status 406"
date: 2016-05-20 15:09:20 +0800
comments: true
categories: 
---

How to response as JSON to REST request in SpringMVC?
- ShopController.java

	@Controller
	@RequestMapping("/shop")
	public class ShopController {
	    @RequestMapping(value = "/id/{id}", method = RequestMethod.GET, produces = "application/json")
		@ResponseBody
		public Shop show(@PathVariable String id) {
	        Shop shop = new Shop();
	        shop.setName(id);
	        return shop;
	    }
	}

- Model Shop.java

	public class Shop {
	    public String getName() {
	        return name;
	    }

	    public void setName(String name) {
	        this.name = name;
	    }

	    private String name;
	}

- Add annotation-driven to your project config:

    <context:component-scan base-package="com.springapp.mvc"/>
    <context:annotation-config/>
    <mvc:annotation-driven/>

- Run & view in browser, Error:

	HTTP Status 406 -

	type Status report

	message

	description The resource identified by this request is only capable of generating responses with characteristics not acceptable according to the request "accept" headers.

- How to?

	Add jackson-databind & jaxb-api to POM.xml file

	<!--jackson-->
    <dependency>
        <groupId>com.fasterxml.jackson.core</groupId>
        <artifactId>jackson-databind</artifactId>
        <version>2.7.4</version>
    </dependency>

    <dependency>
        <groupId>javax.xml.bind</groupId>
        <artifactId>jaxb-api</artifactId>
        <version>2.2.12</version>
    </dependency>

- Try again, it is OK.