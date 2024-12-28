// 1. 변수
let age; // 변수 선언
console.log(age);

age = 30;
console.log(age);
// let age = 30; // 같은 이름의 변수를 두 번 선언할 수 없음

// 2. 상수
const birth = "1993.05.07"; // 상수는 무조건 초기화를 해야 함
// birth = "1993.05.08"; // 상수는 값을 변경할 수 없음
console.log(birth);

// 3. 변수 명명 규칙(네이밍 규칙)

// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
// let 1name; //! 에러
let _2name;
let n2ame;
let name2;

// 3-3. 예약어는 사용할 수 없다.
// let let; //! 에러

// 4. 변수 명명 가이드
// 누가봐도 이해할 수 있는 이름으로 명명하자
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
