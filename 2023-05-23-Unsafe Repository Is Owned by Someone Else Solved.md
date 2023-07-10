## Unsafe Repository Is Owned by Someone Else: Solved



>   https://www.positioniseverything.net/unsafe-repository-is-owned-by-someone-else/

-   windows OS

```shell
cd repo
takeown /f . /r /d Y
```



-   Linux/Mac OS

```shell
cd repo
chown -R your_account_username:your_account_username
```

