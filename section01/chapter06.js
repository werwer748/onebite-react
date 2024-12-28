// 1. 묵적적 형 변환
// -> 자바스크립트 엔진이 자동으로 형 변환을 해주는 것
let num = 10;
let str = "20";

const result = num + str;
// 하나의 변수 타입만 바꿔서 에러없이 계산이 된다면 묵시적 형 변환이 일어난다.
console.log(result); // 1020 -> num이 문자열로 변환되어 더해짐

// 2. 명시적 형 변환
// -> 개발자가 내장함수 등을 이용해서 직접 형 변환을 명시
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1); // 20

let str2 = "10개";
let strToNum2 = Number(str2);
console.log(strToNum2); // NaN
let strToNum3 = parseInt(str2); // 숫자만 추출해서 변환 - 숫자앞에 글자가 있을 경우 에러가 발생하기도 한다.
console.log(strToNum3); // 10

let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다");
