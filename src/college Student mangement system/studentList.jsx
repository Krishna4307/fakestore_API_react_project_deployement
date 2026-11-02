import StudentCard from "./studentCard";
function StudentList({studentsData}){
    return(
        studentsData.map((student)=>(
            <StudentCard key={student.id} student={student}/>
        ))
    )
}
export default StudentList;