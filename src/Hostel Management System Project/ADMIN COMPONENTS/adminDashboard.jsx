import { useContext } from "react";
import { StudentContext } from "../app";
import { useNavigate } from "react-router-dom";
import "./adminDashboard.css"
function AdminDashboard(){
    const navigate=useNavigate();
    const{studentData,userDetailsForm}=useContext(StudentContext)
    const storedRoomDetails=JSON.parse(localStorage.getItem('hostel_room_details')) || [];
    const acceptedUsers=JSON.parse(localStorage.getItem("adminAcceptedUsersList")) || [];
    const rejectedUsers=JSON.parse(localStorage.getItem("adminRejectedUsersList")) || [];

        // ====================================================
        //             Total Beds Count
        // ====================================================

    const totalBeds=storedRoomDetails.reduce((acc,beds)=>{
        return acc+beds.capacity
    },0)

        // ====================================================
        //             Availble Beds Count
        // ====================================================

    const availbleBeds=storedRoomDetails.reduce((acc,beds)=>{
        return acc-beds.occupiedBeds;
    },totalBeds)

        // ====================================================
        //             Total Revunue Comes From Hostel
        // ====================================================
    const totalRevenue=storedRoomDetails.reduce((acc,hostel)=>{
        return acc+=hostel.occupiedBeds*hostel.price
    },0)

    // const beds=storedRoomDetails.map((room)=>{
    //     return room
    // })
    // console.log("Beds",beds)
    return(
        
        <div style={{marginLeft:"15px"}}>
            <div className="d-flex justify-content-start align-items-center gap-5">
                <h2 className="mb-3 mt-3 fs-2 fw-bolder">Admin Dashboard</h2>
                <span>notifications</span>
                <input type="text"/>
                <button>Logout</button>
            </div>

            <div className="boxes-div">
                <div>
                    <h4>Total Revenue Collected</h4>
                    <p>{totalRevenue}/mo</p>
                </div>
                <div>
                    <h4>Total Students</h4>
                    <p>{studentData.length}</p>
                </div>
                <div>
                    <h4>Total Rooms</h4>
                    <p>{storedRoomDetails.length}</p>
                </div>
                <div>
                    <h4>Total Beds</h4>
                    <p>{totalBeds}</p>
                </div>
                <div>
                    <h4>Availble Beds </h4>
                    <p>{availbleBeds}</p>
                </div>
                <div>
                    <h4>Pending Requests</h4>
                    {userDetailsForm.length>0?<p>{userDetailsForm.length} Requests pending , Take Action</p> 
                    : <p>No Requests are Pending</p>}
                    {userDetailsForm.length>0 && <button onClick={()=>{
                        navigate("/notifications")
                    }}>Take Action</button>}
                </div>
                <div>
                    <h4>Rejected Students</h4>
                    {rejectedUsers.length===0? 
                    
                    (<p>No Users Rejected</p>) : rejectedUsers.map((user)=>(
                        <>
                            <p>{user.userFirstName}</p>
                        </>
                    ))}
                </div>
                <div>
                    <h4>Accepted Students</h4>
                    {acceptedUsers.length>0 ? acceptedUsers.map((user)=>(
                        <>
                            <p>{user.userFirstName}</p>
                        </>
                    )) :(<p>No Users Rejected</p>)}
                </div>
            </div>
            <div>
                <table className="table table-striped-light table-sm table-hover w-75 text-center border border-dark">
                    <thead className="border-bottom border-dark bg-dark text-white">
                        <th scope="col">Room No</th>
                        <th scope="col">Tot. Beds</th>
                        <th scope="col">OccupiedBeds</th>
                        <th scope="col">Availble Bed No's</th>
                        <th scope="col">Tot. Availble Beds</th>
                        <th scope="col">Room Status</th>
                    </thead>
                    {storedRoomDetails.map((roomdetails)=>(
                        <tbody>
                            <tr>
                                <th scope="row">{roomdetails.roomNo}</th>
                                <td>{roomdetails.capacity}</td>
                                <td>{roomdetails.occupiedBeds}</td>
                                <td>{roomdetails.beds.filter((bed)=>
                                    bed.status==="available").map((bed)=>bed.bedNo).join(", ")}
                                </td>
                                <td>{roomdetails.capacity - roomdetails.occupiedBeds}</td>
                                <td>{roomdetails.capacity === roomdetails.occupiedBeds?"Full":"Availble"}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </div>
    )
}
export default AdminDashboard;