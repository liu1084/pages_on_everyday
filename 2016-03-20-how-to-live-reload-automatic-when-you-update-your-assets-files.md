---
id: 252
title: How to live-reload automatic when you update your assets files?
date: 2016-03-20T04:12:29+00:00
author: liu1084
layout: post
guid: http://blog.83096146.com/?p=252
permalink: /?p=252
categories:
  - linux
---
如果你从事web开发，当你改变了静态文件（HTML/CSS/JS）中的任意类型的一个或者几个文件，你需要立刻切换到浏览器（chrome、firefox），然后不自觉的按下F5刷新，有时候由于缓存问题，还需要按下CTRL+F5强制刷新。这种频繁的操作，让你觉得很累或者很操心。有没有可能改变文件后，浏览器自动刷新页面查看修改结果呢？我目前使用grunt实现了。 

* * *

module.exports = function (grunt) {
	  
&nbsp; &nbsp; require('time-grunt')(grunt);
	  
&nbsp; &nbsp; // These plugins provide necessary tasks.
	  
&nbsp; &nbsp; require('load-grunt-tasks')(grunt);
	  
&nbsp; &nbsp; // Project configuration.
	  
&nbsp; &nbsp; grunt.initConfig({
	  
&nbsp; &nbsp; &nbsp; &nbsp; // Metadata.
	  
&nbsp; &nbsp; &nbsp; &nbsp; pkg: grunt.file.readJSON('package.json'),
	  
&nbsp; &nbsp; &nbsp; &nbsp; clean: [&#8216;dist/&#8217;],
	  
&nbsp; &nbsp; &nbsp; &nbsp; connect: {
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; server:{
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; options: {
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; port: 80,
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; keepalive: true,
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; hostname: '*',
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; base: {
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; path: 'src',
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; options:{ 

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }
	  
&nbsp; &nbsp; &nbsp; &nbsp; },
	  
&nbsp; &nbsp; &nbsp; &nbsp; csslint: {
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; //"rules": "node -e "require('csslint').CSSLint.getRules().forEach(function(x) { console.log('\"' + x.id + '\": true,') })"
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; options: {
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; csslintrc: '.csshintrc', //Loading rules from an external file
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; formatters: [
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {id: 'checkstyle-xml', dest: 'dist/csslint.xml'}, //把检查结果放在报告文档内。
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {id: 'compact', dest: 'dist/compact.txt'} //把检查结果放在报告文档内。
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ]
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; strict: {
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; options: {
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; import: 2
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; src: [&#8216;css/*\*/\*.css&#8217;, &#8216;js/app/plugins/*\*/\*.css&#8217;] //检查的css文件路径。
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }
	  
&nbsp; &nbsp; &nbsp; &nbsp; },
	  
&nbsp; &nbsp; &nbsp; &nbsp; jshint : {
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; options : {
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; jshintrc: true,
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; reporter: require('jshint-stylish'),
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; reporterOutput: 'dist/jshint.txt'
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; uses_defaults : [ &#8216;js/*\*/\*.js&#8217; ],
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; beforeconcat: [],
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; afterconcat: []
	  
&nbsp; &nbsp; &nbsp; &nbsp; },
	  
&nbsp;
	  
&nbsp; &nbsp; &nbsp; &nbsp; watch: {
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; options: {
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; livereload: true
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; files: [&#8216;src/*\*/\*.html&#8217;],
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; css: {
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; files: [&#8216;src/assets/css/*\*/\*.css&#8217;],
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; tasks: [&#8216;csslint&#8217;]
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; scripts: {
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; files: [&#8216;src/*\*/\*.js&#8217;],
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; tasks: [&#8216;jshint&#8217;],
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; options: {
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; spawn: false
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }
	  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }
	  
&nbsp; &nbsp; &nbsp; &nbsp; },
	  
&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
	  
&nbsp; &nbsp; });
	  
&nbsp; &nbsp; // Default task.
	  
&nbsp; &nbsp; grunt.registerTask('default', [&#8216;connect&#8217;, &#8216;watch&#8217;]);
	  
}; 

编辑你的html文件，在里面插入： 

<pre>&lt;script src="//localhost:35729/livereload.js"&gt;&lt;/script&gt;</pre>

执行：grunt 

启动浏览器，输入：http://localhost/ 

大功告成，修改css、html或者js文件，看起来一切都自动化了。 

&nbsp; 

enjoy yourself~! 

&nbsp;