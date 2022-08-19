## env: bash\r: No such file or directory



 The error message suggests that **the script you're invoking has embedded `\r` characters**, which in turn suggests that it has **Windows-style `\r\n` line endings** instead of the `\n`-only line endings `bash` expects. 

 For MAC: 

```bash
brew install dos2unix # Installs dos2unix Mac
find . -type f -exec dos2unix {} \; # recursively removes windows related stuff
```

For Linux:

```bash
sudo apt-get install -y dos2unix # Installs dos2unix Linux
sudo find . -type f -exec dos2unix {} \; # recursively removes windows related stuff
```

And make sure your git config is set as follows:

```bash
git config --global core.autocrlf input
```

`input` makes sure to convert CRLF to LF when writing to the object database

