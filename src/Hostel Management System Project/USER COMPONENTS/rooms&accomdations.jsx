import "./rooms_accomdations.css";
import bookbed from "./Bookbed";
import { useNavigate } from "react-router-dom";
function Rooms(){
    const navigate = useNavigate();
    return(
        <div id="rooms-section">
            <section className="section1">
                <h4>Rooms & Accomdations</h4>
                <h1>Comfortable Rooms for a  Better Tommorrow</h1>
                <p>Well-furnished, safe and peaceful rooms designed for students to study, relax and feel at home</p>
                <ul>
                    <li>
                        <img src="src/assets/bed.png"/>
                        <p>Spacious</p>
                        <p>Rooms</p>
                    </li>
                    <li>
                        <img src="src/assets/wifi.png"/>
                        <p>High-speed</p>
                        <p>WiFi</p>
                    </li>
                    <li>
                        <img src="src/assets/shield (1).png"/>
                        <p>Safe & Secure</p>
                        <p>Environment</p>
                    </li>
                    <li>
                        <img src="src/assets/group.png"/>
                        <p>Student</p>
                        <p>Friendly</p>
                    </li>
                </ul>
            </section>


            <section className="section2">
                <h4>Our Rooms</h4>
                <h2>Room Types</h2>
                <p>Choose the room that fits your lifestyle and comfort. 
                    Each room is designed <span>with modern facilities and a student-friendly environment.</span></p>
            </section>


            <section className="section3">
                <div className="single-sharing-card">
                    <img src="src/assets/single-sharing.jpeg"/>
                    <h4>Single Room</h4>
                    <p>A Private room for complete comfort, focus and privacy</p>
                    <ul>
                        <li>
                            <img src="src/assets/bed.png"/>
                            <p>1 Bed</p>
                        </li>
                        <li>
                            <img src="src/assets/study-table (2).png"/>
                            <p>Study Table</p>
                        </li>
                        <li>
                            <img src="src/assets/wardorbe.png"/>
                            <p>Wardorable</p>
                        </li>
                        <li>
                            <img src="src/assets/ventilator.png"/>
                            <p>Well Ventilated</p>
                        </li>
                    </ul>
                    <button>View Details &rarr;</button>
                </div>
                <div className="double-sharing-card">
                    <img src="src/assets/double-sharing.jpeg"/>
                    <h4>Double Sharing</h4>
                    <p>Spacious and comfortable room shared by two students</p>
                    <ul>
                        <li>
                            <img src="src/assets/bed.png"/>
                            <p>2 Beds</p>
                        </li>
                        <li>
                            <img src="src/assets/study-table (2).png"/>
                            <p>Study Table (Each)</p>
                        </li>
                        <li>
                            <img src="src/assets/wardorbe.png"/>
                            <p>Wardrobe (Each)</p>
                        </li>
                        <li>
                            <img src="src/assets/sun-light.png"/>
                            <p>Natural Lighting</p>
                        </li>
                    </ul>
                    <button>View Details &rarr;</button>
                </div>
                <div>
                    <img src="src/assets/triple-sharing.jpeg"/>
                    <h4>Triple Sharing</h4>
                    <p>Affordable and Comfrtable option for three students</p>
                    <ul>
                        <li>
                            <img src="src/assets/bed.png"/>
                            <p>3 Beds</p>
                        </li>
                        <li>
                            <img src="src/assets/study-table (2).png"/>
                            <p>Study Table (Each)</p>
                        </li>
                        <li>
                            <img src="src/assets/wardorbe.png"/>
                            <p>Wardorable (Each)</p>
                        </li>
                        <li>
                            <img src="src/assets/sun-light.png"/>
                            <p>Spacious Layout</p>
                        </li>
                    </ul>
                    <button>View Details &rarr;</button>
                </div>
                <div className="dormitary-card">
                    <img src="src/assets/dormitary.jpeg"/>
                    <h4>Dormitary</h4>
                    <p>Budget friendly option with essential facilities</p>
                    <ul>
                        <li>
                            <img src="src/assets/bed.png"/>
                            <p>Multiple Beds</p>
                        </li>
                        <li>
                            <img src="src/assets/study-table (2).png"/>
                            <p>Study Space</p>
                        </li>
                        <li>
                            <img src="src/assets/locker.png"/>
                            <p>Personal Locker</p>
                        </li>
                        <li>
                            <img src="src/assets/clean.png"/>
                            <p>Clean & spacious</p>
                        </li>
                    </ul>
                    <button>View Details &rarr;</button>
                </div>
            </section>


            <section className="section4">
                <h2>What's inside Our Rooms?</h2>
                <p>Every room is eqipped with essential facilities to make your 
                    stay comfortable, productive and stress-free</p>
                <ul id="inside-rooms-list">
                    <li>
                        <img src="src\assets\bed.png"/>
                        <p>Comfortable Beds</p>
                    </li>
                    <li>
                        <img src="src\assets\study-table (2).png"/>
                        <p>StudyTable & Chair</p> 
                    </li>
                    <li>
                        <img src="\src\assets\wardorbe.png"/>
                        <p>Wardrobe & Storage.</p>
                    </li>
                    <li>
                        <img src="\src\assets\ventilator.png"/>
                        <p>Proper Ventilation</p>
                    </li>
                    <li>
                        <img src="\src\assets\wifi.png"/>
                        <p>High-Speed WiFi</p>
                    </li>
                    <li>
                        <img src="\src\assets\sun-light.png"/>
                        <p>Good Lighting</p>
                    </li>
                </ul>
            </section>

            <section className="section5">
                    <h4>Gallery</h4>
                    <h2>Room Gallery</h2>
                    <p>Take a look at our rooms and get a feel of the comfortable and 
                        student-friendly environment
                    </p>
                    <ul>
                        <li>
                            <img src="src/assets/single-sharing.jpeg"/>
                        </li>
                        <li>
                            <img src="src/assets/double-sharing.jpeg"/>
                        </li>
                        <li>
                            <img src="src/assets/triple-sharing.jpeg"/>
                        </li>
                        <li>
                            <img src="src/assets/dormitary.jpeg"/>
                        </li>
                    </ul>
            </section>
            <section className="bottom-section">
                <p>Looking for a Room?</p>
                <h2>Explore Available Beds</h2>
                <p>Check current availbility and find the perfect room for you</p>
                <button onClick={()=>{
                        navigate("/Bookbed")
                    }}>Book Your Bed &rarr;</button>
            </section>
        </div>
    )
}
export default Rooms;