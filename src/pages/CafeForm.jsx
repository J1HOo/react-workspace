import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const CafeForm = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [openingTime, setOpeningTime] = useState("");
    const [closingTime, setClosingTime] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        if (!name || !address || !phoneNumber || !openingTime || !closingTime || !description) {
            let msg = "필수 입력 : \n";
            if (!name) msg += "이름을 입력하세요.\n";
            if (!address) msg += "주소를 입력하세요.\n";
            if (!phoneNumber) msg += "전화번호를 입력하세요.\n";
            if (!openingTime) msg += "영업 시작 시간을 입력하세요.\n";
            if (!closingTime) msg += "영업 종료 시간을 입력하세요.\n";
            if (!description) msg += "설명을 입력하세요.\n";

            alert(msg);
            return;
        }

        axios.post("/api/cafes", {
            name: name,
            address: address,
            phoneNumber: phoneNumber,
            openingTime: openingTime,
            closingTime: closingTime,
            description: description,
        })
            .then((res) => {
                alert("카페가 추가되었습니다.");
                navigate("/cafes");
            })
            .catch(() => {
                alert("카페 추가에 실패했습니다.");
            });
        }

    return (
        <div>
            <h1>새로운 카페 추가</h1>
            <form onSubmit>
                <label>이름</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>

                <label>주소</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required/>

                <label>전화번호</label>
                <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required/>

                <label>영업 시작 시간</label>
                <input type="time" value={openingTime} onChange={(e) => setOpeningTime(e.target.value)} required/>

                <label>영업 종료 시간</label>
                <input type="time" value={closingTime} onChange={(e) => setClosingTime(e.target.value)} required/>

                <label>설명</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required/>

                <button type={"button"} onClick={handleSubmit}>추가하기</button>
            </form>

            <button onClick={() => navigate(-1)}>취소</button>
        </div>
    );
}

export default CafeForm;