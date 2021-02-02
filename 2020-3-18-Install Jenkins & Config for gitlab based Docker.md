### Install Jenkins & Config for gitlab based Docker on DebianOS

- install docker

  1. remove old docker version

     ```shell
     sudo apt-get remove docker docker-engine docker.io containerd runc
     ```

  2. install stable version

     ```shell
     # 更新包索引
     sudo apt-get update
     # 安装必要的软件
     sudo apt-get install \
         apt-transport-https \
         ca-certificates \
         curl \
         gnupg2 \
         software-properties-common
     # 添加GPG key
     curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
     # 检查GPG的指纹
     sudo apt-key fingerprint 0EBFCD88
     # 添加源
     sudo add-apt-repository \
        "deb [arch=amd64] https://download.docker.com/linux/debian \
        $(lsb_release -cs) \
        stable"
     # 更新包索引
     sudo apt-get update
     # 安装社区版
     sudo apt-get install docker-ce docker-ce-cli containerd.io
     ```

     

- setup docker image mirror

- pull jenkins image

- run jenkins

- add a new task