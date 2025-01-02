import React, { useMemo, useState } from "react";
import "./List.css";
import TodoItem from "./TodoItem";

export default function List({ todos, onUpdate, onDelete }) {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  /**
   * useMemo - 불필요한 연산 방지
   * 메모이제이션 기법을 기반으로
   * 불 필요한 연산을 최적화하는 리액트 훅
   *
   * 특정 연산의 결과값을 기억하고, 재사용하는 방식
   */
  // 해당 컴포넌트에서 일어나는 모든 업데이트마다 업데이트 될 필요는 없는 값들.
  // 계산해야하는 todos값이 변경되지 않으면 메모제이션된 값을 그대로 써도 된다.
  // 여기에 적용할 수 있는게 useMemo
  // useMemo는 deps에 값이 변경될 때에만 콜백함수를 호출한다. 결과값을 return받을 수 있다.
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("getAnalyzedData() 호출");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
    // 여기를 비워두면 todo가 추가되어도 계산을 다시하지 않는다.
  }, [todos]);

  return (
    <div className="List">
      <h4>Todo List 👻</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>notDone: {notDoneCount}</div>
      </div>
      <input
        type="text"
        placeholder="검색어를 입력하세요."
        value={search}
        onChange={onChangeSearch}
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => (
          /**
           * key props를 사용하여 각 요소에 고유한 키를 부여해야 한다.
           * 리액트에서는 내부적으로 리스트형태로 렌더링된 컴포넌트들이나 요소들을 식별하기 위해 key props를 사용한다.
           */
          <TodoItem //
            key={todo.id}
            {...todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}
