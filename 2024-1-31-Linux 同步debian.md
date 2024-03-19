## Linux 同步debian

```shell
#!/bin/bash
set -x
lock_file=/tmp/.rsync_lock
# Check is Lock File exists, if not create it and set trap on exit
if { set -C; 2>/dev/null > ${lock_file}; }; then
       trap "rm -f ${lock_file}" EXIT
else
       echo "Lock file exists… exiting"
       exit
fi
# Do Something, Main script work here…
STORAGE_PATH="/data/storage/debian-mirror/html/debian.cinaval.com"

rsync \
  --append-verify \
  --partial \
  -z \
  --recursive \
  --links \
  --perms \
  --times \
  --compress \
  --progress \
  --delete \
  rsync://mirror.nju.edu.cn/debian \
  $STORAGE_PATH
```



```yml
version: '3'
services:
  nginx:
    container_name: debian-mirror
    image: hub.sinoval.com:15000/nginx-with-lua
    network_mode: bridge
    volumes:
      - '/data/storage/debian-mirror/html/debian.cinaval.com:/usr/share/nginx/html'
      - '/data/storage/debian-mirror/log/:/var/log/nginx/'
      - '/data/storage/debian-mirror/conf/:/etc/nginx/'
    ports:
      #- '9443:443' # https
      - '9090:80' # http
    restart: always
```

