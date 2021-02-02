---
layout: post
title: "scss/Using each iterator and mapping"
date: 2017-06-06 17:29:05 +0800
comments: true
categories: 
---

```scss

//logos
$brandsLogos: (
	'coolpad': 'coolpad.jpg',
	'gionee': 'gionee.jpg',
	'huawei':'huawei.jpg',
	'lenovo':'lenovo.jpg',
	'meizu':'meizu.jpg',
	'mi':'mi.jpg',
	'oppo':'oppo.jpg',
	'samsung':'samsung.jpg',
	'vivo':'vivo.jpg',
	'zte':'zte.jpg',
	'htc': 'htc.png',
	'letv':'letv.jpg',
	'sprd': '360.jpg'
);

$brandNames: (
		'coolpad',
		'gionee',
		'huawei',
		'lenovo',
		'meizu',
		'mi',
		'oppo',
		'samsung',
		'vivo',
		'zte',
		'htc',
		'letv',
		'sprd');

@each $brandname in $brandNames{
	@if map-has_key($brandsLogos, $brandname){
		&.#{$brandname} {
			@include logoImage(#{map-get($brandsLogos, $brandname)});
		}
	}
}

```