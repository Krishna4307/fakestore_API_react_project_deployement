import StudentForm from "./studentForm";
import StudentList from "./studentList";
import React from "react";
import { useState } from "react";
function StudentApp(){
    const students = [
        {id: 1,name: "Rahul",age: 21,course: "Computer Science",marks: 82,city: "Hyderabad"},
        {id: 2,name: "Priya",age: 20,course: "Information Technology",marks: 36,city: "Vijayawada"}
    ];
    const[studentsData,setStudentsData]=useState(students);
    return(
        <>
            <StudentForm setStudentsData={setStudentsData}/>
            <StudentList studentsData={studentsData}/>
        </>
    )
}
export default StudentApp;