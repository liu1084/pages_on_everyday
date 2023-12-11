## How to clear journalctl

```shell
$ sudo find /var/log/journal -name "*.journal" | xargs sudo rm 
$ sudo systemctl restart systemd-journald
```

