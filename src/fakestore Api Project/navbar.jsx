import Home from "./home";
import Products from "./products";
import About from "./about";
import { Link } from "react-router-dom";
import WishList from "./wishlist";
function Navbar({wishlistItems, cartItems}){
    return(
        <div id="navbar-section">
            <div className="icon">
                <img src="src\assets\icon1.png" style={{width:"45px",height:"45px"}}/>
                <h3>API <br></br>&emsp;&nbsp;STORE</h3>
            </div>
            <Link to="/" className="link-buttons">Home</Link> 
            <Link to="/products" className="link-buttons">🛍️Shop</Link>
            {/* <Link to="/collections" className="link-buttons">Collections</Link>  */}
            <Link to="/about" className="link-buttons">About</Link>
            <Link to="/contact" className="link-buttons">Contact</Link> 
            <Link to="/cart" className="link-buttons"><span style={{color:"red"}}>🛒</span>Cart({cartItems.length})</Link> 
            <Link to="/wishlist" className="link-buttons">❤️WishList({wishlistItems.length})</Link> 
        </div>
    )
}
export default Navbar;