import "./Main.css";
/**
 * JSX 주의 사항 - return문 내의 html태그 작성 부분
 * 
  1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
  2. 숫자, 문자열, 배열 값만 렌더링 된다.
  3. 모든 태그는 닫혀 있어야 한다. <></>, <br />, <input />, <img />
  4. 최상위 태그는 반드시 하나여야만 한다. - <></>(Fragment) 마땅히 사용할 태그가 없을 때 사용

  export default function Main() {
  const number = 9;
  const obj = { a: 1 };

  return (
    <main>
      <h1>main</h1>
      <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>

      렌더링 안되는 값들
        {null}
        {undefined}
        {tru
      객체 그대로 넣으면 에러
        {obj.a}
      </main>
    )
  }
*/
export default function Main() {
  const user = {
    name: "이정환",
    isLogin: true,
  };

  //? 조건부 렌더링 1
  // return (
  //   <>
  //     {user.isLogin ? (
  //       <div>로그아웃</div>
  //       ) : (
  //       <div>로그인</div>
  //       )}
  //   </>
  // );

  //? 조건부 렌더링 2
  if (user.isLogin) {
    return (
      <div
        //? 인라인 스타일링 - 코드가 길어지면 가독성이 떨어진다.
        // style={{
        //   backgroundColor: "red",
        //   color: "white",
        //   borderBottom: "5px solid blue",
        // }}
        //? 클래스명을 추가하여 css를 적용하는 방법 - class 대신 className을 사용
        className="logout"
      >
        로그아웃
      </div>
    );
  } else {
    return <div>로그인</div>;
  }
}
