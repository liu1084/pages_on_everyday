##java异常处理

包括以下几部分内容：

### java 异常处理的必要性

1. 可以使应用更加健壮
2. 异常经常会发生并被抛出

### java异常处理基础知识

1. Try-Catch-Finally
2. 异常分层

* “Call Stack” 什么是调用栈：从当前方法到Main方法的调用序列

例如：方法A调用方法B，方法B又调用了方法C，那么调用栈看起来就是：
>>>
A
B
C

当方法C返回的调用栈仅仅包含A和B，假如B接着又调用了方法D，那么调用栈看起来就是：
>>>
A
B
D

搞清楚调用栈对于学习异常传播非常重要。异常会一直从最初抛出的地方，一直传播到处理这种异常的方法的调用栈。

#### 异常的抛出
如果一个方法需要抛出异常，那么需要在方法声明的地方做抛出异常的签名，然后在方法中抛出这种异常。

```java
public Double divide (int a, int b) throws BadNumberException {
    if ( b == 0){
        throw new BadNumberException("Can not divide by 0");
    }

    return a / b;
}

```

* 当一个异常被抛出的时候，紧随在后面的语句就不会被执行，直到有处理该异常的catch语句才会继续执行catch语句块。
* 只要方法声明中有异常签名，那么你就可以抛出这种类型的异常。
* 异常类是一种普通的类，可以继承自包括java.lang.Exception在内的任何java内建异常类
* 如果方法A声明了可能会抛出异常AException，那么它可以抛出AException的子类，这也是合法的

#### 异常的捕获
如果当前方法调用了另外一个会抛出已检查异常的方法，那么当前方法要么继续传递异常到更高层的方法，要么捕获异常。
捕获异常通过使用try-catch语句块进行。

```java
public void callDivideMethod(){
    try{
        double result = divide(2, 1);
        System.out.pringln(result);
    }catch(BadNumberException e){
        //根据抛出的异常e，做一些文章
        System.out.println(e.getMessage());
    }
    System.out.println("Division attempt done");
}
```

上面的例子中，异常参数`e`指向divide方法抛出的可能异常。

* 如果在try-catch语句块中，没有任何异常被抛出，catch语句块就会被忽略，也不会被执行。
* 如果抛出了BadNumberException类型的异常，调用该方法的就会中断。程序会在捕获该异常的调用栈的地方，去执行catch语句块中的代码。
例如上面的例子中，如果抛出了异常，那么`System.out.pringln(result);`语句就不会被执行，继续执行捕获该异常的`catch`语句块。
* 如果在catch语句块中又有异常抛出并且这种异常还没有被捕获，那么catch语句块就会中断执行。
* 如果catch语句块顺利执行，那么程序继续执行catch语句块后面的语句。例如：上例中的`System.out.println("Division attempt done");`会继续执行。

#### 异常的继续传播
如果你不想捕获异常或者你无法处理捕获的异常，那么你可以声明当前方法继续抛出这种类型的异常，直到捕获该类型异常的调用栈的catch了异常，否则一直传递到java虚拟机那里。
```java
public void callDivide() throws BadNumberException{
    double result = divide(2, 1);
    System.out.println(result);
}
```

#### Finally语句
在try-catch后面添加finally语句，就变成了try-catch-finally。
finally中的语句总是会被执行，即使在try中抛出了异常，还是抛出异常后执行了catch语句块。如果在try中有返回语句，那么finally会首先执行。

#### 捕获异常还是传递异常？
这个需要根据实际情况而定。例如：在许多应用中，你需要告诉用户请求失败了，那么你在service中就可以一直传递异常直到controller调用栈，在这里捕获就可以。但是如果是数据库连接失败这样的异常，你可能需要在finally中关闭数据库连接，并且也不能告诉用户请求处理失败了。

如何处理异常，这决定于你是否选择选择已检查或者未检查异常。

#### try-with-resources
* 由带资源的try语句管理的资源必须实现AutoCloseable接口；
* 在try代码中声明的资源被隐式声明未final
* 通过分号分割多个管理的资源

```java
    try (FileInputStream input = new FileInputStream("file.txt"); 
    BufferedInputStream bufferedInput = new BufferedInputStream(input)){

        }catch(){

        }finally{

        }
```

#### 捕获多个异常

```java
try {

    // execute code that may throw 1 of the 3 exceptions below.

} catch(SQLException e) {
    logger.log(e);

} catch(IOException e) {
    logger.log(e);

} catch(Exception e) {
    logger.severe(e);
}
``` 

```java
try {

    // execute code that may throw 1 of the 3 exceptions below.

} catch(SQLException | IOException e) {
    logger.log(e);

} catch(Exception e) {
    logger.severe(e);
}
```

#### 异常分层
在java中，异常可以通过分层来组织结构。通过一个或者多个异常扩展另外一个异常来构建异常的分层

```java
public class MyException extends Exception{

}
```
如果你想捕获层次结构中的一种异常，那么它的子类也会被捕获。例如，由于FileNotFoundException 是IOException的子类，如果你捕获IOException异常，那么它的子类FileNotFoundException异常也会自动捕获。

#### 多个catch语句块
* 在try-catch语句块中，可以使用多个catch语句块捕获不同的异常。
* 如果一个try-catch捕获的异常都是一种类型或者该类型的子类的时候，可以使用从子类到父类的捕获方式。
```java
try{
    //call some methods that throw IOException's
} catch (FileNotFoundException e){
} catcy (IOException e){
}
```

#### Throws 子句
* 如果一个方法可能会抛出异常，那么你可以在方法声明的时候通过throws子句抛出该类型的异常，凡是这种类型或者该类型的子异常类，都适用。
```java
public void doSomething() throws IOException{
}
```
* 虽然子类异常不需要再次声明，但是写上也无妨，让开发者或者阅读者能够很明白。

```java
public void doSomething() throws IOException, FileNotFoundException{
}
```

#### 设计异常分层

* 在为API设计异常层次的时候，创建一个基础异常类是一个比较好的主意；
* 在此基础上，可以继续细化；

### 已检查和未检查异常

* java是同时支持已检查和未检查的少数几种语言之一。
* 已检查异常继承自java.lang.Exception,可以使用try-catch-finally语句块进行捕获；
* 未检查异常继承自java.lang.RuntimeException，没有要求捕获或者声明抛出异常；
* 对于已检查异常，要么调用的方法继续抛出异常，要么使用catch语句块捕获；

#### 使用已检查异常还是未检查异常？
* 通常建议：要么只使用已检查异常，要么只使用未检查异常；


### 通常的java异常处理意见

### 高级异常处理