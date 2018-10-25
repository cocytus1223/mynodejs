const urlLib = require('url');

var obj = urlLib.parse('http://www.baidu.com/index?a=12&b=5',true);

console.log(obj.pathname,obj.query);

// Url {
//   protocol: 'http:',
//   slashes: true,
//   auth: null,
//   host: 'www.baidu.com',
//   port: null,
//   hostname: 'www.baidu.com',
//   hash: null,
//   search: '?a=12&b=5',
//   query: 'a=12&b=5',
//   pathname: '/index',
//   path: '/index?a=12&b=5',
//   href: 'http://www.baidu.com/index?a=12&b=5' }