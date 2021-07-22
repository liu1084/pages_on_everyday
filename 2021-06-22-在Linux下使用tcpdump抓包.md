## 在Linux下使用`tcpdump`抓包



-   安装tcpdump

    ```shell
    apt install -y tcpdump
    ```

    

-   抓包

    ```shell
    root@green26-dev-87:~# tcpdump ip host 172.16.0.87 and 172.16.0.126 and dst port ! 22 and dst port 2021  -s 0 -vvv -xx
    tcpdump: listening on enp34s0, link-type EN10MB (Ethernet), capture size 262144 bytes
    10:19:24.555067 IP (tos 0x0, ttl 128, id 17677, offset 0, flags [DF], proto TCP (6), length 52)
        172.16.0.126.sieve > 172.16.0.87.2021: Flags [S], cksum 0x12bb (correct), seq 3171431203, win 64240, options [mss 1460,nop,wscale 8,nop,nop,sackOK], length 0
            0x0000:  2cf0 5d96 42ac 2cf0 5d2c 9420 0800 4500
            0x0010:  0034 450d 4000 8006 5cc1 ac10 007e ac10
            0x0020:  0057 105e 07e5 bd08 3323 0000 0000 8002
            0x0030:  faf0 12bb 0000 0204 05b4 0103 0308 0101
            0x0040:  0402
    10:19:24.555419 IP (tos 0x0, ttl 128, id 17678, offset 0, flags [DF], proto TCP (6), length 40)
        172.16.0.126.sieve > 172.16.0.87.2021: Flags [.], cksum 0xe4aa (correct), seq 3171431204, ack 2891881809, win 8212, length 0
            0x0000:  2cf0 5d96 42ac 2cf0 5d2c 9420 0800 4500
            0x0010:  0028 450e 4000 8006 5ccc ac10 007e ac10
            0x0020:  0057 105e 07e5 bd08 3324 ac5e 9d51 5010
            0x0030:  2014 e4aa 0000 0000 0000 0000
    10:19:24.556352 IP (tos 0x0, ttl 128, id 17679, offset 0, flags [DF], proto TCP (6), length 41)
        172.16.0.126.sieve > 172.16.0.87.2021: Flags [P.], cksum 0xd4a1 (correct), seq 0:1, ack 1, win 8212, length 1
            0x0000:  2cf0 5d96 42ac 2cf0 5d2c 9420 0800 4500
            0x0010:  0029 450f 4000 8006 5cca ac10 007e ac10
            0x0020:  0057 105e 07e5 bd08 3324 ac5e 9d51 5018
            0x0030:  2014 d4a1 0000 1000 0000 0000
    10:19:24.556400 IP (tos 0x0, ttl 128, id 17680, offset 0, flags [DF], proto TCP (6), length 41)
        172.16.0.126.sieve > 172.16.0.87.2021: Flags [P.], cksum 0x7aa0 (correct), seq 1:2, ack 1, win 8212, length 1
            0x0000:  2cf0 5d96 42ac 2cf0 5d2c 9420 0800 4500
            0x0010:  0029 4510 4000 8006 5cc9 ac10 007e ac10
            0x0020:  0057 105e 07e5 bd08 3325 ac5e 9d51 5018
            0x0030:  2014 7aa0 0000 6a00 0000 0000
    10:19:24.556791 IP (tos 0x0, ttl 128, id 17681, offset 0, flags [DF], proto TCP (6), length 42)
        172.16.0.126.sieve > 172.16.0.87.2021: Flags [P.], cksum 0xe49a (correct), seq 2:4, ack 1, win 8212, length 2
            0x0000:  2cf0 5d96 42ac 2cf0 5d2c 9420 0800 4500
            0x0010:  002a 4511 4000 8006 5cc7 ac10 007e ac10
            0x0020:  0057 105e 07e5 bd08 3326 ac5e 9d51 5018
            0x0030:  2014 e49a 0000 0004 0000 0000
    10:19:24.556837 IP (tos 0x0, ttl 128, id 17682, offset 0, flags [DF], proto TCP (6), length 44)
        172.16.0.126.sieve > 172.16.0.87.2021: Flags [P.], cksum 0x42f5 (correct), seq 4:8, ack 1, win 8212, length 4
            0x0000:  2cf0 5d96 42ac 2cf0 5d2c 9420 0800 4500
            0x0010:  002c 4512 4000 8006 5cc4 ac10 007e ac10
            0x0020:  0057 105e 07e5 bd08 3328 ac5e 9d51 5018
            0x0030:  2014 42f5 0000 4d51 5454 0000
    10:19:24.557109 IP (tos 0x0, ttl 128, id 17683, offset 0, flags [DF], proto TCP (6), length 41)
        172.16.0.126.sieve > 172.16.0.87.2021: Flags [P.], cksum 0xe099 (correct), seq 8:9, ack 1, win 8212, length 1
            0x0000:  2cf0 5d96 42ac 2cf0 5d2c 9420 0800 4500
            0x0010:  0029 4513 4000 8006 5cc6 ac10 007e ac10
            0x0020:  0057 105e 07e5 bd08 332c ac5e 9d51 5018
            0x0030:  2014 e099 0000 0400 0000 0000
    10:19:34.600331 IP (tos 0x0, ttl 128, id 17700, offset 0, flags [DF], proto TCP (6), length 42)
        172.16.0.126.sieve > 172.16.0.87.2021: Flags [P.], cksum 0x2430 (correct), seq 108:110, ack 5, win 8212, length 2
            0x0000:  2cf0 5d96 42ac 2cf0 5d2c 9420 0800 4500
            0x0010:  002a 4524 4000 8006 5cb4 ac10 007e ac10
            0x0020:  0057 105e 07e5 bd08 3390 ac5e 9d55 5018
            0x0030:  2014 2430 0000 c000 0000 0000
    10:19:34.641751 IP (tos 0x0, ttl 128, id 17701, offset 0, flags [DF], proto TCP (6), length 40)
        172.16.0.126.sieve > 172.16.0.87.2021: Flags [.], cksum 0xe436 (correct), seq 110, ack 7, win 8212, length 0
            0x0000:  2cf0 5d96 42ac 2cf0 5d2c 9420 0800 4500
            0x0010:  0028 4525 4000 8006 5cb5 ac10 007e ac10
            0x0020:  0057 105e 07e5 bd08 3392 ac5e 9d57 5010
            0x0030:  2014 e436 0000 0000 0000 0000
    ^C
    9 packets captured
    22 packets received by filter
    13 packets dropped by kernel
    ```

    

-   tcpdump的各种选项

    >   https://www.huaweicloud.com/articles/39023d9940e61fafc66fb389644c83e8.html

    

| 选项名称    | 解释                             |
| ----------- | -------------------------------- |
| -i eth0     | 监听eth0网口                     |
| host IP     | 监听本机跟IP之间的通信           |
| src host IP | 监听本机跟特定来源主机之间的通信 |
| dst host IP | 监听本机跟特定目标主机之间的通信 |

