import { useCallback, useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";

function App() {
  /**
   * State Lifting - 상태를 부모 컴포넌트에서 관리하고 자식 컴포넌트로 전달
   * React에서 데이터는 상위 컴포넌트에서 하위 컴포넌트로만 전달된다
   * (단방향 데이터 흐름) => 파악하기가 쉽고 직관적이다.
   * 따라서, state의 위치를 항상 잘 설정해야 한다.
   */
  const [count, setCount] = useState(0);

  const onClickButton = useCallback((value) => {
    setCount((prev) => prev + value);
  }, []);

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
/**
 * LifeCycle: 컴포넌트의 생명주기
 * Mount
 *  - 컴포넌트가 탄생되는 순간
 *  - 화면에 처음 렌더링되는 순간
 * -> Update
 *  - 컴포넌트가 다시 렌더링 되는 순간(리렌더링)
 * -> UnMount
 *  - 컴포넌트가 화면에서 사라지는 순간
 *  - 렌더링에서 제외되는 순간
 *
 * 각 단계별로 각각 다른작업을 수행하게 하는것 -> 라이프사이클 제어
 * useEffect: 라이프사이클을 제어할 수 있는 훅
 * -> 컴포넌트의 사이드 이펙트를 제어하는 훅
 */
