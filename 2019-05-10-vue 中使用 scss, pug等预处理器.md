### vue 中使用 scss, pug等预处理器

#### 参考 https://vue-loader.vuejs.org/zh/guide/pre-processors.html#sass

#### 安装对应的预处理器

```bash
npm i sass-loader node-sass
```

#### 在webpack配置文件中,找rules,添加要处理的后缀文件

```js
module.exports = {
  module: {
    rules: [
      // ... 忽略其它规则

      // 普通的 `.scss` 文件和 `*.vue` 文件中的
      // `<style lang="scss">` 块都应用它
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  // 插件忽略
}
```

#### 在vue组件中指定预处理语言的类型

```html
<style lang="scss">
/* 在这里撰写 SCSS */
</style>
```