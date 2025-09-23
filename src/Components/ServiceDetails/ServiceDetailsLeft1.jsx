import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import data from '../../Data/home3/faq1.json';

const ServiceDetailsLeft1 = () => {
  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);

  const handleItemClick = index => {
    setOpenItemIndex(index === openItemIndex ? -1 : index);
  };

  useEffect(() => {
    if (firstItemOpen) {
      setOpenItemIndex(0);
      setFirstItemOpen(false);
    }
  }, [firstItemOpen]);

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

            {/* Services */}
            <div className="sidebar-box-area sidebar-bg mb-40">
              <h3>Our Services</h3>
              <ul className="features-list">
                <li><Link to="/service/service-details">Flutter App Development <span><i className="bi bi-chevron-right"></i></span></Link></li>
                <li><Link to="/service/service-details">Cross-Platform Solutions <span><i className="bi bi-chevron-right"></i></span></Link></li>
                <li><Link to="/service/service-details">UI/UX Design <span><i className="bi bi-chevron-right"></i></span></Link></li>
                <li><Link to="/service/service-details">State Management & Architecture <span><i className="bi bi-chevron-right"></i></span></Link></li>
                <li><Link to="/service/service-details">Backend Integration <span><i className="bi bi-chevron-right"></i></span></Link></li>
                <li><Link to="/service/service-details">App Maintenance & Support <span><i className="bi bi-chevron-right"></i></span></Link></li>
              </ul>
            </div>

            {/* Tags */}
            <div className="sidebar-box-area sidebar-bg mb-40">
              <h3>Tags</h3>
              <ul className="tags">
                <li><a href="#">Flutter</a></li>
                <li><a href="#">Dart</a></li>
                <li><a href="#">Cross-Platform</a></li>
                <li><a href="#">UI/UX Design</a></li>
                <li><a href="#">Firebase</a></li>
                <li><a href="#">State Management</a></li>
                <li><a href="#">API Integration</a></li>
                <li><a href="#">Mobile Development</a></li>
              </ul>
            </div>

            {/* Brochure */}
            <div className="sidebar-box-area sidebar-bg mb-40">
              <h3>Download Brochure</h3>
              <p>Learn more about our Flutter development services and how we can bring your mobile app ideas to life.</p>
              <div className="download-btns">
                <a className="daownload1" href="#">PDF Download <img src="/assets/img/icons/download-img.png" alt="" /></a>
                <a className="daownload2" href="#">DOC Download <img src="/assets/img/icons/download-img.png" alt="" /></a>
              </div>
            </div>

            {/* Free Quote Form */}
            <div className="sidebar-box-area sidebar-bg mb-40">
              <h3>Get A Free Quote</h3>
              <div className="contact-form">
                <form action="#">
                  <div className="single-input"><input type="text" placeholder="Your Name" /></div>
                  <div className="single-input"><input type="email" placeholder="Email Address" /></div>
                  <div className="single-input"><input type="number" placeholder="Phone Number" /></div>
                  <div className="single-input"><textarea placeholder="Your Message" cols="30" rows="3"></textarea></div>
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
                    <img src="/assets/img/service/service-details-img.png" alt="" />
                  </div>
                  <div className="space30"></div>
                  <div className="heading1">
                    <h2>Flutter App Development</h2>
                    <div className="space16"></div>
                    <p>We specialize in building high-performance, visually appealing Flutter apps that run smoothly on both iOS and Android. Our focus is on creating scalable, maintainable, and responsive applications that enhance user engagement.</p>
                  </div>
                </div>
              </article>

              <div className="space50"></div>

              <article>
                <div className="details-post-area">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="space30"></div>
                      <div className="heading1">
                        <h5>Custom Flutter Solutions</h5>
                        <div className="space20"></div>
                        <p>From concept to deployment, we provide tailor-made Flutter solutions for startups, enterprises, and individuals, ensuring a seamless mobile experience.</p>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="space30"></div>
                      <div className="heading1">
                        <h5>Integration Services</h5>
                        <div className="space20"></div>
                        <p>We integrate Flutter apps with Firebase, REST APIs, GraphQL, and third-party services for real-time, efficient, and feature-rich applications.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <div className="space50"></div>

              <article>
                <div className="details-post-area">
                  <div className="heading1">
                    <h5>Our Tech Stack</h5>
                    <div className="space16"></div>
                    <ul className="expart-list">
                      <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Frontend:</span> Flutter, Dart</li>
                      <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Backend:</span> Node.js, Firebase, Django, PHP</li>
                      <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Database:</span> Firebase Firestore, MySQL, PostgreSQL</li>
                      <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">State Management:</span>Getx, Provider, Riverpod, Bloc</li>
                      <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Cloud & Hosting:</span> Firebase, AWS, Google Cloud</li>
                    </ul>
                  </div>
                </div>
              </article>

              <div className="space50"></div>

              {/* FAQ */}
              <div className="faq-area-all">
                <div className="heading1"><h5>Frequently Asked Questions</h5></div>
                <div className="space20"></div>

                <div className="accordion accordion1 accordion-flush" id="accordionFlushExample">
                  {data.slice(0, 4).map((item, index) => (
                    <div key={index} className={`accordion-item ${index === openItemIndex ? "active" : ""}`}>
                      <h2 onClick={() => handleItemClick(index)} className="accordion-header" id={`flush-heading-${index}`}>
                        <button className="accordion-button collapsed" type="button">
                          {item.title}
                        </button>
                      </h2>
                      <div ref={accordionContentRef} className="accordion-collapse collapse accordion-content">
                        <div className="accordion-body">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsLeft1;
