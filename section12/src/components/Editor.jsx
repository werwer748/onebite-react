import "./Editor.css";

import React, { useContext, useState } from "react";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { BUTTON } from "../const/button";
import { dateToString } from "../util/dateToString";
import { DiaryDispatchContext } from "../context/diary/contexts";
import { useNavigate } from "react-router-dom";

const EmotionNames = [
  {
    emotionId: 1,
    emotionName: "완전 좋음",
  },
  {
    emotionId: 2,
    emotionName: "좋음",
  },
  {
    emotionId: 3,
    emotionName: "그럭저럭",
  },
  {
    emotionId: 4,
    emotionName: "나쁨",
  },
  {
    emotionId: 5,
    emotionName: "끔찍함",
  },
];

function Editor() {
  const { onCreate } = useContext(DiaryDispatchContext);
  const nav = useNavigate();
  const [insertInput, setInsertInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;

    setInsertInput({
      ...insertInput,
      [name]: name === "createdDate" ? new Date(value) : value,
    });
  };

  const onClickSubmit = () => {
    onCreate(
      insertInput.createdDate.getTime(),
      insertInput.emotionId,
      insertInput.content
    );
    // 뒤로가기 막으면서 페이지 이동
    nav("/", { replace: true });
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        {/* 데이트객체를 바로넣으면 input이 객체 파싱을 못하기 떄문에 문자열로 변환해서 넣어줘야함 */}
        <input
          type="date"
          name="createdDate"
          value={dateToString(insertInput.createdDate)}
          onChange={onChangeInput}
        />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {EmotionNames.map((v) => (
            <EmotionItem
              key={v.emotionId}
              {...v}
              isSelected={v.emotionId === insertInput.emotionId}
              onClick={() =>
                onChangeInput({
                  // 실제 이벤트를 담고있는 객체에서 동작하는게 아니기 떄문에 직접 이벤트객체를 만들어서 넣어줘야함
                  target: { name: "emotionId", value: v.emotionId },
                })
              }
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          value={insertInput.content}
          onChange={onChangeInput}
          placeholder="오늘은 어땟나요?"
        />
      </section>
      <section className="button_section">
        <Button text={"취소하기"} onClick={() => nav(-1)} />
        <Button
          text={"작성완료"}
          type={BUTTON.type.POSITIVE}
          onClick={onClickSubmit}
        />
      </section>
    </div>
  );
}

export default Editor;
