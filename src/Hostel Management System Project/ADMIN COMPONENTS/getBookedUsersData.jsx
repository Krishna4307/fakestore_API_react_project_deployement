import { useNavigate } from "react-router-dom";
import { useState } from "react";
function BookedUsers() {
    const navigate=useNavigate();
    const [bookedUsers, setBookedUsers] = useState(() => {
        return (
            JSON.parse(
                localStorage.getItem("adminAcceptedUsersList")
            ) || []
        );
    });
    
    // ==============================================================
    //         Submitting booked users to Students Data
    // ==============================================================

    function handleAddToStudents(id){
        const existingStudents=JSON.parse(localStorage.getItem("students")) || [];
        const uploadingStudent=bookedUsers.find((student)=>{
            return student.id ===id
        })
        let newStudent={
            id:uploadingStudent.id,
            firstName:uploadingStudent.userFirstName,
            lastName:uploadingStudent.userLastName,
            email:uploadingStudent.userEmail,
            mobileNo:uploadingStudent.userMobileNo,
            aadharNo:uploadingStudent.userAadharNo,
            parentName:uploadingStudent.userParentName,
            parentNo:uploadingStudent.userParentNo,
            adress:uploadingStudent.userAdress,
            jd:uploadingStudent.userJoinDate,
            roomNo:uploadingStudent.userRoomNo,
            bedNo:uploadingStudent.userBedNo
        }
        let updatedStudents=[...existingStudents,newStudent];
        localStorage.setItem("students",JSON.stringify(updatedStudents))
        alert("Successfully Added to Students List! ✅");
        navigate("/studentsData")
        
        // console.log("New Students",newStudent)
        // console.log("students from Localstorage",updatedStudents)
    }


    // ==================================================================
    // Removing the user from booked user List after Submitted to Students List
    // ==================================================================
    
    const students =JSON.parse(localStorage.getItem("students")) || [];

    const remainingUsers = bookedUsers.filter((user) => {
        return !students.some((student) => {
            return student.id === user.id;
        });
    });
    
    return (
        <div>
            <h2>Booked Students</h2>

            {remainingUsers.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Room Number</th>
                            <th>Bed Number</th>
                            <th>Joining Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {remainingUsers.map((user, index) => (
                            <tr key={user.id ?? index}>
                                <td>{user.userFirstName[0].toUpperCase()}{user.userFirstName.slice(1)}</td>
                                <td>{user.userRoomNo}</td>
                                <td>{user.userBedNo}</td>
                                <td>{user.userJoinDate || "Not provided"}</td>
                                <td><button onClick={()=>{handleAddToStudents(user.id)}}>Add to Students</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No booked students found.</p>
            )}
        </div>
    );
}

export default BookedUsers;
