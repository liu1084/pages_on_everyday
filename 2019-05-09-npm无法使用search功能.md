### npm无法使用search功能

#### 使用npm进行search的时候报错【no available search source之类的】，但install正常， 原因是.npmrc文件中把
registry 设置成了淘宝的镜像
如 ：registry:https://registry.npm.taobao.org/
将其改为官方的源： https://registry.npmjs.org/即可解决问题
具体操作：

```shell
vi  ~/.npmrc
registry=https://registry.npmjs.org/

```

针对使用淘宝的镜像源install速度更快的优点，
可以使用cnpm代替npm进行install, 而使用npm进行search
安装：

```shell
npm install -g cnpm —registry=https://registry.npm.taobao.org/
```
cnpm 的操作大抵跟npm相同
