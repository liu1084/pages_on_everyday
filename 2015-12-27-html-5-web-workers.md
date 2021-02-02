---
id: 67
title: HTML 5 Web Workers
date: 2015-12-27T05:56:00+00:00
author: liu1084
layout: post
guid: http://www.83096146.com/blog/?p=67
permalink: /?p=67
categories:
  - linux
---
web worker 是运行在后台的 JavaScript，不会影响页面的性能。
  
什么是 Web Worker？
  
当在 HTML 页面中执行脚本时，页面的状态是不可响应的，直到脚本已完成。
  
web worker 是运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能。您可以继续做任何愿意做的事情：点击、选取内容等等，而此时 web worker 在后台运行。
  
浏览器支持
  
所有主流浏览器均支持 web worker，Internet Explorer 10+支持web workers。

<!--more-->

## 创建 Web Worker 对象

我们已经有了 web worker 文件，现在我们需要从 HTML 页面调用它。

下面的代码检测是否存在 worker，如果不存在，- 它会创建一个新的 web worker 对象，然后运行 &#8220;demo_workers.js&#8221; 中的代码：

<table class="wysiwyg-macro" style="background-image: url('http://wiki.linecorp.com/plugins/servlet/confluence/placeholder/macro-heading?definition=e2NvZGV9&locale=en_GB&version=2'); background-repeat: no-repeat;" data-macro-name="code" data-macro-body-type="PLAIN_TEXT">
  <tr>
    <td class="wysiwyg-macro-body">
      <pre class="">if(typeof(Worker)!=="undefined"){
	w = new Worker("demo_workers.js");
}</pre>
    </td>
  </tr>
</table>

然后我们就可以从 web worker 发生和接收消息了。

向 web worker 添加一个 &#8220;onmessage&#8221; 事件监听器：

<table class="wysiwyg-macro" style="background-image: url('http://wiki.linecorp.com/plugins/servlet/confluence/placeholder/macro-heading?definition=e2NvZGV9&locale=en_GB&version=2'); background-repeat: no-repeat;" data-macro-name="code" data-macro-body-type="PLAIN_TEXT">
  <tr>
    <td class="wysiwyg-macro-body">
      <pre class="">w.onmessage=function(event){
	document.getElementById("result").innerHTML=event.data;
};</pre>
    </td>
  </tr>
</table>

<span style="color: #000000;">当 web worker 传递消息时，会执行事件监听器中的代码。event.data 中存有来自 event.data 的数据。</span>

## 终止 Web Worker

当我们创建 web worker 对象后，它会继续监听消息（即使在外部脚本完成之后）直到其被终止为止。

如需终止 web worker，并释放浏览器/计算机资源，请使用 terminate() 方法：

<table class="wysiwyg-macro" style="background-image: url('http://wiki.linecorp.com/plugins/servlet/confluence/placeholder/macro-heading?definition=e2NvZGV9&locale=en_GB&version=2'); background-repeat: no-repeat;" data-macro-name="code" data-macro-body-type="PLAIN_TEXT">
  <tr>
    <td class="wysiwyg-macro-body">
      <pre>w.terminate();</pre>
    </td>
  </tr>
</table>

## 完整的 Web Worker 实例代码

我们已经看到了 .js 文件中的 Worker 代码。下面是 HTML 页面的代码：

### 实例

<table class="wysiwyg-macro" style="background-image: url('http://wiki.linecorp.com/plugins/servlet/confluence/placeholder/macro-heading?definition=e2NvZGU6dGhlbWU9RW1hY3N8bGluZW51bWJlcnM9dHJ1ZXxsYW5ndWFnZT14bWx9&locale=en_GB&version=2'); background-repeat: no-repeat;" data-macro-name="code" data-macro-parameters="language=xml|linenumbers=true|theme=Emacs" data-macro-body-type="PLAIN_TEXT">
  <tr>
    <td class="wysiwyg-macro-body">
      <pre>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;
	&lt;p&gt;Count numbers: &lt;output id="result"&gt;&lt;/output&gt;&lt;/p&gt;
	&lt;button onclick="startWorker()"&gt;Start Worker&lt;/button&gt;
	&lt;button onclick="stopWorker()"&gt;Stop Worker&lt;/button&gt;
	&lt;br /&gt;&lt;br /&gt;
	&lt;script&gt;
		var w;
		function startWorker()
		{
			if(typeof(Worker)!=="undefined")
			{
				if(typeof(w)=="undefined")
				{
					w=new Worker("demo_workers.js");
				}
				w.onmessage = function (event) {
					document.getElementById("result").innerHTML=event.data;
				};
			}
			else
			{
				document.getElementById("result").innerHTML="Sorry, your browser
				does not support Web Workers...";
			}
		}
		function stopWorker()
		{
			w.terminate();
		}
	&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
    </td>
  </tr>
</table>

<pre>demo_workers.js:</pre>

<table class="wysiwyg-macro" style="background-image: url('http://wiki.linecorp.com/plugins/servlet/confluence/placeholder/macro-heading?definition=e2NvZGU6dGhlbWU9RW1hY3N8bGluZW51bWJlcnM9dHJ1ZXxsYW5ndWFnZT1qc30&locale=en_GB&version=2'); background-repeat: no-repeat;" data-macro-name="code" data-macro-parameters="language=js|linenumbers=true|theme=Emacs" data-macro-body-type="PLAIN_TEXT">
  <tr>
    <td class="wysiwyg-macro-body">
      <pre class="">var i=0;

function timedCount() {
    i=i+1;
    postMessage(i);
    setTimeout("timedCount()", 500);
}

timedCount();</pre>
    </td>
  </tr>
</table>