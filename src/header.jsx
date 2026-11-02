function HeaderComponent(){
    return(
        <header>
            <h1>Netflix <span style={{color:"black", fontFamily:"nonenpm run dev"}}>Gallery</span></h1>
            <ul type="none">
                <li><a href="home">Home</a></li>
                <li><a href="to-rated">Top Rated</a></li>
                <li><a href="recomended">Recomended</a></li>
                <li><a href="new-release">New Release</a></li>
                <li><a href="classic">Classic</a></li>
            </ul>
        </header>
    );
}
export default HeaderComponent;