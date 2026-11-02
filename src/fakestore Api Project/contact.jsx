import { useState } from "react";

function Contact(){
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[message,setMessage]=useState("")
    function handleSendButton(){
        setEmail("")
        setMessage("")
        setName("")
    }
    return(

        <div id="contact-page-section">

            <div id="contact-section">
                <div id="contactUs-card-section">
                    <h2>Contact Us</h2>
                    <div id="contact-info-section">
                        <div className="contact-info-div">
                            <img src="src\assets\location.png" width="25px" height="25px"/>
                            <div id="loaction-div">
                                <p>RoadNo15 -GaneshNagar,</p>
                                <p>500039,Hyderabad</p>
                            </div>
                        </div>

                        <div className="contact-info-div">
                            <img src="src\assets\gmail.png" width="25px" height="25px"/>
                            <div>
                                <p>fakestoreapi@gmail.com</p>
                            </div>
                        </div>

                        <div className="contact-info-div">
                            <img src="src\assets\phone.png" width="25px" height="25px"/>
                            <div>
                                <p>+91 9966887744</p>
                            </div>
                        </div>

                        <div className="contact-info-div">
                            <img src="src\assets\telephone.png" width="25px" height="25px"/>
                            <div>
                                <p>+91 9966557744</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        {/* ===================================================================================
                    Get In Touch Section
        =================================================================================== */}

            <div id="get-in-touch-section">
                <div className="empty-div">

                </div>
                <div className="content-div">
                    <h2>Get in Touch</h2>
                    <p>Feel free to drop us a line below!</p>
                </div>
                <div className="form-div">
                    <input type="text" placeholder="Your Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    <input type="text" placeholder="Your Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    <input type="text" placeholder="Type your Message Here" value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
                    <button onClick={handleSendButton}>Send</button>
                </div>
            </div>

        </div>
    )
}
export default Contact;