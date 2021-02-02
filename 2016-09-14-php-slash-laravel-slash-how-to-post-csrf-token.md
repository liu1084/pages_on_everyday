---
layout: post
title: "PHP/laravel/How to post csrf token"
date: 2016-09-14 17:44:19 +0800
comments: true
categories: 
---

### laravel framework csrf

Because csrf will be stroed in cookie named `XSRF-TOKEN`, so we can get it from $request(\Illuminate\Http\Request)
like this:

```php
	$xsrfToken = $request->cookie('XSRF-TOKEN');
```

If in a html form, post a hidden input named `_token`, like this:

```html
	<input type="hidden" value="{{ csrf_token() }}" name="_token" />
```

If make a AJAX(post) requet, like this:

```html
	<meta name="csrf-token" content="{{ csrf_token() }}">
```

and then make a AJAX request, place `X-CSRF-TOKEN` in headers, like this:

```javascript
	$.ajaxSetup({
		headers: {
			'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content');
		}
	});

	$.ajax({
		//do some thing
	});

```