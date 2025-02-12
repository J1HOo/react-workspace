import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PizzaList from "./BackendAPI/PizzaList";
import PizzaDetail from "./BackendAPI/PizzaDetail";

// const RootPath = () => {

function RootPath() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<PizzaList />} />
                <Route path="/pizzas/detail/:id" element={<PizzaDetail />} />
            </Routes>
        </Router>
    )
}

export default RootPath;