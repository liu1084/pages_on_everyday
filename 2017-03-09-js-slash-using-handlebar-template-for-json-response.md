---
layout: post
title: "js/Using Handlebar Template For JSON Response"
date: 2017-03-09 09:35:15 +0800
comments: true
categories: 
---

“Handlebars” is JavaScript library library for templating in client side.
It is really good for JSON data templating rendering.
You can get more details from the below [link](http://handlebarsjs.com/)

In this Demo, “We will see how to to templating in JSON data response and render it in HTML”.
In this demo we have used bootstrap.css file for styling the rendered student table. 
{{…}} is used for templating.{{#each}}..{{/each}} for iterating array of students.
The Demo has the following structure:-

For this demo we have created a JSON file(studentData.json) which have Student data details.This JSON file we are accessing  in JQuery Ajax GET method.

```json
{
    "students": [

        {
            "name": "sandeep1",
            "mark": 35,
            "subject": "Geography"
        },

        {
            "name": "sangeeta",
            "mark": 135,
            "subject": "English"
        },

        {
            "name": "surabhi",
            "mark": 315,
            "subject": "History"
        },

        {
            "name": "sumanta",
            "mark": 305,
            "subject": "Mathematics"
        },

        {
            "name": "Ram",
            "mark": 352,
            "subject": "History"
        },

        {
            "name": "John",
            "mark": 350,
            "subject": "Geography"
        },

        {
            "name": "Jack",
            "mark": 355,
            "subject": "English"
        }
    ]}

 ```

The Handlebar template for displaying above data in table will have the below code.Here we are  using each loop for iterating table row. For every iteration ‘this’ refers to an student object for that iteration no.Every property in each object can be accessed by a dot operator(.).

```handlebars

<!--Handlebar templates start-->
<script id="student-template" type="text/x-handlebars-template">
    <table class="table table-striped">
        <thead>
        <tr>
            <th>Name</th>
            <th>Mark</th>
            <th>Subject</th>
        </tr>
        </thead>
        <tbody>
        {{#each students}}
        <tr>
            <td>{{ this.name }}</td>
            <td>{{ this.mark }}</td>
            <td>{{ this.subject }}</td>
        </tr>
        {{/each}}
        </tbody>
    </table>
</script>

<!--Handlebar templates end-->
```

The JavaScript code for accessing data and compiling the HTML template is as below in (my-script.js)


```JavaScript

var STUDENT_METHOD ={

        handlerData:function(resJSON){

            var templateSource   = $("#student-template").html(),

                template = Handlebars.compile(templateSource),

                studentHTML = template(resJSON);

           $('#my-container').html(studentHTML);
            
        },
        loadStudentData : function(){

            $.ajax({
                url:"http://localhost:63342/HandleBarDemo/data/studentData.json",
                method:'get',
                success:this.handlerData

            })
        }
};

$(document).ready(function(){

    STUDENT_METHOD.loadStudentData();
});

```

The HTML markup for this demo(handlebar-template-test.html) is as below,

```html
<!DOCTYPE html>
<html>
<head>
    <title>HandleBar Templating </title>
    <link rel="stylesheet" href="css/bootstrap.css">
    <style>
        #my-container{
            width: 400px;
            border: 1px solid grey;
        }
     </style>
</head>
    <body>
        <div id="my-container" class="table-responsive">
        </div>
        <!--Handlebar templates start-->
        <script id="student-template" type="text/x-handlebars-template">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Mark</th>
                    <th>Subject</th>
                </tr>
                </thead>
                <tbody>
                {{#each students}}
                <tr>
                    <td>{{ this.name }}</td>
                    <td>{{ this.mark }}</td>
                    <td>{{ this.subject }}</td>
                </tr>
                {{/each}}
                </tbody>
            </table>
        </script>
        <!--Handlebar templates end-->
        <script src="lib/jquery-1.10.2.min.js"></script>
        <script src="lib/handlebars.js"></script>
        <script src="js/my-script.js"></script>
    </body>
</html>

```