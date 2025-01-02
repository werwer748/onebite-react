import { useCallback, useState, useEffect, useRef } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import Even from "./components/Even";

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

function App() {
  /**
   * State Lifting - 상태를 부모 컴포넌트에서 관리하고 자식 컴포넌트로 전달
   * React에서 데이터는 상위 컴포넌트에서 하위 컴포넌트로만 전달된다
   * (단방향 데이터 흐름) => 파악하기가 쉽고 직관적이다.
   * 따라서, state의 위치를 항상 잘 설정해야 한다.
   */
  const [count, setCount] = useState(0);
  const [inp, setInp] = useState("");

  //? useRef를 사용하여 컴포넌트가 마운트되었는지 확인
  const isMount = useRef(false);

  /**
   * useEffect?
   * 첫번쨰 인수 : 콜백함수,
   * 두번째 인수 : 의존성 배열(dependency array - deps)
   *
   * 두번쨰 인수의 배열에 들어가있는 값이 바뀌면
   * 첫번쨰 인수의 콜백함수가 실행된다.
   */
  // useEffect(() => {
  //   console.log(`count: ${count} / input: ${inp}`);
  // }, [count, inp]);

  // 1. 마운트를 제어 -> deps에 빈 배열을 전달
  //? 컴포넌트의 마운트시점에서만 실행된다.
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. 업데이트 제어: 변화, 리렌더링
  //? 기본적으로 deps를 생략하면 최초 마운트와 모든 업데이트시점에서 실행된다.
  //? 만약 마운트시점에서는 아에 실행하지 않고 업데이트시점에서만 실행하고 싶다면 useRef를 활용하자
  useEffect(() => {
    // useRef를 사용해 Mount 여부를 확인
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  // 3. 언마운트 제어
  // 컴포넌트가 사라질 때 실행확인을 위해 화면에서 사라지는 Even 컴포넌트를 확인.

  const onClickButton = useCallback((value) => {
    //? setState는 비동기로 동작하기 때문에 사용되는 함수에서 state값의 변경을 확인할 수 없다.
    //? 따라서, setState를 통한 state값 변화에 따른 처리를 위해서는 useEffect를 사용하는것이 좋다.
    setCount((prev) => prev + value);
    // console.log(`count: ${count}`);
  }, []);

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          type="text" //
          value={inp}
          onChange={(e) => setInp(e.target.value)}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
