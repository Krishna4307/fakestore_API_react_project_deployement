import { useParams } from "react-router-dom";
import EmployeesData from "./employeeData";
function EmployeeCard(){
    const{id}=useParams();
    let employee=EmployeesData.find((emp)=>{return emp.id === Number(id)})
    console.log(employee)
    return(
        <div>
            <h1>Employee card</h1><hr></hr>
            <h3>Name : {employee.name}</h3>
            <p>Age : {employee.age}</p>
            <p>Department : {employee.department}</p>
            <p>Position : {employee.position}</p>
            <p>Salary : {employee.salary}</p>
        </div>
    )
}
export default EmployeeCard;