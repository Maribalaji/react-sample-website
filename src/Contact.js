import React from "react";
function Contact(){
    return(
    <div>
        <div class="contact-left">
            <h1 class="contact-head">Contact</h1>
					<div class="contact-row2">
						<div class="contact-col2">
							
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15764.343646179763!2d77.3076151!3d8.9642312!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0429e0c9b7733b%3A0x46bdbb121565d1a7!2sTenkasi%20Junction!5e0!3m2!1sen!2sin!4v1714576856898!5m2!1sen!2sin" style={{width:"480" ,height:"380px" ,border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
						
						</div>
						
						<div class="contact-col2">
						
						<form>
						<div class="form-row">
						<div class="form-col">
						  <div class="input-box">
						  
							<input type ="text" placeholder="Your Name" />
						  </div>
						  </div>
						  <div class="form-col">
						    <div class="input-box">
							<input type ="text" placeholder="Your email" />
						   </div>
						   </div>
						 </div>
						  <div class="input-box">
							<input type="text" placeholder="Subject" />
						  </div>
							
						  <div class="input-box message-box">
							<textarea cols="10" rows="10" placeholder="Message">  </textarea>
						  </div>
						  <div class="butn">
							<a href="#">Send Massage</a>
						  </div>
						</form>
						</div>
					
					</div>
        </div>


        <section id="footer-section">
            <div className="footer-container">
                <div className="footer-row">
                    <div className="footer-col">
                        <h1>COMPANY</h1>
                        <p>A108 Adam Street <br/>New York, NY 535022 <br/>United States</p>
                            <div className="foot-phn">
                                <p><b>Phone :</b>+1 5589 55488 55</p>
                                <p><b>Email :</b>info@example.com</p>


                            </div>
                    </div>
                    <div className="footer-col">
                        <h3>Useful Links</h3>
                        <ul>
                            <li><i className="fa fa-angle-right" aria-hidden="true"></i> Home</li>
                            <li><i className="fa fa-angle-right" aria-hidden="true"></i> About us</li>
                            <li><i className="fa fa-angle-right" aria-hidden="true"></i> Service</li>
                            <li><i className="fa fa-angle-right" aria-hidden="true"></i> Terms of service</li>
                            <li><i className="fa fa-angle-right" aria-hidden="true"></i> Privacy policy</li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3>Our Service</h3>
                        <ul>
                            <li><i className="fa fa-angle-right" aria-hidden="true"></i> Web Design</li>
                            <li><i className="fa fa-angle-right" aria-hidden="true"></i> Web Development</li>
                            <li><i className="fa fa-angle-right" aria-hidden="true"></i> Product Management</li>
                            <li><i className="fa fa-angle-right" aria-hidden="true"></i> Marketing</li>
                            <li><i className="fa fa-angle-right" aria-hidden="true"></i> Graphic Design</li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3>Join Our Newsletter</h3>
                        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                        <div className="footer-text">
                            <input type="text" className="footer-txt" />
                            <button className="footer-textbox">Subscribe</button>
                        </div>
                    
                    </div>
                </div>

                <div className="foot-end">
                    <div className="end-row">
                        <div className="end-col">
                            <p><i className="fa fa-copyright" aria-hidden="true"></i> Copyright <b>Company</b>. All Rights Reserved</p>
                            <p>Designed by <span className="end-color">BootstrapMade</span></p>
                        </div>
                        <div className="end-col1">
                            <div className="end-cont">
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                            </div>
                            <div className="end-cont">
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                            </div>
                            <div className="end-cont">
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </div>
                            <div className="end-cont">
                                <i className="fa fa-skype" aria-hidden="true"></i>
                            </div>
                            <div className="end-cont">
                                <i className="fa fa-linkedin" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
    )
}
export default Contact