import { useState } from "react"

function StudentsRegistrationForm({setStudentsData}){
    const[studentName,setStudentName]=useState("");
    const[email,setEmail]=useState("");
    const[course,setCourse]=useState("");
    function HandleSubmitStudentData(e){
        e.preventDefault();
        let newStudent={
            id:new Date(),
            studentName:studentName,
            email:email,
            course:course
        }
        setStudentsData(prevStudentData =>[...prevStudentData,newStudent]);
        setStudentName('');
        setEmail('')
        setCourse('')
    }
    return(
        <form onSubmit={HandleSubmitStudentData} id="student-form">
            <input type="text" value={studentName} placeholder="Enter a Student name" onChange={(e)=>(setStudentName(e.target.value))}/>
            <input type="email" value={email} placeholder="Enter an Student Email" onChange={(e)=>(setEmail(e.target.value))}/>
            <input value={course} placeholder="Enter a Course Name" onChange={(e)=>(setCourse(e.target.value))}/>
            <button type="submit">Submit</button>
        </form>
    )
}
export default StudentsRegistrationForm;