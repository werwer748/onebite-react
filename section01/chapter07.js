// 1. 대입 연산자 (=)
let x = 10;

// 2. 산술 연산자 (+, -, *, /, %)
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = 1 + 2 * 10; // 연산자 우선 순위: *, / > +, -
console.log(num6); // 21
let num6_1 = (1 + 2) * 10; // 연산자 우선 순위를 바꾸고 싶을 때는 괄호를 사용
console.log(num6_1); // 30

// 3. 복합 대입 연산자
let num7 = 10;
num7 += 20; // num7 = num7 + 20;
console.log(num7); // 30
num7 -= 20; // num7 = num7 - 20;
console.log(num7); // 10
num7 *= 2; // num7 = num7 * 2;
num7 /= 2; // num7 = num7 / 2;
num7 %= 2; // num7 = num7 % 2;

console.log("================================");
// 4. 증감 연산자 (++, --)
let num8 = 10;
console.log(++num8); // 11 - 전위 연산: 먼저 증가를 하고 값을 반환
console.log(num8++); // 11 - 후위 연산: 먼저 값을 반환하고 그 다음에 증가
console.log(num8); // 12
console.log(--num8); // 11
console.log(num8--); // 11
console.log(num8); // 10

console.log("================================");

// 5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;
console.log(or, and, not); // true false false

console.log("================================");

//6. 비교 연산자 (==, ===, !=, !==, >, <, >=, <=)
let comp1 = 1 === 2; // ===: 값과 타입이 모두 같은지 비교, ==: 값만 비교
let comp2 = 1 !== 2;
console.log(comp1, comp2); // false true

let comp3 = 2 > 1;
let comp4 = 2 < 1;
console.log(comp3, comp4); // true false

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
console.log(comp5, comp6); // true true
