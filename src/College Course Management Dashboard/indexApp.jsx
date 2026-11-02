import { useState } from "react";
import CourseForm from "./courseForm";
import CourseList from "./courseList";
import StudentsRegistrationForm from "./studentRegistrationForm";
import StudentsRegistrationList from "./studentRegistrationList";
import "./indexApp.css";

function IndexApp(){
    const courses = [
        {id: 1,name: "JavaScript",instructor: "Ravi Kumar",duration: "3 Months",students: 35,capacity: 40},
        {id: 2,name: "React",instructor: "Priya Sharma",duration: "2 Months",students: 40,capacity: 40},
        {id: 3,name: "Node.js",instructor:"Pawan Kalyan",duration: "2.5 Months",students: 22,capacity: 40},
        {id: 4,name: "MERN Stack",instructor: "Ram Charan",duration: "2 Months",students: 40,capacity: 40}
    ];

    let students= [
        {id: 1,studentName: "Rahul",email: "rahul@gmail.com",course: "React"},
        {id: 2,studentName: "Kitty",email: "kitty@gmail.com",course: "MERN Stack"},
        {id: 3,studentName: "Charan",email: "charan@gmail.com",course: "Express.js"},
        {id: 4,studentName: "Chaitanya",email: "chaitanya@gmail.com",course: "Javascript"}
]
    const[coursesData,setCoursesData]=useState(courses);
    const[studentsData,setStudentsData]=useState(students);
    return(
        <div id="app-container">
            <h1 className="heading">College Course Management Dashboard</h1>
            <CourseForm setCoursesData={setCoursesData}/>
            <CourseList coursesData={coursesData}/>
            <StudentsRegistrationForm setStudentsData={setStudentsData}/>
            <StudentsRegistrationList studentsData={studentsData}/>
        </div>
    )
}
export default IndexApp;