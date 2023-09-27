# NoClassDefFoundError: Could not initialize class sun.awt.X11FontManager

##  Installing Asian Fonts on Ubuntu & Debian 

By default, Asian language support is not installed on Ubuntu/Debian  systems. In order to properly render documents with Asian fonts, support for corresponding languages should be installed.

To install Japanese language support, run following commands:

```shell
# sudo apt-get install language-pack-ja
# sudo apt-get install japan*
```

 To install Chinese language support, run following commands: 

```shell
# sudo apt-get install language-pack-zh*
# sudo apt-get install chinese*
```

 To install Korean language support, run following commands: 

```shell
# sudo apt-get install language-pack-ko
# sudo apt-get install korean*
```

 And finally, you will need to add additional fonts: 

```shell
# sudo apt-get install fonts-arphic-ukai fonts-arphic-uming fonts-ipafont-mincho fonts-ipafont-gothic fonts-unfonts-core
```

