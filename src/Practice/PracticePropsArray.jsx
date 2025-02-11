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
                            <li key={index}>{book.title} 지은이:({book.author})</li>
                    ))
                }
            </ul>
        </div>
    );
}

const MusicPlay = ({songs}) => {
    return (
        <div>
            <h2>🎵 음악 재생 목록</h2>
            <ul>
                {
                    songs.map((song, index) => {
                        return ( <li key={index}>{song.title ? song.title : "재생 목록이 없습니다."} - {song.artist}</li> )
                    })
                }
            </ul>
        </div>
    );
};

MusicPlay.defaultProps = {
    songs: [{
            title : "재생 목록이 없습니다.",
            artist : "아티스트가 미상."
            }]
}

const Tod = ({ tasks }) => {
    return (
        <div>
            <h2>✅ 할 일 목록</h2>
            <ul>
                {
                    tasks.map((task, index) => (
                        <li key={index}>
                            <input type="checkbox" checked={task.done} readOnly />
                            {task.done ? "완료 - " : "미완료 - "}
                            {task.task || "할 일이 없습니다." }
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

Tod.defaultProps = {
    tasks: "할 일이 없습니다."
}

const TeamMembers = ({ teamMaker }) => {
    return (
        <div>
            <h2>👥 팀원 목록</h2>
            <ul>
                {
                    teamMaker.map((team, index) => {
                      return ( <li key={index}>{team.name} {team.role}</li> )
                    })
                }
            </ul>
        </div>
    );
};

TeamMembers.defaultProps = {
    teamMaker: "등록된 팀원이 없습니다."
}

const ShoppingCart = ({ cartItems }) => {
    return (
        <div>
            <h2>🛒 쇼핑 장바구니</h2>
            <ul>
                {
                    cartItems.map((cart, index) => (
                        <li key={index}>{cart.item} {cart.quantity} 개</li>
                    ))
                }
            </ul>
        </div>
    );
};

ShoppingCart.defaultProps = {
    cartItems: "장바구니가 비었습니다."
}

const EventSchedule = ({ events }) => {
    return (
        <div>
            <h2>📅 행사 일정</h2>
            <ul>
                {
                    events.map((event, index) => {
                       return ( <li key={index}>{event.name} - {event.date}</li> )
                    })
                }
            </ul>
        </div>
    );
};

EventSchedule.defaultProps = {
    events: "예정된 행사가 없습니다."
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

    const songs = [
        { title: "Attention", artist: "Charlie Puth" },
        { title: "Shape of You", artist: "Ed Sheeran" },
        { title: "Dynamite", artist: "BTS" },
        { artist: "Black Pink" }
];

    const tasks = [
        { task: "React 공부하기", done: false },
        { task: "운동하기", done: true },
        { task: "책 읽기", done: false },
        { done: false }
    ];

    const teamMembers = [
        { name: "김철수", role: "프론트엔드 개발자" },
        { name: "박영희", role: "백엔드 개발자" },
        { name: "이민호", role: "디자이너" },
        { role: "시스템 개발자" }
    ];

    const cartItems = [
        { item: "노트북", quantity: 1 },
        { item: "무선 마우스", quantity: 2 },
        { item: "키보드", quantity: 1 }
    ];

    const events = [
        { name: "React 컨퍼런스", date: "2025-03-10" },
        { name: "개발자 밋업", date: "2025-04-22" },
        { name: "해커톤", date: "2025-05-15" }
    ];

    return (
        <div>
            <User users={userList} />
            <Product productList={productList} />
            <ScoreList scores={scores} />
            <Order orders={orders} />
            <BookList books={books} />
            <MusicPlay songs={songs} />
            <Tod tasks={tasks} />
            <TeamMembers teamMaker={teamMembers} />
            <ShoppingCart cartItems={cartItems} />
            <EventSchedule events={events} />
        </div>
    )
}
export default PracticePropsArray;
