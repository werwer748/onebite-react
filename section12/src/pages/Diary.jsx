import React from "react";
import { useParams } from "react-router-dom";

function Diary() {
  // URL 파라미터 값 가져오기
  const params = useParams();
  console.log(params);
  return <div>{params.id}번 일기입니다.</div>;
}

export default Diary;
