function DrinksCard({drink}){
    return(
        <div className="drink-card">
            <img src={drink.strDrinkThumb}/>
            <h2>{drink.strDrink}</h2>
            <p>Type : {drink.strAlcoholic.includes("Non ")?"Non - Alcholic" : "Alcholic"}</p>
            <p>Date : {drink.dateModified}</p>

        </div>
    )
}
export default DrinksCard;