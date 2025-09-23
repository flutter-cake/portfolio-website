import { Link } from "react-router-dom";

const Vission1 = () => {
    return (
        <div className="solution about-solution sp">
        <div className="container">
          <div className="row align-items-center">

            {/* Images */}
            <div className="col-lg-6">
              <div className="images">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="image">
                      <img src="/assets/img/about/visiton-img1.png" alt="" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="space30"></div>
                    <div className="image">
                      <img src="/assets/img/about/visiton-img2.png" alt="" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="space30"></div>
                    <div className="image">
                      <img src="/assets/img/about/visiton-img3.png" alt="" />
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="col-lg-6">
              <div className="heading1">
                <span className="span">
                  <img src="/assets/img/icons/span1.png" alt="" /> My Vision
                </span>
                <h2>Creating Innovative Mobile Apps with Flutter</h2>
                <div className="space16"></div>
                <p>
                  My vision is to craft high-quality, cross-platform mobile applications that empower businesses 
                  and startups to achieve their goals. I aim to deliver apps that are scalable, performant, 
                  and user-friendly while following the latest Flutter best practices.
                </p>

                {/* Feature Boxes */}
                <div className="item-box">
                  <div className="icon">
                    <div className="">
                      <img src="/assets/img/icons/about-solution-iocn1.png" alt="" />
                    </div>
                  </div>
                  <div className="">
                    <h3><a href="#">Custom Flutter App Development</a></h3>
                    <div className="space10"></div>
                    <p>
                      Build intuitive and visually appealing mobile apps that run seamlessly 
                      on both Android and iOS platforms.
                    </p>
                  </div>
                </div>

                <div className="item-box">
                  <div className="icon">
                    <div className="">
                      <img src="/assets/img/icons/about-solution-iocn2.png" alt="" />
                    </div>
                  </div>
                  <div className="">
                    <h3><a href="#">App Maintenance & Support</a></h3>
                    <div className="space10"></div>
                    <p>
                      Ensure your Flutter apps stay up-to-date, bug-free, and optimized for performance 
                      with continuous support and maintenance.
                    </p>
                  </div>
                </div>

                <div className="space30"></div>
                <div className="">
                  <Link className="theme-btn1" to="/contact">
                    Hire Me <span><i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
};

export default Vission1;
