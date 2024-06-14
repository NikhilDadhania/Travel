import React, {useEffect} from "react";
import "./main.css";

import {HiOutlineLocationMarker} from "react-icons/hi"
import {HiOutlineClipboardCheck} from "react-icons/hi"

import img from "../../Assets/img.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import img7 from "../../Assets/img7.jpg";
import img8 from "../../Assets/img8.jpg";
import img9 from "../../Assets/img9.jpg";

import Aos, { init } from "aos";
import "aos/dist/aos.css"

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "RS 70,000",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventurous activities. ",
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "CULTURAL RELAX",
    fees: "RS 60,000",
    description:
      'Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a 2,430-meter (7,970 ft) mountain ridge. Often referred to as the "Lost City of the Incas", it is the most familiar icon of the Inca Empire. ',
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: "Great Barrier Reef",
    location: "Australia",
    grade: "CULTURAL RELAX",
    fees: "RS 80,000",
    description:
      "The Great Barrier Reef is a site of remarkable variety and beauty on the north-east coast of Australia. It contains the worlds largest collection of coral reefs, with 400 types of coral, 1,500 species of fish and 4,000 types of mollusc. ",
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: "Cappadocia",
    location: "Turkey",
    grade: "CULTURAL RELAX",
    fees: "RS 60,000",
    description:
      "Cappadocia is a unique historical region in landlocked Central Anatolia. It is most distinguished for the extraordinary spectacular rock formations and eroded volcanic rock tuff landscape that was formed millions of years ago, the collective work of lava spluttering volcanoes eroded over time by wind and water. ",
  },

  {
    id: 5,
    imgSrc: img5,
    destTitle: "Guanajuato",
    location: "Mexico",
    grade: "CULTURAL RELAX",
    fees: "RS 11,000",
    description:
      "Guanajuato, city, capital of Guanajuato estado (state), central Mexico. Situated on the Mesa Central, it is spread over steep hillsides at the junction of three ravines at an average elevation of about 6,725 feet (2,050 metres) above sea level. Guanajuato was founded in 1554 and given city status in 1741. ",
  },

  {
    id: 6,
    imgSrc: img6,
    destTitle: "Cinque Terre",
    location: "Italy",
    grade: "CULTURAL RELAX",
    fees: "RS 84,000",
    description:
      "Guanajuato, city, capital of Guanajuato estado (state), central Mexico. Situated on the Mesa Central, it is spread over steep hillsides at the junction of three ravines at an average elevation of about 6,725 feet (2,050 metres) above sea level. Guanajuato was founded in 1554 and given city status in 1741. ",
  },

  {
    id: 7,
    imgSrc: img7,
    destTitle: "Angkot wat",
    location: "Cambodia",
    grade: "CULTURAL RELAX",
    fees: "RS 79,000",
    description:
      "Angkor Wat is an enormous Buddhist temple complex located in northern Cambodia. It was originally built in the first half of the 12th century as a Hindu temple. Spread across more than 400 acres, Angkor Wat is said to be the largest religious monument in the world. ",
  },

  {
    id: 8,
    imgSrc: img8,
    destTitle: "Taj Mahal",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "RS 90,000",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal. ",
  },

  {
    id: 9,
    imgSrc: img9,
    destTitle: "Bali Island",
    location: "Indonesia",
    grade: "CULTURAL RELAX",
    fees: "RS 50,000",
    description:
      "Bali Indonesia. Also known as the Land of the Gods, Bali appeals through its sheer natural beauty of looming volcanoes and lush terraced rice fields that exude peace and serenity. It is also famous for surfers' paradise! ",
  },
];

const Main = () => {
   //create a react hook to add a scroll animation...//
   useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])


  return (
    <section className="main container section" id="package">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon"/>
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon"/>
                  </button>
                </div>
                
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
