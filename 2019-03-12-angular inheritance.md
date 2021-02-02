---
layout: post
title: "angular/how to write service and inheritance"
date: 2016-03-30 10:00:16 +0800
comments: true
categories: angularJS inheritance
---

## AngularJS Inheritance

angular本身不提供内建的继承机制，所以如果你需要继承方式开发一组应用，或者你需要在开源项目上进行二次开发，这也需要重新封装原有的服务和指令。

我这里提供了以下几种情况进行说明。


# 1. 控制器的继承

实际上，你写一个angular的控制器，因为在控制器里面的方法和变量，都写在$scope下，所以，这些变量和方法在其他控制器里面本来也是可以访问的（当然，在调用之前，必须先定义）。

考虑以下的场景：
如果你有2个页面，虽然显示的样式不同，但是内部的逻辑非常相似（50%以上），那么你就可以把共通的逻辑写在父类里面，然后子类去继承父类，从而重用父类方法。

###### 在angular中，如何去实现呢？

采用经典的原型链方式和angularjs中的`as`语法就可以。看下面的例子：

###### BaseCtrl.js

    var BaseCtrl = function($scope){
    	this.id = 0;
    	this.count = 0;
    };
    
    //common methods
    BaseCtrl.prototype.parentMethod1 = function(){
    	console.log('parent controller 2, method 1');
    };
    //...another methods
    
###### ChildrenCtrl.js

    var ChildrenCtrl = function(){
    	BaseCtrl.call(this);
    };
    
    ChildrenCtrl.prototype = Object.create(BaseCtrl.prototype);
    ChildrenCtrl.prototype.childMethod1 = function(){
    	this.parentMethod1();
    	console.log('i call parent method1');
    };
    
    angular.module('InheritanceModule').controller('BaseCtrl', BaseCtrl);
    angular.module('InheritanceModule').controller('ChildrenCtrl', ChildrenCtrl);

###### HTML

    <div ng-controller="BaseCtrl as base">
        <button ng-click="base.parentMethod1();">base ctrl</button>
        <div ng-controller="ChildrenCtrl as child">
            <button ng-click="child.childMethod1();">children ctrl</button>
        </div>
    </div>



# 2. service的继承

通常，angularjs常用的封装服务的方式有service、factory和provider等5种方式。service和factory这两种方式的差异不是很大，provider方式是在调用之前可以进行配置，这3种方式最重要，也最常用。下面分别进行举例说明：

* factory 返回一个对象

###### factory 实例

    app.factory('myParentFactory', [function(){
        var privateVariable = '';
        var privateFunction = function(){
        
        };
        
        var result = {};
        
        result.publicFunction = function(){
            return privateVariable;
        };
        
        result.publicVariable = function(){
            return privateFunction();
        };
        
        return result;
    }]);
    
    app.controller('AppCtrl1', ['$scope', 'myParentFactory', function($scope, myParentFactory){
        $scope.callFunction = myParentFactory.publicFunction();
        $scope.callVariable = myParentFactory.publicVariable();
    }]);
    
    
    app.factory('myChildFactory', ['myParentFactory', function(myParentFactory){
        var child = Object.create(myParentFactory);
        child.childMethod = function(){
        
        };
        
        return child;
    }]);
    
    //OR
    
    app.service('myChildFactory', ['myParentFactory', function(myParentFactory){
        var child = angular.extend(myParentFactory, {});
        child.childMethod = function(){
            //body
        };
    }]);
    
    app.controller('AppCtrl11', ['$scope', 'myChildFactory', function($scope, myChildFactory){
        $scope.callFunction = myChildFactory.publicFunction();
        $scope.callVariable = myChildFactory.publicVariable();
        $scope.childFunction = myChildFactory.childMethod();
    }]);
    

* service 不用写返回语句，实际上返回一个构造器

###### service 实例

    app.service('myParentService', [function(){
        var privateVariable = '';
        var privateFunction = function(){
        
        };
        
        this.publicFunction = function(){
            return privateVariable;
        };
        
        this.publicVariable = function(){
            return privateFunction();
        };
    }]);
    
    app.controller('AppCtrl2', ['$scope', 'myParentService', function($scope, myParentService){
        $scope.callFunction = myParentService.publicFunction();
        $scope.callVariable = myParentService.publicVariable();
    }]);
    
###### service的继承有点不太一样，因为service不需要有返回，但是如果你写上，好像也没什么

    app.service('myChildService', ['myParentService', function(myParentService){
        return Object.create(myParentService);
    }]);


* directive 分为2部分： 配置阶段和运行阶段

###### 运行阶段

    app
    .provider('Press', [function () {
        var config = {
            name: 'Beijing',
            address: '',
            author: ''
        };
        var pressName = '';

        return {
            //可配置部分
            setConfig: function(name, address, author){
                config.name = name;
                config.address = address;
                config.author = author;
            },
            //返回的部分
            $get: function(){
                return {
                    setPress: function (press) {
                        config.name = press;
                    },
                    getPress: function () {
                        return config.name;
                    },
                    configPress: pressName
                }
            }
        };
    }]);

###### 配置阶段

    app.config(function(myDirectiveProvider){
        myDirectiveProvider.setConfig(args);
    })
    
    app.controller('AppCtrl3', ['Press', function(Press){
        Press.setPress(variables);
        //...
    }]);
    
    
###### 扩展provider

    app.provider('ChildPress', ['PressProvider', function(PressProvider){
        return PressProvider.get(); //OR
        return PressProvider.get
    }]);
    
###### 另外一个例子，我觉得这个例子配置方面有代表性

    var app = angular.module('myApp', []);
    
    // Provide some basic injectables for testing
    app.constant('nameString', 'NAME');
    app.constant('ageString', 'AGE');
    app.constant('foodString', 'FAVORITE FOOD');
    
    // Create the dialog provider
    app.provider('dialog', function($provide, $injector) {
        var dialogs = {};
    
        this.register = function(name, configFn) {
            // Create a new service
            $provide.factory(name, function($window, $q) {
                dialogs[name] = function() {
                    // Get data based on DI injected version of configFn
                    var data = $injector.invoke(configFn);
                    // faking async here since prompt is really synchronous
                    var deferred = $q.defer();
                    var response = $window.prompt(data.text);
                    deferred.resolve(response);
                    return deferred.promise;
                };
                return dialogs[name];
            });
        };
    
        // Injecting the service itself gives you a function that
        // allows you to access a dialog by name, much like $filter
        this.$get = function() {
            return function(name) {
                return dialogs[name];
            };
        };
    });
    
    // Providing dialog injectables via app.config
    app.config(function(dialogProvider) {
        dialogProvider.register('askFood', function(foodString) {
            return {
                text: 'What is your ' + foodString + '?'
            }
        });
    });
    
    // Alternatively, shortcut to accessing the dialogProvider via app.dialog
    app.dialog = function(name, configFn) {
        app.config(function(dialogProvider) {
            dialogProvider.register(name, configFn);
        });
    };
    
    app.dialog('askName', function(nameString) {
        return {
            text: 'What is your ' + nameString + '?'
        }
    });
    
    app.dialog('askAge', function(ageString) {
        return {
            text: 'What is your ' + ageString + '?'
        }
    });
    
    app.controller('MainController',
        function($scope, askName, askAge, askFood, dialog) {
            var setLastResponse = function(result) {
                $scope.lastResponse = result;
            };
    
            $scope.askName = function() {
                askName().then(setLastResponse);
            };
    
            $scope.askNameAgain = function() {
                // get the dialog through the dialog service
                // much like how $filter works
                var theDialog = dialog('askName');
                theDialog().then(setLastResponse);
            };
    
            $scope.askAge = function() {
                askAge().then(setLastResponse);
            };
    
            $scope.askFood = function() {
                askFood().then(setLastResponse);
            };
        });    
        


