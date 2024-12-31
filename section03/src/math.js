// math 모듈

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

//? package.json 파일에 "type": "module" 추가되면 CJS 모듈 시스템을 사용할 수 없음
//* CJS: Common JS 모듈 시스템을 이용해 모듈을 정의
// module.exports = {
//   add,
//   sub,
// };

//* ESM: ES6 모듈 시스템을 이용해 모듈을 정의
export { add, sub };

//* 함수에 직접 export 키워드를 사용해도 됨
export function exportAdd(a, b) {
  return a + b;
}

export function exportSub(a, b) {
  return a - b;
}

//? export default 키워드를 사용하면 해당 모듈에서 기본으로 내보낼 값을 지정할 수 있음
export default function multiply(a, b) {
  return a * b;
}
