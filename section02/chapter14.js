// Async & Await

/**
 * async: 함수를 비동기 함수로 만들어준다.
 * -> Promise를 리턴하는 함수로 만들어준다.
 */
// async function getData() {
//   return {
//     name: "강찐따",
//     id: "hugoK",
//   };
// }
// console.log(getData()); // Promise { <fulfilld>: { name: '강찐따', id: 'hugoK' } }

async function getData() {
  // Promise를 리턴하게 되면 별다른 기능을 하지않고 이 객체 자체를 반환하도록 내버려 둔다.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "강찐따",
        id: "hugoK",
      });
    }, 1500);
  });
}

// console.log(getData()); // Promise { <pending> }

/**
 * await: 비동기 함수가 다 처리되기를 기다리는 하할
 * async 함수 내부에서만 사용 가능
 */
async function printData() {
  // .then을 사용하지 않아도 결를를 받아올 수 있다.
  const data = await getData();
  console.log(data);
  console.log("데이터 출력 완료");
}
printData();
