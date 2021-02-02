### git学习

1. 取得git命令的帮助

```shell
git <verb> --help
``` 

```shell
git config --help
```

2. 检查git的版本号

```shell
git --version
```

3. 查看已有配置项

```shell
git config --list
```

4. 生成ssh认证公钥
```shell
ssh-keygen -t RSA
```

5. 修改某个配置项，例如修改默认的nano编辑器为sublime text3
```shell
sudo ln -s /Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl /usr/local/sublime
git config --add core.editor sublime
```

6. 新建一个资源库
```shell
mkdir project-directory
cd project-directory
git init
```

7. 通过git从服务器下载一个资源
先把第4步生成的公钥内容导入到git服务器的ssh免密配置中

```shell
git clone <repository-url.git>
```
如果不设置，只能通过https访问，每次访问都需要输入密码。


8. 查看当前的工作分支和所有分支
```shell
git branch
```
打印内容带“*”的就是当前工作分支。

9. 建立一个新的分支并在新分支上开发新的功能
```shell
git checkout -b new-branch-name
```

10. 为什么要建立新分支？

11. 将修改内容提交到当前分支
```shell
git add .
git commit -m "修改1:添加了新的接口内容；修改2:完成了接口开发和调试"

```

12. 合并新分支到开发的主分支
```shell
git checkout dev
git merge new-branch-name
```

13. 推送内容到服务器
```shell
push -u origin dev
```

14. 从资源库拉取最新代码
先提交本地代码，然后再进行拉取
```shell
pull origin dev
```

15. 从工作缓冲区删除文件，如何解决冲突？
如果你已经执行了git add操作，但是其他同事已经修改并提交了这个文件

1）情况一：你不想保留自己的修改
```shell
git reset HEAD <file-name>
git checkout -- <file-name>
```

2）情况二：你想要保留自己的修改
```shell
git checkout dev
git merge <your-branch>
```
这个时候可能会出现冲突。git无法合并的情况下，需要手动合并。

16. 恢复到之前的版本
```shell
git log
git reset --hard xxxxxxxxxxx
```

17. git最佳实践
1）除默认的master以外，创建多个主分支：dev/release
master分支：tag版本
dev分支：主开发版本
release分支：稳定版

2）修改文件或者新建文件之前，先查看当前工作分支，不容许在主分支上直接做新的开发内容
```shell
git branch
```

* 如果你已经在某个主分支上进行了开发，提交内容之前，需要新建分支，把修改切换到新分支。

* 新功能开发，比如：需要开发开票业务这个模块，先在本地新建一个分支，在本地开发完成后，先提交到这个分支

* bug修改，新建一个bug分支，然后在这个分支上进行修改，修改完成后提交。
```shell
git checkout -b bug-2018-02-06-1
git add .
git commit "修改了xxxbug"
```

* 提交的新分支，不要推送到远程仓库。先合并到dev分支，然后在gitlab发起“merge request”，由我来做代码review后进行到master

