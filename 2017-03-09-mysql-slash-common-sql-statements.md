---
layout: post
title: "mysql/common SQL statements"
date: 2017-03-09 09:42:04 +0800
comments: true
categories: 
---


1: DELET

```sql
DELET from `tablename` where `conditions`

```


2: show columns

```sql

desc `tablename`;

show full columns from `tablename`;

show create table `tablename`;

```

3: create table 

```sql
create table `tablename` (
	creation_time      DATETIME DEFAULT   CURRENT_TIMESTAMP,
    modification_time  DATETIME ON UPDATE CURRENT_TIMESTAMP
)
```