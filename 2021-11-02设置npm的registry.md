## 设置npm的registry

1.原npm地址

```shell
npm config set registry http://registry.npmjs.org 
```

2.设置国内镜像

a.通过config命令

```shell
npm config set registry https://registry.npm.taobao.org 
npm info underscore （如果上面配置正确这个命令会有字符串response）
```

b.命令行指定

```shell
npm --registry https://registry.npm.taobao.org info underscore 
```

c.编辑 `~/.npmrc` 加入下面内容

```shell
registry = https://registry.npm.taobao.org
```

