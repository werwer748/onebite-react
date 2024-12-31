// 비동기 작업 처리해보기!

function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 3000);
}
// add(1, 2);

// 이 비동기 함수의 결과값을 어떻게 받아올까?
// 결과값을 사용하고자하는 콜백함수를 함께 전달하면 된다.
// add(1, 2, (value) => {
//   console.log("value = ", value);
// });

// 실용적인 예제 - 음식 주문
function orderFood(callback) {
  setTimeout(() => {
    const food = "피자";
    callback(food);
  }, 3000);
}

function coolDownFood(food, callback) {
  setTimeout(() => {
    const coolDownedFood = `식은 ${food}`;
    callback(coolDownedFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}

// 콜백 지옥
orderFood((food) => {
  console.log(food);

  coolDownFood(food, (coolDownedFood) => {
    console.log(coolDownedFood);

    freezeFood(coolDownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});
