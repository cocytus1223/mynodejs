const express = require('express');
const bodyParser = require('body-parser');

var server = express();
server.listen(8080);

server.use(bodyParser.urlencoded({
  extended: false, //扩展模式,true开启
  limit: 2 * 1024 * 1024 //限制2M 默认100K
}));

server.use('/', function (req, res) {
  console.log(req.body);
});

// req.query GET 无需中间件
// req.body POST 需要body-parser中间件 server.use(bodyParser.urlencoded({}))