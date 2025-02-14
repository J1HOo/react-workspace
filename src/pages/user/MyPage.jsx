import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";


const MyPage = ({user}) => {
    const {navigate} = useNavigate();
    const [storedUser, setStoredUser] = useState(user);

    useEffect(() => {
        if (!user) {
            const savedUser = localStorage.getItem('user'); // 로컬 스토리지에 저장된 유저 정보를 가져온다.
            if (savedUser) {
                setStoredUser(JSON.parse(savedUser)); // 유저 정보가 있다면 JSON.parse()를 사용하여 객체로 변환한다.
            } else {
                navigate('/login'); // 유저 정보가 없다면 로그인 페이지로 이동한다.
            }
        }
    }, [user, navigate]);

    // if (!storedUser) {
    //     return <div>로딩중 ...</div>
    // }

    const handleLogout = () => {
        alert('로그아웃 되었습니다.');
    }

    return (
        <div>
            {storedUser ? (
                <>
                    <h1>마이페이지</h1>
                    <p>아이디 : {storedUser.userId}</p>
                    <button onClick={handleLogout}>로그아웃</button>
                </>
            ) : (
                <div>로딩중 ..</div>
            )}
        </div>
    );
}

export default MyPage;