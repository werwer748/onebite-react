// Truthy & Falsy
// JS의 모든 값은 Truthy 하거나 Falsy 하다.

// Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
// 0n은 BigInt 타입이다.
let f7 = 0n;

if (!f1) {
  console.log("falsy");
}

// Truthy한 값
// -> 7가지 Falsy한 값을 제외한 나머지 값들은 모두 Truthy하다.
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t5) {
  console.log("truthy");
}

// 활용사례
function printName(person) {
  // 조건문이 굉장히 복잡해진다.
  // if (person === undefined || person === null) {
  if (!person) {
    console.log("person이 없습니다.");
    return;
  }
  console.log(person.name);
}

let person = { name: "John" };
// let person = null;
printName(person);
