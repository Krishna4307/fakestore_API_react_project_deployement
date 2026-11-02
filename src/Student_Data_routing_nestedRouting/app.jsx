import Header from "./header";
import StudentForm from "./students/studentsForm";
import StudentList from "./students/studentsList";
import CourseForm from "./Courses/courses_form";
import CourseList from "./Courses/courses_list";
import About from "./about";
import Students from "./students/students";
import Home from "./home";
import Courses from "./Courses/courses";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard";
function App(){
    return(
        <>
            {/* <h1>This is App Component</h1> */}
            <BrowserRouter>
                <Header/>
                <Routes>
                    
                    <Route path="/" element={<Home/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/courses" element={<Courses/>}>
                        <Route path="courseForm" element={<CourseForm/>}/>
                        <Route path="courseList" element={<CourseList/>}/>
                    </Route>
                    <Route path="/students" element={<Students/>}>
                        <Route path="studentForm" element={<StudentForm/>}/>
                        <Route path="studentList" element={<StudentList/>}/>
                    </Route>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;