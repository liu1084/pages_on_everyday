## minimize docker image using docker slim 



-   install docker-slim

```shell
wget https://downloads.dockerslim.com/releases/1.40.2/dist_linux.tar.gz -o /usr/local/src
cd /usr/local/src
tar zxvf dist_linux.tar.gz
mv dist_linux /usr/local/docker-slim
chmod 755 /usr/local/docker-slim/*
vi ~/.bashrc

ADD:
export DOCKER_SLIM=/usr/local/docker-slim
export PATH=$DOCKER_SLIM:$PATH
```



-   minimize image

```shell
docker-slim build --target image_name:latest  --tag image_name:latest --http-probe=false --continue-after=2
```





-   examples

```shell
docker-slim --report=off  build --target hub.cinaval.com:15000/mysql5 --tag hub.cinaval.com:15000/mysql5:latest --http-probe=false --continue-after=2
```

