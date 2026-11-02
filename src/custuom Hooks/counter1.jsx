import { useState } from "react"
import useCounter from "./useCounter";
function Counter1(){
    const{counter,handleDecrease,handleIncrease}=useCounter();

    return(
        <div>
            <button onClick={handleIncrease}>Icrease +</button>
            <h1>{counter}</h1>
            <button onClick={handleDecrease}>Decrease -</button>
        </div>
    )
}
export default Counter1;