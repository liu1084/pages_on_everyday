### How to install Open vSwitch on CentOs

>   https://www.linuxtechi.com/install-use-openvswitch-kvm-centos-7-rhel-7/



-   Install the required packages using yum

```she
yum install wget openssl-devel  python-sphinx gcc make python-devel openssl-devel kernel-devel graphviz kernel-debug-devel autoconf automake rpm-build redhat-rpm-config libtool python-twisted-core python-zope-interface PyQt4 desktop-file-utils libcap-ng-devel groff checkpolicy selinux-policy-devel -y
```



-   download ovs

```shell
wget https://www.openvswitch.org/releases/openvswitch-2.6.2.tar.gz
tar zxvf openvswitch-2.6.2.tar.gz
cp openvswitch-2.6.2.tar.gz /root/rpmbuild/SOURCES/
```



-   install && start ovs

```shell
rpmbuild  -bb --nocheck  openvswitch-2.6.2/rhel/openvswitch.spec
yum localinstall /root/rpmbuild/RPMS/x86_64/openvswitch-2.6.2-1.x86_64.rpm
systemctl enable openvswitch.service
systemctl start openvswitch.service
ovs-vsctl -V
```



