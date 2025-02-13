import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const CafeList = () => {
    const [cafes, setCafes] = useState([]);

    useEffect(() => {
        axios.get("/api/cafes")
            .then((response) => {
                setCafes(response.data);
            })
            .catch((error) => {
                console.error("에러 발생: ", error);
            });
    }
    , []);

    return (
        <div>
            <h1>☕ 카페 목록</h1>
            <ul>
                {cafes.map((cafe) => (
                    <li key={cafe.id}>
                        <Link to={`/cafes/${cafe.id}`}>{cafe.name}</Link>
                    </li>
                ))}
            </ul>
            <Link to={"/cafes/add"}>새 카페 추가</Link>
        </div>
    );
};

export default CafeList;
