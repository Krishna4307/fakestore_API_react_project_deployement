import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Login from "./login";
import Home from "./home";
import Dashboard from "./dashboard";

function Header({login,setLogin}){
    const navigate=useNavigate();
    const handleLogin =()=>{
        if(login){
            setLogin(false)
            navigate("/Dashboard");
        }
        else{
            setLogin(true)
            navigate("/")
        }
    }
    return(
        <>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/login">Login</Link>
            <button onClick={handleLogin}>{login?"Logout":"Login"}</button>
        </>
    )
}
export default Header;