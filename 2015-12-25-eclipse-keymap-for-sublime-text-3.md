---
id: 19
title: Eclipse keymap for Sublime text 3
date: 2015-12-25T01:04:22+00:00
author: Kings Lee
layout: post
guid: http://www.83096146.com/blog/?p=19
permalink: /?p=19
categories:
  - tools
tags:
  - eclipse
  - keymap
  - short keys
  - sublime text
---
  * Preferences-> Key binds &#8212; User
  * Copy & paste (<https://gist.github.com/thbkrkr/3194275>)

<pre class="theme:dark-terminal width-mode:1 width:600 top-set:false bottom-set:false lang:js decode:true  " title="short key">[
{ "keys": ["f12"], "command": "htmlprettify"},
{ "keys": ["f1"], "command": "fold" },
{ "keys": ["f2"], "command": "unfold" },
{ "keys": ["ctrl+à"], "command": "show_overlay", "args": {"overlay": "goto", "text": "@"} },
{ "keys": ["ctrl+!"], "command": "show_overlay", "args": {"overlay": "goto", "text": ":"} },
{ "keys": ["ctrl+space"], "command": "auto_complete" },
{ "keys": ["ctrl+space"], "command": "replace_completion_with_auto_complete", "context":
[
{ "key": "last_command", "operator": "equal", "operand": "insert_best_completion" },
{ "key": "auto_complete_visible", "operator": "equal", "operand": false },
{ "key": "setting.tab_completion", "operator": "equal", "operand": true }
]
},
{ "keys": ["ctrl+d"], "command": "run_macro_file", "args": {"file": "Packages/Default/Delete Line.sublime-macro"} },
{ "keys": ["ctrl+shift+c"], "command": "toggle_comment", "args": { "block": false } },
{ "keys": ["ctrl+shift+c"], "command": "toggle_comment", "args": { "block": true } },
{ "keys": ["ctrl+shift+f"], "command": "reindent" , "args": {"single_line": false}},
{ "keys": ["ctrl+shift+s"], "command": "save_all" },
{ "keys": ["alt+up"], "command": "swap_line_up" },
{ "keys": ["alt+down"], "command": "swap_line_down" },
{ "keys": ["ctrl+alt+j"], "command": "join_lines" },
{ "keys": ["ctrl+alt+down"], "command": "duplicate_line" },
{ "keys": ["shift+ctrl+r"], "command": "show_overlay", "args": {"overlay": "goto", "show_files": true} },
{ "keys": ["shift+ctrl+f4"], "command": "close_all" },
{ "keys": ["shift+ctrl+y"], "command": "lower_case" },
{ "keys": ["shift+ctrl+x"], "command": "upper_case" }
]</pre>

close & restart sublime text, enjoy it!