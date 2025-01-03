import { createContext } from "react";

/**
 * React Context
 * 컴포넌트간의 데이터를 전달하는 또 다른 방법
 * 기존의 Props가 가지고 있던 단점을 해결할 수 있음
 *
 * props의 단점
 * 부모에서 자식으로만 데이터를 전달할 수 있다.
 * -> 부모 - 자식1 - 자식2 계층이 존재할 경우 모든 컴포넌트를 거쳐야 데이터를 전달할 수 있다.
 * 이를 Prop drilling이라고 한다.
 *
 * React Context를 사용하여 Props drilling을 해결할 수 있다.
 * Context라는 데이터 보관소를 만들어서 데이터를 저장하고 필요한 컴포넌트에서 사용할 수 있다.
 */
// 컴포넌트 외부에서 생성하여 사용한다. - 컴포넌트와 함께 리랜더도될 필요가 없으므로..
// export const TodoContext = createContext();
//? 꺠진 최적화를 해결하기 위해 TodoContext를 두개로 분리한다.
//? TodoStateContext: 변경될 수 있는 값 - todos
//? TodoDispatchContext: 변경할 수 있는 값 - onCreate, onUpdate, onDelete
// export const TodoStateContext = createContext();
// export const TodoDispatchContext = createContext();

//* 혼자 해본거라 잘못된 부분이 있을 수 있음. (추후 수정 필요)
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();
