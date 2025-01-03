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
import { TodoContextProvider } from "./context/TodoContenxtProvider";

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

function App() {
  //* 여기에서 작동하던 모든 코드를 컨텍스트로 분리하여 관리
  //* 테스트 성공적이고 렌더링 최적화 역시 성공적!!!
  //? 예제 확인이나 추후 공부를 위해서 아래 코드는 따로 삭제하지는 않음.
  //? 기존 코드 주석 및 확인시 App_original.jsx 파일을 참고하면 됨.

  return (
    <div className="App">
      <Header />

      {/* 유지보수를 위해 파일을 분리하여 작성해봄 */}
      <TodoContextProvider>
        <Editor />
        <List />
      </TodoContextProvider>
    </div>
  );
}

export default App;
