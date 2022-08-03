## linux 多个会话同时执行命令后history记录不全的解决方案

```shell
# format history 
# save in ~/.bashrc
USER_IP=`who -u am i 2>/dev/null| awk '{print $NF}'|sed -e 's/[()]//g'` 

export HISTTIMEFORMAT="%Y-%m-%d %H:%M:%S  `whoami`@${USER_IP}: "
export HISTFILESIZE=1000000
export PROMPT_COMMAND="history -a; history -r;  $PROMPT_COMMAND"
shopt -s histappend
bind '"\e[A": history-search-backward'
bind '"\e[B": history-search-forward'
```

