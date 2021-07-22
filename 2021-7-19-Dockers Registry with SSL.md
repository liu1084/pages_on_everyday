## Dockers Registry with SSL

>   https://scriptcrunch.com/create-ca-tls-ssl-certificates-keys/
>
>   https://stackoverflow.com/questions/47238301/configuring-local-registry-with-self-signed-certificate
>
>   https://stackoverflow.com/questions/6194236/openssl-certificate-version-3-with-subject-alternative-name
>   https://stackoverflow.com/questions/52355346/unable-to-add-certificates-to-alpine-linux-container#:~:text=It%20is%20saying%20that%20ca-certificates.crt%20doesn%27t%20contain%20only,cannot%20include%20itself%29.%22%20%22The%20warning%20shown%20is%20normal.%22
>
>   https://github.com/rchidana/Docker-Private-Registry





## Terminologies used in this article:

1.  PKI – Public key infrastructure
2.  CA – Certificate Authority
3.  CSR – Certificate signing request
4.  SSL – Secure Socket Layer
5.  TLS – Transport Layer Security



## 流程 Certificate Creation Workflow

Following are the steps involved in creating CA, SSL/TLS certificates.

1.  CA Key and Certificate Creation
    1.  Generate a CA private key file using a utility (OpenSSL, cfssl etc)
    2.  Create the CA root certificate using the CA private key.
2.  Server Certificate Creation Process
    1.  Generate a server private key using a utility (OpenSSL, cfssl etc)
    2.  Create a CSR using the server private key.
    3.  Generate the server certificate using CA key, CA cert and Server CSR.



## openssl.cnf的位置：

centOS：/etc/pki/tls/openssl.cnf

debianOS： /etc/ssl/openssl.cnf

这是openssl的默认配置文件，我们根据这个配置文件选取其中的一部分参数。



## 相关命令的介绍

-   **openssl**: This is the basic command line tool for creating and managing OpenSSL certificates, keys, and other files.
-   **req**: This subcommand specifies that we want to use X.509 certificate signing request (CSR) management. The “X.509” is a public key infrastructure standard that SSL and TLS adheres to for its key and certificate management. We want to create a new X.509 cert, so we are using this subcommand.
-   **-x509**: This further modifies the previous subcommand by telling the utility that we want to make a self-signed certificate instead of generating a certificate signing request, as would normally happen.
-   **-nodes**: This tells OpenSSL to skip the option to secure our certificate with a passphrase. We need Apache to be able to read the file, without user intervention, when the server starts up. A passphrase would prevent this from happening because we would have to enter it after every restart.
-   **-days 365**: This option sets the length of time that the certificate will be considered valid. We set it for one year here.
-   **-newkey rsa:2048**: This specifies that we want to generate a new certificate and a new key at the same time. We did not create the key that is required to sign the certificate in a previous step, so we need to create it along with the certificate. The `rsa:2048` portion tells it to make an RSA key that is 2048 bits long.
-   **-keyout**: This line tells OpenSSL where to place the generated private key file that we are creating.
-   **-out**: This tells OpenSSL where to place the certificate that we are creating.



1.  创建CA **Generate CA Certificate and Key**

```shell
mkdir /root/certs
cd /root/certs
touch openssl.cnf
touch ssl.sh && chmod 755 ssl.sh
```

-    Configure openssl.cnf

```
touch openssl.cnf

vi openssl.cnf

[ req ]
default_bits = 2048
prompt = no
default_md = sha256
req_extensions = req_ext
distinguished_name = dn
x509_extensions = v3_ca

[ dn ]
C = CN
ST = JiangSu
L = NanJing
O = green26
OU = IOT
CN = hub.26green.cn

[ req_ext ]
subjectAltName = @alt_names

[ v3_req ]
basicConstraints = CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment

[ v3_ca ]
subjectAltName = @alt_names

[ alt_names ]
DNS.1 = hub.26green.cn
IP.1 = 39.99.188.241
```

-   生成ca.key, ca.csr & ca.crt

```shell
openssl req -new -nodes \
    -keyout ca.key  -out ca.csr \
    -days 3650 \
    -config ./openssl.cnf \
    -extensions v3_req \
    -subj "/C=CN/ST=JiangSu/L=NanJing/O=green26/OU=IOT/CN=hub.26green.cn"

openssl req -x509 -new -nodes \
    -key ca.key \
    -days 3650 -out ca.crt \
    -subj "/C=CN/ST=JiangSu/L=NanJing/O=green26/OU=IOT/CN=hub.26green.cn"
```



-   Generate server certification 

```shell
## 生成Key

openssl genpkey \
    -out server.key \
    -algorithm RSA \
    -pkeyopt rsa_keygen_bits:2048

## 创建CSR
openssl req \
    -new -key server.key \
    -out server.csr \
    -config ./openssl.cnf \
    -subj "/C=CN/ST=JiangSu/L=NanJing/O=green26/OU=IOT/CN=hub.26green.cn"
## 生成CRT    
openssl x509 -req \
    -days 3650 -in server.csr \
    -signkey server.key \
    -CA ca.crt -CAkey ca.key \
    -CAcreateserial \
    -out server.crt \
    -extfile ./openssl.cnf
```

-   启动registry服务器

```shell
docker run -d \
--restart=always \
--name registry \
-v /home/green26/docker/registry/certs:/certs \
-v /home/green26/docker/registry/data:/var/lib/registry \
-e REGISTRY_HTTP_ADDR=0.0.0.0:443 \
-e REGISTRY_HTTP_TLS_CERTIFICATE=/certs/server.crt \
-e REGISTRY_HTTP_TLS_KEY=/certs/server.key \
-p 5000:443 \
registry
```



-   在`客户端`创建docker配置， 配置完成后重启客户端的docker服务

```shell
cp ca.crt /usr/local/share/ca-certificates/ca.crt
chmod 644 /usr/local/share/ca-certificates/foo.crt && update-ca-certificates
mkdir /etc/docker/certs.d/hub.26green.cn:443
cp ca.crt server.key server.crt /etc/docker/certs.d/hub.26green.cn:443/

systemctl restart docker.service
```

-   在客户端打包镜像并push到服务器

```shell
mvn clean package
docker tag im hub.26green.cn:443/im
docker push hub.26green.cn:443/im
```



-   打印目前registry里面的镜像

```shell
https://hub.26green.cn/v2/_catalog
```

-   拉取镜像

```shell
docker pull hub.26green.cn:443/im
```

-   创建网络

```shell
docker network create test-env
```



-   启动镜像

```shell
docker run -d \
--name im \
-v /home/green26/docker/projects/logs:/app/logs \
--net test-env \
--restart always \
-p 9004:9004 \
-p 5005:5005 \
-p 8335:8335 \
-e ENVIRONMENT=test \
hub.26green.cn:443/im
```

