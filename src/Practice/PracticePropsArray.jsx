import React from 'react';

const PracticePropsArray = () => {

    return (
        <div>
            <Parent/>
        </div>
    )
}



const User = ({users}) => {
    return (
        <div>
            <h2>사용자 정보</h2>
            <ul>
                {users.map((user, index) => (
                     <li key={index}>{user.name} 님은 {user.age}세 입니다.</li>
                ))}
            </ul>
        </div>
    )
}

    const Product = ({productList}) => {
        return (
            <div>
                <h2>상품 정보</h2>
                <ul>
                    {productList.map((product, index) => {
                       return ( <li key={index}> 제품명 : {product.name} 가격 : {product.price}</li> )
                    })}
                </ul>
            </div>
        )
    }

const ScoreList = ({ scores }) => {
    return (
        <div>
            <h2>학생 점수 목록</h2>
            <ul>
                {
                    scores.map((score, index) => {
                        return (
                            <li key={index}>{score.name} 학생의 점수는 {score.score}점 입니다.</li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

const Order = ({ orders }) => {
    return (
        <div>
            <h2>주문 내역</h2>
            <ul>
                {
                    orders.map((order, index) => {
                        return (
                            <li key={index}>{order.item} {order.quantity}개</li>
                        )
                    })
                }
            </ul>
        </div>
    );
};


const BookList = ({ books }) => {
    return (
        <div>
            <h2>도서 목록</h2>
            <ul>
                {
                    books.map((book, index) => (
                            <li key={index}>{book.title} (지은이: {book.author})</li>
                    ))
                }
            </ul>
        </div>
    );
}

const Parent = () => {

    const userList = [
        {name : "홍길동" , age : 25},{name : "김철수" , age : 30},{name : "박영희" , age : 40}
    ];

    const productList = [
        {name : "노트북", price : 1200000},{name : "스마트폰", price : 800000},{name : "태블릿", price : 600000}
    ];

    const scores = [
        { name: "김영희", score: 95 }, { name: "이철수", score: 88 }, { name: "박민준", score: 76 }
    ];

    const orders = [
        { item: "커피", quantity: 2 }, { item: "샌드위치", quantity: 1 }, { item: "케이크", quantity: 3 }
    ];

    const books = [
        { title: "자바스크립트 완벽 가이드", author: "David Flanagan" }, { title: "리액트 프로그래밍", author: "김민수" }, { title: "모던 프론트엔드 개발", author: "이정환" }
    ];

     return (
        <div>
            <User users={userList} />
            <Product productList={productList} />
            <ScoreList scores={scores} />
            <Order orders={orders} />
            <BookList books={books} />
        </div>
    )
}
export default PracticePropsArray;
