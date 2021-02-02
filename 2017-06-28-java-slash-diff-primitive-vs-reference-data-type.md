---
layout: post
title: "java/Diff primitive vs reference data type?"
date: 2017-06-28 00:13:15 +0800
comments: true
categories: 
---

1. Primitives vs. References

primitive types are the basic types of data
byte, short, int, long, float, double, boolean, char
primitive variables store primitive values
reference types are any instantiable class as well as arrays
String, Scanner, Random, Die, int[], String[], etc.
reference variables store addresses

2. Assignment

copies the contents of RHS variable into LHS variable
primitives: the primitive value is copied
references: the address is copied
implications: for references the object is not copied, it is shared (reference variables are aliases)

3. Comparisons (e.g. ==)

compares the contents of the variables
primitives: the primitive values are compared
references: the addresses are compared
implications: for references the contents of the objects are not compared


4. Passing Parameters

terminology:
formal parameter: the parameter variable that is listed (along with its type) in the method declaration
actual parameter: the parameter that is given when the method is called
copies the contents of actual parameter into the formal parameter (i.e., pass-by-value)
primitives: the primitive value is copied
references: the address is copied
implications: for references the object is not copied, it is shared (i.e., actual parameter and formal parameter are aliases)
primitives: changing the formal parameter's value doesn't affect the actual parameter's value
references: changing the formal parameter's address doesn't affect the actual parameter's address but changing the formal parameter's object does change the actual parameter's object since they refer to the same object


5. Returning Values

returns a result to where the method was called
primitives: the primitive value is returned
references: the address is returned
recall: local variables and parameters are destroyed when the method finishes execution
implications: a locally created object can survive if it is returned or if it is stored in a data member