var express = require('express');
var router = express.Router();
var model = require('../model/mulpangDao');
var MyUtil = require('../utils/myutil');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.redirect('/today');
});

// 오늘 메뉴
router.get('/today', function(req, res, next){
  model.couponList(function(list){
    res.render('today', { title: '오늘의 쿠폰', list: list });
  });
});

// 쿠폰 상세 조회
// : 으로 정의하는 것은 변수로 받아들임
router.get('/coupons/:_id', function(req, res, next){
  var _id = req.params._id;
  model.couponDetail(_id, function(coupon){
    res.render('detail', { title: coupon.couponName, coupon, toStar: MyUtil.toStar });
  });
});

// 구매하기 화면
router.get('/purchase/:_id', function(req, res, next){
  var _id = req.params._id;
  model.buyCouponForm(_id, function(coupon){
    res.render('buy', { title: coupon.couponName, coupon });
  });
});

// 쿠폰 구매 요청
router.post('/purchase', function(req, res, next){
  model.buyCoupon(req.body, function(err, result){
    if(err) {
      res.json({errors: err});
    } else {
      res.end('success'); 
    }
  });
});

router.get('/*.html', function(req, res, next) {
  var url = req.url.substring(1, req.url.indexOf('.html'));
  res.render(url, { title: '오늘은 뭘파니?' });
});

module.exports = router;
