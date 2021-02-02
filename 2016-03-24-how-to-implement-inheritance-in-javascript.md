---
id: 256
title: How to implement inheritance in javascript?
date: 2016-03-24T11:50:20+00:00
author: liu1084
layout: post
guid: http://blog.83096146.com/?p=256
permalink: /?p=256
categories:
  - linux
---
这里有一个例子 

<pre><code class="language-javascript">console.time('time defining classes');

Class = function() {};
Class.prototype.init = function() {
    return this;
};

function Human() {};
Human.super = Class;
Human.prototype = new Human.super;
Human.prototype.constructor = Human;
Human.prototype.talk = function() {
    return "hello";
};

function Spider() {};
Spider.super = Class;
Spider.prototype = new Spider.super;
Spider.prototype.constructor = Spider;
Spider.prototype.climb = function() {
    return "climbing";
};

function SpiderMan() {};
SpiderMan.super = Human;
SpiderMan.prototype = new SpiderMan.super;
SpiderMan.prototype.constructor = SpiderMan;
SpiderMan.prototype.talk = function() {
    var speech = this.constructor.super.prototype.talk.call(this);
    return speech + ", my name is Peter Parker";
};
console.timeEnd('time defining classes');

function proof(limit, times) {
    console.log('Test: instatiate ' + limit + ' objs, ' + times + ' times')
    for (var ii = 0; ii &lt; times; ii++) {
        var strings = [],
        objs = [];
        console.time('time');
        for (var i = 0; i &lt; limit; i++) {
            var spiderman = (new SpiderMan).init();
            objs.push(spiderman);
            strings.push(spiderman.talk());
        }
        console.timeEnd('time');
    }

}
function begin(){
    setTimeout(function() {
        if (!console) return;
        proof(1000000, 10);
    }, 1000);
}</code></pre>

&nbsp; 

总结，javascript使用原型链的方式实现了面向对象，所以实现继承，需要使用原型链： 

<pre><code class="language-javascript">var ParentClass = function(){};
ParentClass.prototype.method1 = function(){
    console.log('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus illum unde, eum ut vero nisi at nemo reiciendis quisquam porro, minus iusto labore corrupti nam, facere hic deleniti eveniet. Nemo?');
};

var ChildrenClass = function(){};
ChildrenClass.prototype = new ParentClass();
ChildrenClass.prototype.constructor = ChildrenClass;

var childInstance = new ChildrenClass();
childInstance.method1(); //call parent's method in children instance.</code></pre>

&nbsp;