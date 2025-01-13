import React, { useContext, useEffect, useMemo, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import { BUTTON } from "../const/button";
import {
  DiaryDispatchContext,
  DiaryStateContext,
} from "../context/diary/contexts";
import useDiary from "../hooks/useDiary";

function EditLayout() {
  const nav = useNavigate();
  const params = useParams();
  const { onDelete } = useContext(DiaryDispatchContext);
  // const { diary } = useContext(DiaryStateContext);
  // const [currentDiaryItem, setCurrentDiaryItem] = useState(null);
  const currentDiaryItem = useDiary(parseInt(params.id));

  //* useDiary hook으로 대체
  // useEffect(() => {
  //   // const getCurrentDiary = useMemo(() => { // nav를 useEffect에서 사용하라는 에러가 그대로 뜬다.
  //   const currentDiaryItem = diary.find(
  //     (item) => item.id === parseInt(params.id)
  //   );

  //   if (!currentDiaryItem) {
  //     window.alert("존재하지 않는 일기입니다.");
  //     /**
  //      * 지금 nav가 호출되는 타이밍이 페이지가 렌더링 되기 전이기 때문에
  //      * 기능이 정상작동하지 않는다.
  //      * nav는 페이지의 마운트시점에 jsx의 리턴문이 끝나고 호출되어야 하는 것.
  //      */
  //     nav("/", { replace: true });
  //   }

  //   setCurrentDiaryItem(currentDiaryItem);
  // }, [params.id, nav]);

  const onClickDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onDelete(parseInt(params.id));
      /**
       * react-router-dom이 7 버전이 되면서
       * 동기적으로 작동한던 코드가 비동기적으로 작동하게 되었다.
       * => nav함수가 처리되고 useEffect가 한번 돌게끔 변경된 것.
       *
       * => 일단 useEffect dependency에서 diary의 변경을 감지하지 않도록 처리하여 해결.
       */
      nav("/", { replace: true });
    }
  };

  // const getCurrentDiaryItem = () => {
  //   const currentDiaryItem = diary.find(
  //     (item) => item.id === parseInt(params.id)
  //   );

  //   if (!currentDiaryItem) {
  //     window.alert("존재하지 않는 일기입니다.");
  //     /**
  //      * 지금 nav가 호출되는 타이밍이 페이지가 렌더링 되기 전이기 때문에
  //      * 기능이 정상작동하지 않는다.
  //      * nav는 페이지의 마운트시점에 jsx의 리턴문이 끝나고 호출되어야 하는 것.
  //      */
  //     nav("/", { replace: true });
  //   }

  //   return currentDiaryItem;
  // };

  // const currentDiaryItem = getCurrentDiaryItem();

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button text={"< 뒤로가기"} onClick={() => nav(-1)} />}
        rightChild={
          <Button
            text={"삭제하기"}
            type={BUTTON.type.NEGATIVE}
            onClick={onClickDelete}
          />
        }
      />
      <Outlet context={{ currentDiaryItem }} />
    </div>
  );
}

export default EditLayout;
