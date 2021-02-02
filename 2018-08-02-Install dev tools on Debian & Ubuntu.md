### Install dev tools on Debian & Ubuntu & Linux mint

Introduction
If you plan to use your computer to develop software, or simply install software from sources, you will need some basic tools like:

gcc
c++
make
others
These tools are installed in different ways, depending your Linux distribution, here I will cover Fedora, Debian and derivatives (like Ubuntu or Mint) and Arch Linux.

Fedora
sudo yum update

sudo yum groupinstall "Development Tools" "Legacy Software Development"
Debian / Ubuntu / Debian derivatives
sudo apt-get update

sudo apt-get install build-essential
Arch Linux
sudo pacman -Sy base-devel
You now have the needed tools to compile software in your Linux box.

You can verify the version of packages you have with:

gcc -v
and

make -v
Happy developing