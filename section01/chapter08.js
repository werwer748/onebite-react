// 1. null 병합 연산자 (??)
// -> 존재하는 값을 추려내는 기능
// -> null 또는 undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
console.log(var4); // 10

let var5 = var1 ?? var3;
console.log(var5); // 20

let var6 = var2 ?? var3;
console.log(var6); // 10 -> var2가 null 또는 undefined가 아니기 때문에 var2의 값을 반환

// let userName = "hugo";
let userName;
let userNickName = "werwer748";

let displayName = userName ?? userNickName; // null 또는 undefined가 아닌 값을 찾아 반환
console.log(displayName);

console.log("================================");

// 2. typeof 연산자
// -> 변수의 데이터 타입을 문자열로 반환하는 연산자

let var7 = 1;
var7 = "hello";

let t1 = typeof var7;
console.log(t1); // string

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자

let var8 = 10;

let res = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(res);

console.log(this);

function thisTest() {
  const a = 1;
  console.log(this.a);
  function thisTest2() {
    console.log(this.a);
  }
  thisTest2().bind(this);
}
thisTest();

// const arrowThisTest = () => {
//   console.log(this);
// };
// arrowThisTest();
