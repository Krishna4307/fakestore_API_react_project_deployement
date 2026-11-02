function About(){
    return(
        <div id="about-div-container">
            <div id="about-hero-section">
                <div className="hero-section-heading">   
                    <h1>About Us</h1>
                </div>
                <div className="hero-section-container">
                    <div className="hero-section-content">
                        <h3>About Our Store</h3>
                        <p>Welcome to Our Store, a simple and modern online shopping destination 
                        designed to make discovering and exploring products easy and convenient. 
                        Our store brings together a variety of products across different categories,
                        giving customers the opportunity to explore different options in one 
                        place.</p>
                        <p>Our collection includes Electronics, Jewelry, Men's Clothing, 
                        and Women's Clothing, offering something for different needs and styles. 
                        From useful electronic products and accessories to jewelry, 
                        fashion, and everyday clothing, 
                        customers can browse through a diverse range of products and 
                        explore the details of each item before making a choice.</p>
                        <p>We aim to provide a simple shopping experience where products are easy to find, 
                        categories are clearly organized, and prices are presented at reasonable and accessible levels.
                        Whether you are looking for an electronic accessory, a piece of jewelry, 
                        or clothing for yourself, 
                        you can explore different products and find options that suit your 
                        preferences.</p>
                        <p>Our Store is designed with a focus on simple navigation,
                        organized product categories, and an easy-to-use shopping experience.
                        Customers can move between different sections of the store, 
                        explore categories, view available products, 
                        and discover items that match their interests.
                        With products from multiple categories and a clean shopping experience, 
                        Our Store makes it simple to <strong>discover, explore, and 
                        shop</strong> for a variety of products in one place.</p>
                    </div>
                    <div className="hero-section-img">
                        <img src="src/assets/store-image.jpg" width="350px" height="200px"/>
                    </div>
                </div>
            </div><hr width="100%"></hr>

            
{/* ===========================================================================================
                    Our Project section
    ===========================================================================================  */}
            <div id="our-project-section">
                <h2>OUR Project</h2>
                <div id="our-project-div">
                    <p>This project is a React-based e-commerce website built using React, 
                    JavaScript, HTML, and CSS, with product data fetched dynamically from the 
                    Fake Store API. The application displays products across different categories, 
                    including Electronics, Jewelry, Men's Clothing, and Women's Clothing, 
                    allowing users to browse and explore the available products.</p>

                    <p>React Router is used to handle navigation between different pages of the 
                    application, while useState is used for managing application and 
                    product-related state, and useEffect is used to fetch and display product data 
                    from the API.</p>

                    <p>The current version of the project is designed and optimized for desktop 
                    screens. Responsive design for mobile phones, tablets, 
                    and other screen sizes will be implemented in future updates to provide 
                    a better experience across different devices.</p>

                    <p>Overall, this project demonstrates how a React-based e-commerce application
                    can fetch data from an external API, manage state, display 
                    products dynamically, and provide navigation between different pages.</p>
                </div>
            </div><hr width="100%"></hr>
{/* ===========================================================================================
                    What we offer section
=========================================================================================== */}
            <div id="offers-section">
                <h2>What We Offer</h2>
                <div id="offers-div">
                    <p>Explore products across different categories and discover 
                        items that match your needs and style.</p>
                    <div id="offer-div-section">
                        <div className="offer-div">
                            <img src="src/assets/electronics.avif" width="350px" height="200px"/>
                            <h3>Electronics</h3>
                            <button>Explore Now</button>
                        </div>
                        <div className="offer-div">
                            <img src="src/assets/jewllery.webp" width="350px" height="200px"/>
                            <h3>Jewllery</h3>
                            <button>Explore Now</button>
                        </div>
                        <div className="offer-div">
                            <img src="src/assets/women-store.jpg" width="350px" height="200px"/>
                            <h3>Women's Clothing</h3>
                            <button>Explore Now</button>
                        </div>
                        <div className="offer-div">
                            <img src="src/assets/mens-store.avif" width="350px" height="200px"/>
                            <h3>Men's Clothing</h3>
                            <button>Explore Now</button>
                        </div>
                    </div>
                </div>
            </div><hr width="100%"></hr>
{/* ===========================================================================================
                    Technologies Used section
===========================================================================================  */}
            <div id="technologies-section">
                <h2>Technologies Used</h2>
                <div id="technologies-div">
                    <div className="technology-div">
                        <img src="src/assets/html.png" width="50px" height="50px"/>
                        <button>HTML</button>
                    </div>
                    <div className="technology-div">
                        <img src="src/assets/css.png" width="50px" height="50px"/>
                        <button>CSS</button>
                    </div>
                    <div className="technology-div">
                        <img src="src/assets/js.png" width="50px" height="50px"/>
                        <button>JAVASCRIPT</button>
                    </div>
                    <div className="technology-div">
                        <img src="src/assets/react.png" width="50px" height="50px"/>
                        <button>REACT</button>
                    </div>
                    <div className="technology-div">
                        <img src="src/assets/api.png" width="50px" height="50px"/>
                        <button>API'S</button>
                    </div>
                    <div className="technology-div">
                        <img src="src/assets/store.png" width="50px" height="50px"/>
                        <button>FAKESTORE API</button>
                    </div>
                </div>
            </div><hr width="100%"></hr>

            
{/* ===========================================================================================
                    Footer section
===========================================================================================  */}
            <div id="footer-section">
                <h2>Footer</h2>
                <div id="footer-section-links">
                    <p>Your simple destination for online shopping.</p>
                    <div id="footer-section-div">
                        <div className="footer-links">
                            <h3>Quick Links </h3>
                            <a href="home">Home</a>
                            <a href="home">Products</a>
                            <a href="home">About</a>
                            <a href="home">Cart</a>
                        </div>
                        <div className="footer-links">
                            <h3>Categories </h3>
                            <a href="home">Electronics</a>
                            <a href="home">Jewlery</a>
                            <a href="home">Men's Clothing</a>
                            <a href="home">Women's Clothing</a>
                        </div>
                        <div className="footer-links">
                            <h3>Contact </h3>
                            <a href="home">Email</a>
                            <a href="home">Support</a>
                        </div>
                    </div>
                </div>
                <div id="copy-right">
                    <p>&copy;2026 Our Store. All rigths reserved</p>
                </div>
            </div>
        </div>
        
    )
}
export default About;