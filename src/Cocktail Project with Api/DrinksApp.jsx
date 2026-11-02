import { useEffect, useState } from "react";
import {Route,Routes, useNavigate} from 'react-router-dom';
import Header from "./header";
import DrinksList from "./drinksLIst";
import "./drinksApp.css";
import DrinksCard from "./drinksCard";
import Footer from "./Footer";
import FavouritesDrinks from "./favouriteDrinks";
import AlcholDrinks from "./alcholDrinks";
import NonAlcholDrinks from "./non-alchol-Drinks";
import Dashboard from "./dashboard";
import ProtectedRoute from "./protectedRoute";
import LoginPage from "./loginpage";
function DrinksApp(){
    let errorobj={
        title:"Something Went Wrong! Please try Again Later"
    }
    const[drinksData,setDrinksData]=useState([]);
    const[login,setLogin]=useState(false);
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState(false)
    const navigate=useNavigate();
    let url="https://www.thecocktaildb.com/api/json/v1/1/search.php?f=l";

    async function getDrinks() {
        setLoading(true);
        try{
            let response=await fetch(url);
            let data=await response.json();
            let allDrinks=data.drinks;
            setDrinksData(allDrinks);
            setLoading(false);
        }
        catch(error){
            setLoading(false)
            setError(true)
        }
    }
    useEffect(()=>{
        getDrinks();
    },[])

    if(loading){
        return(<h1>Loading Cocktail Drinks... Please Wait</h1>)
    }
    if(error){
        return(<h1>Something Went Wrong 🥴! Please try again Later</h1>)
    }
    const handleLogin=()=>{
        if (login) {
            setLogin(false);
            navigate("/");
        } 
        else {
        setLogin(true);
        navigate("/dashboard");
    }
    }
    return(
        <div>
                <Header/>
                <button onClick={handleLogin}>{login?"Logout":"Login"}</button>
                <Routes>
                    <Route path="/" element={<DrinksList drinksData={drinksData}/>}/>
                    <Route path="/favuorite" element={<FavouritesDrinks/>}/>
                    <Route path="/dashboard" element={<ProtectedRoute login={login}><Dashboard/></ProtectedRoute>}/>
                    <Route path="/alcholdrinks" element={<AlcholDrinks/>}/>
                    <Route path="/nonalcholdrinks" element={<NonAlcholDrinks/>}/>
                    <Route path="/loginPage" element={<LoginPage/>}/>                    
                </Routes>
                <Footer/>
        </div>
    );
}
export default DrinksApp