### Linux ufw firewall setup & using

#### install
sudo apt-get install ufw

#### using

1. 启动服务
```shell
sudo service ufw start
```

2. 启用防火墙
```shell
## 开启了防火墙并随系统启动同时关闭所有外部对本机的访问（本机访问外部正常）
sudo ufw default deny
sudo ufw enable
```

3. 查询防火墙状态
```shell
sudo ufw status
```

4. 开启/禁用端口或服务
```shell
## 允许外部访问80端口
ufw allow 80

## 禁止外部访问80端口
ufw delete allow 80

## 允许某个IP访问所有端口
ufw allow from 192.168.1.200

## 禁止外部访问smtp服务
ufw deny smtp

## 拒绝从某个ip段访问某个端口
ufw deny proto tcp from 10.0.0.0/8 to 192.168.0.1 port 22 
```

