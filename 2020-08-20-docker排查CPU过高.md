- 查看docker的cpu占用率：docker stats
- 进入cpu占用高的docker容器：docker exec -it 容器编号 /bin/bash
- 查看容器中具体进程cpu占用率，执行top，（如top命令无法使用，执行：export TERM=dumb ，然后在执行：top）
- 查看进程中线程cpu占用率：top -H -p 进程号
- 将异常线程号转化为16进制： printf "%x\n" 线程号
- 查看线程异常的日志信息：jstack 进程号|grep 16进制异常线程号 -A90