## How to rename the master to main  in git



```shell
git config --global init.defaultBranch main
git branch -M main
git push origin --delete master
git push -u -ff origin main
```

