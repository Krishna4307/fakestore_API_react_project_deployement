import { useNavigate } from "react-router-dom";
import "./about.css";
function AboutUs(){
    const navigate=useNavigate();
    return(
        <div id="about-component">
            <div className="section1">
                <div id="div1">
                    <h4>ABOUT PEDDI HOSTEL</h4>
                    <h2>More than a place to stay.</h2>
                    <p>Peddi Hostel is a comfortable and welcoming living space 
                        for students and working professionals away from home.</p>
                    <ul>
                        <li>
                            <img src="src\assets\house.png"/>
                            <p>Clean Environment</p>
                        </li>
                        <li>
                            <img src="src\assets\group.png"/>
                            <p>Friendly Community</p>
                        </li>
                        <li>
                            <img src="\src\assets\target.png"/>
                            <p>Focus on Goals</p>
                        </li>
                    </ul>
                </div>
                <div id="div2">

                </div>
            </div>
            <div className="section2">
                <div id="div1">
                    <h4>Our story</h4>
                    <h2>Why Peddi Hostel ?</h2>
                    <p>Peddi Hostel was created with a simple vision — 
                    to provide students and working professionals with a comfortable, 
                    safe, and welcoming place to call home.
                    Moving to a new city for education or work can be challenging. 
                    That's why we aim to make everyday life easier by offering a clean environment, 
                    essential facilities,and a friendly atmosphere where everyone feels supported.
                    </p>
                    <button onClick={()=>{navigate("/Services")}}>Our Facilities ➡️</button>
                </div>
                <div id="div2">
                    <img src="src\assets\peddi-hostel.png"/>
                </div>
            </div>
            <div className="section3">
                <h4>Our Values</h4>
                <h2>What We Stand For</h2>
                <ul id="section3-list">
                    <li>
                        <img src="src\assets\leaf.png"/>
                        <div>
                            <h5>Cleanliness</h5>
                            <p>A clean and hygenic environment for healthy  and comfortable stay</p>
                        </div>
                    </li>
                    <li>
                        <img src="src\assets\public-safety.png"/>
                        <div>
                            <h5>Respect</h5>
                            <p>A friendly and respectful atomsphere for everyone</p>
                        </div>
                        
                    </li>
                    <li>
                        <img src="\src\assets\shield (1).png"/>
                        <div>
                            <h5>Safety</h5>
                            <p>Your safety and peace of mind are always important to us</p>
                        </div>
                        
                    </li>
                    <li>
                        <img src="\src\assets\target.png"/>
                        <div>
                            <h5>Support</h5>
                            <p>We are here to support your daily needs and help you focus on your goals</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="section4">
                <div id="div1">
                    <img src="\src\assets\study-table.png"/>    
                </div>
                <div id="div2">
                    <h4>OUR COMMUNITY</h4>
                    <h2>A Comfortable Living Experience</h2>
                    <p>At Peddi Hostel, we offer more than just a place to stay. 
                        We create a peaceful and supportive environment 
                        where students and working professionals can study, work, relax, and grow together.
                        Whether you're preparing for exams, building your career, or starting a new chapter in life, 
                        our goal is to make you feel comfortable, connected, and at home.
                    </p>
                    {/* <ul id="section4-list">
                        <li>
                            <img src="src\assets\public-safety.png"/>
                            <p>Connect with others, share experiences, and grow together.</p>
                        </li>
                        <li>
                            <img src="src\assets\placeholder.png"/>
                            <p> Located in SR Nagar, Hyderabad, close to daily essentials.</p> 
                        </li>
                        <li>
                            <img src="\src\assets\heart (3).png"/>
                            <p>A welcoming space for everyday living.</p>
                        </li>
                    </ul> */}
                </div>
            </div>
            <div className="section5">
                <div id="div1">
                    <h4>OUR LOCATION</h4>
                    <h2>Located in the Heart of SR Nagar, Hyderabad</h2>
                    <p>eddi Hostel is located in SR Nagar, Hyderabad, 
                        offering a convenient place to stay for students and working professionals. 
                        With access to colleges, public transport, local markets, and everyday essentials, 
                        you can enjoy a comfortable stay while staying connected to the city.
                    </p> 
                     <ul id="section5-list">
                        <li>
                            <img src="src\assets\train.png"/>
                            <p>Close to Metro</p>
                        </li>
                        <li>
                            <img src="src\assets\cart.png"/>
                            <p> Nearby Markets</p> 
                        </li>
                        <li>
                            <img src="\src\assets\office.png"/>
                            <p>Colleges & Offices.</p>
                        </li>
                        <li>
                            <img src="\src\assets\transport.png"/>
                            <p>Easy Transport</p>
                        </li>
                    </ul>
                    <button>Get Directions ➡️</button>
                </div>
                <div id="div2">
                    <img src="\src\assets\location-image.png"/>
                </div>
            </div>
            <div className="section6">
                <div id="div1">
                    <h2>Ready to be a part of PEDDI HOSTEL ?</h2>
                    <p>A comfortable stay, a supportive community and a better tomorrow</p>
                </div>
                <div id="div2">
                    <button onClick={()=>{
                        navigate("/Bookbed")
                    }}>Book Your Bed &rarr;</button>
                </div>
            </div>
        </div>
        
    )
}
export default AboutUs;