## Linux Cron

- 格式

```shell

*     *     *   *    *   command to be executed
-     -     -   -    -
|     |     |   |    |
|     |     |   |    +----- day of week (0-6) (Sunday=0)
|     |     |   +------- month (1-12)
|     |     +--------- day of month (1-31)
|     +----------- hour (0-23)
+------------- min (0-59)

```

- 例子

```shell
* * */3 * *  that says, every minute of every hour on every three days. 
0 0 */3 * *  says at 00:00 (midnight) every three days.

```
