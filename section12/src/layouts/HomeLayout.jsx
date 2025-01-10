import React, { useCallback, useContext, useState } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Button from "../components/Button";
import {
  DiaryDispatchContext,
  DiaryStateContext,
} from "../context/diary/contexts";

function HomeLayout() {
  const { pivotDate } = useContext(DiaryStateContext);
  const { onChangeMonth } = useContext(DiaryDispatchContext);

  // const [pivotDate, setPivotDate] = useState(new Date());

  const onIncreaseMonth = useCallback(() => {
    onChangeMonth(1);
  }, [onChangeMonth]);

  const onDecreaseMonth = useCallback(() => {
    onChangeMonth(-1);
  }, [onChangeMonth]);

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`} //
        leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
        rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
      />
      <Outlet />
    </div>
  );
}

export default HomeLayout;
