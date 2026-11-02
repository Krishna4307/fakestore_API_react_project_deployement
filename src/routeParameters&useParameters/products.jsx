import { Link, Outlet } from "react-router-dom";
import ProductsData from "./data";
function Products(){
    return(
        <>
            {ProductsData.map((product)=>(
                <div key={product.id}>
                    <h4>{product.name}</h4>
                    <Link to={`/products/${product.id}`}>View </Link>
                </div>
            ))}
            <Outlet/>
        </>

    )
    
    
}
export default Products;