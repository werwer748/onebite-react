// 단락평가
// 단락평가는 논리연산자를 사용하여 코드를 단축하는 방법이다.

function returnFalse() {
  console.log("returnFalse() 호출");
  return false;
}

function returnTrue() {
  console.log("returnTrue() 호출");
  return true;
}

//* AND
// returnFalse()가 false이기 때문에 returnTrue()는 실행되지 않는다. -> 단락평가 작동
console.log(returnFalse() && returnTrue());
// 첫번쨰 피연산자가 true이기 때문에 두번째 피연산자도 확인해야 한다. -> 단락평가 작동하지 않음
console.log(returnTrue() && returnFalse());

//* OR
// returnTrue()가 true이기 때문에 returnFalse()는 실행되지 않는다. -> 단락평가 작동
console.log(returnTrue() || returnFalse());

console.log("====================================");

// Truthy & Falsy
function returnFalsy() {
  console.log("returnFalsy() 호출");
  return "";
}

function returnTruthy() {
  console.log("returnTruthy() 호출");
  return "hello";
}
console.log(returnFalsy() && returnTrue()); // ""
console.log(returnTruthy() && returnFalse()); // false -> 단락평가가 작동하지 않으면 boolean 값이 나온다.

console.log(returnFalsy() || returnTrue()); // true -> 단락평가가 작동하지 않으면 boolean 값이 나온다.
console.log(returnTruthy() || returnFalse()); // "hello"

console.log("====================================");

// 단락평가를 활용 사례
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName(); // undefined
printName({ name: "John" }); // John
