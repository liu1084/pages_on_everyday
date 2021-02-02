---
layout: post
title: "javascript/how to using apply & call in javascript?"
date: 2016-09-07 17:59:47 +0800
comments: true
categories: 
---

### 通过call或者apply,使用别的对象的方法
在javascript OOP中，我们经常会这样定义：

```javascript
	function cat(){
	}
	cat.prototype={
		food:"fish",
		say: function(){
			alert("I love "+this.food);
		}
	}
```
```javascript
	var blackCat = new cat;
	blackCat.say();
```
但是如果我们有一个对象whiteDog = {food:"bone"},我们不想对它重新定义say方法，那么我们可以通过call或apply用blackCat的say方法：blackCat.

```javascript
say.call(whiteDog);
```
所以，可以看出call和apply是为了动态改变this而出现的，当一个object没有某个方法，但是其他的有，我们可以借助call或apply用其它对象的方法来操作。

用的比较多的，通过document.getElementsByTagName选择的dom 节点是一种类似array的array。它不能应用Array下的push,pop等方法。我们可以通过：

```javascript
var domNodes = Array.prototype.slice.call(document.getElementsByTagName("*"));
```
这样domNodes就可以应用Array下的所有方法了。

### call & apply的区别
二者的作用完全一样，只是接受参数的方式不太一样。例如，有一个函数 func1 定义如下：

```javascript
var func1 = function(arg1, arg2) {};
```
就可以通过 

```javascript
func1.call(this, arg1, arg2); 
```
或者 

```javascript
func1.apply(this, [arg1, arg2]);
```
 来调用。
 其中 this 是你想指定的上下文，他可以任何一个 JavaScript 对象(JavaScript 中一切皆对象)，call 需要把参数按顺序传递进去，而 apply 则是把参数放在数组里。
