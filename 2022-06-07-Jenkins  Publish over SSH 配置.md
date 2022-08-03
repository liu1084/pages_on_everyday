## Jenkins  Publish over SSH 配置



参考：https://www.cnblogs.com/architectforest/p/13707244.html



1.  在Jenkins中生成公钥和私钥；

```she
 ssh-keygen -m PEM -t rsa -b 4096
```



1.  将生成的公钥复制到目标机的~/.ssh/authorized_keys文件中；
2.  在配置jenkins插件` Publish over SSH ` 时，将生成的私钥复制到文本框中。