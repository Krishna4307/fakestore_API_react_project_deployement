import { Navigate } from "react-router-dom";

function ProtectedRoute({children,login,setLogin}){
    if(login){
        return children;
    }
    else{
        return <Navigate to="/Login"/>
    }
}
export default ProtectedRoute;