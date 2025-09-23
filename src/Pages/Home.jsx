import About1 from "../Components/About/About1";
import Award1 from "../Components/Award/Award1";
// import Blog1 from "../Components/Blog/Blog1";
import Choose1 from "../Components/Choose/Choose1";
import Cta1 from "../Components/Cta/Cta1";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
import Pricing1 from "../Components/Pricing/Pricing1";
import Project1 from "../Components/Project/Project1";
import Services1 from "../Components/Services/Services1";
import Testimonial1 from "../Components/Testimonial/Testimonial1";



const Home = () => {
    return (
        <div className="home-page1">
            <HeroBanner1
                bgImg="/assets/img/bg/hero1-bg.png"
                subTitle="Imam Uddin Helal"
                title="Transform Your Business With Excellent <span class='after'>IOS & Android Apps</span>"
                content="I’m a results-driven Flutter Developer with strong experience in creating scalable, 
                user-focused mobile apps. I’ve delivered cross-platform solutions that blend sleek design, smooth performance, and solid functionality. My focus is on clean architecture, maintainable code, and pixel-perfect UI/UX that meet client goals. Always learning and adapting, I build future-ready apps that make a lasting impact."
                btnName="Get Started Now"
                btnUrl="/contact"
                image1="/assets/img/hero/imamUddinPic.jpg"
                image2="/assets/img/hero/imamUddinPic.jpg"
                shapeImage1="/assets/img/hero/hero-experience.png"
                shapeiamge2="/assets/img/hero/professional-flutter-developer-image.png"
            ></HeroBanner1>
            <Award1></Award1>
            <About1
                image1="/assets/img/about/about1-img1.png"
                image2="/assets/img/about/about1-img2.png"
                supIcon="/assets/img/icons/flutter_icon.webp"
                supTitle="24/7 Support"
                supCon="Imam Uddin Helal"
                subTitle="About Me"
                Title="Discover my Capacity to Empower Business Through Innovation"
                content="I’m a passionate Flutter Developer with experience in building high-quality, scalable, and user-friendly mobile applications for both Android and iOS. I specialize in clean architecture, smooth performance, and pixel-perfect UI/UX design that aligns with client goals. From integrating APIs, Firebase, and state management to creating feature-rich apps, I focus on delivering solutions that are reliable, efficient, and visually appealing. My mission is simple—transforming ideas into powerful apps that provide real value to users while helping businesses grow."
                featurelist={[
                    "🚀 Cross-platform apps with Flutter & Dart",
                    "🎨 Modern, user-friendly, and responsive design",
                    "🔗 API integration, Firebase, and state management",
                ]}
                btnName="Discover More"
                btnUrl="/about"
            ></About1>
            <Services1></Services1>
            <Choose1></Choose1>
            <Project1></Project1>
            <Pricing1></Pricing1>
            <Testimonial1></Testimonial1>
            {/* <Blog1></Blog1> */}
            <Cta1></Cta1>
        </div>
    );
};

export default Home;