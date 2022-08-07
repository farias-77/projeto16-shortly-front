import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ranking from "./Ranking.js";
import SignUp from "./SignUp.js";
import SignIn from "./SignIn.js";
import Header from "./Header.js";
import { useState } from "react";
import Home from "./Home.js";
import "../assets/reset.css";
import "../assets/styles.css";

export default function App(){
    
    const [ user, setUser ] = useState();

    return (
        <BrowserRouter>
            <Header user={user} />
            <Routes>
                <Route path="/" element={<Ranking />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/home" element={< Home user={user} setUser={setUser} /> } />
            </Routes>        
        </BrowserRouter>
    )
}