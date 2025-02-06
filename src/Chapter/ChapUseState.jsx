import {useState} from 'react';

// 리액트에 기본으로 내장 되어 있는 컴포넌트의 상태를 관리할 수 있게 해주는 기능


function ChapUseState() {

    // 자바스크립트 변수 이름 선언 방법

    // 1. 단일 변수 선언
    const abc = 1;

    // 2. 기본값을 가진 배열 형식 변수 선언
    const [def, setDef] = useState(0);

    // 3. 에러 발생
    //  const [ghi, jkl] = 0;

    const [count, setCount] = useState(0);
    // count : 초기값 (숫자, 문자열, 객체, 배열 등 모두 가능)
    // setCount : 초기값을 설정하는 함수
    // useState(0) : 기본 초기값을 0으로 설정

    // const 기능명 = (이벤트) => { 실행코드 } // 어떤 이벤트가 발생했을 때 코드를 실행
    const plusBtn = () => { setCount(count + 1); }
    const minusBtn = () => { setCount(count - 1); }


    // return 안에서 js 변수 사용할 때는 {}로 감싸서 사용 ex) {변수명}
    return (
        <div>
            <h1>useState 테스트</h1>
            <p>현재 카운트 : {count}</p>
            <button onClick={plusBtn}>증가</button>
            <button onClick={() => setCount(count - 1)}>감소</button> {/* 되도록 지양하는 방식 */}
        </div>
    );
}

export default ChapUseState;