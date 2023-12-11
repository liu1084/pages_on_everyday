## How to clear journalctl

> https://unix.stackexchange.com/questions/139513/how-to-clear-journalctl

The self maintenance method is to vacuum the logs by size or time.

Retain only the past two days:

```
journalctl --vacuum-time=2d
```

Retain only the past 500 MB:

```
journalctl --vacuum-size=500M
```