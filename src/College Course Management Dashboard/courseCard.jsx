function CourseCard({course}){
    // const[register,setRegistr]=(false);
    let{name,instructor,duration,students,capacity}=course;
    let seatsAvailble=''

    return(
        <div className="course-card">
            <h1><span style={{fontWeight:"lighter"}}> Course : </span> {name}</h1>
            <h3><span style={{fontWeight:"lighter"}}>Mentor : </span> {instructor}</h3>
            <p><span style={{fontWeight:"lighter"}}>Duration : </span> {duration}</p>
            <p><span style={{fontWeight:"lighter"}}>Total Seats : </span> {capacity}</p>
            <p><span style={{fontWeight:"lighter"}}>Registered Students: </span> {students}</p>
            <p>{students===capacity?"Seats Full! No seats Availble" : "Seats Availble"}</p>
            <button onClick={(e)=>(e.target.textContent="Registered")}>Register Now</button>
        </div>
    )
}
export default CourseCard;