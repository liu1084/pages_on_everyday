---
title: npm vs yarn
slug: different between npm and yarn
date: July 11, 2020
category: language
---

- npm 和 yarn都是js工程的包管理器，跟java工程的maven和gradle。

如果工程里面包含package.json，你既可以使用yarn也可以使用npm install来安装依赖包。
两者达到的目的都是讲依赖包安装到本地的node_modules目录里面。

不同：
-  运行yarn的时候，会在package.json平级的目录里生成yarn.lock文件。你不需要读懂或者理解这个lock文件，只需要知道，当您提交代码的时候也请将此文件提交，这样就可以确保其他人下载源代码以后，安装相同的依赖包。

- 在绝大多数情况下， 您运行yarn或者yarn add就足够了。如果不凑效，可以尝试`yarn import`导入package-lock.json再次重试。



| npm                                | yarn                      |
| ---------------------------------- | ------------------------- |
| rm -rf node_modules && npm install | yarn upgrade              |
| npm install [package] -g           | yarn global add [package] |
|                                    |                           |



[https://shift.infinite.red/npm-vs-yarn-cheat-sheet-8755b092e5cc#.jrv49nvy1]: 

