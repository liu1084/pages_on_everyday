
## Linux | Mac OS 设置终端提示符

vi ~/.bash_profile
export PS1="\d \t| \w @ \h (\u)"

其中，转义符表示的含义如下：

<!-- MarkdownTOC -->

<!-- /MarkdownTOC -->

\d ：代表日期，格式为weekday month date，例如："Mon Aug 1"
\H ：完整的主机名称
\h ：仅取主机的第一个名字
\t ：显示时间为24小时格式，如：HH:MM:SS
\T ：显示时间为12小时格式
\A ：显示时间为24小时格式：HH:MM
\u ：当前用户的账号名称
\v ：BASH的版本信息
\w ：完整的工作目录名称。家目录会以 ~代替
\W ：利用basename取得工作目录名称，所以只会列出最后一个目录
\# ：下达的第几个命令
\$ ：提示字符，如果是root时，提示符为：# ，普通用户则为：$