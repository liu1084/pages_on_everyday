## How to use systemctl to list services on systemd Linux

```shell
systemctl list-units --type=service
systemctl list-units --type=service --state=running
systemctl list-units --type=service --all
systemctl list-unit-files --state=enabled
systemctl list-unit-files --state=disabled
systemctl status cups.service

```

