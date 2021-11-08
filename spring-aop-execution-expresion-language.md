## spring中AOP的实现

[]: https://www.baeldung.com/spring-aop-pointcut-tutorial

[]:https://zhuanlan.zhihu.com/p/63001123



####  切入点指示符

Spring AOP支持使用以下AspectJ切点标识符(PCD),用于切点表达式：

    execution: 用于匹配方法执行连接点。 这是使用Spring AOP时使用的主要切点标识符。 可以匹配到方法级别 ，细粒度
    within: 只能匹配类这级，只能指定类， 类下面的某个具体的方法无法指定， 粗粒度
    this: 匹配实现了某个接口：this(com.xyz.service.AccountService)
    目标对象使用aop之后生成的代理对象必须是指定的类型才会被拦截，注意是目标对象被代理之后生成的代理对象和指定的类型匹配才会被拦截。
    
    target: 限制匹配到连接点（使用Spring AOP时方法的执行），其中目标对象（正在代理的应用程序对象）是给定类型的实例。
    args: 限制与连接点的匹配（使用Spring AOP时方法的执行），其中变量是给定类型的实例。 AOP) where the arguments are instances of the given types.
    @target: 限制与连接点的匹配（使用Spring AOP时方法的执行），其中执行对象的类具有给定类型的注解。
    @args: 限制匹配连接点（使用Spring AOP时方法的执行），其中传递的实际参数的运行时类型具有给定类型的注解。
    @within: 限制与具有给定注解的类型中的连接点匹配（使用Spring AOP时在具有给定注解的类型中声明的方法的执行）。
    @annotation:限制匹配连接点（在Spring AOP中执行的方法具有给定的注解）。




### execution指示器
1）`execution()`
执行方法时会拦截。

execution(<方法修饰符public/private/protected>?<返回类型模式><方法名模式>(<参数模式>)<异常模式>?)

?表示可选

exectution是一种使用频率比较高的切点表达式，以方法的执行作为切入点。



比如：可以匹配Person类里的eat()方法

```java
@Aspect
@Component
public class PersonAspect {
    @Before("execution(* com.jim.web.Person.eat())")
    public void log(JoinPoint jp, Target target) {
        //存储日志
    }
}
```

或者

```java
@Aspect
@Component
public class PersonAspect {
    @PointCut("execution(* com.jim.web.Person.eat())")
    private void log() {
    	//空方法，只是为了定义切点
    }
    
    
    @Before("log()")
    public void logging() {
        //存储日志
    }
}
```

第二种方法可以让切点表达式重复使用。



总结Aspect的execution的使用方法

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

4.  使用切点方法

```java
@Before("weblog()")
public void log(JoinPoint jp, Target target) {

}
```

对上面切点表达式的解释:

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



切点表达式中方法入参部分比较复杂，可以使用”*”和“..”通配符，其中“*”表示任意类型的参数，而“..”表示任意类型参数且参数个数不限。 

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



### 实例

-   匹 配joke(String,int)方法，且joke()方法的第一个入参是String，第二个入参是int。如果方法中的入参类型是Java.lang包下的类，可以直接使用类名，否则必须使用全限定类名，如joke(java.util.List,int)； 

    ```java
    execution(* *..joke(java.lang.String, int))
    ```

-   匹 配目标类中的joke()方法，该方法第一个入参为String，第二个入参可以是任意类型，如joke(Strings1,String s2)和joke(String s1,double d2)都匹配，但joke(String s1,doubled2,String s3)则不匹配；

    ```java
    execution(* *..joke(java.lang.String, *))
    ```

-    匹配目标类中的joke()方法，该方法第  一个入参为String，后面可以有任意个入参且入参类型不限，如joke(Strings1)、joke(String s1,String  s2)和joke(String s1,double d2,Strings3)都匹配。 

    ```java
    exection(* *..joke(String, ..))
    ```

-   匹 配目标类中的joke()方法，方法拥有一个入参，且入参是Object类型或该类的子类。它匹配joke(Strings1)和joke(Client c)。如果我们定义的切点是execution(*joke(Object))，则只匹配joke(Object object)而不匹配joke(Stringcc)或joke(Client c)。

    ```java
    exection(* *..joke(Object+))
    ```

-   匹配public方法

    ```java
    exection(public * *(..))
    ```

-   匹配set开头的方法

    ```java
    exectution(* * set*(..))
    ```

-   匹配接口AccountService的任意方法

    ```java
    execution(* com.jim.web.service.AccountService.*.*(..))
    ```

-   匹配service包下的任意方法

    ```java
    execution(* com.jim.web.service.*.*(..))
    ```

-   匹配service包及其子包的任意方法

    ```java
    execution(* com.jim.web.service..*.*(..))
    ```



#### within指示器

1.  接口，类，包名时会拦截
2.  语法：within(<type name>)

-   匹配com.jim.web.controller.PersonController类中的所有方法

```java
package com.jim.web.controller;

@RestController
@RequestMapping("/person")
public class PersonController {
   
    @GetMapping
    public ResponseEntity<Person> getAll() {
        //获取所有Person
    }
}
```



```java
@Component
@Aspect
public class PersonAspect{
    @PointCut("within(com.jim.web.controller.PersonController)")
    private void log() {}
    
    @Before("log()")
    public void logging(JoinPoint jp, Target target) {
        
    }
}
```



-   匹配com.jim.web.service包及其子包的所有方法

```java
@PointCut("within(com.jim.web.service..*(..))")
```



-   匹配com.zx.aop1.person.Person类及其子类的所有方法 

```java
@Pointcut("within(com.zx.aop1.person.Person+)")
```



#### this和target指示器

-   语法 

this(<type name>) 

target(<type name>)

this匹配被代理后的实例与一个给定类型相同，这种形式Spring会创建CGLib的代理；而target匹配目标对象与一个给定类型相同，这种形式会创建JDK代理。

表示被JDK或者cglib代理后生成的对象为<type name>时会被拦截。



举个例子：

```java
@Slf4j
@Service
public class ServiceImpl implements IService {
    @Override
    public void m1() {
        log.info("切入点this测试！");
    }
}

```
ServiceImpl实现类接口IService，所以Spring会使用基于JDK的代理，所以就应该用target指示器。
@Pointcut("target(com.jim.web.service.IService)")



```java
@Aspect
@Component
@Slf4j
public class Interceptor1 {
    @Pointcut("this(com.ms.aop.jthis.demo1.ServiceImpl)")
    public void pointcut() {
    }
    @Around("pointcut()")
    public Object invoke(ProceedingJoinPoint invocation) throws Throwable {
        log.info("方法执行之前");
        Object result = invocation.proceed();
        log.info("方法执行完毕");
        return result;
    }
}
```

```java
@ComponentScan(basePackageClasses = {Client.class})
@EnableAspectJAutoProxy
@Slf4j
public class Client {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext annotationConfigApplicationContext = new AnnotationConfigApplicationContext(Client.class);
        IService service = annotationConfigApplicationContext.getBean(IService.class);
        service.m1();
        log.info("{}", service instanceof ServiceImpl);
    }
}
```

如果指示器中要拦截的类没有实现任何接口，或者在@EnableAspectAutoProxy(proxyTargetClass=true)，那么被代理的对象生成的对象是被代理类的子类。
这个时候就用this指示器。
@Pointcut("this(com.jim.web.service.ClassName)")


#### args指示器

args指示器被用来匹配方法的参数
@Pointcut("execution(* *..find*(Long))")
这个切点匹配任意以find开头并且只有一个Long类型的参数。

@Pointcut("execution(* *..find*(Long, ..))")
而这个切点匹配任意以find开头的方法，方法的第一个参数类型是Long类型，还可能会包括0~N个任意类型的参数。


#### @target指示器
限制匹配执行对象的类有某个注解。
例如：

@Pointcut("@target(org.springframework.stereotype.Repository)")
匹配被执行的对象上带有@Repository注解


#### @args指示器
限制匹配传递给方法的实际参数是否有给定类型的注解。
@Pointcut("@args(org.springframework.sql.annotaitons.Entity)")
匹配所有接收@Entity注解的参数的方法


#### @within指示器
限制匹配给定的注解

#### @annotation指示器
限制匹配切点的主题带有某个指定的注解。

例如：
```java
@Pointcut("@annotation("com.baeldung.aop.annotation.Loggable")")
public void log() {}

@Before("log()")
public void invokeBefore(JointPoint jp) {
	String methodName = jp.getSignature.getName();
	log.debug("执行的方法名称: {}", methodName);
}

@Loggable
public void something() {
	//...
}

```

### 合并切点指示器表达式
切点表达式可以使用&&, || 和 !操作符
例如：
```java
@Pointcut("@target(org.springframework.stereotype.Repository)")
public void repositoryMethods() {}

@Pointcut("execution(* *..create*(Long,..))")
public void firstLongParamMethods() {}

@Pointcut("repositoryMethods() && firstLongParamMethods()")
public void entityCreationMethods() {}
```



### Advice（通知）

-   @Before()

```java
@Before("指示器表达式")
public void log(JoinPoint jp) {
	//获取被代理对象正在匹配的方法名称
    jp.getSignature().getName();
    
    //获取方法的参数
    jp.getArgs()
}
```


前置通知，在目标执行前执行

-   @After()

```java
@After("指示器表达式")
public void log(JoinPoint jp) {
    //清理资源
}
```

最终通知，在目标方法执行完成后总是会执行。



-   @Around()

环绕通知，在目标方法执行前和执行后都有逻辑处理时使用。

```java
@Around(value="指示器表达式")
public Object invoke(ProcedingJoinPoint pjp) throws Throwable {
    Object result = null;
    //获取方法名
    String methodName = pjp.getSignature().getName();
    
    //获取目标方法的参数
    Object args [] = pjg.getArgs();
    
    //目标方法执行之前的逻辑
    result = pjp.proceed(); //pjp.proceed()表示目标方法被调用
    //目标方法执行之后的逻辑
    //修改目标方法执行后的结果
    return result;
}
```



-   @AfterReturning()

后置通知，在目标方法之后执行，能够获取目标方法的返回值，可以根据返回值的不同做不同的功能和处理逻辑。

```java
@AfterReturning(value="指示器表达式", returning="response")
public void invokeAfterReturning(Object response) {
    //response是目标方法的返回值
}
```



-   @AfterThrowing()

目标抛出异常时通知



```java
@AfterThrowing(value="指示器表达式", throwing = "ex")
public void invokeAfterThrowing(Exception ex) {
    //目标方法抛出异常了
}
```

