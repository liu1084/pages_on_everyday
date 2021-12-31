## uninstall old docker & install docker of new version



Step 1: to identify what installed package you have:

```shell
dpkg -l | grep -i docker
```



Step 2: remove images, containers, volumes, and user's config files on your host:

```shell
sudo apt-get purge -y docker-engine docker docker.io docker-ce docker-ce-cli
sudo apt-get autoremove -y --purge docker-engine docker docker.io docker-ce  
```



```shell
sudo rm -rf /var/lib/docker /etc/docker
sudo rm /etc/apparmor.d/docker
sudo groupdel docker
sudo rm -rf /var/run/docker.sock
```



Step 3: reinstall docker

```shell
 sudo apt-get update
 sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```

 Add Docker’s official GPG key: 

```shell
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```



add repository to sources.list

```shell
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```



Step 4: update and install docker

```shell
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

