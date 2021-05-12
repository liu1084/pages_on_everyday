# 不同主机之间Docker service通信

```shell
ovs-vsctl del-port br0 gre0
ovs-vsctl del-port br0 gre1
brctl delif docker0 br0 
ovs-vsctl del-br br0
ip route del 172.17.0.0/16 dev docker0

88:
ovs-vsctl add-br br0 
ovs-vsctl add-port br0 gre0 -- set Interface gre0 type=gre option:remote_ip=172.16.0.89
ovs-vsctl add-port br0 gre1 -- set Interface gre1 type=gre option:remote_ip=172.16.0.90
brctl addif docker0 br0 
ip link set dev br0 up 
ip link set dev docker0 up 
ip route add 172.17.0.0/16 dev docker0


89:
ovs-vsctl add-br br0 
ovs-vsctl add-port br0 gre0 -- set Interface gre0 type=gre option:remote_ip=172.16.0.88
ovs-vsctl add-port br0 gre1 -- set Interface gre1 type=gre option:remote_ip=172.16.0.90
brctl addif docker0 br0 
ip link set dev br0 up 
ip link set dev docker0 up 
ip route add 172.17.0.0/16 dev docker0

90:
ovs-vsctl add-br br0 
ip link set dev br0 up 
ip link set dev docker0 up 
ovs-vsctl add-port br0 gre0 -- set Interface gre0 type=gre option:remote_ip=172.16.0.88
ovs-vsctl add-port br0 gre1 -- set Interface gre1 type=gre option:remote_ip=172.16.0.89
brctl addif docker0 br0 
ip route add 172.17.0.0/16 dev docker0
```



