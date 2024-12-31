//* 배열 순회
let arr = [1, 2, 3];

// 1. 배열 인덱스
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
let arr2 = Array.from({ length: 5 }, (_, i) => i + 4);
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}
console.log("====================================");

// 2. for...of: 오직 배열을 순회할 때만 사용 가능
for (let item of arr) {
  console.log(item);
}

console.log("====================================");

//* 객체 순회
let person = {
  name: "hamo",
  age: 20,
  hobby: "swimming",
};

// 1. Object.keys 사용
let keys = Object.keys(person);
// console.log(keys);
for (let i = 0; i < keys.length; i++) {
  let key = keys[i];
  console.log(`${key}:::`, person[key]);
}
for (let key of keys) {
  console.log(`${key}:::`, person[key]);
}

console.log("====================================");

// 2. Object.values 사용
let values = Object.values(person);
console.log(values);
for (let value of values) {
  console.log(value);
}

console.log("====================================");
// 3. for...in: 오직 객체의 key를 순회할 때 사용
for (let key in person) {
  const value = person[key];
  console.log(`${key}:::`, value);
}
