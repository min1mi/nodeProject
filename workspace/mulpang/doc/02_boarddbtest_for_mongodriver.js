var MongoClient = require('mongodb').MongoClient;
var clog = require('clog');
var util = require('util');

clog.configure({'log level': 5});
//{'log': true, 'info': true, 'warn': true, 'error': true, 'debug': true}

/* clog 로그 레벨별 출력 메세지
switch(logLevel){
	default:
	case 5:
	"debug";
	case 4:
	"error";
	case 3:
	"warn";
	case 2:
	"info";
	case 1:
	"log";
	break;
}
*/

var db;
// DB 접속


// 등록할 게시물
var b1 = {no: 1, name: "admin", title: "[공지]게시판 사용규칙 안내입니다.", content: "잘 쓰세요."};
var b2 = {no: 2, name: "kim", title: "첫번째 글을 올리네요.", content: "잘 보이나요?"};
var b3 = {no: 3, name: "lee", title: "그렇다면 두번째 글은...", content: "잘 보이겠죠?"};

// 로그 메세지 출력
function myLog(str, result){
	clog.info(str);
	clog.debug(util.inspect(result) + "\n");
}

// TODO 1. board 컬렉션에 데이터 등록
// insertOne({등록할 문서}), insertMany([{등록할 문서}, {등록할 문서}])
function todo1(){
	
}

// TODO 2. 모든 board 데이터의 모든 속성 조회
// find()
function todo2(){
	
}

// TODO 3. 데이터 조회(kim이 작성한 게시물 조회)
// find({검색조건})
function todo3(){
	
}

// TODO 4. 모든 board 데이터의 작성자 속성만 조회(_id 포함)
// find({검색조건}, {projection: {출력컬럼}})
function todo4(){
	
}

// TODO 5. kim이 작성한 게시물의 제목 조회(_id 미포함)
// find({검색조건}, {projection: {출력컬럼}})
function todo5(){
	
}

// TODO 6. 첫번째 게시물 조회(1건)
// findOne()
function todo6(){
	
}

// TODO 7. 게시물 조회(lee가 작성한 데이터 1건 조회)
// findOne({검색조건})
function todo7(){
	
}

// TODO 8. 게시물 수정(3번 게시물의 내용 수정)
// updateOne({검색조건}, {수정할 문서})
function todo8(){
	
}

// 전체 게시물을 조회하여 지정한 문자열을 출력하고
// next 함수를 호출한다.
function list(str, next){
	db.board.find().toArray(function(err, result){
		myLog(str, result);
		if(next){
			next();
		}
	});
}

// TODO 9. 1번 게시물에 댓글 추가
function todo9(){
	var comment = {
    name: '이영희',
    content: '퍼가요~~~'
  };
  
}

// TODO 10. 2번 게시물 삭제
// deleteOne({검색 조건})
function todo10(){
	
}






































