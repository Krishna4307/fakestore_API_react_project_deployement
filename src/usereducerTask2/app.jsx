import { useReducer, useState } from "react";

function App(){
    let initialState={
        name:"",
        email:""
    }
    const[state,dispatch]=useReducer(reducer,initialState);
    function reducer(state,action){
        if(action.type==="set_name"){
            return {...state,
                name:action.payload
            }
        }
        if(action.type==="set_email"){
            return {...state,
                email:action.payload
            }
        }
        if(action.type ==="clear_data"){
            return {
                name:"",
                email:""
            }
        }
    }
    return(
        <div>
            <input type="text" value={state.name} onChange={(e)=>{dispatch({
                type:"set_name",
                payload:e.target.value
            })}}/>
            <input type="email" value={state.email} onChange={(e)=>{dispatch({
                type:"set_email",
                payload:e.target.value
            })}}/> 
            <button onClick={()=>{
                dispatch({
                    type:"clear_data"
                })
            }}>Clear Data</button>  
            <h1>Name : {state.name!=="" && state.name}</h1>
            <h1>email : {state.name!==""  && state.email}</h1>     
        </div>
    )
}
export default App;