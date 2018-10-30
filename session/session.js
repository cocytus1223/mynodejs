const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

var server = express();

// session 存在服务器
// 不能独立存在 基于cookie

var arr = [];

for (var i = 0; i < 100000; i++) {
  arr.push('slg' + Math.random());
}

server.use(cookieParser());
server.use(cookieSession({
  name: 'sess',
  keys: arr, // 循环使用加密
  maxAge: 2 * 3600 * 1000
}));

server.use('/', function (req, res) {
  if (req.session['count'] == null) {
    req.session['count'] = 1;
  } else {
    req.session['count']++;
  }
  console.log(req.session['count']);
  res.send('OK');
});
server.listen(8080);