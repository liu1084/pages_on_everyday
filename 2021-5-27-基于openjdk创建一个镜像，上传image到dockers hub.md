## 基于openjdk创建一个镜像，上传image到dockers hub

1.  下载openjdk

    ```shell
    docker pull openjdk:8
    ```

    

2.  启动镜像，开启交互模式

    ```shell
    dockr run -d -it openjdk
    ```

    

3.  进入容器，更新操作系统，并安装依赖

    ```shell
    apt update -y && apt upgrade -y
    ```

    

4.  退出容器，将宿主机jar包上传，拷贝配置文件到容器，并启动服务

    ```shell
    docker cp xxx.jar openjdk:/tmp
    ```

5.  将容器提交到本地

    ```shell
    docker commit accdda4724da atlassian_software
    ```

    

6.  在docker hub创建资源库

    登录docker hub，创建资源库

    

7.  将本地镜像转换为远程镜像

    ```shell
    docker tag atlassian_software:latest liu1084/atlassian_software
    ```

    

8.  将镜像推送到远程资源库

    ```
    docker login
    username: xxx
    password: xxx
    
    docker push liu1084/atlassian_software
    ```

    

9.  测试