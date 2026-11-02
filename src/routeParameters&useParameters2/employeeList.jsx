import { Link, Outlet } from "react-router-dom";
import EmployeesData from "./employeeData";
function EmployeeList(){
    return(
        <div>
            <h2>Employee List</h2><hr></hr>
            {EmployeesData.map((emp)=>(
                <div key={emp.id}>
                    <h3>{emp.name}</h3>
                    <Link to={`/employeeList/${emp.id}`}>View Employee</Link>
                </div>    
            ))}
            <Outlet/>

        </div>
    )
}
export default EmployeeList;