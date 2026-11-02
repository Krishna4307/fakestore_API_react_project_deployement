function Cart({cartItems,setCartItems}){
    function handleRemoveCartItem(id){
        let filterRemoveCartItems=cartItems.filter((item)=>{
            return item.id!==id;
        })
        setCartItems(filterRemoveCartItems)
    }
    return(
        <div id="carts-section">
            {cartItems.length ===0 ? 
            <div id="empty-cart">
                <img src="src/assets/cart2.png" width="350px"/>
                <div>
                    <h2>your cart is Empty  😑</h2>
                    <p>No Items Added to Cart! 🙃</p>
                </div>
            </div>  
            
            : cartItems.map((product)=>{
                return (
                    <div key={product.id} className="cart-item-div">
                        <img src={product.image} style={{width:"100px",height:"100px"}}/>
                        <h2>{product.title}</h2>
                        <p>{product.category}</p>
                        <p>$ USD Price : ${product.price}</p>
                        <p>₹ Rupees Price : ₹{(product.price*95).toFixed(2)}</p>
                        <p>{`${product.rating.rate} (${product.rating.count})`}</p>
                        <div className="remove-btn-div">
                            <img src="src\assets\delete.png" style={{width:"18px", height:"18px"}}/>
                            <button onClick={()=>{handleRemoveCartItem(product.id)}}> Remove from Cart</button>
                        </div>
                    </div>
                )
            }) }
        </div>
    )
}
export default Cart;