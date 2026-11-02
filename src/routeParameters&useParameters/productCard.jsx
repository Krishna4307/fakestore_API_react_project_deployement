import ProductsData from "./data";
import { useParams } from "react-router-dom";
function ProductCard(){
    const{id}=useParams();
    const product=ProductsData.find((item)=>(item.id ===Number(id)))
    console.log(product)
    return(
        <div>
            <h1>Product Card</h1>
            <p>{product.name}</p>
            <p>{product.category}</p>
            <p>{product.price}</p>
        </div>
    )
}
export default ProductCard;