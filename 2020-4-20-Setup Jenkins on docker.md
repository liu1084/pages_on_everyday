
### Setup Jenkins on docker

```shell
docker pull jenkins
groupadd jenkins
useradd jenkins -g jenkins
chmod 777 jenkins/
chown jenkins jenkins/
docker run -d --name jenkins -p 8088:8080 -p 50000:50000  --privileged=true -e TZ='Asia/Shanghai' -u jenkins -v /home/green26/docker/jenkins:/var/jenkins_home jenkins
docker logs -f 116a28fd0
vim /home/green26/docker/jenkins/hudson.model.UpdateCenter.xml
https://mirrors.huaweicloud.com/jenkins/updates/update-center.json
docker restart 116a28fd0
```