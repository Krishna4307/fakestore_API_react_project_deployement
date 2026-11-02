import { Link } from "react-router-dom";

function Header(){

    return(
        <header>
            <h1>Cocktail Juices</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/favuorite">Favourite Drinks</Link></li>
                <li><Link to="/alcholdrinks">Alchol-Drinks</Link></li>
                <li><Link to="/nonalcholdrinks">Non-Alchol-Drinks</Link></li>
                <li><Link to="/loginPage">Login</Link></li>
            </ul>
        </header>
    )
}
export default Header;