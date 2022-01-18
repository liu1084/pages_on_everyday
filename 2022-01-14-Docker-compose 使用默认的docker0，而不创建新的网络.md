## Docker-compose 使用默认的docker0，而不创建新的网络

使用docker-compose启动服务，默认会创建一个新的网络运行容器。但是如果你不想创建，可以在docker-compose.yml中添加：

```shell
version: "3"
services:
	app:
		image:nginx:latest
		network_mode: bridge
```

