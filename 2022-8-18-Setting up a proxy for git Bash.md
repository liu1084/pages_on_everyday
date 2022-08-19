## Setting up a proxy for Linux/Git Bash

 

1.  ## 蓝灯局域网共享


Debian OS 使用windows的代理上网

-   下载 Charels 4 [下载链接](https://www.charlesproxy.com/assets/release/4.6.2/charles-proxy-4.6.2-win64.msi?k=241730e9c7)
-   获取验证码：[链接](https://www.zzzmode.com/mytools/charles/)
-   配置

![image-20220819120934827](imgs/image-20220819120934827.png)

![image-20220819120957346](imgs/image-20220819120957346.png)



-   在linux下设置proxy

```shell
export https_proxy=https://192.168.10.2:8119
export http_proxy=http://192.168.10.2:8119
```



-   设置git的代理



open`git bash`, and enter 

```shell
git config --global http.proxy "http://127.0.0.1:1080"
git config --global https.proxy "https://127.0.0.1:1080"
```





# Configure Git to use a proxy

## In Brief

You may need to configure a proxy server if you're having trouble cloning or fetching from a remote repository or getting an error like `unable to access '...' Couldn't resolve host '...'`.

Consider something like:

```
git config --global http.proxy http://proxyUsername:proxyPassword@proxy.server.com:port
```

Or for a specific domain, something like:

```
git config --global http.https://domain.com.proxy http://proxyUsername:proxyPassword@proxy.server.com:port
git config --global http.https://domain.com.sslVerify false
```

Setting `http..sslVerify` to `false` may help you quickly get going if your workplace employs man-in-the-middle HTTPS proxying. Longer term, you could get the root CA that they are applying to the certificate chain and specify it with either `http.sslCAInfo` or `http.sslCAPath`.

See also the [git-config](https://git-scm.com/docs/git-config) documentation, especially the following sections if you're having HTTPS/SSL issues

-   `http.sslVerify`
-   `http.sslCAInfo`
-   `http.sslCAPath`
-   `http.sslCert`
-   `http.sslKey`
-   `http.sslCertPasswordProtected`

## In Detail

### Configure the proxy

You can configure these globally in your user `~/.gitconfig` file using the `--global` switch, or local to a repository in its `.git/config` file.

#### Setting a global proxy

Configure a global proxy if all access to all repos require this proxy

```
git config --global http.proxy http://proxyUsername:proxyPassword@proxy.server.com:port
```

#### URL specific proxy

If you wish to specify that a proxy should be used for just some URLs that specify the URL as a git config subsection using `http..key` notation:

```
git config --global http.https://domain.com.proxy http://proxyUsername:proxyPassword@proxy.server.com:port
```

Which will result in the following in the `~/.gitconfig` file:

```
[http]
[http "https://domain.com"]
	proxy = http://proxyUsername:proxyPassword@proxy.server.com:port
```

#### Handle subsequent SSL protocol errors

If you're still having trouble cloning or fetching and are now getting an `unable to access 'https://...': Unknown SSL protocol error in connection to ...:443` then you may decide to switch off SSL verification for the single operation by using the `-c http.sslVerify=false` option

```
git -c http.sslVerify=false clone https://domain.com/path/to/git
```

Once cloned, you may decide set this for just this cloned repository's `.git/config` by doing. Notice the absence of the `--global`

```
git config http.sslVerify false
```

If you choose to make it global then limit it to a URL using the `http..sslVerify` notation:

```
git config --global http.https://domain.com.sslVerify false
```

Which will result in the following in the `~/.gitconfig` file:

```
[http]
[http "https://domain.com"]
	proxy = http://proxyUsername:proxyPassword@proxy.server.com:port
	sslVerify = false
```

### Show current configuration

To show the current configuration of all `http` sections

```
git config --global --get-regexp http.*
```

If you are in a locally cloned repository folder then you drop the `--global` and see all current config:

```
git config --get-regexp http.*
```

### Unset a proxy or SSL verification

Use the `--unset` flag to remove configuration being specific about the property -- for example whether it was `http.proxy` or `http..proxy`. Consider using any of the following:

```
git config --global --unset http.proxy
git config --global --unset http.https://domain.com.proxy

git config --global --unset http.sslVerify
git config --global --unset http.https://domain.com.sslVerify
```



[参考]

[proxy](https://developpaper.com/setting-up-a-proxy-for-git-bash/#:~:text=Setting%20up%20a%20proxy%20for%20git%20Bash%201,can%20get%20it%20from%20https%3A%2F%2Fipaddress.com%2F%204%20Reference%20material)

[共享](http://www.kimq.cn/2017/06/22/lantern-share/)

