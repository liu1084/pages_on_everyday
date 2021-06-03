## Linux下挂载Mount磁盘

-   将磁盘接上电源和数据线
-   分区

fdisk /dev/sdb

n -> 填写扇区大小->w

-   格式化

```shell
mkfs.ext4 /dev/sdb1
```



-   写入/etc/fstab

```shell
# 查看UUID
lsblk -lf
NAME FSTYPE LABEL UUID                                 FSAVAIL FSUSE% MOUNTPOINT
sda                                                                   
sda1 vfat         DE93-7743                             505.9M     1% /boot/efi
sda2 ext4         2b2aa97f-d858-4166-b0ee-2a595aac663b  205.2G     1% /
sda3 swap         9fa4cfa2-0672-478d-8845-16ff515ed6ca                [SWAP]
sdb                                                                   
sdb1 ext4         8f9993a3-89f2-4e49-aaba-8719af369bf9  869.2G     0% /data

# 创建挂载点
mkdir /data

# 写入fstab
vi /etc/fstab
UUID=8f9993a3-89f2-4e49-aaba-8719af369bf9 /data           ext4    defaults        0       0
```

