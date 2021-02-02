---
id: 129
title: JavaScript Base
date: 2016-01-05T00:12:41+00:00
author: liu1084
layout: post
guid: http://blog.83096146.com/?p=129
permalink: /?p=129
categories:
  - linux
---
  * Base 1
  
    字符集
  
    javascript使用的是unicode字符集
  
    区分大小写
  
    可以使用安全的转义字符：例如可以包含中文字符：\u4e00~\u9fa5

注释
  
代码注释很重要，需要注释的地方，最好能标记一下，没有实现的地方，可以使用//FIXED!来表示
  
//–-表示行内注释
  
/**
  
* –- 多行注释
  
*/
  
输出结果到控制台
  
可以使用console（建议使用），当然你也可以使用alert弹出，这种方式输出对象，就不好用了。
  
分号和大括号
  
每行语句结束后，需要添加大括号（尽管不是必须的，但是强烈建议使用）
  
把相关的语句块放在大括号中，即使只有一条语句，也请使用。例如：

if (a){
  
return true;
  
}
  
数据类型
  
在javascript中，数据分为：基本类型和对象类型
  
基本类型：number，string，boolean，undefined，null
  
对象类型：object，比如：function，array

1）javascript中的数字不区分浮点数和整数，所有数字均采用浮点数值表示。
  
2）javascript的数字表现形式是十进制，但是在内部实际上是采用二进制来表示的，所以每个数字其实并不精确，只是无限接近真实值。所以不能用来做相等比较。例如：

var x = .3 &#8211; .2
  
var y = .2 &#8211; .1
  
x == y
  
x == .1
  
y == .1
  
上面的所有等式是错误的，千万不要拿数字做相等比较！！
  
3）javascript中内置了几个类，包括：Number，Function，Array，Date，RegExp和Error
  
4）javascript中的typeof是用来检查数据类型的，但是实际上并不准确，可以通过https://github.com/toddmotto/axis来进行类型检测。
  
转义字符
  
javascript中转义字符比较常见的用途：
  
1）用于换行（回车和换行实际上就是2个字符，window中是 &#8211; \r\n，MAC中是 &#8211; \r， UNIX中是 &#8211; \n
  
2）用于在javascript中显示特殊字符，例如：var st = &#8216;\u9fa5&#8217;;
  
字符串
  
1）使用“+”来连接字符串
  
2）javascript中的字符串实际上也是一个数组，所以字符串中的每个元素都是有序号的，从0开始
  
字符串的方法：
  
length() – 返回字符串的长度
  
charAt(number) – 返回字符串中指定位置的字符，例如：s.charAt(0)会返回字符串s的第一个字符
  
substring(start, end) – 返回字符串中第start位置开始，到end位置结束的子字符串
  
slice(start, end) – 同substring(1, 4)功能相同
  
indexOf(&#8220;something&#8221;) – 返回字符串首次出现something的位置
  
indexOf(&#8220;something&#8221;, 3) – 返回从位置3开始，首次出现something的位置
  
split(str | reg) – 返回以某个字符串或者正则表达式分割的子字符串
  
replace(str | reg, &#8220;string&#8221;) – 返回替换的字符串
  
toUpperCase() – 返回大写化字符串
  
正则表达式
  
1）javascript定义了正则表达式（perl模式）对象的构造函数：RegExp()，用来创建表示匹配文本的对象
  
2）正则表达式在查找、替换、分割字符串的时候非常有用，例如：在网站注册的时候，校验用户的密码复杂程度，校验用户名的命名是否符合规范，校验手机号，身份证号码等等，都需要用到

var pattern = new RegExp(&#8220;^[1-9]+[0-9]*&#8221;, &#8220;gm&#8221;); //匹配以1-9开始，后面跟任意数字的部分，全局、多行匹配
  
var str1 = &#8220;0999&#8221;
  
pattern.test(str1) //=> false
  
var str1 = &#8220;999&#8221;
  
pattern.test(str1) //=> true
  
使用正则匹配的时候，最好使用String提供的4个方法：match/replace/split/search
  
方法
  
描述
  
search 检索与正则表达式相匹配的值。
  
match 找到一个或多个正则表达式的匹配。
  
replace 替换与正则表达式匹配的子串。
  
split 把字符串分割为字符串数组。
  
定义变量，并给变量赋值

var number = 1,
  
string = &#8221;,
  
object = {};
  
变量的作用域
  
不在函数内声明的变量，都是全局变量。在任何地方都是可见的。
  
在函数内声明的变量，只在函数内可见。
  
布尔值
  
布尔值包括：true和false，一般用来逻辑比较，判断左右两边的值是否相等，不等、大于、小于、大于等于、小于等于等。

var x = 2, y = 3;
  
x == y //=> false
  
x != y //=> ture
  
x < y //=> true
  
x > y //=> false
  
x <= y //=> true
  
x >= y //=> false

&#8220;two&#8221; == &#8220;three&#8221; //=>false
  
&#8220;two&#8221; > &#8220;three&#8221; //=>true 为什么？
  
false == (x > y) //=> true

(x == 2) && (y == 3) //=>true, && 用来表示逻辑与，两边都是true，结果才是true
  
(x > 3) || (y < 3) //=>false，||用来表示逻辑或，两边都是false，结果才是false
  
!(x == y) //=>true，!用来表示取反

1）布尔值会在控制语句中用到，只有2个值：true或者false
  
2）null, undefined, 0, &#8220;&#8221;, NaN会自动转换为false，其他的对象、数组值都会自动转换为true。注意：{}和[]也为true。所以，if (result !== null) 和if (result)是有区别的（什么区别？）。
  
3） 运算符 && 、 || 和 !
  
null 和 undefined
  
null是javascript中一个特殊的值，表示“非对象”。
  
undefined也是javascript中一个特殊的值，表示没有被初始化的变量或者对象没有这个属性，或者函数没有返回值的时候的返回或者没有传递给函数实参的时候，这个实参的值。

区别：
  
你可以把一个变量初始化为null，但是如果不进行初始化，那么这个变量的值就是undefined。
  
typeof的时候，undefined返回undefined，null返回object（当然，这个应该是应该是typeof的bug了，因为null表示的是非对象）

条件语句

function abs(x){
  
if (x >= 0){
  
return x;
  
}else{
  
return -x;
  
}
  
}
  
循环语句

function factorial(n){
  
var count = 1;
  
while (n > 1){
  
count *= n + 1;
  
n&#8211;;
  
}

return count;
  
}

function factorial2(n){
  
var count = 1;
  
for (var i = 2; i < n; n&#8211;){
  
count *= i;
  
}

return count;
  
}
  
课后作业
  
请说出带？行的结果

var array1 = [1, 2, 3];
  
array1.action = function(){
  
console.log(this); //?
  
};
  
console.log(array1.length); //?
  
求3的立方根
  
使用刚刚学到的知识，计算以下两个点之间的距离：假设屏幕上有两个点，p1和p2，它们的坐标分别如下：p1(501, 300), p2(18, 95)，请把计算方法写出来
  
javascript是面向对象的，请问如何实现Rectangle继承Shap？
  
什么是上下文context?
  
什么是闭包，如何实现闭包？
  
打印斐波拉契数列

  * Base 2

Base 2
  
不可变的原始值和可变的对象引用
  
javascript中原始值：undefined, null, 布尔值, 数字, 字符串
  
什么是JSON？
  
关于JSON，可以访问：http://www.json.org/
  
是一种轻量级的数据描述和传输格式，它不依赖于任何语言。
  
目前已经是标准的数据格式，是ECMASCRIPT标准的一部分，在web开发中非常常见，甚至在NOSQL中也得到了很好的应用。
  
JSON分为以下几种格式，这里进行说明：
  
格式
  
特征
  
形式
  
字符串 以&#8221;&#8221;括起来的一串字符串 &#8220;string1&#8221;
  
对象
  
采用key-value键值对形式，两边用大括号({})表示开始和结束。
  
键值对之间用冒号分割，键需要用引号（双引号）括起来，值可以是任意的值，包括：
  
对象、数组、字符串，数值，布尔值等等。 每个键值对之间可以用逗号分割。
  
{&#8220;key1&#8243;:value1，&#8221;key2&#8221;:value2}
  
{&#8220;key1&#8243;:{}，&#8221;key2&#8221;:[], &#8220;key3&#8221;: number, &#8220;key4&#8221;: &#8220;string&#8221;}
  
布尔值 表示true或者false true
  
数值 一系列0-9的数字组合，可以为负数或者小数。还可以用“e”或者“E”表示为指数形式。 99
  
数组
  
有序的值的集合，这里的有序表示可以采用下标（从0开始）访问数组元素。
  
数组中的值跟对象中一样，可以是任意的形式，还可以嵌套
  
[&#8220;string&#8221;, {&#8220;key1&#8221;: value1}, 2, [{&#8220;key2&#8221;: value2}]]
  
序列化和反序列化javascript对象
  
在javascript中，json对象可以被序列化为字符串，这种类型的字符串也可以被反序列化为json对象。

//序列化
  
var response = [{&#8220;dod&#8221;:&#8221;-15&#8243;,&#8221;wow&#8221;:&#8221;37&#8243;,&#8221;sales&#8221;:&#8221;66191893&#8243;}];
  
JSON.stringify(response)

//反序列化
  
console.log(JSON.parse(&#8216;[{&#8220;dod&#8221;:&#8221;-15&#8243;,&#8221;wow&#8221;:&#8221;37&#8243;,&#8221;sales&#8221;:&#8221;66191893&#8243;}]&#8217;));
  
复合数组、对象

var json = [[1, 2], [4, 4]];
  
var objects = [{name: &#8216;name1&#8217;, age: 20, department: &#8216;uit&#8217;}, {name: &#8216;name2&#8217;, age: 30, department: &#8216;uit&#8217;}];
  
访问变量和对象
  
每个变量有其作用域范围，在javascript中，外部定义的变量总是可以在内部使用，但是无法在外层使用。
  
var person = {id: 1, name: &#8216;god&#8217;};
  
function checkACL(){
  
var acl = /^[a-z]+$/i;
  
console.log(person.id);
  
}

checkACL();
  
console.log(acl); //error, acl is not defined(…)，如果想访问acl这个变量，应该怎么办？
  
算术操作符
  
算术表达式可以生成一个新的值，包括“+、-、*、/”
  
3 + 2 //=>5
  
3 &#8211; 2 //=>1
  
3 * 2 //=>6
  
3 / 2 //=>1.5

points[1].x &#8211; points[2].x //=>1
  
3 + &#8220;2&#8221; //=>32
  
&#8220;3&#8221; + &#8220;2&#8221; //=>32 ，“+”既可以计算两个数值型操作数的值，也可以连接两个字符串
  
短&#8212;&#8211;算术操作符
  
var count = 0;
  
count++;
  
count&#8211;;
  
count += 2;
  
count *= 3;
  
count //=>变量名也是一个表达式
  
什么是函数和方法，区别是什么？
  
函数是一个可以带参数的，命名或者匿名的代码块。
  
命名函数定义好以后，可以多次调用。而匿名函数一般用来做返回或者回调。
  
function plus1(x){
  
return x + 1;
  
}
  
Collapse source
  
1
  
plus1(x) //=> x 是2， 所以这里返回3
  
var square = function(x){ //函数可以是值，并且能够指定给一个变量
  
return x * x; //计算函数的值
  
}; //表达式以;结尾square(plus1(y)); //=>16:在一个表达式中调用两个函数
  
当我们把一个函数指定给一个对象的时候，这个函数就变成了对象的方法。所有的javascript对象都有自己的方法（继承的或者自有的）。
  
var a = [];
  
a.push(1,2,3); //数组方法
  
a.reverse(); //数组方法

var points = [ // An array with 2 elements.
  
{x:0, y:0}, // Each element is an object.
  
{x:1, y:1}
  
];

points.dist = function(){
  
var p1 = this[0];
  
var p2 = this[1];
  
var a = p2.x &#8211; p1.x;
  
var b = p2.y &#8211; p1.y;

return [a, b];
  
};

points.dist();
  
如何定义一个对象，并在这个对象上建立方法？
  
javascript是一门面向对象的语言，但是跟其他大部分语言又不同。例如：它的继承是通过原型链进行的，它的构造器就是一个函数。
  
跟普通的函数相比，构造器有两点不同：
  
不需要返回；函数名首字母大写；
  
function Point (x, y){
  
this.x = x;
  
this.y = y;
  
}

Point.prototype.r = function(){
  
return Math.sqrt(this.x * this.x + this.y + this.y);
  
};

var p = new Point(1, 1);p.r();
  
立即执行函数
  
(function($, H){

})(jQuery, Handlerbars);
  
OR
  
(function($, H){

}(jQuery, Handlerbars));

  * Client-side JavaScript
  
    如何在html中引入javascript？
  
    有两种方式，
  
    在html文件中直接引用js文件；直接将js包裹在script中，直接在html文件中（不推荐，有时候为了和后台配合，需要传递参数到页面中，这种情况下，可以勉强使用这种方式）；
  
    <!DOCTYPE html></p> 
    <html lang=&#8221;en-us&#8221;>
  
    <head>
  
    <meta charset=&#8221;UTF-8&#8243;/>
  
    <meta http-equiv=&#8221;X-UA-Compatible&#8221; content=&#8221;IE=Edge&#8221;>
  
    <meta name=&#8221;viewport&#8221; content=&#8221;width=device-width, initial-scale=1&#8243;>
  
    <title>index</title>
  
    <link rel=&#8221;shortcut icon&#8221; link=&#8221;/favicon.ico&#8221;/>
  
    <link rel=&#8221;stylesheet&#8221; href=&#8221;../libs/bootstrap/dist/css/bootstrap.css&#8221;/>
  
    <link rel=&#8221;stylesheet&#8221; href=&#8221;../css/common.css&#8221;/>
  
    </head>
  
    <body>
  
    <header class=&#8221;navbar navbar-static-top bs-docs-nav&#8221; id=&#8221;top&#8221; role=&#8221;banner&#8221;>
  
    <nav class=&#8221;navbar navbar-default&#8221;>
  
    <div class=&#8221;container-fluid&#8221;>
  
    <!&#8211; Brand and toggle get grouped for better mobile display &#8211;>
  
    <div class=&#8221;navbar-header&#8221;>
  
    <button type=&#8221;button&#8221; class=&#8221;navbar-toggle collapsed&#8221; data-toggle=&#8221;collapse&#8221; data-target=&#8221;#bs-example-navbar-collapse-1&#8243;>
  
    <span class=&#8221;sr-only&#8221;>Toggle navigation</span>
  
    <span class=&#8221;icon-bar&#8221;></span>
  
    <span class=&#8221;icon-bar&#8221;></span>
  
    <span class=&#8221;icon-bar&#8221;></span>
  
    </button>
  
    <a class=&#8221;navbar-brand&#8221; href=&#8221;#&#8221;>Logo</a>
  
    </div>
    
    <!&#8211; Collect the nav links, forms, and other content for toggling &#8211;>
  
    <div class=&#8221;collapse navbar-collapse&#8221; id=&#8221;bs-example-navbar-collapse-1&#8243;>
  
    <ul class=&#8221;nav navbar-nav navbar-right&#8221;>
  
    <li class=&#8221;active&#8221;>
  
    <a href=&#8221;#&#8221;>
  
    <span style=&#8221;font-weight: bold;&#8221;>Home</span>
  
    <span style=&#8221;height: 3px; background-color: #00FF00; display: block;&#8221;>&nbsp;</span>
  
    </a>
  
    </li>
  
    <li><a href=&#8221;#&#8221;>Setting</a></li>
  
    <li class=&#8221;dropdown&#8221;>
  
    <a href=&#8221;#&#8221; class=&#8221;dropdown-toggle&#8221; data-toggle=&#8221;dropdown&#8221; role=&#8221;button&#8221; aria-expanded=&#8221;false&#8221;>CN40309<span class=&#8221;caret&#8221;></span></a>
  
    <ul class=&#8221;dropdown-menu&#8221; role=&#8221;menu&#8221;>
  
    <li><a href=&#8221;#&#8221;>Sign Out</a></li>
  
    </ul>
  
    </li>
  
    </ul>
  
    </div>
  
    <!&#8211; /.navbar-collapse &#8211;>
  
    </div>
  
    <!&#8211; /.container-fluid &#8211;>
  
    </nav>
  
    </header>
  
    <main id=&#8221;main&#8221; class=&#8221;container-fluid&#8221;>
  
    <div style=&#8221;-webkit-column-count: 3; -webkit-column-gap: 1em;&#8221;>
  
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.
  
    </div>
  
    <ul>
  
    <li>1</li>
  
    <li>2</li>
  
    <li>3</li>
  
    <li>4</li>
  
    </ul>
    
    <div style=&#8221;display: flex;&#8221;>
  
    <nav style=&#8221;min-width: 200px; width: 200px;border: 1px solid #f00; height: 500px;&#8221;></nav>
  
    <section style=&#8221;flex: 1; border: 1px solid #0f0; height: 500px; display: flex;&#8221;>
  
    <div style=&#8221;flex: 1;height: 500px;border: 2px solid #ff0;&#8221;></div>
  
    <div style=&#8221;flex: 2;height: 500px;border: 2px solid #0ff;&#8221;></div>
  
    </section>
  
    </div>
    
    <section style=&#8221;position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);&#8221;>
  
    <div style=&#8221;display: flex; justify-content: center; align-items: center; width: 320px; height: 220px; border: 1px solid;&#8221;>
  
    <div style=&#8221;width: 100px; height: 100px; border: 1px dashed ;&#8221;></div>
  
    </div>
  
    </section>
  
    </main>
  
    <footer role=&#8221;contentinfo&#8221; id=&#8221;footer&#8221; class=&#8221;col-xs-12&#8243;>
  
    <div class=&#8221;container&#8221;>All right reserved by Jim</div>
  
    </footer>
  
    <!&#8211; Javascript start &#8211;>
  
    <script src=&#8221;../libs/jquery/dist/jquery.js&#8221;></script>
  
    <script src=&#8221;../libs/bootstrap/dist/js/bootstrap.js&#8221;></script>
  
    <script src=&#8221;../libs/Prototype.js&#8221;></script>
  
    <script src=&#8221;../js/app/jquery-plugin-template.js&#8221;></script>
  
    <script src=&#8221;../js/app/index.js&#8221;></script>
    
    <!&#8211; Javascript end &#8211;>
  
    </body>
  
    </html>
  
    如何实现定时刷新？
  
    //window对象有两个方法，setTimeout()和setInterval()
  
    function reloadPage(){
  
    location.reload(true);
  
    }
  
    var secs = 5000;
  
    //setTimeout(reloadPage, secs);
  
    setInterval(reloadPage, secs);
  
    如何在dom元素中注册javascript事件？</li> </ul> 
    
    .addEventListener(&#8220;eventName&#8221;, handleEvent, boolean)
  
    课后作业
  
    windows有哪些属性和方法？
  
    举例说明：javascript正则表达式
  
    javascript调试方法有哪些？
  
    前端页面如何调优？