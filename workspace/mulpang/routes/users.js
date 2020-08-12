var express = require('express');
var router = express.Router();

// 회원 가입 화면
router.get('/new', function(req, res, next) {
  res.render('join', {title: '회원 가입', js: 'join.js'});
});
// 프로필 이미지 업로드
router.post('/profileUpload', function(req, res, next) {
  res.end('tmpfile.png');   // 임시 파일명 응답
});
// 회원 가입 요청
router.post('/new', function(req, res, next) {
  res.end('success');
});
// 간편 로그인
router.post('/simpleLogin', function(req, res, next) {
  res.json({_id: 'uzoolove@gmail.com', profileImage: 'uzoolove@gmail.com'});
});
// 로그아웃
router.get('/logout', function(req, res, next) {
  res.redirect('/');
});
// 로그인 화면
router.get('/login', function(req, res, next) {
  res.render('login', {title: '로그인'});
});
// 로그인
router.post('/login', function(req, res, next) {
  res.redirect('/');
});
// 마이 페이지
router.get('/', function(req, res, next) {
  res.render('mypage', {title: '마이페이지', css: 'mypage.css', js: 'mypage.js'});
});
// 회원 정보 수정
router.put('/', function(req, res, next) {
  res.end('success');
});
// 구매 후기 등록
router.post('/epilogue', function(req, res, next) {
  res.end('success');
});
module.exports = router;
