import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../context/diary/contexts";
import { useNavigate, useParams } from "react-router-dom";

const useDiary = (id) => {
  const { diary } = useContext(DiaryStateContext);
  const [currentDiaryItem, setCurrentDiaryItem] = useState(null);
  const params = useParams();
  const nav = useNavigate();

  useEffect(() => {
    // const getCurrentDiary = useMemo(() => { // nav를 useEffect에서 사용하라는 에러가 그대로 뜬다.
    const currentDiaryItem = diary.find((item) => item.id === id);

    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      /**
       * 지금 nav가 호출되는 타이밍이 페이지가 렌더링 되기 전이기 때문에
       * 기능이 정상작동하지 않는다.
       * nav는 페이지의 마운트시점에 jsx의 리턴문이 끝나고 호출되어야 하는 것.
       */
      nav("/", { replace: true });
    }

    setCurrentDiaryItem(currentDiaryItem);
  }, [params.id, nav]);

  return currentDiaryItem;
};

export default useDiary;
