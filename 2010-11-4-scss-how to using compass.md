Compass adjusts the way partials are imported. It allows importing components based solely on their name, without specifying the path.

Before you can do `@import 'compass';`, you should:

Install Compass as a Ruby gem:

```
gem install compass
```

After that, you should use Compass's own command line tool to compile your SASS code:

```
cd path/to/your/project/
compass compile
```

Note that Compass reqiures a configuration file called `config.rb`. You should create it for Compass to work.

The minimal `config.rb` can be as simple as this:

```
css_dir =   "css"
sass_dir =  "sass"
```

And your SASS code should reside in `sass/`.

Instead of creating a configuration file manually, you can create an empty Compass project with `compass create ` and then copy your SASS code inside it.

Note that if you want to use Compass extensions, you will have to:

1. require them from the `config.rb`;
2. import them from your SASS file.

More info here: http://compass-style.org/help/





参考: https://stackoverflow.com/questions/15511874/file-to-import-not-found-or-unreadable-compass