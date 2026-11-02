import Home from "./home";
import EmployeeList from "./employeeList";
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <div>
            <Link to="/">Home</Link>&nbsp; | &nbsp;
            <Link to="/employeeList">EmployeeList</Link>
        </div>
    )
}
export default Navbar;