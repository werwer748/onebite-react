import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import NotFound from "./pages/NotFound";
import { getEmotionImage } from "./util/get-emotion-image";
import Button from "./components/Button";
import { BUTTON } from "./const/button";
import Header from "./components/Header";
import Edit from "./pages/Edit";

// "/": 모든 일기를 조회하는 Home 페이지
// "/new": 새로운 일기를 작성하는 New 페이지
// "/diary/:id": 특정 일기를 조회하는 Diary 페이지
function App() {
  // 이벤트로 페이지 이동하기
  const nav = useNavigate();
  const onClickBtn = () => {
    nav("/new");
  };

  return (
    // Routes 내부에는 Route 컴포넌트를 사용하여 경로와 컴포넌트를 매칭시킨다. - 다른 컴포넌트는 들어갈 수 없음
    // Routes를 감싸는 컴포넌트가 있고 거기에 Routes외에 다른 컴포넌트가 들어가면 레이아웃처럼 모든 페이지에 적용된다.
    <>
      <Header
        title={"Header"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"Right"} />}
      />

      {/* Link? a태그 대신 사용하는 컴포넌트. 페이지 이동 시 새로고침 없이 이동 가능 */}
      {/* <div>
        <Link to="/">Home</Link>
        <Link to="/new">New</Link>
        <Link to="/diary">Diary</Link>
      </div>
      <button onClick={onClickBtn}>New 페이지로 이동!</button> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        {/* :id - URL 파라미터로 받은 값을 사용할 때 사용(동적 라우팅) */}
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        {/* * : 와일드 카드. 위에 정의된 경로가 없을 때 보여줄 페이지 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
