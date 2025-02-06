import {useState} from "react";

function PracticeUseState() {
    return (
        <div>
            <UseStateOne/>
            <UseStateTwo/>
            <UseStateThree/>
            <UseStateFour/>
        </div>
    );
}

const UseStateOne = () => {

    const [text, setText] = useState('');

    return (
        <div>
            <input type="text" placeholder="텍스트를 입력하세요."
            value={text} onChange={(e) => setText(e.target.value)}
            />

            <p>입력한 값 : {text}</p>
        </div>

    );
}

const UseStateTwo = () => {

    const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);

    return (
        <div>
            <h1>랜덤 숫자 : {number}</h1>
            <button onClick={() => setNumber(Math.floor(Math.random() * 100) + 1)}>랜덤 숫자 생성</button>
        </div>
    );
}

function UseStateThree() {

    const [liked, setLiked] = useState(false);

    return (
        <div>
            <button onClick={() => setLiked(!liked)}> {liked ? '좋아요 취소' : '좋아요'} </button>
            <p>{liked ? '😊좋아요를 눌렀습니다😊' : '😐좋아요를 눌러보세요😐'}</p>
        </div>
    );
}

function UseStateFour() {

    const [text, setText] = useState('안녕하세요.');

    return (
        <div>
            <p>{text}</p>
            <button onClick={() => setText('반갑습니다.')}>텍스트 변경</button>
        </div>
    );
}

export default PracticeUseState;