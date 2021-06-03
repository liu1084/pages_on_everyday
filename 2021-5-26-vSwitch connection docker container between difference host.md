## vSwitch connection docker container between difference host

```shell
apt-get install -y openvswitch-switch openvswitch-common bridge-utils


ovs-vsctl del-port br0 gre0
brctl delif docker0 br0 
ovs-vsctl del-br br0
ip route del 192.168.0.0/24 dev docker0
brctl delif docker0 veth0


WEB - 172.16.221.246
ovs-vsctl add-br br0
ovs-vsctl show
ip link add veth0 type veth peer name veth1
ovs-vsctl add-port br0 veth1
brctl addif docker0 veth0
ip link set veth1 up
ip link set veth0 up
ip link

ip route add 192.168.0.0/24 dev docker0
ovs-vsctl add-port br0 gre0 -- set Interface gre0 type=gre options:remote_ip=172.16.221.245


DB - 172.16.221.245
ovs-vsctl add-br br0
ip link add veth0 type veth peer name veth1
ovs-vsctl add-port br0 veth1
brctl addif docker0 veth0
ip link set veth1 up
ip link set veth0 up

ovs-vsctl add-port br0 gre0 -- set Interface gre0 type=gre option:remote_ip=172.16.221.246
ip route add 172.17.0.0/16 dev br-66231694a62f
ip route add 192.168.0.0/24 dev br-66231694a62f
```

