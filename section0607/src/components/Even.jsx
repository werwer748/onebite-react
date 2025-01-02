import { useEffect } from "react";

const Even = () => {
  // 3. 언마운트 제어
  useEffect(() => {
    // useEffect의 콜백함수가 반환하는 함수를 cleanup(정리) 함수라고 한다.
    // 컴포넌트가 사라질 때 실행된다.
    return () => {
      console.log("unmount");
    };
  }, []);

  return <div>짝수입니다.</div>;
};

export default Even;
