import { Link, Outlet } from "react-router-dom";

function Courses(){

    return(
        <>
            <h2>Courses</h2>
            <Link to="courseList">Course List</Link>&nbsp;|&nbsp;
            <Link to="courseForm">Add New Course</Link>
            <Outlet/>
        </>
    )
}
export default Courses;