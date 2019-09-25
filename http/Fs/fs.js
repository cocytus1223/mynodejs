// 文件系统 fs—— file system
// 异步 vs 同步
// 异步：多个操作可以同时进行，前一次的操作没完成，后一次也能开始
// 同步：一次一个操作

const fs = require('fs');

// readfile(文件名，回调函数) 异步操作
// fs.readFile('aaa.txt', function (err,data) {
//   if (err) {
//     console.log('读取失败');
//   } else {
//     console.log(data.toString());
//   }
// });

// writeFile(文件名，内容，回调函数)
fs.writeFile('bbb.txt','safagagag',function(err){
  console.log(err);
});
