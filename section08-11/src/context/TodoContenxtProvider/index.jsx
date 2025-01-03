//* Todo에 사용되는 reducer와 context를 한 파일로 관리 -> 유지보수에 효과적일 것이라 예상됨.

import { createContext, useCallback, useMemo, useReducer, useRef } from "react";
import { TodoDispatchContext, TodoStateContext } from "./contexts";
import todoReducer from "../../reducers/todoReducer";

const mockData = [
  {
    id: 3,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "설거지하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "친구 만나기",
    date: new Date().getTime(),
  },
];

export function TodoContextProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, mockData);
  const idRef = useRef(4);

  /**
   * useCallback
   * 함수를 메모이제이션된 콜백함수로 만들어 반환
   * 컴포넌트가 리렌더링 될 때마다 함수가 새로 생성되는 것을 방지
   * -> 마운트시 한번만 생성되고, 이후에는 재사용된다.
   * deps 배열에 값이 변경될 때만 함수를 재생성
   */
  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  }, []);

  //* 함수들을 메모이제이션한 객체를 만들어 Dispatch Context에 전달한다.
  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TodoStateContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={memoizedDispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}
