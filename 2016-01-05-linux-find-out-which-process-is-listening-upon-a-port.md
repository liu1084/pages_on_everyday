---
id: 151
title: 'Linux: Find Out Which Process Is Listening Upon a Port'
date: 2016-01-05T00:30:36+00:00
author: liu1084
layout: post
guid: http://blog.83096146.com/?p=151
permalink: /?p=151
categories:
  - linux
---
How do I find out running processes were associated with each open port? How do I find out what process has open tcp port 111 or udp port 7000 under Linux?

You can the following programs to find out about port numbers and its associated process:
  
netstat &#8211; a command-line tool that displays network connections, routing tables, and a number of network interface statistics.
  
fuser &#8211; a command line tool to identify processes using files or sockets.
  
lsof &#8211; a command line tool to list open files under Linux / UNIX to report a list of all open files and the processes that opened them.
  
/proc/$pid/ file system &#8211; Under Linux /proc includes a directory for each running process (including kernel processes) at /proc/PID, containing information about that process, notably including the processes name that opened port.

<!--more-->


  
You must run above command(s) as the root user.
  
netstat example
  
Type the following command:
  
\# netstat -tulpn
  
Sample outputs:
  
Active Internet connections (only servers)
  
Proto Recv-Q Send-Q Local Address Foreign Address State PID/Program name
  
tcp 0 0 127.0.0.1:3306 0.0.0.0:* LISTEN 1138/mysqld
  
tcp 0 0 0.0.0.0:111 0.0.0.0:* LISTEN 850/portmap
  
tcp 0 0 0.0.0.0:80 0.0.0.0:* LISTEN 1607/apache2
  
tcp 0 0 0.0.0.0:55091 0.0.0.0:* LISTEN 910/rpc.statd
  
tcp 0 0 192.168.122.1:53 0.0.0.0:* LISTEN 1467/dnsmasq
  
tcp 0 0 0.0.0.0:22 0.0.0.0:* LISTEN 992/sshd
  
tcp 0 0 127.0.0.1:631 0.0.0.0:* LISTEN 1565/cupsd
  
tcp 0 0 0.0.0.0:7000 0.0.0.0:* LISTEN 3813/transmission
  
tcp6 0 0 :::22 :::* LISTEN 992/sshd
  
tcp6 0 0 ::1:631 :::* LISTEN 1565/cupsd
  
tcp6 0 0 :::7000 :::* LISTEN 3813/transmission
  
udp 0 0 0.0.0.0:111 0.0.0.0:* 850/portmap
  
udp 0 0 0.0.0.0:662 0.0.0.0:* 910/rpc.statd
  
udp 0 0 192.168.122.1:53 0.0.0.0:* 1467/dnsmasq
  
udp 0 0 0.0.0.0:67 0.0.0.0:* 1467/dnsmasq
  
udp 0 0 0.0.0.0:68 0.0.0.0:* 3697/dhclient
  
udp 0 0 0.0.0.0:7000 0.0.0.0:* 3813/transmission
  
udp 0 0 0.0.0.0:54746 0.0.0.0:* 910/rpc.statd
  
TCP port 3306 was opened by mysqld process having PID # 1138. You can verify this using /proc, enter:
  
\# ls -l /proc/1138/exe
  
Sample outputs:
  
lrwxrwxrwx 1 root root 0 2010-10-29 10:20 /proc/1138/exe -> /usr/sbin/mysqld
  
You can use grep command to filter out information:
  
\# netstat -tulpn | grep :80
  
Sample outputs:
  
tcp 0 0 0.0.0.0:80 0.0.0.0:* LISTEN 1607/apache2
  
Video demo

fuser command
  
Find out the processes PID that opened tcp port 7000, enter:
  
\# fuser 7000/tcp
  
Sample outputs:
  
7000/tcp: 3813
  
Finally, find out process name associated with PID # 3813, enter:
  
\# ls -l /proc/3813/exe
  
Sample outputs:
  
lrwxrwxrwx 1 vivek vivek 0 2010-10-29 11:00 /proc/3813/exe -> /usr/bin/transmission
  
/usr/bin/transmission is a bittorrent client, enter:
  
\# man transmission
  
OR
  
\# whatis transmission
  
Sample outputs:
  
transmission (1) &#8211; a bittorrent client
  
Task: Find Out Current Working Directory Of a Process
  
To find out current working directory of a process called bittorrent or pid 3813, enter:
  
\# ls -l /proc/3813/cwd
  
Sample outputs:
  
lrwxrwxrwx 1 vivek vivek 0 2010-10-29 12:04 /proc/3813/cwd -> /home/vivek
  
OR use pwdx command, enter:
  
\# pwdx 3813
  
Sample outputs:
  
3813: /home/vivek
  
Task: Find Out Owner Of a Process
  
Use the following command to find out the owner of a process PID called 3813:
  
\# ps aux | grep 3813
  
OR
  
\# ps aux | grep &#8216;[3]813&#8217;
  
Sample outputs:
  
vivek 3813 1.9 0.3 188372 26628 ? Sl 10:58 2:27 transmission
  
OR try the following ps command:
  
\# ps -eo pid,user,group,args,etime,lstart | grep &#8216;[3]813&#8217;
  
Sample outputs:
  
3813 vivek vivek transmission 02:44:05 Fri Oct 29 10:58:40 2010
  
Another option is /proc/$PID/environ, enter:
  
\# cat /proc/3813/environ
  
OR
  
\# grep &#8211;color -w -a USER /proc/3813/environ
  
Sample outputs (note &#8211;colour option):

Fig.01: grep output

lsof Command Example
  
Type the command as follows:
  
lsof -i :portNumber
  
lsof -i tcp:portNumber
  
lsof -i udp:portNumber
  
lsof -i :80
  
lsof -i :80 | grep LISTEN
  
Sample outputs:
  
apache2 1607 root 3u IPv4 6472 0t0 TCP *:www (LISTEN)
  
apache2 1616 www-data 3u IPv4 6472 0t0 TCP *:www (LISTEN)
  
apache2 1617 www-data 3u IPv4 6472 0t0 TCP *:www (LISTEN)
  
apache2 1618 www-data 3u IPv4 6472 0t0 TCP *:www (LISTEN)
  
apache2 1619 www-data 3u IPv4 6472 0t0 TCP *:www (LISTEN)
  
apache2 1620 www-data 3u IPv4 6472 0t0 TCP *:www (LISTEN)
  
Now, you get more information about pid # 1607 or 1616 and so on:
  
\# ps aux | grep &#8216;[1]616&#8217;
  
Sample outputs:
  
www-data 1616 0.0 0.0 35816 3880 ? S 10:20 0:00 /usr/sbin/apache2 -k start
  
I recommend the following command to grab info about pid # 1616:
  
\# ps -eo pid,user,group,args,etime,lstart | grep &#8216;[1]616&#8217;
  
Sample outputs:
  
1616 www-data www-data /usr/sbin/apache2 -k start 03:16:22 Fri Oct 29 10:20:17 2010
  
Where,
  
1616 : PID
  
www-date : User name (owner &#8211; EUID)
  
www-date : Group name (group &#8211; EGID)
  
/usr/sbin/apache2 -k start : The command name and its args
  
03:16:22 : Elapsed time since the process was started, in the form [[dd-]hh:]mm:ss.
  
Fri Oct 29 10:20:17 2010 : Time the command started.
  
Help: I Discover an Open Port Which I Don&#8217;t Recognize At All
  
The file /etc/services is used to map port numbers and protocols to service names. Try matching port numbers:
  
$ grep port /etc/services
  
$ grep 443 /etc/services
  
Sample outputs:
  
https 443/tcp # http protocol over TLS/SSL
  
https 443/udp
  
Check For rootkit
  
I strongly recommend that you find out which processes are really running, especially servers connected to the high speed Internet access. You can look for rootkit which is a program designed to take fundamental control (in Linux / UNIX terms &#8220;root&#8221; access, in Windows terms &#8220;Administrator&#8221; access) of a computer system, without authorization by the system&#8217;s owners and legitimate managers. See how to detecting / checking rootkits under Linux.
  
Keep an Eye On Your Bandwidth Graphs
  
Usually, rooted servers are used to send a large number of spam or malware or DoS style attacks on other computers.
  
See also:
  
See the following man pages for more information:
  
$ man ps
  
$ man grep
  
$ man lsof
  
$ man netstat
  
$ man fuser