import {useState} from "react";

function PracticeUseState() {
    return (
        <div>
            <UseStateOne/>
            <UseStateTwo/>
        </div>
    );
}

function UseStateOne() {

    const [text, setText] = useState('');

    return (
        <div>
            <input type="text" placeholder="텍스트를 입력하세요."/>
            value={text}
            onChange={(e) => setText(e.target.value)}
        </div>
    );
}

function UseStateTwo() {

    const [number, setNumber] = useState(Math.random());

    return (
        <div>
            <h1>랜덤 숫자 : {number}</h1>
            <button onClick={() => setNumber(Math.floor(Math.random() * 100) + 1)}>랜덤 숫자 생성</button>
        </div>
    );
}

export default PracticeUseState;