---
id: 143
title: List of JavaScript Objects and Functions
date: 2016-01-05T00:26:02+00:00
author: liu1084
layout: post
guid: http://blog.83096146.com/?p=143
permalink: /?p=143
categories:
  - linux
---
This reference contains a list of objects, functions and properties supported by the QML engine. For a detailed description, see the ECMA-262 specification.
  
The Global Object
  
Value Properties
  
NaN
  
Infinity
  
undefined
  
Function Properties
  
eval(x)
  
parseInt(string, radix)
  
parseFloat(string)
  
isNaN(number)
  
isFinite(number)
  
decodeURI(encodedURI)
  
decodeURIComponent(encodedURIComponent)
  
encodeURI(uri)
  
encodeURIComponent(uriComponent)
  
Constructor Properties
  
Object
  
Function
  
Array
  
String
  
Boolean
  
Number
  
Date
  
RegExp
  
Error
  
EvalError
  
RangeError
  
ReferenceError
  
SyntaxError
  
TypeError
  
URIError
  
Other Properties
  
Math
  
JSON
  
The Object Object
  
Object Constructor
  
Function Properties
  
getPrototypeOf(O)
  
getOwnPropertyDescriptor(O, P)
  
getOwnPropertyNames(O)
  
create(O [, Properties])
  
defineProperty(O, P, Attributes)
  
defineProperties(O, Properties)
  
keys(O)
  
seal(O)
  
isSealed(O)
  
freeze(O)
  
isFrozen(O)
  
preventExtensions(O)
  
isExtensible(O)
  
Object Prototype
  
Function Properties
  
toString()
  
toLocaleString()
  
valueOf()
  
hasOwnProperty(V)
  
isPrototypeOf(V)
  
propertyIsEnumerable(V)
  
Function Objects
  
Function Prototype
  
Function Properties
  
toString()
  
apply(thisArg, argArray)
  
call(thisArg [, arg1 [, arg2, &#8230;]])
  
bind((thisArg [, arg1 [, arg2, …]])
  
Array Objects
  
Array Prototype Object
  
Function Properties
  
toString()
  
toLocaleString()
  
concat([item1 [, item2 [, &#8230;]]])
  
join(separator)
  
pop()
  
push([item1 [, item2 [, &#8230;]]])
  
reverse()
  
shift()
  
slice(start, end)
  
sort(comparefn)
  
splice(start, deleteCount[, item1 [, item2 [, &#8230;]]])
  
unshift([item1 [, item2 [, &#8230;]]])
  
indexOf(searchElement [, fromIndex])
  
lastIndexOf(searchElement [, fromIndex])
  
every(callbackfn [, thisArg])
  
some(callbackfn [, thisArg])
  
forEach(callbackfn [, thisArg])
  
map(callbackfn [, thisArg])
  
filter(callbackfn [, thisArg])
  
reduce(callbackfn [, initialValue])
  
reduceRight(callbackfn [, initialValue])
  
String Objects
  
String Prototype Object
  
Function Properties
  
toString()
  
valueOf()
  
charAt(pos)
  
charCodeAt(pos)
  
concat([string1 [, string2 [, &#8230;]]])
  
indexOf(searchString ,position)
  
lastIndexOf(searchString, position)
  
localeCompare(that)
  
match(regexp)
  
replace(searchValue, replaceValue)
  
search(regexp)
  
slice(start, end)
  
split(separator, limit)
  
substring(start, end)
  
toLowerCase()
  
toLocaleLowerCase()
  
toUpperCase()
  
toLocaleUpperCase()
  
trim()
  
Additionally, the QML engine adds the following functions to the String prototype:
  
arg()
  
Boolean Objects
  
Boolean Prototype Object
  
Function Properties
  
toString()
  
valueOf()
  
Number Objects
  
Number Prototype Object
  
Function Properties
  
toString(radix)
  
toLocaleString()
  
toFixed(fractionDigits)
  
toExponential(fractionDigits)
  
toPrecision(precision)
  
Additionally, the QML engine adds the following functions to the Number prototype:
  
fromLocaleString(locale, number)
  
toLocaleCurrencyString(locale, symbol)
  
toLocaleString(locale, format, precision)
  
The Math Object
  
Value Properties
  
E
  
LN10
  
LN2
  
LOG2E
  
LOG10E
  
PI
  
SQRT1_2
  
SQRT2
  
Function Properties
  
abs(x)
  
acos(x)
  
asin(x)
  
atan(x)
  
atan2(y, x)
  
ceil(x)
  
cos(x)
  
exp(x)
  
floor(x)
  
log(x)
  
max([value1 [, value2 [, &#8230;]]])
  
min([value1 [, value2 [, &#8230;]]])
  
pow(x, y)
  
random()
  
round(x)
  
sin(x)
  
sqrt(x)
  
tan(x)
  
Date Objects
  
Date Prototype Object
  
Function Properties
  
toString()
  
toDateString()
  
toTimeString()
  
toLocaleString()
  
toLocaleDateString()
  
toLocaleTimeString()
  
valueOf()
  
getTime()
  
getFullYear()
  
getUTCFullYear()
  
getMonth()
  
getUTCMonth()
  
getDate()
  
getUTCDate()
  
getDay()
  
getUTCDay()
  
getHours()
  
getUTCHours()
  
getMinutes()
  
getUTCMinutes()
  
getSeconds()
  
getUTCSeconds()
  
getMilliseconds()
  
getUTCMilliseconds()
  
getTimeZoneOffset()
  
setTime(time)
  
setMilliseconds(ms)
  
setUTCMilliseconds(ms)
  
setSeconds(sec [, ms])
  
setUTCSeconds(sec [, ms])
  
setMinutes(min [, sec [, ms]])
  
setUTCMinutes(min [, sec [, ms]])
  
setHours(hour [, min [, sec [, ms]]])
  
setUTCHours(hour [, min [, sec [, ms]]])
  
setDate(date)
  
setUTCDate(date)
  
setMonth(month [, date])
  
setUTCMonth(month [, date])
  
setFullYear(year [, month [, date]])
  
setUTCFullYear(year [, month [, date]])
  
toUTCString()
  
toISOString()
  
toJSON()
  
Additionally, the QML engine adds the following functions to the Date prototype:
  
timeZoneUpdated()
  
toLocaleDateString(locale, format)
  
toLocaleString(locale, format)
  
toLocaleTimeString(locale, format)
  
RegExp Objects
  
RegExp Prototype Object
  
Function Properties
  
exec(string)
  
test(string)
  
toString()
  
Error Objects
  
Error Prototype Object
  
Value Properties
  
name
  
message
  
Function Properties
  
toString()
  
The JSON Object
  
Function Properties
  
parse(text [, reviver])
  
stringify(value [, replacer [, space]])