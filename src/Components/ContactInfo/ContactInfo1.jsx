const ContactInfo1 = () => {
    return (
        <div>
            <div className="space100"></div>
            <div className="contact-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-boxs">
                                <div className="heading1">
                                    <h2>Contact Information</h2>
                                    <div className="space16"></div>
                                    <p>We have grown with the internet revolution, and we know how to deliver online solutions effectively.</p>
                                </div>

                                <div className="contact-box">
                                    <div className="icon">
                                        <img style={{width: "30px", borderRadius: "50%"}} src="/assets/img/icons/fiverr_icon.webp" alt="Fiverr" />
                                    </div>
                                    <div className="heading">
                                        <h5>Fiverr Profile</h5>
                                        <a href="https://www.fiverr.com/flutter_cake" target="_blank" rel="noopener noreferrer" className="text">My Fiverr Account</a>
                                    </div>
                                </div>

                                <div className="contact-box">
                                    <div className="icon">
                                        <img style={{width: "30px", borderRadius: "50%"}} src="/assets/img/icons/github_icon.webp" alt="GitHub" />
                                    </div>
                                    <div className="heading">
                                        <h5>GitHub Profile</h5>
                                        <a href="https://github.com/flutter-cake" target="_blank" rel="noopener noreferrer" className="text">My GitHub Account</a>
                                    </div>
                                </div>

                                <div className="contact-box">
                                    <div className="icon">
                                        <img src="/assets/img/icons/contact-page-icon3.png" alt="Location" />
                                    </div>
                                    <div className="heading">
                                        <h5>Office Location</h5>
                                        <p className="text">Dhaka, Bangladesh</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="contact-form-details">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="single-input">
                                                <input type="text" placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="single-input">
                                                <input type="text" placeholder="Last Name" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="single-input">
                                                <input type="email" placeholder="Email" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="single-input">
                                                <input type="number" placeholder="Phone" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="single-input">
                                                <input type="text" placeholder="Subject" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="single-input">
                                                <textarea cols="30" rows="5" placeholder="Message"></textarea>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <button className="theme-btn1">Submit <span><i className="bi bi-arrow-right"></i></span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="space100"></div>

            <div className="contact-map-page">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9027345181876!2d90.38704811543048!3d23.750903394592944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85cc0f4f8b7%3A0x6a2a8d5b99c4e27e!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1695384000000!5m2!1sen!2sbd" 
                    width="600" 
                    height="450" 
                    allowFullScreen="" 
                    loading="lazy"
                    title="Dhaka, Bangladesh">
                </iframe>
            </div>
        </div>
    );
};

export default ContactInfo1;
