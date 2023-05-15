import React,{ useEffect } from "react";
import "./Header.css";
import Button from "../UI/button/Button";
import phoneHeader from "../../assets/phone-header-bg.png";
import Navbar from "../navbar/Navbar.css";
import {BsMouse} from 'react-icons/bs'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const Header = () => {
  useEffect(()=>{
      AOS.init({
        duration:1000,
      });
  },[])

  const handleClickScroll = () => {
    const element = document.getElementById('features');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (

    <section id='header'>
      <div className='container header'>
        <div className='header-left ' data-aos='fade-right'>
          <h1>
            <span>THE WORLD'S LEADING</span>
            <span>CROSS-PLATFORM SECURE</span>
            <span>MESSAGING SYSTEM</span>
          </h1>
          <p className="u-text-small u-text-light">
          SocialX is a Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Obcaecati ea aliquam sit nemo nisi! Nesciunt quis illum id qui
            et !
        </p> 
        <div className="header-cta">
            <Button text={"Get Started"} btnClass={"btn-orange"} href={"#"} />
            <Button text={"How It Works"} btnClass={"btn-orange"} href={"#"} />
        </div>
      </div>
        
        
        <div className='header-right' data-aos='fade-left'>
          <img src={phoneHeader} alt="phone"/>

          
        </div>
      </div>
      <div className="floating-icon onClick={handleClickScroll}">
        <a href="#footer"/>
        <BsMouse color="white" size={25} className="mouse"/>
      </div>
      
    </section>
  )
}

export default Header
