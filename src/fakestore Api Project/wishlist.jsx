function WishList({wishlistItems,setWishlistItems}){
    function handleRemoveWishListItem(id){
        let filterRemoveWishListItems=wishlistItems.filter((item)=>{
            return item.id!==id;
        })
        setWishlistItems(filterRemoveWishListItems)
    }
    return(
       <div id="wishList-section">
            {wishlistItems.length ===0 ? 
            <div id="empty-wishlist">
                <img src="src/assets/wishlist.png" width="350px"/>
                <div>
                    <h2>your WishList is Empty  😑</h2>
                    <p>No Items Added to WishList! 🙃</p>
                </div>
            </div> 
            : wishlistItems.map((product)=>{
                return (
                    <div key={product.id} className="wishlist-item-div">
                        <img src={product.image} style={{width:"100px",height:"100px"}}/>
                        <h4>{product.title}</h4>
                        <p>{product.category}</p>
                        <p>$ USD Price : ${product.price}</p>
                        <p>₹    Rupees Price : ₹{(product.price*95).toFixed(2)}</p>
                        <p>{`${product.rating.rate} (${product.rating.count})`}</p>
                        <div className="remove-btn-div">
                            <img src="src\assets\delete.png" style={{width:"18px", height:"18px"}}/>
                            <button onClick={()=>{handleRemoveWishListItem(product.id)}}>Remove from WishList</button>
                        </div>

                    </div>
                )
            }) }
        </div>
    )
}
export default WishList;