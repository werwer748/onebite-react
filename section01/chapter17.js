// 배열 -> 여러개의 값을 순차적으로 담을 수 있는 자료구조

// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴

let arrC = [1, 2, 3, true, "hello", undefined, null, [], {}];
// console.log(arrC);

// 2. 배열 요소 접근
let item1 = arrC[0]; // 배열의 요소 순서를 인덱스(index)라고 부른다.
let item2 = arrC[1];
console.log(item1, item2);

// 3. 배열 요소 수정
arrC[0] = "fhfhfhfhf";
console.log(arrC);
