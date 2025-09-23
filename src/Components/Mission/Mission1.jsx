import { Link } from "react-router-dom";

const Mission1 = () => {
    return (
        <div className="solution sp bg1">
          <div className="container">
            <div className="row align-items-center">
              
              {/* Text Content */}
              <div className="col-lg-6">
                <div className="heading1">
                  <span className="span">
                    <img src="/assets/img/icons/span1.png" alt="" /> My Mission
                  </span>
                  <h2>Building High-Quality Mobile Apps That Matter</h2>
                  <div className="space16"></div>
                  <p>
                    My mission is to help businesses and startups bring their app ideas to life using Flutter. 
                    I focus on creating scalable, performant, and visually engaging mobile applications that deliver real value.
                  </p>
                  <div className="space16"></div>
                  <p>
                    I believe in combining clean code, modern design principles, and robust backend integration to ensure every app is reliable, user-friendly, and future-ready. 
                    With each project, my goal is to empower clients through technology.
                  </p>

                  <div className="space30"></div>
                  <div className="">
                    <Link className="theme-btn1" to="/contact">
                      Hire Me <span><i className="bi bi-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Images */}
              <div className="col-lg-6">
                <div className="solution-images">
                  <div className="image1">
                    <img src="/assets/img/others/solution-img1.png" alt="" />
                  </div>
                  <div className="image2">
                    <img src="/assets/img/others/solution-img2.png" alt="" />
                  </div>
                  <div className="image3">
                    <img src="/assets/img/others/solution-img3.png" alt="" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
    );
};

export default Mission1;
