var http = require('http'); //http模块创建web服务器

http.createServer(function (request, response) { //匿名回调函数，参数是请求，响应
  response.writeHead(200, {'Content-Type': 'text/plain'});//响应的状态码
  response.end('Hello World\n'); //返回的内容
}).listen(8124);//监听8124端口

console.log('Server running at http://127.0.0.1:8124/');

