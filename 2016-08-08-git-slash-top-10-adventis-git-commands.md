---
layout: post
title: "git/top-10 adventis git commands"
date: 2016-08-08 16:24:35 +0800
comments: true
categories: 
---

10个高级实用的Git命令
摘要：我一直在使用git的相当长的一段时间，现在想分享一些高级的git命令，你会发现无论你是在团队环境中工作，或在您的个人项目中这些都是很有用。

我一直在使用git的相当长的一段时间，现在想分享一些高级的git命令，你会发现无论你是在团队环境中工作，或在您的个人项目中这些都是很有用。

1. Export changes done in last commit 导出最后一次提交的变更文件

This command i have been using regularly for sending the changes done to another person for review/integration who is not on git. It will export the recent committed changed files to a zip file.

```shell
git archive -o ../updated.zip HEAD $(git diff --name-only HEAD^)
```

2. Export changed files between two commits 导出任意两次变更之间的文件

Similarly if you need to export changed files between two commits, you can use this one.

```shell
git archive -o ../latest.zip NEW_COMMIT_ID_HERE $(git diff --name-only OLD_COMMIT_ID_HERE NEW_COMMIT_ID_HERE) 
```

3. Clone a specific remote branch 克隆指定的远程分支

If you wish to clone only specific branch from a remote repository without having to clone whole of the repository branches, this will be useful to you.

```shell
git init
git remote add -t BRANCH_NAME_HERE -f origin REMOTE_REPO_URL_PATH_HERE
git checkout BRANCH_NAME_HERE
```

4. Apply patch from Unrelated local repository

If you need to apply a patch from a commit on some other unrelated local repository to your current repository, here is a shortcut way to do that

```shell
git --git-dir=PATH_TO_OTHER_REPOSITORY_HERE/.git format-patch -k -1 --stdout COMMIT_HASH_ID_HERE| git am -3 -k
```

5. Check if your Branch changes are part of Other branch

cherry command lets you check whether your branch’s changes are present in some other branch or not. It will display the changes on current branch to given branch and indicate with a + or – sign to indicate if that commit is merged or not. + indicated not present while – indicates present in the given branch. Here is how to do that:

#For example: to check with master branch
```shell
git cherry -v master
```

6. Start a new Branch with No History

Sometimes you need to start a new branch and do no want to carry the long history along, for example, you want to place the code in public domain(open source) but do no want to share the history.

```shell
git checkout --orphan NEW_BRANCH_NAME_HERE
```
7. Checkout File from Other Branch without Switching Branches

Here is how to fetch just that file you need from other branch without even have to switch branches.

```shell
git checkout BRANCH_NAME_HERE -- PATH_TO_FILE_IN_BRANCH_HERE
```
8. Ignore Changes in a Tracked File

If you are working in a team and all of them are working on same branch, chances are you are going to use fetch/merge quite often. but this sometimes resets your environment specific config files which you have to change every time after merge. Using this command, you can ask git to ignore the changes to specific file. So next time you do merge, this file won’t be changed on your system.

```shell
git update-index --assume-unchanged PATH_TO_FILE_HERE
```

9. Check if committed changes are part of a release

The name-rev command can tell you the position of a committ with respect to a last release. Using this you can check if your changes were part of the release or not.

```shell
git name-rev --name-only COMMIT_HASH_HERE
```

10. Pull with rebase instead of merge

If you are working in a team which is working on same branch, then you have to do fetch/merge or pull quite often. Branch merges in git are recorded with merge commit to indicate when a feature branch was merged with mainstream. But in the scenario of multiple team members working on same branch, the regular merge causes multiple merge messages in the log causing confusion. So you can use rebase with pull to keep the history clear of useless merge messages.

```shell
git pull --rebase
```

Also, you can configure a particular branche to always rebasing:

```shell
git config branch.BRANCH_NAME_HERE.rebase true
```