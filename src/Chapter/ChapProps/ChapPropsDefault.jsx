

const ChapPropsDefault = () => {

    // 부모나 자식 호출
    return (
        <div>
            <Parent />
        </div>
    )
}

/*
// 값이 null 일 경우 기본값 설정
함수이름.defaultProps = {
    변수명1 : "기본값1",
    변수명2 : "기본값2"

}

// 회색인 이유 : const는 순차적으로 실행되기 때문에 Parent가 Child보다 먼저 선언되어 Child에서 Parent를 참조할 수 없다.
    Child.defaultProps = {
        name : "알 수 없음",
        money : 0
    }

    Parent.defaultProps = {
        name : "알 수 없음",
        money : 0
    }

 */

    // 자식 컴포넌트
    const ChildOne = ({name, money}) =>{
        return(
            <div>
               이름 : {name}
                <br/>
               당첨금 : {money}
            </div>
        )
    }

    // ({}) 안에 기본값을 설정할 수 있다
    const ChildTwo = ({name = "미수령", money = 0}) =>{
        return(
            <div>
               이름 : {name}
                <br/>
               당첨금 : {money}
            </div>
        )
    }


    // 부모 컴포넌트
    const Parent = () => {
        return (
            <div>
                <h1>이번주 로또 당첨자</h1>
                <ChildOne name = "홍길동" money = {20} />
                <ChildOne name = "김철수" />
                <ChildOne money = {100} />

                <ChildTwo name = "오길동" money = {20} />
                <ChildTwo name = "신철수" />
                <ChildTwo money = {100} />
            </div>
        )
    }

// 데이터 가져올 때 문제가 발생하면 자식 컴포넌트에 기본값을 설정해 문제를 방지 할 수 있다.
ChildOne.defaultProps = {
    name : "알 수 없음",
    money : 0
}

// Parent.defaultProps = {
//     name : "알 수 없음",
//     money : 0
// }

export default ChapPropsDefault;