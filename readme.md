## new FormDate()

表示表单数据的键值对 key/value 的构造方式，并且可以轻松的将数据通过XMLHttpRequest.send() 方法发送出去，如果送出时的编码类型被设为 "multipart/form-data"，它会使用和表单一样的格式。

[参考文件](https://developer.mozilla.org/zh-CN/docs/Web/API/FormData): https://developer.mozilla.org/zh-CN/docs/Web/API/FormData

## jquery ajax

- contentType
    类型：String

    默认值: "application/x-www-form-urlencoded"。发送信息至服务器时内容编码类型。

    默认值适合大多数情况。如果你明确地传递了一个 content-type 给 $.ajax() 那么它必定会发送给服务器（即使没有数据要发送）。

默认情况下，Ajax 请求使用 GET 方法。如果要使用 POST 方法，可以设定 type 参数值。这个选项也会影响 data 选项中的内容如何发送到服务器。
data 选项既可以包含一个查询字符串，比如 key1=value1&key2=value2 ，也可以是一个映射，比如 {key1: 'value1', key2: 'value2'} 。如果使用了后者的形式，则数据再发送器会被转换成查询字符串。这个处理过程也可以通过设置 processData 选项为 false 来回避。如果我们希望发送一个 XML 对象给服务器时，这种处理可能并不合适。并且在这种情况下，我们也应当改变 contentType 选项的值，用其他合适的 MIME 类型来取代默认的 application/x-www-form-urlencoded 。

- processData
    类型：Boolean

    默认值: true。默认情况下，通过data选项传递进来的数据，如果是一个对象(技术上讲只要不是字符串)，都会处理转化成一个查询字符串，以配合默认内容类型 "application/x-www-form-urlencoded"。如果要发送 DOM 树信息或其它不希望转换的信息，请设置为 false。

## multer 中间件

[参考资料](https://www.npmjs.com/package/multer): https://www.npmjs.com/package/multer


## 浏览器处理url机制

在浏览器中输入一个url发生了哪些事情？

    1、浏览器搜索自身的DNS缓存

    2、搜索操作系统自身的DNS缓存（浏览器没有找到缓存或缓存已经失效）

    3、读取本地的HOST文件

    4、浏览器发起一个DNS的系统调用

    5、浏览器获得域名对应的IP地址后，发起HTTP“三次握手”，建立TCP/IP 连接

    6、TCP/IP 连接建立起来后，浏览器就可以向服务器发送 HTTP 请求了，比如说：用 HTTP 的 GET 方法请求一个根域里的域名，协议可以采用 HTTP 1.0 的一个协议

    7、服务器端接受到了这个请求，根据路径参数，经过后端的一些处理之后，把处理后的一个结果的数据返回给浏览器，也就是服务器端会把完整的HTML页面代码返回给浏览器

    8、浏览器拿到了完整的HTML页面代码，在解析和渲染这个页面的时候，里面的JS、CSS、图片静态资源，他们同样也是一个个 HTTP 请求，都需要经过上面的主要的七个步骤

    9、浏览器根据拿到的资源对页面进行渲染，最终把一个完整的页面呈现给用户

