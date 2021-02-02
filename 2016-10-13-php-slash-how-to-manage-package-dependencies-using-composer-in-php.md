---
layout: post
title: "php/How to manage package dependencies using composer in php?"
date: 2016-10-13 11:36:37 +0800
comments: true
categories: php, composer
---


## steps

1. install composer
2. set composer in your PATH
3. composer init
4. add dependencies to required
5. composer update
6. import autoload.php to your php boot file
7. using required package
8. example:

```shell
mkdir -p d:/http/xampp/htdocs/test-composer
cd d:/http/xampp/htdocs/test-composer && touch index.php
composer init ## (always enter) will generate a composer.json
vim composer.json ## add a dependency package "monolog" - your can find ![](https://packagist.org/)

```

```javascript
{
    "name": "jim/test-composer",
    "authors": [
        {
            "name": "jim",
            "email": "liu1084@163.com"
        }
    ],
    "require": {
    	"monolog/monolog": "~1.0"
    }
}
```

```shell
composer update
vim index.php
```

```php
require('vendor/autoload.php');
use Monolog\Logger;
use Monolog\Handler\StreamHandler;

// create a log channel
$log = new Logger('name');
$log->pushHandler(new StreamHandler('a.log', Logger::WARNING));

// add records to the log
$log->warning('Foo');
$log->error('Bar');
```