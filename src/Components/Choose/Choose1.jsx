import { Link } from 'react-router-dom';
import data from '../../Data/Home1/choose1.json';

const Choose1 = () => {

    const mainContent = {
        subTitle: 'Professional Flutter Developer',
        title: 'Hi, I’m Imam Uddin Helal — Let’s Build Your Next Mobile App',
        Content: 'I craft high-quality, cross-platform mobile applications using Flutter. With expertise in UI/UX, API integration, Firebase, and performance optimization, I help businesses and individuals turn ideas into powerful apps that work seamlessly on both Android and iOS.',
        btnName: 'Hire Me',
        btnUrl: 'https://www.fiverr.com/flutter_cake',
        img1:'/assets/img/work/work-img1.png',
        img2:'/assets/img/work/work-img3.png',
        img3:'/assets/img/work/work-img2.png',
      }

    return (
        <div className="work sp">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="heading1">
                  <span className="span" data-aos="zoom-in-left" data-aos-duration="700"><img src="/assets/img/icons/span1.png" alt="" />{mainContent.subTitle}</span>
                  <h2 className="title tg-element-title">{mainContent.title}</h2>
                  <div className="space16"></div>
                  <p data-aos="fade-right" data-aos-duration="700">{mainContent.Content}</p>

                  {data.map((item, i) => (
                  <div key={i} className="single-items" data-aos="fade-right" data-aos-duration="700">
                    <div className="">
                      <div className="icon">
                        <img src={item.img} alt="" />
                      </div>
                    </div>
                    <div className="">
                      <h4><Link to="/service/service-details">{item.title}</Link></h4>
                      <div className="space10"></div>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
                </div>
                <div className="space30"></div>
                <div className="" data-aos="fade-right" data-aos-duration="800">
                  <Link className="theme-btn1" to={mainContent.btnUrl}>{mainContent.btnName} <span><i className="bi bi-arrow-right"></i></span></Link>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="work-images">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="image image-anime">
                        <img src={mainContent.img1} alt="" />
                      </div>
                      <div className="image image-anime">
                        <img src={mainContent.img2} alt="" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="image image-anime">
                        <img src={mainContent.img3} alt="" />
                      </div>
                    </div>
                  </div>
                  <img src="/assets/img/bg/work-bg.png" alt="" className="bg-image shape-animaiton4" />
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Choose1;