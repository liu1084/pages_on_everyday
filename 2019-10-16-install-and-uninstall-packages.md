## using apt-get

- install a package
```shell
sudo apt-get update
sudo apt-get install cron
```
- uninstall a package
```shell
sodu apt-get remove cron
```
如果想删除cron以及它的依赖包

```shell
sodu apt-get remove --auto-remove cron
```
如果想删除所有的配置文件

```shell
sudo apt-get purge --auto-remove cron
```
## using source code
```shell
sudo wget https://cache.ruby-lang.org/pub/ruby/2.6/ruby-2.6.5.tar.gz
apt-get install build-essential openssl libreadline6 libreadline6-dev curl git-core zlib1g zlib1g-dev libssl-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt-dev autoconf libc6-dev ncurses-dev automake libtool bison nodejs subversion
tar xvfz ruby-2.6.5.tar.gz
cd ruby-2.6.5
./configure --prefix=/usr/loca/ruby-2.6.5 && make && make install

```


## using deb package

```shell
wget http://repo.mysql.com/mysql-apt-config_0.8.13-1_all.deb
sodu dpkg -i mysql-apt-config_0.8.13-1_all.deb
sudo dpkg-reconfigure mysql-apt-config
```