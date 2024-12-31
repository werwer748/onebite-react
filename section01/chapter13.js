// 콜백함수 -> 자신이 아닌 다른 함수에 인수로써 전달된 함수
function main(value) {
  console.log("main:::", value);
  value(); // 원하는 타이밍에 실행시킬 수 있음
  console.log("main:::end");
}

// function sub() {
//   console.log("I am sub");
// }
//? 이 떄 sub함수가 콜백함수
// 실행되지 않고 인자로 전달되고 실행은 main함수에서 이루어진다. -> 콜백함수
// main(sub);

// 응용
// main(function() {
//   console.log("I am sub");
// });
main(() => {
  console.log("I am sub");
});
console.log("====================================");

//* 활용
//? 구조가 비슷한 코드를 몇가지 값이 바뀐다고 해서 함수를 여러개 만들어야 하는가?
// function repeat(count) {
//   for (let idx = 1; idx < count; idx++) {
//     console.log("반복문:::", idx);
//   }
// }

// function repeatDouble(count) {
//   for (let idx = 1; idx < count; idx++) {
//     console.log("반복문2:::", idx * 2);
//   }
// }

// repeat(5);
// repeatDouble(5);

//? 콜백함수를 활용하여 중복 해결하기
function repeat(count, callback) {
  for (let idx = 1; idx < count; idx++) {
    callback(idx);
  }
}

repeat(5, function (idx) {
  console.log(idx);
});

repeat(5, function (idx) {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  console.log(idx * 3);
});
