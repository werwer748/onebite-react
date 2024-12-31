function funcA() {
  console.log("funcA");
}

// 함수를 호출하지않고 함수를 변수에 할당
let varA = funcA;
console.log(varA); // [Function: funcA]
varA(); // funcA

// 선언과 동시에 함수를 변수에 저장 -> 함수 표현식
// let varB = function funcB() {
// 어차피 함수명으로 호출 못해서 함수명을 없애고 변수에 저장 -> 익명함수
// 이 때 함수는 값으로 취급되어 변수에 할당되었으므로 변수 선언전에 호출 불가능 -> 호이스팅의 대상이되지 않는다.
let varB = function () {
  console.log("funcB");
};
// funcB(); //! ReferenceError: funcB is not defined
varB(); // funcB

console.log("====================================");

// 화살표 함수
// let varC = () => {
//   return 1;
// };

//? 중괄호와 return을 생략할 수 있다.
let varC = (value) => value + 1;

console.log(varC(10));
