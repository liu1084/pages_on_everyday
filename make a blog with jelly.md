---
layout: post
title: "github/how to make a blog with octopress on github.com"
date: 2016-03-25 12:56:05 +0800
comments: true
categories: [octopress, blog, github.com, github pages]
-------------------------------------------------------

## There are 10 steps todo:
- **Step 1: Install ruby, git and nodejs**

###### download 
1. ruby
2. git
3. nodejs

Install them step-by-step.


- **Step 2: Install ruby DEVELOPMENT KIT**

###### download & install dev-kit of ruby
1. goto [http://rubyinstaller.org/downloads/](http://rubyinstaller.org/downloads/ "ruby websit") download
2. install it.


- **Step 3: Clone octopress to local**

###### open cmd console, and press:
    git clone git://github.com/imathis/octopress.git octopress
    cd octopress

- **Step 4: Install packages using gem**

###### install dependiencis, switch to development kit bin forlder, and open a console by run `msys.bat`, press(if u open console using system `cmd`, errors will be shown):
    
    gem install bundler
    bundle install
    rake install

- **Step 5: Writing a post with markdown**

###### open forlder in your IDE(such as Sublime text 3 or Eclipse) & under console press
    rake new_post['forlder/post-title']
this command will create a file which name is `YYYY-MM-DD-post-title.markdown` under `source/_posts` forder.

you can edit this `markdown` file and save it.


- **Step 6: Preview pages on localhost**

###### generate static html from markdown
    rake generate
    rake preview

###### if you want to edit sass file, you cant run 
    rake watch
to watch file changes and compile `scss` to `css` real-time.

- **Step 7: Add CNAME to your DNS resolve**

###### if you have a domain(For example: page.domainname.com), and want to resolve your github page to it. you can add a CNAME to your DNS resolve recored & add CNAME file to source forlder like this:
    echo "page.domainname.com" >> source/CNAME

- **Step 8: Add a new repository on github.com**

Because github only support jelly plugins and custom plugin like `include_array` (under plugins) not be supported, so I decide push static file to repository, other than source code.

goto [github.com](http://github.com), and create a new repository, named `your github's username`, and switch to local public forlder, and push all file to the repository.

###### open a console, and press:

    git init
    git remote add origin git@xxx.github.git
    git add .
    git commit -m init"
    
- **Step 9: Push pages to github.com**

    git push -u origin master

- **Step 10: Enjoy it.**

open your favriate browser and open `page.domainname.com`.