import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";


const PizzaDetail = () => {

    const { id } = useParams(); // useParams() 함수를 사용하여 URL 파라미터 값을 가져옴
    const [pizza, setPizza] = useState(null);
    const navigate = useNavigate(); /// 현재 위치를 기반으로 다른 경로로 이동할 수 있는 함수 useHistory() -> useNavigate()

    const backBtn = () => {
        navigate(-1); // 뒤로가기
        /*
        navigate(1); // 앞으로 가기
        navigate('/'); // 홈으로 이동
        navigate('/경로'); // /경로 이동 window.location.href = '/경로' 와 같음, Link 컴포넌트와 다르게 페이지를 새로고침함
        */
    }

    useEffect(() => {
        // /api/pizzas/:id 엔드포인트에서 피자 데이터를 가져옵니다.
        axios.get(`/api/pizzas/${id}`)
            .then(res => {
                setPizza(res.data);
            })
            .catch(() => {
                alert("피자 데이터를 가져올 수 없습니다.");
            });
    }, [id]);

    if (!pizza) {
        return <div>로딩 중...</div>;
    }

    return (
        <div>
            <h1>피자 상세보기</h1>
            <p>가격 : {pizza.price} 원</p>
            <p>피자 설명 상세보기 : {pizza.description}</p>
            <button onClick={backBtn}>돌아가기</button>

        </div>
    )
}

export default PizzaDetail;