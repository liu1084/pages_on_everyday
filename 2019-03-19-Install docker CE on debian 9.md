### Install docker CE on debian 9

#### reference documents
- [docker.com](https://docs.docker.com/install/linux/docker-ce/debian/)

#### remove old docker
```shell
$ sudo apt-get remove docker docker-engine docker.io containerd runc
```

#### install Docker CE(Community Edition，Docker EE is not supported on Debian) using repository
- Update the apt package index
```shell
sudo apt-get update
```
- Install packages to allow apt to use a repository over HTTPS
```shell
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg2 \
    software-properties-common
```

- Add Docker’s official GPG key & Verify that you now have the key with the fingerprint 9DC8 5822 9FC7 DD38 854A E2D8 8D81 803C 0EBF CD88, by searching for the last 8 characters of the fingerprint
```shell
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
```

- Use the following command to set up the stable repository
```shell
apt-key fingerprint 0EBFCD88

sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/debian \
   $(lsb_release -cs) \
   stable"
```

- Install docker CE

```shell
apt-get install docker-ce docker-ce-cli containerd.io
```

#### 如果想安装指定版本的dockerCE

- 列出可用的版本
```
apt-cache madison docker-ce
```

- 安装指定的版本
```
apt-get install docker-ce=<VERSION_STRING> docker-ce-cli=<VERSION_STRING> containerd.io
```


#### 检查dockerCE是否安装成功

```shell
sudo docker run hello-world
```


#### 更新dockerCE

```
sudo apt-get update
```


#### 卸载dockerCE

```shell
apt-get purge docker-ce

## Images, containers, volumes, or customized configuration files on your host are not automatically removed. To delete all images, containers, and volumes:
sudo rm -rf /var/lib/docker

```