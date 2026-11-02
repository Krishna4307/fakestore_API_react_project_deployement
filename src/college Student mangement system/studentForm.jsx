import { useState } from "react"

function StudentForm({setStudentsData}){
    const[name,setName]=useState('');
    const[age,setAge]=useState('');
    const[marks,setMarks]=useState('');
    const[city,setCity]=useState('');
    const[course,setCourse]=useState('');

    function HandleFormSubmit(e){
        e.preventDefault();
        let newStudent={
            name:name,
            age:age,
            marks:marks,
            city:city,
            course:course
        };
        setStudentsData(prevstudentData => [...prevstudentData,newStudent]);
        setName('');
        setAge('');
        setCity('');
        setCourse("");
        setMarks("");
    }

    return(
        <form onSubmit={HandleFormSubmit}>
            <input type="text" value={name} placeholder="Enter a Student Name" onChange={(e)=>(setName(e.target.value))}/>
            <input type="text" value={age} placeholder="Enter a Student Age" onChange={(e)=>(setAge(e.target.value))}/>
            <input type="text" value={marks} placeholder="Enter a Student Marks" onChange={(e)=>(setMarks(e.target.value))}/>
            <input type="text" value={city} placeholder="Enter a Student city" onChange={(e)=>(setCity(e.target.value))}/>
            <input type="text" value={course} placeholder="Enter a Student course" onChange={(e)=>(setCourse(e.target.value))}/>
            <button type="submit">Submit</button>
        </form>
    )
}
export default StudentForm;