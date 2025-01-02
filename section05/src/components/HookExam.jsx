/**
 * React Hooks?
 * - 클래스 컴포넌트의 기능을 함수 컴포넌트에서도 이용할 수 있도록 도와주는 메서드
 * useState, useRef... 등
 *
 * 함수형 컴포넌트 내부에서만 호출할 수 있다.
 * 조건문, 반복문 내부에서는 호출이 불가능하다.
 * 커스텀 훅을 만들어서 사용할 수도 있다.
 */
import { useState } from "react";
import useInput from "../hooks/useInput";

//! 함수형 컴포넌트, 커스텀 훅 내부에서만 호출이 가능하다.
// const state = useState();

// 나만의 훅(Custom Hook)을 만들어 사용할 수 있다.
//? 그런데 훅을 컴포넌트 내부에서만 호출할 수 있는데 어떻게 커스텀 훅을 만들어서 사용할 수 있을까?
// function getInput() {
//? 커스텀훅의 이름을 use로 시작하면 된다.
// function useInput() { //? 별도의 파일로 분리해서 사용할 수도 있다.
//   const [value, setValue] = useState("");
//   const onChange = (e) => {
//     setValue(e.target.value);
//   };

//   return [value, onChange];
// }

const HookExam = () => {
  //! 조건부로 호출될 수는 없다. -> 조건문, 반복문 내부에서 훅이 호출되면 호출순서가 엉망이 되기 때문이다.
  // if (true) {
  //   const ifState = useState();
  // }
  // for(;;) {}

  //* 커스텀 훅 써보기
  const [value, onChange] = useInput();
  const [value2, onChange2] = useInput();

  return (
    <div>
      <h1>HookExam</h1>
      <input type="text" value={value} onChange={onChange} />
      <input type="text" value={value2} onChange={onChange2} />
    </div>
  );
};

export default HookExam;
