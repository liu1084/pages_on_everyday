---
layout: post
title: "test/karma"
date: 2016-04-05 00:12:36 +0800
comments: true
categories: javascript test, karma, jasmine, istanbul
---

Karma & jasmine & istanbul
===

### Karma - 是node平台的自动化测试管理工具（Test Runner）

#### 特点
* 该工具可用于测试所有主流web浏览器
* 可以集成到CI（持续集成）工具
* 可以和其他代码编辑器一起使用
* 可以监控文件的变化，一旦监控中的文件发生改变，自动完成测试

#### 使用
* 安装angular & angular-mocks

	npm install angular angular-mocks --save-dev

* 安装karma & jasmine & jasmine-cli & karma-jasmine & jasmine-core

    npm install karma --save-dev
    npm install jasmine --save-dev
	npm install -g karma-cli
	npm install karma-jasmine --save-dev
	npm install jasmine-core --save -dev

* 初始化karma，生产karma.conf.js

	karma init --> next --> next ...

* 修改karma.conf.js


添加plugins到karma.conf.js中

	// list of karma plugins
    plugins: [
        'karma-jasmine',
        'karma-chrome-launcher'
    ],

指定进行测试的文件

	// list of files / patterns to load in the browser
    files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-resource/angular-resource.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'src/main.js',
            'src/q/Person.js',
            'test/**/*.js'
    ],

数组里面保护的文件，实际上就相当于html里面要包含哪些js（以及其依赖）一样，把需要测试的文件引入以后，测试文件依赖的文件（Person.js, main.js, angular*.js等都需要保护在其之前）

main.js -- 定义全局的模块名称


Person.js -- 一个工厂类

	ScrumModule.factory('User', ['$log', function($log, name){
	    var Person = function(name){
	        this.eat = function(food){
	            $log.info(name + ' is eating delicious ' + food);
	        };
	        this.beHungry = function(reason){
	            $log.info(name + ' is hungry, because ' + reason);
	        };
	    };
	    return Person;
	}]);
	
PersonTest.js -- 用于测试工厂类的单元测试文件

	it('should illustrate basic usage of $q', function () {

	    var scope, q, http, resource, user, UserFactory;
	    beforeEach(angular.mock.module('Scrum'));
	    beforeEach(angular.mock.inject(function ($rootScope, $http, $resource, $q, User) {
	        scope = $rootScope.$new();
	    }));
	
	
	    var pizzaOrderFulfillment = $q.defer();
	    var pizzaDelivered = pizzaOrderFulfillment.promise;
	
	    user = new UserFactory('Pawel');
	    pizzaDelivered.then(user.eat, user.beHungry);
	    pizzaOrderFulfillment.resolve('101');
	    scope.$digest();
	
	    it('pawel will eat pizza', function () {
	        except($log.info.logs).toContain(['Pawel is eating delicious 101']);
	    });
	});



* [使用jasmine编写测试代码](#使用jasmine编写测试代码)
* 启动karma对测试代码进行测试

	karma start karma.conf.js


### jasmine - 是node平台单元测试框架（类似JUnit）

#### 特点
* 行为测试（BDD）
* 编写JavaScript测试的框架
* 不依赖于任何其他库

#### 代码结构

	describe("A suite", function() {
	  var foo;
	  beforeEach(function() {
	    foo = 0;
	    foo += 1;
	  });
	
	  afterEach(function() {
	    foo = 0;
	  });
	
	  it("contains spec with an expectation", function() {
	    expect(true).toBe(true);
	  });
	});

每个测试都在一个测试集中运行，Suite就是一个测试集，用describe函数封装。 Spec表示每个测试用例，用it函数封装。通过expect函数，作为程序断言来判断相等关系。setup过程用beforeEach函数封装，tearDown过程用afterEach封装。

#### 使用jasmine编写测试代码<a name="使用jasmine编写测试代码"></a>


### istanbul - 是一个单元测试代码覆盖率检查工具，可以很直观地告诉我们，单元测试对代码的控制程度。

#### 使用
* 安装karma-coverage

	npm install karma-coverage --save-dev

* 修改karma.conf.js

	reporters: ['progress','coverage'],
	preprocessors : {'src.js': 'coverage'},
	coverageReporter: {
	    type : 'html',
	    dir : 'coverage/'
	}

* 查看测试覆盖率报告

在文件夹coverage下，有index.html文件，打开即可。



