import { useContext, useState } from "react";
import { StudentContext } from "../app";
import { useNavigate } from "react-router-dom";
function Notifications() {
    const navigate=useNavigate();
    const { userDetailsForm,setUserDetailsForm} = useContext(StudentContext);

    let storedRoomDetails =
        JSON.parse(localStorage.getItem("hostel_room_details")) || [];

    // ==================================================================
    //          Handling Admin accepted Users
    // ==================================================================

    function handleAccept(user) {
            // ==========================================================
            //   updating rooms vacancy and availble beds and beds counting
            // =========================================================
        const storedRoomDetails =
            JSON.parse(localStorage.getItem("hostel_room_details")) || [];

        const updatedRooms = storedRoomDetails.map((room) => {
            if (room.roomNo === user.userRoomNo) {
                const selectedBed = room.beds.find((bed) => {
                    return bed.bedNo === user.userBedNo;
                });
                if(selectedBed.status==="booked"){
                    alert(`${selectedBed.bedNo} in Room ${room.roomNo} is already booked`);
                    return room;
                }
                const updatedBeds = room.beds.map((bed) => {
                    if (bed.bedNo === user.userBedNo) {
                        return { ...bed, status: "booked" };
                    }
                    return bed;
                });
                return {
                    ...room,
                    beds: updatedBeds,
                    occupiedBeds: room.occupiedBeds + 1
                };
            }
            return room;
        });

        localStorage.setItem(
            "hostel_room_details",
            JSON.stringify(updatedRooms)
        );

        // ======================================================
        //   storing into localstorage accepted users by admin
        // =====================================================

        const existingAcceptedUsers=JSON.parse(localStorage.getItem("adminAcceptedUsersList")) || [];
        const updatedAcceptedUsers=[...existingAcceptedUsers,user];
        localStorage.setItem("adminAcceptedUsersList",JSON.stringify(updatedAcceptedUsers))
        alert("Booking request accepted successfully! ✅");
        navigate("/bookedUsers")

        // ======================================================
        //   Removing from notifications after accepted by admin
        // =====================================================

        const updatedUserDetailsForm = userDetailsForm.filter((item) => {
            return item.id !== user.id;
        });

        setUserDetailsForm(updatedUserDetailsForm);

        localStorage.setItem(
            "storeUserDetailsForm",
            JSON.stringify(updatedUserDetailsForm)
        );
    }

    // ==================================================================
    //          Handling Admin Rejected Users
    // ==================================================================

    function handleReject(user){
                    // ==========================================
                    //   storing in localstorge rejected users
                    // ==========================================
        const rejectedUser=userDetailsForm.find((rejectUser)=>{
            return rejectUser.id === user.id;
        })

        const existingRejectedUsers =JSON.parse(localStorage.getItem("adminRejectedUsersList")) || [];
        const updatedRejectedUsers = [...existingRejectedUsers, rejectedUser];
        localStorage.setItem("adminRejectedUsersList",JSON.stringify(updatedRejectedUsers));

                    // ==========================================
                    //   Removing from Notification bar after rejected
                    // ==========================================

        const updatedUserDetailsForm=userDetailsForm.filter((rejectUser)=>{
            return rejectUser.id!==user.id
        })
        setUserDetailsForm(updatedUserDetailsForm)
        localStorage.setItem("storeUserDetailsForm",JSON.stringify(updatedUserDetailsForm))
    }
    return (
        <>
            {userDetailsForm.map((user) => (
                <div key={user.userRoomNo}>
                    <p>
                        {user.userFirstName} wants to book Bed No{" "}
                        {user.userBedNo} at Room No. {user.userRoomNo}
                    </p>

                    <button onClick={()=>handleAccept(user)}>Accept</button>
                    <button onClick={()=>handleReject(user)}>Reject</button>
                </div>
            ))}
        </>
    );
}

export default Notifications;