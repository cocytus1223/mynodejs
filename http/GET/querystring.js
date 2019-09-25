const querystring = require('querystring');

var json = querystring.parse('user=123&pass=12345&age=18');
console.log(json);