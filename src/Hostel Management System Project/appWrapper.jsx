import { BrowserRouter } from "react-router-dom";
import App from "./app.jsx";

// http://localhost:5178/
function AppWrapper(){
    return(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    )
}
export default AppWrapper;