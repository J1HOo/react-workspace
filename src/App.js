import "./App.css";



function App() {
  return (
    <div>

    </div>
  );
}


function AppDescription() {
  // 자바 스크립트 코드 작성

  // return (<div> HTML 코드 작성 </div>);
  // return 문 안에는 반드시 <div></div> 태그나 <></> 태그로 감싸고 시작해야 한다.
  return (
    <div>
      <h1>App.js 메인 페이지</h1>
      <pre>
        리액트에서 파일을 만들 때 규칙
        1. 파일명은 대문자로 시작한다.
        2. return문 안에는 <div></div> 태그나 <></> 태그로 감싸고 시작해야 한다.
        3.자바스크립트 코드는 중괄호 {}로 감싸서 작성한다.
        4. export default App; 코드를 작성 해야 외부에서 특정 파일의 특정 기능을 사용할 수 있다.
      </pre>
    </div>
  );
}

export default AppDescription;

/*
만약 AppDescription() 함수를 export default로 지정하고 싶다면 다음과 같이 작성한다.
export default function AppDescription() {}

만약 App() 함수를 export default로 지정하고 싶다면 다음과 같이 작성한다.
export default function App() {}

export default는 한 파일에서 한 번만 사용할 수 있다.

function 기능명칭1번() {}
function 기능명칭2번() {}
function 기능명칭3번() {}

개발자가 기본적으로 보여주고자 하는 기능명칭을 export default 기능명칭; 으로 지정한다.
 */
