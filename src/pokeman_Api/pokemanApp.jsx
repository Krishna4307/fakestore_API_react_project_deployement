import { useEffect, useState } from "react";

function PokemanApp(){
    const[data,setData]=useState([]);
    const[loading,setLoading]=useState(false);
    const[error,setErros]=useState(false);
    async function getApi() {
        try{
            setLoading(true)
            await new Promise((resolve) => setTimeout(resolve, 5000));
            let response=await fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
            let data=await response.json();
            let pokemanData=data.results;
            setData(pokemanData);

        }
        catch(error){
            setLoading(false)
            setErros(true)
            console.log(error.name)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        getApi()
    
    },[])
    
    return(
        <div>
            <h1>Pokeman Data</h1>
            {loading && <h1>Data Loading....</h1>}
            {error && <h2>Something Went Wrong</h2>}
            {data.map((d)=>(
                <>
                    <h3>{d.name}</h3>
                    <a href={d.url}>{d.url}</a>
                </>
            ))}
        </div>
    )
}
export default PokemanApp;