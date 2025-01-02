import { useState } from "react";

// Bulb 컴포넌트의 동작으로 리랜더링되는 것을 막기위해 컴포넌트를 나눠서 만듬
export default function Counter() {
  const [count, setCount] = useState(0);

  console.log("Counter render::", count);

  return (
    <div>
      <h1>{count}</h1>
      <button //
        // onClick={() => setState((cur) => cur + 1)}
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
}
