import DrinksApp from "./DrinksApp";
import { BrowserRouter } from "react-router-dom";
function MainDrinksComponent(){
    return(
        <BrowserRouter>
                <DrinksApp/>
        </BrowserRouter>
    )
}
export default MainDrinksComponent;