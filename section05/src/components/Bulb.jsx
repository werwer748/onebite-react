import { useState } from "react";

/**
 * 부모로 부터 전달받는
 * props값이 변경될 때 마다
 * 본인이 가진 state값이 변경되지 않아도
 * 자식 컴포넌트는 리렌더링 된다.
 *
 * 컴포넌트가 리렌더링 되는 이유
 * 1. 자신이 관리하는 state값이 변경될 때
 * 2. 자신이 제공받는 props값이 변경될 때
 * 3. 부모 컴포넌트가 리렌더링 될 때
 * 3-1.
 * 부모 컴포넌트의 리렌더링시 필요없는 부분도 리렌더링이 될 수 있다는 것.
 * state를 나눠가지는 자식컴포넌트를 만들어서 해결할 수 있다.
 */
// const Bulb = ({ light }) => {
const Bulb = () => {
  // 자식 컴포넌트의 리랜더링 효율화를 위해 state를 자식컴포넌트에서 직접 관리
  const [light, setLight] = useState("OFF");

  // 렌더링 확인용 콘솔
  console.log("Bulb render::", light);

  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>{light}</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>{light}</h1>
      )}
      <button //
        onClick={() => {
          setLight(light === "ON" ? "OFF" : "ON");
        }}
      >
        전구 {light === "ON" ? "끄기" : "켜기"}
      </button>
    </div>
  );
};

export default Bulb;
