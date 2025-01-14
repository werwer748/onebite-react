import React, { useContext, useEffect } from "react";
import Editor from "../components/Editor";
import { DiaryDispatchContext } from "../context/diary/contexts";
import usePageTitle from "../hooks/usePageTitle";

function New() {
  usePageTitle("새 일기 쓰기");
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
