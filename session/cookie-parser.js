const express = require('express');
const cookieParser = require('cookie-parser');
// cookie-encrtpter

var server = express();

server.use(cookieParser('wafagaga'));

// cookie 存在浏览器 4K 不安全
// 签名、加密
server.use('/', function (req, res) {
  req.secret = 'wafagaga';
  res.cookie('user', 'zzc', {
    // path: '/aaa',
    // maxAge: 30 * 24 * 3600 * 1000,
    signed: true
  });

  console.log('无签名cookie', req.cookies);
  console.log('签名cookie', req.signedCookies);

  // res.clearCookie('user');  删除cookie

  res.send('OK');
});
server.listen(8080);