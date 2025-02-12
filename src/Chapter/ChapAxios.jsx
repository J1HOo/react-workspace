import axios from "axios";
import {useState} from "react";

const ChapAxios = () => {
    /*
    Axios 란 ?
    fetch 보다 간결하고 자동으로 JSON 변환 및 에러 처리를 지원하는 http 요청 라이브러리

    라이브러리 : 외부에서 만들어 놓은 함수들의 집합체
    도구 상자: 어떤 작업을 하기 위해 필요할 때마다 적절한 도구를 골라 사용

    프레임 워크 : 외부에서 만들어 놓은 함수들의 집합체 + 기준과 제한이 있음
    건축 회사: 집을 짓는 데 필요한 구조와 방식을 제공하며, 사용자는 정해진 틀 안에서 커스터마이징

    특징	               프레임워크                               라이브러리
    제어 흐름	   프레임워크가 제어, 개발자가 규칙에 맞춰 작성	  개발자가 제어, 필요한 기능만 호출
    범위	       전반적인 구조와 워크플로우 제공	              특정 작업에 집중한 기능 제공
    유연성	   제한적 (프레임워크 규칙을 따라야 함)	          유연 (필요한 부분만 선택적으로 사용 가능)
    의존성	   프로젝트가 프레임워크에 강하게 의존	          프로젝트는 독립적, 필요 시 라이브러리 교체 가능


    1. axios 설치
    npm install axios
    npm i axios
    yarn add axios

     */

    const [data, setData] = useState("");

    // axios GET 기본 사용법
    axios.get('api 주소')
        .then((res) => {
            setData(res.data)  // 데이터를 가져오는 것에 성공하면 자동으로 json 형태로 변환 후 setData 변수에 저장, response = res
            alert("데이터 가져오기를 성공했습니다.")
        })
        .catch((error) => {
            console.log(error) // 에러 발생시 에러 출력
        })

    // axios POST 기본 사용법, 문자 형식만 가능
    axios.post('api 주소', {
        title: "제목",
        description: "DB에 저장할 내용"
    })
        .then((res) => {
            setData(res.data)  // 데이터를 가져오는 것에 성공하면 자동으로 json 형태로 변환 후 setData 변수에 저장, response = res
            alert("데이터 가져오기를 성공했습니다.")
        })
        .catch((error) => {
            console.log(error) // 에러 발생시 에러 출력
        })

    // axios POST 기본 사용법, 파일 형식 포함
    const formData = new FormData();
    const file = "파일"; // input type="file" 에서 받은 파일

    formData.append('image_file', file);
    formData.append('title', "제목");
    formData.append('description', "DB에 저장할 내용");

    axios.post('api 주소', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })

    return (
        <div>
            <h1>Chapter Axios</h1>
        </div>
    );
}


export default ChapAxios;