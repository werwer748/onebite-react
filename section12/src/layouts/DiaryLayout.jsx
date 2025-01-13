import React, { useMemo } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import { dateToString } from "../util/dateToString";

function DiaryLayout() {
  const nav = useNavigate();
  const params = useParams();
  const currentDiaryItem = useDiary(parseInt(params.id));

  const title = useMemo(() => {
    if (!currentDiaryItem?.createdDate) {
      console.log("currentDiaryItem?.createdDate");
      return "yyyy-mm-dd";
    }
    return dateToString(new Date(currentDiaryItem.createdDate));
  }, [currentDiaryItem]);

  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={<Button text={"< 뒤로가기"} onClick={() => nav(-1)} />}
        rightChild={
          <Button text={"수정하기"} onClick={() => nav(`/edit/${params.id}`)} />
        }
      />
      <Outlet context={{ currentDiaryItem }} />
    </div>
  );
}

export default DiaryLayout;
