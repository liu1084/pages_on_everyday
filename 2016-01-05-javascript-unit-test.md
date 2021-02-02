---
id: 133
title: JAVASCRIPT UNIT TEST
date: 2016-01-05T00:19:00+00:00
author: liu1084
layout: post
guid: http://blog.83096146.com/?p=133
permalink: /?p=133
categories:
  - linux
---
  * WHY?
  
    Javascript单元测试，我们真的需要吗？
  
    单元测试，又名模块测试，是开发者在开发过程中，对项目中某个单元模块内部逻辑的检验。这在后台开发中颇为常见，但是在前端领域较为少见。如果我告诉你单元测试什么什么优点啊，你肯定第一时间反驳的第一句就是“花时间写这玩意，有必要吗？”基于web的特性就是快速迭代，一个项目需求时间往往都是快速的，完全没有多余的时间给你去写测试用例，但对于大型的或者需求变更频繁的项目，单元测试就能体验出他的价值。
  
    “怎么单元测试写起来这么麻烦”
  
    —- 说明项目模块之间存在耦合度高，依赖性强的问题。
  
    “怎么要写这么长的测试代码啊”
  
    —- 这是一劳永逸的，并且每次需求变更后，你都可通过单元测试来验证，逻辑代码是否依旧正确。
  
    “我的模块没问题的，是你的模块出了问题”
  
    —- 程序中每一项功能我们都用测试来验证的它的正确性，快速定位出现问题的某一环。
  
    “上次修复的bug怎么又出现了 ”
  
    — 单元测试能够避免代码出现回归，编写完成后，可快速运行测试。
  * WHAT IS?
  
    在计算机编程中，单元测试（又称为模块测试, Unit Testing）是针对程序模块（软件设计的最小单位）来进行正确性检验的测试工作。
  
    程序单元是应用的最小可测试部件。
  
    在过程化编程中，一个单元就是单个程序、函数、过程等；对于面向对象编程，最小单元就是方法，包括基类（超类）、抽象类、或者派生类（子类）中的方法。
  
    通常来说，程序员每修改一次程序就会进行最少一次单元测试，在编写程序的过程中前后很可能要进行多次单元测试，以证实程序达到软件规格书要求的工作目标，没有程序错误；虽然单元测试不是什么必须的，但也不坏，这牵涉到项目管理的政策决定。
  
    每个理想的测试案例独立于其它案例；
  
    为测试时隔离模块，经常使用stubs、mock或fake等测试马甲程序。
  
    单元测试通常由软件开发人员编写，用于确保他们所写的代码符合软件需求和遵循开发目标。它的实施方式可以是非常手动的（通过纸笔），或者是做成构建自动化的一部分。
  * HOW TO?
  
    javascript最近蓬勃发展，测试框架不下10几种，但不外乎就是should,expect
  
    JQuery&#8217;s QUnit &#8211; http://docs.jquery.com/QUnit
  
    Mocha &#8211; http://visionmedia.github.com/mocha/
  
    Jasmine &#8211; http://pivotal.github.com/jasmine/
  
    js-test-driver &#8211; http://code.google.com/p/js-test-driver/
  
    YUI Test &#8211; http://yuilibrary.com/projects/yuitest/
  
    Sinon.JS &#8211; http://sinonjs.org/
  
    Comparison
  
    QUnit
  
    Jasmine
  
    Mocha
  
    A JavaScript Unit Testing framework. QUnit is a powerful, easy-to-use JavaScript unit testing framework. It&#8217;s used by the jQuery, jQuery UI and jQuery Mobile projects and is capable of testing any generic JavaScript code.
  
    Features:
  
    &#8211; Similar to server-side frameworks(JUnit, Nunit)
  
    &#8211; Built by the jQuery team
  
    &#8211; Used to test jQuery&#8217;s features
  
    &#8211; No dependencies
  
    &#8211; Can test server-side JavaScript
  
    Jasmine is a behavior-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests.
  
    Since describe and it blocks are functions, they can contain any executable code necessary to implement the test. JavaScript scoping rules apply, so variables declared in a describe are available to any it block inside the suite.
  
    Features:
  
    &#8211; Open Source Framework
  
    &#8211; Behavior Driven Development framework
  
    &#8211; Supports both client-side and server-side testing
  
    Behavior Driven Development:
  
    Write a failing acceptance test <&#8211;> Write a failing unit test <&#8211;> Write code to pass the test
  
    Mocha is a feature-rich JavaScript test framework running on node and the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.
  
    Features:
  
    &#8211; Open Source Framework
  
    &#8211; Started in Node
  
    &#8211; Supports both client-side and server-side testing
  
    &#8211; Supports both BDD and TDD style tests
  
    &#8211; Supports both command line and browser
  
    &#8211; Supports any JavaScript assertion library (YUI Port, expect.js, should.js, jshould.js, assert.js, chai.js)
  
    &#8211; Supports asynchronous testing
  
    &#8211; Requires an assertion library