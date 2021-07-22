# java try catch 异常后还会继续执行吗

java try catch 异常后还会继续执行吗?

-   catch 中如果你没有再抛出异常 , 那么catch之后的代码是可以继续执行的 ,但是try中 , 报错的那一行代码之后 一直到try结束为止的这一段代码 , 是不会再执行的。

```java
public static void test() throws Exception  {
   try {
            throw new Exception("参数越界");
             System.out.println("异常后");//不可以执行
        } catch (Exception e) {
            e.printStackTrace();
        }
}
```

-    若一段代码前有异常抛出，并且这个异常没有被捕获，这段代码将产生编译时错误「无法访问的语句」 

```java
public static void test() throws Exception  {

    throw new Exception("参数越界"); 
    System.out.println("异常后"); //编译错误，「无法访问的语句」
}
```

-    若一段代码前有异常抛出，并且这个异常被try…catch所捕获，若此时catch语句中没有抛出新的异常，则这段代码能够被执行，否则，同第2条。 

```java
try {
    throw new Exception("参数越界");
} catch (Exception e) {
    e.printStackTrace();
}
System.out.println("异常后");//可以执行
```

-    若在一个条件语句中抛出异常，则程序能被编译，但后面的语句不会被执行。

```java
if(true) {
    throw new Exception("参数越界"); 
}
System.out.println("异常后"); //抛出异常，不会执行
```

