# 怎样自定义并使用websocket子协议?

由于Websocket协议提供的是一个基于包的可靠传输协议，它并不像HTTP那样是个应用协议，它的包对内容并不像HTTP那样有Content-Type字段去描述，是一个比较底层的协议，就和TCP一样，如果要用来通信通常需要自己来定一个协议。那么subprotocol就可以作为一个标示来让服务端和客户端之间进行协商用。

客户端在进行连接的时候可以声明自己能接受的子协议类型。这和HTTP请求头里带的Accept和Accept-Encoding头字段一样，说明自己你可以接受那些类型文件，或者编码，通常是压缩类型   

```text
Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Accept-Encoding:gzip, deflate, sdch
```



HTTP的请求里带的这样，向server端说明它能理解哪些类型的数据。

然后和HTTP一样，Server会根据合适的头来返回相应的内容。 然后客户单就知道怎么样去解释响应的数据了。一下是subprotocol的例子：

```text
请求：
Sec-WebSocket-Protocol:jsonrpc,protocol2
Sec-WebSocket-Version:13
Upgrade:websocket

响应:
Connection:Upgrade
Sec-WebSocket-Accept:lWc5qBYvZLWjFVzUOegIyRDnSG0=
Sec-Websocket-Protocol:jsonrpc
Upgrade:websocket
```

服务端告诉客户端它选择了jsonrpc这个格式，然后后面的数据，客户端就知道怎么样去解释响应的数据了。

和HTTP的这些协商头一样。 那么具体怎么设计这个自协议和自己实现一个交互协议是一样的。Websocket支持两类的数据包格式，一个是文本的，一个是Binary的。通常比较简单的做法就可以直接返回json，然后客户端去做相应的解释。也可以使用二进制。比如可以自己去定义数据格式。或者很多使用像protobuf和thrift这样的二进制格式。

具体怎么设计也要看你的使用场景。因为Websocket不一定使用在浏览器这个场景。这个时候格式的选择可以灵活些。但是如果你的协议要支持在浏览器中使用。那么你也要考虑在浏览器下你的格式是否能方便的解析。协议设计其实比较复杂要看场景，比如像TCP这样的协议在底层就考虑了很多的关于可靠性方面的优化。不过websocket本身就是个可靠的协议，它也是全双工的，如果要在这之上实现RPC的功能，那么你要考虑的问题就更多了。真想要自己设计的话，可以去参考各种标准协议的设计。