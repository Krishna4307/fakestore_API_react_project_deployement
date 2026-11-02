import {BrowserRouter,Link,Route,Routes} from 'react-router-dom';
import { useEffect, useState } from 'react';
import SingleUser from './singleUser';
import Home from './home';
import Users from './users';
function App(){
    const[productsData,setProductsData]=useState([]);
    async function getProductsData() {
        const response=await fetch("https://fakestoreapi.com/products");
        const data=await response.json();
        setProductsData(data)
    }
    useEffect(()=>{
        getProductsData()
    },[])
    return(
        <div>
            {console.log(productsData)}
            <h1>APP Component</h1>
            <BrowserRouter>
                <Link to="/">Home</Link><br></br>
                <Link to="/products">Products</Link>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/products' element={<Users data={productsData}/>}/>
                    <Route path='/products/:id' element={<SingleUser data={productsData}/>}/>
                </Routes>
            </BrowserRouter>
            
        </div>
        
    )
}
export default App;