## error: docker rmi -f xxx

> Error response from daemon: conflict: unable to delete xxxxxxxxxxx (cannot be forced) - image has dependent child images

```shell
docker image inspect --format='{{.RepoTags}} {{.Id}} {{.Parent}}' $(docker image ls -q --filter since=XXX)    # XXX指镜像ID
```

