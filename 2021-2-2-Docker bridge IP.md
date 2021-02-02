### Docker bridge IP

>   https://serverfault.com/questions/916941/configuring-docker-to-not-use-the-172-17-0-0-range

- 编辑或者新建daemon.json


```shell
vi /etc/docker/daemon.json
```



```json
{
  "bip": "10.200.0.1/24",
  "default-address-pools":[
    {"base":"10.201.0.0/16","size":24},
    {"base":"10.202.0.0/16","size":24}
  ]
}
```
- 重启docker

```shell
service docker restart
```



-   检查网络

```shell
docker network create foo
docker network inspect foo | grep Subnet
                    "Subnet": "10.10.1.0/24"
```

