import React, { memo, useContext, useRef, useState } from "react";
import "./Editor.css";
import { TodoDispatchContext } from "../context/TodoContenxtProvider/contexts";
// import { TodoDispatchContext } from "../App";

export default function Editor() {
  // 컨텍스트에서 데이터 가져오기
  const { onCreate } = useContext(TodoDispatchContext);
  const [content, setContet] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContet(e.target.value);
  };

  const onSubmit = () => {
    if (!content) {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContet("");
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        type="text"
        placeholder="새로운 Todo..."
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
}
