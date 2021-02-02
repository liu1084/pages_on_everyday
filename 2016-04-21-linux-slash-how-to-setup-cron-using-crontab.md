---
layout: post
title: "linux/How to setup cron using crontab?"
date: 2016-04-21 20:03:15 +0800
comments: true
categories: linux, cron
---

如果你是一名Linux管理员，那么定期执行一些常用的命令或者脚本，是最平常不过了。使用crontab来做这项工作，比较方便。

## 什么是crontab？
crontab是一个程序，它可以用来安装，卸载或者列出在Vixie Cron守护的cron 表中的记录。表中的记录就是定时执行的任务。

## 容许和拒绝
如果你是一个普通用户，可能你并不能执行crontab，因为：
虽然每个用户都有自己的crontab，并且这些crontabs都放在/var/spool/cron/crontabs下，但是：

1. 不能直接修改这个文件，只能通过crontab来进行维护；
2. 如果系统中包含/etc/cron.allow和/或/etc/cron.deny文件，那么你必须在cron.allow中，才可以使用crontab。如果只有cront.deny而且你在这个文件中，那就不可以执行crontab命令。
3. 

## crontab的用法
    usage:  crontab [-u user] file
        crontab [ -u user ] [ -i ] { -e | -l | -r }
                (default operation is replace, per 1003.2)
        -e      (edit user's crontab)
        -l      (list user's crontab)
        -r      (delete user's crontab)
        -i      (prompt before deleting user's crontab)

参数解释：

* -u 设置脚本或者命令的执行的用户，默认是当前编写cron的用户
* -e 编辑用户的crontab
* -l 列出用户的crontab
* -r 删除用户的crontab
* -i 在删除用户的crontab的时候，弹出确认对话框

## 新建或者编辑crontab

    sudo user //切换到root用户
    crontab -e -u mail //编辑mail用户的crontab
    
## 编写格式
    # 文件格式说明
    #  ——分钟 (0 - 59)
    # |  ——小时 (0 - 23)
    # | |  ——日   (1 - 31)
    # | | |  ——月   (1 - 12)
    # | | | |  ——星期 (0 - 7)（星期日=0或7）
    # | | | | |
    # * * * * * 被执行的命令

## 在一个区域里填写多个数值的方法：
    
    逗号 (',') 分开的值，例如：“1,3,4,7,8”
    连词符 ('-') 制定值的范围，例如：“1-6”，意思等同于“1,2,3,4,5,6”
    星号 ('*') 代表任何可能的值。例如，在“小时域” 里的星号等于是“每一个小时”，等等

>注：

- 在“星期域”（第五个域），0和7都被视为星期日。
- 不很直观的用法：如果日期和星期同时被设定，那么其中的一个条件被满足时，指令便会被执行。请参考下例。
- 前5个域称之分时日月周，可方便个人记忆。
- 从第六个域起，指明要执行的命令。

## 实例

    #=================================================================
     #      SYSTEM ACTIVITY REPORTS
     #  8am-5pm activity reports every 20 mins during weekdays.
     #  activity reports every hour on Saturday and Sunday.
     #  6pm-7am activity reports every hour during weekdays.
     #  summary prepared at 18:05 every weekday.
     #=================================================================
     0,20,40 8-17 * * 1-5 /usr/lib/sa/sa1 1200 3 &
     0 * * * 0,6 /usr/lib/sa/sa1 &
     0 18-7 * * 1-5 /usr/lib/sa/sa1 &
     5 18 * * 1-5 /usr/lib/sa/sa2 -s 8:00 -e 18:01 -i 3600 -ubcwyaqvm &
     
     
## 不发送电子邮件
如果你的cron执行完成或者遇到问题，通常会发一份电子邮件到你的邮箱。

- 若想关闭某个命令的输出结果，可以将输出结果重定向至/dev/null。
    <pre>
    > /dev/null 2>&1
    </pre>
- 在常用的Vixie cron中，也可以在文件的开始部分加入命令来关闭所有命令的邮件输出：
    <pre>
    MAILTO=""
    </pre>
    
    
## crontab 使用注意
1. 无法在 crontab 的命令中使用环境变量

    */1 * * * * echo $APP_HOME # 为空

2. 第三个域和第五个域是 “或” 操作系统
    \# 四月的第一个星期日早晨1时59分运行 a.sh
    59 1 1-7 4 0 a.sh # 错误
    
    59 1 1-7 4 * test `date +\%w` -eq 0 && a.sh # 正确
3. 分钟误用
    \# 每两个小时执行一次
    
    \* /2 * * * command # 错误
    
    0 /2 * * * command # 正确