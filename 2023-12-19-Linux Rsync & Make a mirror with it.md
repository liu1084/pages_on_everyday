## Linux Rsync & Make a mirror with it

- 参考资料

> https://www.ruanyifeng.com/blog/2020/08/rsync.html
>
> https://blog.programster.org/set-up-debian-mirror-using-rsync
>
> https://blog.programster.org/configure-debian-to-use-your-local-mirror



- shell脚本

[rsync-debian.sh](2023-12-19-rsync-debian.sh)



- /etc/apt/sources.list

```shell
deb http://MY-MIRROR-IP-OR-DOMAIN/debian/ buster main
deb-src http://MY-MIRROR-IP-OR-DOMAIN/debian/ buster main

deb http://security.debian.org/debian-security buster/updates main
deb-src http://security.debian.org/debian-security buster/updates main

# buster-updates, previously known as 'volatile'
deb http://MY-MIRROR-IP-OR-DOMAIN/debian/ buster-updates main
deb-src http://MY-MIRROR-IP-OR-DOMAIN/debian/ buster-updates main
```





```shell
deb http://192.168.10.98:9090/ bookworm main non-free non-free-firmware contrib
deb-src http://192.168.10.98:9090/ bookworm main non-free non-free-firmware contrib

deb https://mirror.nju.edu.cn/debian-security/ stable-security main
deb-src https://mirror.nju.edu.cn/debian-security/ stable-security main

deb http://192.168.10.98:9090/ bookworm-updates main non-free non-free-firmware contrib
deb-src http://192.168.10.98:9090/ bookworm-updates main non-free non-free-firmware contrib

deb http://192.168.10.98:9090/ bookworm-backportss main non-free non-free-firmware contrib
deb-src http://192.168.10.98:9090/ bookworm-backports main non-free non-free-firmware contrib
```



```shell
deb https://mirror.nju.edu.cn/debian/ stable main non-free non-free-firmware contrib
deb-src https://mirror.nju.edu.cn/debian/ stable main non-free non-free-firmware contrib

deb https://mirror.nju.edu.cn/debian-security/ stable-security main
deb-src https://mirror.nju.edu.cn/debian-security/ stable-security main

deb https://mirror.nju.edu.cn/debian/ stable-updates main non-free non-free-firmware contrib
deb-src https://mirror.nju.edu.cn/debian/ stable-updates main non-free non-free-firmware contrib

deb https://mirror.nju.edu.cn/debian/ stable-backports main non-free non-free-firmware contrib
deb-src https://mirror.nju.edu.cn/debian/ stable-backports main non-free non-free-firmware contrib
```

