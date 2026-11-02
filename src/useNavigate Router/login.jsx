import { useNavigate } from "react-router-dom";

function Login({isLoggedIn,setIsLoggedIn}){
    let navigate=useNavigate();
    function handleLogin(){
        setIsLoggedIn(!isLoggedIn)
    }
    if(isLoggedIn){
            alert("Logged in Successfully")
            navigate("/dashboard")
    }
    return(
        <button onClick={handleLogin}>
            {isLoggedIn?"Logout" : "Login"}
        </button>
    )
}
export default Login;