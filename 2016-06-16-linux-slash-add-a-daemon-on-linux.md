---
layout: post
title: "linux/Add a daemon on linux"
date: 2016-06-16 13:48:56 +0800
comments: true
categories: Linux, daemon
---

When you install some services from source code on your Linux server, for example: mysql, nginx, tomcat, mail, firewall, you want to the service to be a deamon service and auto-start on OS starting, Or you want not to shutdown a service if something faild except the service has error which can not to be started.

OK, if you are familiar with Windows OS, you can install a software as a service, Or, Ubuntu OS, apt-get install packageName, Or, Centos OS, yum install packageName.

## Windows install a service

- using sc.exe

		C:\herong>sc.exe create ApacheService 
		   binPath= "C:\local\apache\bin\httpd.exe -k runservice" 
		   DisplayName= "Apache Server"
		
		[SC] CreateService SUCCESS
		
		
		C:\herong>sc.exe start ApacheService
		
		SERVICE_NAME: ApacheService
		   TYPE               : 10  WIN32_OWN_PROCESS
		   STATE              : 2  START_PENDING
		                      (NOT_STOPPABLE,NOT_PAUSABLE,IGNORES_SHUTDOWN)
		   WIN32_EXIT_CODE    : 0  (0x0)
		   SERVICE_EXIT_CODE  : 0  (0x0)
		   CHECKPOINT         : 0x2
		   WAIT_HINT          : 0x7530
		   PID                : 2552
		   FLAGS              :
		
		
		C:\herong>sc.exe query ApacheService
		
		SERVICE_NAME: ApacheService
		   TYPE               : 10  WIN32_OWN_PROCESS
		   STATE              : 4  RUNNING
		                      (STOPPABLE,NOT_PAUSABLE,IGNORES_SHUTDOWN)
		   WIN32_EXIT_CODE    : 0  (0x0)
		   SERVICE_EXIT_CODE  : 0  (0x0)
		   CHECKPOINT         : 0x0
		   WAIT_HINT          : 0x0
		
		
		C:\herong>sc.exe stop ApacheService
		
		SERVICE_NAME: ApacheService
		   TYPE               : 10  WIN32_OWN_PROCESS
		   STATE              : 3  STOP_PENDING
		                      (NOT_STOPPABLE,NOT_PAUSABLE,IGNORES_SHUTDOWN)
		   WIN32_EXIT_CODE    : 0  (0x0)
		   SERVICE_EXIT_CODE  : 0  (0x0)
		   CHECKPOINT         : 0x4
		   WAIT_HINT          : 0x7530
		
		
		C:\herong>sc.exe delete ApacheService
		
		[SC] DeleteService SUCCESS
		
		
		C:\herong>sc.exe query ApacheService
		
		[SC] EnumQueryServicesStatus:OpenService FAILED 1060:
		The specified service does not exist as an installed service.

- using MS SDK installutil
	
		[link to](https://msdn.microsoft.com/en-us/library/50614e95(v=vs.110).aspx)

## Linux

### Using daemontools [http://cr.yp.to/daemontools.html](http://cr.yp.to/daemontools.html)

- Download software [download](http://cr.yp.to/daemontools/daemontools-0.76.tar.gz)

- System requirements

		daemontools works only under UNIX.

- Installation

		Create a /package directory:
		     mkdir -p /package
		     chmod 1755 /package
		     cd /package
		Download daemontools-0.76.tar.gz into /package. Unpack the daemontools package:
		     gunzip daemontools-0.76.tar
		     tar -xpf daemontools-0.76.tar
		     rm -f daemontools-0.76.tar
		     cd admin/daemontools-0.76
		Compile and set up the daemontools programs:
		     package/install
		On BSD systems, reboot to start svscan.

- Why is /service better than inittab and ttys and init.d and rc.local? Why should my package rely on svscan and supervise?

	Answer: Several reasons:

												inittab			ttys	init.d		rc.local	/service
		Easy service installation and removal	No				No		Yes			No			Yes
		Easy first-time service startup			No				No		No			No			Yes
		Reliable restarts						Yes				Yes		No			No			Yes
		Easy, reliable signalling				No				No		No			No			Yes
		Clean process state						Yes				Yes		No			No			Yes
		Portability								No				No		No			No			Yes

	* Easy service installation and removal. With /service and init.d, creating your new service means linking some files into a centralized directory, and removing the service means removing those files. This is easy for you to automate.

	* In contrast, with inittab, ttys, and rc.local, creating a new service means adding some lines to a centralized file, and removing the service means locating and removing those lines. This is much more difficult to automate; there are no portable tools for editing the file. Most packages leave it to the user to do the editing.

	* Easy first-time service startup. With /service, once you've created your service, it automatically starts within five seconds.

	* In contrast, with inittab, ttys, init.d, and rc.local, starting the service means an extra command.

	* Reliable restarts. With /service, inittab, and ttys, if your daemon dies, it is automatically restarted.

	* In contrast, with init.d and rc.local, daemons are not monitored. Your daemon will fail to start if, for example, a previously started daemon has temporarily chewed up almost all available memory. The system administrator has to manually restart your daemon after he notices the problem.

	* Easy, reliable signalling. With /service, the system administrator can use svc to control your daemon. For example:

			svc -h /service/yourdaemon: sends HUP
			svc -t /service/yourdaemon: sends TERM, and automatically restarts the daemon after it dies
			svc -d /service/yourdaemon: sends TERM, and leaves the service down
			svc -u /service/yourdaemon: brings the service back up
			svc -o /service/yourdaemon: runs the service once

	In contrast, with inittab, ttys, init.d, and rc.local, you have to go to extra work to locate the daemon process ID if you want to send it signals. This is not easy to do reliably.
	Clean process state. With /service, inittab, and ttys, when the system administrator restarts a service, the service receives the same fresh process state that it received at boot time.
	
	In contrast, with init.d and rc.local, you have to go to tons of extra work to clean up environment variables, resource limits, controlling ttys, etc. Programmers screw this up all the time, even when they don't care about portability to systems with different process states; system administrators then encounter mysterious failures when they restart daemons.
	
	Portability. With /service, your program works the same way on every system: Linux, BSD, Solaris, etc.
	
	In contrast, inittab and ttys and init.d and rc.local vary from system to system. Some systems don't have init.d, for example, and the ones that do have it don't agree on its location. This is extremely annoying for cross-platform system administrators.

How do I create a service directory?
Answer: The only required component of your service directory is an executable file, ./run, that runs your daemon in the foreground, exiting when your daemon exits. Normally ./run is mode 755, and the directory itself is mode 755.

Typically ./run is a shell script. For example:

     #!/bin/sh
     echo starting
     exec clockspeed
The exec here tells sh to replace itself with clockspeed. This lets the system administrator use svc to send signals directly to clockspeed.
You can use envdir to set environment variables according to files in a specified directory, typically ./env:

     #!/bin/sh
     exec envdir ./env ./run2
This provides a convenient, easily automated mechanism for daemon configuration.
Other useful tools for ./run: envuidgid, setuidgid, softlimit, and setlock.

It is generally not a good idea to use shell pipelines:

     #!/bin/sh
     generate-crucial-data | log-crucial-data
If log-crucial-data fails to start up, any data already written to the pipe by generate-crucial-data will be discarded. To fix this problem, use a separate log.
How do I create a service directory with a log?
Answer: Make your service directory sticky (mode 1755), for compatibility with daemontools versions before 0.75. Create a ./log subdirectory of the service directory. Create a ./log/run script that runs the logging program.

svscan will create a pipe from your daemon to the logging program. For example, if ./run contains

     #!/bin/sh
     exec generate-crucial-data
and ./log/run contains
     #!/bin/sh
     exec log-crucial-data
then output from generate-crucial-data will be fed to log-crucial-data. Each program is separately supervised: log-crucial-data will be restarted if it dies, and generate-crucial-data will be restarted if it dies.
A common choice of logging program for ./log/run is multilog:

     #!/bin/sh
     exec multilog t ./main
This example adds a timestamp to each line and saves the results to an automatically rotated log directory, ./log/main.
You can use setuidgid to run the logging program under a non-root account:

     #!/bin/sh
     exec setuidgid cruxlog multilog t ./main
You will have to create a ./log/main directory owned by that account; multilog will not have permission to create ./log/main.
If your daemon sends log messages to descriptor 2, you should redirect descriptor 2 to descriptor 1 in ./run:

     #!/bin/sh
     exec 2>&1
     exec envuidgid tinydns envdir ./env softlimit -d300000 /usr/local/bin/tinydns
How can I supervise a daemon that puts itself into the background? When I run inetd, my shell script exits immediately, so supervise keeps trying to restart it.
Answer: The best answer is to fix the daemon. Having every daemon put itself into the background is bad software design.

fghack can force some daemons to run in the foreground:

     #!/bin/sh
     echo starting
     exec fghack inetd
Beware that supervise cannot send signals to daemons under fghack.
fghack creates a pipe from the daemon and reads data until the pipe is closed. Normally all the daemon's descendants will inherit the open pipe from the daemon, so the pipe will not be closed until they all exit.

However, fghack will exit early if the daemon goes out of its way to close extra descriptors. A few of these daemons leave descriptor 0 open, even though they do not use descriptor 0; so

     #!/bin/sh
     exec fghack baddaemon <&-
might work.
How can I supervise a daemon that kills its process group? When pppd receives a TERM signal, it destroys its entire process group, including svscan and all my other daemons.
Answer: The best answer is to fix the daemon. It is inexcusable for a program to send signals to a process group that it didn't create.

pgrphack runs a daemon in a new process group:

     #!/bin/sh
     echo starting
     exec pgrphack pppd nodetach call myisp
How do I upgrade a service directory? I need to change ./run.
Answer: Create ./run.new and atomically rename ./run.new to ./run. Then use

     svc -t .
to send a TERM signal to the daemon. supervise will start the new ./run after the daemon exits.
It is not safe to edit ./run in place. supervise may restart ./run at any moment. The system may be rebooted at any moment.

Beware that many logging programs will discard unprocessed input data when they receive TERM. multilog is careful to handle everything it reads before it exits.

How do I install a new service? I have a service directory in /etc/sshd; how do I bring the service up?
Answer: Make a symbolic link in /service pointing to your service directory:

     ln -s /etc/sshd /service/sshd
svscan will automatically start sshd within five seconds.
How do I remove a service? I want to eliminate /service/telnetd.
Answer:

     cd /service/telnetd
     rm /service/telnetd
     svc -dx . log


### ubuntu (ONLY on ubuntu OS, debian not test)

you can create a .conf file in /etc/init (NOTE: not /etc/init.d) folder, edit it and put lines to it:


	description "descriptions-server-daemon"
	author "Jim.Liu"
	
	start on runlevel [345]
	stop on shutdown
	
	expect fork
	
	script
	    sudo -u tomcat7  /usr/bin/java -jar /usr/local/utf-socket/server.jar >> /usr/local/utf-socket/logs/server.log 2>&1 &
	    emit socks-server-daemon_running
	end script