How to disable network checking on google Nexus 7

1. Download files
- download android SDK(android SDK download link)[https://dl.google.com/android/installer_r22.0.5-windows.exe]
- download CWM Recovery(CWM download link)[http://download2.clockworkmod.com/recoveries/recovery-clockwork-touch-6.0.4.4-deb.img]
- download TRWP latest(download link)[https://dl.twrp.me/grouper/twrp-3.3.1-0-grouper.img]
- download SUPERSU(download link)[https://download.chainfire.eu/351/SuperSU/UPDATE-SuperSU-v1.65.zip?retrieve_file=1]

2. disable network checking
- boot nexus 7 (同时按下开机键+音量向下键)，进入bootloader
- enter "android-sdk\platform-tools", and execute
```shell
# fastboot flash recovery recovery-clockwork-touch-6.0.4.4-deb.img
sending 'recovery' (9110 KB)...
OKAY [  0.293s]
writing 'recovery'...
OKAY [  0.349s]
finished. total time: 0.649s

# fastboot reboot-bootloader
rebooting into bootloader...
OKAY [  0.006s]
finished. total time: 0.008s

#fastboot boot recovery-clockwork-touch-6.0.4.4-deb.img
downloading 'boot.img'...
OKAY [  0.293s]
booting...
OKAY [  0.031s]
finished. total time: 0.328s
```

- enter CWM, wipe data & cache & mount /system
```shell
adb shell
~ # echo "ro.setupwizard.mode=DISABLED" >> /system/build.prop
echo "ro.setupwizard.mode=DISABLED" >> /system/build.prop
~ # exit
exit

```

- root nexus 7
```shell
adb sideload SuperSU-v1.65.zip
```

- reboot nexus 7 & enter setting
进入“设置” > “关于平板电脑” > 连续点击“版本号”7次

