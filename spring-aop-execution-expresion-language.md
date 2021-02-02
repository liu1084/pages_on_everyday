## spring中AOP的实现
## springboot
1.创建一个configuration类
2.添加@Aspect注解
```java
@Configuration
@Aspect
public class WebLogAspect{}
```
3.定义切入点
```java
@Pointcut("execution(* com.jim.web.controller..*.*(..))")
public void weblog(){}
```

4.定义AOP execution表达式
### execution表达式解析
1）`execution()`
表达式主题
2）`第一个*`
返回值的类型为任意
3）`com.jim.web.controller`
需要进行横切的业务类
4）`..`
当前包及其子包
5）`*`
当前包及其子包下的任意类
6）`.*(..)`
当前类下的任意方法，参数为任意类型

execution(modifiers-pattern? ret-type-pattern declaring-type-pattern?name-pattern(param-pattern) 
throws-pattern?)

execution(<修饰符模式>?<返回类型模式><类申明的类型模式><方法名模式>(<参数模式>)<异常模式>?)
举例子：

modifiers-patern -- 修饰符 public／private／proected等
ret-type-pattern -- 返回值类型 * 表示任意的返回类型
declaring-type-pattern -- 申明的类型
name-pattern -- 方法名
param-pattern -- 参数名

1）匹配public，返回类型为任意，方法名任意，参数任意类型和任意个数
```java
execution(public * *(..) )
```

2）匹配任意返回类型，方法名set开始和任意参数
```java
execution(* set*(..))
```

3）匹配返回任意类型，包com.jim.service下接口为AcountService的所有方法
```java
execution(* com.jim.service.AcountService.*(..))
```

4）匹配返回任意类型，包com.jim.service下所有方法
```java
execution(* com.jim.service..(..))
```

5）匹配返回任意类型，包com.jim.service下及其子包的所有方法
```java
execution(* com.jim.service...(..))
```

还有部分切点表达式有within／this/target/args等，详细看!(another PCD)[http://www.baeldung.com/spring-aop-pointcut-tutorial]


5.添加切面
@Before
@AfterReturning
@Around
@AfterThrowning

## springMVC