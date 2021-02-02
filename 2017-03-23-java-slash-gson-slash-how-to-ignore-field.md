---
layout: post
title: "java/gson/How to ignore field?"
date: 2017-03-23 11:07:34 +0800
comments: true
categories: 
---
Ignore or Exclude Field in Gson
This article is going to cover some approaches to ignore or exclude field in Gson. This is often needed when we convert Java object Json and when we convert back the Json to Java object. This will be also useful when we want to control the converting result.

1. Prerequisite

We will need to have Gson library included in your build path. Here is our short guide about getting Gson setup with Maven and Gradle.

2. Ignore or exclude field in Gson

2.1. Ignore or exclude field in Gson by marking the field as transient

The easiest way is to mark the field as transient. If a field is marked transient, (by default) it is ignored and not included in the JSON serialization or deserialization.

Assume that we have a User class as the following:


```java
public class User {
   private int id;
   private String username;
   private String email;
   private transient String password;
}

 
public class User {
   private int id;
   private String username;
   private String email;
   private transient String password;
}
```
 
Because we want to ignore or exclude the “password” field during the serialization and deserialization, we mark the field as transient. Let’s try to serialize an User object:


```java
User user = new User(1, "user1", "user1@gmail.com", "password123");
Gson gson = new Gson();
String json = gson.toJson(user);
System.out.println(json);

User user = new User(1, "user1", "user1@gmail.com", "password123");
Gson gson = new Gson();
String json = gson.toJson(user);
System.out.println(json);
```

The output is:


```json
{"id":1,"username":"admin","email":"gson@gmail.com"}
 
{"id":1,"username":"admin","email":"gson@gmail.com"}
 ```
As we can see that the password field was ignored or excluded when Gson convert the object to Json.

2.2. Ignore or exclude field in Gson by using @Expose annotation

The @Expose annotation indicates that the annotated field should be exposed for JSON serialization or deserialization. This annotation has effect only if we build Gson with a GsonBuilder and invoke GsonBuilder.excludeFieldsWithoutExposeAnnotation() method.

Let’s modify the User class a little as the following:


```java
public class User {
   @Expose(serialize = true, deserialize = false)
   private int id;
   @Expose
   private String username;
   @Expose
   private String email;
   private String password;

   public User() {
   }
}

public class User {
   @Expose(serialize = true, deserialize = false)
   private int id;
   @Expose
   private String username;
   @Expose
   private String email;
   private String password;
 
   public User() {
   }
}

```
 
We want to exclude the “password” field from the serialization and deserialization; therefore, we don’t annotate it with @Expose annotation. In addition, as for the id field, we just want to include it in serialization but exclude it from the deserialization, we clearly define that in the annotation:


```java
@Expose(serialize = true, deserialize = false)
@Expose(serialize = true, deserialize = false)
```
Let’s try some example with the annotation:


```java
GsonBuilder b = new GsonBuilder();
Gson gson = b.excludeFieldsWithoutExposeAnnotation().create();
User admin = new User(1, "admin", "admin@gmail.com", "admin123");
String jsonStr = gson.toJson(admin);
System.out.println(jsonStr);

 
GsonBuilder b = new GsonBuilder();
Gson gson = b.excludeFieldsWithoutExposeAnnotation().create();
User admin = new User(1, "admin", "admin@gmail.com", "admin123");
String jsonStr = gson.toJson(admin);
System.out.println(jsonStr);

```
The output on the console doesn’t have password information.


```json
{"id":1,"username":"user1","email":"user1@gmail.com"}
{"id":1,"username":"user1","email":"user1@gmail.com"}
 
```
2.3. Ignore or exclude field in Gson by leveraging Java modifiers

Gson provides us another way to ignore or exclude field by leveraging Java modifiers. By using the excludeFieldsWithModifiers method of the GsonBuilder class, we will be able to excludes all class fields that have the specified modifiers. Note that by default, Gson will exclude all fields marked transient or static. This method will override that behavior.

We will modify the User class a little bit by changing the modifier of the password field from private to protected.



public class User {
   private int id;
   private String username;
   private String email;
   protected String password;
}

1
2
3
4
5
6
7
8
 
public class User {
   private int id;
   private String username;
   private String email;
   protected String password;
}
 
Then, we will use the excludeFieldsWithModifiers method to exclude any field with protected modifier.



GsonBuilder b = new GsonBuilder();
Gson gson = b.excludeFieldsWithModifiers(Modifier.PROTECTED).create();
User admin = new User(3, "guest", "guest@gmail.com", "guest123");
String jsonStr = gson.toJson(admin);
System.out.println(jsonStr);

1
2
3
4
5
6
7
 
GsonBuilder b = new GsonBuilder();
Gson gson = b.excludeFieldsWithModifiers(Modifier.PROTECTED).create();
User admin = new User(3, "guest", "guest@gmail.com", "guest123");
String jsonStr = gson.toJson(admin);
System.out.println(jsonStr);
 
The output should be:



{"id":3,"username":"guest","email":"guest@gmail.com"}

1
2
3
 
{"id":3,"username":"guest","email":"guest@gmail.com"}
 
Note that if we use the excludeFieldsWithModifiers, not only the User class but also all classes are used with the above gson will have effect.

2.4. Ignore or exclude field by implementing a custom ExclusionStrategy

Gson allows us to define a strategy or policy that is used to decide whether or not a field or top-level lass should be serialized or deserialized as part of the JSON output/input.

Let’s implement a UserExclusionStrategy class that will exclude all fields annotated with the below @UserExclude annotation.



@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
public @interface UserExclude {
}

1
2
3
4
5
6
 
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
public @interface UserExclude {
}
 
The strategy can be implemented as below:



public class UserExclusionStrategy implements ExclusionStrategy {

   public boolean shouldSkipField(FieldAttributes f) {
      return f.getAnnotation(UserExclude.class) != null;
   }

   public boolean shouldSkipClass(Class<?> clazz) {
      return false;
   }

}

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
 
public class UserExclusionStrategy implements ExclusionStrategy {
 
   public boolean shouldSkipField(FieldAttributes f) {
      return f.getAnnotation(UserExclude.class) != null;
   }
 
   public boolean shouldSkipClass(Class<?> clazz) {
      return false;
   }
 
}
 
We will modify the User class in order to annotate the password field with @UserExclude annotation



public class User {
   private int id;
   private String username;
   private String email;
   @UserExclude
   private String password;
}

1
2
3
4
5
6
7
8
9
 
public class User {
   private int id;
   private String username;
   private String email;
   @UserExclude
   private String password;
}
 
Then we create a Gson object with exclusion strategy:



GsonBuilder b = new GsonBuilder().setExclusionStrategies(new UserExclusionStrategy());
Gson gson = b.create();
User admin = new User(4, "sa", "sa@gmail.com", "sa123");
String jsonStr = gson.toJson(admin);
System.out.println(jsonStr);

1
2
3
4
5
6
7
 
GsonBuilder b = new GsonBuilder().setExclusionStrategies(new UserExclusionStrategy());
Gson gson = b.create();
User admin = new User(4, "sa", "sa@gmail.com", "sa123");
String jsonStr = gson.toJson(admin);
System.out.println(jsonStr);
 
The output is:



{"id":4,"username":"sa","email":"sa@gmail.com"}

1
2
3
 
{"id":4,"username":"sa","email":"sa@gmail.com"}
 
Note that we have use the exclusion strategy for both serialization and deserialization. If we want different strategy for each serialization and deserialization, we can use the methods: addDeserializationExclusionStrategy and addSerializationExclusionStrategy

4. Conclusion

We have learned about several approaches to ignore or exclude Field in Gson. The simplest is to use the transient keyword while the most complex is to implement an exclusion strategy. Beside, we can use @Expose annotation or leverage Java access modifier to exclude the field. Marking the field with transient and using @Expose annotation have effect in scope of class while leveraging Java access modifier and implementing the custom exclusion strategy have effect in global scope. You can consider each approach for your case.

 