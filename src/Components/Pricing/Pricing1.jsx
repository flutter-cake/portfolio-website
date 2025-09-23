import SectionTitle from "../Common/SectionTitle";
import PricingCard1 from "./PricingCard1";

const Pricing1 = () => {
    return (
        <div className="pricing sp">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 m-auto text-center">
                <div className="heading1">
                    <SectionTitle
                        SubTitle="My Pricing Plans"
                        Title="Hire Imam Uddin Helal — Professional Flutter Developer"
                    ></SectionTitle>
                </div>
              </div>
            </div>

            <div className="space30"></div>
            <div className="row">

            <PricingCard1
                addClass="single-pricing-box"
                popularTitle=""
                title="Starter Plan"
                price="$299"
                monthly="per project"
                content="Perfect for small apps or MVPs to validate your idea quickly with Flutter."
                featuretitle="Features Included:"
                featurelist={[ 
                    '1 Cross-Platform Mobile App',
                    'Basic UI/UX Implementation',
                    'Firebase/REST API Integration',
                ]} 
                btnname="Get Started"
                btnUrl="/contact"
            ></PricingCard1>

            <PricingCard1
                addClass="single-pricing-box active"
                popularTitle="Most Popular"
                title="Professional Plan"
                price="$699"
                monthly="per project"
                content="Best suited for startups and businesses that need polished apps with advanced features."
                featuretitle="Features Included:"
                featurelist={[ 
                    'Cross-Platform Mobile App',
                    'Custom UI/UX Design',
                    'Advanced API & Database Integration',
                    'Push Notifications & Authentication',
                ]} 
                btnname="Get Started"
                btnUrl="/contact"
            ></PricingCard1>            

            <PricingCard1
                addClass="single-pricing-box"
                popularTitle=""
                title="Enterprise Plan"
                price="$1299"
                monthly="per project"
                content="For businesses and enterprises that require complex, scalable Flutter apps."
                featuretitle="Features Included:"
                featurelist={[ 
                    'Custom Cross-Platform App',
                    'High-End UI/UX with Animations',
                    'Complex API & Cloud Integration',
                    'Performance Optimization',
                    'Post-Launch Support & Maintenance',
                ]} 
                btnname="Get Started"
                btnUrl="/contact"
            ></PricingCard1> 

            </div>
          </div>
        </div>
    );
};

export default Pricing1;
