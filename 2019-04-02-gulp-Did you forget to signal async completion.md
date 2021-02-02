### gulp: Did you forget to signal async completion?

#### 背景

学习gulp的前端自动化构建，按照示例代码，跑了一个简单的task，控制台打出如下提示：
```
The following tasks did not complete: testGulp
Did you forget to signal async completion?
```


#### 问题重现

```js
const gulp = require('gulp');
gulp.task('testGulp', () => {
    console.log('Hello World!');
});

```

#### 解决方法，使用 async 和 await。

```js
const gulp = require('gulp');
gulp.task('testGulp', async() => {
   await console.log('Hello World!');
});

```


#### 官方方法

在不使用文件流的情况下，向task的函数里传入一个名叫done的回调函数，以结束task，如下代码所示：

```js
gulp.task('testGulp', done => {
  console.log('Hello World!');
  done();
});

```

done回调函数的作用是在task完成时通知Gulp（而不是返回一个流），而task里的所有其他功能都纯粹依赖Node来实现。