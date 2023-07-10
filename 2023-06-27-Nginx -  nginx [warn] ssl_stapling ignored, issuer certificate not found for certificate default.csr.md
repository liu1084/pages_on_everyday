## Nginx -  `nginx: [warn] "ssl_stapling" ignored, issuer certificate not found for certificate "default.csr"` 

### 为什么要启用ssl_stapling?

解决SSL证书的过期检查问题，启用OCSP（Online Certificate Status Protocol)在线证书状态协议。


### 启用OCSP

![image-20230627161230692](Z:%5Cgithub%5Cpages_on_everyday%5Cimgs%5Cimage-20230627161230692.png)



### 错误 

nginx: [warn] "ssl_stapling" ignored, issuer certificate not found for certificate "/xxx/key/default/default.csr"



### 解决方法

在server块中添加

```shell
ssl_trusted_certificate /etc/nginx/ssl_key/ams.cinaval.com/ca.cer;
```



![image-20230627175658018](Z:%5Cgithub%5Cpages_on_everyday%5Cimgs%5Cimage-20230627175658018.png)