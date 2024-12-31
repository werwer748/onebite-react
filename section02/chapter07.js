// 배열의 6가지 요소 조작 메서드

// 1. push() : 배열의 끝에 요소 추가
let arr = [1, 2, 3];

const newLength = arr.push(4, 5, 6, 7); // 요소가 추가된 배열 길이를 반환
console.log(arr); // [1, 2, 3, 4, 5, 6, 7]
console.log(newLength); // 7
console.log("====================================");

// 2. pop() : 배열의 마지막 요소 제거하고 반환
let arr2 = [1, 2, 3];
const ppoppedItem = arr2.pop(); // 마지막 요소를 제거하고 반환
console.log(arr2); // [1, 2]
console.log(ppoppedItem); // 3
console.log("====================================");

// 3. shift() : 배열의 첫번째 요소 제거하고 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift(); // 첫번째 요소를 제거하고 반환
console.log(shiftedItem, arr3); // 1 [2, 3]
console.log("====================================");

// 4. unshift() : 배열의 앞에 요소 추가
let arr4 = [1, 2, 3];
let newLength2 = arr4.unshift(0, 4, 5); // 배열의 앞에 요소 추가하고 길이를 반환
console.log(arr4); // [0, 4, 5, 1, 2, 3]
console.log(newLength2); // 6

// 5. slice: 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5);
let sliced2 = arr5.slice(2); // 두번째 인자를 생략하면 끝까지 자른다.
let sliced3 = arr5.slice(-3); // 음수를 사용하면 뒤에서부터 세어서 자른다.
console.log(sliced); // [3, 4, 5]
console.log(sliced2); // [3, 4, 5]
console.log(sliced3); // [3, 4, 5]
console.log(arr5); // [1, 2, 3, 4, 5] - 원본 유지

console.log("====================================");

// 6. concat: 배열을 합쳐서 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr); // [1, 2, 3, 4]
