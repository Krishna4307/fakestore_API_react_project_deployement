function Movies(props){
    let {poster,title,year,rating}=props;
    return(
        <>
            <img src={poster}/>
            <h1>{title}</h1>
            <p>{year}</p>
            <p>{rating}</p>
        </>
    )
}
export default Movies;