#!/bin/sh

if [ -z "$1" ]
then
	echo "Bad parameters";
	return;
fi

result=$(echo $1 | awk '/[\*|\$|\?|\.]+/{print $0}')
if [ -n "$result" ]
then
echo "Bad parameters, can not using wildcards";
return ;
fi