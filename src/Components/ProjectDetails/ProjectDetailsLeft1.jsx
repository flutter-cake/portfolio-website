import { Link } from "react-router-dom";

const ProjectDetailsLeft1 = () => {
    return (
        <div className="service-details-area-all sp">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        {/* Search */}
                        <div className="sidebar-box-area mb-40">
                            <h3>Search by Keyword</h3>
                            <div className="search">
                                <input type="text" placeholder="Type keyword here" />
                                <div className="button">
                                    <button><i className="bi bi-search"></i></button>
                                </div>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="sidebar-box-area sidebar-bg mb-40">
                            <h3>Tags</h3>
                            <ul className="tags">
                                <li><a href="#">Flutter</a></li>
                                <li><a href="#">Dart</a></li>
                                <li><a href="#">Cross-Platform</a></li>
                                <li><a href="#">Mobile App</a></li>
                                <li><a href="#">Firebase</a></li>
                                <li><a href="#">UI/UX</a></li>
                                <li><a href="#">State Management</a></li>
                                <li><a href="#">API Integration</a></li>
                            </ul>
                        </div>

                        {/* Free Quote Form */}
                        <div className="sidebar-box-area sidebar-bg mb-40">
                            <h3>Get A Free Quote</h3>
                            <div className="contact-form">
                                <form action="#">
                                    <div className="single-input">
                                        <input type="text" placeholder="Your Name" />
                                    </div>
                                    <div className="single-input">
                                        <input type="email" placeholder="Email Address" />
                                    </div>
                                    <div className="single-input">
                                        <input type="number" placeholder="Phone Number" />
                                    </div>
                                    <div className="single-input">
                                        <textarea placeholder="Your Message" cols="30" rows="3"></textarea>
                                    </div>
                                    <div className="button">
                                        <button className="theme-btn1">Learn More <span><i className="bi bi-arrow-right"></i></span></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="col-lg-8 details-left-space">
                        <div className="service-details-post">
                            <article>
                                <div className="details-post-area">
                                    <div className="image">
                                        <img src="/assets/img/others/project-details-img1.png" alt="Flutter Project" />
                                    </div>
                                    <div className="space30"></div>
                                    <div className="heading1">
                                        <h2>Cross-Platform Mobile Apps with Flutter</h2>
                                        <div className="space16"></div>
                                        <p>We create high-performance, visually appealing Flutter apps that run seamlessly on both iOS and Android. Our projects focus on responsive design, smooth user experience, and maintainable code architecture, helping clients bring their app ideas to life efficiently.</p>
                                    </div>
                                </div>
                            </article>

                            <div className="space50"></div>

                            <article>
                                <div className="details-post-area">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="heading1">
                                                <h5>Our Flutter Development Process</h5>
                                                <div className="space16"></div>
                                                <div className="boxs-area">
                                                    <ul>
                                                        <li><span className="check"><i className="bi bi-check-lg"></i></span> Requirement Analysis</li>
                                                        <li><span className="check"><i className="bi bi-check-lg"></i></span> UI/UX Design</li>
                                                        <li><span className="check"><i className="bi bi-check-lg"></i></span> Development</li>
                                                    </ul>
                                                    <ul>
                                                        <li><span className="check"><i className="bi bi-check-lg"></i></span> State Management Integration</li>
                                                        <li><span className="check"><i className="bi bi-check-lg"></i></span> Testing & QA</li>
                                                        <li><span className="check"><i className="bi bi-check-lg"></i></span> Deployment & Support</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>

                            <div className="space50"></div>

                            <article>
                                <div className="details-post-area">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="heading1">
                                                <h5>Key Benefits of Flutter Projects</h5>
                                                <div className="space16"></div>
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="project-details-box heading1">
                                                            <h4><Link to="/project/project-details">Cross-Platform Compatibility</Link></h4>
                                                            <div className="space16"></div>
                                                            <p>Single codebase for iOS and Android reduces development time and costs.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="project-details-box heading1">
                                                            <h4><Link to="/project/project-details">High Performance</Link></h4>
                                                            <div className="space16"></div>
                                                            <p>Flutter’s native compilation ensures smooth animations and fast load times.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="project-details-box heading1">
                                                            <h4><Link to="/project/project-details">Responsive UI</Link></h4>
                                                            <div className="space16"></div>
                                                            <p>Flexible widgets adapt to different screen sizes and orientations seamlessly.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="project-details-box heading1">
                                                            <h4><Link to="/project/project-details">Quick Iterations</Link></h4>
                                                            <div className="space16"></div>
                                                            <p>Hot reload allows fast development cycles and rapid feature testing.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>

                            <div className="space50"></div>

                            <div className="get-started-box">
                                <h3>Start Your Flutter Project Today</h3>
                                <div className="space16"></div>
                                <p>Ready to bring your mobile app idea to life? Contact us today to discuss your Flutter project and see how we can create a high-quality, cross-platform application tailored to your needs.</p>
                                <div className="space30"></div>
                                <a href="contact.html" className="get-started-btn">Call Now <span><i className="bi bi-arrow-right"></i></span></a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsLeft1;
