// Date 객체와 날짜

// 1. Date 객체를 생성
let date1 = new Date(); // 생성자
console.log(date1); // 현재 시간

// let date2 = new Date("1997/01/07/10:11:12"); // 특정 날짜로 생성 -, /, . 등으로 사용할 수 있다.
let date2 = new Date(1997, 1, 7, 23, 59, 59);
console.log(date2);

console.log("====================================");

// 2. 타임 스탬프
// 1970년 1월 1일 00:00:00(UTC: 협정 세계시)를 기준으로 경과한 밀리초
//? getTime(): UTC를 기준으로 현재 시간까지 경과한 밀리초를 반환
let ts1 = date1.getTime();
console.log(ts1);
// timestamp를 Date 객체로 변환
let date4 = new Date(ts1);
console.log(date4);

console.log("====================================");

// 3. 시간 요소들을 추출
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 0부터 시작하므로 +1
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let second = date1.getSeconds();

console.log(year, month, date, hour, minute, second);

console.log("====================================");

// 4. 시간 수정하기
date1.setFullYear(2024);
date1.setMonth(11); // 0: 1월 ~ 11: 12월
date1.setDate(30); // 31을 넘어가면 다음달로 넘어간다.
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);
console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // 요일, 월, 일, 년
console.log(date1.toLocaleString()); // 현지화
