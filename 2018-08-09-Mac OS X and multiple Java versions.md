### Mac OS X and multiple Java versions
https://stackoverflow.com/questions/26252591/mac-os-x-and-multiple-java-versions

292
down vote
accepted
The cleanest way to manage multiple java versions on Mac is to use Homebrew.

And within Homebrew, use:

homebrew-cask to install the versions of java
jenv to manage the installed versions of java
As seen on http://hanxue-it.blogspot.ch/2014/05/installing-java-8-managing-multiple.html , these are the steps to follow.

install homebrew
install homebrew jenv
install homebrew-cask
install a specific java version using cask (see "homebrew-cask versions" paragraph below)
add this version for jenv to manage it
check the version is correctly managed by jenv
repeat steps 4 to 6 for each version of java you need
homebrew-cask versions
Add the homebrew/cask-versions tap to homebrew using:

brew tap homebrew/cask-versions
Then you can look at all the versions available:

brew search java
Then you can install the version(s) you like:

brew install java7
brew install java6
And add them to be managed by jenv as usual.

jenv add <javaVersionPathHere>
I think this is the cleanest & simplest way to go about it.

Another important thing to note, as mentioned in Mac OS X 10.6.7 Java Path Current JDK confusing :

For different types of JDKs or installations, you will have different paths

You can check the paths of the versions installed using /usr/libexec/java_home -V, see How do I check if the Java JDK is installed on Mac?

On Mac OS X Mavericks, I found as following:

1) Built-in JRE default: /Library/Internet\
  Plug-Ins/JavaAppletPlugin.plugin/Contents/Home

2) JDKs downloaded from Apple: /System/Library/Java/JavaVirtualMachines/1.6.0.jdk/Contents/Home/

3) JDKs downloaded from Oracle: /Library/Java/JavaVirtualMachines/jdk1.8.0_11.jdk/Contents/Home