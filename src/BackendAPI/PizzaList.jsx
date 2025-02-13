import {useEffect, useState} from "react";
import axios from "axios";
import './Pizza.css';
import {Link} from "react-router-dom";

const  PizzaList = () => {
    const [pizzas, setPizzas] = useState([]);

    /*
       () => {}
       소괄호나 중괄호 내부에 들어갈 변수이름 이나 기능이 하나만 존재한다면
       괄호 생략 가능
       변수이름이나 기능이 두가지 이상 존재한다면
       괄호를 필수로 작성
       예시 :
               useEffect (     () => {}, []                 )
               useEffect (     event => {}, []              ) -> 소괄호 생략
               useEffect (     () => alert("안녕!"), []     ) -> 중괄호 생략
               useEffect (     event => alert(event), []    ) -> 소괄호 중괄호 모두 생략
               useEffect (    (event) => {alert(event)}, [] ) -> 소괄호 중괄호 모두 사용
               useEffect (    (event, xyz) => {                -> 소괄호 중괄호 모두 생략불가
                                               setPizzas("피자")
                                               alert(event);
                                               }, [] )
               .then(     () => {}     )
               .then(     (res) => {setPizzas(res.data)} ) -> 소괄호 중괄호 모두 사용
               .then(     res   => {setPizzas(res.data)} ) -> 소괄호 생략
               .then(     (res) => setPizzas(res.data)   ) -> 중괄호 생략
               .then(     res   => setPizzas(res.data)   ) -> 소괄호 중괄호 모두 생략
               .then(    ( res, rep )  => {                 -> 소괄호 중괄호 모두 생략 불가
                                               setPizzas(res.data)
                                               alert("데이터를 성공적으로 호출했습니다.");
                                           }
                   )
   */


    useEffect(() => {
        axios.get('http://localhost:8080/api/pizzas')
            .then(res => { setPizzas(res.data) })
            .catch(() => { alert("API 주소에서 데이터를 가져올 수 없습니다.") });
    }, []);

    return (
        <div>
            <h1>🍕피자 메뉴</h1>
            <Link to={"/pizzas/add"}>메뉴 추가히기</Link>

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