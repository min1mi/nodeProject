var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json()); // req.body에 저장
app.use(express.urlencoded({ extended: false })); // req.body에 저장
app.use(cookieParser()); // req.cookies에 저장
app.use(express.static(path.join(__dirname, 'public'))); // 정적인 컨텐츠를 찾아서 리턴

app.use(logger('dev'));

// session 미들웨어를 거치는 순간 req에 session항목이 생김.
app.use(session({
  cookie: {maxAge: 1000*60},
  secret: 'some text',
  rolling: true, // 매 요청마다 세션 갱신 여부
  resave: false, // 세션이 수정되지 않으면 서버에 다시 저장할 필요가 없으므로 다시 저장하지 않음
  saveUninitialized: false // 세션에 아무 값도 없으면 클라이언트에 전송 안함
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
// next : 다음 미들웨어 호출
app.use(function(req, res, next) {
  next(createError(404,   req.url + ' Not Found!!'));
});

// error handler
app.use(function(err, req, res, next) {
  console.error(err.stack);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
