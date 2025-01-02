import React, { memo } from "react";
import "./Header.css";

/**
 * React.memo
 * 컴포넌트를 인수로 받아, 최적화된 컴포넌트로 만들어 반환
 * Props를 기준으로 메모이제이션 된다.
 */
//? Header 컴포넌트의 경우 딱히 Props도 안받고 있고 크게 변할 필요도 없다.
//? 그런데 부모컴포넌트의 상태가 변경될때마다 리렌더링이 일어난다.
//? 이런 경우 React.memo를 사용하여 최적화하는것이 좋다.
function Header() {
  return (
    <div className="Header">
      <h3>오늘은 📆</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
}

export default memo(Header);
