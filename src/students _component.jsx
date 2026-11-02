function Students(props){
    return(
        <>
            <img src={props.image}/>
            <h1>Rollno : {props.rollno}</h1>
            <p>Name : {props.name}</p>
            <p>Branch: {props.branch}</p>
            <p>Year: {props.year}</p>
            <p>CGPA: {props.cgpa}</p>
        </>
    )
}
export default Students;