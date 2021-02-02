### 为Linux的Terminal(Console)添加配色方案

-   **下载配色方案**

```shell
mkdir ~/solarized

cd ~/solarized
git clone --depth 1 git://github.com/seebi/dircolors-solarized.git
```

-   **选择配色方案**

```shell
eval `dircolors ~/solarized/dircolors-solarized/dircolors.ansi-light`
```



-   **生效**

```shell
vi ~/.bashrc

## add eval `dircolors ~/solarized/dircolors-solarized/dircolors.ansi-light`
## 保存
```

