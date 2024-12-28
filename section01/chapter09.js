// 1. if 조건문 (if문)
let num = 3;

if (num === 10) {
  console.log("num은 10입니다.");
  console.log("조건이 참입니당~");
} else if (num >= 5) {
  console.log("num은 5 이상입니다.");
} else if (num >= 3) {
  console.log("num은 3 이상입니다.");
} else {
  console.log("조건이 거짓입니당~");
}

// 2. switch 조건문 (switch문)
// switch문은 if문과 비슷하지만, 다양한 조건을 한번에 비교할 수 있다.
let animal = "bird";

switch (animal) {
  case "cat": {
    console.log("고양이");
    break; // break를 사용하지 않으면 다음 case문이 전부 실행된다.
  }
  case "dog": {
    console.log("강아지");
    break;
  }
  case "bear": {
    console.log("곰");
    break;
  }
  case "snake": {
    console.log("뱀");
    break;
  }
  case "tiger": {
    console.log("호랑이");
    break;
  }
  default: {
    console.log("모르는 동물이에요.");
    // break;
  }
}
