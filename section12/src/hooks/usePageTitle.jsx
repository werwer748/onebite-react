import { useEffect } from "react";

const usePageTitle = (title) => {
  useEffect(() => {
    // 관례상 돔요소를 직접 조작하는 경우 $를 붙인다.
    const $title = document.getElementsByTagName("title")[0];
    $title.innerText = title;
  }, [title]);
};

export default usePageTitle;
