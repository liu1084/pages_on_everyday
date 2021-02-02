### Spring security enable HTTP cache


1. 复写configure方法，禁止spring security对静态文件的缓存干预；

```java
	@Override
    public void configure(WebSecurity web) throws Exception{
        web.ignoring().antMatchers("/static/**", "/vendor/**", "/dist/**");
    }
```

2. 复写addResourceHandlers方法，添加静态资源的路径和处理器；

```java
@Configuration
public class HttpHeaderConfig extends WebMvcConfigurerAdapter implements EmbeddedServletContainerCustomizer {
    @Override
    public void customize(ConfigurableEmbeddedServletContainer container) {

    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/vendor/**", "/dist/**")
                .addResourceLocations("classpath:/static/vendor/", "classpath:/static/dist/")
                .setCachePeriod(-1);
    }
}
```

3. 将静态资源放在第二步指定的路径即可。
