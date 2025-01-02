import { useState } from "react";

function useInput() {
  //? 별도의 파일로 분리해서 사용할 수도 있다.
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return [value, onChange];
}

export default useInput;
