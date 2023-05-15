import React,{ useEffect } from "react";
import "./Features.css";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import phoneFeatures from "../../assets/phone-features.png";
import Feature from "./Feature";
import { featureList } from "./data";


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles



const Features = () => {
  useEffect(()=>{
    AOS.init({
      duration:1000,
    });
},[])
  return (
    <section id="features">
      <div className="container features">
        <div className="u-title" >
          <BsFillBookmarkStarFill color="orangered" size={30} />
          <h2>Core Features</h2>
          <p className="u-text-small">
            SocialX app has Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sequi labore, harum officiis error quia cupiditate?
          </p>
        </div>
        <div className="features-content">
          <div className="features-left data-aos='zoom-in-left'" >
            <img src={phoneFeatures} alt="phone" />
          </div>
          <div className="features-right data-aos='zoom-in-right" >
            {featureList.map((feature) => (
              <Feature
                key={feature.id}
                icon={feature.icon}
                heading={feature.heading}
                text={feature.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;