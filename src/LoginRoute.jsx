import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserHome from "./pages/user/UserHome";
import Login from "./pages/user/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import MyPage from "./pages/user/MyPage";

function LoginRoute() {
    const [user, setUser] = useState(null);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<UserHome />} />
                <Route path="/login" element={<Login setUser={setUser} />} />
                <Route
                    path="/mypage"
                    element={
                        <ProtectedRoute>
                            <MyPage user={user} setUser={setUser} />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </Router>
    );
}

export default LoginRoute;
