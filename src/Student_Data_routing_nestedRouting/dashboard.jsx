import { Link } from "react-router-dom";

function Dashboard(){
    return(
        <>
            <h2>Welcome to Student Management Dashboard</h2>
            <p>Total Students : 20</p>
            <p>Total Courses :5 </p>
            <Link to="/students/studentList">View Studnets</Link>&nbsp;|&nbsp;
            <Link to="/students/studentForm">Add Studnet</Link> &nbsp;
        </>
        
    )
}
export default Dashboard;