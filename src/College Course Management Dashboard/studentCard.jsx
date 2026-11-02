function StudentCard({student}){
    return(
        <div className="student-card">
            <h2><span style={{fontWeight:"lighter"}}>Student Name : </span> {student.studentName}</h2>
            <h3><span style={{fontWeight:"lighter"}}>Email : </span> {student.email}</h3>
            <p><span style={{fontWeight:"lighter"}}>Course : </span> {student.course}</p>
        </div>
    )
}
export default StudentCard;