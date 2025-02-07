

const ChapArrowFunction = () => {
    const add1 = (a, b) => {
        return a + b;
    }

    // return에서 a + b; 단일 코드만 작성하기 때문에 {}와 return 사용 가능
    const add2 = (a, b) => a + b;

    return (
        <div>
            <h1>화살표 함수 선언 방식</h1>
            <p> 1 + 2 = {add1(1, 2)} </p>
            <p> 3 + 4 = {add2(3, 4)} </p>
        </div>
    );

}

export  default ChapArrowFunction;