---
layout: post
title: "js/What is PJAX and How to using in jquery?"
date: 2016-10-09 17:21:40 +0800
comments: true
categories: ajax, pjax, statePush, windows.history
---


## 什么是pjax?

pjax是对ajax + pushState的封装，让你可以很方便的使用pushState技术。

## ajax的缺陷

先说下目前ajax为了实现以上效果（更改页面URL，并支持前进后退）的一些问题：

1. 可以无刷新改变页面内容，但无法改变页面URL
2. 为了更好的可访问性，内容发生改变后，通常改变URL的hash
3. hash的方式不能很好的处理浏览器的前进、后退等问题
4. 进而浏览器引入了onhashchange的接口，不支持的浏览器只能定时去判断hash是否改变，这种方式对搜索引擎很不友好


## HTML4 和 HTML5 中history对象的不同

### 在HTML4，Histroy对象有下面属性方法：

1. length：历史堆栈中的记录数。
2. back()：返回上一页。
3. forward()：前进到下一页。
4. go([delta])：delta是个数字，如果不写或为0，则刷新本页；如果为正数，则前进到相应数目的页面；若为负数，则后退到相应数目的页面。


### HTML5中对windows.history对象添加了两个方法:

1. pushState(data, title [, url])

往历史堆栈的顶部添加一条记录。
data为一个对象或null，它会在触发window的popstate事件（window.onpopstate）时，作为参数的state属性传递过去；title为页面的标题，但当前所有浏览器都忽略这个参数；url为页面的URL，不写则为当前页。

2.replaceState(data, title [, url])

更改当前页面的历史记录。参数同上。这种更改并不会去访问该URL。


就是通过以上2个接口做到无刷新改变页面URL的，在配合ajax，也就是现在的`PJAX`技术的产生。

#### 加入历史记录

```javascript
var state = {
	title: title,
	url: options.url,
	otherKey: otherValue
};

window.history.pushState(state, document.title, url);
```
state对象除了要title和url之外，你也可以添加其他的数据.replaceState和pushState是大致相同.

#### 在流程外，为了保证前进后退操作的体验一致

响应页面中的onpopstate事件：

```javascript
window.addEventListener('popstate', function(e){
  if (history.state){
    var state = e.state;
    //do something(state.url, state.title);
  }
}, false);
```
window对象上提供了onpopstate事件，history传递的state对象会成为event的子对象，这样就可以拿到存储的title和URL了（或者其他当时存储的数据）.

#### 对应后端的一些处理

这种模式下除了当前使用ajax可以无刷新浏览外，还要保证直接请求改变的URL后也可以正常浏览，所以
对使用pushState的ajax发送一个特殊的头，如： setRequestHeader(‘PJAX’, ‘true’)。
则后端程序通过判断请求头确定当前请求是否是pjax请求，从而改变响应的内容

通过以上3步的补充，则完成pjax的整体过程

限制

1. 传递的URL必须是同域下的，无法跨域
2. state对象虽然可以存储很多自定义的属性，但对于不可序列化的对象则不能存储，如：DOM对象。
3. 最关键的是只有HTML5才能实现该操作




## 如何在jQuery中使用PJAX?
将jquery.pjax.js部署到你的页面中，将需要使用pjax的a链接进行绑定（不能绑定外域的url），如:

```javascript
$.pjax({
    selector: 'a',
    container: '#container', //内容替换的容器
    show: 'fade',  //展现的动画，支持默认和fade, 可以自定义动画方式，这里为自定义的function即可。
    cache: true,  //是否使用缓存
    storage: true,  //是否使用本地存储
    titleSuffix: '', //标题后缀
    filter: function(){},
    callback: function(){}
})
```