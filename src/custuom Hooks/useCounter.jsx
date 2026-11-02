import { useState } from "react";
// import Counter1 from "./counter1.jsx";
// import Counter2 from "./counter2.jsx"
function useCounter(){
    const[counter,setCounter]=useState(0);
    const handleDecrease=()=>{
        setCounter(counter-1)
    }
    const handleIncrease=()=>{
        setCounter(counter+1)
    }
    return{
        counter,
        handleIncrease,
        handleDecrease
    }
}
export default useCounter;