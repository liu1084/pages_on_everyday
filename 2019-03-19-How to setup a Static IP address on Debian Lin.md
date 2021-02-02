### How to setup a Static IP address on Debian Linux
Contents
1. Objective
2. Operating System and Software Versions
3. Requirements
4. Difficulty
5. Conventions
6. Instructions
6.1. Enable Static IP
6.2. Configure IP Address
6.3. Static DNS server
6.4. Apply Changes
Objective
The objective is to configure a static IP address on Debian Linux server. 

Please note that for Desktop installations it is recommended to use GUI tools, such as network-manager. If you wish to configure your network interfaces directly via /etc/network/interfaces file on your Desktop, make sure you disable any other possibly interfering network configuration daemons. For example, the below commands will disable network-manager:
# systemctl stop NetworkManager.service
# systemctl disable NetworkManager.service
Operating System and Software Versions
Operating System: - Debian 9 (Stretch)
Requirements
Privileged access to your Debian Linux system is required.
Difficulty
EASY
Conventions
# - requires given linux commands to be executed with root privileges either directly as a root user or by use of sudo command
$ - requires given linux commands to be executed as a regular non-privileged user
Instructions
Enable Static IP
By default you will find the following configuration within the /etc/network/interfaces network config file:
source /etc/network/interfaces.d/*

# The loopback network interface
auto lo
iface lo inet loopback

# The primary network interface
allow-hotplug eth0
iface eth0 inet dhcp
Update the iface eth0 inet dhcp to iface eth0 inet static. The resulting content of /etc/network/interfaces network config file should look similar to the one below:
source /etc/network/interfaces.d/*

# The loopback network interface
auto lo
iface lo inet loopback

# The primary network interface
allow-hotplug eth0
iface eth0 inet static
Configure IP Address
At this stage, we have two choices on how to configure a static IP address for our eth0 network interface. The first option is to add IP address configuration directly into /etc/network/interfaces file. Append the following line to your existing /etc/network/interfaces:
        address 10.1.1.125
        netmask 255.0.0.0
        gateway 10.1.1.1
The resulting content /etc/network/interfaces file should look like the one below. Update your IP address, netmask and gateway as necessary:
source /etc/network/interfaces.d/*

# The loopback network interface
auto lo
iface lo inet loopback

# The primary network interface
allow-hotplug eth0
iface eth0 inet static
      address 10.1.1.125
      netmask 255.0.0.0
      gateway 10.1.1.1
The second and recommended option is to define your network interfaces separately within /etc/network/interfaces.d/ directory. 

During the networking daemon initiation the /etc/network/interfaces.d/ directory is searched for network interface configurations. Any found network configuration is included as part of the /etc/network/interfaces. 

Create a new network configuration file with any arbitrary file name eg. eth0 and include the eth0 IP address configuration shown below. To do this use your preferred text editor for example vim:
# cat /etc/network/interfaces.d/eth0
iface eth0 inet static
      address 10.1.1.125
      netmask 255.0.0.0
      gateway 10.1.1.1
Now, remove the above lines stated from /etc/network/interfaces so you will end up with:
# cat /etc/network/interfaces
# This file describes the network interfaces available on your system
# and how to activate them. For more information, see interfaces(5).

source /etc/network/interfaces.d/*

# The loopback network interface
auto lo
iface lo inet loopback

# The primary network interface
allow-hotplug eth0
Static DNS server
To configure a static DNS edit /etc/resolv.conf file, and include the IP address of your preferred nameserver eg:
nameserver 8.8.8.8
Alternatively, add the following line into your /etc/network/interfaces network config file:
dns-nameservers 8.8.8.8 8.8.4.4
Apply Changes
To apply changes restart your network daemon:
# service networking restart