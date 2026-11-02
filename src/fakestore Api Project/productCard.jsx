import { useParams,useLocation } from "react-router-dom";

function ProductCard(){
    const{id}=useParams();
    let location=useLocation();
    console.log(location.state)
    const { products } = location.state;
    let singleProduct=products.find((pr)=>{
        return pr.id ===Number(id);
    })
    return(
        <div id="Single-product">
            <div className="single-product-image">
                <img src={singleProduct.image}/>
            </div>
            <div className="single-product-details">
                <h3>{singleProduct.title}</h3>
                <p className="category">Category : <strong style={{color:"tomato", fontSize:"18px"}}>{singleProduct.category}</strong></p>
                <p className="usd-price">$USD Price : <strong style={{color:"tomato" ,fontSize:"18px"}}>${singleProduct.price}</strong></p>
                <p className="rupee-price">₹Rupees Price : <strong style={{color:"tomato" ,fontSize:"18px"}}>₹{singleProduct.price*95}</strong></p>
                <p className="rating">Rating : <strong style={{color:"tomato" ,fontSize:"18px"}}>{`${singleProduct.rating.rate} (${singleProduct.rating.count})`}</strong> </p>
                <p style={{fontSize:"18px",fontWeight:"700"}}>Description : <strong style={{fontSize:"19px", fontWeight:"400"}}>{singleProduct.description}</strong></p>
            </div>
        </div>
    )
}
export default ProductCard;