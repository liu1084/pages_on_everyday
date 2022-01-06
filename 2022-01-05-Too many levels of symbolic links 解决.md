## Too many levels of symbolic links 解决

 生成软连接后打开报错Too many levels of symbol links，原因在于生成软连接是没有写完整的路径，所以只要写绝对路径就行了
 
 ```shell
 ln -s 源绝对路径 目标路径
 ```