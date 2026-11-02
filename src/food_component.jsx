function FoodItems(props){
    let{name,location,type,rating,poster}=props;
    return(
        <>
            <img src={poster}/>
            <h1>{type}</h1>
            <p>{name}</p>
            <p>{location}</p>
            <p>{rating}</p>
        </>
    )
}
export default FoodItems;