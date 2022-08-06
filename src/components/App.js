import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ranking from "./Ranking.js";
import SignUp from "./SignUp.js";
import SignIn from "./SignIn.js";
import Header from "./Header.js";
import "../assets/reset.css";
import "../assets/styles.css";


export default function App(){
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Ranking />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
            </Routes>        
        </BrowserRouter>
    )
}