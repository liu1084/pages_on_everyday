## install mongoDB on windowsOS



### step 1 download [mongoDB](https://fastdl.mongodb.org/win32/mongodb-win32-x86_64-2012plus-4.2.1.zip)



### step 2 unzip package && create config file

```shell
 mkdir -p logs
 mkdir -p data/dbs
 mkdir -p conf
 touch conf/mongodb.conf
```



### add configure to mongodb.conf

```yaml
net:
    # MongoDB server listening port
    port: 27017
    bindIp: 127.0.0.1
storage:
    # Data store directory
    dbPath: "D:\\xampp\\mongodb4\\data\\dbs"
    journal:
        enabled: true
systemLog:
    # Write logs to log file
    destination: file
    path: "D:\\xampp\\mongodb4\\logs\\mongodb.log"
    quiet: true
    logAppend: true
```

### step 3 start mongod

```shell
bin/mongod.exe -f conf/mongodb.conf &
```



### Show config

```shell
> use admin
switched to db admin
> db.runCommand({getCmdLineOpts: 1})
{
        "argv" : [
                "D:\\xampp\\mongodb4\\bin\\mongod.exe",
                "--config",
                "d:/xampp/mongodb4/conf/mongodb.conf",
                "--service"
        ],
        "parsed" : {
                "config" : "d:/xampp/mongodb4/conf/mongodb.conf",
                "net" : {
                        "bindIp" : "127.0.0.1",
                        "port" : 27017
                },
                "service" : true,
                "storage" : {
                        "dbPath" : "D:\\xampp\\mongodb4\\data\\dbs",
                        "journal" : {
                                "enabled" : true
                        }
                },
                "systemLog" : {
                        "destination" : "file",
                        "logAppend" : true,
                        "path" : "D:\\xampp\\mongodb4\\logs\\mongodb.log",
                        "quiet" : true
                }
        },
        "ok" : 1
}
>
```

