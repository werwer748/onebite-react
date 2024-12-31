// Promise
// -> 비동기 처리를 위한 객체
const promise = new Promise(
  // 비동기 작업을 실행하는 함수(Promise에 전달되는 콜백함수): executor
  // executor 함수는 resolve와 reject를 인자로 가진다.
  (
    resolve, // 이 비동기 작업을 성공 상태로 만들어주는 함수
    reject // 이 비동기 작업을 실패 상태로 만들어주는 함수
  ) => {
    setTimeout(() => {
      console.log("안녕");
      // resolve();
      resolve("성공");

      // 실패테스트해보기
      // reject("실패한 이유를 담아주면...");
    }, 2000);
  }
);

// console.log(promise);
// Promise { <pending> } -> 열어보면 PromiseState: "pending", PromiseResult: undefined
//  -> 2초 뒤에 "안녕"이 출력된다.

setTimeout(() => {
  /**
   * resolve
   * 2초 안녕 -> Promise { <fulfilled> }
   *
   * resolve()에 인자가 없을 경우
   * -> PromiseState: "fulfilled", PromiseResult: undefined -> 여전히 result는 undefined
   *
   * resolve("성공") 인자를 넣은 경우
   * -> Promise { <fulfilled>: '성공' } -> PromiseState: "fulfilled", PromiseResult: "성공"
   */

  /**
   * reject
   * 2초 안녕 -> Uncaught (in promise) 실패한 이유를 담아주면... -> Promise { <rejected>: '실패한 이유를 담아주면...' }
   * Uncaught ... 으로 체체가 실패했음을 에러로 알려준다.
   * -> PromiseState: "rejected", PromiseResult: "실패한 이유를 담아주면..."
   */
  console.log(promise);
}, 3000);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const num = null;

    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다.");
    }
  }, 2000);
});

//* then: resolve가 호출되면 실행 -> resolve의 인자를 받을 수 있다.
// promise2.then((value) => {
//   console.log(value);
// });
//* catch: reject가 호출되면 실행 -> reject의 인자를 받을 수 있다.
// promise2.catch((error) => {
//   console.log("error", error);
// });

//? 두 실행 모두 같은 Promise를 반환하기 때문에 체이닝하여 사용할 수 있다. -> Promise Chaining
promise2
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log("error", error);
  });

//* 응용
function add10(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("숫자가 아닙니다.");
      }
    }, 2000);
  });

  return promise;
}

// const p = add10(0);

// p.then((res) => {
//   console.log("add10 then1", res);

// const newP = add10(res);

// 이게게 쓰면 또 콜백 지옥이 되어버린다.
// newP.then((res) => {
//   console.log("add10:::", res);
// });
// 새로운 Promise를 반환하면 연속으로 then을 사용할 수 있다.
// return newP;
// 이렇게도 쓸 수 있다.
//   return add10(res);
// })
//   .then((res) => {
//     console.log("add10 then2", res);
//   })
//   .catch((e) => {
//     console.log("add10:::", e);
//   });

add10(0)
  .then((res) => {
    console.log("1:", res);
    return add10(res);
  })
  .then((res) => {
    console.log("2:", res);
    // 여기서 에러가 발생하면 catch로 넘어간다.
    return add10(undefined);
  })
  .then((res) => {
    console.log("3:", res);
    return add10(res);
  })
  .catch((e) => {
    console.log("error!!!!", e);
  });
