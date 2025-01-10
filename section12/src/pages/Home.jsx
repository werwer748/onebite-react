import React from "react";
import { useSearchParams } from "react-router-dom";
import DiaryList from "../components/DiaryList";

function Home() {
  // URL에서 쿼리스트링 가옥오기
  const [params, setParams] = useSearchParams();

  return <DiaryList />;
}

export default Home;
