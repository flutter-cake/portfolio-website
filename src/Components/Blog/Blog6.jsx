import { Link } from "react-router-dom";
import data from '../../Data/Home1/flutter-blogs.json';


const Blog6 = () => {
    return (
        <div className="blog blog-page sp">
          <div className="container">
            <div className="row">
              {data.map((item, i) => (
                <div key={i} className="col-lg-6">
                  <div className="blog2-box">
                    <div className="image">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="heading1">
                      <div className="tags">
                        <a href="#" className="date"><img src="/assets/img/icons/date.png" alt="" /> {item.date}</a>
                        <a href="#" className="date outhor"><img src="/assets/img/icons/user.png" alt="" /> {item.author}</a>
                      </div>
                      <h4><Link to={item.link}>{item.title}</Link></h4>
                      <div className="space16"></div>
                      <p>{item.desc}</p>
                      <div className="space16"></div>
                      <Link to={item.link} className="learn">Read More <span><i className="bi bi-arrow-right"></i></span></Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    );
};

export default Blog6;