// 5가지 요소 순회 및 탐색 메서드

// 1. forEach: 배열의 요소를 하나씩 순회하며 콜백 함수 실행
let arr1 = [1, 2, 3];

// arr1.forEach(function (item, idx, arr) {
//   console.log(idx, item * 2, arr);
// });

let doubledArr = [];
arr1.forEach((item, idx, arr) => {
  doubledArr.push(item * 2);
});

console.log(doubledArr); // [2, 4, 6]

console.log("====================================");

// 2. includes: 배열에 특정 요소가 포함되어 있는지 확인
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
console.log(isInclude); // true
let isInclude2 = arr2.includes(10);
console.log(isInclude2); // false

console.log("====================================");

// 3. indexOf: 배열에 특정 요소가 몇 번째 인덱스에 있는지 확인
let arr3 = [1, 2, 3];
let idx = arr3.indexOf(2);
console.log(idx); // 1
let arr3_1 = Array(3).fill(2);
let idx_2 = arr3_1.indexOf(2);
// 같은 값이 여러개 있을 경우 가장 앞에 있는 인덱스를 반환
console.log(idx_2); // 0
let idx_3 = arr3_1.indexOf(2, 1);
// 두번째 인자로 탐색이 시작되는 인덱스를 지정할 수 있다.
console.log(idx_3); // 1
let idx_4 = arr3_1.indexOf(30);
// 없는 값은 -1을 반환
console.log(idx_4); // -1

console.log("====================================");

// 4. findIndex: 배열을 순회하면서 콜백함수를 만족하는 요소의 인덱스를 반환
let arr4 = [1, 2, 3];
let findedIndex = arr4.findIndex((item, idx, arr) => {
  return item === 2;
});
console.log(findedIndex);

let findedIndex2 = arr4.findIndex((item) => item % 2 !== 0);
console.log(findedIndex2);

// 값을 못찾으면 -1을 반환
let findedIndex3 = arr4.findIndex((item) => item === 100);
console.log(findedIndex3);

console.log("====================================");

// indexOf와 findIndex의 차이점
// indexOf는 기본적으로 얕은 비교를 한다. findIndex는 콜백함수를 통해 비교를 한다.
let objArr = [{ name: "Lee" }, { name: "Kim" }, { name: "Park" }];

console.log("indexOf", objArr.indexOf({ name: "Kim" })); // 찾지못함
console.log(
  "findIndex",
  objArr.findIndex((obj) => obj.name === "Kim")
); // name 프로퍼티를 비교하여 찾음

console.log("====================================");

// 5. find: 배열을 순회하면서 콜백함수를 만족하는 요소를 반환
let arr5 = [{ name: "Lee" }, { name: "Kim" }, { name: "Park" }];
let findedItem = arr5.find((item) => item.name === "Kim");
console.log(findedItem); // { name: 'Kim' } - 찾은 요소를 반환
