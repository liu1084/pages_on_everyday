## Configuring Bind9 logs

```shell
vi /etc/bind/named.conf
logging {
    channel bind.log {
        file "/var/lib/bind/bind.log" versions 10 size 20m;
        severity notice;
        print-category yes;
        print-severity yes;
        print-time yes;
    };
  
        category queries { bind.log; };
        category default { bind.log; };
        category config { bind.log; };
};

logging {
          channel "misc" {
                    file "/var/log/named/misc.log" versions 4 size 4m;
                    print-time YES;
                    print-severity YES;
                    print-category YES;
          };
  
          channel "query" {
                    file "/var/log/named/query.log" versions 4 size 4m;
                    print-time YES;
                    print-severity NO;
                    print-category NO;
          };
  
          category default {
                    "misc";
          };
  
          category queries {
                    "query";
          };
};

logging {
          channel "misc" {
                    file "/var/log/named/misc.log" versions 10 size 10m;
                    print-time YES;
                    print-severity YES;
                    print-category YES;
          };
  
          channel "query" {
                    file "/var/log/named/query.log" versions 10 size 10m;
                    print-time YES;
                    print-severity NO;
                    print-category NO;
          };
  
          channel "lame" {
                    file "/var/log/named/lamers.log" versions 1 size 5m;
                    print-time yes;
                    print-severity yes;
                    severity info;
          };
  
          category "default" { "misc"; };
          category "queries" { "query"; };
          category "lame-servers" { "lame"; };
  
};

sudo mkdir /var/log/named/
sudo chown bind:bind /var/log/named/
sudo /etc/init.d/bind9 restart
```

