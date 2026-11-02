import UseCounter from "./useCounter";
function Counter1(){
    const{counter,handleIncrease,handleDecrease,handleReset}=UseCounter();
    return(
        <>
            <h1>Counter 1</h1>
            <button onClick={handleIncrease}>+</button>
            <h3>Count : {counter}</h3>
            <button onClick={handleDecrease}>-</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}
export default Counter1;