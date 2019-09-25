// 数据请求
// 前台=>form、ajax、jsonp
// 后台=>一样

// 前台 <-> 后台 
// http交互

// 请求方式
// GET 数据在url中
// POST 数据不在url中
const http = require('http');

http.createServer(function(req,res){
  var GET={};
  if (req.url.indexOf('?') != -1) {
    var arr = req.url.split('?');
    // arr[0]->地址
    // arr[1]->数据
    var arr2 = arr[1].split('&');
    // arr[2]->['user=123','pass=12345']
  
    for(var i = 0; i < arr2.length ; i++) {
      var arr3 = arr2[i].split('=');
      // arr3[0]->名字
      // arr3[1]->数据
         GET[arr3[0]]=arr3[1];
    }
  } else {
    var url = req.url;
  }

  console.log(url, GET);
  // req获取前台的请求数据
  res.write('aaa');
  res.end();
}).listen(8080);