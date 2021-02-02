### Linux install sync datetime with NTP

- install ntpd

  ```shell
  apt install ntp
  ```

  

- reselect timezone, show date & adjust datetime

  ```shell
  rm -rf /etc/localtime
  ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime 
  ntpdate time-a-g.nist.gov
  20 Jan 17:57:54 ntpdate[27034]: adjust time server 129.6.15.28 offset -0.065345 sec
  date
  Mon Jan 20 18:01:33 CST 2020
  vi /etc/ntp.conf
  ```
  
add `server time-a-g.nist.gov`

- start ntpd

  /etc/init.d/ntp start
  [ ok ] Starting ntp (via systemctl): ntp.service.
  root@[18:05:02]debian-nj-dev1:/usr/local/src/nginx-1.17.7# /etc/init.d/ntp status
  ● ntp.service - LSB: Start NTP daemon
     Loaded: loaded (/etc/init.d/ntp; generated; vendor preset: enabled)
     Active: active (running) since Mon 2020-01-20 18:05:02 CST; 3s ago
       Docs: man:systemd-sysv-generator(8)
    Process: 26998 ExecStop=/etc/init.d/ntp stop (code=exited, status=0/SUCCESS)
    Process: 27091 ExecStart=/etc/init.d/ntp start (code=exited, status=0/SUCCESS)
      Tasks: 2 (limit: 4915)
     Memory: 960.0K
        CPU: 15ms
     CGroup: /system.slice/ntp.service
             └─27101 /usr/sbin/ntpd -p /var/run/ntpd.pid -g -u 121:126
  
  Jan 20 18:05:02 debian-nj-dev1 ntpd[27101]: Listen normally on 8 enp0s8 [fe80::9a9d:1f62:8f69:38f%3]:123
  Jan 20 18:05:02 debian-nj-dev1 ntpd[27101]: Listen normally on 9 docker0 [fe80::42:caff:fe72:9957%4]:123
  Jan 20 18:05:02 debian-nj-dev1 ntpd[27101]: Listen normally on 10 veth11ee1f6 [fe80::48db:3fff:fef3:d381%16]:123
  Jan 20 18:05:02 debian-nj-dev1 ntpd[27101]: Listening on routing socket on fd #27 for interface updates
  Jan 20 18:05:03 debian-nj-dev1 ntpd[27101]: Soliciting pool server 185.216.231.25
  Jan 20 18:05:04 debian-nj-dev1 ntpd[27101]: Soliciting pool server 120.25.115.20
  Jan 20 18:05:04 debian-nj-dev1 ntpd[27101]: Soliciting pool server 162.159.200.1
  Jan 20 18:05:05 debian-nj-dev1 ntpd[27101]: Soliciting pool server 193.182.111.142
  Jan 20 18:05:05 debian-nj-dev1 ntpd[27101]: Soliciting pool server 193.182.111.143
  Jan 20 18:05:05 debian-nj-dev1 ntpd[27101]: Soliciting pool server 119.28.206.193
  Hint: Some lines were ellipsized, use -l to show in full.
  root@[18:05:06]debian-nj-dev1:/usr/local/src/nginx-1.17.7# ntp
  ntpd            ntpdate-debian  ntp-keygen      ntpsweep        ntptrace
  ntpdate         ntpdc           ntpq            ntptime         ntp-wait
  root@[18:05:06]debian-nj-dev1:/usr/local/src/nginx-1.17.7# tim
  timage       time         timedatectl  timeout      times
  root@[18:05:06]debian-nj-dev1:/usr/local/src/nginx-1.17.7# tim
  timage       time         timedatectl  timeout      times
  root@[18:05:06]debian-nj-dev1:/usr/local/src/nginx-1.17.7# timedatectl
        Local time: Mon 2020-01-20 18:05:44 CST
    Universal time: Mon 2020-01-20 10:05:44 UTC
          RTC time: Fri 2020-01-17 13:42:31
         Time zone: Asia/Shanghai (CST, +0800)
   Network time on: yes
  NTP synchronized: yes
   RTC in local TZ: no
  root@[18:05:44]debian-nj-dev1:/usr/local/src/nginx-1.17.7#
  
  ```
  
  ```