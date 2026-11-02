import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { StudentContext } from "../app";

function StudentData(){
    const{studentForm,
        studentData,
        handleEdit,
        handleDelete,
        setSearchInputValue,
        searchInputValue,
        filtereSearchedStudents
    }=useContext(StudentContext)
    return(
        <div>
            <div>
                <input type="search" placeholder="Search Student here" value={searchInputValue} onChange={(e)=>{setSearchInputValue(e.target.value)}}/>
            </div>
            <h1>Students List</h1>
            {
    (filtereSearchedStudents.length > 0
        ? filtereSearchedStudents
        : studentData
    ).length > 0 ? (
        <table className="table table-bordered table-hover">
            <thead className="table-danger">
                <tr className="text-center">
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile No</th>
                    <th scope="col">Aadhar No</th>
                    <th scope="col">Parent name</th>
                    <th scope="col">Parent No</th>
                    <th scope="col">Address</th>
                    <th scope="col">Joining Date</th>
                    <th scope="col">Room No</th>
                    <th scope="col">Bed No</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>

            <tbody className="text-center">
                {(filtereSearchedStudents.length > 0
                    ? filtereSearchedStudents
                    : studentData
                ).map((student, index) => (
                    <tr key={student.id}>
                        <td>{index + 1}</td>

                        <td>
                            {student.firstName[0].toUpperCase()}
                            {student.firstName.slice(1)}{" "}
                            {student.lastName[0].toUpperCase()}
                            {student.lastName.slice(1)}
                        </td>

                        <td>{student.email}</td>
                        <td>{student.mobileNo}</td>
                        <td>{student.aadharNo}</td>
                        <td>{student.parentName}</td>
                        <td>{student.parentNo}</td>
                        <td>{student.adress}</td>
                        <td>{student.jd}</td>
                        <td>{student.roomNo}</td>
                        <td>{student.bedNo}</td>

                        <td>
                            <button
                                onClick={() => handleEdit(student)}
                                className="btn bg-warning p-2 m-1"
                            >
                                ✏️ Edit
                            </button>

                            <button
                                onClick={() => handleDelete(student.id)}
                                className="btn bg-danger text-light p-2"
                            >
                                🗑️ Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    ) : (
        "No students Found"
    )
}
        </div>
    )
}
export default StudentData;