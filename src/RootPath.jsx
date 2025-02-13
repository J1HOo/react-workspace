import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; // Switch > Router
import PizzaList from "./BackendAPI/PizzaList";
import PizzaDetail from "./BackendAPI/PizzaDetail";
import PizzaForm from "./BackendAPI/PizzaForm";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Home from "./pages/Home";
import CafeList from "./pages/CafeList";
import CafeDetail from "./pages/CafeDetail";
import CafeForm from "./pages/CafeForm";

// const RootPath = () => {

function RootPath() {

    return (
        <Router>
            {/*
            경로(url, api)를 설정하여 위치에 따른 html 호출을 요청할 경우
            BrowserRouter as Router 를
             1. index.js 내부에서 모든 JavaScript 를 감싸주거나
             index.js 에서 감싸지않길 원한다면
             2. index.js 내부에 작성된 단일 자바 스크립트 내에
               최초 1회 작성하여 Component 들을 모두 감싸줌
             현재는 2번 방식을 사용한 상태이며,
             RootPath 와 같이 사용할 수 있음
               */}

            <Header />

            <Routes>
                {/*
                React 에서 경로로 표기하는 Component 와
                경로설정을 하지 않은 Component 구분이 필요
                경로설정이 필요한 Component 의 경우 Routes 내부에 작성
                경로 작성없이 호출만 원할 경우 Routes 외부에 작성
                Routes 외부에 작성하는 대표적인 예제 Component
                -> Header Footer
                */}

                {/*경로설정  path = api url 경로 작성   element = {<경로에 따라 보여줄 js 파일명칭>}

                 추후에 <Link> 태그 내부에
                    to="/경로" 작성하여 해당 경로로 이동할 수 있음

                    주의 해야할 점
                    상세보기와 같이 주소값이 유동적으로 변경되어야한다면
                    path 에서는 /:id 와 같이 작성하며
                    to 에서는 ${id} 와 같이 작성
                 */}
                <Route path="/" element={<Home />} />
                <Route path="/cafes" element={<CafeList />} />
                <Route path="/cafes/:id" element={<CafeDetail />} />
                <Route path="/cafes/add" element={<CafeForm />}  />

                <Route path="/pizzas" element={<PizzaList />} />
                <Route path="/pizzas/detail/:id" element={<PizzaDetail />} />
                <Route path="/pizzas/add" element={<PizzaForm />} />
            </Routes>

        <Footer />

        </Router>
    )
}

export default RootPath;
