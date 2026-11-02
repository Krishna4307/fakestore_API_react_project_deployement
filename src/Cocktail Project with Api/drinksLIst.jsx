import DrinksCard from "./drinksCard";
function DrinksList({drinksData}){
    return(
        <div id="drinks-list">
            {drinksData.map((drink)=>(
                
                <DrinksCard drink={drink} key={drink.idDrink}/>
            ))}
        </div>
    )
}
export default DrinksList;