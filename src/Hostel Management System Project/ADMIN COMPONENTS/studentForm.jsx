import { useContext, useEffect, useRef } from "react";
import { StudentContext } from "../app";

function StudentForm(){
    const{firstName,setFirstName,
                    lastName,setLastName,
                    email,setEmail,
                    mobileNo,setMobileNo,
                    aadharNo,setAadharNo,
                    parentName,setParentName,                    
                    parentNo,setParentNo,
                    adress,setAdress,
                    jd,setJd,
                    roomNo,setRoomNo,
                    bedNo,setBedNo,
                    handleSubmitForm,errors,
                    editingId,handleUpdate
                }=useContext(StudentContext)
    const inputRef=useRef();
    useEffect(()=>{
        inputRef.current.focus();
    },[inputRef])
    return(
        <div>
            <form onSubmit={handleSubmitForm} className="container">
                <label className="form-label">FirstName : </label>
                <input type="text" className="form-control w-50" placeholder="Enter firstname" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} ref={inputRef}/>
                {errors.firstName && <p style={{color:"red"}}>{errors.firstName}</p>}

                <label className="form-label">LastName: </label>
                <input type="text"  className="form-control w-50" placeholder="Enter Lastname" value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
                {errors.lastName && <p style={{color:"red"}}>{errors.lastName}</p>}

                <label className="form-label">Email: </label>
                <input type="text"  className="form-control w-50" placeholder="Enter Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                {errors.email && <p style={{color:"red"}}>{errors.email}</p>}

                <label className="form-label">Mobile: </label>
                <input type="text" className="form-control w-50" placeholder="Enter Mobile number" minLength={10} maxLength={10} value={mobileNo} onChange={(e)=>{setMobileNo(e.target.value)}}/>
                {errors.mobileNo && <p style={{color:"red"}}>{errors.mobileNo}</p>}

                <label className="form-label">Aadhar : </label>
                <input type="text" className="form-control w-50" placeholder="Enter Aadhar Number" minLength={12} maxLength={12} value={aadharNo} onChange={(e)=>{setAadharNo(e.target.value)}}/>
                {errors.aadharNo && <p style={{color:"red"}}>{errors.aadharNo}</p>}

                <label className="form-label">Student Parent Name: </label>
                <input type="text" className="form-control w-50" placeholder="Enter Parent name" value={parentName} onChange={(e)=>{setParentName(e.target.value)}}/>
                {errors.parentName && <p style={{color:"red"}}>{errors.parentName}</p>}
                
                <label className="form-label">Parent Mobile: </label>
                <input type="text" className="form-control w-50" placeholder="Enter Parent Mobile number" maxLength={10} minLength={10} value={parentNo} onChange={(e)=>{setParentNo(e.target.value)}}/>
                {errors.parentNo && <p style={{color:"red"}}>{errors.parentNo}</p>}

                <label className="form-label">Adress: </label>
                <input type="text" className="form-control w-50" placeholder="Enter Adress" value={adress} onChange={(e)=>{setAdress(e.target.value)}}/>
                {errors.adress && <p style={{color:"red"}}>{errors.adress}</p>}

                <label className="form-label">Joining Date: </label>
                <input type="date" className="form-control w-50" placeholder="Enter Join date" value={jd} onChange={(e)=>{setJd(e.target.value)}}/>
                {errors.jd && <p style={{color:"red"}}>{errors.jd}</p>}

                <label className="form-label">Room No: </label>
                <input type="text" className="form-control w-50" placeholder="Enter RoomNo" maxLength={1} minLength={1} value={roomNo} onChange={(e)=>{setRoomNo(e.target.value)}}/>
                {errors.roomNo && <p style={{color:"red"}}>{errors.roomNo}</p>}

                
                <label className="form-label">Bed No: </label>
                <input type="text" className="form-control w-50" placeholder="Enter BedNo" maxLength={1} minLength={1} value={bedNo} onChange={(e)=>{setBedNo(e.target.value)}}/>
                {errors.bedNo && <p style={{color:"red"}}>{errors.bedNo}</p>}

                {editingId!==null && <button onClick={handleUpdate}>Update</button> }
                {editingId === null &&<button type="submit" className="btn btn-success">Submit</button>}
            </form>
        </div>
    )
}
export default StudentForm;