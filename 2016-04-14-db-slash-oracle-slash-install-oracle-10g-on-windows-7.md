---
layout: post
title: "db/oracle/install oracle 10g on Windows 7"
date: 2016-04-14 17:02:17 +0800
comments: true
categories: 
---

1.首先将下载好的oracle解压到指定文件，我下的是Oracle Database 10g Release 2 (10.2.0.1.0)这个版本的。

2.接下来就是要改文件了，首先右击setup.exe，选择属性——兼容性——更改所有用户设置——以兼容模式运行这个程序，并且

　　选择Windows XP（Service Pack 3），然后确定。这是为了更改oracle与win7兼容。

3.这点是最重要的，更改安装目录文件

第一点是修改在这个refhost.xml文件，在目录 10201_database_win32\database\stage\prereq\db\refhost.xml下。

在其中添加如下代码:

<OPERATING_SYSTEM>
<VERSION VALUE="6.1"/>
</OPERATING_SYSTEM>

第二点是修改

修改oraparam.ini文件
到install目录中找到oraparam.ini文件，添加如下内容：
[Certified Versions]
#You can customise error message shown for failure, provide value for CERTIFIED_VERSION_FAILURE_MESSAGE
#Windows=5.0,5.1,5.2,6.0,6.1 #这里前面部分内容有的，只添加6.1(win7 的版本号)

[Windows-6.1-required]
#Minimum display colours for OUI to run
MIN_DISPLAY_COLORS=256
#Minimum CPU speed required for OUI
#CPU=300
[Windows-6.1-optional]

修改好安装目录文件之后，基本上是大功告成了，但是还有一点就是，网络适配器，安装过oracle 10的人都知道，在安装过程中，要为其分配一个指定的IP地址，大家先不要急，接下来这步就是教大家怎么配置这个网络适配器。

解决方案：

1、按CTRL+R(或者"开始"-"运行")，输入hdwwiz.exe打开硬件添加界面。

2、选择手动添加(第二项)

3、选择"网络适配器"

4、左边选择"Microsoft"，右边选择"Loopback Adapter"，确定

5、打开网络连接那里的"更改适配器设置"，给新添加的假网卡"Microsoft Loopback Adapter"随便配置一个IP，我的配置的是192.168.0.123。


　　到了这里就基本可以成功的安装完成了，但是安装完成之后，发现一个问题，就是进入em的时候（web管理器 “http://soanl-pc:1158/em/”），会报空（java.lang.Exception: Exception in sending Request :: null）这是因为时区的问题，所以接下来我们就又要改文件了，大家跟着我的步骤来，找到你的oracle安装目录ORACLE_HOME\db_1\$HOSTNAME\sysman\config\emd.properties
（我的安装目录（F:\oracle\product\10.2.0\db_1\Soanl-PC_orcl\sysman\config）还有就是大家可能会找错这个文件，因为在db1下也有个sysman文件，记住是在db1下的那个你的主机名和你的oracle数据库名的那个文件，例如，我的计算机名是，Soanl-PC,数据库名是orcl，所以就是Soanl-PC_orcl这个文件下的sysman。）下的emd.properties文件，里面有一个缺省值：

其中的agentTZRegion缺省是GMT,改为你所在的时区即可,例如:
agentTZRegion=Asia/Shanghai

其中，关于时区的列表参考：10.2.0\db_1\sysman\admin\supportedtzs.lst
然后先停止 dbconsole 使时区设置生效并重启OracleDBConsole：
然后先停止dbconsole 在重启dbconsole ：

这个过程，在cmd中输入以下命令即可：
set ORACLE_SID=orcl
emctl stop dbconsole
emctl start dbconsole