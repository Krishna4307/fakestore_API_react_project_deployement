function LoginForm(){
    return(
        <div>
            <input type="text" onChange={handleLoginInputs} placeholder="Enter Name"/>
            <input type="text" onChange={handleLoginInputs} placeholder="Enter password"/>
            <button onClick={handleLogin}>Login</button>
        </div>
        
    )
    
}
export default LoginForm;