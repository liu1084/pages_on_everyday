# SecureCRT通过SSH密钥连接Linux服务器

1.  服务器生成密钥对

-   服务器端使用`ssh-keygen`命令生成密钥对;

```shell
 ssh-keygen -t RSA
```

-   将id_rsa.pub加入sshd_config的配置文件authorized_keys

```shell
cat id_rsa.pub >> authorized_keys
```

-   将生成的私钥id_rsa`~/.ssh/`下载到客户端
-   配置CRT为公钥认证

![](I:%5Cgithub%5Cpages_on_everyday%5Cimgs%5Cserver-private-1.png)

![](I:%5Cgithub%5Cpages_on_everyday%5Cimgs%5Cserver-private-2.png)

1.  通过SecureCRT生成密钥对

Tools -> Create public keys...

生成好以后,保存2个密钥.

![](I:%5Cgithub%5Cpages_on_everyday%5Cimgs%5Ccrt-key-1.png)
![](I:%5Cgithub%5Cpages_on_everyday%5Cimgs%5Ccrt-key-2.png)
![](I:%5Cgithub%5Cpages_on_everyday%5Cimgs%5Ccrt-key-3.png)
![](I:%5Cgithub%5Cpages_on_everyday%5Cimgs%5Ccrt-key-4.png)
![](I:%5Cgithub%5Cpages_on_everyday%5Cimgs%5Ccrt-key-5.png)


-   在SecureCRT中设置密钥为生成的私钥

![](I:%5Cgithub%5Cpages_on_everyday%5Cimgs%5Ccrt-key-6.png)

-   将CRT生成的公钥加入sshd_config中

```shell
vi ~/.ssh/authorized_keys
```



以上两种方法都可以实现远程服务器免密登录.

第一种是每个服务器的密钥都不同; 第二种是每个服务器的