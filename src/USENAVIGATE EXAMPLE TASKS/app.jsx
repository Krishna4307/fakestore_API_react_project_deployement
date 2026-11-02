import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./login";
import Home from "./home";
import Dashboard from "./dashboard";
import { useState } from "react";
import Header from "./header";
import ProtectedRoute from "./protectedRoute";
function App(){
    const[login,setLogin]=useState(false);
    return(
        <BrowserRouter>
        <Header login={login} setLogin={setLogin}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dashboard" element={<ProtectedRoute login={login} setLogin={setLogin}><Dashboard/></ProtectedRoute>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;