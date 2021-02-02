---
layout: post
title: "php/What is the traits and how to use it?"
date: 2016-10-12 11:27:08 +0800
comments: true
categories: php, trait
---

### 什么是trait?

自 PHP 5.4.0 起，PHP 实现了代码复用的一个方法，称为 traits。

Traits 是一种为类似 PHP 的单继承语言而准备的代码复用机制。Trait 为了减少单继承语言的限制，使开发人员能够自由地在不同层次结构内独立的类中复用方法集。Traits 和类组合的语义是定义了一种方式来减少复杂性，避免传统多继承和混入类（Mixin）相关的典型问题。

Trait 和一个类相似，但仅仅旨在用细粒度和一致的方式来组合功能。Trait 不能通过它自身来实例化。它为传统继承增加了水平特性的组合；也就是说，应用类的成员不需要继承。

它既不是接口也不是类。主要是为了解决单继承语言的限制。是PHP多重继承的一种解决方案。例如，需要同时继承两个 Abstract Class， 这将会是件很麻烦的事情，Trait 就是为了解决这个问题。它能被加入到一个或多个已经存在的类中。它声明了类能做什么（表明了其接口特性），同时也包含了具体实现（表明了其类特性）.

### 定义一个trait，并且在里面包含两个可以复用的方法a

```php

trait first_trait {
	function first_method() { /* Code Here */ }
	function second_method() { /* Code Here */ }
}

```

同时，如果要在 Class 中使用该 Trait，那么使用 use 关键字

```php
class first_class {
	// 注意这行，声明使用 first_trait
	use first_trait;
}

$obj = new first_class();
// Executing the method from trait
$obj->first_method(); // valid
$obj->second_method(); // valid
```


### 在一个类中使用多个 Trait，仍然使用use关键字，各个traint的名字用逗号隔开


```php
trait first_trait {
	function first_method() { echo "method"; }
}

trait second_trait {
	function second_method() { echo "method"; }
}

class first_class {
	// now using more than one trait
	use first_trait, second_trait;
}

$obj= new first_class();
// Valid
$obj->first_method(); // Print : method
// Valid
$obj->second_method(); // Print : method
```


### Trait 的抽象方法（Abstract Method）
我们可以在 Trait 中声明需要实现的抽象方法，这样能使使用它的 Class 必须实现它.

```php
trait first_trait {
	function first_method() { echo "method"; }
	// 这里可以加入修饰符，说明调用类必须实现它
	abstract public function second_method();
}

class first_method {
	use first_trait;
	function second_method() {
	/* Code Here */
	}
}
```

### Trait 冲突
多个 Trait 之间同时使用难免会冲突，这需要我们去解决。PHP5.4 从语法方面带入了相关 的关键字语法：insteadof 以及 as ，用法参见

```php
trait first_trait {
	function first_function() { 
		echo "From First Trait";
	}
}

trait second_trait {
	// 这里的名称和 first_trait 一样，会有冲突
	function first_function() { 
		echo "From Second Trait";
	}
}


class first_class {
	use first_trait, second_trait {
		// 在这里声明使用 first_trait 的 first_function 替换
		// second_trait 中声明的
		first_trait::first_function insteadof second_trait;
	}
} 


$obj = new first_class();
// Output: From First Trait
$obj->first_function();
```


### 总结

1. rait 会覆盖调用类继承的父类方法
2. Trait 无法如 Class 一样使用 new 实例化
3. 单个 Trait 可由多个 Trait 组成
4. 在单个 Class 中，可以使用多个 Trait
5. Trait 支持修饰词（modifiers），例如 final、static、abstract
6. 我们能使用 insteadof 以及 as 操作符解决 Trait 之间的冲突