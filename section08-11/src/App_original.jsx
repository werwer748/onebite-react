import {
  createContext,
  useCallback,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
import Exam from "./components/Exam";
import todoReducer from "./reducers/todoReducer";

/**
 * 최적화(Optimization)
 * 웹 서비스의 성능을 개선하는 모든 행위를 일컫음
 * 아주 단순한 것부터 아주 어려운 방법까지 매우 다양함
 *
 * 최적화를 모두 적용하려고하면 코드가 복잡해지고 유지보수가 어려워질 수 있음
 * 기능이 추가되면서 최적화가 풀리거나 아에 고장나는 경우도 생긴다.
 * 기능을 완성한 후에 꼭 필요한 부분만 최적화를 적용하는 것이 좋다.
 * -> 모든 것에 최적화를 적용하지말고 꼭 최적화가 필요할 것 같은
 * 연산, 함수, 컴포넌트에만 적용하는 것이 좋다.
 *
 * 메모이제이션도 연산이다!
 * Header같이 단순히 UI만 그려주는 컴포넌트(state도 없고 props도 없는)는 경우는
 * 그냥 리렌더링 시키는게 더 효율적일 수 있다.
 * TodoItem 컴포넌트처럼 상황에 따라 갯수가 많아질 수 있는 컴포넌트나
 * 함수를 굉장히 많이 가지고 있어서 코드가 무거운 경우에는 메모이제이션을 적용하는 것이 좋다.
 */

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
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

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

function App() {
  // const [todos, setTodos] = useState(mockData);
  //? 상태를 관리하는 코드가 점점 많아지면 유지보수가 어려워진다.
  //? useReducer를 사용하면 상태 관리 코드를 컴포넌트 외부로 분리할 수 있다.
  /**
   * useReducer
   * 컴포넌트 내부에 새로운 State를 생성하는 훅
   * 모든 useState를 useReducer로 대체할 수 있지만, 모든 상황에 useReducer가 더 좋은 것은 아니다.
   * 상태 관리 코드를 컴포넌트 외부로 분리할 수 있다.
   */
  // const [todos, dispatch] = useReducer(reducer, mockData);
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
    //? useState
    // const newTodo = {
    //   id: idRef.current++,
    //   isDone: false,
    //   content,
    //   date: new Date().getTime(),
    // };
    // setTodos([newTodo, ...todos]);

    //? useReducer
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
    //? useState
    // setTodos(
    //   todos.map((todo) =>
    //     todo.id === targetId //
    //       ? { ...todo, isDone: !todo.isDone }
    //       : todo
    //   )
    // );

    //? useReducer
    dispatch({
      type: "UPDATE",
      targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    //? useState
    // setTodos(todos.filter((todo) => todo.id !== targetId));

    //? useReducer
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
    <div className="App">
      <Header />
      {/* Context.Provider를 사용하여 데이터를 전달 */}
      {/* 이렇게 Provider를 통해 묶인 컴포넌트들은 하위 컴포넌트들까지도 Context에 접근할 수 있다. */}
      {
        /* <TodoContext.Provider
        /**
         * value로 props를 전달하는 객체를 전달.
         * 여기서 문제는 이 value Props로 전달한 객체가
         * App컴포넌트의 상태가 변경(리렌더링)될 때마다 새로 생성된다.
         * 그래서 기존에 작업해두었던 최적화가 깨지게 된다.
         * -> 메모를 적용했더라도 useContext로 불러온값이 변경되면
         * props가 변경된 것과 동일하게 취급되어 리렌더링이 일어난다.
         *
         * 이 문제를 해결하기 위해 TodoContext를 두개로 분리한다.
         * 예를들어
         * TodoStateContext: 변경될 수 있는 값 - todos
         * TodoDispatchContext: 변경할 수 있는 값 - onCreate, onUpdate, onDelete
         */
        // value={{
        //   todos,
        //   // onCreate,
        //   // onUpdate,
        //   // onDelete,
        // }}
        // > */}
      }
      {/* 컨텍스트를 통해 데이터를 받기 떄문에 props를 전달할 필요가 없다. */}
      {/* <Editor onCreate={onCreate} /> */}
      {/* <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} /> */}
      {/* <Editor />
        <List />
      </TodoContext.Provider> */}
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
