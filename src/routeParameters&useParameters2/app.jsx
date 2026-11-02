import EmployeeCard from "./employeeCard";
import Navbar from "./navbar";
import EmployeeList from "./employeeList";
import EmployeesData from "./employeeData";
import Home from "./home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App(){
    return(
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/employeeList" element={<EmployeeList/>}>
                    <Route path=":id" element={<EmployeeCard/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App;