## Linux chown using UID and GID

```shell
#chown UID:GID fileName can be done either with numbers or username or groupname

#ex: chown 1000:1000 dirname is valid

#you may have to reset the directory permission with chmod 755 for example after doing it to get access on it

#Hints
#You can check user id with id someUsername
#You can check group id with gid someUsername
#You can change permissions only on directories with find someLocation -type d -exec chown 1000:1000 {} \;
```

