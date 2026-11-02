import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./cart";
import WishList from "./wishlist";

function Products({cartItems,setCartItems,wishlistItems,setWishlistItems}){
    const[products,setProducts]=useState([]);
    const[searchInputValue,setSearchInputValue]=useState("");
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState(false);
    async function getProducts() {
        try{
            setLoading(true);
            let response=await fetch("https://fakestoreapi.com/products");
            let data=await response.json()  
            setLoading(false)
            setProducts(data)

        }
        catch(error){
            setLoading(false);
            setError(true);
        }
          
    }
    
    useEffect(()=>{
        getProducts()
    },[])

    function handleAddtoCart(id){
        let filterCartItems=products.find((item)=>{
            return item.id === id;
        })
        setCartItems([...cartItems,filterCartItems])
    } 


    function handleWishlist(id){
        let filterWishListItems=products.find((item)=>{
            return item.id === id;
        })
        setWishlistItems([...wishlistItems,filterWishListItems])
        alert("Product Succesfully Added to WishList")
    }

    const getSearchedItems=products.filter((product)=>{
        return product.title.trim().toLowerCase().includes(searchInputValue.trim().toLowerCase());
    })
    

    return(
            <div id="products-container">
                <div id="search-div">
                    <img src="src\assets\search.png" width="18px" height="18px" className="search"/>
                    <input type="search" value={searchInputValue} onChange={(e)=>{setSearchInputValue(e.target.value)}} placeholder="Search Here for Your Needed Products"/>
                    <img src="src\assets\mic.png" width="18px" height="18px" className="mic"/>
                    {/* <button><img src=""/>Search</button> */}
                </div>
                
                <div>
                    {/* <h1>Buy Your Products</h1> */}
                    {loading && <h3 id="loading-state">Loading Products ... Please wait</h3>}
                    {error && <h3 id="error-state">Something Went Wrong! please try after Sometime</h3>}
                </div>

                {searchInputValue && getSearchedItems.length===0 && 
                <div id="search-error-div">
                    <h1 className="error-search-input">No Items Found!</h1>
                    <p>Please search Item Name or Category <strong>(ex : womens,mens,jewllery,t-shrts,shirts)</strong></p>
                </div> }
                <div id="products-div">
                    {(searchInputValue ? getSearchedItems : products).map((product)=>(
                        <div key={product.id} className="product-div">
                            <img src={product.image} style={{width:"100px",height:"100px"}}/>
                            <h2>{product.title}</h2>
                            <p>{product.category}</p>
                            <p>$ USD Price : ${product.price}</p>
                            <p>₹    Rupees Price : ₹{(product.price*95).toFixed(2)}</p>
                            <p>{`${product.rating.rate} (${product.rating.count})`}</p>
                            <button className="cart-btn" onClick={()=>{handleAddtoCart(product.id)}}>Add to Cart</button>
                            <button onClick={()=>{handleWishlist(product.id)}}>Add to WishList</button>
                            <Link className="details-btn" to={`/products/${product.id}`} state={{products}}>Show more Details</Link>
                        </div>   
                    ))}
                </div>

                
            </div>
        
        
    )
}
export default Products;