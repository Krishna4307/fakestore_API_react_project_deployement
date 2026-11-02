import "./facilities&services.css"
function Services(){
    return(
        <div id="facilities-section">
            <section className="section1">
                <h1>Services & Facilities</h1>
                <h4>Everything you need for a Comfortable and productive stay</h4>
                <p>At peddi hostel, we provide modern facilities and essentials services to ensure a safe,
                    Comfortable, and  hassle-free living experience for  students and working  professionals
                </p>
                <div>
                    <button className="explore-btn">Explore facilities &rarr;</button>
                    <button className="contact-btn">Contact us</button>
                </div>

            </section>
            <section className="section2">
                <ul>
                    <li>
                        <img src="src/assets/graduate-hat.png"/>
                        <p>Student Friendly Environement</p>
                    </li>
                    <li>
                        <img src="src/assets/shield (1).png"/>
                        <p>Safe & Secure Premises</p>
                    </li>
                    <li>
                        <img src="src/assets/group.png"/>
                        <p>Clean & Hygienic Facilities</p>
                    </li>
                    <li>
                        <img src="src/assets/location.png"/>
                        <p>Prime Location in SR Nagar</p>
                    </li>
                </ul>
            </section>
            <section className="section3">
                <div className="div1">
                    <img src="src/assets/facilities-section3-img.png"/>
                </div>
                <div className="div2">
                    <h4>Our Services</h4>
                    <h2>Designed for your Comfort</h2>
                    <p>Our facilities are carefully designed to support your acadamic and personal life.
                        from spacious rooms to high-speed WiFi, we ensure you have everything you need under
                        one roof.
                    </p>
                    <ul>
                        <li>
                            <img src="src/assets/bed.png"/>
                            <p>Comfortable</p>
                            <p>Rooms</p>
                        </li>
                        <li>
                            <img src="src/assets/wifi.png"/>
                            <p>24/7</p>
                            <p>WiFi</p>
                        </li>
                        <li>
                            <img src="src/assets/spoons.png"/>
                            <p>Quality</p>
                            <p>Food</p>
                        </li>
                        <li>
                            <img src="src/assets/shield (1).png"/>
                            <p>24/7</p>
                            <p>Security</p>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="section4">
                    <h4>OUR FACILITIES</h4>    
                    <h2>Facilities That Feel Like Home</h2>
                    <p>Modern amenities for a better living experience.</p>
                
                <ul>
                    <li>
                        <img src="src/assets/sleeping-room.png"/>
                        <h4> Spacious Rooms</h4>
                        <p>Clean, well-ventilated, and furnished rooms.</p>
                    </li>
                    <li>
                        <img src="src/assets/quality-food.png"/>
                        <h4> Quality Food</h4>
                        <p>Enjoy hygienic, nutritious, meals with Homelt taste.</p>
                    </li>
                    <li>
                        <img src="src/assets/room-wifi.png"/>
                        <h4>High-Speed Wi-Fi</h4>
                        <p>Stay connected for your studies and work.</p>
                    </li>
                    <li>
                        <img src="src/assets/washing-machine.png"/>
                        <h4>Laundry Service</h4>
                        <p>Regular Laundry service for your convenience.</p>
                    </li>
                    <li>
                        <img src="src/assets/cctv.png"/>
                        <h4>24/7 Security</h4>
                        <p>CCTV Survilleance and secure entry systems.</p>
                    </li>
                    <li>
                        <img src="src/assets/study-area.png"/>
                        <h4> Study Areas</h4>
                        <p>Quiet and peaceful spaces to focus on your goals.</p>
                    </li>
                </ul>
            </section>
        </div>
    )
}
export default Services;