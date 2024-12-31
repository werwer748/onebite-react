// 스코프
// -> 전역 스코프 / 지역 스코프

// 전역 스코프
let a = 1; // 어디서나 접근 가능

function funcA() {
  // 지역 스코프
  let b = 2; // funcA 내부에서만 접근 가능
  console.log(a);

  //? 함수선언식은 함수 내부에서 선언되면 지역 스코프가 적용된다.
  function funcB() {
    console.log(b);
  }
}

funcA();
// console.log(b); //! ReferenceError: b is not defined
// funcB(); //! ReferenceError: funcB is not defined

//? {} 블록 내부에서 선언된 변수는 블록 밖에서 접근 불가능 -> 블록 스코프
if (true) {
  // 지역 스코프
  let c = 3; // if문 내부에서만 접근 가능
  function funcB() {
    console.log(c);
  }
}
for (let i = 0; i < 10; i++) {
  // 이 떄 i도 for문 내의 지역 소코프가 적용되어서 for문 밖에서는 접근 불가능
  // 지역 스코프
  let d = i; // for문 내부에서만 접근 가능
}

//? 함수 선언식은 함수 내부에서 선언되면 지역 스코프가 적용되지만
//? 지금처럼 if문이나 for문 내부에서 선언된 함수는 전역 스코프가 적용된다.
funcB();
