import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { DiaryDispatchContext, DiaryStateContext } from "./contexts";
import { diaryReducer } from "../../reducers/diaryReducer";

// const mockData = [
//   {
//     id: 3,
//     createdDate: new Date("2025-01-02").getTime(),
//     emotionId: 2,
//     content: "오늘은 기분이 ㅎㅎ",
//   },
//   {
//     id: 2,
//     createdDate: new Date("2025-01-03").getTime(),
//     emotionId: 1,
//     content: "오늘은 기분이 좋아요.",
//   },
//   {
//     id: 1,
//     createdDate: new Date("2024-12-03").getTime(),
//     emotionId: 5,
//     content: "........",
//   },
// ];

function DiaryContext({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [diary, diaryDispatch] = useReducer(diaryReducer, []);
  const [pivotDate, setPivotDate] = useState(new Date());
  const idRef = useRef(0);

  useEffect(() => {
    const storedData = localStorage.getItem("diary");
    const parsedData = storedData ? JSON.parse(storedData) : [];

    diaryDispatch({
      type: "INIT",
      data: parsedData,
    });
    idRef.current = parsedData[0]?.id ? parsedData[0].id + 1 : 1;
    setIsLoading(false);
  }, []);

  const onCreate = useCallback((createdDate, emotionId, content) => {
    diaryDispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  }, []);

  const onUpdate = useCallback((id, createdDate, emotionId, content) => {
    diaryDispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  }, []);

  const onDelete = useCallback((id) => {
    diaryDispatch({
      type: "DELETE",
      id,
    });
  }, []);

  const onChangeMonth = useCallback((incOrDec) => {
    setPivotDate((prev) => {
      return new Date(prev.getFullYear(), prev.getMonth() + incOrDec);
    });
  }, []);

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <DiaryStateContext.Provider
      value={{
        diary, //
        pivotDate,
      }}
    >
      <DiaryDispatchContext.Provider
        value={{
          onCreate,
          onUpdate,
          onDelete,
          onChangeMonth,
        }}
      >
        {children}
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default DiaryContext;
