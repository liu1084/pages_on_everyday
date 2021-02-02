---
layout: post
title: "js/handlebars/How to implements if conditions in handlebars?"
date: 2017-04-07 03:02:43 +0800
comments: true
categories: 
---
This is possible by 'cheating' with a block helper. This probably goes against the Ideology of the people who developed Handlebars.

```javascript
Handlebars.registerHelper('ifCond', function(v1, v2, options) {
  if(v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});
```

```hbs
{{#ifCond v1 v2}}
    {{v1}} is equal to {{v2}}
{{else}}
    {{v1}} is not equal to {{v2}}
{{/ifCond}}

```