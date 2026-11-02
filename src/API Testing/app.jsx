import { useEffect, useState } from "react";

let apiUrl="https://jsonplaceholder.typicode.com/users";

function App(){
    const[usersData,setUsersData]=useState([]);
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState(false);

    async function getApiData(url) {
        setLoading(true)
        try{
            const response=await fetch(url);
            const data=await response.json();
            setUsersData(data)
            setLoading(false)
        }
        catch(error){
            setLoading(false)
            setError(true)
        }   
    }

    useEffect(()=>{
        getApiData(apiUrl)  
    },[])

    if(loading){
        return <h1>Data Loading....</h1>
    }

    if(error){
        return <h3>Something Went Wrong ...please try Again!</h3>
    }

    return(
        <div>
            {console.log(usersData)}
            {usersData.map((user)=>{
                return(
                    <div key={user.id}>
                        <h3>{user.id}</h3>
                        <p><strong>Name</strong> : {user.name}</p>
                        <p><strong>UserName</strong> : {user.username}</p>
                        <p> <strong>Phone</strong> : {user.phone}</p><hr></hr>
                    </div>
                )
            })}
        </div>
    )
}
export default App;