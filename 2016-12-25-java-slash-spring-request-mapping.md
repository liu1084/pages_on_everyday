
The Master Class of "Learn Spring Security" is out: 

>> CHECK OUT THE COURSE

1. Overview

In this article, we’ll focus on one of the main annotations in Spring MVC – @RequestMapping.

Simply put, the annotation is used to map web requests to Spring Controller methods.

2. @RequestMapping Basics

Let’s start with a simple example – mapping an HTTP request to a method using some basic criteria.

2.1. @RequestMapping – by Path

?
1
2
3
4
5
@RequestMapping(value = "/ex/foos", method = RequestMethod.GET)
@ResponseBody
public String getFoosBySimplePath() {
    return "Get some Foos";
}
To test out this mapping with a simple curl command, run:

?
1
curl -i http://localhost:8080/spring-rest/ex/foos
2.2. @RequestMapping – the HTTP Method

The HTTP method parameter has no default – so if we don’t specify a value, it’s going to map to any type of HTTP request.

Here’s a simple example, similar to the previous one – but this time mapped to a HTTP POST request:

?
1
2
3
4
5
@RequestMapping(value = "/ex/foos", method = POST)
@ResponseBody
public String postFoos() {
    return "Post some Foos";
}
To test the POST via a curl command:

?
1
curl -i -X POST http://localhost:8080/spring-rest/ex/foos
3. RequestMapping and HTTP Headers

3.1. @RequestMapping with the headers attribute

The mapping can be narrowed even further by specifying a header for the request:

?
1
2
3
4
5
@RequestMapping(value = "/ex/foos", headers = "key=val", method = GET)
@ResponseBody
public String getFoosWithHeader() {
    return "Get some Foos with Header";
}
And even multiple headers via the header attribute of @RequestMapping:

?
1
2
3
4
5
6
7
@RequestMapping(
  value = "/ex/foos",
  headers = { "key1=val1", "key2=val2" }, method = GET)
@ResponseBody
public String getFoosWithHeaders() {
    return "Get some Foos with Header";
}
To test the operation, we’re going to use the curl header support:

?
1
curl -i -H "key:val" http://localhost:8080/spring-rest/ex/foos
Note that for the curl syntax for separating the header key and the header value is a colon, same as in the HTTP spec, while in Spring the equals sign is used.

3.2. @RequestMapping Consumes and Produces

Mapping media types produced by a controller method is worth special attention – we can map a request based on its Accept header via the @RequestMapping headers attribute introduced above:

?
1
2
3
4
5
6
7
8
@RequestMapping(
  value = "/ex/foos",
  method = GET,
  headers = "Accept=application/json")
@ResponseBody
public String getFoosAsJsonFromBrowser() {
    return "Get some Foos with Header Old";
}
The matching for this way of defining the Accept header is flexible – it uses contains instead of equals, so a request such as the following would still map correctly:

?
1
2
curl -H "Accept:application/json,text/html"
  http://localhost:8080/spring-rest/ex/foos
Starting with Spring 3.1, a the @RequestMapping annotation now has a produces and a consumes attributes, specifically for this purpose:

?
1
2
3
4
5
6
7
8
9
@RequestMapping(
  value = "/ex/foos",
  method = RequestMethod.GET,
  produces = "application/json"
)
@ResponseBody
public String getFoosAsJsonFromREST() {
    return "Get some Foos with Header New";
}
Also, the old type of mapping with the headers attribute will automatically be converted to the new produces mechanism starting with Spring 3.1, so the results will be identical.

This is consumed via curl in the same way:

?
1
curl -H "Accept:application/json" http://localhost:8080/spring-rest/ex/foos
Additionally, produces support multiple values as well:

?
1
2
3
4
5
@RequestMapping(
  value = "/ex/foos",
  method = GET,
  produces = { "application/json", "application/xml" }
)
Keep in mind that these – the old way and the new way of specifying the accept header – are basically the same mapping, so Spring won’t accept them together – having both these methods active would result in:

?
1
2
3
4
5
6
7
8
9
10
11
12
13
Caused by: java.lang.IllegalStateException: Ambiguous mapping found.
Cannot map 'fooController' bean method
java.lang.String
org.baeldung.spring.web.controller.FooController.getFoosAsJsonFromREST()
to
{ [/ex/foos],
  methods=[GET],params=[],headers=[],
  consumes=[],produces=[application/json],custom=[]
}:
There is already 'fooController' bean method
java.lang.String
  org.baeldung.spring.web.controller.FooController.getFoosAsJsonFromBrowser()
mapped.
A final note on the new produces and consumes mechanism – these behave differently from most other annotations: when specified at type level, the method level annotations do not complement but override the type level information.

And of course, if you want to dig deeper into building a REST API with Spring – check out the new REST with Spring course.

4. RequestMapping with Path Variables

Parts of the mapping URI can be bound to variables via the @PathVariable annotation.

4.1. Single @PathVariable

A simple example with a single path variable:

?
1
2
3
4
5
6
@RequestMapping(value = "/ex/foos/{id}", method = GET)
@ResponseBody
public String getFoosBySimplePathWithPathVariable(
  @PathVariable("id") long id) {
    return "Get a specific Foo with id=" + id;
}
This can be tested with curl:

?
1
curl http://localhost:8080/spring-rest/ex/foos/1
If the name of the method argument matches the name of the path variable exactly, then this can be simplified by using @PathVariable with no value:

?
1
2
3
4
5
6
@RequestMapping(value = "/ex/foos/{id}", method = GET)
@ResponseBody
public String getFoosBySimplePathWithPathVariable(
  @PathVariable String id) {
    return "Get a specific Foo with id=" + id;
}
Note that @PathVariable benefits from automatic type conversion, so we could have also declared the id as:

?
1
@PathVariable long id
4.2. Multiple @PathVariable

More complex URI may need to map multiple parts of the URI to multiple values:

?
1
2
3
4
5
6
7
@RequestMapping(value = "/ex/foos/{fooid}/bar/{barid}", method = GET)
@ResponseBody
public String getFoosBySimplePathWithPathVariables
  (@PathVariable long fooid, @PathVariable long barid) {
    return "Get a specific Bar with id=" + barid +
      " from a Foo with id=" + fooid;
}
This is easily tested with curl in the same way:

?
1
curl http://localhost:8080/spring-rest/ex/foos/1/bar/2
4.3. @PathVariable with RegEx

Regular expressions can also be used when mapping the @PathVariable; for example, we will restrict the mapping to only accept numerical values for the id:

?
1
2
3
4
5
6
@RequestMapping(value = "/ex/bars/{numericId:[\\d]+}", method = GET)
@ResponseBody
public String getBarsBySimplePathWithPathVariable(
  @PathVariable long numericId) {
    return "Get a specific Bar with id=" + numericId;
}
This will mean that the following URIs will match:

?
1
http://localhost:8080/spring-rest/ex/bars/1
But this will not:

?
1
http://localhost:8080/spring-rest/ex/bars/abc
5. RequestMapping with Request Parameters

@RequestMapping allows easy mapping of URL parameters with the @RequestParam annotation. 

We are now mapping a request to an URI such as:

?
1
http://localhost:8080/spring-rest/ex/bars?id=100
?
1
2
3
4
5
6
@RequestMapping(value = "/ex/bars", method = GET)
@ResponseBody
public String getBarBySimplePathWithRequestParam(
  @RequestParam("id") long id) {
    return "Get a specific Bar with id=" + id;
}
We are then extracting the value of the id parameter using the @RequestParam(“id”) annotation in the controller method signature.

The send a request with the id parameter, we’ll use the parameter support in curl:

?
1
curl -i -d id=100 http://localhost:8080/spring-rest/ex/bars
In this example, the parameter was bound directly without having been declared first.

For more advanced scenarios, @RequestMapping can optionally define the parameters – as yet another way of narrowing the request mapping:

?
1
2
3
4
5
6
@RequestMapping(value = "/ex/bars", params = "id", method = GET)
@ResponseBody
public String getBarBySimplePathWithExplicitRequestParam(
  @RequestParam("id") long id) {
    return "Get a specific Bar with id=" + id;
}
Even more flexible mappings are allowed – multiple params values can be defined, and not all of them have to be used:

?
1
2
3
4
5
6
7
8
9
@RequestMapping(
  value = "/ex/bars",
  params = { "id", "second" },
  method = GET)
@ResponseBody
public String getBarBySimplePathWithExplicitRequestParams(
  @RequestParam("id") long id) {
    return "Narrow Get a specific Bar with id=" + id;
}
And of course, a request to an URI such as:

?
1
http://localhost:8080/spring-rest/ex/bars?id=100&second=something
Will always be mapped to the best match – which is the narrower match, which defines both the id and the second parameter.

6. RequestMapping Corner Cases

6.1. @RequestMapping – multiple paths mapped to the same controller method

Although a single @RequestMapping path value is usually used for a single controller method, this is just good practice, not a hard and fast rule – there are some cases where mapping multiple requests to the same method may be necessary. For that case, the value attribute of @RequestMapping does accept multiple mappings, not just a single one:

?
1
2
3
4
5
6
7
@RequestMapping(
  value = { "/ex/advanced/bars", "/ex/advanced/foos" },
  method = GET)
@ResponseBody
public String getFoosOrBarsByPath() {
    return "Advanced - Get some Foos or Bars";
}
Now, both of these curl commands should hit the same method:

?
1
2
curl -i http://localhost:8080/spring-rest/ex/advanced/foos
curl -i http://localhost:8080/spring-rest/ex/advanced/bars
6.2. @RequestMapping – multiple HTTP request methods to the same controller method

Multiple requests using different HTTP verbs can be mapped to the same controller method:

?
1
2
3
4
5
6
7
8
@RequestMapping(
  value = "/ex/foos/multiple",
  method = { RequestMethod.PUT, RequestMethod.POST }
)
@ResponseBody
public String putAndPostFoos() {
    return "Advanced - PUT and POST within single method";
}
With curl, both of these will now hit the same method:

?
1
2
curl -i -X POST http://localhost:8080/spring-rest/ex/foos/multiple
curl -i -X PUT http://localhost:8080/spring-rest/ex/foos/multiple
6.3. @RequestMapping – a fallback for all requests

To implement a simple fallback for all requests using a specific HTTP method – for example, for a GET:

?
1
2
3
4
5
@RequestMapping(value = "*", method = RequestMethod.GET)
@ResponseBody
public String getFallback() {
    return "Fallback for GET Requests";
}
Or even for all requests:

?
1
2
3
4
5
6
7
@RequestMapping(
  value = "*",
  method = { RequestMethod.GET, RequestMethod.POST ... })
@ResponseBody
public String allFallback() {
    return "Fallback for All Requests";
}
7. Spring Configuration

The Spring MVC Configuration is simple enough – considering that our FooController is defined in the following package:

?
1
2
3
4
package org.baeldung.spring.web.controller;
 
@Controller
public class FooController { ... }
We simply need a @Configuration class to enable the full MVC support and configure classpath scanning for the controller:

?
1
2
3
4
5
6
@Configuration
@EnableWebMvc
@ComponentScan({ "org.baeldung.spring.web.controller" })
public class MvcConfig {
    //
}
8. Conclusion

This article focus on the @RequestMapping annotation in Spring – discussing a simple usecase, the mapping of HTTP headers, binding parts of the URI with @PathVariable and working with URI parameters and the @RequestParam annotation.

If you’d like to learn how to use another core annotation in Spring MVC, you can explore the @ModelAttribute annotation here.

The full code from the article is available on Github. This is an Maven project, so it should be easy to import and run as it is.

The Master Class of "Learn Spring Security" is out: 

>> CHECK OUT THE COURSE

 
 
Learning to "Build your API
with Spring"?

Enter your Email Address
>> Get the eBook---
layout: post
title: "java/Spring request mapping"
date: 2016-12-25 02:27:18 +0800
comments: true
categories: 
---

The Master Class of "Learn Spring Security" is out: 

>> CHECK OUT THE COURSE

1. Overview

In this article, we’ll focus on one of the main annotations in Spring MVC – @RequestMapping.

Simply put, the annotation is used to map web requests to Spring Controller methods.

2. @RequestMapping Basics

Let’s start with a simple example – mapping an HTTP request to a method using some basic criteria.

2.1. @RequestMapping – by Path

?
1
2
3
4
5
@RequestMapping(value = "/ex/foos", method = RequestMethod.GET)
@ResponseBody
public String getFoosBySimplePath() {
    return "Get some Foos";
}
To test out this mapping with a simple curl command, run:

?
1
curl -i http://localhost:8080/spring-rest/ex/foos
2.2. @RequestMapping – the HTTP Method

The HTTP method parameter has no default – so if we don’t specify a value, it’s going to map to any type of HTTP request.

Here’s a simple example, similar to the previous one – but this time mapped to a HTTP POST request:

?
1
2
3
4
5
@RequestMapping(value = "/ex/foos", method = POST)
@ResponseBody
public String postFoos() {
    return "Post some Foos";
}
To test the POST via a curl command:

?
1
curl -i -X POST http://localhost:8080/spring-rest/ex/foos
3. RequestMapping and HTTP Headers

3.1. @RequestMapping with the headers attribute

The mapping can be narrowed even further by specifying a header for the request:

?
1
2
3
4
5
@RequestMapping(value = "/ex/foos", headers = "key=val", method = GET)
@ResponseBody
public String getFoosWithHeader() {
    return "Get some Foos with Header";
}
And even multiple headers via the header attribute of @RequestMapping:

?
1
2
3
4
5
6
7
@RequestMapping(
  value = "/ex/foos",
  headers = { "key1=val1", "key2=val2" }, method = GET)
@ResponseBody
public String getFoosWithHeaders() {
    return "Get some Foos with Header";
}
To test the operation, we’re going to use the curl header support:

?
1
curl -i -H "key:val" http://localhost:8080/spring-rest/ex/foos
Note that for the curl syntax for separating the header key and the header value is a colon, same as in the HTTP spec, while in Spring the equals sign is used.

3.2. @RequestMapping Consumes and Produces

Mapping media types produced by a controller method is worth special attention – we can map a request based on its Accept header via the @RequestMapping headers attribute introduced above:

?
1
2
3
4
5
6
7
8
@RequestMapping(
  value = "/ex/foos",
  method = GET,
  headers = "Accept=application/json")
@ResponseBody
public String getFoosAsJsonFromBrowser() {
    return "Get some Foos with Header Old";
}
The matching for this way of defining the Accept header is flexible – it uses contains instead of equals, so a request such as the following would still map correctly:

?
1
2
curl -H "Accept:application/json,text/html"
  http://localhost:8080/spring-rest/ex/foos
Starting with Spring 3.1, a the @RequestMapping annotation now has a produces and a consumes attributes, specifically for this purpose:

?
1
2
3
4
5
6
7
8
9
@RequestMapping(
  value = "/ex/foos",
  method = RequestMethod.GET,
  produces = "application/json"
)
@ResponseBody
public String getFoosAsJsonFromREST() {
    return "Get some Foos with Header New";
}
Also, the old type of mapping with the headers attribute will automatically be converted to the new produces mechanism starting with Spring 3.1, so the results will be identical.

This is consumed via curl in the same way:

?
1
curl -H "Accept:application/json" http://localhost:8080/spring-rest/ex/foos
Additionally, produces support multiple values as well:

?
1
2
3
4
5
@RequestMapping(
  value = "/ex/foos",
  method = GET,
  produces = { "application/json", "application/xml" }
)
Keep in mind that these – the old way and the new way of specifying the accept header – are basically the same mapping, so Spring won’t accept them together – having both these methods active would result in:

?
1
2
3
4
5
6
7
8
9
10
11
12
13
Caused by: java.lang.IllegalStateException: Ambiguous mapping found.
Cannot map 'fooController' bean method
java.lang.String
org.baeldung.spring.web.controller.FooController.getFoosAsJsonFromREST()
to
{ [/ex/foos],
  methods=[GET],params=[],headers=[],
  consumes=[],produces=[application/json],custom=[]
}:
There is already 'fooController' bean method
java.lang.String
  org.baeldung.spring.web.controller.FooController.getFoosAsJsonFromBrowser()
mapped.
A final note on the new produces and consumes mechanism – these behave differently from most other annotations: when specified at type level, the method level annotations do not complement but override the type level information.

And of course, if you want to dig deeper into building a REST API with Spring – check out the new REST with Spring course.

4. RequestMapping with Path Variables

Parts of the mapping URI can be bound to variables via the @PathVariable annotation.

4.1. Single @PathVariable

A simple example with a single path variable:

?
1
2
3
4
5
6
@RequestMapping(value = "/ex/foos/{id}", method = GET)
@ResponseBody
public String getFoosBySimplePathWithPathVariable(
  @PathVariable("id") long id) {
    return "Get a specific Foo with id=" + id;
}
This can be tested with curl:

?
1
curl http://localhost:8080/spring-rest/ex/foos/1
If the name of the method argument matches the name of the path variable exactly, then this can be simplified by using @PathVariable with no value:

?
1
2
3
4
5
6
@RequestMapping(value = "/ex/foos/{id}", method = GET)
@ResponseBody
public String getFoosBySimplePathWithPathVariable(
  @PathVariable String id) {
    return "Get a specific Foo with id=" + id;
}
Note that @PathVariable benefits from automatic type conversion, so we could have also declared the id as:

?
1
@PathVariable long id
4.2. Multiple @PathVariable

More complex URI may need to map multiple parts of the URI to multiple values:

?
1
2
3
4
5
6
7
@RequestMapping(value = "/ex/foos/{fooid}/bar/{barid}", method = GET)
@ResponseBody
public String getFoosBySimplePathWithPathVariables
  (@PathVariable long fooid, @PathVariable long barid) {
    return "Get a specific Bar with id=" + barid +
      " from a Foo with id=" + fooid;
}
This is easily tested with curl in the same way:

?
1
curl http://localhost:8080/spring-rest/ex/foos/1/bar/2
4.3. @PathVariable with RegEx

Regular expressions can also be used when mapping the @PathVariable; for example, we will restrict the mapping to only accept numerical values for the id:

?
1
2
3
4
5
6
@RequestMapping(value = "/ex/bars/{numericId:[\\d]+}", method = GET)
@ResponseBody
public String getBarsBySimplePathWithPathVariable(
  @PathVariable long numericId) {
    return "Get a specific Bar with id=" + numericId;
}
This will mean that the following URIs will match:

?
1
http://localhost:8080/spring-rest/ex/bars/1
But this will not:

?
1
http://localhost:8080/spring-rest/ex/bars/abc
5. RequestMapping with Request Parameters

@RequestMapping allows easy mapping of URL parameters with the @RequestParam annotation. 

We are now mapping a request to an URI such as:

?
1
http://localhost:8080/spring-rest/ex/bars?id=100
?
1
2
3
4
5
6
@RequestMapping(value = "/ex/bars", method = GET)
@ResponseBody
public String getBarBySimplePathWithRequestParam(
  @RequestParam("id") long id) {
    return "Get a specific Bar with id=" + id;
}
We are then extracting the value of the id parameter using the @RequestParam(“id”) annotation in the controller method signature.

The send a request with the id parameter, we’ll use the parameter support in curl:

?
1
curl -i -d id=100 http://localhost:8080/spring-rest/ex/bars
In this example, the parameter was bound directly without having been declared first.

For more advanced scenarios, @RequestMapping can optionally define the parameters – as yet another way of narrowing the request mapping:

?
1
2
3
4
5
6
@RequestMapping(value = "/ex/bars", params = "id", method = GET)
@ResponseBody
public String getBarBySimplePathWithExplicitRequestParam(
  @RequestParam("id") long id) {
    return "Get a specific Bar with id=" + id;
}
Even more flexible mappings are allowed – multiple params values can be defined, and not all of them have to be used:

?
1
2
3
4
5
6
7
8
9
@RequestMapping(
  value = "/ex/bars",
  params = { "id", "second" },
  method = GET)
@ResponseBody
public String getBarBySimplePathWithExplicitRequestParams(
  @RequestParam("id") long id) {
    return "Narrow Get a specific Bar with id=" + id;
}
And of course, a request to an URI such as:

?
1
http://localhost:8080/spring-rest/ex/bars?id=100&second=something
Will always be mapped to the best match – which is the narrower match, which defines both the id and the second parameter.

6. RequestMapping Corner Cases

6.1. @RequestMapping – multiple paths mapped to the same controller method

Although a single @RequestMapping path value is usually used for a single controller method, this is just good practice, not a hard and fast rule – there are some cases where mapping multiple requests to the same method may be necessary. For that case, the value attribute of @RequestMapping does accept multiple mappings, not just a single one:

?
1
2
3
4
5
6
7
@RequestMapping(
  value = { "/ex/advanced/bars", "/ex/advanced/foos" },
  method = GET)
@ResponseBody
public String getFoosOrBarsByPath() {
    return "Advanced - Get some Foos or Bars";
}
Now, both of these curl commands should hit the same method:

?
1
2
curl -i http://localhost:8080/spring-rest/ex/advanced/foos
curl -i http://localhost:8080/spring-rest/ex/advanced/bars
6.2. @RequestMapping – multiple HTTP request methods to the same controller method

Multiple requests using different HTTP verbs can be mapped to the same controller method:

?
1
2
3
4
5
6
7
8
@RequestMapping(
  value = "/ex/foos/multiple",
  method = { RequestMethod.PUT, RequestMethod.POST }
)
@ResponseBody
public String putAndPostFoos() {
    return "Advanced - PUT and POST within single method";
}
With curl, both of these will now hit the same method:

?
1
2
curl -i -X POST http://localhost:8080/spring-rest/ex/foos/multiple
curl -i -X PUT http://localhost:8080/spring-rest/ex/foos/multiple
6.3. @RequestMapping – a fallback for all requests

To implement a simple fallback for all requests using a specific HTTP method – for example, for a GET:

?
1
2
3
4
5
@RequestMapping(value = "*", method = RequestMethod.GET)
@ResponseBody
public String getFallback() {
    return "Fallback for GET Requests";
}
Or even for all requests:

?
1
2
3
4
5
6
7
@RequestMapping(
  value = "*",
  method = { RequestMethod.GET, RequestMethod.POST ... })
@ResponseBody
public String allFallback() {
    return "Fallback for All Requests";
}
7. Spring Configuration

The Spring MVC Configuration is simple enough – considering that our FooController is defined in the following package:

?
1
2
3
4
package org.baeldung.spring.web.controller;
 
@Controller
public class FooController { ... }
We simply need a @Configuration class to enable the full MVC support and configure classpath scanning for the controller:

?
1
2
3
4
5
6
@Configuration
@EnableWebMvc
@ComponentScan({ "org.baeldung.spring.web.controller" })
public class MvcConfig {
    //
}
8. Conclusion

This article focus on the @RequestMapping annotation in Spring – discussing a simple usecase, the mapping of HTTP headers, binding parts of the URI with @PathVariable and working with URI parameters and the @RequestParam annotation.

If you’d like to learn how to use another core annotation in Spring MVC, you can explore the @ModelAttribute annotation here.

The full code from the article is available on Github. This is an Maven project, so it should be easy to import and run as it is.

The Master Class of "Learn Spring Security" is out: 

>> CHECK OUT THE COURSE

 
 
Learning to "Build your API
with Spring"?

Enter your Email Address
>> Get the eBook