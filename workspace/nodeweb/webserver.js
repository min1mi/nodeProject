var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function(req, res){
  console.log(req.method, req.url, req.httpVersion);
  console.log(req.headers);

  var filename = req.url.substring(1);
  
  // __dirname : 현재 파일 절대경로
  var data = fs.readFileSync(path.join(__dirname, filename));


  res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
  // res.end('<h1>Hello HTTP Server</h1>');
  res.end(data);
});

server.listen(80, function(){
  console.log('HTTP 서버 구동 완료.');
})