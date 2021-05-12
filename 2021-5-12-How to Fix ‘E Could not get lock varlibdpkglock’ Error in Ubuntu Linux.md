# How to Fix ‘E: Could not get lock /var/lib/dpkg/lock’ Error in Ubuntu Linux





```shell
# lsof /var/lib/dpkg/lock
COMMAND  PID USER   FD   TYPE DEVICE SIZE/OFF      NODE NAME
apt     7878 root    5uW  REG    8,2        0 100139199 /var/lib/dpkg/lock

# kill -9 7878
```

