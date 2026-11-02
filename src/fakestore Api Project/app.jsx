import { BrowserRouter, Route,Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./home";
import Navbar from "./navbar";
import Products from "./products";
import ProductCard from "./productCard";
import About from "./about";
import "./app.css"
import WishList from "./wishlist";
import Cart from "./cart";
import Contact from "./contact";
function App(){
    const[cartItems,setCartItems]=useState([]);
    const[wishlistItems,setWishlistItems]=useState([]);
    return(
        <BrowserRouter>
        <Navbar wishlistItems={wishlistItems} cartItems={cartItems}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/products" element={<Products wishlistItems={wishlistItems} setWishlistItems={setWishlistItems} cartItems={cartItems} setCartItems={setCartItems}/>}/>
                <Route path="/products/:id" element={<ProductCard/>}/>
                <Route path="/wishlist" element={<WishList wishlistItems={wishlistItems} setWishlistItems={setWishlistItems}/>}/>
                <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;

