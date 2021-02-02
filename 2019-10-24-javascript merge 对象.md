## javascript merge 对象

```javascript
var json1 = [{id:1, name: 'xxx'}];
var json2 = [{id:2, name: 'xyz'}];
var merged = _.merge(_.keyBy(json1, 'id'), _.keyBy(json2, 'id'));
var finalObj = _.values(merged);

console.log(finalObj);
```