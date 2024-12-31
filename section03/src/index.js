// 모듈 불러오기
// const moduleData = require("./math");
// 구조분해할당으로 모듈 사용
// const { add, sub } = require("./math");

//? console.log(moduleData); // { add: [Function: add], sub: [Function: sub] }

// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));
// console.log(add(1, 2));
// console.log(sub(1, 2));

/**
 * ES6 모듈 시스템을 이용해 모듈 사용
 *
 * package.json 파일에 "type": "module" 추가
 * -> ES6 모듈 시스템을 사용하겠다는 선언
 * -> 해당 옵션이 추가된 패키지에서는 CJS(Common JS) 모듈 시스템을 사용할 수 없음
 *
 * import 구문을 이용해 모듈을 불러옴
 * -> import { 모듈 내보낸 변수 또는 함수 } from "모듈 경로";
 * -> from에 지정한 경로에 파일의 확장자를 꼭 적어줘야 함
 */
//* export default로 지정된 함수는 중괄호 없이 불러옴 이름도 마음대로 지정 가능
// import mul from "./math.js";
// export default 함수, { export한 함수 } from "모듈 경로";
import mul, { add, sub, exportAdd, exportSub } from "./math.js";
import randomColor from "randomcolor";

// console.log(add(1, 2));
// console.log(sub(1, 2));

// console.log(exportAdd(10, 20));
// console.log(exportSub(10, 20));

// console.log(mul(10, 20));

//* 라이브러리 사용
const color = randomColor();
console.log(color);
