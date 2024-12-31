// 상수 객체
const animal = {
  type: "고양이",
  name: "소주",
  color: "cheese",
};

// 새로운 객체 할당시 에러
// animal = { a: 1 }; // TypeError: Assignment to constant variable.

// 객체 내부 프로퍼티 변경은 가능
animal.age = 4;
animal.name = "맥주";
delete animal.color;

// console.log(animal);

// 메서드 -> 값이 함수인 프로퍼티
const person = {
  name: "강준기",
  sayHi: function () {
    console.log("안녕하세요.");
  },
  // 메서드 선언
  sayHi2() {
    console.log("ㅎㅇ");
  },
};
person.sayHi2();
person["sayHi"]();
