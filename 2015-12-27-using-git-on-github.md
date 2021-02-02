---
id: 53
title: Using git on github
date: 2015-12-27T00:50:34+00:00
author: liu1084
layout: post
guid: http://www.83096146.com/blog/?p=53
permalink: /?p=53
categories:
  - git
tags:
  - git
  - github
---
  1. 首先在<a class="external-link" href="https://github.com/" rel="nofollow">github.com</a>上建一个帐号，例如：
  
    帐号：myGitName
  
    Email：myGitName@gmail.com
  2. 安装git，windows用户安装<a class="external-link" href="http://msysgit.github.io/" rel="nofollow">msysgit</a>
  
    <span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img class="confluence-embedded-image confluence-external-resource" src="http://msysgit.github.io/img/details_contribute.png" alt="msysGit Logo" width="100" data-image-src="http://msysgit.github.io/img/details_contribute.png" /></span>
  3. 设置用户的用户名和email，这里的用户名和email应该跟第一步建立的github.com帐号、email一致
  
    git config user.name &#8211;global
  
    git config user.email &#8211;global
  4. 在本地生成公钥，设置SSH keys并加入github中以便进行认证
  
    打开git bash终端，输入：
  
    ssh-keygen -C &#8220;myGitName@gmail.com&#8221; -t rsa
  
    cat /c/Users/Administrator/.ssh/id_rsa.pub
  
    ssh-keygen默认会添加一个git帐号。
  
    将输出的内容复制并粘贴在github.com的SSH Key中。测试公钥配置是否成功。
  
    ssh &#8211;<a class="external-link" href="mailto:T%C2%A0git@github.com" rel="nofollow">T git@github.com</a>
  
    输出：
  
    Hi myGitName! You&#8217;ve successfully authenticated, but GitHub does not provide shell
  
    access.表示公钥配置成功。
  5. 在github上创建一个新的仓库，并加入版权信息和README.md文件，默认的分支名称是master
  6. 在本地初始化，并将刚刚创建的仓库拉到本地进行编辑修改
  
    git init
  
    git add somefolder
  
    git commit -c &#8220;My first commit&#8221;
  7. 添加新的文件，提交到本地仓库
  
    git add somefiles
  
    git commit -m &#8220;commit&#8221;
  
    git push -a
  8. 将本地分支合并到github.com master分支
  
    git merge test