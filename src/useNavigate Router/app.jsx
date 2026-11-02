import Home from "./home";
import Dashboard from "./dashboard";
import Login from "./login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import { useState } from "react";

function App(){
    const[isLoggedIn,setIsLoggedIn]=useState(false);
    return(
        <>
            <h1>App Component</h1>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
                </Routes>
            </BrowserRouter>
        </>
        
    )
}
export default App;