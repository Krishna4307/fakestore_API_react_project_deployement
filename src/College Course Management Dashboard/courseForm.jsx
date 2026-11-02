import { useState } from "react"

function CourseForm({setCoursesData}){
    const[name,setCourseName]=useState("");
    const[instructor,setInstructor]=useState("");
    const[duration,setDuration]=useState("");
    const[students,setStudents]=useState("");
    const[capacity,setCapacity]=useState("");
    function HandleSubmitCoursesData(e){
        e.preventDefault();
        let newCourse={
            id:new Date(),
            name:name,
            instructor:instructor,
            duration:duration,
            students:students,
            capacity:capacity
        }
        setCoursesData(prevCoursesData =>[...prevCoursesData,newCourse]);
        setCapacity('');
        setCourseName('')
        setDuration('')
        setInstructor('')
        setStudents('')
    }
    return(
        <form onSubmit={HandleSubmitCoursesData} id="Course-form">
            <input type="text" value={name} placeholder="Enter a Course name" onChange={(e)=>(setCourseName(e.target.value))}/>
            <input value={instructor} placeholder="Enter an Instructor name" onChange={(e)=>(setInstructor(e.target.value))}/>
            <input value={duration} placeholder="Enter a Course duration" onChange={(e)=>(setDuration(e.target.value))}/>
            <input type="number" min="0" max="40" value={students} placeholder="Enter total  No.of Registered Students" onChange={(e)=>(setStudents(e.target.value))}/>
            <input type="number" min="0" max="40" value={capacity} placeholder="Enter Total No.of Students" onChange={(e)=>(setCapacity(e.target.value))}/>
            <button type="submit">Submit</button>
        </form>
    )
}
export default CourseForm;