import { Outlet } from "react-router-dom";
import AdminHeader from "./adminHeader";
import "./adminLayout.css"
function AdminLayout(){
    return(
        <div id="adminlayout">
            <AdminHeader/>
            <Outlet/>
        </div>
    )
}
export default AdminLayout;