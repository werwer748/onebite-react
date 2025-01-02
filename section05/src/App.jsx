import { useState } from "react";
import "./App.css";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";
import Register from "./components/Register";
import HookExam from "./components/HookExam";

//* 컴포넌트를 분리! -> src/components/Header.jsx
//? 이렇게 함수로 정의된 컴포넌트를 함수 컴포넌트라고 부름
//? 함수 컴포넌트 으의시 함수의 이름은 대문자로 시작해야 함
// function Header() {
//   return (
//     <header>
//       <h1>header</h1>
//     </header>
//   );
// }

/**
 * JSX?
 * - JavaScript Extensions
 * - HTML과 유사한 문법을 사용하여 UI를 구성할 수 있게 해주는 자바스크립트의 확장 문법
 * .js파일이 함수에서 html 태그를 반화하면 에러가 발생함
 * .jsx 파일에서는 함수에서 html 태그를 반환을 인정해준다.
 */

//* HTML 태그를 반환하는 함수 -> 컴포넌트
function App() {
  //* props가 많으면 객체로 묶어서 전달하는게 좋다.
  // const buttonProps = {
  //   text: "메일",
  //   color: "red",
  //   a: 1,
  //   b: 2,
  //   c: 3,
  // };

  /**
   * State?
   * - 컴포넌트의 상태를 관리할 수 있게 해주는 객체
   * - 리액트의 모든 컴포넌트는 state(상태)를 가질 수 있음
   * - useState 훅을 사용하여 함수형 컴포넌트에서도 state를 사용할 수 있음
   *
   * useState: [초기값, 상태를 변경하는 함수(상태변화 함수)]와 같은
   * 구조의 배열이라 보통 구조분해 할당을 통해 사용함
   */
  // const [count, setCount] = useState(0);
  // const [light, setLight] = useState("OFF");

  return (
    <>
      {/* <Header />
      <Main />
      <Footer /> */}

      {/* 컴포넌트에 props 객체로 한번에 전달 */}
      {/* <Button {...buttonProps} /> */}
      {/* 객체값 덮어씌워서 전달하기 */}
      {/* <Button {...buttonProps} text={"카페"} color="green" /> */}
      {/* 자식요소를 전달하는 방법 */}
      {/* <Button text={"블로그"}> */}
      {/* <div>자식요소</div> */}
      {/* 컴포넌트를 자식으로 전달 */}
      {/* <Header /> */}
      {/* </Button> */}

      {/* 스테이트의 관리를 자식컴포넌트로 이관하여 렌더링 최적화 */}
      {/* <Bulb />
      <Counter /> */}

      {/* <Register /> */}
      <HookExam />
    </>
  );
}

export default App;
