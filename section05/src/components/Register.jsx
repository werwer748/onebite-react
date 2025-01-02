import { useRef, useState } from "react";

/**
 * 컴포넌트에서 변수를 조작하면 리렌더링시 값이 초기화되니까
 * 만약 컴포넌트 함수 바깥에서 변수를 선언하면 어떨까?
 *
 * -> 콘솔로그로 확인해보면 문제없이 동작하는것 처럼 보인다.
 * 하지만 이 컴포넌트를 여러번 사용하게 되면 문제가 발생한다.
 * 컴포넌트를 호출하면 파일을 불러오는 것이 아니라 함수를 호출하는 것이기 때문에
 * 선언은 한번밖에 일어나지 않게되고 이 경우 count는 해당 컴포넌트끼리는 공유하는 변수가 된다.
 * 그래서 컴포넌트가 여러번 호출되면 count가 공유되어 값이 누적되어 출력된다.
 *
 * 따라서, 상황에 따라 훅을 적절히 활용하고
 * 특수한 경우가 아니라면 컴포넌트 외부에 변수를 선언하는 것은 지양하는 것이 좋다.
 */
// let count = 0;

/**
 * 간단한 회원가입 폼
 */
export default function Register() {
  //* 이렇게 여러개 스테이트를 관리하는건 조금 귀찮으니 객체로 묶어서 관리하는게 좋다.
  // const [name, setName] = useState("이름");
  // const [birth, setBirth] = useState("");
  // const [country, setCountry] = useState("");
  // const [bio, setBio] = useState("");

  const [registerInput, setRegisterInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  /**
   * useRef?
   * 컴포넌트 내부에 새로운 Reference 객체를 생성하는 기능
   * 컴포넌트의 변수?로써 일반적인 값들을 저장할 수 있다.
   * 값이 변경되더라도 컴포넌트가 리랜더링 되지 않는다.
   * 특정 DOM 요소에 접근해 요소를 조작할 때 사용한다.
   */
  // const refObj = useRef(0);
  // console.log("refObj::", refObj); // => {current: 0}
  // console.log("refObj.current::", refObj.current); // => {current: 0}
  //* 렌더링에 영향을 주지 않는 속성을 이용해 사용자의 입력을 카운팅하는 로직 만들어보기
  const countRef = useRef(0);
  //* DOM 요소에 접근하기 위한 ref
  const registerInputRef = useRef();

  /**
   * ? useRef를 사용하지 않고 변수를 만들어 사용하면?
   * - 렌더링이 일어날 때마다 변수가 초기화되기 때문에
   * count는 계속 0 + 1이 되어 1만을 출력한다.
   */
  // let count = 0;
  // 통합 이벤트 핸들러
  const onChange = (e) => {
    // console.log(e.target.name, e.target.value);
    // count++;
    countRef.current++;
    // console.log("countRef::", count);
    setRegisterInput({
      ...registerInput,
      [e.target.name]: e.target.value,
    });
  };

  /*
  const onChangeName = (e) => {
    // setName(e.target.value);
    // 객체 스테이트 업데이트
    setRegisterInput({
      ...registerInput,
      name: e.target.value,
    });
  };

  const onChangeBirth = (e) => {
    // setBirth(e.target.value);
    setRegisterInput({
      ...registerInput,
      birth: e.target.value,
    });
  };

  const onChangeCountry = (e) => {
    // setCountry(e.target.value);
    setRegisterInput({
      ...registerInput,
      birth: e.target.value,
    });
  };

  const onChangeBio = (e) => {
    // setBio(e.target.value);
    setRegisterInput({
      ...registerInput,
      bio: e.target.value,
    });
  };
  */

  //* useRef를 통해 입력값을 검증하고 제출하는 로직
  const onSubmit = () => {
    if (registerInput.name === "") {
      // 이름을 입력하는 DOM 요소에 포커스
      // console.log(registerInput.name);
      registerInputRef.current.focus();
    }
  };

  return (
    <div>
      {/* <button
        onClick={() => {
          refObj.current++;
          // 리렌더링을 일이키지 않기 때문에 콘솔에는 onClick내부 로그만 찍힌다.
          console.log("onClick Ref!!", refObj.current);
        }}
      >
        ref + 1
      </button> */}

      <div>
        <input
          type="text"
          placeholder="이름"
          // value={name}
          name="name"
          value={registerInput.name}
          onChange={onChange}
          ref={registerInputRef}
        />
      </div>
      <div>
        <input
          type="date"
          // value={birth}
          name="birth"
          value={registerInput.birth}
          onChange={onChange}
        />
      </div>
      <div>
        <select
          name="country"
          onChange={onChange}
          // value={country}
          value={registerInput.country}
        >
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        <textarea
          name="bio"
          // value={bio}
          value={registerInput.bio}
          onChange={onChange}
        />
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
}
