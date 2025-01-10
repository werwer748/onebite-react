import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/*
      * BrowserRouter
      -> 브라우저의 현재 주소를 저장하고 감지하는 역할을 한다.
      -> 앱을 감싸서 사용하게 되면 모든 컴포넌트들이 현재 브라우저의 주소를
          불러와서 쓸 수도 있고 주소의 변화를 감지할 수도 있게 된다.
    */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
