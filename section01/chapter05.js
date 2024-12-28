// 1. Number Type
let num1 = 27;
let num2 = 3.14;
let num3 = -10;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);

//? 양의 무한대
let inf = Infinity;
//? 음의 무한대
let mInf = -Infinity;

let nan = NaN; // Not a Number
console.log(1 * "hello"); // 에러가 뜨는 연산을 시켜도 프로그램이 종료되지는 않음

// 2. String Type
// let myName = 강준기; // 스트링은 따옴표로 감싸줘야 함
let myName = "강준기";
// 스트링의 덧셈연산
let myHometown = "진주";
let introduce = myName + " " + myHometown;
console.log(introduce);

// 백틱(`)을 사용한 문자열 표현
let backtickIntroduce = `${myName}입니다. ${myHometown}에서 왔습니다.`;
console.log(backtickIntroduce);

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type(값이 없음을 의도적으로 명시할 때 사용)
let empty = null;

// 5. Undefined Type(값이 할당되지 않았을 때 혹은 존재하지 않는 값을 가져오려고 할 때 자동으로 할당되는 값)
let none;
console.log(none);
