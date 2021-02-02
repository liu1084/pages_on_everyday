---
id: 106
title: 'who is &#8216;this&#8217; in javascript reference to ?'
date: 2015-12-29T23:46:47+00:00
author: liu1084
layout: post
guid: http://blog.83096146.com/?p=106
permalink: /?p=106
categories:
  - javascript
---
在面向对象编程中，this很常用，它实际上就是指向当前作用域下实例本身，是一个指针类型的变量。

但是在javascript中，由于有闭包这个特征的存在，跟一般情况下的this的引用有些差别。根据我的总结，有以下几种情况，如果你觉得自己已经很明白了，可以看看在示例中，this应该是指向谁？验证一下自己的理解是否正确。

<!--more-->

  * 指向调用函数的对象
  
    对象.function(){//这里的this指向对象}

示例：

<pre class="lang:js decode:true">var x = 10;
var obj = {
    x: 20,
    f: function(){
        console.log(this.x);
    }
};

obj.f(); //这里的this指向obj，会输出?
obj.innerobj = {
    x: 30,
    f: function(){
        console.log(this.x);
    }
};
 
obj.innerobj.f(); //这里由于调用f函数时，前面的对象是obj.innerobj，所以this指向obj.innerobj，所以输出?

</pre>

  * 指向全局（浏览器：windows对象，nodejs：GLOBAL）
  
    如果调用函数的时候，没有指定对象，那么函数中的this指向的是windows或者GLOBAL对象；

示例1：

<pre class="lang:js decode:true">var x = 10;
var obj = {
    x: 20,
    f: function(){
        console.log(this.x);
    }
};

obj.f(); //这里的this指向obj，会输出?
obj.innerobj = {
    x: 30,
    f: function(){
        console.log(this.x);
    }
};
 
obj.innerobj.f(); //这里由于调用f函数时，前面的对象是obj.innerobj，所以this指向obj.innerobj，所以输出?

</pre>

示例2：

<pre class="lang:js decode:true">var x = 10;
var obj = {
    x: 20,
    f: function(){
        console.log(this.x);
        var foo = function(){ console.log(this.x); }
        foo(); // 这里的this指向?，输出是什么?
    }
};

<code class="js plain">obj.f();  </code><code class="js comments">// 这里的this指向?，输出是什么?</code>

</pre>

示例3：

<pre class="lang:js decode:true">var x = 10;
var obj = {
    x: 20,
    f: function(){ console.log(this.x); }
};


obj.f();</pre>

示例4：

<pre class="lang:js decode:true">var x = 10;
var obj = {
    x: 20,
    f: function(){ console.log(this.x); }
};
var fOut = obj.f;
fOut();</pre>

示例5：

<pre class="lang:js decode:true">var x = 10;
var obj = {
    x: 20,
    f: function(){ console.log(this.x); }
};

var obj2 = {
    x: 30,
    f: obj.f
}

obj2.f();</pre>

  * 指向利用call或者apply指定的对象

<pre class="lang:js decode:true">var obj = {
    x: 20,
    f: function(){
    console.log(this.x);
}
};
 
var obj2 = {
    x: 30
};


obj.f.call(obj2);</pre>

  * 指向new出来的新对象

<pre class="lang:js decode:true">function Monster(){
    this.hp = 100;
}
var m = new Monster();
console.log(m.hp);

</pre>

  * 在callback中指向调用该callback的对象

<pre class="lang:js decode:true">$('#button1').on('click', function(){
    this.html('clicked!');
});</pre>

答案：

&nbsp;

&nbsp;

Test

  * What is the value of this at line A? Why?

<pre class="lang:js decode:true ">if (true) {
    // Line A
}</pre>

  * What is the value of `this` at line B when obj.staticFunction() is executed? Why?

<pre class="lang:js decode:true">var obj = {
    someData: "a string"
};
 
function myFun() {
    // Line B
}
 
obj.staticFunction = myFun;
 
obj.staticFunction();</pre>

  * What is the value of `this` at line C? Why?

<pre class="lang:js decode:true">var obj = {
    myMethod : function () {
        // Line C
    }
};
var myFun = obj.myMethod;
myFun();</pre>

  * What is the value of `this` at line D? Why?

<pre class="lang:js decode:true">function myFun() {
    // Line D
}
var obj = {
    myMethod : function () {
        eval("myFun()");
    }
};
obj.myMethod();</pre>

  * What is the value of `this` at line E?

<pre class="lang:js decode:true">function myFun() {
    // Line E
}
var obj = {
    someData: "a string"
};
myFun.call(obj);</pre>