// export default function Button(props) {
// props에 구조분해 할당 적용 - defaultProps는 없어지는 기능이라 이렇게 쓰는게 나을듯함
export default function Button({
  text,
  color = "black",
  children, // 자식요소를 전달받을 수 있는 props
}) {
  // console.log(props);

  // 함수를 return 밖에서 정의해서 html 태그 안에서 사용할 수 있음
  //? 이 때 이벤트함수는 이벤트 객체를 인자로 받을 수 있음
  const onClickButton = (e) => {
    /**
     * SyntheticBaseEvent - 합성 이벤트
     * 모든 웹 브라우저의 이벤트 객체를 하나로 통일한 형태
     * Cross Browsing Issue 해결에 도움이 됨
     * 통일된 규칙을 제공하는 거라고 생각하면 됨
     */
    console.log("event:", e); // => SyntheticBaseEvent {...}
    console.log(text);
  };

  return (
    <button
      style={{ color }}
      //? 이벤트 핸들러 등록
      // onClick={() => {
      //   console.log(text);
      // }}
      onClick={onClickButton}
      // onMouseEnter={onClickButton}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
}

// props의 기본값 설정 - 리액트 19 버전부터 삭제 된다고 함
// Button.defaultProps = {
//   color: "black",
// };
