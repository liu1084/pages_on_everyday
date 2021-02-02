### Downloading an Entire Web Site with wget

### 使用wget下载整个网站

```shell
nohup wget      \
--recursive     \
--page-requisites      \
--html-extension      \
--convert-links      \
--restrict-file-names=windows  \
--domains allitebooks.org \
--continue \
--level=0 \
--tries=5 \
http://www.allitebooks.org/ &
```



| Options               | Description                                 |
| --------------------- | ------------------------------------------- |
| --recursive           | 循环下载整个网站                            |
| --page-requisites     | 获取每个页面的所有元素,包括图片, css等      |
| --html-extension      | 保存文件为.html文件                         |
| --convert-links       | 转换连接, 以便在脱机情况下也正常访问        |
| --restrict-file-names | 修改下载的文件, 以便在windowsOS下也可以访问 |
| --domains             | 只下载链接到列出的域名的文件                |
| --continue            | 断点续传                                    |

