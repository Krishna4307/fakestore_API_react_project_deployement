import CourseCard from "./courseCard";
function CourseList({coursesData}){
    return(
        <div id="course-list-div">
            {coursesData.map((course)=>(
                <CourseCard course={course}/>
            ))}
        </div>
    )
}
export default CourseList;