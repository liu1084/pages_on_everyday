### 利用emmet实现HTML“键步如飞”

1. 编辑器安装emmet插件（sublime Text 3，ctrl+shift+p,输入install package，回车。在搜索中输入emmet，安装即可）
2. 新建一个html文件（sublime text 3，ctrl+shift+p，输入seth，选择HTML）
   如果想生成如下代码

```html

<div id="page">
    <div class="logo"></div>
    <ul id="navigation">
        <li><a href="">Item 1</a></li>
        <li><a href="">Item 2</a></li>
        <li><a href="">Item 3</a></li>
        <li><a href="">Item 4</a></li>
        <li><a href="">Item 5</a></li>
    </ul>
</div>
```

- 方法：
按照给定的代码，依次输入每个字符

- 改进方法1：
选eclipse快捷键
在ul中，敲一行li，光标定位到此行，ctrl+alt+向下的箭头进行复制4行
竖行编辑
- 改进方法2：
在HTML编辑器中
输入：html:5，然后按tab键，
输入：#page>.logo+ul#navigation>li*5>a[href=""]{Item$}，然后按tab键

emmet的标签

| 标签                 | 含义                                           |
| :------------------- | :--------------------------------------------- |
| html:5               | 生成一个HTML 5文档结构                         |
| htm:4s               | 生成一个HTML 4文档结构                         |
| #id-name             | 生成一个div，id为id-name                       |
| .class-name          | 生成一个div，class为class-name                 |
| p#id-name.class-name | 生成一个p标签，id为id-name，class为class-name  |
| +                    | 平级关系                                       |
| >                    | 后代关系                                       |
| ^                    | 上级关系                                       |
| ^^^                  | 上三级关系                                     |
| *n                   | n个                                            |
| ( )                  | 分组（分组内部的嵌套和层级关系和分组外部无关） |
| [ ]                  | 设置属性                                       |
| $                    | 编号，一般跟*配合。                            |
| @-                   | 倒序，跟$，* 配合使用                          |
| { }                  | 文本内容                                       |