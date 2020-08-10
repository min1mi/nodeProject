var path = require('path');

// JSON(JavaScript Object Notation)
// 객체를 만들 때, {속성명: 속성값1, 속성명2: 속성값2, ...}
// 배열을 만들 때, [요소값1, 요소값2, ...]
var mime = {
  html: 'text/html',
  css: 'text/css',
  js: 'application/javascript',
  gif: 'image/gif',
  jpg: 'image/jpg',
  png: 'image/png',
  svg: 'image/svg+xml',
  ico: 'image/x-icon',
  ttf: 'application/x-font-ttf',
  woff: 'application/x-font-woff'
  // ... 
};

function getMime(url) {
  // today.html -> text/html
  // layout.css -> text/css
  var extname = path.extname(url).substring(1);
  return mime[extname];
}

// require()의 리턴값
module.exports = {
  getType: getMime
};