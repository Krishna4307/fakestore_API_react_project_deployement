import { useContext } from "react";
import { StudentContext } from "../app";

function UserDetailsForm(){
    const{
        userFirstName,setUserFirstName,
        userLastName,setUserLastName,
        userEmail,setUserEmail,
        userMobileNo,setUserMobileNo,
        userAadharNo,setUserAadharNo,
        userParentName,setUserParentName,                    
        userParentNo,setUserParentNo,
        userAdress,setUserAdress,
        userRoomNo,setUserRoomNo,
        userBedNo,setUserBedNo,
        userJoinDate,setUserJoinDate,
        handleSubmitUserDetails,
        errors
    }=useContext(StudentContext)
    return(
        <div>
            <form onSubmit={handleSubmitUserDetails}>
                <input type="text" placeholder="enter First Name" value={userFirstName}
                    onChange={(e)=>{setUserFirstName(e.target.value)}}
                />
                {errors.userFirstName && <p>{errors.userFirstName}</p>}

                <input type="text" placeholder="enter last Name" value={userLastName}
                    onChange={(e)=>{setUserLastName(e.target.value)}}
                />
                {errors.userLastName && <p>{errors.userLastName}</p>}

                <input type="tel"  placeholder="Phone Number" maxLength={10} minLength={10} value={userMobileNo} 
                onChange={(e)=>{setUserMobileNo(e.target.value)}}
                />
                {errors.userMobileNo && <p>{errors.userMobileNo}</p>}

                <input type="email" placeholder="Email" value={userEmail} 
                onChange={(e)=>{setUserEmail(e.target.value)}}
                />
                {errors.userEmail && <p>{errors.userEmail}</p>}
                

                <input type="text" placeholder="Parent Name" value={userParentName}
                    onChange={(e)=>{setUserParentName(e.target.value)}}
                />
                {errors.userParentName && <p>{errors.userParentName}</p>}

                <input type="tel" placeholder="Parent Phone" maxLength={10} minLength={10} value={userParentNo}
                    onChange={(e)=>{setUserParentNo(e.target.value)}}
                />
                {errors.userParentNo && <p>{errors.userParentNo}</p>}

                <input type="tel" placeholder="Aadhar Number" maxLength={12} minLength={12} value={userAadharNo} 
                onChange={(e)=>{setUserAadharNo(e.target.value)}}
                />
                {errors.userAadharNo && <p>{errors.userAadharNo}</p>}

                <input type="text" placeholder="Address" value={userAdress}
                    onChange={(e)=>{setUserAdress(e.target.value)}}
                />
                {errors.userAdress && <p>{errors.userAdress}</p>}
                <label>Select Room No : </label>
                <select value={userRoomNo} onChange={(e)=>{setUserRoomNo(e.target.value)}} style={{width:"100px"}}>
                    <option value="none">None</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                </select>
                {errors.userRoomNo && <p>{errors.userRoomNo}</p>}

                <label>Select Bed No : </label>
                <select value={userBedNo} onChange={(e)=>{setUserBedNo(e.target.value)}} style={{width:"100px"}}>
                    <option value="none">None</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                {errors.userBedNo && <p>{errors.userBedNo}</p>}
                <label>Joining Date : </label> <input type="date" value={userJoinDate}
                    onChange={(e)=>{setUserJoinDate(e.target.value)}}
                />
                {errors.userJoinDate && <p>{errors.userJoinDate}</p>}

                <button type="submit">Book Now</button>
            </form>
        </div>
    )
}
export default UserDetailsForm;