## javascript中的return、return true、return false、continue区别

-   语法: 

    return 表达式

```javascript
function a () {
    //...a
    return 表达式;
    //...b
}
```

-   功能
    1.  结束函数其他语句的调用，并返回给调用者一个表达式的值作为函数调用的结果；
-   举个例子

```javascript
function myFun() {
    console.log("Hello");
    return "World";
    console.log("byebye")
}

let result = myFun();
```

调用myFun()后，再控制台输出"Hello"，返回一个字符串"World"给result（调用者），然后就退出了。

后面打印输出”byebye“到控制台不会被执行。



-   return false

1.  在大多数情况下，return false都是为了防止默认的事件发生。

例如：

```html
<a onclick="handleClick(); return false;">click me</a>
```

2.  return false只在当前函数体内发挥作用，并不影响函数体外的语句执行

例如：

```javascript
function a() {
    console.log("a");
    return false;
}

function b() {
    console.log("b");
    return false;
}

function multiFun() {
    a();
    b();
}

multiFun();
```

3.  return false实际上做了3件事

    ```javascript
    e.preventDefault();
    e.stopPropagation();
    停止函数执行，并立刻返回值；
    ```

4.  return、 continue、break 的区别

    return:

    -    return 从当前的方法中退出,**返回到该调用的方法的语句**处,继续执行。 
    -    return 返回一个值给调用该方法的语句，返回值的数据类型必须与方法的声明中的返回值的类型一致。 
    -    return后面也可以不带参数，不带参数就是返回空，其实主要目的就是用于想中断函数执行，返回调用函数处。 

    continue:

    终止本次循环的执行，即**跳过当前这次循环**中continue语句后尚未执行的语句，接着进行下一次循环条件的判断。 它不是退出一个循环，而是开始循环的一次新迭代。  continue语句只能用在**while**语句、**do/while**语句、**for**语句、或者**for/in**语句的循环体内，在其它地方使用都会引起错误！ 

    break：

    break在循环体内，强行结束循环的执行，也就是**结束整个循环过程**，不在判断执行循环的条件是否成立，**直接转向循环语句下面**的语句。  当break出现在循环体中的switch语句体内时，其作用只是跳出该switch语句体。 

    