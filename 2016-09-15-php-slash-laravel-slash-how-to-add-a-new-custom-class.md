---
layout: post
title: "PHP/Laravel/How to add a new custom class?"
date: 2016-09-15 02:59:26 +0800
comments: true
categories: 
---


In this tutorial I will show you how to add custom class in Laravel 5. For example my class name is Common.php. Now create a directory called Mylibs in app directory(app/Mylibs). Place your custom class in created directory and just make sure to add the correct namespace to the class as for your directory structure, in my example it is App\Mylibs.


```php
namespace App\Mylibs;
class Common {
   public function getName() {
        return 'Arjun'
    }
 
    public static function getLastName() {
        return 'PHP'
    }
}
- See more at: https://arjunphp.com/load-custom-class-laravel-5/#sthash.N6aEZwGP.dpuf
```

Now, you can access this class using the namespace within your classes just like other Laravel classes.
`use App\Mylibs\Common`

```php
<?php
 
namespace App\Http\Controllers;
 
use App\Mylibs\Common;
 
class AccountController extends Controller {
 
   protected $common;
 
   public function __construct(Common $common) {
       $this->common = $common;
   }
 
  public function index() {
     dd($this->commongetName());
  }
 
  public function getLastName() {
     dd(Common::commongetName());
  }
 
}
- See more at: https://arjunphp.com/load-custom-class-laravel-5/#sthash.N6aEZwGP.dpuf
```