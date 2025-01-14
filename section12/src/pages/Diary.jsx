import React from "react";
import { useOutletContext, useParams } from "react-router-dom";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";

function Diary() {
  // URL 파라미터 값 가져오기
  const params = useParams();
  // console.log(currentDiaryItem);
  const { currentDiaryItem } = useOutletContext();

  usePageTitle(`${currentDiaryItem?.id}번 일기`);

  if (!currentDiaryItem) {
    return <div>데이터 로딩중....!</div>;
  }

  // const { emotionId, content } = currentDiaryItem;

  return (
    <div>
      <Viewer {...currentDiaryItem} />
    </div>
  );
}

export default Diary;
