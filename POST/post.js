// POST数据接收：POST数据比GET大得多
// POST很大——分段发送
// data 一段数据到达
// end 全部到达

const http = require('http');
const querystring = require('querystring');

http.createServer(function (req, res) {

  var i = 0;
  var str = ''; //接收数据

  // data——有一段数据到达的时候就会执行一次
  req.on('data', function (data) {
    console.log('第${i++}次收到数据');
    str += data;
  });
  // end——数据全部到达，只执行一次
  req.on('end', function () {
    var POST = querystring.parse(str);
  });
}).listen(8080);