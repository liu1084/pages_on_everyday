---
layout: post
title: "java/testng/using data provider"
date: 2017-05-14 03:07:19 +0800
comments: true
categories: 
---

## test provider

```java
package com.jim.javacore.provider;


/**
 * Created by jim on 2017/5/14.
 * This class is ...
 */
public class DataProvider {

	@org.testng.annotations.DataProvider
	public Object[][] charsDataProvider() {
		return new Object[][]{
				{'A', 65}, {'a', 97},
				{'B', 66}, {'b', 98},
				{'C', 67}, {'c', 99},
				{'D', 68}, {'d', 100},
				{'Z', 90}, {'z', 122},
				{'1', 49}, {'9', 57},
		};
	}
}
```

## test

```java
	@Test(dataProvider = "charsDataProvider", dataProviderClass = DataProvider.class)
	public void xMax(char character, int ascii) {
		int result = CharUtils.charToAscii(character);
		Assert.assertEquals(result, ascii);

		char result2 = CharUtils.asciiToChar(ascii);
		Assert.assertEquals(result2, character);
	}
```