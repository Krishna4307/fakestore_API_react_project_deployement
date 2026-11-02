import { Link, Outlet } from "react-router-dom";

function Students(){

    return(
        <>
            <h2>Students</h2>
            <Link to="studentList">StudentList</Link>&nbsp;|&nbsp;
            <Link to="studentForm">Add Student</Link>
            <Outlet/>
        </>
    )
}
export default Students;