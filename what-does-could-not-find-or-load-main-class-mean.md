# 错误: 找不到或无法加载主类 Welcome

当你在shell中运行一个已经编译好的java类的时候, 可能会出现"错误: 找不到或无法加载主类 Welcome"的提示.

# 解决方法

## 首先想到的是设置CLASSPATH环境变量，设置全局的CLASSPATH不是一个好主意
## 运行的时候需要添加包名，是从包名开始+编译好的类的名称

例如：

```java
package com.jim.corebook.v1ch02;

/**
 * @author jim
 *
 */
public class Welcome {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String [] greeting = new String [3];
		greeting[0] = "Welcome Core Java";
		greeting[1] = "By Cay Horstman";
		greeting[2] = "and Cary Cornell";
		
		for (String g : greeting){
			System.out.println(g);
		}
	}

}
```

```shell
javac Welcome.java
java Welcome
```

这样肯定是不行的，因为缺少了包名。正确的运行方式应该是

```shell
javac Welcome.java

cd ../../..
java com.jim.corebook.v1ch02.Welcome
```

