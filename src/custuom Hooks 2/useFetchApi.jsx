import { useEffect, useState } from "react";

function UseFetchApi(url){
    const[data,setData]=useState([]);
    const[loading,setLoading]=useState('');
    const[error,setError]=useState([]);


    useEffect(()=>{
        getApiData();
    },[])

    async function getApiData(){
        let response=await fetch(url);
        let apiData=await response.json()
        setData(apiData)
    }

    return(
        {
            data,loading,error
        }
    )
}
export default UseFetchApi;