import React, { useReducer } from "react";

// reducer: 변환기 -> 상태를 실제로 변환시키는 변환기 역할
function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    // default:
    //   return state;
  }
  throw new Error("Unhandled action type");
}

export default function Exam() {
  // useReducer 사용해보기
  // state: useState의 state와 같은 역할
  // dispatch: state 변경을 요청하는 함수
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    // 인수: 상태가 어떻게 변화되길 원하는지
    // -> 인수로 전달한 객체를 액션 객체라고 부른다.
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
}
