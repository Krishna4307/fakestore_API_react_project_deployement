import { Link, Outlet } from "react-router-dom";
function StudentLayout(){
    return(
        <div>
            <h1>Welcome ,Student</h1>
            <nav>
                <Link to="dashboard">Dashboard</Link> &nbsp;|&nbsp;
                <Link to="courses">Courses</Link>&nbsp;|&nbsp; 
                <Link to="profile">Profile</Link>&nbsp;|&nbsp;
                <Link to="settings">Settings</Link>
            </nav>
            <Outlet/>
        </div>
    )
}
export default StudentLayout;