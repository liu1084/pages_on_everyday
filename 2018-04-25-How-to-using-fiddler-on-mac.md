## How to using fiddler on mac

1. install mono.mdk on mac

```shell
brew cast install mono-mdk
```

2. import cert to by mozroots

```shell
/Library/Frameworks/Mono.framework/Versions/5.10.1/bin/mozroots --import --sync
```


3. download fidder-mac

[download link](https://telerik-fiddler.s3.amazonaws.com/fiddler/fiddler-mac.zip)

4. extract zip and start Fiddler.exe by mono

```shell
/Library/Frameworks/Mono.framework/Versions/5.10.1/bin/mono --arch=32 ~/Desktop/fiddler-mac/Fiddler.exe
```
and waiting for a moment, enjoy it~!

- Note:

If you start Fiddler.exe, and display Error:

`The Carbon driver has not been ported to 64bits, and very few parts of Windows.Forms will work properly`, you must add option when start Fiddler.exe "--arch=32".