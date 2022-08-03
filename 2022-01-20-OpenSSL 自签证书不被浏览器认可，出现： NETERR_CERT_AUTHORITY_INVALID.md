## OpenSSL 自签证书不被浏览器认可，出现： NET::ERR_CERT_AUTHORITY_INVALID 



解决方法：

-   windows环境，win+r,输入：certmgr.msc
-   打开“受信任的根证书颁发机构”->“证书”，点右键，所有任务->导入CA.crt。



打开浏览器，在地址栏输入：net-internals/#hsts

在：Delete domain security policies

输入要删除的域名，删除。