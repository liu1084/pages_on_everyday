---
id: 232
title: How to deal with cross domain access in web development?
date: 2016-03-18T02:26:01+00:00
author: liu1084
layout: post
guid: http://blog.83096146.com/?p=232
permalink: /?p=232
categories:
  - angular
  - javascript
---


如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

```

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

``` 

3：angular的ajax实例
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){<br />
var config = {<br />
method: 'get',<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

以上两种情况下，在浏览器的console都会打出错误信息，内容大致相同：

> XMLHttpRequest cannot load http://localhost:8080/. No &#8216;Access-Control-Allow-Origin&#8217; header is present on the requested resource. Origin &#8216;http://localhost:63342&#8217; is therefore not allowed access.

2：分析
  
错误信息的提示很明确，就是说ajax请求无法完成，因为你不能从原地址http://localhost:63342访问http://localhost:8080/。为什么会出现这种情况呢？因为浏览器为了安全，有一个同源策略。规定了ajax请求的协议、主机名和端口号相同才能进行，否则是无法访问的。

3：解决方法

  * 架设一台跟客户端同一个域名的服务器，让服务器跟其他域名的服务器通讯，返回客户端需要的结果
  * 使用JSONP（json-padding）
  * 使用HTML5的CORS（IE10、IE9只支持简单的GET、POST和OPTIONS方法，其他的DELETE/PUT等都不支持，真正支持的只有IE11和其他现代浏览器）
  * 使用代理服务器

第一种，需要假设一台专门请求其他域名的服务器来进行。
  
客户端请求发给这台服务器，服务器通过RPC或者SOAP或者SOCKET等方式跟其他域名下的接口进行通讯，等请求完成后返回给客户端。
  
优点：可靠，可以返回结果和错误。
  
缺点：耗费资源，需要专人编写通讯代码并维护服务器运转。
  
代码我就不举例了，这个需要api服务器和你新加的服务器之间约定好协议，共同完成。

第二种，JSONP，采用客户端和服务器端同时修改代码解决
  
先说angular的jsonp（客户端）：
  
当angular的$http.jsonp()发生的时候，angular会在客户端页面中放置,注意这里的JSON_CALLBACK，不能随意改动。
  
当请求类型为jsonp的时候，实际上客户端并没有去请求ajax，而是根据script中src的地址去请求api。当服务器接口http://localhost:8080/接收到此请求的时候，会接收到callback的名称。
  
这个时候，服务器接收到的callback的值已经被angular修改，第一次请求是angular.callback.\_0，第二次是angular.callback.\_1，以此类推。。。。
  
angular在发送请求之前，埋设一个以此（angular.callback._x）命名的函数，准备接收返回。

angular客户端发起jsonp请求
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){`

var url = &#8216;http://localhost:8080&#8217;;
  
var request = $http.jsonp(url + &#8216;?callback=JSON_CALLBACK&#8217;);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

接收请求的服务器端：
  
当这个callback不为空的时候，说明是jsonp请求，那么服务器会做一个判断
  
`<br />
if (method === 'GET'){<br />
var params = [];<br />
params = url.parse(request.url,true).query;<br />
//debugger;<br />
console.log(params['callback']);`

var callback = params[&#8216;callback&#8217;];
  
}
  
&#8230;
  
if (callback){
  
response.write(&#8216;/\*callback\*/&#8217; + callback + &#8216;(&#8216; + JSON.stringify(responseBody) + &#8216;)&#8217;);
  
}else{
  
response.write(JSON.stringify(responseBody));
  
}

优点：前后端只要配合好，就可以解决烦恼
  
缺点：只支持GET方式请求；错误处理非常麻烦；安全原因
  
jquery和angular的jsonp方式都是一样的模式，也需要服务器配合，并返回对应的结果。
  
客户端发起jsonp请求
  
````

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

```

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

``` 

3：angular的ajax实例
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){<br />
var config = {<br />
method: 'get',<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

以上两种情况下，在浏览器的console都会打出错误信息，内容大致相同：

> XMLHttpRequest cannot load http://localhost:8080/. No &#8216;Access-Control-Allow-Origin&#8217; header is present on the requested resource. Origin &#8216;http://localhost:63342&#8217; is therefore not allowed access.

2：分析
  
错误信息的提示很明确，就是说ajax请求无法完成，因为你不能从原地址http://localhost:63342访问http://localhost:8080/。为什么会出现这种情况呢？因为浏览器为了安全，有一个同源策略。规定了ajax请求的协议、主机名和端口号相同才能进行，否则是无法访问的。

3：解决方法

  * 架设一台跟客户端同一个域名的服务器，让服务器跟其他域名的服务器通讯，返回客户端需要的结果
  * 使用JSONP（json-padding）
  * 使用HTML5的CORS（IE10、IE9只支持简单的GET、POST和OPTIONS方法，其他的DELETE/PUT等都不支持，真正支持的只有IE11和其他现代浏览器）
  * 使用代理服务器

第一种，需要假设一台专门请求其他域名的服务器来进行。
  
客户端请求发给这台服务器，服务器通过RPC或者SOAP或者SOCKET等方式跟其他域名下的接口进行通讯，等请求完成后返回给客户端。
  
优点：可靠，可以返回结果和错误。
  
缺点：耗费资源，需要专人编写通讯代码并维护服务器运转。
  
代码我就不举例了，这个需要api服务器和你新加的服务器之间约定好协议，共同完成。

第二种，JSONP，采用客户端和服务器端同时修改代码解决
  
先说angular的jsonp（客户端）：
  
当angular的$http.jsonp()发生的时候，angular会在客户端页面中放置,注意这里的JSON_CALLBACK，不能随意改动。
  
当请求类型为jsonp的时候，实际上客户端并没有去请求ajax，而是根据script中src的地址去请求api。当服务器接口http://localhost:8080/接收到此请求的时候，会接收到callback的名称。
  
这个时候，服务器接收到的callback的值已经被angular修改，第一次请求是angular.callback.\_0，第二次是angular.callback.\_1，以此类推。。。。
  
angular在发送请求之前，埋设一个以此（angular.callback._x）命名的函数，准备接收返回。

angular客户端发起jsonp请求
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){`

var url = &#8216;http://localhost:8080&#8217;;
  
var request = $http.jsonp(url + &#8216;?callback=JSON_CALLBACK&#8217;);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

接收请求的服务器端：
  
当这个callback不为空的时候，说明是jsonp请求，那么服务器会做一个判断
  
`<br />
if (method === 'GET'){<br />
var params = [];<br />
params = url.parse(request.url,true).query;<br />
//debugger;<br />
console.log(params['callback']);`

var callback = params[&#8216;callback&#8217;];
  
}
  
&#8230;
  
if (callback){
  
response.write(&#8216;/\*callback\*/&#8217; + callback + &#8216;(&#8216; + JSON.stringify(responseBody) + &#8216;)&#8217;);
  
}else{
  
response.write(JSON.stringify(responseBody));
  
}

优点：前后端只要配合好，就可以解决烦恼
  
缺点：只支持GET方式请求；错误处理非常麻烦；安全原因
  
jquery和angular的jsonp方式都是一样的模式，也需要服务器配合，并返回对应的结果。
  
客户端发起jsonp请求
  
```` 

服务器端处理
  
`````

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

```

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

``` 

3：angular的ajax实例
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){<br />
var config = {<br />
method: 'get',<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

以上两种情况下，在浏览器的console都会打出错误信息，内容大致相同：

> XMLHttpRequest cannot load http://localhost:8080/. No &#8216;Access-Control-Allow-Origin&#8217; header is present on the requested resource. Origin &#8216;http://localhost:63342&#8217; is therefore not allowed access.

2：分析
  
错误信息的提示很明确，就是说ajax请求无法完成，因为你不能从原地址http://localhost:63342访问http://localhost:8080/。为什么会出现这种情况呢？因为浏览器为了安全，有一个同源策略。规定了ajax请求的协议、主机名和端口号相同才能进行，否则是无法访问的。

3：解决方法

  * 架设一台跟客户端同一个域名的服务器，让服务器跟其他域名的服务器通讯，返回客户端需要的结果
  * 使用JSONP（json-padding）
  * 使用HTML5的CORS（IE10、IE9只支持简单的GET、POST和OPTIONS方法，其他的DELETE/PUT等都不支持，真正支持的只有IE11和其他现代浏览器）
  * 使用代理服务器

第一种，需要假设一台专门请求其他域名的服务器来进行。
  
客户端请求发给这台服务器，服务器通过RPC或者SOAP或者SOCKET等方式跟其他域名下的接口进行通讯，等请求完成后返回给客户端。
  
优点：可靠，可以返回结果和错误。
  
缺点：耗费资源，需要专人编写通讯代码并维护服务器运转。
  
代码我就不举例了，这个需要api服务器和你新加的服务器之间约定好协议，共同完成。

第二种，JSONP，采用客户端和服务器端同时修改代码解决
  
先说angular的jsonp（客户端）：
  
当angular的$http.jsonp()发生的时候，angular会在客户端页面中放置,注意这里的JSON_CALLBACK，不能随意改动。
  
当请求类型为jsonp的时候，实际上客户端并没有去请求ajax，而是根据script中src的地址去请求api。当服务器接口http://localhost:8080/接收到此请求的时候，会接收到callback的名称。
  
这个时候，服务器接收到的callback的值已经被angular修改，第一次请求是angular.callback.\_0，第二次是angular.callback.\_1，以此类推。。。。
  
angular在发送请求之前，埋设一个以此（angular.callback._x）命名的函数，准备接收返回。

angular客户端发起jsonp请求
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){`

var url = &#8216;http://localhost:8080&#8217;;
  
var request = $http.jsonp(url + &#8216;?callback=JSON_CALLBACK&#8217;);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

接收请求的服务器端：
  
当这个callback不为空的时候，说明是jsonp请求，那么服务器会做一个判断
  
`<br />
if (method === 'GET'){<br />
var params = [];<br />
params = url.parse(request.url,true).query;<br />
//debugger;<br />
console.log(params['callback']);`

var callback = params[&#8216;callback&#8217;];
  
}
  
&#8230;
  
if (callback){
  
response.write(&#8216;/\*callback\*/&#8217; + callback + &#8216;(&#8216; + JSON.stringify(responseBody) + &#8216;)&#8217;);
  
}else{
  
response.write(JSON.stringify(responseBody));
  
}

优点：前后端只要配合好，就可以解决烦恼
  
缺点：只支持GET方式请求；错误处理非常麻烦；安全原因
  
jquery和angular的jsonp方式都是一样的模式，也需要服务器配合，并返回对应的结果。
  
客户端发起jsonp请求
  
````

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

```

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

``` 

3：angular的ajax实例
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){<br />
var config = {<br />
method: 'get',<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

以上两种情况下，在浏览器的console都会打出错误信息，内容大致相同：

> XMLHttpRequest cannot load http://localhost:8080/. No &#8216;Access-Control-Allow-Origin&#8217; header is present on the requested resource. Origin &#8216;http://localhost:63342&#8217; is therefore not allowed access.

2：分析
  
错误信息的提示很明确，就是说ajax请求无法完成，因为你不能从原地址http://localhost:63342访问http://localhost:8080/。为什么会出现这种情况呢？因为浏览器为了安全，有一个同源策略。规定了ajax请求的协议、主机名和端口号相同才能进行，否则是无法访问的。

3：解决方法

  * 架设一台跟客户端同一个域名的服务器，让服务器跟其他域名的服务器通讯，返回客户端需要的结果
  * 使用JSONP（json-padding）
  * 使用HTML5的CORS（IE10、IE9只支持简单的GET、POST和OPTIONS方法，其他的DELETE/PUT等都不支持，真正支持的只有IE11和其他现代浏览器）
  * 使用代理服务器

第一种，需要假设一台专门请求其他域名的服务器来进行。
  
客户端请求发给这台服务器，服务器通过RPC或者SOAP或者SOCKET等方式跟其他域名下的接口进行通讯，等请求完成后返回给客户端。
  
优点：可靠，可以返回结果和错误。
  
缺点：耗费资源，需要专人编写通讯代码并维护服务器运转。
  
代码我就不举例了，这个需要api服务器和你新加的服务器之间约定好协议，共同完成。

第二种，JSONP，采用客户端和服务器端同时修改代码解决
  
先说angular的jsonp（客户端）：
  
当angular的$http.jsonp()发生的时候，angular会在客户端页面中放置,注意这里的JSON_CALLBACK，不能随意改动。
  
当请求类型为jsonp的时候，实际上客户端并没有去请求ajax，而是根据script中src的地址去请求api。当服务器接口http://localhost:8080/接收到此请求的时候，会接收到callback的名称。
  
这个时候，服务器接收到的callback的值已经被angular修改，第一次请求是angular.callback.\_0，第二次是angular.callback.\_1，以此类推。。。。
  
angular在发送请求之前，埋设一个以此（angular.callback._x）命名的函数，准备接收返回。

angular客户端发起jsonp请求
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){`

var url = &#8216;http://localhost:8080&#8217;;
  
var request = $http.jsonp(url + &#8216;?callback=JSON_CALLBACK&#8217;);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

接收请求的服务器端：
  
当这个callback不为空的时候，说明是jsonp请求，那么服务器会做一个判断
  
`<br />
if (method === 'GET'){<br />
var params = [];<br />
params = url.parse(request.url,true).query;<br />
//debugger;<br />
console.log(params['callback']);`

var callback = params[&#8216;callback&#8217;];
  
}
  
&#8230;
  
if (callback){
  
response.write(&#8216;/\*callback\*/&#8217; + callback + &#8216;(&#8216; + JSON.stringify(responseBody) + &#8216;)&#8217;);
  
}else{
  
response.write(JSON.stringify(responseBody));
  
}

优点：前后端只要配合好，就可以解决烦恼
  
缺点：只支持GET方式请求；错误处理非常麻烦；安全原因
  
jquery和angular的jsonp方式都是一样的模式，也需要服务器配合，并返回对应的结果。
  
客户端发起jsonp请求
  
```` 

服务器端处理
  
````` 

第三种方式：采用HTML5的CORS
  
原理，就是w3c官方出品的方式，客户端正常写ajax请求，服务器端需要修改服务器的配置
  
`<br />
var config = {<br />
method: 'get',<br />
//url: 'http://localhost:1337/localhost:8080'<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})

服务器端需要修改，这里的服务器修改包含两方面的含义
  
1：修改服务器的返回代码
  
2：修改服务器的配置（apache、nginx或者tomcat等）

对于修改代码，就是在response中的setHeader(&#8216;Access-Control-Allow-Origin&#8217;, &#8216;http://localhost:63342&#8217;)即可。
  
``````

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

```

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

``` 

3：angular的ajax实例
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){<br />
var config = {<br />
method: 'get',<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

以上两种情况下，在浏览器的console都会打出错误信息，内容大致相同：

> XMLHttpRequest cannot load http://localhost:8080/. No &#8216;Access-Control-Allow-Origin&#8217; header is present on the requested resource. Origin &#8216;http://localhost:63342&#8217; is therefore not allowed access.

2：分析
  
错误信息的提示很明确，就是说ajax请求无法完成，因为你不能从原地址http://localhost:63342访问http://localhost:8080/。为什么会出现这种情况呢？因为浏览器为了安全，有一个同源策略。规定了ajax请求的协议、主机名和端口号相同才能进行，否则是无法访问的。

3：解决方法

  * 架设一台跟客户端同一个域名的服务器，让服务器跟其他域名的服务器通讯，返回客户端需要的结果
  * 使用JSONP（json-padding）
  * 使用HTML5的CORS（IE10、IE9只支持简单的GET、POST和OPTIONS方法，其他的DELETE/PUT等都不支持，真正支持的只有IE11和其他现代浏览器）
  * 使用代理服务器

第一种，需要假设一台专门请求其他域名的服务器来进行。
  
客户端请求发给这台服务器，服务器通过RPC或者SOAP或者SOCKET等方式跟其他域名下的接口进行通讯，等请求完成后返回给客户端。
  
优点：可靠，可以返回结果和错误。
  
缺点：耗费资源，需要专人编写通讯代码并维护服务器运转。
  
代码我就不举例了，这个需要api服务器和你新加的服务器之间约定好协议，共同完成。

第二种，JSONP，采用客户端和服务器端同时修改代码解决
  
先说angular的jsonp（客户端）：
  
当angular的$http.jsonp()发生的时候，angular会在客户端页面中放置,注意这里的JSON_CALLBACK，不能随意改动。
  
当请求类型为jsonp的时候，实际上客户端并没有去请求ajax，而是根据script中src的地址去请求api。当服务器接口http://localhost:8080/接收到此请求的时候，会接收到callback的名称。
  
这个时候，服务器接收到的callback的值已经被angular修改，第一次请求是angular.callback.\_0，第二次是angular.callback.\_1，以此类推。。。。
  
angular在发送请求之前，埋设一个以此（angular.callback._x）命名的函数，准备接收返回。

angular客户端发起jsonp请求
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){`

var url = &#8216;http://localhost:8080&#8217;;
  
var request = $http.jsonp(url + &#8216;?callback=JSON_CALLBACK&#8217;);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

接收请求的服务器端：
  
当这个callback不为空的时候，说明是jsonp请求，那么服务器会做一个判断
  
`<br />
if (method === 'GET'){<br />
var params = [];<br />
params = url.parse(request.url,true).query;<br />
//debugger;<br />
console.log(params['callback']);`

var callback = params[&#8216;callback&#8217;];
  
}
  
&#8230;
  
if (callback){
  
response.write(&#8216;/\*callback\*/&#8217; + callback + &#8216;(&#8216; + JSON.stringify(responseBody) + &#8216;)&#8217;);
  
}else{
  
response.write(JSON.stringify(responseBody));
  
}

优点：前后端只要配合好，就可以解决烦恼
  
缺点：只支持GET方式请求；错误处理非常麻烦；安全原因
  
jquery和angular的jsonp方式都是一样的模式，也需要服务器配合，并返回对应的结果。
  
客户端发起jsonp请求
  
````

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

```

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

``` 

3：angular的ajax实例
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){<br />
var config = {<br />
method: 'get',<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

以上两种情况下，在浏览器的console都会打出错误信息，内容大致相同：

> XMLHttpRequest cannot load http://localhost:8080/. No &#8216;Access-Control-Allow-Origin&#8217; header is present on the requested resource. Origin &#8216;http://localhost:63342&#8217; is therefore not allowed access.

2：分析
  
错误信息的提示很明确，就是说ajax请求无法完成，因为你不能从原地址http://localhost:63342访问http://localhost:8080/。为什么会出现这种情况呢？因为浏览器为了安全，有一个同源策略。规定了ajax请求的协议、主机名和端口号相同才能进行，否则是无法访问的。

3：解决方法

  * 架设一台跟客户端同一个域名的服务器，让服务器跟其他域名的服务器通讯，返回客户端需要的结果
  * 使用JSONP（json-padding）
  * 使用HTML5的CORS（IE10、IE9只支持简单的GET、POST和OPTIONS方法，其他的DELETE/PUT等都不支持，真正支持的只有IE11和其他现代浏览器）
  * 使用代理服务器

第一种，需要假设一台专门请求其他域名的服务器来进行。
  
客户端请求发给这台服务器，服务器通过RPC或者SOAP或者SOCKET等方式跟其他域名下的接口进行通讯，等请求完成后返回给客户端。
  
优点：可靠，可以返回结果和错误。
  
缺点：耗费资源，需要专人编写通讯代码并维护服务器运转。
  
代码我就不举例了，这个需要api服务器和你新加的服务器之间约定好协议，共同完成。

第二种，JSONP，采用客户端和服务器端同时修改代码解决
  
先说angular的jsonp（客户端）：
  
当angular的$http.jsonp()发生的时候，angular会在客户端页面中放置,注意这里的JSON_CALLBACK，不能随意改动。
  
当请求类型为jsonp的时候，实际上客户端并没有去请求ajax，而是根据script中src的地址去请求api。当服务器接口http://localhost:8080/接收到此请求的时候，会接收到callback的名称。
  
这个时候，服务器接收到的callback的值已经被angular修改，第一次请求是angular.callback.\_0，第二次是angular.callback.\_1，以此类推。。。。
  
angular在发送请求之前，埋设一个以此（angular.callback._x）命名的函数，准备接收返回。

angular客户端发起jsonp请求
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){`

var url = &#8216;http://localhost:8080&#8217;;
  
var request = $http.jsonp(url + &#8216;?callback=JSON_CALLBACK&#8217;);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

接收请求的服务器端：
  
当这个callback不为空的时候，说明是jsonp请求，那么服务器会做一个判断
  
`<br />
if (method === 'GET'){<br />
var params = [];<br />
params = url.parse(request.url,true).query;<br />
//debugger;<br />
console.log(params['callback']);`

var callback = params[&#8216;callback&#8217;];
  
}
  
&#8230;
  
if (callback){
  
response.write(&#8216;/\*callback\*/&#8217; + callback + &#8216;(&#8216; + JSON.stringify(responseBody) + &#8216;)&#8217;);
  
}else{
  
response.write(JSON.stringify(responseBody));
  
}

优点：前后端只要配合好，就可以解决烦恼
  
缺点：只支持GET方式请求；错误处理非常麻烦；安全原因
  
jquery和angular的jsonp方式都是一样的模式，也需要服务器配合，并返回对应的结果。
  
客户端发起jsonp请求
  
```` 

服务器端处理
  
`````

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

```

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

``` 

3：angular的ajax实例
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){<br />
var config = {<br />
method: 'get',<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

以上两种情况下，在浏览器的console都会打出错误信息，内容大致相同：

> XMLHttpRequest cannot load http://localhost:8080/. No &#8216;Access-Control-Allow-Origin&#8217; header is present on the requested resource. Origin &#8216;http://localhost:63342&#8217; is therefore not allowed access.

2：分析
  
错误信息的提示很明确，就是说ajax请求无法完成，因为你不能从原地址http://localhost:63342访问http://localhost:8080/。为什么会出现这种情况呢？因为浏览器为了安全，有一个同源策略。规定了ajax请求的协议、主机名和端口号相同才能进行，否则是无法访问的。

3：解决方法

  * 架设一台跟客户端同一个域名的服务器，让服务器跟其他域名的服务器通讯，返回客户端需要的结果
  * 使用JSONP（json-padding）
  * 使用HTML5的CORS（IE10、IE9只支持简单的GET、POST和OPTIONS方法，其他的DELETE/PUT等都不支持，真正支持的只有IE11和其他现代浏览器）
  * 使用代理服务器

第一种，需要假设一台专门请求其他域名的服务器来进行。
  
客户端请求发给这台服务器，服务器通过RPC或者SOAP或者SOCKET等方式跟其他域名下的接口进行通讯，等请求完成后返回给客户端。
  
优点：可靠，可以返回结果和错误。
  
缺点：耗费资源，需要专人编写通讯代码并维护服务器运转。
  
代码我就不举例了，这个需要api服务器和你新加的服务器之间约定好协议，共同完成。

第二种，JSONP，采用客户端和服务器端同时修改代码解决
  
先说angular的jsonp（客户端）：
  
当angular的$http.jsonp()发生的时候，angular会在客户端页面中放置,注意这里的JSON_CALLBACK，不能随意改动。
  
当请求类型为jsonp的时候，实际上客户端并没有去请求ajax，而是根据script中src的地址去请求api。当服务器接口http://localhost:8080/接收到此请求的时候，会接收到callback的名称。
  
这个时候，服务器接收到的callback的值已经被angular修改，第一次请求是angular.callback.\_0，第二次是angular.callback.\_1，以此类推。。。。
  
angular在发送请求之前，埋设一个以此（angular.callback._x）命名的函数，准备接收返回。

angular客户端发起jsonp请求
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){`

var url = &#8216;http://localhost:8080&#8217;;
  
var request = $http.jsonp(url + &#8216;?callback=JSON_CALLBACK&#8217;);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

接收请求的服务器端：
  
当这个callback不为空的时候，说明是jsonp请求，那么服务器会做一个判断
  
`<br />
if (method === 'GET'){<br />
var params = [];<br />
params = url.parse(request.url,true).query;<br />
//debugger;<br />
console.log(params['callback']);`

var callback = params[&#8216;callback&#8217;];
  
}
  
&#8230;
  
if (callback){
  
response.write(&#8216;/\*callback\*/&#8217; + callback + &#8216;(&#8216; + JSON.stringify(responseBody) + &#8216;)&#8217;);
  
}else{
  
response.write(JSON.stringify(responseBody));
  
}

优点：前后端只要配合好，就可以解决烦恼
  
缺点：只支持GET方式请求；错误处理非常麻烦；安全原因
  
jquery和angular的jsonp方式都是一样的模式，也需要服务器配合，并返回对应的结果。
  
客户端发起jsonp请求
  
````

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

```

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

``` 

3：angular的ajax实例
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){<br />
var config = {<br />
method: 'get',<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

以上两种情况下，在浏览器的console都会打出错误信息，内容大致相同：

> XMLHttpRequest cannot load http://localhost:8080/. No &#8216;Access-Control-Allow-Origin&#8217; header is present on the requested resource. Origin &#8216;http://localhost:63342&#8217; is therefore not allowed access.

2：分析
  
错误信息的提示很明确，就是说ajax请求无法完成，因为你不能从原地址http://localhost:63342访问http://localhost:8080/。为什么会出现这种情况呢？因为浏览器为了安全，有一个同源策略。规定了ajax请求的协议、主机名和端口号相同才能进行，否则是无法访问的。

3：解决方法

  * 架设一台跟客户端同一个域名的服务器，让服务器跟其他域名的服务器通讯，返回客户端需要的结果
  * 使用JSONP（json-padding）
  * 使用HTML5的CORS（IE10、IE9只支持简单的GET、POST和OPTIONS方法，其他的DELETE/PUT等都不支持，真正支持的只有IE11和其他现代浏览器）
  * 使用代理服务器

第一种，需要假设一台专门请求其他域名的服务器来进行。
  
客户端请求发给这台服务器，服务器通过RPC或者SOAP或者SOCKET等方式跟其他域名下的接口进行通讯，等请求完成后返回给客户端。
  
优点：可靠，可以返回结果和错误。
  
缺点：耗费资源，需要专人编写通讯代码并维护服务器运转。
  
代码我就不举例了，这个需要api服务器和你新加的服务器之间约定好协议，共同完成。

第二种，JSONP，采用客户端和服务器端同时修改代码解决
  
先说angular的jsonp（客户端）：
  
当angular的$http.jsonp()发生的时候，angular会在客户端页面中放置,注意这里的JSON_CALLBACK，不能随意改动。
  
当请求类型为jsonp的时候，实际上客户端并没有去请求ajax，而是根据script中src的地址去请求api。当服务器接口http://localhost:8080/接收到此请求的时候，会接收到callback的名称。
  
这个时候，服务器接收到的callback的值已经被angular修改，第一次请求是angular.callback.\_0，第二次是angular.callback.\_1，以此类推。。。。
  
angular在发送请求之前，埋设一个以此（angular.callback._x）命名的函数，准备接收返回。

angular客户端发起jsonp请求
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){`

var url = &#8216;http://localhost:8080&#8217;;
  
var request = $http.jsonp(url + &#8216;?callback=JSON_CALLBACK&#8217;);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

接收请求的服务器端：
  
当这个callback不为空的时候，说明是jsonp请求，那么服务器会做一个判断
  
`<br />
if (method === 'GET'){<br />
var params = [];<br />
params = url.parse(request.url,true).query;<br />
//debugger;<br />
console.log(params['callback']);`

var callback = params[&#8216;callback&#8217;];
  
}
  
&#8230;
  
if (callback){
  
response.write(&#8216;/\*callback\*/&#8217; + callback + &#8216;(&#8216; + JSON.stringify(responseBody) + &#8216;)&#8217;);
  
}else{
  
response.write(JSON.stringify(responseBody));
  
}

优点：前后端只要配合好，就可以解决烦恼
  
缺点：只支持GET方式请求；错误处理非常麻烦；安全原因
  
jquery和angular的jsonp方式都是一样的模式，也需要服务器配合，并返回对应的结果。
  
客户端发起jsonp请求
  
```` 

服务器端处理
  
````` 

第三种方式：采用HTML5的CORS
  
原理，就是w3c官方出品的方式，客户端正常写ajax请求，服务器端需要修改服务器的配置
  
`<br />
var config = {<br />
method: 'get',<br />
//url: 'http://localhost:1337/localhost:8080'<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})

服务器端需要修改，这里的服务器修改包含两方面的含义
  
1：修改服务器的返回代码
  
2：修改服务器的配置（apache、nginx或者tomcat等）

对于修改代码，就是在response中的setHeader(&#8216;Access-Control-Allow-Origin&#8217;, &#8216;http://localhost:63342&#8217;)即可。
  
`````` 
  
修改服务器配置，也可以达到目的：这里有个网站，告诉你怎么修改服务器的配置。<a href="http://enable-cors.org/server.html" target="_blank">http://enable-cors.org/server.html</a>
  
这里需要注意，get、post和head请求，这样修改就可以了，属于简单CORS。
  
如果是delete、put、options等非简单的CORS，这样做还远远不够，因为服务器需要进行了2次请求，第一次是探测服务器的OPTIONS请求，属于握手阶段；第二次是真正的请求。有图为证：

<img class="aligncenter size-large wp-image-238" src="http://blog.83096146.com/wp-content/uploads/2016/03/QQ拼音截图未命名-1024x756.png" alt="QQ拼音截图未命名" width="660" height="487" srcset="http://blog.83096146.com/wp-content/uploads/2016/03/QQ拼音截图未命名-300x221.png 300w, http://blog.83096146.com/wp-content/uploads/2016/03/QQ拼音截图未命名-768x567.png 768w, http://blog.83096146.com/wp-content/uploads/2016/03/QQ拼音截图未命名-1024x756.png 1024w, http://blog.83096146.com/wp-content/uploads/2016/03/QQ拼音截图未命名.png 1190w" sizes="(max-width: 660px) 100vw, 660px" />

```````

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

```

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

``` 

3：angular的ajax实例
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){<br />
var config = {<br />
method: 'get',<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

以上两种情况下，在浏览器的console都会打出错误信息，内容大致相同：

> XMLHttpRequest cannot load http://localhost:8080/. No &#8216;Access-Control-Allow-Origin&#8217; header is present on the requested resource. Origin &#8216;http://localhost:63342&#8217; is therefore not allowed access.

2：分析
  
错误信息的提示很明确，就是说ajax请求无法完成，因为你不能从原地址http://localhost:63342访问http://localhost:8080/。为什么会出现这种情况呢？因为浏览器为了安全，有一个同源策略。规定了ajax请求的协议、主机名和端口号相同才能进行，否则是无法访问的。

3：解决方法

  * 架设一台跟客户端同一个域名的服务器，让服务器跟其他域名的服务器通讯，返回客户端需要的结果
  * 使用JSONP（json-padding）
  * 使用HTML5的CORS（IE10、IE9只支持简单的GET、POST和OPTIONS方法，其他的DELETE/PUT等都不支持，真正支持的只有IE11和其他现代浏览器）
  * 使用代理服务器

第一种，需要假设一台专门请求其他域名的服务器来进行。
  
客户端请求发给这台服务器，服务器通过RPC或者SOAP或者SOCKET等方式跟其他域名下的接口进行通讯，等请求完成后返回给客户端。
  
优点：可靠，可以返回结果和错误。
  
缺点：耗费资源，需要专人编写通讯代码并维护服务器运转。
  
代码我就不举例了，这个需要api服务器和你新加的服务器之间约定好协议，共同完成。

第二种，JSONP，采用客户端和服务器端同时修改代码解决
  
先说angular的jsonp（客户端）：
  
当angular的$http.jsonp()发生的时候，angular会在客户端页面中放置,注意这里的JSON_CALLBACK，不能随意改动。
  
当请求类型为jsonp的时候，实际上客户端并没有去请求ajax，而是根据script中src的地址去请求api。当服务器接口http://localhost:8080/接收到此请求的时候，会接收到callback的名称。
  
这个时候，服务器接收到的callback的值已经被angular修改，第一次请求是angular.callback.\_0，第二次是angular.callback.\_1，以此类推。。。。
  
angular在发送请求之前，埋设一个以此（angular.callback._x）命名的函数，准备接收返回。

angular客户端发起jsonp请求
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){`

var url = &#8216;http://localhost:8080&#8217;;
  
var request = $http.jsonp(url + &#8216;?callback=JSON_CALLBACK&#8217;);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

接收请求的服务器端：
  
当这个callback不为空的时候，说明是jsonp请求，那么服务器会做一个判断
  
`<br />
if (method === 'GET'){<br />
var params = [];<br />
params = url.parse(request.url,true).query;<br />
//debugger;<br />
console.log(params['callback']);`

var callback = params[&#8216;callback&#8217;];
  
}
  
&#8230;
  
if (callback){
  
response.write(&#8216;/\*callback\*/&#8217; + callback + &#8216;(&#8216; + JSON.stringify(responseBody) + &#8216;)&#8217;);
  
}else{
  
response.write(JSON.stringify(responseBody));
  
}

优点：前后端只要配合好，就可以解决烦恼
  
缺点：只支持GET方式请求；错误处理非常麻烦；安全原因
  
jquery和angular的jsonp方式都是一样的模式，也需要服务器配合，并返回对应的结果。
  
客户端发起jsonp请求
  
````

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

```

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

``` 

3：angular的ajax实例
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){<br />
var config = {<br />
method: 'get',<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

以上两种情况下，在浏览器的console都会打出错误信息，内容大致相同：

> XMLHttpRequest cannot load http://localhost:8080/. No &#8216;Access-Control-Allow-Origin&#8217; header is present on the requested resource. Origin &#8216;http://localhost:63342&#8217; is therefore not allowed access.

2：分析
  
错误信息的提示很明确，就是说ajax请求无法完成，因为你不能从原地址http://localhost:63342访问http://localhost:8080/。为什么会出现这种情况呢？因为浏览器为了安全，有一个同源策略。规定了ajax请求的协议、主机名和端口号相同才能进行，否则是无法访问的。

3：解决方法

  * 架设一台跟客户端同一个域名的服务器，让服务器跟其他域名的服务器通讯，返回客户端需要的结果
  * 使用JSONP（json-padding）
  * 使用HTML5的CORS（IE10、IE9只支持简单的GET、POST和OPTIONS方法，其他的DELETE/PUT等都不支持，真正支持的只有IE11和其他现代浏览器）
  * 使用代理服务器

第一种，需要假设一台专门请求其他域名的服务器来进行。
  
客户端请求发给这台服务器，服务器通过RPC或者SOAP或者SOCKET等方式跟其他域名下的接口进行通讯，等请求完成后返回给客户端。
  
优点：可靠，可以返回结果和错误。
  
缺点：耗费资源，需要专人编写通讯代码并维护服务器运转。
  
代码我就不举例了，这个需要api服务器和你新加的服务器之间约定好协议，共同完成。

第二种，JSONP，采用客户端和服务器端同时修改代码解决
  
先说angular的jsonp（客户端）：
  
当angular的$http.jsonp()发生的时候，angular会在客户端页面中放置,注意这里的JSON_CALLBACK，不能随意改动。
  
当请求类型为jsonp的时候，实际上客户端并没有去请求ajax，而是根据script中src的地址去请求api。当服务器接口http://localhost:8080/接收到此请求的时候，会接收到callback的名称。
  
这个时候，服务器接收到的callback的值已经被angular修改，第一次请求是angular.callback.\_0，第二次是angular.callback.\_1，以此类推。。。。
  
angular在发送请求之前，埋设一个以此（angular.callback._x）命名的函数，准备接收返回。

angular客户端发起jsonp请求
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){`

var url = &#8216;http://localhost:8080&#8217;;
  
var request = $http.jsonp(url + &#8216;?callback=JSON_CALLBACK&#8217;);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

接收请求的服务器端：
  
当这个callback不为空的时候，说明是jsonp请求，那么服务器会做一个判断
  
`<br />
if (method === 'GET'){<br />
var params = [];<br />
params = url.parse(request.url,true).query;<br />
//debugger;<br />
console.log(params['callback']);`

var callback = params[&#8216;callback&#8217;];
  
}
  
&#8230;
  
if (callback){
  
response.write(&#8216;/\*callback\*/&#8217; + callback + &#8216;(&#8216; + JSON.stringify(responseBody) + &#8216;)&#8217;);
  
}else{
  
response.write(JSON.stringify(responseBody));
  
}

优点：前后端只要配合好，就可以解决烦恼
  
缺点：只支持GET方式请求；错误处理非常麻烦；安全原因
  
jquery和angular的jsonp方式都是一样的模式，也需要服务器配合，并返回对应的结果。
  
客户端发起jsonp请求
  
```` 

服务器端处理
  
`````

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

```

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

``` 

3：angular的ajax实例
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){<br />
var config = {<br />
method: 'get',<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

以上两种情况下，在浏览器的console都会打出错误信息，内容大致相同：

> XMLHttpRequest cannot load http://localhost:8080/. No &#8216;Access-Control-Allow-Origin&#8217; header is present on the requested resource. Origin &#8216;http://localhost:63342&#8217; is therefore not allowed access.

2：分析
  
错误信息的提示很明确，就是说ajax请求无法完成，因为你不能从原地址http://localhost:63342访问http://localhost:8080/。为什么会出现这种情况呢？因为浏览器为了安全，有一个同源策略。规定了ajax请求的协议、主机名和端口号相同才能进行，否则是无法访问的。

3：解决方法

  * 架设一台跟客户端同一个域名的服务器，让服务器跟其他域名的服务器通讯，返回客户端需要的结果
  * 使用JSONP（json-padding）
  * 使用HTML5的CORS（IE10、IE9只支持简单的GET、POST和OPTIONS方法，其他的DELETE/PUT等都不支持，真正支持的只有IE11和其他现代浏览器）
  * 使用代理服务器

第一种，需要假设一台专门请求其他域名的服务器来进行。
  
客户端请求发给这台服务器，服务器通过RPC或者SOAP或者SOCKET等方式跟其他域名下的接口进行通讯，等请求完成后返回给客户端。
  
优点：可靠，可以返回结果和错误。
  
缺点：耗费资源，需要专人编写通讯代码并维护服务器运转。
  
代码我就不举例了，这个需要api服务器和你新加的服务器之间约定好协议，共同完成。

第二种，JSONP，采用客户端和服务器端同时修改代码解决
  
先说angular的jsonp（客户端）：
  
当angular的$http.jsonp()发生的时候，angular会在客户端页面中放置,注意这里的JSON_CALLBACK，不能随意改动。
  
当请求类型为jsonp的时候，实际上客户端并没有去请求ajax，而是根据script中src的地址去请求api。当服务器接口http://localhost:8080/接收到此请求的时候，会接收到callback的名称。
  
这个时候，服务器接收到的callback的值已经被angular修改，第一次请求是angular.callback.\_0，第二次是angular.callback.\_1，以此类推。。。。
  
angular在发送请求之前，埋设一个以此（angular.callback._x）命名的函数，准备接收返回。

angular客户端发起jsonp请求
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){`

var url = &#8216;http://localhost:8080&#8217;;
  
var request = $http.jsonp(url + &#8216;?callback=JSON_CALLBACK&#8217;);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

接收请求的服务器端：
  
当这个callback不为空的时候，说明是jsonp请求，那么服务器会做一个判断
  
`<br />
if (method === 'GET'){<br />
var params = [];<br />
params = url.parse(request.url,true).query;<br />
//debugger;<br />
console.log(params['callback']);`

var callback = params[&#8216;callback&#8217;];
  
}
  
&#8230;
  
if (callback){
  
response.write(&#8216;/\*callback\*/&#8217; + callback + &#8216;(&#8216; + JSON.stringify(responseBody) + &#8216;)&#8217;);
  
}else{
  
response.write(JSON.stringify(responseBody));
  
}

优点：前后端只要配合好，就可以解决烦恼
  
缺点：只支持GET方式请求；错误处理非常麻烦；安全原因
  
jquery和angular的jsonp方式都是一样的模式，也需要服务器配合，并返回对应的结果。
  
客户端发起jsonp请求
  
````

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

```

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

``` 

3：angular的ajax实例
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){<br />
var config = {<br />
method: 'get',<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

以上两种情况下，在浏览器的console都会打出错误信息，内容大致相同：

> XMLHttpRequest cannot load http://localhost:8080/. No &#8216;Access-Control-Allow-Origin&#8217; header is present on the requested resource. Origin &#8216;http://localhost:63342&#8217; is therefore not allowed access.

2：分析
  
错误信息的提示很明确，就是说ajax请求无法完成，因为你不能从原地址http://localhost:63342访问http://localhost:8080/。为什么会出现这种情况呢？因为浏览器为了安全，有一个同源策略。规定了ajax请求的协议、主机名和端口号相同才能进行，否则是无法访问的。

3：解决方法

  * 架设一台跟客户端同一个域名的服务器，让服务器跟其他域名的服务器通讯，返回客户端需要的结果
  * 使用JSONP（json-padding）
  * 使用HTML5的CORS（IE10、IE9只支持简单的GET、POST和OPTIONS方法，其他的DELETE/PUT等都不支持，真正支持的只有IE11和其他现代浏览器）
  * 使用代理服务器

第一种，需要假设一台专门请求其他域名的服务器来进行。
  
客户端请求发给这台服务器，服务器通过RPC或者SOAP或者SOCKET等方式跟其他域名下的接口进行通讯，等请求完成后返回给客户端。
  
优点：可靠，可以返回结果和错误。
  
缺点：耗费资源，需要专人编写通讯代码并维护服务器运转。
  
代码我就不举例了，这个需要api服务器和你新加的服务器之间约定好协议，共同完成。

第二种，JSONP，采用客户端和服务器端同时修改代码解决
  
先说angular的jsonp（客户端）：
  
当angular的$http.jsonp()发生的时候，angular会在客户端页面中放置,注意这里的JSON_CALLBACK，不能随意改动。
  
当请求类型为jsonp的时候，实际上客户端并没有去请求ajax，而是根据script中src的地址去请求api。当服务器接口http://localhost:8080/接收到此请求的时候，会接收到callback的名称。
  
这个时候，服务器接收到的callback的值已经被angular修改，第一次请求是angular.callback.\_0，第二次是angular.callback.\_1，以此类推。。。。
  
angular在发送请求之前，埋设一个以此（angular.callback._x）命名的函数，准备接收返回。

angular客户端发起jsonp请求
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){`

var url = &#8216;http://localhost:8080&#8217;;
  
var request = $http.jsonp(url + &#8216;?callback=JSON_CALLBACK&#8217;);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

接收请求的服务器端：
  
当这个callback不为空的时候，说明是jsonp请求，那么服务器会做一个判断
  
`<br />
if (method === 'GET'){<br />
var params = [];<br />
params = url.parse(request.url,true).query;<br />
//debugger;<br />
console.log(params['callback']);`

var callback = params[&#8216;callback&#8217;];
  
}
  
&#8230;
  
if (callback){
  
response.write(&#8216;/\*callback\*/&#8217; + callback + &#8216;(&#8216; + JSON.stringify(responseBody) + &#8216;)&#8217;);
  
}else{
  
response.write(JSON.stringify(responseBody));
  
}

优点：前后端只要配合好，就可以解决烦恼
  
缺点：只支持GET方式请求；错误处理非常麻烦；安全原因
  
jquery和angular的jsonp方式都是一样的模式，也需要服务器配合，并返回对应的结果。
  
客户端发起jsonp请求
  
```` 

服务器端处理
  
````` 

第三种方式：采用HTML5的CORS
  
原理，就是w3c官方出品的方式，客户端正常写ajax请求，服务器端需要修改服务器的配置
  
`<br />
var config = {<br />
method: 'get',<br />
//url: 'http://localhost:1337/localhost:8080'<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})

服务器端需要修改，这里的服务器修改包含两方面的含义
  
1：修改服务器的返回代码
  
2：修改服务器的配置（apache、nginx或者tomcat等）

对于修改代码，就是在response中的setHeader(&#8216;Access-Control-Allow-Origin&#8217;, &#8216;http://localhost:63342&#8217;)即可。
  
``````

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

```

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

``` 

3：angular的ajax实例
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){<br />
var config = {<br />
method: 'get',<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

以上两种情况下，在浏览器的console都会打出错误信息，内容大致相同：

> XMLHttpRequest cannot load http://localhost:8080/. No &#8216;Access-Control-Allow-Origin&#8217; header is present on the requested resource. Origin &#8216;http://localhost:63342&#8217; is therefore not allowed access.

2：分析
  
错误信息的提示很明确，就是说ajax请求无法完成，因为你不能从原地址http://localhost:63342访问http://localhost:8080/。为什么会出现这种情况呢？因为浏览器为了安全，有一个同源策略。规定了ajax请求的协议、主机名和端口号相同才能进行，否则是无法访问的。

3：解决方法

  * 架设一台跟客户端同一个域名的服务器，让服务器跟其他域名的服务器通讯，返回客户端需要的结果
  * 使用JSONP（json-padding）
  * 使用HTML5的CORS（IE10、IE9只支持简单的GET、POST和OPTIONS方法，其他的DELETE/PUT等都不支持，真正支持的只有IE11和其他现代浏览器）
  * 使用代理服务器

第一种，需要假设一台专门请求其他域名的服务器来进行。
  
客户端请求发给这台服务器，服务器通过RPC或者SOAP或者SOCKET等方式跟其他域名下的接口进行通讯，等请求完成后返回给客户端。
  
优点：可靠，可以返回结果和错误。
  
缺点：耗费资源，需要专人编写通讯代码并维护服务器运转。
  
代码我就不举例了，这个需要api服务器和你新加的服务器之间约定好协议，共同完成。

第二种，JSONP，采用客户端和服务器端同时修改代码解决
  
先说angular的jsonp（客户端）：
  
当angular的$http.jsonp()发生的时候，angular会在客户端页面中放置,注意这里的JSON_CALLBACK，不能随意改动。
  
当请求类型为jsonp的时候，实际上客户端并没有去请求ajax，而是根据script中src的地址去请求api。当服务器接口http://localhost:8080/接收到此请求的时候，会接收到callback的名称。
  
这个时候，服务器接收到的callback的值已经被angular修改，第一次请求是angular.callback.\_0，第二次是angular.callback.\_1，以此类推。。。。
  
angular在发送请求之前，埋设一个以此（angular.callback._x）命名的函数，准备接收返回。

angular客户端发起jsonp请求
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){`

var url = &#8216;http://localhost:8080&#8217;;
  
var request = $http.jsonp(url + &#8216;?callback=JSON_CALLBACK&#8217;);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

接收请求的服务器端：
  
当这个callback不为空的时候，说明是jsonp请求，那么服务器会做一个判断
  
`<br />
if (method === 'GET'){<br />
var params = [];<br />
params = url.parse(request.url,true).query;<br />
//debugger;<br />
console.log(params['callback']);`

var callback = params[&#8216;callback&#8217;];
  
}
  
&#8230;
  
if (callback){
  
response.write(&#8216;/\*callback\*/&#8217; + callback + &#8216;(&#8216; + JSON.stringify(responseBody) + &#8216;)&#8217;);
  
}else{
  
response.write(JSON.stringify(responseBody));
  
}

优点：前后端只要配合好，就可以解决烦恼
  
缺点：只支持GET方式请求；错误处理非常麻烦；安全原因
  
jquery和angular的jsonp方式都是一样的模式，也需要服务器配合，并返回对应的结果。
  
客户端发起jsonp请求
  
````

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

```

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

``` 

3：angular的ajax实例
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){<br />
var config = {<br />
method: 'get',<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

以上两种情况下，在浏览器的console都会打出错误信息，内容大致相同：

> XMLHttpRequest cannot load http://localhost:8080/. No &#8216;Access-Control-Allow-Origin&#8217; header is present on the requested resource. Origin &#8216;http://localhost:63342&#8217; is therefore not allowed access.

2：分析
  
错误信息的提示很明确，就是说ajax请求无法完成，因为你不能从原地址http://localhost:63342访问http://localhost:8080/。为什么会出现这种情况呢？因为浏览器为了安全，有一个同源策略。规定了ajax请求的协议、主机名和端口号相同才能进行，否则是无法访问的。

3：解决方法

  * 架设一台跟客户端同一个域名的服务器，让服务器跟其他域名的服务器通讯，返回客户端需要的结果
  * 使用JSONP（json-padding）
  * 使用HTML5的CORS（IE10、IE9只支持简单的GET、POST和OPTIONS方法，其他的DELETE/PUT等都不支持，真正支持的只有IE11和其他现代浏览器）
  * 使用代理服务器

第一种，需要假设一台专门请求其他域名的服务器来进行。
  
客户端请求发给这台服务器，服务器通过RPC或者SOAP或者SOCKET等方式跟其他域名下的接口进行通讯，等请求完成后返回给客户端。
  
优点：可靠，可以返回结果和错误。
  
缺点：耗费资源，需要专人编写通讯代码并维护服务器运转。
  
代码我就不举例了，这个需要api服务器和你新加的服务器之间约定好协议，共同完成。

第二种，JSONP，采用客户端和服务器端同时修改代码解决
  
先说angular的jsonp（客户端）：
  
当angular的$http.jsonp()发生的时候，angular会在客户端页面中放置,注意这里的JSON_CALLBACK，不能随意改动。
  
当请求类型为jsonp的时候，实际上客户端并没有去请求ajax，而是根据script中src的地址去请求api。当服务器接口http://localhost:8080/接收到此请求的时候，会接收到callback的名称。
  
这个时候，服务器接收到的callback的值已经被angular修改，第一次请求是angular.callback.\_0，第二次是angular.callback.\_1，以此类推。。。。
  
angular在发送请求之前，埋设一个以此（angular.callback._x）命名的函数，准备接收返回。

angular客户端发起jsonp请求
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){`

var url = &#8216;http://localhost:8080&#8217;;
  
var request = $http.jsonp(url + &#8216;?callback=JSON_CALLBACK&#8217;);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

接收请求的服务器端：
  
当这个callback不为空的时候，说明是jsonp请求，那么服务器会做一个判断
  
`<br />
if (method === 'GET'){<br />
var params = [];<br />
params = url.parse(request.url,true).query;<br />
//debugger;<br />
console.log(params['callback']);`

var callback = params[&#8216;callback&#8217;];
  
}
  
&#8230;
  
if (callback){
  
response.write(&#8216;/\*callback\*/&#8217; + callback + &#8216;(&#8216; + JSON.stringify(responseBody) + &#8216;)&#8217;);
  
}else{
  
response.write(JSON.stringify(responseBody));
  
}

优点：前后端只要配合好，就可以解决烦恼
  
缺点：只支持GET方式请求；错误处理非常麻烦；安全原因
  
jquery和angular的jsonp方式都是一样的模式，也需要服务器配合，并返回对应的结果。
  
客户端发起jsonp请求
  
```` 

服务器端处理
  
`````

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

```

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

``` 

3：angular的ajax实例
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){<br />
var config = {<br />
method: 'get',<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

以上两种情况下，在浏览器的console都会打出错误信息，内容大致相同：

> XMLHttpRequest cannot load http://localhost:8080/. No &#8216;Access-Control-Allow-Origin&#8217; header is present on the requested resource. Origin &#8216;http://localhost:63342&#8217; is therefore not allowed access.

2：分析
  
错误信息的提示很明确，就是说ajax请求无法完成，因为你不能从原地址http://localhost:63342访问http://localhost:8080/。为什么会出现这种情况呢？因为浏览器为了安全，有一个同源策略。规定了ajax请求的协议、主机名和端口号相同才能进行，否则是无法访问的。

3：解决方法

  * 架设一台跟客户端同一个域名的服务器，让服务器跟其他域名的服务器通讯，返回客户端需要的结果
  * 使用JSONP（json-padding）
  * 使用HTML5的CORS（IE10、IE9只支持简单的GET、POST和OPTIONS方法，其他的DELETE/PUT等都不支持，真正支持的只有IE11和其他现代浏览器）
  * 使用代理服务器

第一种，需要假设一台专门请求其他域名的服务器来进行。
  
客户端请求发给这台服务器，服务器通过RPC或者SOAP或者SOCKET等方式跟其他域名下的接口进行通讯，等请求完成后返回给客户端。
  
优点：可靠，可以返回结果和错误。
  
缺点：耗费资源，需要专人编写通讯代码并维护服务器运转。
  
代码我就不举例了，这个需要api服务器和你新加的服务器之间约定好协议，共同完成。

第二种，JSONP，采用客户端和服务器端同时修改代码解决
  
先说angular的jsonp（客户端）：
  
当angular的$http.jsonp()发生的时候，angular会在客户端页面中放置,注意这里的JSON_CALLBACK，不能随意改动。
  
当请求类型为jsonp的时候，实际上客户端并没有去请求ajax，而是根据script中src的地址去请求api。当服务器接口http://localhost:8080/接收到此请求的时候，会接收到callback的名称。
  
这个时候，服务器接收到的callback的值已经被angular修改，第一次请求是angular.callback.\_0，第二次是angular.callback.\_1，以此类推。。。。
  
angular在发送请求之前，埋设一个以此（angular.callback._x）命名的函数，准备接收返回。

angular客户端发起jsonp请求
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){`

var url = &#8216;http://localhost:8080&#8217;;
  
var request = $http.jsonp(url + &#8216;?callback=JSON_CALLBACK&#8217;);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

接收请求的服务器端：
  
当这个callback不为空的时候，说明是jsonp请求，那么服务器会做一个判断
  
`<br />
if (method === 'GET'){<br />
var params = [];<br />
params = url.parse(request.url,true).query;<br />
//debugger;<br />
console.log(params['callback']);`

var callback = params[&#8216;callback&#8217;];
  
}
  
&#8230;
  
if (callback){
  
response.write(&#8216;/\*callback\*/&#8217; + callback + &#8216;(&#8216; + JSON.stringify(responseBody) + &#8216;)&#8217;);
  
}else{
  
response.write(JSON.stringify(responseBody));
  
}

优点：前后端只要配合好，就可以解决烦恼
  
缺点：只支持GET方式请求；错误处理非常麻烦；安全原因
  
jquery和angular的jsonp方式都是一样的模式，也需要服务器配合，并返回对应的结果。
  
客户端发起jsonp请求
  
````

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

```

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

``` 

3：angular的ajax实例
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){<br />
var config = {<br />
method: 'get',<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

以上两种情况下，在浏览器的console都会打出错误信息，内容大致相同：

> XMLHttpRequest cannot load http://localhost:8080/. No &#8216;Access-Control-Allow-Origin&#8217; header is present on the requested resource. Origin &#8216;http://localhost:63342&#8217; is therefore not allowed access.

2：分析
  
错误信息的提示很明确，就是说ajax请求无法完成，因为你不能从原地址http://localhost:63342访问http://localhost:8080/。为什么会出现这种情况呢？因为浏览器为了安全，有一个同源策略。规定了ajax请求的协议、主机名和端口号相同才能进行，否则是无法访问的。

3：解决方法

  * 架设一台跟客户端同一个域名的服务器，让服务器跟其他域名的服务器通讯，返回客户端需要的结果
  * 使用JSONP（json-padding）
  * 使用HTML5的CORS（IE10、IE9只支持简单的GET、POST和OPTIONS方法，其他的DELETE/PUT等都不支持，真正支持的只有IE11和其他现代浏览器）
  * 使用代理服务器

第一种，需要假设一台专门请求其他域名的服务器来进行。
  
客户端请求发给这台服务器，服务器通过RPC或者SOAP或者SOCKET等方式跟其他域名下的接口进行通讯，等请求完成后返回给客户端。
  
优点：可靠，可以返回结果和错误。
  
缺点：耗费资源，需要专人编写通讯代码并维护服务器运转。
  
代码我就不举例了，这个需要api服务器和你新加的服务器之间约定好协议，共同完成。

第二种，JSONP，采用客户端和服务器端同时修改代码解决
  
先说angular的jsonp（客户端）：
  
当angular的$http.jsonp()发生的时候，angular会在客户端页面中放置,注意这里的JSON_CALLBACK，不能随意改动。
  
当请求类型为jsonp的时候，实际上客户端并没有去请求ajax，而是根据script中src的地址去请求api。当服务器接口http://localhost:8080/接收到此请求的时候，会接收到callback的名称。
  
这个时候，服务器接收到的callback的值已经被angular修改，第一次请求是angular.callback.\_0，第二次是angular.callback.\_1，以此类推。。。。
  
angular在发送请求之前，埋设一个以此（angular.callback._x）命名的函数，准备接收返回。

angular客户端发起jsonp请求
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){`

var url = &#8216;http://localhost:8080&#8217;;
  
var request = $http.jsonp(url + &#8216;?callback=JSON_CALLBACK&#8217;);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

接收请求的服务器端：
  
当这个callback不为空的时候，说明是jsonp请求，那么服务器会做一个判断
  
`<br />
if (method === 'GET'){<br />
var params = [];<br />
params = url.parse(request.url,true).query;<br />
//debugger;<br />
console.log(params['callback']);`

var callback = params[&#8216;callback&#8217;];
  
}
  
&#8230;
  
if (callback){
  
response.write(&#8216;/\*callback\*/&#8217; + callback + &#8216;(&#8216; + JSON.stringify(responseBody) + &#8216;)&#8217;);
  
}else{
  
response.write(JSON.stringify(responseBody));
  
}

优点：前后端只要配合好，就可以解决烦恼
  
缺点：只支持GET方式请求；错误处理非常麻烦；安全原因
  
jquery和angular的jsonp方式都是一样的模式，也需要服务器配合，并返回对应的结果。
  
客户端发起jsonp请求
  
```` 

服务器端处理
  
````` 

第三种方式：采用HTML5的CORS
  
原理，就是w3c官方出品的方式，客户端正常写ajax请求，服务器端需要修改服务器的配置
  
`<br />
var config = {<br />
method: 'get',<br />
//url: 'http://localhost:1337/localhost:8080'<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})

服务器端需要修改，这里的服务器修改包含两方面的含义
  
1：修改服务器的返回代码
  
2：修改服务器的配置（apache、nginx或者tomcat等）

对于修改代码，就是在response中的setHeader(&#8216;Access-Control-Allow-Origin&#8217;, &#8216;http://localhost:63342&#8217;)即可。
  
`````` 
  
修改服务器配置，也可以达到目的：这里有个网站，告诉你怎么修改服务器的配置。<a href="http://enable-cors.org/server.html" target="_blank">http://enable-cors.org/server.html</a>
  
这里需要注意，get、post和head请求，这样修改就可以了，属于简单CORS。
  
如果是delete、put、options等非简单的CORS，这样做还远远不够，因为服务器需要进行了2次请求，第一次是探测服务器的OPTIONS请求，属于握手阶段；第二次是真正的请求。有图为证：

<img class="aligncenter size-large wp-image-238" src="http://blog.83096146.com/wp-content/uploads/2016/03/QQ拼音截图未命名-1024x756.png" alt="QQ拼音截图未命名" width="660" height="487" srcset="http://blog.83096146.com/wp-content/uploads/2016/03/QQ拼音截图未命名-300x221.png 300w, http://blog.83096146.com/wp-content/uploads/2016/03/QQ拼音截图未命名-768x567.png 768w, http://blog.83096146.com/wp-content/uploads/2016/03/QQ拼音截图未命名-1024x756.png 1024w, http://blog.83096146.com/wp-content/uploads/2016/03/QQ拼音截图未命名.png 1190w" sizes="(max-width: 660px) 100vw, 660px" />

``````` 

缺点：IE支持不好，11以上才完全支持，9的只支持简单的CORS方式，需要进行服务器配置的修改
  
优点：官方出品

第四种方式：架设一台代理服务器，跟第一种类似，但是思想不同
  
原理：架设一台代理服务器，启动代理服务，客户端发送的请求，走代理，返回结果也走代理，这样神不知鬼不觉的就完成了跨域
  
代理服务器可以用nodejs来做（测试），也可以用nginx的反向代理（生产）
  
安装corsproxy：
  
sudo npm install -g corsproxy

启动服务器
  
sudo corsproxy

此服务器启动后，在我本地的访问地址是：http://localhost:1337，客户端的请求路径需要加上此地址。
  
比如你原来的跨域地址是http://localhost:8080，那么走代理的地址应该为：http://localhost:1337/localhost:8080
  
也就是先是代理服务器的地址，然后加上api的域名和端口

`<br />
var config = {<br />
method: 'DELETE',<br />
url: 'http://localhost:1337/localhost:8080'<br />
//url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
});

把服务器的头部定义注释：
  
````````

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

```

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

``` 

3：angular的ajax实例
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){<br />
var config = {<br />
method: 'get',<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

以上两种情况下，在浏览器的console都会打出错误信息，内容大致相同：

> XMLHttpRequest cannot load http://localhost:8080/. No &#8216;Access-Control-Allow-Origin&#8217; header is present on the requested resource. Origin &#8216;http://localhost:63342&#8217; is therefore not allowed access.

2：分析
  
错误信息的提示很明确，就是说ajax请求无法完成，因为你不能从原地址http://localhost:63342访问http://localhost:8080/。为什么会出现这种情况呢？因为浏览器为了安全，有一个同源策略。规定了ajax请求的协议、主机名和端口号相同才能进行，否则是无法访问的。

3：解决方法

  * 架设一台跟客户端同一个域名的服务器，让服务器跟其他域名的服务器通讯，返回客户端需要的结果
  * 使用JSONP（json-padding）
  * 使用HTML5的CORS（IE10、IE9只支持简单的GET、POST和OPTIONS方法，其他的DELETE/PUT等都不支持，真正支持的只有IE11和其他现代浏览器）
  * 使用代理服务器

第一种，需要假设一台专门请求其他域名的服务器来进行。
  
客户端请求发给这台服务器，服务器通过RPC或者SOAP或者SOCKET等方式跟其他域名下的接口进行通讯，等请求完成后返回给客户端。
  
优点：可靠，可以返回结果和错误。
  
缺点：耗费资源，需要专人编写通讯代码并维护服务器运转。
  
代码我就不举例了，这个需要api服务器和你新加的服务器之间约定好协议，共同完成。

第二种，JSONP，采用客户端和服务器端同时修改代码解决
  
先说angular的jsonp（客户端）：
  
当angular的$http.jsonp()发生的时候，angular会在客户端页面中放置,注意这里的JSON_CALLBACK，不能随意改动。
  
当请求类型为jsonp的时候，实际上客户端并没有去请求ajax，而是根据script中src的地址去请求api。当服务器接口http://localhost:8080/接收到此请求的时候，会接收到callback的名称。
  
这个时候，服务器接收到的callback的值已经被angular修改，第一次请求是angular.callback.\_0，第二次是angular.callback.\_1，以此类推。。。。
  
angular在发送请求之前，埋设一个以此（angular.callback._x）命名的函数，准备接收返回。

angular客户端发起jsonp请求
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){`

var url = &#8216;http://localhost:8080&#8217;;
  
var request = $http.jsonp(url + &#8216;?callback=JSON_CALLBACK&#8217;);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

接收请求的服务器端：
  
当这个callback不为空的时候，说明是jsonp请求，那么服务器会做一个判断
  
`<br />
if (method === 'GET'){<br />
var params = [];<br />
params = url.parse(request.url,true).query;<br />
//debugger;<br />
console.log(params['callback']);`

var callback = params[&#8216;callback&#8217;];
  
}
  
&#8230;
  
if (callback){
  
response.write(&#8216;/\*callback\*/&#8217; + callback + &#8216;(&#8216; + JSON.stringify(responseBody) + &#8216;)&#8217;);
  
}else{
  
response.write(JSON.stringify(responseBody));
  
}

优点：前后端只要配合好，就可以解决烦恼
  
缺点：只支持GET方式请求；错误处理非常麻烦；安全原因
  
jquery和angular的jsonp方式都是一样的模式，也需要服务器配合，并返回对应的结果。
  
客户端发起jsonp请求
  
````

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

```

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

``` 

3：angular的ajax实例
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){<br />
var config = {<br />
method: 'get',<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

以上两种情况下，在浏览器的console都会打出错误信息，内容大致相同：

> XMLHttpRequest cannot load http://localhost:8080/. No &#8216;Access-Control-Allow-Origin&#8217; header is present on the requested resource. Origin &#8216;http://localhost:63342&#8217; is therefore not allowed access.

2：分析
  
错误信息的提示很明确，就是说ajax请求无法完成，因为你不能从原地址http://localhost:63342访问http://localhost:8080/。为什么会出现这种情况呢？因为浏览器为了安全，有一个同源策略。规定了ajax请求的协议、主机名和端口号相同才能进行，否则是无法访问的。

3：解决方法

  * 架设一台跟客户端同一个域名的服务器，让服务器跟其他域名的服务器通讯，返回客户端需要的结果
  * 使用JSONP（json-padding）
  * 使用HTML5的CORS（IE10、IE9只支持简单的GET、POST和OPTIONS方法，其他的DELETE/PUT等都不支持，真正支持的只有IE11和其他现代浏览器）
  * 使用代理服务器

第一种，需要假设一台专门请求其他域名的服务器来进行。
  
客户端请求发给这台服务器，服务器通过RPC或者SOAP或者SOCKET等方式跟其他域名下的接口进行通讯，等请求完成后返回给客户端。
  
优点：可靠，可以返回结果和错误。
  
缺点：耗费资源，需要专人编写通讯代码并维护服务器运转。
  
代码我就不举例了，这个需要api服务器和你新加的服务器之间约定好协议，共同完成。

第二种，JSONP，采用客户端和服务器端同时修改代码解决
  
先说angular的jsonp（客户端）：
  
当angular的$http.jsonp()发生的时候，angular会在客户端页面中放置,注意这里的JSON_CALLBACK，不能随意改动。
  
当请求类型为jsonp的时候，实际上客户端并没有去请求ajax，而是根据script中src的地址去请求api。当服务器接口http://localhost:8080/接收到此请求的时候，会接收到callback的名称。
  
这个时候，服务器接收到的callback的值已经被angular修改，第一次请求是angular.callback.\_0，第二次是angular.callback.\_1，以此类推。。。。
  
angular在发送请求之前，埋设一个以此（angular.callback._x）命名的函数，准备接收返回。

angular客户端发起jsonp请求
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){`

var url = &#8216;http://localhost:8080&#8217;;
  
var request = $http.jsonp(url + &#8216;?callback=JSON_CALLBACK&#8217;);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

接收请求的服务器端：
  
当这个callback不为空的时候，说明是jsonp请求，那么服务器会做一个判断
  
`<br />
if (method === 'GET'){<br />
var params = [];<br />
params = url.parse(request.url,true).query;<br />
//debugger;<br />
console.log(params['callback']);`

var callback = params[&#8216;callback&#8217;];
  
}
  
&#8230;
  
if (callback){
  
response.write(&#8216;/\*callback\*/&#8217; + callback + &#8216;(&#8216; + JSON.stringify(responseBody) + &#8216;)&#8217;);
  
}else{
  
response.write(JSON.stringify(responseBody));
  
}

优点：前后端只要配合好，就可以解决烦恼
  
缺点：只支持GET方式请求；错误处理非常麻烦；安全原因
  
jquery和angular的jsonp方式都是一样的模式，也需要服务器配合，并返回对应的结果。
  
客户端发起jsonp请求
  
```` 

服务器端处理
  
`````

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

```

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

``` 

3：angular的ajax实例
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){<br />
var config = {<br />
method: 'get',<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

以上两种情况下，在浏览器的console都会打出错误信息，内容大致相同：

> XMLHttpRequest cannot load http://localhost:8080/. No &#8216;Access-Control-Allow-Origin&#8217; header is present on the requested resource. Origin &#8216;http://localhost:63342&#8217; is therefore not allowed access.

2：分析
  
错误信息的提示很明确，就是说ajax请求无法完成，因为你不能从原地址http://localhost:63342访问http://localhost:8080/。为什么会出现这种情况呢？因为浏览器为了安全，有一个同源策略。规定了ajax请求的协议、主机名和端口号相同才能进行，否则是无法访问的。

3：解决方法

  * 架设一台跟客户端同一个域名的服务器，让服务器跟其他域名的服务器通讯，返回客户端需要的结果
  * 使用JSONP（json-padding）
  * 使用HTML5的CORS（IE10、IE9只支持简单的GET、POST和OPTIONS方法，其他的DELETE/PUT等都不支持，真正支持的只有IE11和其他现代浏览器）
  * 使用代理服务器

第一种，需要假设一台专门请求其他域名的服务器来进行。
  
客户端请求发给这台服务器，服务器通过RPC或者SOAP或者SOCKET等方式跟其他域名下的接口进行通讯，等请求完成后返回给客户端。
  
优点：可靠，可以返回结果和错误。
  
缺点：耗费资源，需要专人编写通讯代码并维护服务器运转。
  
代码我就不举例了，这个需要api服务器和你新加的服务器之间约定好协议，共同完成。

第二种，JSONP，采用客户端和服务器端同时修改代码解决
  
先说angular的jsonp（客户端）：
  
当angular的$http.jsonp()发生的时候，angular会在客户端页面中放置,注意这里的JSON_CALLBACK，不能随意改动。
  
当请求类型为jsonp的时候，实际上客户端并没有去请求ajax，而是根据script中src的地址去请求api。当服务器接口http://localhost:8080/接收到此请求的时候，会接收到callback的名称。
  
这个时候，服务器接收到的callback的值已经被angular修改，第一次请求是angular.callback.\_0，第二次是angular.callback.\_1，以此类推。。。。
  
angular在发送请求之前，埋设一个以此（angular.callback._x）命名的函数，准备接收返回。

angular客户端发起jsonp请求
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){`

var url = &#8216;http://localhost:8080&#8217;;
  
var request = $http.jsonp(url + &#8216;?callback=JSON_CALLBACK&#8217;);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

接收请求的服务器端：
  
当这个callback不为空的时候，说明是jsonp请求，那么服务器会做一个判断
  
`<br />
if (method === 'GET'){<br />
var params = [];<br />
params = url.parse(request.url,true).query;<br />
//debugger;<br />
console.log(params['callback']);`

var callback = params[&#8216;callback&#8217;];
  
}
  
&#8230;
  
if (callback){
  
response.write(&#8216;/\*callback\*/&#8217; + callback + &#8216;(&#8216; + JSON.stringify(responseBody) + &#8216;)&#8217;);
  
}else{
  
response.write(JSON.stringify(responseBody));
  
}

优点：前后端只要配合好，就可以解决烦恼
  
缺点：只支持GET方式请求；错误处理非常麻烦；安全原因
  
jquery和angular的jsonp方式都是一样的模式，也需要服务器配合，并返回对应的结果。
  
客户端发起jsonp请求
  
````

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

```

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

``` 

3：angular的ajax实例
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){<br />
var config = {<br />
method: 'get',<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

以上两种情况下，在浏览器的console都会打出错误信息，内容大致相同：

> XMLHttpRequest cannot load http://localhost:8080/. No &#8216;Access-Control-Allow-Origin&#8217; header is present on the requested resource. Origin &#8216;http://localhost:63342&#8217; is therefore not allowed access.

2：分析
  
错误信息的提示很明确，就是说ajax请求无法完成，因为你不能从原地址http://localhost:63342访问http://localhost:8080/。为什么会出现这种情况呢？因为浏览器为了安全，有一个同源策略。规定了ajax请求的协议、主机名和端口号相同才能进行，否则是无法访问的。

3：解决方法

  * 架设一台跟客户端同一个域名的服务器，让服务器跟其他域名的服务器通讯，返回客户端需要的结果
  * 使用JSONP（json-padding）
  * 使用HTML5的CORS（IE10、IE9只支持简单的GET、POST和OPTIONS方法，其他的DELETE/PUT等都不支持，真正支持的只有IE11和其他现代浏览器）
  * 使用代理服务器

第一种，需要假设一台专门请求其他域名的服务器来进行。
  
客户端请求发给这台服务器，服务器通过RPC或者SOAP或者SOCKET等方式跟其他域名下的接口进行通讯，等请求完成后返回给客户端。
  
优点：可靠，可以返回结果和错误。
  
缺点：耗费资源，需要专人编写通讯代码并维护服务器运转。
  
代码我就不举例了，这个需要api服务器和你新加的服务器之间约定好协议，共同完成。

第二种，JSONP，采用客户端和服务器端同时修改代码解决
  
先说angular的jsonp（客户端）：
  
当angular的$http.jsonp()发生的时候，angular会在客户端页面中放置,注意这里的JSON_CALLBACK，不能随意改动。
  
当请求类型为jsonp的时候，实际上客户端并没有去请求ajax，而是根据script中src的地址去请求api。当服务器接口http://localhost:8080/接收到此请求的时候，会接收到callback的名称。
  
这个时候，服务器接收到的callback的值已经被angular修改，第一次请求是angular.callback.\_0，第二次是angular.callback.\_1，以此类推。。。。
  
angular在发送请求之前，埋设一个以此（angular.callback._x）命名的函数，准备接收返回。

angular客户端发起jsonp请求
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){`

var url = &#8216;http://localhost:8080&#8217;;
  
var request = $http.jsonp(url + &#8216;?callback=JSON_CALLBACK&#8217;);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

接收请求的服务器端：
  
当这个callback不为空的时候，说明是jsonp请求，那么服务器会做一个判断
  
`<br />
if (method === 'GET'){<br />
var params = [];<br />
params = url.parse(request.url,true).query;<br />
//debugger;<br />
console.log(params['callback']);`

var callback = params[&#8216;callback&#8217;];
  
}
  
&#8230;
  
if (callback){
  
response.write(&#8216;/\*callback\*/&#8217; + callback + &#8216;(&#8216; + JSON.stringify(responseBody) + &#8216;)&#8217;);
  
}else{
  
response.write(JSON.stringify(responseBody));
  
}

优点：前后端只要配合好，就可以解决烦恼
  
缺点：只支持GET方式请求；错误处理非常麻烦；安全原因
  
jquery和angular的jsonp方式都是一样的模式，也需要服务器配合，并返回对应的结果。
  
客户端发起jsonp请求
  
```` 

服务器端处理
  
````` 

第三种方式：采用HTML5的CORS
  
原理，就是w3c官方出品的方式，客户端正常写ajax请求，服务器端需要修改服务器的配置
  
`<br />
var config = {<br />
method: 'get',<br />
//url: 'http://localhost:1337/localhost:8080'<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})

服务器端需要修改，这里的服务器修改包含两方面的含义
  
1：修改服务器的返回代码
  
2：修改服务器的配置（apache、nginx或者tomcat等）

对于修改代码，就是在response中的setHeader(&#8216;Access-Control-Allow-Origin&#8217;, &#8216;http://localhost:63342&#8217;)即可。
  
``````

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

```

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

``` 

3：angular的ajax实例
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){<br />
var config = {<br />
method: 'get',<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

以上两种情况下，在浏览器的console都会打出错误信息，内容大致相同：

> XMLHttpRequest cannot load http://localhost:8080/. No &#8216;Access-Control-Allow-Origin&#8217; header is present on the requested resource. Origin &#8216;http://localhost:63342&#8217; is therefore not allowed access.

2：分析
  
错误信息的提示很明确，就是说ajax请求无法完成，因为你不能从原地址http://localhost:63342访问http://localhost:8080/。为什么会出现这种情况呢？因为浏览器为了安全，有一个同源策略。规定了ajax请求的协议、主机名和端口号相同才能进行，否则是无法访问的。

3：解决方法

  * 架设一台跟客户端同一个域名的服务器，让服务器跟其他域名的服务器通讯，返回客户端需要的结果
  * 使用JSONP（json-padding）
  * 使用HTML5的CORS（IE10、IE9只支持简单的GET、POST和OPTIONS方法，其他的DELETE/PUT等都不支持，真正支持的只有IE11和其他现代浏览器）
  * 使用代理服务器

第一种，需要假设一台专门请求其他域名的服务器来进行。
  
客户端请求发给这台服务器，服务器通过RPC或者SOAP或者SOCKET等方式跟其他域名下的接口进行通讯，等请求完成后返回给客户端。
  
优点：可靠，可以返回结果和错误。
  
缺点：耗费资源，需要专人编写通讯代码并维护服务器运转。
  
代码我就不举例了，这个需要api服务器和你新加的服务器之间约定好协议，共同完成。

第二种，JSONP，采用客户端和服务器端同时修改代码解决
  
先说angular的jsonp（客户端）：
  
当angular的$http.jsonp()发生的时候，angular会在客户端页面中放置,注意这里的JSON_CALLBACK，不能随意改动。
  
当请求类型为jsonp的时候，实际上客户端并没有去请求ajax，而是根据script中src的地址去请求api。当服务器接口http://localhost:8080/接收到此请求的时候，会接收到callback的名称。
  
这个时候，服务器接收到的callback的值已经被angular修改，第一次请求是angular.callback.\_0，第二次是angular.callback.\_1，以此类推。。。。
  
angular在发送请求之前，埋设一个以此（angular.callback._x）命名的函数，准备接收返回。

angular客户端发起jsonp请求
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){`

var url = &#8216;http://localhost:8080&#8217;;
  
var request = $http.jsonp(url + &#8216;?callback=JSON_CALLBACK&#8217;);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

接收请求的服务器端：
  
当这个callback不为空的时候，说明是jsonp请求，那么服务器会做一个判断
  
`<br />
if (method === 'GET'){<br />
var params = [];<br />
params = url.parse(request.url,true).query;<br />
//debugger;<br />
console.log(params['callback']);`

var callback = params[&#8216;callback&#8217;];
  
}
  
&#8230;
  
if (callback){
  
response.write(&#8216;/\*callback\*/&#8217; + callback + &#8216;(&#8216; + JSON.stringify(responseBody) + &#8216;)&#8217;);
  
}else{
  
response.write(JSON.stringify(responseBody));
  
}

优点：前后端只要配合好，就可以解决烦恼
  
缺点：只支持GET方式请求；错误处理非常麻烦；安全原因
  
jquery和angular的jsonp方式都是一样的模式，也需要服务器配合，并返回对应的结果。
  
客户端发起jsonp请求
  
````

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

```

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

``` 

3：angular的ajax实例
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){<br />
var config = {<br />
method: 'get',<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

以上两种情况下，在浏览器的console都会打出错误信息，内容大致相同：

> XMLHttpRequest cannot load http://localhost:8080/. No &#8216;Access-Control-Allow-Origin&#8217; header is present on the requested resource. Origin &#8216;http://localhost:63342&#8217; is therefore not allowed access.

2：分析
  
错误信息的提示很明确，就是说ajax请求无法完成，因为你不能从原地址http://localhost:63342访问http://localhost:8080/。为什么会出现这种情况呢？因为浏览器为了安全，有一个同源策略。规定了ajax请求的协议、主机名和端口号相同才能进行，否则是无法访问的。

3：解决方法

  * 架设一台跟客户端同一个域名的服务器，让服务器跟其他域名的服务器通讯，返回客户端需要的结果
  * 使用JSONP（json-padding）
  * 使用HTML5的CORS（IE10、IE9只支持简单的GET、POST和OPTIONS方法，其他的DELETE/PUT等都不支持，真正支持的只有IE11和其他现代浏览器）
  * 使用代理服务器

第一种，需要假设一台专门请求其他域名的服务器来进行。
  
客户端请求发给这台服务器，服务器通过RPC或者SOAP或者SOCKET等方式跟其他域名下的接口进行通讯，等请求完成后返回给客户端。
  
优点：可靠，可以返回结果和错误。
  
缺点：耗费资源，需要专人编写通讯代码并维护服务器运转。
  
代码我就不举例了，这个需要api服务器和你新加的服务器之间约定好协议，共同完成。

第二种，JSONP，采用客户端和服务器端同时修改代码解决
  
先说angular的jsonp（客户端）：
  
当angular的$http.jsonp()发生的时候，angular会在客户端页面中放置,注意这里的JSON_CALLBACK，不能随意改动。
  
当请求类型为jsonp的时候，实际上客户端并没有去请求ajax，而是根据script中src的地址去请求api。当服务器接口http://localhost:8080/接收到此请求的时候，会接收到callback的名称。
  
这个时候，服务器接收到的callback的值已经被angular修改，第一次请求是angular.callback.\_0，第二次是angular.callback.\_1，以此类推。。。。
  
angular在发送请求之前，埋设一个以此（angular.callback._x）命名的函数，准备接收返回。

angular客户端发起jsonp请求
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){`

var url = &#8216;http://localhost:8080&#8217;;
  
var request = $http.jsonp(url + &#8216;?callback=JSON_CALLBACK&#8217;);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

接收请求的服务器端：
  
当这个callback不为空的时候，说明是jsonp请求，那么服务器会做一个判断
  
`<br />
if (method === 'GET'){<br />
var params = [];<br />
params = url.parse(request.url,true).query;<br />
//debugger;<br />
console.log(params['callback']);`

var callback = params[&#8216;callback&#8217;];
  
}
  
&#8230;
  
if (callback){
  
response.write(&#8216;/\*callback\*/&#8217; + callback + &#8216;(&#8216; + JSON.stringify(responseBody) + &#8216;)&#8217;);
  
}else{
  
response.write(JSON.stringify(responseBody));
  
}

优点：前后端只要配合好，就可以解决烦恼
  
缺点：只支持GET方式请求；错误处理非常麻烦；安全原因
  
jquery和angular的jsonp方式都是一样的模式，也需要服务器配合，并返回对应的结果。
  
客户端发起jsonp请求
  
```` 

服务器端处理
  
`````

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

```

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

``` 

3：angular的ajax实例
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){<br />
var config = {<br />
method: 'get',<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

以上两种情况下，在浏览器的console都会打出错误信息，内容大致相同：

> XMLHttpRequest cannot load http://localhost:8080/. No &#8216;Access-Control-Allow-Origin&#8217; header is present on the requested resource. Origin &#8216;http://localhost:63342&#8217; is therefore not allowed access.

2：分析
  
错误信息的提示很明确，就是说ajax请求无法完成，因为你不能从原地址http://localhost:63342访问http://localhost:8080/。为什么会出现这种情况呢？因为浏览器为了安全，有一个同源策略。规定了ajax请求的协议、主机名和端口号相同才能进行，否则是无法访问的。

3：解决方法

  * 架设一台跟客户端同一个域名的服务器，让服务器跟其他域名的服务器通讯，返回客户端需要的结果
  * 使用JSONP（json-padding）
  * 使用HTML5的CORS（IE10、IE9只支持简单的GET、POST和OPTIONS方法，其他的DELETE/PUT等都不支持，真正支持的只有IE11和其他现代浏览器）
  * 使用代理服务器

第一种，需要假设一台专门请求其他域名的服务器来进行。
  
客户端请求发给这台服务器，服务器通过RPC或者SOAP或者SOCKET等方式跟其他域名下的接口进行通讯，等请求完成后返回给客户端。
  
优点：可靠，可以返回结果和错误。
  
缺点：耗费资源，需要专人编写通讯代码并维护服务器运转。
  
代码我就不举例了，这个需要api服务器和你新加的服务器之间约定好协议，共同完成。

第二种，JSONP，采用客户端和服务器端同时修改代码解决
  
先说angular的jsonp（客户端）：
  
当angular的$http.jsonp()发生的时候，angular会在客户端页面中放置,注意这里的JSON_CALLBACK，不能随意改动。
  
当请求类型为jsonp的时候，实际上客户端并没有去请求ajax，而是根据script中src的地址去请求api。当服务器接口http://localhost:8080/接收到此请求的时候，会接收到callback的名称。
  
这个时候，服务器接收到的callback的值已经被angular修改，第一次请求是angular.callback.\_0，第二次是angular.callback.\_1，以此类推。。。。
  
angular在发送请求之前，埋设一个以此（angular.callback._x）命名的函数，准备接收返回。

angular客户端发起jsonp请求
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){`

var url = &#8216;http://localhost:8080&#8217;;
  
var request = $http.jsonp(url + &#8216;?callback=JSON_CALLBACK&#8217;);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

接收请求的服务器端：
  
当这个callback不为空的时候，说明是jsonp请求，那么服务器会做一个判断
  
`<br />
if (method === 'GET'){<br />
var params = [];<br />
params = url.parse(request.url,true).query;<br />
//debugger;<br />
console.log(params['callback']);`

var callback = params[&#8216;callback&#8217;];
  
}
  
&#8230;
  
if (callback){
  
response.write(&#8216;/\*callback\*/&#8217; + callback + &#8216;(&#8216; + JSON.stringify(responseBody) + &#8216;)&#8217;);
  
}else{
  
response.write(JSON.stringify(responseBody));
  
}

优点：前后端只要配合好，就可以解决烦恼
  
缺点：只支持GET方式请求；错误处理非常麻烦；安全原因
  
jquery和angular的jsonp方式都是一样的模式，也需要服务器配合，并返回对应的结果。
  
客户端发起jsonp请求
  
````

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

```

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

``` 

3：angular的ajax实例
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){<br />
var config = {<br />
method: 'get',<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

以上两种情况下，在浏览器的console都会打出错误信息，内容大致相同：

> XMLHttpRequest cannot load http://localhost:8080/. No &#8216;Access-Control-Allow-Origin&#8217; header is present on the requested resource. Origin &#8216;http://localhost:63342&#8217; is therefore not allowed access.

2：分析
  
错误信息的提示很明确，就是说ajax请求无法完成，因为你不能从原地址http://localhost:63342访问http://localhost:8080/。为什么会出现这种情况呢？因为浏览器为了安全，有一个同源策略。规定了ajax请求的协议、主机名和端口号相同才能进行，否则是无法访问的。

3：解决方法

  * 架设一台跟客户端同一个域名的服务器，让服务器跟其他域名的服务器通讯，返回客户端需要的结果
  * 使用JSONP（json-padding）
  * 使用HTML5的CORS（IE10、IE9只支持简单的GET、POST和OPTIONS方法，其他的DELETE/PUT等都不支持，真正支持的只有IE11和其他现代浏览器）
  * 使用代理服务器

第一种，需要假设一台专门请求其他域名的服务器来进行。
  
客户端请求发给这台服务器，服务器通过RPC或者SOAP或者SOCKET等方式跟其他域名下的接口进行通讯，等请求完成后返回给客户端。
  
优点：可靠，可以返回结果和错误。
  
缺点：耗费资源，需要专人编写通讯代码并维护服务器运转。
  
代码我就不举例了，这个需要api服务器和你新加的服务器之间约定好协议，共同完成。

第二种，JSONP，采用客户端和服务器端同时修改代码解决
  
先说angular的jsonp（客户端）：
  
当angular的$http.jsonp()发生的时候，angular会在客户端页面中放置,注意这里的JSON_CALLBACK，不能随意改动。
  
当请求类型为jsonp的时候，实际上客户端并没有去请求ajax，而是根据script中src的地址去请求api。当服务器接口http://localhost:8080/接收到此请求的时候，会接收到callback的名称。
  
这个时候，服务器接收到的callback的值已经被angular修改，第一次请求是angular.callback.\_0，第二次是angular.callback.\_1，以此类推。。。。
  
angular在发送请求之前，埋设一个以此（angular.callback._x）命名的函数，准备接收返回。

angular客户端发起jsonp请求
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){`

var url = &#8216;http://localhost:8080&#8217;;
  
var request = $http.jsonp(url + &#8216;?callback=JSON_CALLBACK&#8217;);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

接收请求的服务器端：
  
当这个callback不为空的时候，说明是jsonp请求，那么服务器会做一个判断
  
`<br />
if (method === 'GET'){<br />
var params = [];<br />
params = url.parse(request.url,true).query;<br />
//debugger;<br />
console.log(params['callback']);`

var callback = params[&#8216;callback&#8217;];
  
}
  
&#8230;
  
if (callback){
  
response.write(&#8216;/\*callback\*/&#8217; + callback + &#8216;(&#8216; + JSON.stringify(responseBody) + &#8216;)&#8217;);
  
}else{
  
response.write(JSON.stringify(responseBody));
  
}

优点：前后端只要配合好，就可以解决烦恼
  
缺点：只支持GET方式请求；错误处理非常麻烦；安全原因
  
jquery和angular的jsonp方式都是一样的模式，也需要服务器配合，并返回对应的结果。
  
客户端发起jsonp请求
  
```` 

服务器端处理
  
````` 

第三种方式：采用HTML5的CORS
  
原理，就是w3c官方出品的方式，客户端正常写ajax请求，服务器端需要修改服务器的配置
  
`<br />
var config = {<br />
method: 'get',<br />
//url: 'http://localhost:1337/localhost:8080'<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})

服务器端需要修改，这里的服务器修改包含两方面的含义
  
1：修改服务器的返回代码
  
2：修改服务器的配置（apache、nginx或者tomcat等）

对于修改代码，就是在response中的setHeader(&#8216;Access-Control-Allow-Origin&#8217;, &#8216;http://localhost:63342&#8217;)即可。
  
`````` 
  
修改服务器配置，也可以达到目的：这里有个网站，告诉你怎么修改服务器的配置。<a href="http://enable-cors.org/server.html" target="_blank">http://enable-cors.org/server.html</a>
  
这里需要注意，get、post和head请求，这样修改就可以了，属于简单CORS。
  
如果是delete、put、options等非简单的CORS，这样做还远远不够，因为服务器需要进行了2次请求，第一次是探测服务器的OPTIONS请求，属于握手阶段；第二次是真正的请求。有图为证：

<img class="aligncenter size-large wp-image-238" src="http://blog.83096146.com/wp-content/uploads/2016/03/QQ拼音截图未命名-1024x756.png" alt="QQ拼音截图未命名" width="660" height="487" srcset="http://blog.83096146.com/wp-content/uploads/2016/03/QQ拼音截图未命名-300x221.png 300w, http://blog.83096146.com/wp-content/uploads/2016/03/QQ拼音截图未命名-768x567.png 768w, http://blog.83096146.com/wp-content/uploads/2016/03/QQ拼音截图未命名-1024x756.png 1024w, http://blog.83096146.com/wp-content/uploads/2016/03/QQ拼音截图未命名.png 1190w" sizes="(max-width: 660px) 100vw, 660px" />

```````

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

```

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

``` 

3：angular的ajax实例
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){<br />
var config = {<br />
method: 'get',<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

以上两种情况下，在浏览器的console都会打出错误信息，内容大致相同：

> XMLHttpRequest cannot load http://localhost:8080/. No &#8216;Access-Control-Allow-Origin&#8217; header is present on the requested resource. Origin &#8216;http://localhost:63342&#8217; is therefore not allowed access.

2：分析
  
错误信息的提示很明确，就是说ajax请求无法完成，因为你不能从原地址http://localhost:63342访问http://localhost:8080/。为什么会出现这种情况呢？因为浏览器为了安全，有一个同源策略。规定了ajax请求的协议、主机名和端口号相同才能进行，否则是无法访问的。

3：解决方法

  * 架设一台跟客户端同一个域名的服务器，让服务器跟其他域名的服务器通讯，返回客户端需要的结果
  * 使用JSONP（json-padding）
  * 使用HTML5的CORS（IE10、IE9只支持简单的GET、POST和OPTIONS方法，其他的DELETE/PUT等都不支持，真正支持的只有IE11和其他现代浏览器）
  * 使用代理服务器

第一种，需要假设一台专门请求其他域名的服务器来进行。
  
客户端请求发给这台服务器，服务器通过RPC或者SOAP或者SOCKET等方式跟其他域名下的接口进行通讯，等请求完成后返回给客户端。
  
优点：可靠，可以返回结果和错误。
  
缺点：耗费资源，需要专人编写通讯代码并维护服务器运转。
  
代码我就不举例了，这个需要api服务器和你新加的服务器之间约定好协议，共同完成。

第二种，JSONP，采用客户端和服务器端同时修改代码解决
  
先说angular的jsonp（客户端）：
  
当angular的$http.jsonp()发生的时候，angular会在客户端页面中放置,注意这里的JSON_CALLBACK，不能随意改动。
  
当请求类型为jsonp的时候，实际上客户端并没有去请求ajax，而是根据script中src的地址去请求api。当服务器接口http://localhost:8080/接收到此请求的时候，会接收到callback的名称。
  
这个时候，服务器接收到的callback的值已经被angular修改，第一次请求是angular.callback.\_0，第二次是angular.callback.\_1，以此类推。。。。
  
angular在发送请求之前，埋设一个以此（angular.callback._x）命名的函数，准备接收返回。

angular客户端发起jsonp请求
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){`

var url = &#8216;http://localhost:8080&#8217;;
  
var request = $http.jsonp(url + &#8216;?callback=JSON_CALLBACK&#8217;);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

接收请求的服务器端：
  
当这个callback不为空的时候，说明是jsonp请求，那么服务器会做一个判断
  
`<br />
if (method === 'GET'){<br />
var params = [];<br />
params = url.parse(request.url,true).query;<br />
//debugger;<br />
console.log(params['callback']);`

var callback = params[&#8216;callback&#8217;];
  
}
  
&#8230;
  
if (callback){
  
response.write(&#8216;/\*callback\*/&#8217; + callback + &#8216;(&#8216; + JSON.stringify(responseBody) + &#8216;)&#8217;);
  
}else{
  
response.write(JSON.stringify(responseBody));
  
}

优点：前后端只要配合好，就可以解决烦恼
  
缺点：只支持GET方式请求；错误处理非常麻烦；安全原因
  
jquery和angular的jsonp方式都是一样的模式，也需要服务器配合，并返回对应的结果。
  
客户端发起jsonp请求
  
````

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

```

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

``` 

3：angular的ajax实例
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){<br />
var config = {<br />
method: 'get',<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

以上两种情况下，在浏览器的console都会打出错误信息，内容大致相同：

> XMLHttpRequest cannot load http://localhost:8080/. No &#8216;Access-Control-Allow-Origin&#8217; header is present on the requested resource. Origin &#8216;http://localhost:63342&#8217; is therefore not allowed access.

2：分析
  
错误信息的提示很明确，就是说ajax请求无法完成，因为你不能从原地址http://localhost:63342访问http://localhost:8080/。为什么会出现这种情况呢？因为浏览器为了安全，有一个同源策略。规定了ajax请求的协议、主机名和端口号相同才能进行，否则是无法访问的。

3：解决方法

  * 架设一台跟客户端同一个域名的服务器，让服务器跟其他域名的服务器通讯，返回客户端需要的结果
  * 使用JSONP（json-padding）
  * 使用HTML5的CORS（IE10、IE9只支持简单的GET、POST和OPTIONS方法，其他的DELETE/PUT等都不支持，真正支持的只有IE11和其他现代浏览器）
  * 使用代理服务器

第一种，需要假设一台专门请求其他域名的服务器来进行。
  
客户端请求发给这台服务器，服务器通过RPC或者SOAP或者SOCKET等方式跟其他域名下的接口进行通讯，等请求完成后返回给客户端。
  
优点：可靠，可以返回结果和错误。
  
缺点：耗费资源，需要专人编写通讯代码并维护服务器运转。
  
代码我就不举例了，这个需要api服务器和你新加的服务器之间约定好协议，共同完成。

第二种，JSONP，采用客户端和服务器端同时修改代码解决
  
先说angular的jsonp（客户端）：
  
当angular的$http.jsonp()发生的时候，angular会在客户端页面中放置,注意这里的JSON_CALLBACK，不能随意改动。
  
当请求类型为jsonp的时候，实际上客户端并没有去请求ajax，而是根据script中src的地址去请求api。当服务器接口http://localhost:8080/接收到此请求的时候，会接收到callback的名称。
  
这个时候，服务器接收到的callback的值已经被angular修改，第一次请求是angular.callback.\_0，第二次是angular.callback.\_1，以此类推。。。。
  
angular在发送请求之前，埋设一个以此（angular.callback._x）命名的函数，准备接收返回。

angular客户端发起jsonp请求
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){`

var url = &#8216;http://localhost:8080&#8217;;
  
var request = $http.jsonp(url + &#8216;?callback=JSON_CALLBACK&#8217;);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

接收请求的服务器端：
  
当这个callback不为空的时候，说明是jsonp请求，那么服务器会做一个判断
  
`<br />
if (method === 'GET'){<br />
var params = [];<br />
params = url.parse(request.url,true).query;<br />
//debugger;<br />
console.log(params['callback']);`

var callback = params[&#8216;callback&#8217;];
  
}
  
&#8230;
  
if (callback){
  
response.write(&#8216;/\*callback\*/&#8217; + callback + &#8216;(&#8216; + JSON.stringify(responseBody) + &#8216;)&#8217;);
  
}else{
  
response.write(JSON.stringify(responseBody));
  
}

优点：前后端只要配合好，就可以解决烦恼
  
缺点：只支持GET方式请求；错误处理非常麻烦；安全原因
  
jquery和angular的jsonp方式都是一样的模式，也需要服务器配合，并返回对应的结果。
  
客户端发起jsonp请求
  
```` 

服务器端处理
  
`````

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

```

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

``` 

3：angular的ajax实例
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){<br />
var config = {<br />
method: 'get',<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

以上两种情况下，在浏览器的console都会打出错误信息，内容大致相同：

> XMLHttpRequest cannot load http://localhost:8080/. No &#8216;Access-Control-Allow-Origin&#8217; header is present on the requested resource. Origin &#8216;http://localhost:63342&#8217; is therefore not allowed access.

2：分析
  
错误信息的提示很明确，就是说ajax请求无法完成，因为你不能从原地址http://localhost:63342访问http://localhost:8080/。为什么会出现这种情况呢？因为浏览器为了安全，有一个同源策略。规定了ajax请求的协议、主机名和端口号相同才能进行，否则是无法访问的。

3：解决方法

  * 架设一台跟客户端同一个域名的服务器，让服务器跟其他域名的服务器通讯，返回客户端需要的结果
  * 使用JSONP（json-padding）
  * 使用HTML5的CORS（IE10、IE9只支持简单的GET、POST和OPTIONS方法，其他的DELETE/PUT等都不支持，真正支持的只有IE11和其他现代浏览器）
  * 使用代理服务器

第一种，需要假设一台专门请求其他域名的服务器来进行。
  
客户端请求发给这台服务器，服务器通过RPC或者SOAP或者SOCKET等方式跟其他域名下的接口进行通讯，等请求完成后返回给客户端。
  
优点：可靠，可以返回结果和错误。
  
缺点：耗费资源，需要专人编写通讯代码并维护服务器运转。
  
代码我就不举例了，这个需要api服务器和你新加的服务器之间约定好协议，共同完成。

第二种，JSONP，采用客户端和服务器端同时修改代码解决
  
先说angular的jsonp（客户端）：
  
当angular的$http.jsonp()发生的时候，angular会在客户端页面中放置,注意这里的JSON_CALLBACK，不能随意改动。
  
当请求类型为jsonp的时候，实际上客户端并没有去请求ajax，而是根据script中src的地址去请求api。当服务器接口http://localhost:8080/接收到此请求的时候，会接收到callback的名称。
  
这个时候，服务器接收到的callback的值已经被angular修改，第一次请求是angular.callback.\_0，第二次是angular.callback.\_1，以此类推。。。。
  
angular在发送请求之前，埋设一个以此（angular.callback._x）命名的函数，准备接收返回。

angular客户端发起jsonp请求
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){`

var url = &#8216;http://localhost:8080&#8217;;
  
var request = $http.jsonp(url + &#8216;?callback=JSON_CALLBACK&#8217;);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

接收请求的服务器端：
  
当这个callback不为空的时候，说明是jsonp请求，那么服务器会做一个判断
  
`<br />
if (method === 'GET'){<br />
var params = [];<br />
params = url.parse(request.url,true).query;<br />
//debugger;<br />
console.log(params['callback']);`

var callback = params[&#8216;callback&#8217;];
  
}
  
&#8230;
  
if (callback){
  
response.write(&#8216;/\*callback\*/&#8217; + callback + &#8216;(&#8216; + JSON.stringify(responseBody) + &#8216;)&#8217;);
  
}else{
  
response.write(JSON.stringify(responseBody));
  
}

优点：前后端只要配合好，就可以解决烦恼
  
缺点：只支持GET方式请求；错误处理非常麻烦；安全原因
  
jquery和angular的jsonp方式都是一样的模式，也需要服务器配合，并返回对应的结果。
  
客户端发起jsonp请求
  
````

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

```

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

``` 

3：angular的ajax实例
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){<br />
var config = {<br />
method: 'get',<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

以上两种情况下，在浏览器的console都会打出错误信息，内容大致相同：

> XMLHttpRequest cannot load http://localhost:8080/. No &#8216;Access-Control-Allow-Origin&#8217; header is present on the requested resource. Origin &#8216;http://localhost:63342&#8217; is therefore not allowed access.

2：分析
  
错误信息的提示很明确，就是说ajax请求无法完成，因为你不能从原地址http://localhost:63342访问http://localhost:8080/。为什么会出现这种情况呢？因为浏览器为了安全，有一个同源策略。规定了ajax请求的协议、主机名和端口号相同才能进行，否则是无法访问的。

3：解决方法

  * 架设一台跟客户端同一个域名的服务器，让服务器跟其他域名的服务器通讯，返回客户端需要的结果
  * 使用JSONP（json-padding）
  * 使用HTML5的CORS（IE10、IE9只支持简单的GET、POST和OPTIONS方法，其他的DELETE/PUT等都不支持，真正支持的只有IE11和其他现代浏览器）
  * 使用代理服务器

第一种，需要假设一台专门请求其他域名的服务器来进行。
  
客户端请求发给这台服务器，服务器通过RPC或者SOAP或者SOCKET等方式跟其他域名下的接口进行通讯，等请求完成后返回给客户端。
  
优点：可靠，可以返回结果和错误。
  
缺点：耗费资源，需要专人编写通讯代码并维护服务器运转。
  
代码我就不举例了，这个需要api服务器和你新加的服务器之间约定好协议，共同完成。

第二种，JSONP，采用客户端和服务器端同时修改代码解决
  
先说angular的jsonp（客户端）：
  
当angular的$http.jsonp()发生的时候，angular会在客户端页面中放置,注意这里的JSON_CALLBACK，不能随意改动。
  
当请求类型为jsonp的时候，实际上客户端并没有去请求ajax，而是根据script中src的地址去请求api。当服务器接口http://localhost:8080/接收到此请求的时候，会接收到callback的名称。
  
这个时候，服务器接收到的callback的值已经被angular修改，第一次请求是angular.callback.\_0，第二次是angular.callback.\_1，以此类推。。。。
  
angular在发送请求之前，埋设一个以此（angular.callback._x）命名的函数，准备接收返回。

angular客户端发起jsonp请求
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){`

var url = &#8216;http://localhost:8080&#8217;;
  
var request = $http.jsonp(url + &#8216;?callback=JSON_CALLBACK&#8217;);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

接收请求的服务器端：
  
当这个callback不为空的时候，说明是jsonp请求，那么服务器会做一个判断
  
`<br />
if (method === 'GET'){<br />
var params = [];<br />
params = url.parse(request.url,true).query;<br />
//debugger;<br />
console.log(params['callback']);`

var callback = params[&#8216;callback&#8217;];
  
}
  
&#8230;
  
if (callback){
  
response.write(&#8216;/\*callback\*/&#8217; + callback + &#8216;(&#8216; + JSON.stringify(responseBody) + &#8216;)&#8217;);
  
}else{
  
response.write(JSON.stringify(responseBody));
  
}

优点：前后端只要配合好，就可以解决烦恼
  
缺点：只支持GET方式请求；错误处理非常麻烦；安全原因
  
jquery和angular的jsonp方式都是一样的模式，也需要服务器配合，并返回对应的结果。
  
客户端发起jsonp请求
  
```` 

服务器端处理
  
````` 

第三种方式：采用HTML5的CORS
  
原理，就是w3c官方出品的方式，客户端正常写ajax请求，服务器端需要修改服务器的配置
  
`<br />
var config = {<br />
method: 'get',<br />
//url: 'http://localhost:1337/localhost:8080'<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})

服务器端需要修改，这里的服务器修改包含两方面的含义
  
1：修改服务器的返回代码
  
2：修改服务器的配置（apache、nginx或者tomcat等）

对于修改代码，就是在response中的setHeader(&#8216;Access-Control-Allow-Origin&#8217;, &#8216;http://localhost:63342&#8217;)即可。
  
``````

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

```

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

``` 

3：angular的ajax实例
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){<br />
var config = {<br />
method: 'get',<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

以上两种情况下，在浏览器的console都会打出错误信息，内容大致相同：

> XMLHttpRequest cannot load http://localhost:8080/. No &#8216;Access-Control-Allow-Origin&#8217; header is present on the requested resource. Origin &#8216;http://localhost:63342&#8217; is therefore not allowed access.

2：分析
  
错误信息的提示很明确，就是说ajax请求无法完成，因为你不能从原地址http://localhost:63342访问http://localhost:8080/。为什么会出现这种情况呢？因为浏览器为了安全，有一个同源策略。规定了ajax请求的协议、主机名和端口号相同才能进行，否则是无法访问的。

3：解决方法

  * 架设一台跟客户端同一个域名的服务器，让服务器跟其他域名的服务器通讯，返回客户端需要的结果
  * 使用JSONP（json-padding）
  * 使用HTML5的CORS（IE10、IE9只支持简单的GET、POST和OPTIONS方法，其他的DELETE/PUT等都不支持，真正支持的只有IE11和其他现代浏览器）
  * 使用代理服务器

第一种，需要假设一台专门请求其他域名的服务器来进行。
  
客户端请求发给这台服务器，服务器通过RPC或者SOAP或者SOCKET等方式跟其他域名下的接口进行通讯，等请求完成后返回给客户端。
  
优点：可靠，可以返回结果和错误。
  
缺点：耗费资源，需要专人编写通讯代码并维护服务器运转。
  
代码我就不举例了，这个需要api服务器和你新加的服务器之间约定好协议，共同完成。

第二种，JSONP，采用客户端和服务器端同时修改代码解决
  
先说angular的jsonp（客户端）：
  
当angular的$http.jsonp()发生的时候，angular会在客户端页面中放置,注意这里的JSON_CALLBACK，不能随意改动。
  
当请求类型为jsonp的时候，实际上客户端并没有去请求ajax，而是根据script中src的地址去请求api。当服务器接口http://localhost:8080/接收到此请求的时候，会接收到callback的名称。
  
这个时候，服务器接收到的callback的值已经被angular修改，第一次请求是angular.callback.\_0，第二次是angular.callback.\_1，以此类推。。。。
  
angular在发送请求之前，埋设一个以此（angular.callback._x）命名的函数，准备接收返回。

angular客户端发起jsonp请求
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){`

var url = &#8216;http://localhost:8080&#8217;;
  
var request = $http.jsonp(url + &#8216;?callback=JSON_CALLBACK&#8217;);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

接收请求的服务器端：
  
当这个callback不为空的时候，说明是jsonp请求，那么服务器会做一个判断
  
`<br />
if (method === 'GET'){<br />
var params = [];<br />
params = url.parse(request.url,true).query;<br />
//debugger;<br />
console.log(params['callback']);`

var callback = params[&#8216;callback&#8217;];
  
}
  
&#8230;
  
if (callback){
  
response.write(&#8216;/\*callback\*/&#8217; + callback + &#8216;(&#8216; + JSON.stringify(responseBody) + &#8216;)&#8217;);
  
}else{
  
response.write(JSON.stringify(responseBody));
  
}

优点：前后端只要配合好，就可以解决烦恼
  
缺点：只支持GET方式请求；错误处理非常麻烦；安全原因
  
jquery和angular的jsonp方式都是一样的模式，也需要服务器配合，并返回对应的结果。
  
客户端发起jsonp请求
  
````

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

```

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

``` 

3：angular的ajax实例
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){<br />
var config = {<br />
method: 'get',<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

以上两种情况下，在浏览器的console都会打出错误信息，内容大致相同：

> XMLHttpRequest cannot load http://localhost:8080/. No &#8216;Access-Control-Allow-Origin&#8217; header is present on the requested resource. Origin &#8216;http://localhost:63342&#8217; is therefore not allowed access.

2：分析
  
错误信息的提示很明确，就是说ajax请求无法完成，因为你不能从原地址http://localhost:63342访问http://localhost:8080/。为什么会出现这种情况呢？因为浏览器为了安全，有一个同源策略。规定了ajax请求的协议、主机名和端口号相同才能进行，否则是无法访问的。

3：解决方法

  * 架设一台跟客户端同一个域名的服务器，让服务器跟其他域名的服务器通讯，返回客户端需要的结果
  * 使用JSONP（json-padding）
  * 使用HTML5的CORS（IE10、IE9只支持简单的GET、POST和OPTIONS方法，其他的DELETE/PUT等都不支持，真正支持的只有IE11和其他现代浏览器）
  * 使用代理服务器

第一种，需要假设一台专门请求其他域名的服务器来进行。
  
客户端请求发给这台服务器，服务器通过RPC或者SOAP或者SOCKET等方式跟其他域名下的接口进行通讯，等请求完成后返回给客户端。
  
优点：可靠，可以返回结果和错误。
  
缺点：耗费资源，需要专人编写通讯代码并维护服务器运转。
  
代码我就不举例了，这个需要api服务器和你新加的服务器之间约定好协议，共同完成。

第二种，JSONP，采用客户端和服务器端同时修改代码解决
  
先说angular的jsonp（客户端）：
  
当angular的$http.jsonp()发生的时候，angular会在客户端页面中放置,注意这里的JSON_CALLBACK，不能随意改动。
  
当请求类型为jsonp的时候，实际上客户端并没有去请求ajax，而是根据script中src的地址去请求api。当服务器接口http://localhost:8080/接收到此请求的时候，会接收到callback的名称。
  
这个时候，服务器接收到的callback的值已经被angular修改，第一次请求是angular.callback.\_0，第二次是angular.callback.\_1，以此类推。。。。
  
angular在发送请求之前，埋设一个以此（angular.callback._x）命名的函数，准备接收返回。

angular客户端发起jsonp请求
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){`

var url = &#8216;http://localhost:8080&#8217;;
  
var request = $http.jsonp(url + &#8216;?callback=JSON_CALLBACK&#8217;);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

接收请求的服务器端：
  
当这个callback不为空的时候，说明是jsonp请求，那么服务器会做一个判断
  
`<br />
if (method === 'GET'){<br />
var params = [];<br />
params = url.parse(request.url,true).query;<br />
//debugger;<br />
console.log(params['callback']);`

var callback = params[&#8216;callback&#8217;];
  
}
  
&#8230;
  
if (callback){
  
response.write(&#8216;/\*callback\*/&#8217; + callback + &#8216;(&#8216; + JSON.stringify(responseBody) + &#8216;)&#8217;);
  
}else{
  
response.write(JSON.stringify(responseBody));
  
}

优点：前后端只要配合好，就可以解决烦恼
  
缺点：只支持GET方式请求；错误处理非常麻烦；安全原因
  
jquery和angular的jsonp方式都是一样的模式，也需要服务器配合，并返回对应的结果。
  
客户端发起jsonp请求
  
```` 

服务器端处理
  
`````

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

```

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

``` 

3：angular的ajax实例
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){<br />
var config = {<br />
method: 'get',<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

以上两种情况下，在浏览器的console都会打出错误信息，内容大致相同：

> XMLHttpRequest cannot load http://localhost:8080/. No &#8216;Access-Control-Allow-Origin&#8217; header is present on the requested resource. Origin &#8216;http://localhost:63342&#8217; is therefore not allowed access.

2：分析
  
错误信息的提示很明确，就是说ajax请求无法完成，因为你不能从原地址http://localhost:63342访问http://localhost:8080/。为什么会出现这种情况呢？因为浏览器为了安全，有一个同源策略。规定了ajax请求的协议、主机名和端口号相同才能进行，否则是无法访问的。

3：解决方法

  * 架设一台跟客户端同一个域名的服务器，让服务器跟其他域名的服务器通讯，返回客户端需要的结果
  * 使用JSONP（json-padding）
  * 使用HTML5的CORS（IE10、IE9只支持简单的GET、POST和OPTIONS方法，其他的DELETE/PUT等都不支持，真正支持的只有IE11和其他现代浏览器）
  * 使用代理服务器

第一种，需要假设一台专门请求其他域名的服务器来进行。
  
客户端请求发给这台服务器，服务器通过RPC或者SOAP或者SOCKET等方式跟其他域名下的接口进行通讯，等请求完成后返回给客户端。
  
优点：可靠，可以返回结果和错误。
  
缺点：耗费资源，需要专人编写通讯代码并维护服务器运转。
  
代码我就不举例了，这个需要api服务器和你新加的服务器之间约定好协议，共同完成。

第二种，JSONP，采用客户端和服务器端同时修改代码解决
  
先说angular的jsonp（客户端）：
  
当angular的$http.jsonp()发生的时候，angular会在客户端页面中放置,注意这里的JSON_CALLBACK，不能随意改动。
  
当请求类型为jsonp的时候，实际上客户端并没有去请求ajax，而是根据script中src的地址去请求api。当服务器接口http://localhost:8080/接收到此请求的时候，会接收到callback的名称。
  
这个时候，服务器接收到的callback的值已经被angular修改，第一次请求是angular.callback.\_0，第二次是angular.callback.\_1，以此类推。。。。
  
angular在发送请求之前，埋设一个以此（angular.callback._x）命名的函数，准备接收返回。

angular客户端发起jsonp请求
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){`

var url = &#8216;http://localhost:8080&#8217;;
  
var request = $http.jsonp(url + &#8216;?callback=JSON_CALLBACK&#8217;);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

接收请求的服务器端：
  
当这个callback不为空的时候，说明是jsonp请求，那么服务器会做一个判断
  
`<br />
if (method === 'GET'){<br />
var params = [];<br />
params = url.parse(request.url,true).query;<br />
//debugger;<br />
console.log(params['callback']);`

var callback = params[&#8216;callback&#8217;];
  
}
  
&#8230;
  
if (callback){
  
response.write(&#8216;/\*callback\*/&#8217; + callback + &#8216;(&#8216; + JSON.stringify(responseBody) + &#8216;)&#8217;);
  
}else{
  
response.write(JSON.stringify(responseBody));
  
}

优点：前后端只要配合好，就可以解决烦恼
  
缺点：只支持GET方式请求；错误处理非常麻烦；安全原因
  
jquery和angular的jsonp方式都是一样的模式，也需要服务器配合，并返回对应的结果。
  
客户端发起jsonp请求
  
````

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

```

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

``

如果你使用JavaScript开发网站或者web应用，那你一定使用过JavaScript的ajax请求。
  
什么是AJAX请求？在前几年流行一时，作为web2.0的标配技术，我在之前公司面试的时候，很多人都把AJAX作为一门技术或者语言单独列出来。
  
其实AJAX就是一种异步的HTTP 请求，用回调来接收返回。

服务器端(nodejs)api：
  
vim server1.js

`<br />
var http = require('http');<br />
http.createServer(function (request, response) {<br />
var method = request.method.toUpperCase();<br />
var body = [{name: 'John', id: 1}];<br />
console.log(request.url);`

request
  
.on(&#8216;error&#8217;, function (error) {
  
throw new Error(error);
  
})
  
.on(&#8216;data&#8217;, function (data) {
  
body.push(data);
  
})
  
.on(&#8216;end&#8217;, function () {
  
response.writeHead(200, {&#8216;Content-type&#8217;: &#8216;text/plain&#8217;});
  
response.write(JSON.stringify(body));
  
response.end();
  
})
  
}).listen(8080);

服务器端api建立好以后，就可以使用node来启动了。
  
node server1.js

下面写客户端代码，针对原生js、jquery和angular举例：
  
1：原生JavaScript的ajax请求实例

`` 
  
<!--more-->

2：jQuery的ajax实例

``` 

3：angular的ajax实例
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){<br />
var config = {<br />
method: 'get',<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

以上两种情况下，在浏览器的console都会打出错误信息，内容大致相同：

> XMLHttpRequest cannot load http://localhost:8080/. No &#8216;Access-Control-Allow-Origin&#8217; header is present on the requested resource. Origin &#8216;http://localhost:63342&#8217; is therefore not allowed access.

2：分析
  
错误信息的提示很明确，就是说ajax请求无法完成，因为你不能从原地址http://localhost:63342访问http://localhost:8080/。为什么会出现这种情况呢？因为浏览器为了安全，有一个同源策略。规定了ajax请求的协议、主机名和端口号相同才能进行，否则是无法访问的。

3：解决方法

  * 架设一台跟客户端同一个域名的服务器，让服务器跟其他域名的服务器通讯，返回客户端需要的结果
  * 使用JSONP（json-padding）
  * 使用HTML5的CORS（IE10、IE9只支持简单的GET、POST和OPTIONS方法，其他的DELETE/PUT等都不支持，真正支持的只有IE11和其他现代浏览器）
  * 使用代理服务器

第一种，需要假设一台专门请求其他域名的服务器来进行。
  
客户端请求发给这台服务器，服务器通过RPC或者SOAP或者SOCKET等方式跟其他域名下的接口进行通讯，等请求完成后返回给客户端。
  
优点：可靠，可以返回结果和错误。
  
缺点：耗费资源，需要专人编写通讯代码并维护服务器运转。
  
代码我就不举例了，这个需要api服务器和你新加的服务器之间约定好协议，共同完成。

第二种，JSONP，采用客户端和服务器端同时修改代码解决
  
先说angular的jsonp（客户端）：
  
当angular的$http.jsonp()发生的时候，angular会在客户端页面中放置,注意这里的JSON_CALLBACK，不能随意改动。
  
当请求类型为jsonp的时候，实际上客户端并没有去请求ajax，而是根据script中src的地址去请求api。当服务器接口http://localhost:8080/接收到此请求的时候，会接收到callback的名称。
  
这个时候，服务器接收到的callback的值已经被angular修改，第一次请求是angular.callback.\_0，第二次是angular.callback.\_1，以此类推。。。。
  
angular在发送请求之前，埋设一个以此（angular.callback._x）命名的函数，准备接收返回。

angular客户端发起jsonp请求
  
`<br />
angular.module('corsModule', [])<br />
.controller('corsCtrl', ['$scope', '$http', function ($scope, $http) {<br />
$scope.send = function(){`

var url = &#8216;http://localhost:8080&#8217;;
  
var request = $http.jsonp(url + &#8216;?callback=JSON_CALLBACK&#8217;);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})
  
};
  
}]);

&nbsp;

接收请求的服务器端：
  
当这个callback不为空的时候，说明是jsonp请求，那么服务器会做一个判断
  
`<br />
if (method === 'GET'){<br />
var params = [];<br />
params = url.parse(request.url,true).query;<br />
//debugger;<br />
console.log(params['callback']);`

var callback = params[&#8216;callback&#8217;];
  
}
  
&#8230;
  
if (callback){
  
response.write(&#8216;/\*callback\*/&#8217; + callback + &#8216;(&#8216; + JSON.stringify(responseBody) + &#8216;)&#8217;);
  
}else{
  
response.write(JSON.stringify(responseBody));
  
}

优点：前后端只要配合好，就可以解决烦恼
  
缺点：只支持GET方式请求；错误处理非常麻烦；安全原因
  
jquery和angular的jsonp方式都是一样的模式，也需要服务器配合，并返回对应的结果。
  
客户端发起jsonp请求
  
```` 

服务器端处理
  
````` 

第三种方式：采用HTML5的CORS
  
原理，就是w3c官方出品的方式，客户端正常写ajax请求，服务器端需要修改服务器的配置
  
`<br />
var config = {<br />
method: 'get',<br />
//url: 'http://localhost:1337/localhost:8080'<br />
url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
})

服务器端需要修改，这里的服务器修改包含两方面的含义
  
1：修改服务器的返回代码
  
2：修改服务器的配置（apache、nginx或者tomcat等）

对于修改代码，就是在response中的setHeader(&#8216;Access-Control-Allow-Origin&#8217;, &#8216;http://localhost:63342&#8217;)即可。
  
`````` 
  
修改服务器配置，也可以达到目的：这里有个网站，告诉你怎么修改服务器的配置。<a href="http://enable-cors.org/server.html" target="_blank">http://enable-cors.org/server.html</a>
  
这里需要注意，get、post和head请求，这样修改就可以了，属于简单CORS。
  
如果是delete、put、options等非简单的CORS，这样做还远远不够，因为服务器需要进行了2次请求，第一次是探测服务器的OPTIONS请求，属于握手阶段；第二次是真正的请求。有图为证：

<img class="aligncenter size-large wp-image-238" src="http://blog.83096146.com/wp-content/uploads/2016/03/QQ拼音截图未命名-1024x756.png" alt="QQ拼音截图未命名" width="660" height="487" srcset="http://blog.83096146.com/wp-content/uploads/2016/03/QQ拼音截图未命名-300x221.png 300w, http://blog.83096146.com/wp-content/uploads/2016/03/QQ拼音截图未命名-768x567.png 768w, http://blog.83096146.com/wp-content/uploads/2016/03/QQ拼音截图未命名-1024x756.png 1024w, http://blog.83096146.com/wp-content/uploads/2016/03/QQ拼音截图未命名.png 1190w" sizes="(max-width: 660px) 100vw, 660px" />

``````` 

缺点：IE支持不好，11以上才完全支持，9的只支持简单的CORS方式，需要进行服务器配置的修改
  
优点：官方出品

第四种方式：架设一台代理服务器，跟第一种类似，但是思想不同
  
原理：架设一台代理服务器，启动代理服务，客户端发送的请求，走代理，返回结果也走代理，这样神不知鬼不觉的就完成了跨域
  
代理服务器可以用nodejs来做（测试），也可以用nginx的反向代理（生产）
  
安装corsproxy：
  
sudo npm install -g corsproxy

启动服务器
  
sudo corsproxy

此服务器启动后，在我本地的访问地址是：http://localhost:1337，客户端的请求路径需要加上此地址。
  
比如你原来的跨域地址是http://localhost:8080，那么走代理的地址应该为：http://localhost:1337/localhost:8080
  
也就是先是代理服务器的地址，然后加上api的域名和端口

`<br />
var config = {<br />
method: 'DELETE',<br />
url: 'http://localhost:1337/localhost:8080'<br />
//url: 'http://localhost:8080'<br />
};`

var request = $http(config);
  
request
  
.success(function(data){
  
$scope.data = JSON.stringify(data);
  
console.log(data);
  
})
  
.error(function(error){
  
$scope.error = error;
  
throw new Error(error);
  
});

把服务器的头部定义注释：
  
```````` 

同样可以访问。

优点：稳定、配置简单
  
缺点：访问量大的时候，代理服务器需要足够强

附录：
  
HTTP STATUS CODE:

> 一些常见的状态码为：
  
> 200 &#8211; 服务器成功返回网页
  
> 404 &#8211; 请求的网页不存在
  
> 503 &#8211; 服务器超时
  
> 下面提供 HTTP 状态码的完整列表。
  
> 1xx(临时响应)
  
> 表示临时响应并需要请求者继续执行操作的状态码。
  
> 100(继续)请求者应当继续提出请求。服务器返回此代码表示已收到请求的第一部分，正在等待其余部分。
  
> 101(切换协议)请求者已要求服务器切换协议，服务器已确认并准备切换。
> 
> 2xx (成功)
  
> 表示成功处理了请求的状态码。
  
> 200(成功)服务器已成功处理了请求。通常，这表示服务器提供了请求的网页。如果是对您的 robots.txt 文件显示此状态码，则表示 Googlebot 已成功检索到该文件。
  
> 201(已创建)请求成功并且服务器创建了新的资源。
  
> 202(已接受)服务器已接受请求，但尚未处理。
  
> 203(非授权信息)服务器已成功处理了请求，但返回的信息可能来自另一来源。
  
> 204(无内容)服务器成功处理了请求，但没有返回任何内容。
  
> 205(重置内容)服务器成功处理了请求，但没有返回任何内容。与 204 响应不同，此响应要求请求者重置文档视图(例如，清除表单内容以输入新内容)。
  
> 206(部分内容)服务器成功处理了部分 GET 请求。
> 
> 3xx (重定向)
  
> 要完成请求，需要进一步操作。通常，这些状态码用来重定向。Google 建议您在每次请求中使用重定向不要超过 5 次。您可以使用网站管理员工具查看一下 Googlebot 在抓取重定向网页时是否遇到问题。诊断下的网络抓取页列出了由于重定向错误导致 Googlebot 无法抓取的网址。
  
> 300(多种选择)针对请求，服务器可执行多种操作。服务器可根据请求者 (user agent) 选择一项操作，或提供操作列表供请求者选择。
  
> 301(永久移动)请求的网页已永久移动到新位置。服务器返回此响应(对 GET 或 HEAD 请求的响应)时，会自动将请求者转到新位置。您应使用此代码告诉 Googlebot 某个网页或网站已永久移动到新位置。
  
> 302(临时移动)服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来响应以后的请求。此代码与响应 GET 和 HEAD 请求的 301 代码类似，会自动将请求者转到不同的位置，但您不应使用此代码来告诉 Googlebot 某个网页或网站已经移动，因为 Googlebot 会继续抓取原有位置并编制索引。
  
> 303(查看其他位置)请求者应当对不同的位置使用单独的 GET 请求来检索响应时，服务器返回此代码。对于除 HEAD 之外的所有请求，服务器会自动转到其他位置。
  
> 304(未修改)自从上次请求后，请求的网页未修改过。服务器返回此响应时，不会返回网页内容。
  
> 如果网页自请求者上次请求后再也没有更改过，您应将服务器配置为返回此响应(称为 If-Modified-Since HTTP 标头)。服务器可以告诉 Googlebot 自从上次抓取后网页没有变更，进而节省带宽和开销。
  
> 305(使用代理)请求者只能使用代理访问请求的网页。如果服务器返回此响应，还表示请求者应使用代理。
  
> 307(临时重定向)服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来响应以后的请求。此代码与响应 GET 和 HEAD 请求的 301 代码类似，会自动将请求者转到不同的位置，但您不应使用此代码来告诉 Googlebot 某个页面或网站已经移动，因为 Googlebot 会继续抓取原有位置并编制索引。
> 
> 4xx(请求错误)
  
> 这些状态码表示请求可能出错，妨碍了服务器的处理。
  
> 400(错误请求)服务器不理解请求的语法。
  
> 401(未授权)请求要求身份验证。对于登录后请求的网页，服务器可能返回此响应。
  
> 403(禁止)服务器拒绝请求。如果您在 Googlebot 尝试抓取您网站上的有效网页时看到此状态码(您可以在 Google 网站管理员工具诊断下的网络抓取页面上看到此信息)，可能是您的服务器或主机拒绝了 Googlebot 访问。
  
> 404(未找到)服务器找不到请求的网页。例如，对于服务器上不存在的网页经常会返回此代码。
  
> 如果您的网站上没有 robots.txt 文件，而您在 Google 网站管理员工具&#8221;诊断&#8221;标签的 robots.txt 页上看到此状态码，则这是正确的状态码。但是，如果您有 robots.txt 文件而又看到此状态码，则说明您的 robots.txt 文件可能命名错误或位于错误的位置(该文件应当位于顶级域，名为 robots.txt)。
  
> 如果对于 Googlebot 抓取的网址看到此状态码(在&#8221;诊断&#8221;标签的 HTTP 错误页面上)，则表示 Googlebot 跟随的可能是另一个页面的无效链接(是旧链接或输入有误的链接)。
  
> 405(方法禁用)禁用请求中指定的方法。
  
> 406(不接受)无法使用请求的内容特性响应请求的网页。
  
> 407(需要代理授权)此状态码与 401(未授权)类似，但指定请求者应当授权使用代理。如果服务器返回此响应，还表示请求者应当使用代理。
  
> 408(请求超时)服务器等候请求时发生超时。
  
> 409(冲突)服务器在完成请求时发生冲突。服务器必须在响应中包含有关冲突的信息。服务器在响应与前一个请求相冲突的 PUT 请求时可能会返回此代码，以及两个请求的差异列表。
  
> 410(已删除)如果请求的资源已永久删除，服务器就会返回此响应。该代码与 404(未找到)代码类似，但在资源以前存在而现在不存在的情况下，有时会用来替代 404 代码。如果资源已永久移动，您应使用 301 指定资源的新位置。
  
> 411(需要有效长度)服务器不接受不含有效内容长度标头字段的请求。
  
> 412(未满足前提条件)服务器未满足请求者在请求中设置的其中一个前提条件。
  
> 413(请求实体过大)服务器无法处理请求，因为请求实体过大，超出服务器的处理能力。
  
> 414(请求的 URI 过长)请求的 URI(通常为网址)过长，服务器无法处理。
  
> 415(不支持的媒体类型)请求的格式不受请求页面的支持。
  
> 416(请求范围不符合要求)如果页面无法提供请求的范围，则服务器会返回此状态码。
  
> 417(未满足期望值)服务器未满足&#8221;期望&#8221;请求标头字段的要求。
> 
> 5xx(服务器错误)
  
> 这些状态码表示服务器在处理请求时发生内部错误。这些错误可能是服务器本身的错误，而不是请求出错。
  
> 500(服务器内部错误)服务器遇到错误，无法完成请求。
  
> 501(尚未实施)服务器不具备完成请求的功能。例如，服务器无法识别请求方法时可能会返回此代码。
  
> 502(错误网关)服务器作为网关或代理，从上游服务器收到无效响应。
  
> 503(服务不可用)服务器目前无法使用(由于超载或停机维护)。通常，这只是暂时状态。
  
> 504(网关超时)服务器作为网关或代理，但是没有及时从上游服务器收到请求。
  
> 505(HTTP 版本不受支持)服务器不支持请求中所用的 HTTP 协议版本。
> 
> //全部
  
> $http_code[&#8220;0&#8243;]=&#8221;Unable to access&#8221;;
  
> $http_code[&#8220;100&#8243;]=&#8221;Continue&#8221;;
  
> $http_code[&#8220;101&#8243;]=&#8221;Switching Protocols&#8221;;
  
> $http_code[&#8220;200&#8221;]=”OK”;
  
> $http_code[&#8220;201&#8221;]=”Created”;
  
> $http_code[&#8220;202&#8221;]=”Accepted”;
  
> $http_code[&#8220;203&#8221;]=”Non-Authoritative Information”;
  
> $http_code[&#8220;204&#8221;]=”No Content”;
  
> $http_code[&#8220;205&#8221;]=”Reset Content”;
  
> $http_code[&#8220;206&#8221;]=”Partial Content”;
  
> $http_code[&#8220;300&#8221;]=”Multiple Choices”;
  
> $http_code[&#8220;301&#8221;]=”Moved Permanently”;
  
> $http_code[&#8220;302&#8221;]=”Found”;
  
> $http_code[&#8220;303&#8221;]=”See Other”;
  
> $http_code[&#8220;304&#8221;]=”Not Modified”;
  
> $http_code[&#8220;305&#8221;]=”Use Proxy”;
  
> $http_code[&#8220;306&#8221;]=”(Unused)”;
  
> $http_code[&#8220;307&#8221;]=”Temporary Redirect”;
  
> $http_code[&#8220;400&#8221;]=”Bad Request”;
  
> $http_code[&#8220;401&#8221;]=”Unauthorized”;
  
> $http_code[&#8220;402&#8221;]=”Payment Required”;
  
> $http_code[&#8220;403&#8221;]=”Forbidden”;
  
> $http_code[&#8220;404&#8221;]=”Not Found”;
  
> $http_code[&#8220;405&#8221;]=”Method Not Allowed”;
  
> $http_code[&#8220;406&#8221;]=”Not Acceptable”;
  
> $http_code[&#8220;407&#8221;]=”Proxy Authentication Required”;
  
> $http_code[&#8220;408&#8221;]=”Request Timeout”;
  
> $http_code[&#8220;409&#8221;]=”Conflict”;
  
> $http_code[&#8220;410&#8221;]=”Gone”;
  
> $http_code[&#8220;411&#8221;]=”Length Required”;
  
> $http_code[&#8220;412&#8221;]=”Precondition Failed”;
  
> $http_code[&#8220;413&#8221;]=”Request Entity Too Large”;
  
> $http_code[&#8220;414&#8221;]=”Request-URI Too Long”;
  
> $http_code[&#8220;415&#8221;]=”Unsupported Media Type”;
  
> $http_code[&#8220;416&#8221;]=”Requested Range Not Satisfiable”;
  
> $http_code[&#8220;417&#8221;]=”Expectation Failed”;
  
> $http_code[&#8220;500&#8221;]=”Internal Server Error”;
  
> $http_code[&#8220;501&#8221;]=”Not Implemented”;
  
> $http_code[&#8220;502&#8221;]=”Bad Gateway”;
  
> $http_code[&#8220;503&#8221;]=”Service Unavailable”;
  
> $http_code[&#8220;504&#8221;]=”Gateway Timeout”;
  
> $http_code[&#8220;505&#8221;]=”HTTP Version Not Supported”;
  
> $ch = curl_init();
  
> $url = “http://www.ganguoyuan.com/“;
  
> curl\_setopt($ch,CURLOPT\_URL,$url);
  
> curl\_setopt($ch,CURLOPT\_HEADER,1);
  
> curl\_setopt($ch,CURLOPT\_TIMTOUT,2);
  
> curl\_setopt($ch,CURLOPT\_NOBODY,1);
  
> $out = curl_exec($ch);
  
> $intReturnCode = curl\_getinfo($ch, CURLINFO\_HTTP_CODE);
  
> curl_close($ch);

> XMLHttpRequest cannot load http://localhost:8080/. No &#8216;Access-Control-Allow-Origin&#8217; header is present on the requested resource. Origin &#8216;http://localhost:63342&#8217; is therefore not allowed access.