import { useContext, useEffect, useRef } from "react";
import { StudentContext } from "../app";
import "./adminAsLogin.css";
function AdminLogin(){
    const useridref=useRef();
    const{handleSubmitAdminLogin,
        setAdminId,
        adminData,
        adminPassword,
        setAdminPassword,
        loginError,
        setLoginError}=useContext(StudentContext)
    useEffect(()=>{
        useridref.current.focus()
    },[useridref])
    return(
        <div className="admin-login-page">
            <div className="admin-login-page-container">
                <div className="img-div">
                    <div className="img-div-content">
                        <h4>Welcome To</h4>
                        <h2>Admin Login </h2>
                    </div>
                    <img src="src/assets/admin-login-background.png"/>
                </div>
                <div className="form-div-container">
                    <div className="form-div-content">
                        <h3>Login</h3>
                        <h5>Login to your account</h5>
                        <p>Thankyou for getback to Grovia. 
                            lets access our best recommendations contacts for you</p>
                    </div>
                    <form onSubmit={handleSubmitAdminLogin} className="form">
                        <div className="mx-5 mb-0">
                            <label className="form-label mb-1 fw-boldest fs-7">UserId / Mobile</label>
                            <input className="form-control w-100 mb-3 border" ref={useridref} type="text" placeholder="Enter mobile/Adminid" onChange={(e)=>{setAdminId(e.target.value)}}/>
                        </div>
                        <div className="mx-5 mt-0">
                            <label className="form-label mb-1 fw-boldest fs-7">Password</label>
                            <input className="form-control w-100 mb-0 " type="text" placeholder="Enter Password" value={adminPassword} onChange={(e)=>{setAdminPassword(e.target.value)}}/>
                            {loginError && <p className="text text-danger fs-7">{loginError}</p>}
                        </div>
                        <button className="forgot-btn">Forgot Password?</button>
                        <button type="submit" className="btn w-75 bg-danger text-white  mx-5">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AdminLogin;