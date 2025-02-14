import {Navigate, Route} from "react-router-dom";


const ProtectedRoute = ({children}) => {
    const storedUser = localStorage.getItem('user'); // 로컬 스토리지에 저장된 유저 정보를 가져온다.
    const user = storedUser ? JSON.parse(storedUser) : null; // 유저 정보가 있다면 JSON.parse()를 사용하여 객체로 변환한다.

    // return 내에 코드가 한 줄이라면 중괄호 및 시작 태그를 생략할 수 있다.
    return  user ? children : <Navigate to={"/login"}/>  // 유저 정보가 있다면 children을 렌더링하고, 없다면 로그인 페이지로 이동한다.
}

export default ProtectedRoute;
