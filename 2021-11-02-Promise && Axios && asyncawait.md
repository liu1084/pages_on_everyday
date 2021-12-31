## Promise && Axios && async/await

[]: https://www.kancloud.cn/yunye/axios/234845
[]: https://github.com/axios/axios#browser



-   Promise

1.  异步和同步

    同步和异步指的是消息通信机制（同步消息/异步消息）。

    同步：就是调用某个方法（函数）后，调用方得等待这个方法（函数）返回结果才继续往后执行代码；

    异步：与同步不同，调用方不会立即得到结果，但继续执行后续代码。调用后等被调用者通过状态来通知调用者，或者被调用方执行了调用者的回调函数（callback）。

    比如： 你去商城买东西，你看上了一款手机，能和店家说你一个这款手机，他就去仓库拿货，你得在店里等着，不能离开，这叫做同步。现在你买手机赶时髦直接去京东下单，下单完成后你就可用做其他时间（追剧、打王者、lol）等货到了去签收就ok了.这就叫异步。 

2.  阻塞和非阻塞

    阻塞是调用函数的线程的状态被挂起，等待被调用者执行完成后线程被唤醒继续执行后续代码；

    非阻塞是调用函数的线程的状态不会被挂起，继续执行其他代码。

3.  什么是Promise？

    你是一名歌手，会唱歌，会每隔一段时间出一套专辑。（生产者）

    你的fans，喜欢你，爱听你的歌。（消费者）

    Promise是你出专辑的计划书（时间，歌名。。）

    也就是你对你的fans做出了一定的承诺，在某个时间段，我会发布新专辑，会通知你的粉丝。。。

    这样，你在那个时间段是否完成了专辑出品，你都需要通知你的fans，即使录音棚烧毁了，你也会通知他们，每个人都很开心，他们也不会催促你，也不担心错过歌单里面的歌。

    用法：

    ```javascript
    let task = (resolve, reject) => {
        //出歌了
        let mySongs = ['素颜', '处处吻'];
        resolve(mySongs);
        //录音棚烧毁了
        let reason = '太火了';
        reject(reason);
    }
    let promise = new Promise(task);
    
    //即关注成功，也关注失败，最后从头再来
    //成功，失败只会运行其中之一，finally总会执行
    promise.then(
    	(data) => {
            //成功发型的时候
        },
        (fail) => {
            //烧毁录音棚的时候，通知歌迷
        }
    ).fianlly(
    	() => {
            //从头再来
        }
    )
    
    
    //只关注成功的时候
    promise.then((data) => {
        console.log(data);
    });
    
    //只关注失败的时候
    promise.catch((error) => {
        console.log(error);
    });
    
    //或者链式写法
    promise
        .then ((success) => {
        
    	})
        .catch((fail) => {
        
    	})
        .finally ((cleaner) => {
        
    	});
    ```

4.  Promise的特殊用法

    ```javascript
    //串行执行异步操作，而不用层层套用callback
    let task1 = new Promise();
    let task2 = new Promise();
    let task3 = new Promise();
    task1
        .then(task2)
        .then(task3)
        .catch((error) => {
        
    });
    
    //并行执行异步操作
    let getUserInfo = new Promise();
    let getFriends = new Promise();
    
    Promise.all([getUserInfo, getFriends]).then((result) => {
        //用户信息已获取
        //用户朋友列表已获取
        //继续执行其他任务
    });
    
    //容错
    let getUserInfo1 = new Promise();
    let getUserInfo2 = new Promise();
    Promise.race([getUserInfo1, getUserInfo2]).then((info) => {
        //getUserInfo1和getUserInfo2哪个先执行完，第二个结果丢弃。
        //显示用户信息
    })
    ```

5.  总结

    promise最大的好处就是将代码的执行和结果进行了分离，并且可以做链式继续处理。

    Promise是一个将“生产者代码”和“消费者代码”连接在一起的特殊的javascript对象。用我们的类比来说：这就像是“订阅列表”。即：“生产者代码”花费她所需的任意长度时间来产出所承诺的结果，而承诺一旦准备好时，将结果向所有订阅了列表的”消费者代码“开放，以供他们。

6.  Promise的构造器 

    ```javascript
        let callbackOnSuccess = (data) => {
            //获取模板
            let source = $("#entry-template").html();
            //编译模板
            let template = Handlebars.compile(source);
            //添加上下文数据
            let context = {
                "cities": data
            };
            //根据数据和模板，生成html
            let html = template(context);
            //将生产的html插入到result
            $("#result").html(html);
            //console.log(data);
        };
    
        let callbackOnError = (err) => {
            console.error(err);
        };
    
    
    	let executor = (resolve, reject) => {
            let url = 'http://localhost:8080/api/v2/city/617b93310a0307007902e481';
            let data = {};
    
            $.ajax({
                method: 'get',
                url: url,
                data: data,
                success: (data) => {
                    return resolve(data);
                },
                error: (err) => {
                    return reject(err);
                }
            });
    
        };
    
        let promise = new Promise(executor);
    
        promise.then((data) => {
            console.log(data);
            callbackOnSuccess(data);
        });
    
        promise.catch((err) => {
            console.log(err.statusText);
            callbackOnError(err);
        });
    
    
    
    ```

    ```html
    <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" id="dialog1">
            打开删除对话框
        </button>
    
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">您确认删除吗？</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div>这个用户关联了一个家庭，删除用户以后家庭将没有管理员...</div>
                        <button class="btn btn-danger">删除</button>
                        <button class="btn btn-secondary">取消</button>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    ```

    ```javascript
    <script src="node_modules/jquery/dist/jquery.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        $(function () {
            let myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
                keyboard: false,
                backdrop: 'static',
                focus: true,
            });
    
            $('#dialog1').on('click', (e) => {
                e.preventDefault();
                myModal.show();
            });
        });
    </script>
    ```




-   async/await

    [segmentFault]: https://segmentfault.com/a/1190000007535316

    async和await一般用法：成对出现在需要异步请求的方法签名和返回结果处。

    async用来修饰一个函数，标识一个函数是一个异步函数，并且返回的一定是一个Promise；
    而await标识一个表达式的结果或者一个ajax请求的结果（Promise对象）；

    用法1：

    ```javascript
    let baseUrl = 'http://localhost:8080';
    async function getCities() {
        let url = baseUrl + '/api/v2/city/cities'
        return await axios.get(url);
    }
    
    let promise = getCities();
    promise.then((data) => {
        console.log(data);
    }).catch((error) =>  {
        console.log(error);
    });
    ```

    在用法1中，get请求函数getCities在签名时标识这个方法是一个异步请求，使用await等待ajax的返回。然后采用.then()和.catch()分别对正常返回和错误进行逻辑处理。

    但是，这种用法和去掉async/await没有任何区别，返回的结果都一样。

    ```javascript
    let baseUrl = 'http://localhost:8080';
    function getCities() {
        let url = baseUrl + '/api/v2/city/cities'
        return axios.get(url);
    }
    
    let promise = getCities();
    promise.then((data) => {
        console.log(data);
    }).catch((error) =>  {
        console.log(error);
    });
    ```

    因为：aysnc/await主要用来优化.then()调用链的。

    所以：单一的 Promise 链并不能发现 async/await 的优势，但是，如果需要处理由多个 Promise 组成的 then 链的时候，优势就能体现出来了（很有意思，Promise 通过 then 链来解决多层回调的问题，现在又用 async/await 来进一步优化它）。

    

    在如下场景中，async/await的优势就体现出来了。

     假设一个业务，分多个步骤完成，每个步骤都是异步的，而且依赖于上一个步骤的结果。我们仍然用 `setTimeout` 来模拟异步操作： 

    ```javascript
    /**
     * 传入参数 n，表示这个函数执行的时间（毫秒）
     * 执行的结果是 n + 200，这个值将用于下一步骤
     */
    function takeLongTime(n) {
        return new Promise(resolve => {
            setTimeout(() => resolve(n + 200), n);
        });
    }
    
    function step1(n) {
        console.log(`step1 with ${n}`);
        return takeLongTime(n);
    }
    
    function step2(n) {
        console.log(`step2 with ${n}`);
        return takeLongTime(n);
    }
    
    function step3(n) {
        console.log(`step3 with ${n}`);
        return takeLongTime(n);
    }
    ```

    使用promise方式实现这3个步骤：

    ```javascript
    function doIt() {
        console.time("doIt");
        const time1 = 300;
        step1(time1)
            .then(time2 => step2(time2))
            .then(time3 => step3(time3))
            .then(result => {
                console.log(`result is ${result}`);
                console.timeEnd("doIt");
            });
    }
    
    doIt();
    ```

     如果用 async/await 来实现呢，会是这样 

    ```javascript
    async function doIt() {
        console.time("doIt");
        const time1 = 300;
        const time2 = await step1(time1);
        const time3 = await step2(time2);
        const result = await step3(time3);
        console.log(`result is ${result}`);
        console.timeEnd("doIt");
    }	
    doIt();
    ```
    
-   总结promis和async/await

    1.  promise用来解决传统callback嵌套太深的问题；

    2.  async/await解决promise的.then()链太长的问题；

        


-   Axios

    axios是一个基于Promise的HTTP请求的客户端标准库。支持很多特性，而且封装的比较好。

    axios的特性：

    -   从浏览器中创建 [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
    -   从 node.js 创建 [http](http://nodejs.org/api/http.html) 请求
    -   支持 [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
-   拦截请求和响应
    
    -   转换请求数据和响应数据
-   取消请求
    
    -   自动转换 JSON 数据
-   客户端支持防御 [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery)
    
    无论是在浏览器端还是node.js服务器端使用axios，首先需要安装axios库：
    
```shell
    npm i --save axios
```


​    
​    浏览器端：
​    
    ```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    ```
    
    服务器端：
    
    ```javascript
    let axios = require('axios').default;
    
    let baseUrl = 'http://localhost:8080';
    let promise = null;
    ```


​    
​    
```javascript
1.  GET请求

//根据ID获取城市
let getCityById = async (id) => {
    try {
            let url = `${baseUrl}/api/v2/city/${id}`;
            return await axios.get(url);
    } catch (e) {
            console.log(e);
    }
};

//获取所有城市
let getCities = async () => {
    let url = baseUrl + '/api/v2/city/cities'
    return axios.get(url);
}
                

2.  POST请求

//新建城市
let createNewCity = async (city) => {
    try {
        let url = baseUrl + '/api/v2/city';
        return await axios({
            method: 'post',
            url: url,
        	data: city,
            headers: {
                'authorization': 'Bearer YOUR_JWT_TOKEN_HERE'
            },
        });
    } catch (e) {
        console.log(e);
    }
};

3.  PUT请求


//根据ID更新城市
let updateCityById = async (id, city) => {
    let c = await getCityById(id);
    if (c) {
        let url = `${baseUrl}/api/v2/city/${id}`;
        return await axios({
        url: url,
            method: 'put',
            data: city,
            headers: {
                'authorization': 'Bearer YOUR_JWT_TOKEN_HERE'
            }
        });
    }
};

4.  DELETE请求


//根据ID删除城市
let deleteCityById = async () => {
    let url = `${baseUrl}/api/v2/city`;
    let city = {name: 'Japan Tokyo', population: 3000};
    let result = await createNewCity(city);
    await getCities();
    let {id} = result.data;
    await getCityById(id);
    console.log(id);
    city.population = 33_000;
    await updateCityById(id, city);
    let ids = [];
    ids.push(id);
    try {
        if (ids.length > 0) {
            return await axios({
                url: url,
                method: 'delete',
                data: ids,
                headers: {
                    'authorization': 'Bearer YOUR_JWT_TOKEN_HERE'
                }
            });
        }
    }catch (e) {
        console.log(e);
}
};
```


​    
```javascript
promise = deleteCityById();
promise.then((resp) => {
    console.log(resp.data);
}).catch((err) => {
    console.log(err);
});

5.   执行多个并发请求 

axios.all([
 axios.get('https://api.github.com/users/abc');
 axios.get('https://api.github.com/users/abc/repos')
])
.then(axios.spread(function (userResponse, reposResponse) {
  console.log('User', userResponse.data);
  console.log('Repositories', reposResponse.data);
}));


6.  axios的请求配置

//这些是创建请求时可以用的配置选项。只有 `url` 是必需的。如果没有指定 `method`，请求将默认使用 `get` 方法。 
{
  // `url` 是用于请求的服务器 URL
  url: '/user',

  // `method` 是创建请求时使用的方法
  method: 'get', // 默认是 get

  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: 'https://some-domain.com/api/',

  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  transformRequest: [function (data) {
    // 对 data 进行任意转换处理

    return data;
  }],

  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [function (data) {
    // 对 data 进行任意转换处理

    return data;
  }],

  // `headers` 是即将被发送的自定义请求头
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` 是即将与请求一起发送的 URL 参数
  // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
  params: {
    ID: 12345
  },

  // `paramsSerializer` 是一个负责 `params` 序列化的函数
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function(params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // `data` 是作为请求主体被发送的数据
  // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
  // 在没有设置 `transformRequest` 时，必须是以下类型之一：
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属：FormData, File, Blob
  // - Node 专属： Stream
  data: {
    firstName: 'Fred'
  },

  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  // 如果请求话费了超过 `timeout` 的时间，请求将被中断
  timeout: 1000,

  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: false, // 默认的

  // `adapter` 允许自定义处理请求，以使测试更轻松
  // 返回一个 promise 并应用一个有效的响应 (查阅 [response docs](#response-api)).
  adapter: function (config) {
    /* ... */
  },

  // `auth` 表示应该使用 HTTP 基础验证，并提供凭据
  // 这将设置一个 `Authorization` 头，覆写掉现有的任意使用 `headers` 设置的自定义 `Authorization`头
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // 默认的

  // `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
  xsrfCookieName: 'XSRF-TOKEN', // default

  // `xsrfHeaderName` 是承载 xsrf token 的值的 HTTP 头的名称
  xsrfHeaderName: 'X-XSRF-TOKEN', // 默认的

  // `onUploadProgress` 允许为上传处理进度事件
  onUploadProgress: function (progressEvent) {
    // 对原生进度事件的处理
  },

  // `onDownloadProgress` 允许为下载处理进度事件
  onDownloadProgress: function (progressEvent) {
    // 对原生进度事件的处理
  },

  // `maxContentLength` 定义允许的响应内容的最大尺寸
  maxContentLength: 2000,

  // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
  validateStatus: function (status) {
    return status >= 200 && status < 300; // 默认的
  },

  // `maxRedirects` 定义在 node.js 中 follow 的最大重定向数目
  // 如果设置为0，将不会 follow 任何重定向
  maxRedirects: 5, // 默认的

  // `httpAgent` 和 `httpsAgent` 分别在 node.js 中用于定义在执行 http 和 https 时使用的自定义代理。允许像这样配置选项：
  // `keepAlive` 默认没有启用
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // 'proxy' 定义代理服务器的主机名称和端口
  // `auth` 表示 HTTP 基础验证应当用于连接代理，并提供凭据
  // 这将会设置一个 `Proxy-Authorization` 头，覆写掉已有的通过使用 `header` 设置的自定义 `Proxy-Authorization` 头。
  proxy: {
    host: '127.0.0.1',
    port: 9000,
    auth: : {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // `cancelToken` 指定用于取消请求的 cancel token
  // （查看后面的 Cancellation 这节了解更多）
  cancelToken: new CancelToken(function (cancel) {
  })
}


7.  响应


{
  // `data` 由服务器提供的响应
  data: {},

  // `status` 来自服务器响应的 HTTP 状态码
  status: 200,

  // `statusText` 来自服务器响应的 HTTP 状态信息
  statusText: 'OK',

  // `headers` 服务器响应的头
  headers: {},

  // `config` 是为请求提供的配置信息
  config: {}
}


8.  请求和响应的拦截器

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

```


​    
