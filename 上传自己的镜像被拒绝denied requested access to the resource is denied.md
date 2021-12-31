## 上传自己的镜像被拒绝denied: requested access to the resource is denied



```shell
# create access token on hub.docker.com
# 拷贝生成的access token
# login
docker login -u liu1084
Password: 粘贴生成的access token
Login Succeeded
# 列出本地的镜像
docker images
REPOSITORY               TAG            IMAGE ID       CREATED        SIZE
debian                   202112141615   877764855363   2 hours ago    3.16GB

# 添加tag
docker tag 877764855363 liu1084/debian:latest

# 推送到hub
docker push liu1084/debian
```

