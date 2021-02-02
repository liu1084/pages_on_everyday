### jenkins ssh 部署 Can't connect to server 错误
jenkins使用的jsh客户端验证算法和ssh服务器不支持有关系，所以需要在服务器端增加支持的算法，所以就把下面的内容，加入sshd_config文件里即可.


KexAlgorithms curve25519-sha256@libssh.org,ecdh-sha2-nistp256,ecdh-sha2-nistp384,ecdh-sha2-nistp521,diffie-hellman-group-exchange-sha256,diffie-hellman-group14-sha1,diffie-hellman-group-exchange-sha1,diffie-hellman-group1-sha1

MACs hmac-sha2-512-etm@openssh.com,hmac-sha2-256-etm@openssh.com,hmac-ripemd160-etm@openssh.com,umac-128-etm@openssh.com,hmac-sha2-512,hmac-sha2-256,hmac-ripemd160,umac-128@openssh.com,hmac-md5,hmac-sha1,hmac-sha1-96,hmac-md5-96
