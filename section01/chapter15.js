// 객체
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴

let person = {
  // 객체의 속성(property)
  // key: value
  name: "강준기",
  age: 33,
  hobby: "잠자기",
  method: () => {},
  10: "10",
  "like cat": true,
};

// 프로퍼티 다루기

//* 프로퍼티 접근하기
// 점 표기법
let name = person.name; // "강준기"
console.log(name);
// name = person.name2; // undefined

// 괄호 표기법
let age = person["age"]; // 33
// console.log(age);
let property = "hobby";
let hobby = person[property]; // "잠자기"
console.log(hobby);

//* 프로퍼티 추가하기
person.job = "Full-stack developer";
person["hometown"] = "Jinju";
// console.log(person);

//* 프로퍼티 수정하기
person.job = "backend developer";
person["like cat"] = false;
// console.log(person);

//* 프로퍼티 삭제하기
delete person.job;
delete person["hometown"];
console.log(person);

//* 프로퍼티 존재 여부 확인하기 (in 연산자)
let result1 = "name" in person;
console.log(result1);
let result2 = "job" in person;
console.log(result2);
