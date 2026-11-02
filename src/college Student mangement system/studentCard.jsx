function StudentCard({student}){
    let PassFailresult='';
    let gradeResult='';

    if(student.marks>=40){
        PassFailresult="Passed"
    }
    else{
        PassFailresult="Fail"
    }

    if(student.marks>=75){
        gradeResult="Excellent"
    }
    else if(student.marks>=40 && student.marks<=74){
        gradeResult="Good"
    }
    else{
        gradeResult = "Needs Improvement"
    }

    return(
        <>
            <h1>{student.name}</h1>
            <p>{student.age}</p>
            <p>{student.city}</p>
            <p>{student.course}</p>
            <p>{student.marks}</p>
            <h4><span style={{fontWeight:"lighter", fontSize:"22px"}}>Result : </span> {PassFailresult}</h4>
            <h3>{gradeResult}</h3>
        </>
    )
}
export default StudentCard;