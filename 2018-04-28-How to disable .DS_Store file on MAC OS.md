### How to disable .DS_Store file on MAC OS

open your shell console:
```shell
sudo find / -type f -name ".DS_Store" | xargs rm -rf {} \;
defaults write com.apple.desktopservices DSDontWriteNetworkStores true
```