const http = require('http');

// request 请求 输入-请求的信息
// response 响应 输出-输出的东西
var server = http.createServer(function (req, res) {
  switch(req.url){
    case '/1.html':
      res.write('111111');
      break;
    case '/2.html':
      res.write('2222');
      break;
    default:
      res.write('404');
      break;
  }

  res.end();
});

// 监听端口
server.listen(8080);