import { Link } from "react-router-dom";

const Footer1 = () => {
    return (
        <div className="footer1 _relative">
        <div className="container">
             <div className="row">
                  {/* Logo & About */}
                  <div className="col-lg-4 col-md-6 col-12">
                       <div className="single-footer-items footer-logo-area">
                            <div className="footer-logo">
                              <a href="/">
                                <img src="/assets/img/icons/flutter_icon.webp" alt="Flutter Icon" /> 
                                Imam Uddin Helal
                              </a>
                            </div>
                            <div className="space20"></div>
                            <div className="heading1">
                              <p>
                                I’m a Professional Flutter Developer passionate about building 
                                high-quality, scalable, and visually engaging mobile applications. 
                                Helping businesses and startups transform their ideas into 
                                real-world digital products.
                              </p>
                            </div>
                            <ul className="social-icon">
                                 <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                                 <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                                 <li><a href="#"><i className="bi bi-youtube"></i></a></li>
                                 <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                            </ul>
                       </div>
                  </div>

                  {/* Services */}
                  <div className="col-lg col-md-6 col-12">
                       <div className="single-footer-items">
                            <h3>Services I Offer</h3>
                            <ul className="menu-list">
                                 <li><Link to="/service/service-details">Cross-Platform App Development</Link></li>
                                 <li><Link to="/service/service-details">UI/UX Implementation</Link></li>
                                 <li><Link to="/service/service-details">API Integration</Link></li>
                                 <li><Link to="/service/service-details">App Maintenance & Support</Link></li>
                            </ul>
                       </div>
                  </div>

                  {/* Useful Links */}
                  <div className="col-lg col-md-6 col-12">
                       <div className="single-footer-items">
                            <h3>Useful Links</h3>
                            <ul className="menu-list">
                                 <li><Link to="/about">About Me</Link></li>
                                 <li><Link to="/service">Services</Link></li>
                                 <li><Link to="/blog">Blog</Link></li>
                                 <li><Link to="/project">Projects</Link></li>
                                 <li><Link to="/contact">Contact</Link></li>
                            </ul>
                       </div>
                  </div>

                  {/* Contact */}
                  <div className="col-lg-3 col-md-6 col-12">
                       <div className="single-footer-items">
                            <h3>Contact Me</h3>

                            <div className="contact-box">
                              <div className="icon">
                                <img style={{width: "30px", borderRadius: "50%"}} src="/assets/img/icons/fiverr_icon.webp" alt="Fiverr Icon" />
                              </div>
                              <div className="pera">
                                <a href="https://www.fiverr.com/flutter_cake" target="_blank" rel="noreferrer">
                                  My Fiverr Profile
                                </a>
                              </div>
                            </div>

                            <div className="contact-box">
                              <div className="icon">
                                <img style={{width: "30px", borderRadius: "50%"}} src="/assets/img/icons/github_icon.webp" alt="GitHub Icon" />
                              </div>
                              <div className="pera">
                                <a href="https://github.com/flutter-cake" target="_blank" rel="noreferrer">
                                  My GitHub Profile
                                </a>
                              </div>
                            </div>

                       </div>
                  </div>
             </div>

             <div className="space40"></div>
        </div>

        {/* Copyright */}
        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                   <div className="coppyright">
                     <p>© {new Date().getFullYear()} Imam Uddin Helal. All Rights Reserved.</p>
                   </div>
              </div>
              <div className="col-md-7">
                   <div className="coppyright right-area">
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                   </div>
              </div>
         </div>
          </div>
     </div>

      </div>
    );
};

export default Footer1;
