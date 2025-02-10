//  props : Properties 의 약자로 부모 컴포넌트가 자식 컴포넌트에게 전달하는 데이터
// 자식컴포넌트 props 값을 변경할 수 없음
/*
const ChapProps = () => {
    // 부모 컴포넌트
    const 부모 = () => {
        //자식에게 전달할 값을 작성
        const 값전달 = "전달한값";
        return (
            <div>
                <자식 매개변수={값전달} />
            </div>
        )
    }

    const 자식 = ({전달받은값}) =>{
        return(
            <div>
                {전달받은값}
                {/ * 전달받은 값이 여러 항목 . 이용해서 세부항목 변수명 작성 * / }
                {전달받은값}
            </div>
        )
    }


}
*/

// 🧒💰👨‍👩‍👧‍👦

// Child 자식 컴포넌트 (부모에게 받은 재산을 표시)
//              ㅇㅇㅇ 자식 얼마 받고
//              ㅁㅁㅁ 자식은 얼마 받음
const Child = ({name  , inheritance}) => {
    return(
        <div>
            <h2>🧒 {name}의 재산 상속 내역</h2>
            <p>💰 상속받은 재산 : {inheritance} 억 원</p>
        </div>
    )
}

const 김철수 = ({재산}) =>{
    return(
        <div>
            <h2>🧒 김철수 의 재산 상속 내역</h2>
            <p>💰 상속받은 재산 : {재산} 억 원</p>
        </div>
    )
}
const 홍길동 = ({재산}) =>{
    return(
        <div>
            <h2>🧒 김철수 의 재산 상속 내역</h2>
            <p>💰 상속받은 재산 : {재산} 억 원</p>
        </div>
    )
}
const 이영희 = ({재산}) =>{
    return(
        <div>
            <h2>🧒 김철수 의 재산 상속 내역</h2>
            <p>💰 상속받은 재산 : {재산} 억 원</p>
        </div>
    )
}
const Parent = () => {
    return(
        <div>
            <h1>👨‍👩‍👧‍👦 부모의 재산 상속</h1>
            {/*     데이터베이스에서 전달받은  */}
            <Child name="이름" inheritance={"재산"} />
            <Child name="홍길동" inheritance={10} />
            <Child name="김철수" inheritance={5} />
            <Child name="이영희" inheritance={20} />

        </div>
    )
}
// Parent 부모 컴포넌트 (자식에게 재산을 넘겨줌)
export default Parent;