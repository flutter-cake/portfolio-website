import About6 from "../Components/About/About6";
import BreadCumb from "../Components/Common/BreadCumb";
import Cta1 from "../Components/Cta/Cta1";
import MarqueeText from "../Components/MarqueeText/MarqueeText";
import Mission1 from "../Components/Mission/Mission1";
import Vission1 from "../Components/Mission/Vission1";
import Team2 from "../Components/Team/Team2";
import Testimonial1 from "../Components/Testimonial/Testimonial1";

const AboutLight = () => {
    return (
        <div>
            <BreadCumb Title="About Me"></BreadCumb>
            <MarqueeText></MarqueeText>

            <About6
                image1="/assets/img/about/about2-img1.png"
                image2="/assets/img/about/about2-img2.png"
                image3="/assets/img/about/about2-img3.png"
                experienceNum="5"
                experienceTitle="Years Of <br/> Experience"
                subTitle="Professional Flutter Developer"
                title="Hi, I’m Imam Uddin Helal — Building High-Quality Mobile Apps"
                content="I specialize in creating cross-platform mobile applications with Flutter. From UI/UX design to API integration and performance optimization, I help startups and businesses turn their app ideas into reality."
                counName1="Mobile Apps Delivered"
                CounNum1="50+"
                counName2="Satisfied Clients"
                CounNum2="30+"
            ></About6>

            <Mission1></Mission1>
            <Vission1></Vission1>
            <Testimonial1></Testimonial1>
            <Team2></Team2>
            <Cta1></Cta1>
        </div>
    );
};

export default AboutLight;
