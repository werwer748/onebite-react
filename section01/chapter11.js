// 함수 선언
function greeting() {
  console.log("Hi");
}

// 함수 호출
// greeting(); // Hi

/**
 * 호이스팅
 * 함수 실행 이후에 선언된 함수를 먼저 실행할 수 있다.
 */
getArea(120, 20);

// 매개변수 받기
function getArea(width, height) {
  // let width = 10;
  // let height = 20;
  let area = width * height;

  // 함수안에서 함수 선언하고 호출
  function another() {
    // 중첩함수
    console.log("Another");
  }
  another();

  // console.log(area);
  // 반환값(결과값) 던지고 함수 종료
  return area;
  // console.log("Hello"); // 실행 안됨
}
getArea(10, 30); // 인수 전달
let area1 = getArea(20, 40);
console.log(area1);
