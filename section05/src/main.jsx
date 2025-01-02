import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  //? StrictMode: 개발 모드에서만 동작하는 컴포넌트 (컴포넌트의 부수효과를 검사) -> 지금은 필요 없음
  // <StrictMode>
  <App /> //* main 에서 렌더링 되는 컴포넌트 -> 루트 컴포넌트
  // </StrictMode>,
);
