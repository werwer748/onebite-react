// 5가지 배열 변형 메서드

// 1. filter: 배열을 순회하면서 콜백함수를 만족하는 요소만 모아서 새로운 배열로 반환
let arr1 = [
  {
    name: "apple",
    color: "red",
  },
  {
    name: "banana",
    color: "yellow",
  },
  {
    name: "strawberry",
    color: "red",
  },
];

const redFruit = arr1.filter((item) => {
  return item.color === "red";
});
console.log(redFruit); // [{name: "apple", color: "red"}]

console.log("====================================");

// 2. map: 배열을 순회하면서 콜백함수를 실행하고, 그 결과를 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx) => {
  console.log(idx, item);
  return item * 2;
});
console.log(mapResult1); // [2, 4, 6]

let names = arr1.map((item) => item.name);
console.log(names); // ["apple", "banana", "strawberry"]

console.log("====================================");

// 3. sort: 배열을 정렬
let arr3 = ["b", "a", "c"];
arr3.sort();
console.log(arr3); // ["a", "b", "c"]
let arr4 = [10, 3, 5];
arr4.sort();
console.log(arr4); // [10, 3, 5] - 문자열로 변환하여 정렬(사전순정렬)이 적용되서 원하는 결과가 나오지 않음

// 비교기준을 콜백함수로 지정할 수 있다.
//? 오름차순
arr4.sort((a, b) => {
  if (a > b) {
    // b가 a보다 앞에 있어야 한다면 양수를 반환
    return 1;
  } else if (a < b) {
    // a가 b보다 앞에 있어야 한다면 음수를 반환
    return -1;
  } else {
    // 두 값이 같다면 자리를 바꿀 필요가 없으므로 0을 반환
    return 0;
  }
});
console.log(arr4); // [3, 5, 10]

//? 내림차순
arr4.sort((a, b) => {
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  } else {
    return 0;
  }
});
console.log(arr4);

console.log("====================================");

// 4. toSorted: sort와 비슷하지만 원본 배열을 변형하지 않고 정렬된 새로운 배열을 반환 - 최근 추가된 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();
console.log(arr5); // ["c", "a", "b"]
console.log(sorted); // ["a", "b", "c"]

console.log("====================================");

// 5. join: 배열의 요소를 연결한 문자열을 반환
let arr6 = ["My", "name", "is", "Jin"];
const joined = arr6.join();
console.log(joined); // "My,name,is,Jin"
const joined2 = arr6.join(" ");
console.log(joined2); // "My name is Jin"
