---
layout: post
title: "db/mongo/command-list"
date: 2016-04-14 00:14:51 +0800
comments: true
categories: database, mongodb, command
---

MongoDB commands
==============


1. insert - insert `a object` or `a object array` to collection.

	**command:**
	<pre>db.getCollection('collectionName').insert(object);</pre>
	
	**example:**
	<pre>
    db.collection.insert(object);
    db.collection.insert([object]);
    var MAXNUMBER = 1000000;
    var items = [];
    for (var i = 0; i < MAXNUMBER; i++){
	    var item = {id: i, value: Math.random() * 100 + 1}
	    items.push(item);
    }
    db.getCollection('blog').insert(items);
	</pre>

2. remove
	- remove all data
	<pre>
	db.collection.remove({});
	</pre>

	- remove data by conditions
	<pre>
	db.collection.remove({id: {$lg: 3} });
	</pre>
	- drop a collection
	<pre>
	db.collection.drop();
	</pre>
3. update

	**command**
	<pre>db.getCollection('collectionName').update({condition}, {object});</pre>

	**examples**
	- doc replace
	<pre>
	var oldItem = db.blog.findOne({"id": 0}); //note: findOne, not find or find().limit(1)
	oldItem.bit = {id: oldItem.id, value: oldItem.value};
	delete oldItem._id;
	delete oldItem.id;
	delete oldItem.value;
	db.getCollection('blog').update({id: 0}, oldItem);
	db.blog.findOne({"bit.id": 0});
	</pre>
	- update values
		- using updaters
			1. $inc - 数值修改器，支持整数和浮点数，对于数据类型，无法操作
			
				**command**
				<pre>{'$inc': {fieldName: increament value}}</pre>

				**example**
				<pre>
				var item = db.getCollection('blog').findOne({'bit.id': 200});
				print(item);
				
				//upper
				db.getCollection('blog').update({'bit.id': 200}, {'$inc': {'bit.id': 1}});
				db.getCollection('blog').find({'bit.id': 201});

				//downner
				db.getCollection('blog').update({'bit.id': 201}, {'$inc':{'bit.id': -1}})
				db.getCollection('blog').find({'bit.id': 200});

				db.getCollection('blog').update({'bit.id': 200}, {'$inc':{'bit.id': -.5}})
				db.getCollection('blog').find({'bit.id': 199.5})
				</pre>

			2. $set - 根据key设置值修改器， 如果key不存在，就新建并且赋值

				**comman**
				<pre>{'$set': {key: value}}</pre>
				**example**
				<pre>
				//修改值
				db.getCollection('blog').update({'bit.id': 199.5}, {'$set':{'bit.id': -.5}});
				db.getCollection('blog').find({'bit.id': -.5});
				
				//添加新的key和相应的值
				db.getCollection('blog').update({'bit.id': -.5}, {'$set':{'bit.foo': .5}})；
				db.getCollection('blog').find({'bit.foo': .5})
				
				//修改值的类型
				db.getCollection('blog').update({'bit.foo': .5}, {'$set':{'bit.foo': [.1, .2, .5]}});
				db.getCollection('blog').find({'bit.foo': [.1, .2, .5]});
				</pre>
			3. $push/$ne/$pop/$pull/$each/$addToSet - 数组修改器

				**command**
				<pre>
				//$push会把key对应的value放在以key为键的数组中
				//如果key不存在，就新建，否则在存在的键对应的数组里，把value追加到数组的最后面
				{'$push': {key: value}}
				//数组中的某个key不包含value值的
				{key: {'$ne': value}}
				//把value添加到以key为键的数组中，并做重复判断
				{'$addToSet': {key: value}}

				//将多条记录遍历并不重复的插入数组
				{'$addToSet': {key: {'$each': [objects]}}}

				//从数组的尾部或者头部删除一个对象
				{'$pop': {key: 1}}
				{'$pop': {key: -1}}
				</pre>
				

				**example**
				<pre>
				db.getCollection('blog').insert({
				    title: 'a post title',
				    content: 'a good post',
				    name: 'Jim'
				});

				//add first comment
				db.getCollection('blog').update(
				    {
				        title: 'a post title'
				    }, 
				    {
				        '$push': {
				        'comments': {
				            name: 'Joe', 
				            content: 'no good'
				        }}
				    }
				);
				//add second comment
				db.getCollection('blog').update(
				    {
				        title: 'a post title'
				    }, 
				    {
				        '$push': {
				        'comments': {
				            name: 'Joe2', 
				            content: 'no good2'
				        }}
				    }
				);
				</pre>

				<pre>
				//因为coments数组的第一个元素的content确实包含‘no good’这个值，所以结果应该是0
				db.getCollection('blog').find({'comments.content': {'$ne': 'no good'}});
				
				</pre>

				<pre>
				//$addToSet和$push不同，它在将对象存入数组的时候，会进行重复性检查
				//对于数组中不能有重复元素的情形，比较适合，当然效率肯定比$push差一些
				db.getCollection('blog').update(
				    {
				        title: 'a post title'
				    }, 
				    {
				        '$addToSet': {
				                'comments': {
				                        name: 'Joe',
				                        content: 'no good'
				                }
				        }
				    }
				);
				</pre>

				<pre>
				db.getCollection('blog')
				    .update(
				        {
				            title: 'a post title'
				        },
				        {
				            '$addToSet': {
				                comments: {
				                        '$each': [
				                            {name: 'lee', content: 'good'},
				                            {name: 'less', content: 'good'},
				                            {name: 'lee', content: 'bye'},
				                            {name: 'lee', content: 'good'}
				                        ]
				                    
				                    }
				             }
				        }
				)
				</pre>
				<pre>
				//从头部删除一个元素
				db.getCollection('blog').update({}, {'$pop': {comments: -1}});
				//从尾部删除一个元素
				db.getCollection('blog').update({}, {'$pop': {comments: 1}});
				</pre>
4. find
5. check BSON size

	Object.bsonsize(object);//Current Max size is 16MB
