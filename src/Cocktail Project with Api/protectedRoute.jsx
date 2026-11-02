import { Navigate, useNavigate } from "react-router-dom";
function ProtectedRoute({children,login}){
    const navigate=useNavigate();
    if(login){
        return children;
    }
    else{
        return <Navigate to="/loginPage"/>
    }
}
export default ProtectedRoute;