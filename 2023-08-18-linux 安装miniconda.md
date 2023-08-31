## linux 安装miniconda

```shell
# create a directory to install minicaonda in
mkdir -p ~/miniconda3

# download latest miniconda version
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh

# run the install script
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3

# delete the intall script
rm -rf ~/miniconda3/miniconda.sh

# add a conda initialize to your bash
~/miniconda3/bin/conda init bash

# Verify the installaton 
conda list
```

