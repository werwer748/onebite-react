import { Link, Route, Routes, useNavigate } from "react-router";
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
import { useCallback, useReducer, useRef } from "react";
import { diaryReducer } from "./reducers/diaryReducer";
import DiaryContext from "./context/diary";
import HomeLayout from "./layouts/HomeLayout";
import NewLayout from "./layouts/NewLayout";
import EditLayout from "./layouts/EditLayout";
import DiaryLayout from "./layouts/DiaryLayout";

function App() {
  return (
    <>
      <DiaryContext>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/new" element={<NewLayout />}>
            <Route index element={<New />} />
          </Route>
          <Route path="/diary/:id" element={<DiaryLayout />}>
            <Route index element={<Diary />} />
          </Route>
          <Route path="/edit/:id" element={<EditLayout />}>
            <Route index element={<Edit />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DiaryContext>
    </>
  );
}

export default App;
