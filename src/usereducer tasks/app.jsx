
import { useReducer } from "react";
function App(){

    function reducer(state,action){
        if(action.type==="increase_value"){
            console.log(state)
            console.log(action)
            return state+action.payload;

        }
        if(action.type==="decrease_value"){
            return state-action.payload;
        }
        if(action.type==="reset_value"){
            return state=0;
        }
    }
    const[counter,dispatch]=useReducer(reducer,0);
    return(
        <div>
            <button onClick={()=>{dispatch(
                {
                    type:"increase_value",
                    payload:counter===0?counter+1 : counter
                }
            )}}>+</button>
            <h1>{counter}</h1>
            <button onClick={()=>{dispatch(
                {
                    type:"decrease_value",
                    payload:1
                }
            )}}>-</button>
            <button onClick={()=>{dispatch(
                {
                    type:"reset_value"
                }
            )}}>Reset</button>
        </div>
    )
}
export default App;