---
layout: post
title: "hibernate/Hibernate-sequence does not exist"
date: 2017-04-01 02:56:49 +0800
comments: true
categories: 
---


if you want hibernate manage the increamenttation of the primary key: you can add annotation and set type:

```java
@GeneratedValue(strategy=GenerationType.IDENTITY)
```

or 

add 

```xml
<generator class="sequence">
    <param name="sequence">xxxxxx_seq</param>
</generator>
```

to your hibernate.cfg.xml