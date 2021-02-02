---
layout: post
title: "java/springmvc/inject service to controller"
date: 2017-01-12 17:59:20 +0800
comments: true
categories: java, inject, interface, qulifier
---


```java
@Controller
public class UserManagement{
	@Autowired
	//inject a interface instead of implement class
	private IUserManagementRepository userRepo;
	//...
}
```

if class AdminManagement and UserManagement, all of them implement interface IUserManagementRepository,
like this,

```java
@Repository
public class AdminManagement implements IUserManagementRepository{
	//...
}

@Repository
public class UserManagement implements IUserManagementRepository{
	//...
}
```

change to:

```java
@Repository("admin")
public class AdminManagement implements IUserManagementRepository{
	//...
}

@Repository("user")
public class UserManagement implements IUserManagementRepository{
	//...
}
```

```java
@Controller
public class UserManagement{
	@Autowired
	@Qualifier("user")
	//inject a interface instead of implement class
	private IUserManagementRepository userRepo;
	//...
}
```