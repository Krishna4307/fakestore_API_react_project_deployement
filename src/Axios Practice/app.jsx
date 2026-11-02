import axios from "axios";
import { useEffect, useState } from "react";
let api="https://jsonplaceholder.typicode.com/users"
function App(){
    const[data,setData]=useState([]);
    useEffect(()=>{
        getUsersData(api)
    },[])
    async function getUsersData(apiUrl) {
        let users=await axios.get(apiUrl)
        setData(users.data)
    }

    async function handleDelete(id){
        await axios.delete(`${api}/${id}`);
        let filterDeleted=data.filter((user)=>{
            return user.id!==id;
        })
        setData(filterDeleted)
    }
    return(
        <div>
            {console.log(data)}
            {data.map((user)=>(
                <div key={user.id}>
                    <h1>{user.id}</h1>
                    <p>Name : {user.name}</p>
                    <p>UserName : {user.username}</p>
                    <p>Email : {user.email}</p>
                    <button onClick={()=>handleDelete(user.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
    }
export default App;