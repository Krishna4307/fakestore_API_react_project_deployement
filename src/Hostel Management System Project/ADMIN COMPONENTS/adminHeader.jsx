import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StudentContext } from "../app";
import "./adminHeader.css"
function AdminHeader(){
    const {userDetailsForm, adminData}=useContext(StudentContext)
    const navigate=useNavigate();
    return(
        <header className="">
            <h3>Hello, Mr. {adminData.name}</h3>
            <hr className="mt-0"></hr>
            <h5 style={{letterSpacing: "2px"}}>Navigation</h5>
            <Link to="/adminDashboard" className="link">Home</Link>
            <Link to="/studentsData" className="link">Students Data</Link>
            <Link to="/" className="link">⬅️ Back To Users HomePage</Link>
            <Link to="/bookedusers" className="link">Booked Users</Link>
            <Link to="/notifications" className="link">🔔Notifications (<span style={{color:"red"}}>{userDetailsForm.length}</span>)</Link>
            <Link to="/studentForm" className="link"><button className="btn btn-primary">➕ Add New Student</button></Link>
        </header>
    )
}
export default AdminHeader;