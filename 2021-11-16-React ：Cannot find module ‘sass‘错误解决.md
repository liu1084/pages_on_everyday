## React ：Cannot find module ‘sass‘错误解决

原因：未安装`node-sass`模块

安装：

1.  切换国内的源，加快安装速度

```shell
npm config list
npm config set registry https://registry.npm.taobao.org  
```

2.  如果在window下，允许执行脚本

```shell
//设置powershell，允许运行脚本，打开powershell（以管理员运行）
set-ExecutionPolicy RemoteSigned
```

3.  切换到工作目录

```shell
npm install -g node-sass
```

