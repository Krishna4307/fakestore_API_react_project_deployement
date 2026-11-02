import { useContext } from "react";
import { Link } from "react-router-dom";
import { StudentContext } from "../app";
import "./userHeader.css"
function UserHeader(){
    const{admin,studentForm,setStudentForm}=useContext(StudentContext);
    return(
        <nav  className="navbar">
            <ul id="list-items">
                <li>
                    <Link to="/" className="nav-link">Home</Link>
                </li> 
                <li>
                    <Link to="about" className="nav-link">About Us</Link>
                </li> 
                <li>
                    <Link to="services" className="nav-link">Facilities & Services</Link>
                </li> 
                <li>
                    <Link to="rooms" className="nav-link">Rooms & Accomdations</Link>
                </li>
                <li>
                    <Link to="contactUs" className="nav-link">Contact US</Link>
                </li> 
                <li>
                    <Link to="bookBed" className="nav-link">Book Your Bed ➡️</Link>
                </li> 
                <li>
                    {admin!==true && <Link to="adminLogin" className="nav-link"><button className="nav-link">Login As Admin</button></Link>}
                </li>
            </ul>
        </nav>
    )
}
export default UserHeader;