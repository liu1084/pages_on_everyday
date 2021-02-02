---
id: 63
title: Install qmail on debian
date: 2015-12-27T05:52:17+00:00
author: liu1084
layout: post
guid: http://www.83096146.com/blog/?p=63
permalink: /?p=63
categories:
  - linux
---
<pre class="lang:sh decode:true">wget http://www.qmail.org/netqmail-1.06.tar.gz
http://cr.yp.to/ucspi-tcp/ucspi-tcp-0.88.tar.gz
http://cr.yp.to/daemontools/daemontools-0.76.tar.gz


apt-get install gcc csh -y

umask 022
mkdir -p /usr/local/src mv netqmail-1.06.tar.gz ucspi-tcp-0.88.tar.gz /usr/local/src mkdir -p /package mv daemontools-0.76.tar.gz /package chmod 1755 /package
cd /usr/local/src
gunzip netqmail-1.06.tar.gz
tar xpf netqmail-1.06.tar
gunzip ucspi-tcp-0.88.tar.gz
tar xpf ucspi-tcp-0.88.tar
rm *.tar # optional, unless space is very tight
cd /package
gunzip daemontools-0.76.tar.gz
tar xpf daemontools-0.76.tar
rm *.tar # optional, again</pre>

<!--more-->

<pre class="lang:sh decode:true ">mkdir /var/qmail
mkdir /etc/qmail
ln -s /etc/qmail /var/qmail/control



cd /usr/local/src/netqmail-1.06
cp INSTALL.ids IDS
like these:
groupadd nofiles
useradd -g nofiles -d /var/qmail/alias alias
useradd -g nofiles -d /var/qmail qmaild
useradd -g nofiles -d /var/qmail qmaill
useradd -g nofiles -d /var/qmail qmailp
groupadd qmail
useradd -g qmail -d /var/qmail qmailq
useradd -g qmail -d /var/qmail qmailr
useradd -g qmail -d /var/qmail qmails

/bin/sh IDS
cd /usr/local/src/netqmail-1.06
make setup check
./config-fast the.full.hostname
cd /usr/local/src/ucspi-tcp-0.88
patch &lt; /usr/local/src/netqmail-1.06/other-patches/ucspi-tcp-0.88.errno.patch
make
make setup check
cd /package/admin/daemontools-0.76

cd src
patch &lt; /usr/local/src/netqmail-1.06/other-patches/daemontools-0.76.errno.patch
cd ..
package/install

vim /var/qmail/rc

#!/bin/sh

# Using stdout for logging
# Using control/defaultdelivery from qmail-local to deliver messages by default

exec env - PATH="/var/qmail/bin:$PATH" \
qmail-start "`cat /var/qmail/control/defaultdelivery`"


chmod 755 /var/qmail/rc
mkdir /var/log/qmail
echo ./Mailbox &gt;/var/qmail/control/defaultdelivery

wget http://lifewithqmail.org/qmailctl-script-dt70
chmod 755 qmailctl-script-dt70
mv qmailctl-script-dt70 /var/qmail/bin/qmailctl
ln -s /var/qmail/bin/qmailctl /usr/bin
mkdir -p /var/qmail/supervise/qmail-send/log
mkdir -p /var/qmail/supervise/qmail-smtpd/log


vim /var/qmail/supervise/qmail-send/run
#!/bin/sh
exec /var/qmail/rc

vim /var/qmail/supervise/qmail-send/log/run
#!/bin/sh
exec /usr/local/bin/setuidgid qmaill /usr/local/bin/multilog t /var/log/qmail

vim /var/qmail/supervise/qmail-smtpd/run
#!/bin/sh

QMAILDUID=`id -u qmaild`
NOFILESGID=`id -g qmaild`
MAXSMTPD=`cat /var/qmail/control/concurrencyincoming`
LOCAL=`head -1 /var/qmail/control/me`

if [ -z "$QMAILDUID" -o -z "$NOFILESGID" -o -z "$MAXSMTPD" -o -z "$LOCAL" ]; then
    echo QMAILDUID, NOFILESGID, MAXSMTPD, or LOCAL is unset in
    echo /var/qmail/supervise/qmail-smtpd/run
    exit 1
fi

if [ ! -f /var/qmail/control/rcpthosts ]; then
    echo "No /var/qmail/control/rcpthosts!"
    echo "Refusing to start SMTP listener because it'll create an open relay"
    exit 1
fi

exec /usr/local/bin/softlimit -m 5000000 \
    /usr/local/bin/tcpserver -v -R -l "$LOCAL" -x /etc/tcp.smtp.cdb -c "$MAXSMTPD" \
        -u "$QMAILDUID" -g "$NOFILESGID" 0 25 /var/qmail/bin/qmail-smtpd 2&gt;&1


echo 20 &gt; /var/qmail/control/concurrencyincoming
chmod 644 /var/qmail/control/concurrencyincoming


vim /var/qmail/supervise/qmail-smtpd/log/run
#!/bin/sh
exec /usr/local/bin/setuidgid qmaill /usr/local/bin/multilog t /var/log/qmail/smtpd

chmod 755 /var/qmail/supervise/qmail-send/run
chmod 755 /var/qmail/supervise/qmail-send/log/run
chmod 755 /var/qmail/supervise/qmail-smtpd/run
chmod 755 /var/qmail/supervise/qmail-smtpd/log/run

mkdir -p /var/log/qmail/smtpd
chown qmaill /var/log/qmail /var/log/qmail/smtpd

ln -s /var/qmail/supervise/qmail-send /var/qmail/supervise/qmail-smtpd /service

qmailctl stop

echo '127.:allow,RELAYCLIENT=""' &gt;&gt;/etc/tcp.smtp
qmailctl cdb

service exim4 stop
update-rc.d exim4 remove
rm -f /usr/lib/sendmail
rm -f /usr/sbin/sendmail
ln -s /var/qmail/bin/sendmail /usr/lib/sendmail
ln -s /var/qmail/bin/sendmail /usr/sbin/sendmail


echo dave &gt; /var/qmail/alias/.qmail-root
echo dave &gt; /var/qmail/alias/.qmail-postmaster
ln -s .qmail-postmaster /var/qmail/alias/.qmail-mailer-daemon
ln -s .qmail-postmaster /var/qmail/alias/.qmail-abuse
chmod 644 /var/qmail/alias/.qmail-root /var/qmail/alias/.qmail-postmaster

qmailctl start</pre>

&nbsp;

&nbsp;

&nbsp;

错误信息：
  
tcpserver: fatal: unable to figure out port number for smtp /usr/local/bin/tcpserver: error while loading shared libraries: libc.so.6: failed to map segment from shared object

解决办法：
  
1. Open your qmail-smtpd/run file. Try changing the &#8220;softlimit&#8221; to something higher. Maybe add 1 or 2 megabytes. If you&#8217;re not sure how to do this, just post your file here.
  
2. If that doesn&#8217;t work, look for &#8220;smtp&#8221; in this file and change it to &#8220;25&#8221; instead.