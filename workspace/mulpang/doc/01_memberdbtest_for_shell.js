const { ObjectID, ObjectId } = require("mongodb");

// 현재 DB 삭제
db.runCommand({dropDatabase: 1});

// 등록할 회원 정보
var m1 = {name: "kim", age: 20};
var m2 = {name: "lee", age: 20};
var m3 = {name: "admin", age: 35};

// TODO 1. member 컬렉션에 데이터 등록
// insertOne({등록할 문서}), insertMany([{등록할 문서}, {등록할 문서}])
db.member.insertOne(m1);
db.member.insertMany([m2,m3]);


// TODO 2. member 컬렉션 조회
// find()
db.member.find();

// TODO 3. 회원 조회(나이가 20인 회원 조회)
// find({검색조건})
db.member.find({age: 20});

// name이 admin 회원 조회
db.member.find({name: 'admin'});

// name이 lee이고 age가 20인 회원 조회
db.member.find({name: 'lee', age: 20});

// age가 35이상인 회원 조회
db.member.find({age: {$gte: 35}}); // $gt : 초과, $lt : 미만, $gte : 이상

// TODO 4. 회원 조회(1건)
// findOne()
db.member.findOne();
db.member.findOne({name: 'lee'});
db.member.findOne({age: 20});
db.member.findOne({_id: ObjectId('5f31e596d77df3404a7f83dd')});
db.member.findOne({_id: new ObjectId('5f31e596d77df3404a7f83dd')});

// TODO 5. 회원 수정(kim의 나이 수정)
// 지정한 문서 전체를 수정
// update({검색조건}, {수정할 문서})
db.member.update({name: 'kim'}, {age: 21});

// 지정한 속성만 수정할 경우
// updateOne({검색조건}, {수정할 문서}), $set 사용
db.member.updateOne({name: 'lee'}, {$set: {age: 21}});

// 지정한 속성을 증가시킬 경우, $inc 사용
db.member.updateOne({name: 'lee'}, {$inc: {age: 1}});

// TODO 6. lee 삭제
// deleteOne({검색 조건})
db.member.deleteOne({name: 'lee'});














