---
id: 135
title: The big number in javascript
date: 2016-01-05T00:20:07+00:00
author: liu1084
layout: post
guid: http://blog.83096146.com/?p=135
permalink: /?p=135
categories:
  - linux
---
JavaScript中整数的最大&#8221;安全&#8221;数值为在-(2^53 &#8211; 1) 和 (2^53 &#8211; 1) 之间，即：
  
Number.MAX\_SAFE\_INTEGER ： 9007199254740991
  
Number.MIN\_SAFE\_INTEGER ： 9007199254740991
  
超过这个范围的数学计算在有可能是是不准确的，比如在目前最新版的Chrome中：
  
> 9007199254740991 * 256
  
2305843009213693700 //1 * 6 = 6, 最后一位应该是6?
  
实现结果应该是： 2305843009213693696 即损失了一定的精度。
  
JavaScript中的Number对象有一个 Number.isSafeInteger 可以判断此数值是否在安全范围:
  
> Number.isSafeInteger(2305843009213693700)
  
false
  
Crunch是用JavaScript写的一个任意精度的整数运算库。
  
它被设计用来快速地执行算术运算，特别是那些基于非对称加密密码系统诸如RSA构建。
  
使用
  
Crunch 可以用被网站引用
  
<script src=&#8221;crunch.js&#8221;></script>
  
<script>
  
var crunch = Crunch();
  
</script>
  
或者在web worker中引用
  
var crunch = new Worker(&#8220;crunch.js&#8221;);
  
或者在node模块中使用
  
npm install number-crunch
  
var crunch = require(&#8220;number-crunch&#8221;);
  
范例 1
  
x = [10, 123, 21, 127];
  
y = [4, 211, 176, 200];
  
crunch.add(x, y); //[15, 78, 198, 71]
  
这个库使用8位（最大256）整型数组来表示“大整数”。但是在其内部它会被自动转换为28位整型数组。
  
Crunch 同样可以转化和解析成10进制的字符串，(string上面的默认方法是无法表达大整数的) 使用.stringify() 和 .parse() 方法.
  
范例 2
  
crunch.stringify([1,2,3,4,5,6,7,8,9,0]); // &#8220;4759477275222530853120&#8221;

crunch.parse(&#8220;4759477275222530853120&#8221;); // [1,2,3,4,5,6,7,8,9,0]

支持的方法
  
Function Input Parameters Output
  
add x, y x + y
  
sub x, y x &#8211; y
  
mul x, y x * y
  
div x, y x / y
  
sqr x x * x
  
mod x, y x % y
  
bmr x, y, [mu] x % y
  
exp x, e, n x^e % n
  
gar x, p, q, d, u, [dp1], [dq1] x^d % pq
  
inv x, y 1/x % y
  
xor x, y x XOR y
  
cut x Remove leading zeroes of x
  
zero x Return zero array of length x
  
compare x, y -1: x < y, 0: x = y, 1: x > y
  
decrement x x &#8211; 1
  
factorial n n! [n < 268435456]
  
nextPrime x First prime after x
  
testPrime x Boolean x is prime
  
stringify x String (base 10 representation)
  
parse s Arbitrary-precision integer
  
transform x, [toRaw] Radix conversion
  
Web Workers
  
Crunch 可以在 Web Worker 中加载. 指令信息通过如下格式传递:
  
{func: &#8220;&#8221;, args: []}
  
例子 3
  
var crunch = new Worker(&#8220;crunch.js&#8221;);
  
var message = {func: &#8220;add&#8221;, args: [[10, 123, 21, 127], [4, 211, 176, 200]]};

crunch.onmessage = function(m) {
  
console.log(m);
  
};

crunch.postMessage(message);
  
注* 并且JavaScript中位运算所操作的是32位有符号整数，此运算目前还不支持对位运算的扩展。