import React, { useContext, useState } from "react";
import Button from "./Button";
import "./DiaryList.css";
import { BUTTON } from "../const/button";
import DiaryItem from "./DIaryItem";
import { DiaryStateContext } from "../context/diary/contexts";
import { filterDiary } from "../util/filterDiary";
import { useNavigate } from "react-router-dom";

function DiaryList() {
  const { pivotDate, diary } = useContext(DiaryStateContext);
  const [sortType, setSortType] = useState("latest");

  const nav = useNavigate();

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const getSortedDate = () => {
    return diary.toSorted();
  };

  return (
    <div>
      <div className="DiaryList"></div>
      <div className="menu_bar">
        <select onChange={onChangeSortType}>
          <option value="latest">최신순</option>
          <option value="oldest">오래된 순</option>
        </select>
        <Button
          text={"새 일기 쓰기"}
          type={BUTTON.type.POSITIVE}
          onClick={() => nav("/new")}
        />
      </div>
      <div className="list_wrapper">
        {diary.length > 0 &&
          filterDiary(pivotDate, diary, sortType).map(
            (v) => <DiaryItem key={v.id} {...v} /> //
          )}
      </div>
    </div>
  );
}

export default DiaryList;
