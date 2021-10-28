## 关于Java中的assert关键字

Java中有一个不太常用的关键字assert，是jdk1.4中加入的，平时开发中见的很少，不过在一些框架的源码里面的测试类里面，出现过不少它的踪迹。

assert意为断言的意思，这个关键字可以判断布尔值的结果是否和预期的一样，如果一样就正常执行，否则会抛出AssertionError。

assert的作用类似下面的一段代码：

### 示例1

```java
@Test
public void testAssert() {
    assert false;
}

/**
这里的assert 后面可以跟布尔表达式，如果表达式返回true，则相安无事；否则会抛出AssertionError异常。
    
java.lang.AssertionError
	at com.jim.java.core.asserts.AssertTest.testAssert(AssertTest.java:8)
	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
	at ...
*/

/**
 * 上面的assert false相当于下面的代码
 * /
 
if (false) {
	throw new AssertionError();
}
```



### assert用法

1.  assert 表达式

    如示例1所示。

2.  assert 表达式: "message on 表达式返回false"

#### 示例2

```java
    public static void checkName(String name) {
        assert name != null : "name is null";
    }


    public static void main(String[] args) {
        checkName(null);
    }
```

运行示例2中的代码，发现没有任何反应。正确退出了。

这是因为assert语法必须在应用启动的时候添加vm参数：`-ea`才会起作用。

既然assert能够精简的进行一些case的判断，那是不是所有的判断都应该使用assert？

**在现实中，我们通常不会这样使用，原因是在生产服务器上，可能会忘记打开-ea参数，而且assert会占用一定的系统性能。**

那既然没法在生产环境中使用assert功能，那我们是否可以自己封装类似的功能？

答案是：yes

-   在Spring环境中，可以直接使用工具类：Assert

```java
Assert.notNull(obj, "object is null");
```

-   在非Spring环境中，可以使用jdk自带的Objects工具类

```java
Objects.requireNonNull()
```



