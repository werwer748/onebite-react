// Spread 연산자

// 1. 배열의 전개
let arr1 = Array.from({ length: 3 }, (_, i) => i + 1);
// let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6];

//* Spread 적용!
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2);

// 2. 객체의 전개
let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  // a: obj1.a,
  // b: obj1.b,
  //* Spread 적용!
  ...obj1,
  c: 3,
  d: 4,
};

console.log(obj2);

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1);

console.log("====================================");

// Rest 매개변수
// ...rest의 다음으로는 매개변수가 올 수 없다.
// function funcB(one, ...rest, jj) {
function funcB(one, ...rest) {
  console.log(rest); // [2, 3]
  console.log(one); // 1
}
funcB(...arr1);
