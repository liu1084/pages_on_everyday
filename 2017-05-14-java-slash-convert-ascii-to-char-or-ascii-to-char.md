---
layout: post
title: "java/convert ascii to char or ascii to char"
date: 2017-05-14 03:08:54 +0800
comments: true
categories: 
---

```java
package com.jim.javacore.com.jim.utils;

/**
 * Created by jim on 2017/5/14.
 * This class is ...
 */
public class CharUtils {
	public static int charToAscii(char c) {
		return (int) c;
	}

	public static char asciiToChar(int a) {
		return (char) a;
	}
}
```

## test

```java
package com.jim.javacore;

import com.jim.javacore.com.jim.utils.CharUtils;
import com.jim.javacore.provider.DataProvider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testng.Assert;
import org.testng.Reporter;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

/**
 * Unit test for simple App.
 */
public class AppTest {

	private static final Logger LOGGER = LoggerFactory.getLogger(AppTest.class);

	@BeforeClass
	public void before() {
		//LOGGER.debug("test begin.");
		Reporter.log("Message", true);

	}


	@Test(dataProvider = "charsDataProvider", dataProviderClass = DataProvider.class)
	public void xMax(char character, int ascii) {
		int result = CharUtils.charToAscii(character);
		Assert.assertEquals(result, ascii);

		char result2 = CharUtils.asciiToChar(ascii);
		Assert.assertEquals(result2, character);
	}

	@AfterClass
	public void after() {

	}
}
```