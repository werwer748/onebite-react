/**
 * 원시타입과 객체타입
 * 원시타입은 값 자체로써 변수에 저장되고 복사된다. => 불변값(메모리값 수정 X)
 * 객체타입은 참조값이 변수에 저장되고 복사된다. => 가변값(메모리값 수정 O)
 */

// 얕은 복사와 깊은 복사
let o1 = { name: "kim", score: [1, 2] };
let o2 = o1;
let o3 = Object.assign({}, o1);

// 같은 참조값을 가기기 때문에 o2의 name을 바꾸면 o1의 name도 바뀐다.
o1.name = "lee";
console.log(o2.name); // lee
o1.score.push(3);
console.log(o2.score); // [1, 2, 3]

// 깊은 복사를 하면 참조값이 다른 새로운 객체가 생성된다.
// 따라서, name을 변경해도 o1, o2 객체의 name은 바뀌지 않는다.
console.log(o3);
// 하지만, score는 같은 참조값을 가지기 때문에 o1, o3 객체의 score는 바뀐다.
//? let o3 = Object.assign({}, { ...o1, score: [...o1.score] }); // 이렇게 해야 내부에 있는 배열도 깊은 복사가 된다.
o3.score.push(4);
console.log(o1.score); // [1, 2, 3]

console.log(o1 === o2); // true
console.log(o1 === o3); // false
console.log(JSON.stringify(o1) === JSON.stringify(o3)); // true
