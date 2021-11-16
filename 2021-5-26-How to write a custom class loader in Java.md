##  How to write a custom class loader in Java?

Java的类加载器分为4级：

-   Bootstrap Class Loader
-   Extension Class Loader
-   System Class Loader
-   Custom class loader or User defined class loader



#### Class loader responsibility

| Name      | Class loader class               | Responsible to load                          | Level |
| :-------- | :------------------------------- | :------------------------------------------- | :---- |
| Bootstrap | Written in native language       | JAVA_HOME/lib， 例如rt.jar                   | 1     |
| Extension | sun.misc.Launcher$ExtClassLoader | JAVA_HOME/lib/ext, 例如：sunjce_provider.jar | 2     |
| System    | sun.misc.Launcher$AppClassLoader | Classpath                                    | 3     |
| Custom    | Your Class                       | Custom Location                              | 4     |

Bootstrap类加载器是Extension的父加载器，Extension类加载器是System加载器的父加载器。。。以此类推。

Java虚拟机加载类的时候， 会先委托System 类加载器，如果System未加载， 继续委托Extension，直到Bootstrap类加载器，如果他们都没有加载这个类，就使用Custom加载器去加载类。

这样做的好处：

-   防止java的核心类被篡改，及时篡改了没有用；
-   防止一个类被加载多次。



### 编写自定义类加载器

-   Extends java.lang.ClassLoader
-   Override public Class<?> loadClass(final String name)方法
-   加载class文件或者类的字节流
-   转换文件的字节流为字节数组
-   调用java.lang.ClassLoader方法： Class<?> defineClass(String name, byte [] b, int offset, int length)方法
-   调用java.lang.ClassLoader方法：void resolveClass(Class<?> clazz) 

