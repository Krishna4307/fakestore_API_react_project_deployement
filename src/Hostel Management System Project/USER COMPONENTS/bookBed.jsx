import { useNavigate } from "react-router-dom";
import "./bookbed.css"
function BookBed(){

const hostel_room_details = [
    { id: 101, roomNo: 1, capacity: 4, occupiedBeds: 0, beds: [{ bedNo: 1, status: "available" }, { bedNo: 2, status: "available" }, { bedNo: 3, status: "available" }, { bedNo: 4, status: "available" }], price: 5500, url: "/src/assets/room1.avif" },
    { id: 102, roomNo: 2, capacity: 4, occupiedBeds: 0, beds: [{ bedNo: 1, status: "available" }, { bedNo: 2, status: "available" }, { bedNo: 3, status: "available" }, { bedNo: 4, status: "available" }], price: 5500, url: "/src/assets/room2.jpg" },
    { id: 103, roomNo: 3, capacity: 4, occupiedBeds: 0, beds: [{ bedNo: 1, status: "available" }, { bedNo: 2, status: "available" }, { bedNo: 3, status: "available" }, { bedNo: 4, status: "available" }], price: 5500, url: "/src/assets/room3.webp" },
    { id: 104, roomNo: 4, capacity: 4, occupiedBeds: 0, beds: [{ bedNo: 1, status: "available" }, { bedNo: 2, status: "available" }, { bedNo: 3, status: "available" }, { bedNo: 4, status: "available" }], price: 5500, url: "/src/assets/room4.jpg" },
    { id: 105, roomNo: 5, capacity: 3, occupiedBeds: 0, beds: [{ bedNo: 1, status: "available" }, { bedNo: 2, status: "available" }, { bedNo: 3, status: "available" }], price: 6000, url: "/src/assets/room5.avif" },
    { id: 106, roomNo: 6, capacity: 3, occupiedBeds: 0, beds: [{ bedNo: 1, status: "available" }, { bedNo: 2, status: "available" }, { bedNo: 3, status: "available" }], price: 6000, url: "/src/assets/room6.webp" },
    { id: 107, roomNo: 7, capacity: 2, occupiedBeds: 0, beds: [{ bedNo: 1, status: "available" }, { bedNo: 2, status: "available" }], price: 6500, url: "/src/assets/room7.webp" },
    { id: 108, roomNo: 8, capacity: 2, occupiedBeds: 0, beds: [{ bedNo: 1, status: "available" }, { bedNo: 2, status: "available" }], price: 6500, url: "/src/assets/room8.webp" },
];
    const navigate=useNavigate();
    if (!localStorage.getItem("hostel_room_details")) {
        localStorage.setItem(
            "hostel_room_details",
            JSON.stringify(hostel_room_details)
        );
    }
    
    const storedRoomDetails=JSON.parse(localStorage.getItem('hostel_room_details')) || [];
    const room1Details=storedRoomDetails.filter((room1)=>{
        return room1.roomNo===1;
    })
    const room2Details=storedRoomDetails.filter((room2)=>{
        return room2.roomNo===2;
    })
    const room3Details=storedRoomDetails.filter((room3)=>{
        return room3.roomNo===3;
    })
    const room4Details=storedRoomDetails.filter((room4)=>{
        return room4.roomNo===4;
    })
    const room5Details=storedRoomDetails.filter((room5)=>{
        return room5.roomNo===5;
    })
    const room6Details=storedRoomDetails.filter((room6)=>{
        return room6.roomNo===6;
    })
    const room7Details=storedRoomDetails.filter((room7)=>{
        return room7.roomNo===7;
    })
    const room8Details=storedRoomDetails.filter((room8)=>{
        return room8.roomNo===8;
    })
    const room9Details=storedRoomDetails.filter((room9)=>{
        return room9.roomNo===9;
    })
    return(
        <div className="bookbedSection">
            {storedRoomDetails.map((room)=>(
                <div className="bookbeddiv">
                    <img src={room.url} width="350px" height="250px"/>
                    <h4>Room No :{room.roomNo}</h4>
                    <p><strong>Total Beds</strong> :{room.capacity}</p>
                    <p><strong>Price : </strong> {room.price}/ bed</p>
                    <p><strong>Availble Beds </strong>: {room.capacity - room.occupiedBeds}</p>
                    
                    <p><strong>Status </strong> : {room.capacity === room.occupiedBeds ? (<><i>No Beds Availble</i>, <i>Room Full</i></>) : <p style={{display:"inline"}}>{room.capacity-room.occupiedBeds} Availble</p>}</p>
                    <div className="beds-container">
                        {room.beds.map((bed) => (
                            <div className="bed-item" key={bed.bedNo}>
                                <h6>Bed {bed.bedNo}</h6>
                                {bed.status==="booked"?<p 
                                style={{backgroundColor:"red", width:"15px",height:"15px",borderRadius:"3px"}}></p>
                                :
                                <p 
                                style={{backgroundColor:"green", width:"15px",height:"15px",borderRadius:"3px"}}></p>
                                }
                            </div>
                        ))}
</div>
                    {room.capacity === room.occupiedBeds ? <p>Room Full</p> : <button onClick={()=>{navigate("/userdetailsform")}}>Book Now</button>} 

                </div>
            ))}
        </div>
    )
}
export default BookBed;