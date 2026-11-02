import { useEffect, useRef, useState } from "react";
// function App(){
//     const[data,setData]=useState("")
//     let myRef=useRef(null)
//     function handleInputValue(){
//         setData(myRef.current.value)
//     }
//     useEffect(()=>{
//         console.log("Page Rendered")
//     })
//     return(
//         <>
//             <p>{data}</p>
//             <input ref={myRef}/>
//             <button onClick={handleInputValue}>Add</button>
//         </>
//     )
// }
// export default App;


        // ========================================================================
        //                     Auto focus Example 
        // ========================================================================

        // function App(){
        //     const inputRef=useRef();
        //     useEffect(()=>{
        //         inputRef.current.focus();
        //     },[])
        //     return(
        //         <div>
        //             <input ref={inputRef}/>
        //         </div>
        //     )
        // }
        // export default App;


        // ========================================================================
        //                     Accessing previous value 
        // ========================================================================

        // function App(){
        //     const[name1,setName1]=useState('')
        //     const[name2,setName2]=useState('')
        //     const prevName=useRef("");
        //     useEffect(()=>{
        //         prevName.current=name2;
        //     },[name2])
        //     function handleAdd(){
        //         setName2(name1)
        //     }
        //     return(
        //         <div>
        //             <p>Current name : {name1}</p>
        //             <p>previous name : {prevName.current}</p>
        //             <input onChange={(e)=>{setName1(e.target.value)}}/>
        //             <button onClick={handleAdd}>Add</button>
        //         </div>
        //     )
        // }
        // export default App;