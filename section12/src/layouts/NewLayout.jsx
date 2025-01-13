import React from "react";
import Header from "../components/Header";
import { Outlet, useNavigate } from "react-router-dom";
import Button from "../components/Button";

function NewLayout() {
  const nav = useNavigate();

  return (
    <div>
      <Header
        title={"새 일기 쓰기"} //
        leftChild={<Button text={"< 뒤로 가기"} onClick={() => nav(-1)} />}
      />
      <Outlet context={{}} />
    </div>
  );
}

export default NewLayout;
