// 배열의 구조분해 할당
let arr = [1, 2, 3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

//* 구조분해 할당 적용
// let [one, two] = arr;
// console.log(one, two); // 1 2
let [one, two, three, four = 1] = arr;
console.log(one, two, three); // 1 2 3
console.log(one, two, three, four); // 1 2 3 1

// 객체의 구조분해 할당
let obj = {
  name: "hamo",
  age: 20,
  hobby: "swimming",
};

// let name = obj.name;
// let age = obj.age;
// let hobby = obj.hobby;

//* 구조분해 할당 적용
let { age: myAge, name, hobby, extra = "HamoYeeee" } = obj; // 배열과 다르게 순서가 상관없다. key값을 기준으로 구조분해 할당이 이루어진다.
console.log(name, myAge, hobby, extra);

console.log("====================================");

// 함수의 매개변수에 구조분해 할당
const func = ({
  name,
  age,
  hobby,
  extra = "HamoYooo",
  // extra
}) => {
  console.log(name, age, hobby, extra);
};

func(obj);
