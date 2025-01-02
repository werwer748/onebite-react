import React, { memo } from "react";
import "./TodoItem.css";

/**
 * props를 많이 받지만 컴포넌트당 받고있는 props 값은 모두 다르다.
 * 따라서 특정 todo가 업데이트 되는데 굳이 다른 todo들도 업데이트 되는것을 방지하기 위해 메모이제이션 처리를 해준다.
 *
 * 그런데 여기서 문제가 있다.
 * 이 컴포넌트는 props로 함수를 받고있고 함수는 object 타입이다.
 * 기본적으로 memo는 얕은비교 (=== 동등연산자비교) 를 하는데
 * 부모 컴포넌트인 App이 리렌더링 되고 함수가 새로생성되면 당연히 리액트는
 * memo를 통해 비교된 값이 다르다고 판단하고 리렌더링을 한다.
 *
 * 이 경우 2가지 방법을 통해 해결할 수 있다.
 * 1. 부모 컴포넌트로부터 받는 함수를 모두 useCallback으로 감싸서 함수자체를 메모이제이션 처리한다.
 * 2. memo의 두번째 인자로 비교함수를 넣어서 특정 조건에 따라 리렌더링을 막는다.
 */
function TodoItem({ id, isDone, content, date, onUpdate, onDelete }) {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      {/* onChange없이 input 태그를 사용하면 readOnly 속성을 추가하여 읽기 전용으로 만들어 오류를 방지할 수 있다. */}
      {/* 체크박스를 클릭해야해서 onClick을 써야하는거 아닌지 헷갈릴수 있는데 결과적으로 바뀌는 값을 체크하는거라서 onChange를 써야한다. */}
      <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDelete}>삭제</button>
    </div>
  );
}

/**
 * memo 처럼 컴포넌트를 인수로 받아서
 * 해당 컴포넌트의 최적화나 메모이제이션같은 추가적인 기능을 덧붙여서
 * 기능이 추가된 새로운 컴포넌트를 반환해주는 메서드들을
 * 리액트에서는 특별히 HOC(Higher Order Component) - 고차함수 라고 부른다.
 */
// memo의 두번째 인자로 비교함수를 넣어서 특정 조건에 따라 리렌더링을 막아보기
// export default memo(TodoItem, (prevProps, nextProps) => {
// 반환 값에 따라, Props가 바뀌었는지 안바뀌었는지 판단한다.
// true를 반환하면 리렌더링을 하지 않는다.
// false를 반환하면 리렌더링을 한다.

//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;

//   return true;
// });

//? props로 전달받는 함수들을 모두 useCallback으로 감싸서 메모이제이션 처리
//? -> 이 방법이 추후 유지보수 관리 측면에서 유리함.
export default memo(TodoItem);
