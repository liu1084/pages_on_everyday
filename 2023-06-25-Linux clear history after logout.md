## Linux clear history after logout



```shell
cat /dev/null > ~/.bash_history && history -c && exit
```

