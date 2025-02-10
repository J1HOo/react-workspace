const ChapPropsArray = () => {
    return (
        <div>
            {/*
            <Parent><Parent/>

            만약에 태그 내부에 요소로 특정 값을 넣거나
            특별히 설정할 일이 없다면 아래와 같이

            단축해서 작성할 수 있음
            <Parent/>

            */}
            <Parent/>
        </div>
    )
}

const ChildOne = ({name,age}) => {
    return (
        <div>
            <h2>name, age 로 가져온 사용자 목록</h2>
            <ul>
                <l1>{name} / {age} </l1>
            </ul>
        </div>
    )
}

const ChildTwo = (props) => {
    return (
        <div>
            <h2>props 로 가져온 사용자 목록</h2>
            <ul>
                <l1>{props.name} / {props.age} </l1>
            </ul>
        </div>
    )
}

// 메인으로 확인할 배열리스트   () 내부에 들어올 변수명이 단일 변수 이므로 {}로 감싸지 않아도 됨
const ChildThree = ({users}) => {
    return (
        <div>
            <h2>배열 형식의 사용자 목록</h2>
            <ul>
                {/* 배열 형식으로  단일 데이터가 아닌  2개 이상의 데이터를 표기할 것 */}
                {/* Parent 에서 가져온 변수 이름.map((반복문 내 변수명, 번호 순서 = index) => { (배열)}) */}
                {users.map((user, index) => (
                    <li key={index}> {user.name} / {user.age} </li>
                ))}


                {users.map((user, index) => {
                    // 추가적으로 작성할 js가 존재한다면 {}로 감싸서 js 작성
                    const exam1 = 1;
                    const exam2 = "textExam";
                    return ( <li key={index}> {user.name} / {user.age} </li> )
                })}
            </ul>
        </div>
    )
}
const Parent = () => {
    // javascript 작성하는 공간
    const numberList = [1,2,3]

    const stringList = ['가', '나', '다']

    //만약 배열에서 한 칸 당 2개 이상의 데이터를 표기하고 싶다면 {}로 묶어서 표기
    const numStringListOne = [{number: 1, string: '가'}, {number: 2, string: '나'}, {number: 3, string: '다'}]

    // DB에서 가져온 데이터를 배열로 표기할 때 사용할 배열 형태
    // [{ React 에서 가져온 DB를 사용할 변수 이름 1번 : Backend 에서 전달 받은 데이터 1번 , React 에서 가져온 DB를 사용할 변수 이름 2번 : Backend 에서 전달 받은 데이터 2번 }]
    // Backend 에서 가져온 데이터를 사용할 때 왼쪽에서 작성한 변수명을 사용하겠다.
    const numStringListTwo = [{numberList : numberList, stringList : stringList}]

    const userList = [
        {name: '홍길동', age: 25},
        {name: '김철수', age: 35},
        {name: '박영희', age: 65},
    ]

    return (
        <>
            {/* html 태그를 작성하는 공간*/}
            <h1> 부모 -> 자식 데이터를 전달 (기본 형태로 전달)</h1>
            <ChildOne name="가나다" age={10} />
            <ChildTwo name="마바사" age={100} />

            <h1> 부모 -> 자식 데이터를 전달 (배열 형태로 전달)</h1>
            {/* 사용할 변수 명칭 : users, 사용할 데이터 : userList 에 작성한 데이터 */}
            <ChildThree users = {userList}  />
        </>
    )
}
export default ChapPropsArray;