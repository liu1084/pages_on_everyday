##  Using Pip to install packages to Anaconda Environment

```shell
conda create -n env_name
conda activate env_name
conda install pip
pip config -v list
```

For variant 'global', will try loading 'C:\ProgramData\pip\pip.ini'
For variant 'user', will try loading 'C:\Users\Administrator\pip\pip.ini'
For variant 'user', will try loading 'C:\Users\Administrator\AppData\Roaming\pip\pip.ini'
For variant 'site', will try loading 'D:\Anaconda3\envs\3.10\pip.ini'
global.editor='D:\\Program Files\\Sublime Text 3\\sublime_text.exe'
global.index-url='http://sinoval:sinoval%402022@maven.cinaval.com:8081/repository/sinoval-pypi-group/simple'
global.timeout='60'
install.trusted-host='maven.cinaval.com'



vi C:\Users\Administrator\AppData\Roaming\pip\pip.ini

[global]
index-url = http://sinoval:sinoval%4020@maven.cinaval.com:8081/repository/sinoval-pypi-group/simple
timeout = 60
[install]
trusted-host = maven.cinaval.com



```shell
pip install -U tensorflow

```

```undefined
pip install -Iv MySQL_python==1.2.2
```

