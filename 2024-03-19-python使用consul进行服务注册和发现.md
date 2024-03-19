## python使用consul进行服务注册和发现


### 拉取consul镜像

```shell
# 通过docker快速安装
docker pull consul
```

### 启动consul

这里启动4个Consul Agent，3个Server（会选举出一个leader），1个Client。

第1个Server节点(IP: 172.17.0.2)，后边启动的几个容器IP会排着来：172.17.0.3、172.17.0.4、172.17.0.5

```shell
#启动第1个Server节点(IP: 172.17.0.2)，集群要求要有3个Server，将容器8500端口映射到主机8900端口，同时开启管理界面
docker run -d --name=consul1 -p 8900:8500 -e CONSUL_BIND_INTERFACE=eth0 consul agent --server=true --bootstrap-expect=3 --client=0.0.0.0 -ui
 
#启动第2个Server节点，并加入集群
docker run -d --name=consul2 -e CONSUL_BIND_INTERFACE=eth0 consul agent --server=true --client=0.0.0.0 --join 172.17.0.2
 
#启动第3个Server节点，并加入集群
docker run -d --name=consul3 -e CONSUL_BIND_INTERFACE=eth0 consul agent --server=true --client=0.0.0.0 --join 172.17.0.2
 
#启动第4个Client节点，并加入集群
docker run -d --name=consul4 -e CONSUL_BIND_INTERFACE=eth0 consul agent --server=false --client=0.0.0.0 --join 172.17.0.2
```

或者通过docker compose方式：

```yml

version: '3'
services:
  consul1:
    container_name: consul1
    image: 'hub.cinaval.com:15000/consul'
    hostname: consul1.cinaval.com
    volumes:
      - /home/cinaval/docker/consul/consul1/data/:/consul/data/
      - /home/cinaval/docker/consul/consul1/backup/:/consul/backup/
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    restart: always
    command: agent -server -bootstrap-expect=3 -node=consul1 -bind=0.0.0.0 -datacenter=dc1
    networks:
      - consul-net
  
  consul2:
    container_name: consul2
    image: 'hub.cinaval.com:15000/consul'
    hostname: consul2.cinaval.com
    volumes:
      - /home/cinaval/docker/consul/consul2/data/:/consul/data/
      - /home/cinaval/docker/consul/consul2/backup/:/consul/backup/
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    restart: always
    command: agent -server -retry-join=consul1 -node=consul2 -bind=0.0.0.0 -datacenter=dc1
    networks:
      - consul-net
  
  consul3:
    container_name: consul3
    image: 'hub.cinaval.com:15000/consul'
    hostname: consul3.cinaval.com
    volumes:
      - /home/cinaval/docker/consul/consul3/data/:/consul/data/
      - /home/cinaval/docker/consul/consul3/backup/:/consul/backup/
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    restart: always
    command: agent -server -retry-join=consul1 -node=consul3 -bind=0.0.0.0 -datacenter=dc1
    networks:
      - consul-net
  
  consul4:
    container_name: consul-client
    image: 'hub.cinaval.com:15000/consul'
    hostname: consul.cinaval.com
    volumes:
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    restart: always
    command: agent -client=0.0.0.0 -retry-join=consul1 -ui -node=consul -datacenter=dc1
    ports:
      - '8500:8500'
    networks:
      - consul-net

networks:
  consul-net:
    driver: bridge

```


Tip: Consul节点在Docker的容器内是互通的，他们通过桥接的模式通信。但是如果主机要访问容器内的网络，需要做端口映射。在启动第一个容器时，将Consul的8500端口映射到了主机的8900端口，这样就可以方便的通过主机的浏览器查看集群信息。

### 将Python服务注册到consul

```shell

pip install python-consul

```


```python
import consul

class Consul(object):
    def __init__(self, host, port):
        '''初始化，连接consul服务器'''
        self._consul = consul.Consul(host, port)

    def RegisterService(self, name, host, port, tags=None):
        tags = tags or []
        # 注册服务
        self._consul.agent.service.register(
            name,
            name,
            host,
            port,
            tags,
            # 健康检查ip端口，检查时间：5,超时时间：30，注销时间：30s
            check=consul.Check().tcp(host, port, "5s", "30s", "30s"))

    def GetService(self, name):
        services = self._consul.agent.services()
        service = services.get(name)
        if not service:
            return None, None
        addr = "{0}:{1}".format(service['Address'], service['Port'])
        return service, addr

if __name__ == '__main__':
    host="10.0.0.11" #consul服务器的ip
    port="8900" #consul服务器对外的端口
    consul_client=Consul(host,port)

    name="maple"
    host="10.0.0.11"
    port=8900
    consul_client.RegisterService(name,host,port)

    check = consul.Check().tcp(host, port, "5s", "30s", "30s")
    print(check)
    res=consul_client.GetService("maple")
    print(res)


```