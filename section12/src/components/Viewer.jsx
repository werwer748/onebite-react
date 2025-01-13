import React from "react";
import "./Viewer.css";
import { getEmotionImage } from "../util/get-emotion-image";
import { EmotionNames } from "../util/constants";

function Viewer({ emotionId, content }) {
  const emotionItem = EmotionNames.find((item) => item.emotionId === emotionId);

  return (
    <div className="Viewer">
      <section className="img_section">
        <h4>오늘의 감정</h4>
        <div
          className={`emotion_img_wrapper emotion_img_wrapper_${emotionItem.emotionId}`}
        >
          <img src={getEmotionImage(1)} />
          <div>{emotionItem.emotionName}</div>
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <div className="content_wrapper">
          <p>{content}</p>
        </div>
      </section>
    </div>
  );
}

export default Viewer;
