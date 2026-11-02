function RegisterForm(){
    return(
        <div>
            <input type="text" name="name" onChange={handleRegisterInputs} placeholder="Enter Name"/>
            <input type="text" name="mobile" onChange={handleRegisterInputs} placeholder="Enter Mobile"/>
            <input type="text" name="email" onChange={handleRegisterInputs} placeholder="Enter email"/>
            <input type="text" name="password" onChange={handleRegisterInputs} placeholder="Enter password"/>
            <button onClick={handleRegister}>Register</button>
        </div>
        
    )
}
export default RegisterForm;