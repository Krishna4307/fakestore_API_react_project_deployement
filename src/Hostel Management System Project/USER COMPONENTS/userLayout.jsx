import { Outlet } from "react-router-dom";
import UserHeader from "./userHeader";


function UserLayout(){
    return(
        <div id="userLayout">
            <UserHeader/>
            <Outlet/>
        </div>
    )
}
export default UserLayout;