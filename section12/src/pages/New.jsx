import React, { useContext } from "react";
import Editor from "../components/Editor";
import { DiaryDispatchContext } from "../context/diary/contexts";

function New() {
  const { onCreate } = useContext(DiaryDispatchContext);

  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
  };

  return (
    <div>
      <Editor onSubmit={onSubmit} />
    </div>
  );
}

export default New;
