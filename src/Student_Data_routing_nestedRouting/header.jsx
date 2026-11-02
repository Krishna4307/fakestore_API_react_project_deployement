import Dashboard from "./dashboard";
import { Link ,Outlet} from "react-router-dom";
function Header(){
    return(
        <>
            <Link to="/">Home</Link>&nbsp;|&nbsp;
            <Link to="/dashboard">Dashboard</Link>&nbsp;|&nbsp;
            <Link to="/students">Students</Link> &nbsp;|&nbsp;
            <Link to="/courses">Courses</Link>&nbsp;|&nbsp;
            <Link to="/about">About</Link>
        </>
        

    )
}
export default Header;