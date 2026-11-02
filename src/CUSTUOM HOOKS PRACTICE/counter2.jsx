import UseCounter from "./useCounter";
function Counter2(){
    const{counter,handleReset,handleDecrease,handleIncrease}=UseCounter()
    return(
        <>
            <h1>Counter 2</h1>
            <button onClick={handleIncrease}>+</button>
            <h3>Count : {counter}</h3>
            <button onClick={handleDecrease}>-</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}
export default Counter2;