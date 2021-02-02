#!/bin/sh
printf "The complete list is %s\n\r" "$$";
printf "The complete list is %s\n\r" "$!";
printf "The complete list is %s\n\r" "$?";
printf "The complete list is %s\n\r" "$*";
printf "The complete list is %s\n\r" "$@";
printf "The complete list is %s\n\r" "$#";
printf "The complete list is %s\n\r" "$0";
printf "The complete list is %s\n\r" "$1";
printf "The complete list is %s\n\r" "$2";

exit 0;
