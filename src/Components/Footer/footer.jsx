import React, {useEffect} from "react";
import "./footer.css";
import video2 from "../../Assets/video2.mp4";
import {FiSend} from "react-icons/fi";
import {MdTravelExplore} from "react-icons/md"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiOutlineYoutube} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import {FaTripadvisor} from "react-icons/fa"
import {FiChevronRight} from "react-icons/fi"

import Aos, { init } from "aos";
import "aos/dist/aos.css"

const Footer = () => {
 //create a react hook to add a scroll animation...//
 useEffect(()=>{
  Aos.init({duration: 2000})
}, [])



  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} muted autoPlay loop type="video/mp4"></video>
      </div>

    <div className="secContent container" id="footer">
      <div className="contactDiv flex">
        <div data-aos="fade-up" className="text">
          <small>KEEP IN TOUCH</small>
          <h2>Travel with us</h2>
        </div>

        <div className="inputDiv flex">
          <input data-aos="fade-up" type="text" placeholder="Enter Email Address" />
          <button data-aos="fade-up" className="btn flex" type="submit">
            SEND <FiSend className="icon"/>
          </button>
        </div>
      </div>

      <div className="footerCard flex">
        <div className="footerIntro flex">
          <div className="logoDiv">
            <a href="#" className="logo flex">
              <MdTravelExplore className="icon"/> Travel.
            </a>
          </div>

          <div data-aos="fade-up" className="footerParagraph">
          Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip.
          </div>

          <div data-aos="fade-up" className="footerSocials flex">
            <AiOutlineTwitter className="icon"/>
            <AiOutlineYoutube className="icon"/>
            <AiOutlineInstagram className="icon"/>
            <FaTripadvisor className="icon"/>
          </div>
        </div>
        
        <div className="footerLinks grid">
          {/*Group One*/}
          <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
            <span className="groupTitle">
              OUR AGENCY
            </span>
       
            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Services
            </li>

            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Insurance
            </li>

            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Agency
            </li>

            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Tourism
            </li>

            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Payment
            </li>

          </div>

          {/*Group Two*/}
          <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
            <span className="groupTitle">
              PARTNERS
            </span>
       
            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Booking
            </li>

            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Rentcars
            </li>

            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              HostelWorld
            </li>

            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Trivago
            </li>

            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              TripAdvisor
            </li>

          </div>

          {/*Group Three*/}
          <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
            <span className="groupTitle">
              LAST MINUTE
            </span>
       
            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              London
            </li>

            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              California
            </li>

            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Indonesia
            </li>

            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Europe
            </li>

            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Oceania
            </li>

          </div>
          
        </div>

        <div className="footerDiv flex">
          <small>BEST TRAVEL WEBSITE</small>
          <small>COPYRIGHTS RESERVED-NIKHIL 2023 </small>
        </div>
      </div>
    </div>

    </section>
  );
};

export default Footer;
