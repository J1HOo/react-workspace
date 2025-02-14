import React from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

// Route 에서 유저 정보를 전달 받고 전달 받은 정보로 로그인 유무 설정
const UserHome = ({user}) => {
    const {navigate} = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    }

    const handleLogout = () => {
        axios.post('/api/user/logout')
            .then(res => {
                localStorage.removeItem('user');
                alert('로그아웃 되었습니다.');
                navigate('/login');
            })
            .catch(err => {
                alert('로그아웃을 할 수 없습니다.');
                console.log("에러 메시지 : ", err);
            });
    }

    return (<div>
        <h1>유저 홈페이지</h1>
        {user ? (<div>
                <p>환영합니다. {user.name}님</p>
                <button onClick={handleLogout}>로그아웃</button>
            </div>
        ) : (
            <div>
                <p>로그인이 필요합니다.</p>
                <button onClick={handleLogin}>로그인</button>
            </div>)}
    </div>)
}

export default UserHome;