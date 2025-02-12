import {useEffect, useState} from "react";
import axios from "axios";
import './PizzaList.css';
import {Link} from "react-router-dom";

const  PizzaList = () => {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/pizzas')
            .then(res => { setPizzas(res.data) })
            .catch(() => { alert("API 주소에서 데이터를 가져올 수 없습니다.") });
    }, []);

    return (
        <div>
            <h1>🍕피자 메뉴</h1>
            <div className="pizza-list">
                { pizzas.map( (pizza) => {
                    return <div key={pizza.id} className="pizza-item">
                        <h3> {pizza.name} </h3>
                        <p>가격 : {pizza.price} 원</p>
                        <p>설명 : {pizza.description}</p>

                        <Link to={`/pizzas/detail/${pizza.id}`}>
                            <button>상세 보기</button>
                        </Link>
                    </div>
                }) }
            </div>
        </div>
    );
}

export default PizzaList;