## Linux 安装Conada



使用者開發Python專案時，最常遇見的問題就是不同專案可能會有不同的Python版本以及不同的package需要安裝，那麼在管理上就會是一個問題了。如果你只需要使用特定的套件，或是想要嘗試各種不同的環境應用，但又不想彼此的開發環境受到影響，那Anaconda的套件管理系統conda將會是一個不錯的解決方案。

conda命令是管理在安裝不同package時的主要介面，使用conda時，你可以進行**建立(create)**、**輸出(export)**、**列表(list)**、**移除(remove)**和**更新(update)**環境於不同Python版本及Packages，同時也可以分享你的虛擬環境。接下來筆者將針對conda如何建立及管理虛擬環境用下列5步驟來說明。

![img](Z:%5Cgithub%5Cpages_on_everyday%5Cimgs%5C0_zypZHL4p7IU-hhDI-1684307505999.png)

# Step 1:安裝及更新conda

安裝部分可參考筆者[***Anaconda 3介紹及安裝教學\***](https://simplelearn.tw/anaconda-3-intro-and-installation-guide/)或[***官方說明\***](https://docs.anaconda.com/anaconda/install/)，同時確認作業系統及你所需的python版本。在Windows開始選單(Start menu)中選擇Anaconda Prompt(如下圖所示)：

![img](Z:%5Cgithub%5Cpages_on_everyday%5Cimgs%5C0_0LdsxVFfRMfiGW-2-1684307506006.png)

此時可以輸入下列命令來檢查目前版本。

```
conda –V
```

![img](Z:%5Cgithub%5Cpages_on_everyday%5Cimgs%5C0_rpmy1hgf0abWEMGC-1684307506012.png)

若想要進行更新，可以輸入下列命令

```
conda update conda
```

# Step 2:建立虛擬環境

你可以輸入下面命令看目前系統已經安裝幾個虛擬環境。

```
conda env list
```

![img](Z:%5Cgithub%5Cpages_on_everyday%5Cimgs%5C0_25jcWfwcU1jEXz9D-1684307506019.png)

假設我們要建立一個叫做myenv的虛擬環境，並且是安裝python 3.5的版本，那我們可以鍵入下面的命令。

```
conda create --name myenv python=3.5
```

![img](Z:%5Cgithub%5Cpages_on_everyday%5Cimgs%5C0_ZTVGscgOVMlMr7Lu-1684307506031.png)

安裝完後會出現如下圖所示，提醒啟動與關閉虛擬環境的用法。

![img](Z:%5Cgithub%5Cpages_on_everyday%5Cimgs%5C0_K7wST3PjAG08rP4B-1684307506040.png)

我們試著再下命令conda env list，列出目前虛擬環境狀況，將會看到多了一個剛建立的虛擬環境myenv。

![img](Z:%5Cgithub%5Cpages_on_everyday%5Cimgs%5C0_T8v-iODrOqMYn5Tf-1684307506043.png)

# Step 3:啟動虛擬環境

啟動一個新的虛擬環境可以利用下面命令。

```
activate myenv
```

![img](Z:%5Cgithub%5Cpages_on_everyday%5Cimgs%5C0_iddAoA3fd9xM3gSZ-1684307506055.png)

這時候cmd模式下前面會有一個(myenv)，表示你目前是處於此虛擬環境中，這時候你就可以在此虛擬環境中，開始安裝你所需要的各種package。

如果你是LINUX或macOS，那你所需輸入啟動的方式將會是

```
source activate myenv
```

你可以利用下面命令來查看，目前此虛擬環境中已經先安裝了那些東西。

conda list

![img](Z:%5Cgithub%5Cpages_on_everyday%5Cimgs%5C0_ItzUCeDLXYIfkV8T-1684307506057.png)

你也可以進入Anaconda Navigator看到你目前環境及所對應的安裝項目，與Anaconda Prompt底下所看到的是一樣的。

![img](Z:%5Cgithub%5Cpages_on_everyday%5Cimgs%5C0_fokygD4nV2tVzjaT-1684307506060.png)

如果要在此虛擬環境下安裝所需套件，例如numpy那只需要輸入下令命令即可。

```
conda install numpy
```

![img](Z:%5Cgithub%5Cpages_on_everyday%5Cimgs%5C0_yV5fhMctJMFHw6LU-1684307506077.png)

# Step 4:離開虛擬環境

若要關閉虛擬環境，在windows中可使用下列命令

```
deactivate
```

![img](Z:%5Cgithub%5Cpages_on_everyday%5Cimgs%5C0_d4ABWQyOJfkzEVW5-1684307506079.png)

而在macOS或LINUX則可以使用

```
source deactivate
```

# Step 5:刪除虛擬環境或package

若要刪除虛擬環境中某個package(例如在剛剛建立的虛擬環境myenv中的numpy)，那可以輸入下面命令

```
conda remove --name myenv numpy
```

![img](Z:%5Cgithub%5Cpages_on_everyday%5Cimgs%5C0_F9ufJXKuGmC4aOta-1684307506089.png)

如果是要刪除整個虛擬環境，則可輸入下面命令即可完成刪除

```
conda env remove --name myenv
```

![img](Z:%5Cgithub%5Cpages_on_everyday%5Cimgs%5C0_nuGouZz_HtNZlYWE-1684307506098.png)

# 結語

為每一個不同需求的專案建立一個獨立適合的虛擬環境是一個很好的習慣，因為它並不會去影響其他的系統配置而產生不預期問題。若在配置上產生了問題只要輕易的移除某個package或是虛擬環境再重新建構它即可，希望這篇文章能幫助您如何利用conda來建立及管理好您的虛擬環境，好好享受接下來有趣的[***python之旅\***](https://simplelearn.tw/python-for-beginners/)吧！