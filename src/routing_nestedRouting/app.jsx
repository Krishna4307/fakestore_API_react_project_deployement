import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import StudentLayout from "./pages/studentLayout.jsx";
import Dashboard from "./pages/dashboard";
import Settings from "./pages/settings";
import Profile from "./pages/profile";
import Courses from "./pages/courses";

function App(){
    return(
        <>
            <h1>Welcome to the Student Portal </h1>
            <BrowserRouter>
                <nav>
                    <Link to="/">Home</Link> |
                    <Link to="/about">About</Link> | 
                    <Link to="/studentLayout">student Portal</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/studentLayout" element={<StudentLayout/>}>
                        <Route path="dashboard" element={<Dashboard/>}/>
                        <Route path="courses" element={<Courses/>}/>
                        <Route path="profile" element={<Profile/>}/>
                        <Route path="settings" element={<Settings/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;