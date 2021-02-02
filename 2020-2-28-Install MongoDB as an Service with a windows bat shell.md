### Install MongoDB as an Service with a windows bat shell

```pow
@echo off 

echo Installing MongoDB as an Service 
d:/xampp/mongodb4/bin/mongod.exe --config d:/xampp/mongodb4/conf/mongodb.conf --install
echo Try to start the MongoDB deamon as service ... 
net start MongoDB

:exit 
pause
```

