## Jira,Confluence set JAVA_OPTS



-   定位到jira的安装目录
-   在bin下找到catalina.bat文件
-   点右键选择“编辑”
-   在里面添加

```shell
set "JAVA_OPTS=%JAVA_OPTS%  -javaagent:替换成你的实际目录\atlassian-agent.jar"
```

-   保存，重启jira。
-   confluence与jira类似。