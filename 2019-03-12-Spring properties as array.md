### Spring properties as array

If you define your array in properties file like:
```xml
base.module.elementToSearch=1,2,3,4,5,6
```
You can load such array in your Java class like this:

```java
  @Value("${base.module.elementToSearch}")
  private String[] elementToSearch;

```

or

```java
@Autowire
private Environment env;
String[] springRocks = env.getProperty("some.key", String[].class);

```