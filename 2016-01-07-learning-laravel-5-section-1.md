---
id: 173
title: 'Learning Laravel 5 &#8211; section 1'
date: 2016-01-07T00:40:56+00:00
author: liu1084
layout: post
guid: http://blog.83096146.com/?p=173
permalink: /?p=173
categories:
  - linux
---
  * Laravel的路由包含在app/Http/route.php文件中，这个文件由Laravel框架自动载入。
  * 简单的路由由一个URI和一个闭包函数（closer）组成。这种方式提供了一种简洁而且定义路由的表达方式。
  * 所有需要访问session和CRSF（跨域伪造请求）的路由，都应该放在web中间件的分组中

<pre class=" language-php"><code class=" language-php">&lt;span class="token scope">Route&lt;span class="token punctuation">::&lt;/span>&lt;/span>&lt;span class="token function">group&lt;span class="token punctuation">(&lt;/span>&lt;/span>&lt;span class="token punctuation">[&lt;/span>&lt;span class="token string">'middleware'&lt;/span> &lt;span class="token operator">=&lt;/span>&lt;span class="token operator">&gt;&lt;/span> &lt;span class="token punctuation">[&lt;/span>&lt;span class="token string">'web'&lt;/span>&lt;span class="token punctuation">]&lt;/span>&lt;span class="token punctuation">]&lt;/span>&lt;span class="token punctuation">,&lt;/span> &lt;span class="token keyword">function&lt;/span> &lt;span class="token punctuation">(&lt;/span>&lt;span class="token punctuation">)&lt;/span> &lt;span class="token punctuation">{&lt;/span>
   &lt;span class="token comment" spellcheck="true"> Route::get('URI', function(){
         //返回或者使用view方法返回视图
    })

    Route::get('URI2', 'ControllerName@action');
&lt;/span>&lt;span class="token punctuation">}&lt;/span>&lt;span class="token punctuation">)&lt;/span>&lt;span class="token punctuation">;&lt;/span></code></pre>

  * Restful方式的路由，有：get/post/delete/options/patch/put/head/trace

  1. get &#8212; 获取特定资源，多次获取不应该有所不同
  2. post &#8212; 新增一个资源到服务器
  3. delete &#8212; 从服务器资源中删除某些资源
  4. put &#8212; 新增或者替换服务器资源，服务器中存在就替换，不存在就新增
  5. patch &#8212; 部分更新
  6. options &#8212; 获取服务器对特定资源的请求方式
  7. head &#8212; 获取头部信息，跟get相同，只不过不返回消息体

路由的动词有8个，laravel不支持trace和head。

技巧：

  * 有时候，你需要注册一个路由的URI，可以响应多种请求方式，可以使用：Route::match([&#8216;post&#8217;, &#8216;get&#8217;],  &#8216;URI&#8217;, callback);
  * 如果要注册一个响应所有请求方式的URI，可以使用：Route::any(&#8216;URI&#8217;, callback);

<pre>Route::match(['post', 'get'], 'foo/{id}/bar/{comment}', function($userId, $comment){
    return $userId . ' ' . $comment;
});</pre>

如果把上面的例子注册到route.php文件中，那么访问：foo/1/bar/fewfewfwefew，就会得到如下结果：

1 fewfewfwefew

  * Laravel默认只支持RESTful方式的参数，如果上例中你访问，laravel是不会匹配这种方式的

foo=1&bar=fewfewfwefew &#8211;> 将不会有任何结果

  * 另外，在URI中的参数，会分别映射到callback中的参数列表中。URI中的参数可以是正常的任意参数名，但是不能包含“-”（中划线），你可以采用“_”来替代
  * 如果URI中的参数是可选的，可以在参数名后面用“?”来标识，并且在回调函数中写上如果没用传递参数的时候的默认值

<pre>Route::get('foobar/{id?}', function($id = 1){
    return $id;
});</pre>

&#8211;> 1

  * 路由可以分组，也可以命名，命名路由用来生成URL或者重定向

命名路由，采用“as”关键字，或者采用name方法

<pre>Route::get('dog', ['as' =&gt; 'dogs', function(){
//      return route('dogs');
        return redirect()-&gt;route('cats');
    }]);

    Route::get('cat', 'CatController@index')-&gt;name('cats');</pre>