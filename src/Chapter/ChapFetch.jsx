import {useState} from "react";

const ChapFetch = () => {
    // 기본 js 에서도 사용 가능
    /*
    fetch 란 ?
    자바 스크립트에 기본적으로 내장된 비동기 http 요청 함수
    따로 설치할 필요 없이 사용 가능

    장점 : 자바스크립트에 기본 기능이기 때문에 별도의 라이브러리 설치가 필요 없음
          .json() 메소드를 사용하여 json 데이터를 쉽게 파싱 가능
          json 형식이 간결하고 읽기 편하기 때문에 속도나 사용 측면 등에서 유리

    단점 : http 400 이나 500 에러가 발생해도 fetch 는 성공 상태로 간주
           -> response.ok 를 사용하여 상태를 확인해야 함
           -> response.ok 문제가 없음을 200번대 코드로 확인
          자체적으로 데이터 종료 시점을 설정 할 수 없음 (timeout 설정 불가)
           axios 는 JSON 데이터를 자동으로 파싱해주지만 fetch 는 수동으로 해야함
           POST 요청을 할 때 headers 와 body 를 직접 설정해야 하는 번거로움이 있음

     */

    const [data, setData] = useState("");

    // fetch 함수의 기본 사용법
    fetch('api 주소')
        .then((res) => {
                res.json() // 데이터를 가져오는 것에 성공하면 json 형태로 변환, response = res
            }
        )
        .then((data) => {
                setData(data) // json 형태로 변환 성공시 setData 함수를 통해 데이터 저장
            }
        )
        .catch((error) => {
                alert("에러 발생");
                console.log(error) // 에러 발생시 에러 출력
            }
        )
}