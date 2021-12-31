## Linux 设置或取消 http 代理

- 临时添加
比如：你的代理服务器的ip是proxy-server，端口是port，用户名是username,密码是password。

```shell
//开启
$ export {http,https,ftp}_proxy="username:password@http://proxy-server:port"
//关闭
$ unset {http,https,ftp}_proxy
```

- 全局添加 在/etc/bashrc或者/etc/profile中添加如下环境变量
```shell
export {http,https,ftp}_proxy="username:password@http://proxy-server:port"
unset {http,https,ftp}_proxy
```

