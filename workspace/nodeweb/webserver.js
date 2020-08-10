var http = require('http');
var fs = require('fs');
var path = require('path');
// var mime = require('./mimetypes');
var mime = require('mime');

var home = path.join(__dirname, 'design');

var server = http.createServer(function(req, res){
  console.log(req.method, req.url, req.httpVersion);
  console.log(req.headers);

  var filename = req.url.substring(1);
  
  if (filename == '') {
    filename = 'today.html';
  }

  var mimeType = mime.getType(filename);

  // 비동기 방식
  fs.readFile(path.join(home, filename), function(err, data) {
    if(err) {
      console.error(err.message);
      res.writeHead(404, {'Content-Type':'text/html;charset=utf-8'});
      res.end('<h1>' + filename + ' Not found!!!</h1>');
    } else {
      res.writeHead(200, {'Content-Type': mimeType + ';charset=utf-8'});
      res.end(data);
    }
  });

  // 동기 방식
  // try {
  //   // __dirname : 현재 파일 절대경로
  //   var data = fs.readFileSync(path.join(home, filename));
  //   res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
  //   // res.end('<h1>Hello HTTP Server</h1>');
  //   res.end(data);
  // } catch(err) {
  //   res.writeHead(404, {'Content-Type':'text/html;charset=utf-8'});
  //   res.end('<h1>' + filename + ' Not found!!!</h1>');
  // }

});

server.listen(80, function(){
  console.log('HTTP 서버 구동 완료.');
})