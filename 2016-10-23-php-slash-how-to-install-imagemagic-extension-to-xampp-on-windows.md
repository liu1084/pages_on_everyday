---
layout: post
title: "php/How to install ImageMagic extension to XAMPP on Windows?"
date: 2016-10-23 02:09:20 +0800
comments: true
categories: 
---

## make sure your php version & env

### edit index.php 

```php
phpinfo();
```

you will find a PHP enviroment:

1. thread safe
2. php version
3. extension directory
4. compiler

## download `ImageMagic` and `imagick`

> ImageMagic is a lib, and imagick is a serial dll files. 

> Make sure you download them form [pecl] (http://windows.php.net/downloads/pecl/)

> Make sure your files matches PHP's version, compiler, thread safe

## install ImageMagic and set PATH

1. unzip imagemagic package to your computer `for example: d:\ImageMagick`;
2. set a `MAGICK_HOME` as `D:\ImageMagick`
3. set `PATH` include %MAGICK_HOME%\bin;

## install imagick dll to php

1. unzip imagic.zip to PHP's extension directory `ex: D:\http\xampp\php\ext\php_imagick\`
2. edit php.ini and add the line

```shell
extension=D:\http\xampp\php\ext\php_imagick\php_imagick.dll
```

## restart your apache and check imagemagic extension.