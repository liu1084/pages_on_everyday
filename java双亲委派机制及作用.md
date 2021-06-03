# java双亲委派机制及作用

###  什么是双亲委派机制

当某个类加载器需要加载某个.class文件时, 它首先把这个任务委托给他的上级类加载器, 直到Bootstrap ClassLoader, 如果上级的类加载器都没有加载, 尝试自己去加载这个类.



### 类加载器的类别

-   BootstrapClassLoader(启动类加载器)

功能

1.  c++编写, 加载java核心库java.*;
2.  构造ExtClassLoader和AppClassLoader
3.  开发者无法获取到启动类加载器的引用, 所以不能直接操作此加载器;



-   ExtClassLoader(标准扩展类加载器)

功能

1.  java编写, 加载扩展库.如: classpath中的jre, javax.*或者java.ext.dir指定位置中的类
2.  开发者可以直接使用标准扩展类加载器



-   AppClassLoader(系统类加载器)

功能

1.  java编写, 加载程序所在得目录. 如: user.dir所在位置得class



-   CustomClassLoader(自定义类加载器)

功能

1.  java编写, 用户自定义得类加载器, 可以加载指定路径得class文件

![类加载器](I:%5Cgithub%5Cpages_on_everyday%5Cimgs%5C2049388720-5db7ea6456049_articlex.jpg)



### 双亲委派机制的作用

-   防止重复加载同一个`.class`。通过委托去向上面问一问，加载过了，就不用再加载一遍。保证数据安全。
-   保证核心`.class`不能被篡改。通过委托方式，不会去篡改核心`.class`，即使篡改也不会去加载，即使加载也不会是同一个`.class`对象了。不同的加载器加载同一个`.class`也不是同一个`Class`对象。这样保证了`Class`执行安全。