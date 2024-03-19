## ssh: connect to host github.com port 22: Connection timed out

Cloning into 'openopc2'...
ssh: connect to host github.com port 22: Connection timed out
fatal: Could not read from remote repository.





inside the .ssh folder Create "config" file

```shell
Host github.com
User git
Hostname ssh.github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa
Port 443

Host gitlab.com
Hostname altssh.gitlab.com
User git
Port 443
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa
```

