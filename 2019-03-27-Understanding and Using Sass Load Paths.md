
### Understanding and Using Sass Load Paths

One of the biggest hurdles in effectively using Sass is correctly setting the load path when using Sass libraries. Surprisingly not all libraries set up the load paths correctly. Some libraries add themselves to the Sass.load_paths or the SASS_PATH environment variable, but stomp on paths that were already loaded, which introduces problems like requirements for the order dependencies are loaded. It is clear that the current state of things could use improvement.

For those of you that are aware of the challenges using the SASS_PATH environment variable and just want a solution to help manage and wire up the SASS_PATH, the SassPaths gem provides utilities to easily include directories, Sass gems, and Bower Sass dependencies in the SASS_PATH.

#### Why do load paths matter?
The Sass load paths let Sass know the directories it should look in when trying to import files. Correctly setting up the load paths allow us to import a Sass library with its name, rather than having to use the relative path to the resource.

```ruby
@import 'susy';

// versus

@import 'bundle/ruby/2.1.0/gems/susy-2.1.3/sass/susy';
```
It is important to write libraries such that they append to the Sass load paths, assuming that other libraries may be loaded before or after them, instead of overwriting any libraries that might have appended to the load paths first.

#### Where Sass is headed
To help solve the load path problem, Sass 3.2 introduced the SASS_PATH environment variable, an environment variable that can be hooked into to set the load paths for Sass. As first specified in the 3.2 change log:

Sass.load_paths is initialized to the value of the SASS_PATH environment variable. This variable should contain a colon-separated list of load paths (semicolon-separated on Windows).

The SASS_PATH environment variable is not just an optional alternative, it is at the core of where Sass is headed regarding setting up/managing its load paths. In fact, Sass 3.4 introduces a backwards incompatibility with how the load path was handled before. As specified in the Sass 3.4 change log:

The current working directory will no longer be placed onto the Sass load path by default. If you need the current working directory to be available, set SASS_PATH=. in your shell's environment.

Another significant change occurring in the Sass community is that Sass no longer requires Ruby. LibSass brings a C implementation of Sass to the table to remove the requirement of Ruby as well as provide a significant performance increase in compilation. LibSass also implements the SASS_PATH environment variable so there is no denying that the SASS_PATH is the accepted way forward. This is where the SASS_PATH environment variable really shines, it can be configured to provide a common interface for setting up Sass load paths despite the implementation of Sass (Ruby, C, or otherwise).

The problem with LibSass is that it currently only implements features up to Sass 3.2, meaning most notably, it does not support Sass maps. The good news is that the core team recently announced that they plan on getting LibSass to be 100% compatible with Ruby Sass.

All Your Sass Paths Are Belong To Us
If SASS_PATH is the way to go, why does it seem that so many projects are having difficulties setting the path correctly? While I cannot give a definitive answer, my guess is that it takes time for change to permeate through all resources and despites Sass' newfound maturity, users have grown accustomed to hacking their own paths together. We no longer need to hack together the load paths, these should just work as long as we use the provided environment variable as an interface.

Though the environment variable provides a common interface to hook into, there are many ways Sass libraries might be pulled into a project. How do we rectify setting up the SASS_PATH correctly when these paths might come via Ruby gems, Bower dependencies, or the file directory? We are releasing the SassPaths gem to provide a set of easy to use utility methods to include any Sass dependency, whether it comes from Bower, Ruby gems, or elsewhere. SassPaths also plays nicely with Ruby on Rails. You can read the documentation on GitHub, but I will provide a quick overview below.

#### SassPaths Primer
First you will need to bundle install the SassPaths gem in your application.

# Gemfile
```ruby
gem 'sass_paths'
```
Now all you need is an initialization file that will run when your application starts, which will make use of the SassPaths utilities to setup the SASS_PATH. If you are using Rails, you can simply add this file to your initializers directory.

# sass_paths_init.rb
```ruby
require 'sass_paths'

# append a directory, or list of directories to SASS_PATH
SassPaths.append('/my/first/sass/path', '/my/second/sass/path', ...)

# append a Ruby gem
SassPaths.append_gem_path(gem_name, directory_in_gem_that_contains_sass)

# append all Sass Bower components' directories
SassPaths.append_bower_components(bower_components_directory)
```

#### Acknowledgements
Many thanks to my fellow CustomInk teammates, Stafford Brunk and Ken Collins. Stafford co-authored the gem with me and Ken has been a driving force in adopting the SASS_PATH environment variable as well as epic pull requests to fix the problems existing repositories have with the SASS_PATH.