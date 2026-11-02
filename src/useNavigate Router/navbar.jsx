import { Link } from "react-router-dom";
import Home from "./home";
import Dashboard from "./dashboard";
import Login from "./login";
function Navbar(){
    return(
        <div>
            <Link to="/">Home</Link> &nbsp; | &nbsp; 
            <Link to="/dashboard">Dashboard</Link>&nbsp; | &nbsp;
            <Link to="/login">Login</Link>
            
        </div>
    )
    
}
export default Navbar;