##  IntelliJ Platform使用Cygwin的控制台作为Terminal

```bash
# 打开 `File->Setting->Tools->Terminal->Shell path`输入以下命令
# Cygwin
"C:\cygwin64\bin\sh" -lic "source ~/.bash_profile; cd ${OLDPWD-.}; bash"
# Linux子系统
"C:\Windows\System32\wsl.exe"
```