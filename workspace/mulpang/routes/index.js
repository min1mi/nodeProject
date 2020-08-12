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
    res.render('today', { title: '오늘의 쿠폰', css : 'today.css', list: list });
  });
});

// 쿠폰 상세 조회
// : 으로 정의하는 것은 변수로 받아들임
router.get('/coupons/:_id', function(req, res, next){
  var _id = req.params._id;
  model.couponDetail(req.app.get('io'), _id, function(coupon){
    res.render('detail', { title: coupon.couponName, css: 'detail.css', js: 'detail.js', coupon, toStar: MyUtil.toStar });
  });
});

// 구매하기 화면
router.get('/purchase/:_id', function(req, res, next){
  var _id = req.params._id;
  model.buyCouponForm(_id, function(coupon){
    res.render('buy', { title: coupon.couponName, css: 'detail.css', js: 'buy.js', coupon });
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

// 근처 메뉴
router.get('/location', function(req, res, next){
  model.couponList(function(list){
    res.render('location', {title: '근처 쿠폰', css: 'location.css', js: 'location.js', list});
  })
});
// 추천 메뉴
router.get('/best', function(req, res, next){
  res.render('best', {title: '추천 쿠폰', css: 'best.css', js: 'best.js'});
});
// top5 쿠폰 조회
router.get('/topCoupon', function(req, res, next){
  model.topCoupon(req.query.condition, function(list) {
    res.json(list);
  });
});
// 모두 메뉴
router.get('/all', function(req, res, next){
  res.render('all', {title: '모든 쿠폰', css: 'all.css'});
});
// 쿠폰 남은 수량 조회
router.get('/couponQuantity', function(req, res, next){
  res.end('success');
});

module.exports = router;
