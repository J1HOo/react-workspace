import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useState} from "react";


const Login = ({setUser}) => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault(); // 페이지 리로딩 방지
        axios.post('/api/user/login', {userId, password})
            .then(res => {
                if (res.data.status === 'success') {
                    const userData = res.data.user;
                    setUser(userData);
                    localStorage.setItem('user', JSON.stringify(userData));
                    alert('로그인에 성공했습니다.');
                    navigate('/mypage');
                } else {
                    alert('로그인에 실패했습니다. : ', res.data.message);
                }
            })
            .catch(err => {
                alert('백엔드 연결의 문제가 발생해 로그인을 할 수 없습니다.');
                console.log("에러 메시지 : ", err);
            });
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="아이디" value={userId} onChange={(e) => setUserId(e.target.value)}/>
                <input type="password" placeholder="비밀번호" value={password}
                       onChange={(e) => setPassword(e.target.value)}/>

                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;