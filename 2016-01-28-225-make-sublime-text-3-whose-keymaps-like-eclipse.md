---
id: 225
title: 'Make sublime text 2&#038;3&#8217;s keymaps like eclipse'
date: 2016-01-28T09:26:13+00:00
author: liu1084
layout: post
guid: http://blog.83096146.com/?p=225
permalink: /?p=225
categories:
  - linux
---
When I using sublime text 2&3, I want to it has a keymap like eclipse.
  
steps:

  * Preference -> Key bindings &#8211; User ;
  * paste keys bindings to this file

<pre>[
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
] 
</pre>

  * enjoy it.

reference: <a href="https://gist.github.com/thbkrkr/3194275" target="_blank">https://gist.github.com/thbkrkr/3194275</a>