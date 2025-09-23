import { Link } from "react-router-dom";

const BlogDetailsLeft1 = () => {
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

                        {/* Sidebar Recent Blogs */}
                        <div className="sidebar-box-area sidebar-bg mb-40">
                            <h3>Recent Blogs</h3>
                            <div className="sidebar-blog-boxs">
                                <div className="sidebar-blogs">
                                    <div className="image">
                                        <img src="/assets/img/blog/blog-details-sidebar1.png" alt="" />
                                    </div>
                                    <div className="heading">
                                        <a href="#" className="date"><img src="/assets/img/icons/date.png" alt="" /> 20/09/2025</a>
                                        <h5><Link to="/blog/blog-details">Flutter 3.13: What’s New for Developers</Link></h5>
                                    </div>
                                </div>

                                <div className="sidebar-blogs">
                                    <div className="image">
                                        <img src="/assets/img/blog/blog-details-sidebar2.png" alt="" />
                                    </div>
                                    <div className="heading">
                                        <a href="#" className="date"><img src="/assets/img/icons/date.png" alt="" /> 15/09/2025</a>
                                        <h5><Link to="/blog/blog-details">Top Flutter Packages to Boost App Development</Link></h5>
                                    </div>
                                </div>

                                <div className="sidebar-blogs">
                                    <div className="image">
                                        <img src="/assets/img/blog/blog-details-sidebar3.png" alt="" />
                                    </div>
                                    <div className="heading">
                                        <a href="#" className="date"><img src="/assets/img/icons/date.png" alt="" /> 10/09/2025</a>
                                        <h5><Link to="/blog/blog-details">State Management in Flutter: Provider vs Riverpod</Link></h5>
                                    </div>
                                </div>

                                <div className="sidebar-blogs">
                                    <div className="image">
                                        <img src="/assets/img/blog/blog-details-sidebar3.png" alt="" />
                                    </div>
                                    <div className="heading">
                                        <a href="#" className="date"><img src="/assets/img/icons/date.png" alt="" /> 05/09/2025</a>
                                        <h5><Link to="/blog/blog-details">Building Responsive UI in Flutter</Link></h5>
                                    </div>
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
                                <li><a href="#">UI/UX</a></li>
                                <li><a href="#">Firebase</a></li>
                                <li><a href="#">State Management</a></li>
                                <li><a href="#">API Integration</a></li>
                            </ul>
                        </div>

                        {/* Download Brochure */}
                        <div className="sidebar-box-area sidebar-bg mb-40">
                            <h3>Download Portfolio</h3>
                            <p>Check out my Flutter app projects and case studies in this portfolio.</p>
                            <div className="download-btns">
                                <a className="daownload1" href="#">PDF Download <img src="/assets/img/icons/download-img.png" alt="" /></a>
                                <a className="daownload2" href="#">DOC Download <img src="/assets/img/icons/download-img.png" alt="" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8 details-left-space">
                        <div className="service-details-post">
                            {/* Blog Post */}
                            <article>
                                <div className="details-post-area">
                                    <div className="image">
                                        <img src="/assets/img/others/project-details-img1.png" alt="" />
                                    </div>
                                    <div className="social-users">
                                        <ul>
                                            <li><a href="#"><img src="/assets/img/icons/user-icon1.png" alt="" /> Imam Uddin Helal</a></li>
                                            <li><a href="#"><img src="/assets/img/icons/user-icon2.png" alt="" /> Sep 22, 2025</a></li>
                                            <li><a href="#"><img src="/assets/img/icons/user-icon3.png" alt="" /> Flutter Development</a></li>
                                            <li><a href="#"><img src="/assets/img/icons/user-icon4.png" alt="" /> 05 Comments</a></li>
                                        </ul>
                                    </div>
                                    <div className="space30"></div>
                                    <div className="heading1">
                                        <h2>Best Practices for Building Scalable Flutter Apps</h2>
                                        <div className="space16"></div>
                                        <p>Flutter allows developers to build beautiful, high-performance cross-platform apps. In this blog, we explore best practices to write maintainable code, optimize app performance, and create responsive UI across devices.</p>
                                    </div>
                                </div>
                            </article>

                            <div className="space50"></div>
                            <article>
                                <div className="details-post-area">
                                    <div className="heading1">
                                        <h5>Optimizing Performance</h5>
                                        <div className="space16"></div>
                                        <p>Ensure smooth animations and fast load times by using Flutter's widget tree efficiently, minimizing rebuilds, and leveraging state management solutions like Riverpod or Provider.</p>
                                    </div>

                                    <div className="space40"></div>
                                    <div className="heading1">
                                        <h5>Responsive Design</h5>
                                        <div className="space16"></div>
                                        <p>Create flexible layouts that adapt to different screen sizes using MediaQuery, LayoutBuilder, and Flutter's responsive widgets for a consistent user experience.</p>
                                    </div>
                                </div>
                            </article>

                            <div className="space50"></div>

                            <article>
                                <div className="details-post-area">
                                    <div className="video-area-image">
                                        <div className="image">
                                            <img src="/assets/img/blog/blog-post-video-img.png" alt="" />
                                        </div>
                                    </div>

                                    <div className="space30"></div>
                                    <div className="heading1">
                                        <h5>Integrating Firebase & APIs</h5>
                                        <div className="space20"></div>
                                        <p>Leverage Firebase for backend services like authentication, database, and notifications. Integrate REST APIs seamlessly for dynamic content and real-time data updates.</p>
                                    </div>
                                </div>
                            </article>

                            <div className="blog-details-border"></div>

                            {/* Tags & Social */}
                            <div className="tags-links">
                                <div className="row align-items-center">
                                    <div className="col-lg-7">
                                        <div className="tags">
                                            <ul>
                                                <li className="text">Tags:</li>
                                                <li className="tag-text"><a href="#">Flutter</a></li>
                                                <li className="tag-text"><a href="#">Dart</a></li>
                                                <li className="tag-text"><a href="#">Mobile App</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="social">
                                            <ul>
                                                <li className="text">Social:</li>
                                                <li className="icon"><a href="#"><i className="bi bi-linkedin"></i></a></li>
                                                <li className="icon"><a href="#"><i className="bi bi-twitter"></i></a></li>
                                                <li className="icon"><a href="#"><i className="bi bi-youtube"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="blog-details-border"></div>

                            {/* Comments */}
                            <article>
                                <div className="details-post-area">
                                    <div className="heading1">
                                        <h5>Blog Comments (2)</h5>

                                        <div className="comment-box">
                                            <div className="box-top-area">
                                                <div className="heading-area">
                                                    <div className="image">
                                                        <img src="/assets/img/blog/comment-box-image1.png" alt="" />
                                                    </div>
                                                    <div className="heading">
                                                        <h5><a href="#">Mr. Ana Ritchie</a></h5>
                                                        <a href="#" className="date">20/09/2025</a>
                                                    </div>
                                                </div>
                                                <div className="reply-btn">
                                                    <a href="#"><span><i className="bi bi-reply-fill"></i></span> Reply</a>
                                                </div>
                                            </div>
                                            <div className="space20"></div>
                                            <p className="pera">Imam Uddin Helal's Flutter tutorials helped me implement state management efficiently and optimize my app for performance. Highly recommended!</p>
                                        </div>

                                        <div className="comment-box comment-box2">
                                            <div className="box-top-area">
                                                <div className="heading-area">
                                                    <div className="image">
                                                        <img src="/assets/img/blog/comment-box-image2.png" alt="" />
                                                    </div>
                                                    <div className="heading">
                                                        <h5><a href="#">Matthew Kuhnemann</a></h5>
                                                        <a href="#" className="date">20/09/2025</a>
                                                    </div>
                                                </div>
                                                <div className="reply-btn">
                                                    <a href="#"><span><i className="bi bi-reply-fill"></i></span> Reply</a>
                                                </div>
                                            </div>
                                            <div className="space20"></div>
                                            <p className="pera">The Flutter portfolio by Imam Uddin Helal demonstrates clean code practices and excellent UI/UX design. A great reference for developers!</p>
                                        </div>

                                    </div>
                                </div>
                            </article>

                            {/* Contact Form */}
                            <div className="space50"></div>
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
                                                <input type="number" placeholder="Phone"/>
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
                                            <button className="theme-btn1">Submit Now <span><i className="bi bi-arrow-right"></i></span></button>
                                        </div>

                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailsLeft1;
