使用telnet发送Email
由于前一段时间的Email的接触，现在看到SMTP和pop3就想看看，今天看到久久网络上有关于《妙用Telnet快速收发电子邮件》，自己引用一下，然后加上自己的一点东西再丰富一下，让想使用telnet发送邮件的人得到更好的帮助。
与发邮件相同，在发送邮件之前，我们必须先同一个smtp服务器建立连接，还是以我们保定供水的邮件服务器（mail.bdwater.com）为例说一下，使用telnet 嘛，所以首先打开一个“命令提示符”窗口（以winxp为例）：

Step1:     telnet mail.bdwater.com 25
说明：telnet是远程连接工具，windows自带；mail.bdwater.com是邮件服务器，这里是SMTP服务器；25是SMTP所使用的端口号。
如果该请求(命令)成功接受，远程smtp服务器就会响应如下信息： 
220 bdwater.com ESMTP MDaemon 7.1.2; Tue, 10 Aug 2004 16:59:55 +0800

Step2:    helo　xia.bdgs.com
说明：helo是客户为了标识发信人的命令；xia.bdgs.com是客户主机的域名。
如果该请求(命令)成功接受，远程smtp服务器就会响应如下信息： 
250 bdwater.com Hello xia.bdgs.com, pleased to meet you

Step3:     mail from: test1@bdwater.com
说明：mail from:写发件人地址的命令。
如果该请求成功接受，远程smtp服务器就会响应如下信息： 
250<test1@bdwater.com> , sender ok. 

Step3:     rcpt to: test@.bdwater.com
说明：rcpt to:写收件人地址的命令。
如果该请求成功接受，远程smtp服务器就会响应如下信息： 
250<test2@bdwater.com> , Local recipient ok. 

Step4:     data 
说明：data写信息内容的命令。
如果该请求成功接受，远程smtp服务器就会响应如下信息： 
354 Enter mail, end with <CRLF>.<CRLF>
 
Step5:     from:test1<test1@bdwater.com>
to:test2
date:10/10/2004
subject:This is a test mail
 
Dear test2, this is a test mail.
.
说明：from:是发信人的标志；to:是收信人的标志；date：发信日期；subject:信的主题；然后留一行空格，写信的内容；结束时先按回车<CRLF>，输入”.”,再按回车<CRLF>，就ok了。
如果该请求成功接受，远程smtp服务器就会响应如下信息： 
.250 Ok, message saved <Message-ID: >
最后，现在这样还是很简单了，因为没有涉及认证，还有抄送，没有附件，这只是让大家明白原理，编程的时候方便了，可以找点具体的代码实例看一下，呵呵。
完整操作一遍如下：
 
Microsoft Windows XP [版本 5.1.2600]
(C) 版权所有 1985-2001 Microsoft Corp.
 
C:\Documents and Settings\xiahaitao.BDGS>telnet mail.bdwater.com 25
 
220 bdwater.com ESMTP MDaemon 7.1.2; Wed, 11 Aug 2004 07:40:51 +0800
helo xia.bdwater.com
250 bdwater.com Hello xia.bdwater.com, pleased to meet you
mail from:test1@bdwater.com
250 <test1@bdwater.com>, Sender ok
rcpt to:test2@bdwater.com
250 <test2@bdwater.com>, Recipient ok
data
354 Enter mail, end with <CRLF>.<CRLF>
from:xia<test1@bdwater.com>
to:test2
date:11/08/2004
subject:This is a test mail
 
Dear test2, this is a test mail.
.
250 Ok, message saved <Message-ID: >
quit
221 See ya in cyberspace
 
 
失去了跟主机的连接。
 
C:\Documents and Settings\xiahaitao.BDGS>