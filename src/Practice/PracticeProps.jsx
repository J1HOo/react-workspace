import React from "react";

const PracticeProps = () => {
    return (
        <div>
            <Parent1 />
            <Parent2 />
            <Parent3 />
            <Parent4 />
            <Parent5 />
        </div>
    );
};

const Child1 = ({ name }) => {
    return (
        <div>
            <h2>내 이름은 : {name} 입니다.</h2>
        </div>
    );
};

const Parent1 = () => {
    return (
        <div>
            <h1>자식에게 이름 전달하기</h1>
            <Child1 name="홍길동" />
            <Child1 name="김철수" />
        </div>
    );
};

const Child2 = ({ name, age }) => {
    return (
        <div>
            <h2>🧒 {name}의 나이: {age}세</h2>
        </div>
    );
};

const Parent2 = () => {
    return (
        <div>
            <h1>👨‍👩‍👧‍👦 부모 컴포넌트 (나이 전달)</h1>
            <Child2 name="홍길동" age={25} />
            <Child2 name="김철수" age={30} />
        </div>
    );
};

const Child3 = ({ name, job }) => {
    return (
        <div>
            <h2>🧒 {name}의 직업: {job}</h2>
        </div>
    );
};

const Parent3 = () => {
    return (
        <div>
            <h1>👨‍👩‍👧‍👦 부모 컴포넌트 (직업 전달)</h1>

            <Child3 name="홍길동" job="의사" />
            <Child3 name="김철수" job="개발자" />
        </div>
    );
};

const Child4 = ({ name, color }) => {
    return (
        <div>
            <h2>🧒 {name}이 좋아하는 색상: {color}</h2>
        </div>
    );
};

const Parent4 = () => {
    return (
        <div>
            <h1>👨‍👩‍👧‍👦 부모 컴포넌트 (좋아하는 색 전달)</h1>

            <Child4 name="홍길동" color="빨강" />
            <Child4 name="김철수" color="파랑" />
        </div>
    );
};

const Child5 = ({ name, money }) => {
    return (
        <div>
            <h2>🧒 {name}의 재산 상속 내역</h2>
            <p>💰 상속받은 재산: {money}억 원</p>
        </div>
    );
};

const Parent5 = () => {
    return (
        <div>
            <h1>👨‍👩‍👧‍👦 부모의 재산 상속</h1>

            <Child5 name="홍길동" money={10} />
            <Child5 name="김철수" money={30} />
        </div>
    );
};

export default PracticeProps;
