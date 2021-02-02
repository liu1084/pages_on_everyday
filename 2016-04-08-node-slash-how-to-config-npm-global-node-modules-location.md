---
layout: post
title: "node/How to config npm global node_modules location?"
date: 2016-04-08 00:11:17 +0800
comments: true
categories: npm global modules location
---

How to config npm global node_modules location?
=====================
When U `npm install packageName`, npm will find npm config variable: `prefix`'s value, IF NOT, on *NIX OS, default location is `/usr/local/lib/node` or `/usr/local/lib/node_modules`, on windows, it will be `C:\Users\youname\.npm`;

How to edit the value of profix?

- list current config


	`npm config list`

- edit or set config

	`npm config edit` OR

	`npm config set <key> <value>`

- Or

	Usage:

	`npm config set <key> <value>`

	`npm config get [<key>]`

	`npm config delete <key>`

	`npm config list`

	`npm config edit`

	`npm set <key> <value>`

	`npm get [<key>]`

Enjoy it!

