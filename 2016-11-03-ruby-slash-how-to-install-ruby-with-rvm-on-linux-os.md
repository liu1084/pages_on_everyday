---
layout: post
title: "ruby/How to install ruby with RVM on Linux OS?"
date: 2016-11-03 16:25:41 +0800
comments: true
categories: 
---

* install dependencies packages

```shell
sudo apt-get install libcurl4-openssl-dev libxml2 libxml2-dev libxslt1-dev ruby-dev build-essential libgmp-dev zlib1g-dev
```

* install RVM, install ruby with RVM and install gem packages with bundle

```shell
cd ~
curl -sSL https://rvm.io/mpapis.asc | gpg --import -
curl -sSL https://get.rvm.io | bash -s stable
source ~/.rvm/scripts/rvm
echo "source ~/.rvm/scripts/rvm" >> ~/.bashrc
rvm install 2.3.1
rvm use 2.3.1 --default
echo "gem: --no-ri --no-rdoc" > ~/.gemrc
gem install bundler
git clone https://github.com/wpscanteam/wpscan.git
cd wpscan
gem install bundler
bundle install --without test
```
