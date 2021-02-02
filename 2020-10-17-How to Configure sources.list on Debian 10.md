### How to Configure sources.list on Debian 10

- debian的包管理器是APT(高级包管理工具), 可以用来安装, 升级和删除应用和包.

- APT可以解析包的依赖和包资源库, 并通过dpkg来安装和升级软件包.
- APT有命令行工具, 也有GUI工具
- 文件/etc/apt/source.list包含一系列可以取得软件包的资源库.

```shell
$ cat /etc/apt/sources.list

deb http://httpredir.debian.org/debian buster main non-free contrib
deb-src http://httpredir.debian.org/debian buster main non-free contrib

deb http://security.debian.org/debian-security buster/updates main contrib non-free
deb-src http://security.debian.org/debian-security buster/updates main contrib non-free
```



| 标识           | 说明                                                         |      |
| -------------- | ------------------------------------------------------------ | ---- |
| deb, deb-src   | **deb** means the repository in the URL provided contains pre-compiled packages. These are the packages installed by default when using package managers like *apt-get*, *aptitude*, *synaptic*, etc...<br/>**deb-src** indicates source packages with Debian control file (*.dsc*) and the *diff.gz* containing the changes needed for packaging the program. |      |
| Repository URL | The next section on the entry line is an URL of the repository from where the packages will be downloaded from. You can find the main list of Debian repositories from *Debian Worldwide sources.list mirrors*. |      |
| Distribution   | The *distribution* can be either the release code name / alias (*jessie, stretch, buster, sid*) or the release class (*old stable, stable, testing, unstable*) respectively. If you intend to track a release class then use the class name, if you want to track a Debian point release, use the code name. |      |
| Component      | **main** - This contains packages that are part of Debian distribution. These packages are DFSG compliant. **contrib** -The packages here are DFSG compliant, but contains packages which are not in the main repository. **non-free** - This contains software packages which do not comply with the DFSG. |      |

```shell
$ sudo apt update
$ sudo apt upgrade -y
```

## Adding custom repositories

```
$ sudo vim /etc/apt/sources.list
```

Add the content:

```
deb [arch=amd64] https://download.docker.com/linux/debian buster stable
```

或者

```
add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/debian \
   $(lsb_release -cs) \
   stable"
```

## Importing apt keys

```shell
apt-key adv --keyserver [server-address] --recv-keys [key-id]
```

或者

```
$ curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
OK
```



