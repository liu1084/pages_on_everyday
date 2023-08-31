## Using Tar Command To Extract Tar Files To a Different Directory



>   https://www.cyberciti.biz/faq/howto-extract-tar-file-to-specific-directory-on-unixlinux/

 Typical Unix tar syntax:
`$ tar -xf file.name.tar -C /path/to/directory`
GNU/tar Linux syntax:
`$ tar xf file.tar -C /path/to/directory`
OR use the following to extract tar files to a different directory:
`$ tar xf file.tar --directory /path/to/directory`
Extract .tar.gz archive:
`$ tar -zxf file.tar --directory /path/to/directory`
Want to extract .tar.bz2/.tar.zx archive? Try:
`$ tar -jxf file.tar --directory /path/to/directory` 

```shell
tar xf archive.tar -C /target/directory --strip-components=1
```



其中：

![image-20230825145841811](Z:%5Cgithub%5Cpages_on_everyday%5Cimgs%5Cimage-20230825145841811.png)