import StudentCard from "./studentCard";
function StudentsRegistrationList({studentsData}){
    return(
        <div id="student-list-div">
            {studentsData.map((student)=>(
                <StudentCard student={student}/>
            ))}
        </div>
    )
}
export default StudentsRegistrationList;