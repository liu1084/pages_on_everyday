### daemontools安装报错： 
usr/bin/ld: errno: TLS definition in /lib64/libc.so.6 section .tbss mismatches non-TLS reference in envdir.o 


编辑src/conf-cc, 加gcc加上-include /usr/include/errno.h 使用标准错误则可。