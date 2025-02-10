import React from 'react';

const PracticePropsArray = () => {

    return (
        <div>
            <Parent/>
        </div>
    )
}


const Parent = () => {

    const userList = [
        {name : "가나다" , age : 5},{name : "마바사" , age : 15},{name : "아자차" , age : 25}
    ]

    const productList = [
        {name : "노트북", price : 100000},{name : "스마트폰", price : 200000},{name : "태블릿", price : 30000}
    ]

     return (
        <div>
            <User users={userList} />
            <Product productList={productList} />
        </div>
    )
}

const User = (props) => {
    return (
        <div>
            <h2>사용자 정보</h2>
            <ul>
                {props.users.map((user, index) => (
                     <li key={index}>{user.name} 님은 {user.age}세 입니다.</li>
                ))}
            </ul>
        </div>
    )
}

    const Product = (props) => {
        return (
            <div>
                <h2>상품 정보</h2>
                <ul>
                    {props.productList.map((product, index) => {
                       return ( <li key={index}> 제품명 : {product.name} 가격 : {product.price}</li> )
                    })}
                </ul>
            </div>
        )
    }

export default PracticePropsArray;