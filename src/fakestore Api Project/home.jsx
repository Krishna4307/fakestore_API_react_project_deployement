import { Link } from "react-router-dom";

function Home(){
    return(
        <div id="home-div">
            <div id="content-div">
                <div className="heading">
                    <h2>Shop the <span style={{color:"white"}}>Latest Trends</span></h2>
                </div>
                <div className="description" style={{marginTop:"-40px"}}>
                    <p style={{fontSize:"22px"}}>Discover your Style with our new Arrivals</p>
                </div>
                <div className="buttons" style={{display:"flex",flexDirection:"row", gap:"25px"}}>
                    <button style={{backgroundColor:"tomato",color:"white"}} className="shop-btn"><Link to="/products" className="link">Shop Now</Link></button>
                    <button className="view-btn"><Link to="/products" className="link2">View Collections</Link></button>
                </div>
            </div>
            <div id="img-background-div">
                
            </div>
        </div>
    )
}
export default Home;