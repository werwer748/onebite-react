import React, { useContext } from "react";
import Editor from "../components/Editor";
import { DiaryDispatchContext } from "../context/diary/contexts";
import { useOutletContext } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";

function Edit() {
  const { onUpdate } = useContext(DiaryDispatchContext);
  const { currentDiaryItem } = useOutletContext();

  usePageTitle(`${currentDiaryItem?.id}번 일기 수정하기`);

  const onSubmit = (input) => {
    onUpdate(
      currentDiaryItem.id,
      input.createdDate.getTime(),
      input.emotionId,
      input.content
    );
  };

  return (
    <div>
      <Editor onSubmit={onSubmit} />
    </div>
  );
}

export default Edit;
