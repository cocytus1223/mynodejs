// npm install express

const express = require('express');

// express保留了原生的功能，添加了一些方法，增强原有的功能
// 依赖于中间件

// 1.创建服务
var server = express();

// 2. 监听
server.listen(8080);

// 3. 处理请求
// server.use('/a.html', function(req, res) {
//   res.send('abc');
//   res.end();
// });

// 3种接收用户请求的方法
// .get('/',function(req,res){});
// .post('/',function(req,res){});
// .use('/',function(req,res){});   post、get请求都可以

// server.get('/', function(){
//   console.log('有GET');
// });

// server.post('/', function(){
//   console.log('有POST');
// });

// server.use('/', function(){
//   console.log('use');
// });

