import { useState } from "react";

function App(){
    const[userdata,setUserData]=useState([]);
    const[name,setName]=useState('');
    const[age,setAge]=useState('');
    const[city,setCity]=useState('');
    const[errors,setErrors]=useState({});

    function handleSubmitData(e){
        e.preventDefault()
        let newErrors={};
        let hasError=false;
        if(name.trim()===""){
            newErrors.name="Name is required"
            hasError=true
        }
        if(age.trim()===""){
            newErrors.email="Email Required"
            hasError=true
        }
        if(city.trim()===""){
            newErrors.city="city name Required"
            hasError=true
        }
        setErrors(newErrors)

        if(hasError){
            return;
        }
        setUserData([...userdata,{
            name:name,
            age:age,
            city:city
        }
        ])
        setName("")
        setAge("")
        setCity("")
    }
    return(
        <div>
            <form onSubmit={handleSubmitData}>
                <input type="text" value={name} placeholder="enter name" onChange={(e)=>{setName(e.target.value)}}/>
                {errors.name && <p style={{marginTop:"0px", color:"red"}}>{errors.name}</p>}
                <input type="text" value={age} placeholder="enter Age" onChange={(e)=>{setAge(e.target.value)}}/>
                {errors.email && <p style={{marginTop:"0px", color:"red"}}>{errors.email}</p>}
                <input type="text" value={city} placeholder="enter city" onChange={(e)=>{setCity(e.target.value)}}/>
                {errors.city && <p style={{marginTop:"0px",marginBottom:"0px", color:"red"}}>{errors.city}</p>}
                <button type="submit">Submit</button>
            </form>
            {userdata.length===0 ? <h1>No Users Added</h1> : userdata.map((user,index)=>{
                return(
                    <div key={index}>
                        <p>{user.name}</p>
                        <p>{user.age}</p>
                        <p>{user.city}</p><hr></hr>
                    </div>
                )
            })}
        </div>
    )
}
export default App;