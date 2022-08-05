import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ranking from "./Ranking.js";
import Header from "./Header.js";
import "../assets/reset.css";
import "../assets/styles.css";


export default function App(){
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Ranking />} />
            </Routes>        
        </BrowserRouter>
    )
}