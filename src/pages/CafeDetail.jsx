import { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const CafeDetail = () => {

    const { id } = useParams();
    const [cafe, setCafe] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`/api/cafes/${id}`)
            .then((res) => {
                setCafe(res.data);
            })
            .catch(() => {
                alert("카페 데이터를 가져올 수 없습니다.");
            });
    }
    , [id]);

    if (!cafe) {
        return <div>로딩 중...</div>;
    }

    return (
        <div>
            <h1>{cafe.name} 상세 정보</h1>
            <p>📍 주소: {cafe.address} </p>
            <p>📞 전화번호: {cafe.phoneNumber}</p>
            <p>🕒 영업시간: {cafe.openingTime} - {cafe.closingTime}</p>
            <p>📖 설명: {cafe.description}</p>

            <button type="button" onClick={() => navigate(-1)}>돌아가기</button>
        </div>
    );
};

export default CafeDetail;
