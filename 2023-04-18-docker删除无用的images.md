## docker删除无用的images

```shell
for id in `docker images | grep "<none>" |awk '{print $3}'`; do docker rmi -f ${id}; done
```

