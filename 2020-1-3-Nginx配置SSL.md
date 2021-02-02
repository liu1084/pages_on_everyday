### Nginx配置SSL

- Nginx配置证书需要在server字段下加入: 服务器证书(CRT)和私钥(PEM)

证书的生成过程包括:

1. 生成私钥
2. 根据私钥生成证书请求发给CA机构
3. CA机构根据证书请求, 生成服务器证书

如果通过CA机构获取证书, 生成私钥以后, 发送给CA等着收邮件即可;但是CA机构作为发证单位是需要收费的.

如果只是作为测试或者非官方的网站, 可以通过openssl生成自签名的证书;

- Linux上的openssl是一共用于生成密钥, 公钥, 证书以及对证书进行签名的工具. 在使用openssl之前, 需要配置.

修改/etc/ssl/openssl.cnf文件即可.

1. openssl.cnf文件的主要配置

```config
[ CA_default ]

dir             = /etc/pki/CA              # Where everything is kept
certs           = $dir/certs            # Where the issued certs are kept
crl_dir         = $dir/crl              # Where the issued crl are kept
database        = $dir/index.txt        # database index file.
#unique_subject = no                    # Set to 'no' to allow creation of
                                        # several certs with same subject.
new_certs_dir   = $dir/newcerts         # default place for new certs.

certificate     = $dir/cacert.pem       # The CA certificate
serial          = $dir/serial           # The current serial number
crlnumber       = $dir/crlnumber        # the current crl number
                                        # must be commented out to leave a V1 CRL
crl             = $dir/crl.pem          # The current CRL
private_key     = $dir/private/cakey.pem# The private key
RANDFILE        = $dir/private/.rand    # private random number file
```



| 名称      | 解释                                       |      |
| --------- | ------------------------------------------ | ---- |
| dir       | 根目录, 用于存放openssl的各种文件          |      |
| certs     | 已颁发证书保存目录                         |      |
| crl_dir   | 证书撤销列表存放目录                       |      |
| index.txt | 数据库索引文件, 记录这一些已签署的证书信息 |      |
| newcerts  | 新签署证书的保存目录                       |      |
| private   | 存放私钥的目录                             |      |
| serial    | 当前证书的序列号                           |      |



1. 创建配置种对应的文件夹

```shell
mkdir -pv /etc/pki/CA/{certs,crl,newcerts,private}
touch /etc/pki/CA/{serial,index.txt}
```



1. 显示文件树

```shell
tree /etc/pki/CA
/etc/pki/CA
├── certs
├── crl
├── index.txt
├── newcerts
├── private
└── serial
```



1. 指定证书编号

```shell
cat /etc/pki/CA/serial
# echo "01" > /etc/pki/CA/serial
# cat /etc/pki/CA/serial
01
```





- 生成自签名的cert和key

  ```shell
  mkdir -p /etc/nginx/ssl/private /etc/nginx/ssl/certs
  sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/nginx/ssl/private/nginx-selfsigned.key -out /etc/nginx/ssl/certs/nginx-selfsigned.crt
  ```

- 生成pem文件, 禁用nginx的stapling

  ```shell
  sudo openssl dhparam -out /etc/nginx/ssl/certs/dhparam.pem 2048
  ```

- 配置Nginx

  1. 主配置文件/etc/nginx/nginx.conf

     ```shell
     mkdir -p /etc/nginx
     touch /etc/nginx/nginx.conf
     ```

  2. 

  ```nginx
  #user  nobody;
  worker_processes  1024;
  pid                     logs/nginx.pid;
  events {
      multi_accept        on;
      worker_connections  65535;
  }
  http {
      #MIME
      include             mime.types;
      default_type        application/octet-stream;
      #LOGGING
      log_format          main  '$remote_addr - $remote_user [$time_local] "$request" '
                              '$status $body_bytes_sent "$http_referer" '
                              '"$http_user_agent" "$http_x_forwarded_for"';
      access_log          logs/access.log     main;
      error_log           logs/error.log      warn;
      charset             utf-8;
      sendfile            on;
      tcp_nopush          on;
      tcp_nodelay         on;
      server_tokens       off;
      log_not_found       off;
      types_hash_max_size 2048;
      client_max_body_size 16M;
      keepalive_timeout   65;
      gzip  on;
      #SITES
      include sites-available/trinity.conf;
  }
  ```

  2. 创建虚拟站点

     ```nginx
     mkdir -p /etc/nginx/nginxconfig.io /etc/nginx/sites-available
     cd nginxconfig.io
     touch general.conf
     touch proxy.conf
     touch security.conf
     touch self-signed.conf
     touch ssl-params.conf
     ```

     - trinity.conf

     ```shell
     server {
     	listen			80;
     	listen			443 ssl;
     
     	server_name trinity.proaimltd.com.cn;
     
     	# security
     	include nginxconfig.io/security.conf;
     
     	# logging
     	access_log logs/trinity.access.log;
     	error_log logs/trinity.error.log warn;
     
     	# site trinity
     	location / {
     		root   E:/Proaim/proaim-trinity-frontend-demo/dist;
     		index  index.html;
     		try_files $uri $uri/ /index.html;
     	}
     
     	# additional config
     	include nginxconfig.io/general.conf;
     
         # ssl config
         include nginxconfig.io/self-signed.conf;
         include nginxconfig.io/ssl-params.conf;
     }
     ```

     

     - general.conf

     ```shell
     # favicon.ico
     location = /favicon.ico {
     	log_not_found off;
     	access_log off;
     }
     
     # robots.txt
     location = /robots.txt {
     	log_not_found off;
     	access_log off;
     }
     
     # assets, media
     location ~* \.(?:css(\.map)?|js(\.map)?|jpe?g|png|gif|ico|cur|heic|webp|tiff?|mp3|m4a|aac|ogg|midi?|wav|mp4|mov|webm|mpe?g|avi|ogv|flv|wmv)$ {
     	expires 7d;
     	access_log off;
     }
     
     # svg, fonts
     location ~* \.(?:svgz?|ttf|ttc|otf|eot|woff2?)$ {
     	add_header Access-Control-Allow-Origin "*";
     	expires 7d;
     	access_log off;
     }
     
     # gzip
     gzip on;
     gzip_vary on;
     gzip_proxied any;
     gzip_comp_level 6;
     gzip_types text/plain text/css text/xml application/json application/javascript application/rss+xml application/atom+xml image/svg+xml;
     ```

     

     - proxy.conf

       ```shell
       proxy_http_version	1.1;
       proxy_cache_bypass	$http_upgrade;
       
       proxy_set_header Upgrade			$http_upgrade;
       proxy_set_header Connection 		upgrade;
       proxy_set_header Host				$host;
       proxy_set_header X-Real-IP			$remote_addr;
       proxy_set_header X-Forwarded-For	$proxy_add_x_forwarded_for;
       proxy_set_header X-Forwarded-Proto	$scheme;
       proxy_set_header X-Forwarded-Host	$host;
       proxy_set_header X-Forwarded-Port	$server_port;
       ```

       

     - security.conf

       ```shell
       # security headers
       add_header X-Frame-Options "SAMEORIGIN" always;
       add_header X-XSS-Protection "1; mode=block" always;
       add_header X-Content-Type-Options "nosniff" always;
       add_header Referrer-Policy "no-referrer-when-downgrade" always;
       add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
       
       # . files
       location ~ /\.(?!well-known) {
       	deny all;
       }
       ```

       

     - self-signed.conf

       ```shell
       ssl_certificate      /etc/nginx/ssl/certs/nginx-selfsigned.crt;
       ssl_certificate_key  /etc/nginx/ssl/private/nginx-selfsigned.key;
       ```

       

     - ssl-params.conf

       ```shell
       ssl_protocols TLSv1.2;
       ssl_prefer_server_ciphers on;
       ssl_dhparam /etc/nginx/ssl/certs/dhparam.pem;
       ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-SHA384;
       ssl_ecdh_curve secp384r1; # Requires nginx >= 1.1.0
       ssl_session_timeout  10m;
       ssl_session_cache shared:SSL:10m;
       ssl_session_tickets off; # Requires nginx >= 1.5.9
       # ssl_stapling on; # Requires nginx >= 1.3.7
       # ssl_stapling_verify on; # Requires nginx => 1.3.7
       resolver 192.168.100.1 8.8.8.8 8.8.4.4 valid=300s;
       resolver_timeout 2s;
       add_header X-Frame-Options DENY;
       add_header X-Content-Type-Options nosniff;
       add_header X-XSS-Protection "1; mode=block";
       ```

       