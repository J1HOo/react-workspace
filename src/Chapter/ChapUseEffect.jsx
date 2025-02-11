import {useEffect, useState} from "react";
import axios from "axios";
// npm i axios
// https://www.npmjs.com/

const FetchAPiCat = () => {

    // ajax, axios 이전에 js 내에서 만든 api 전달, 전송 기능
// a라는 명칭이 존재하는 함수 useEffect(() => function a() {  }, []);
// 기능을 다른 const나 function에서 재사용 할 이유가 업는 익명 함수 useEffect(() => {  }, []);

    const [cat, setCat] = useState(null);

    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/images/search') // api url 주소 입력 공간
            .then(res => res.json()) // 데이터를 json 형태로 변환
            // index 0번째에 있는 url 값만 가져와 cat 변수에 저장할 수 있도록 설정
            .then(data => { setCat(data[0].url) }) // 데이터를 가져오는 것에 성공하면 특정 값(변수)에 전달

            .catch( () => { alert("API 주소에서 데이터를 가져올 수 없습니다.") } ) // 데이터 가져오는 것에 실패하면 에러 메시지 출력

    },[]);

    return (
        <div>
            <h1>랜덤 고양이 사진</h1>
            { cat ? <img src={cat} alt="cat" style={{width: '300px'}}/> : <h2> 로딩 중... </h2> }
        </div>
    );
}

const AxiosApiCat = () => {
    const [cat, setCat] = useState(null);

    useEffect(() => {
        axios.get('https://api.thecatapi.com/v1/images/search')
            .then(res => { setCat(res.data[0].url) })
            .catch( () => { alert("API 주소에서 데이터를 가져올 수 없습니다.") } )

    },[]);

    return (
        <div>
            <h1>랜덤 고양이 사진</h1>
            { cat ? <img src={cat} alt="cat" style={{width: '300px'}}/> : <h2> 로딩 중... </h2> }
        </div>
    );
}

const APIDog = () => {
    const [dog, setDog] = useState(null);

    const dogBtn = () => {
        axios.get('https://api.thedogapi.com/v1/images/search')
            .then(res => { setDog(res.data[0].url) })
            .catch(() => { alert("API 주소에서 데이터를 가져올 수 없습니다.") });
    }

    useEffect(() => {
        dogBtn();
    }, []);

    return (
        <div>
            <h1>랜덤 강아지 사진</h1>
            { dog ? <img src={dog} alt="dog" style={{width: '300px'}}/> : <h2> 로딩 중... </h2> }
            <button onClick={dogBtn}>강아지 사진 새로고침</button>
        </div>
    );
}

const APIRandomJoke = () => {
    const [setup, setSetup] = useState(null); // 농담 빌드업
    const [delivery, setDelivery] = useState(null); // 농담 대답

    useEffect(() => {
        axios.get('https://v2.jokeapi.dev/joke/Any?type=twopart')
            .then(res => {
                setSetup(res.data.setup);
                setDelivery(res.data.delivery);
            })
            .catch(() => {
                alert("API 주소에서 데이터를 가져올 수 없습니다.");
            });
    }, []);

    return (
        <div>
            <h1>랜덤 농담</h1>
            { setup ? <h2> {setup} </h2> : <h2> 로딩 중... </h2> }
            { delivery ? <h2> {delivery} </h2> : <h2> 로딩 중... </h2> }
        </div>
    );
};


const PracticeUseEffectAxios = () => {

    return (
        <div>
            <APIDog/>
            <APIRandomJoke/>
        </div>
        )

}


const ChapUseEffect = () => {
    /*
    useEffect 컴포넌트의 생명 주기 관리
    컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정할 수 있는 훅

    렌더링 : 서버로부터 HTML 파일을 받아 브라우저에 그리는 과정 (화면에 보이는 것)
    ex) 로그인 렌더링 : 로그인 화면과 로그인에 관련된 스타일, 스크립트 실행
     */

    /*
    useEffect( (event 또는 매개변수) => {실행할 기능 작성 } [특정 값이 변경 될 때 마다 실행] );
    useEffect( () => {실행할 기능 작성 } []); // [] 비어 있을 시 컴포넌트가 처음 렌더링 될 때만 실행
    useEffect( () => {실행할 기능 작성 }); // 특정 JS 호출 할 때 마다 실행
    useEffect(() => {
         rerun () => {
                    // 특정 컴포넌트 사용을 더 이상 하지 않을 때 실행 할 기능 작성
                    ex) 이벤트 제거, 타이머 제거, 라이브러리 인스턴스 제거
                 }
            }, [특정 값]);

     */

    return (
        <div>
            {/*<FetchAPiCat/>*/}
            {/*<AxiosApiCat/>*/}
            <PracticeUseEffectAxios/>
        </div>
    );
}

export default ChapUseEffect;
