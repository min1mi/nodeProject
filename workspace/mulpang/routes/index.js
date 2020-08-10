var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/*.html', function(req, res, next) {
  var url = req.url.substring(1, req.url.indexOf('.html'));
  res.render(url, { title: '오늘은 뭘파니?' });
});

module.exports = router;
