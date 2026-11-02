import useCounter from "./useCounter";
import { useState } from "react"
function Counter2(){
    const{counter,handleDecrease,handleIncrease}=useCounter();

    return(
        <div>
            <button onClick={handleIncrease}>Icrease +</button>
            <h1>{counter}</h1>
            <button onClick={handleDecrease}>Decrease -</button>
        </div>
    )
}
export default Counter2;