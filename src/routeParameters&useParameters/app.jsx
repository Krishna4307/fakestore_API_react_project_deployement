import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import Products from "./products";
import Home from "./home";
import ProductCard from "./productCard";

function App(){
    return(
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Products/>}>
                    <Route path=":id" element={<ProductCard/>}/>
                </Route>
                    
            </Routes>        
        </BrowserRouter>
    )
}
export default App;