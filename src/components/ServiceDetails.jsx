import React, { useEffect } from 'react';
import './ServiceDetails.css';
import { IoDocumentText } from "react-icons/io5";
import { PiFireExtinguisherFill } from "react-icons/pi";
import { BiSolidPackage } from "react-icons/bi";
import { ImDroplet } from "react-icons/im";
import { HiPresentationChartLine } from 'react-icons/hi2';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.png';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';
import img6 from '../assets/6.jpg';
import icon from '../assets/icon.svg';
import { PiStarFourFill } from "react-icons/pi";



const ServiceDetails = ({ selectedServiceId }) => {
  useEffect(() => {
    if (selectedServiceId) {
      const element = document.getElementById(`service-${selectedServiceId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedServiceId]);

  const serviceBlocks = [
    {
      id: 1,
      icon: <HiPresentationChartLine />,
      title: "Ventilation",
      subtitle: "Ensuring Uninterrupted airflow",
      description: "We understand that ventilation is the heart of HVAC system. We are, hence committed to norms specified by ASHRAE and the clients. Some of the norms widely implemented in our ventilation services are IS655 (duct construction), IS 12394 (air handling units). We also implement NBC Part 8, Section 3 (Air Conditioning, Heating and Mechanical ventilation) to accommodate for fresh air requirements based on occupancy and NBC Part 8, Section 5 (Public Health Systems) to ensure right natural ventilation and exhaust for pollutants. Adhering to these norms allow us to provide world class ventilation.",
      image: img1,
      pills: ["Continuous airflow", "Safety Standards", "ASHRAE Compliant", "Energy Efficient", "World class Ventilation"]
    },
    {
      id: 2,
      icon: <img src={icon} alt="VRF Icon" style={{ width: '50%', height: '100%', objectFit: 'contain' }} />,
      title: "Variable Refrigerant Flow",
      subtitle: "Ensuring Optimal energy efficiency",
      description: "We ensure energy efficiency and multi-zone temperature control by using Variable Refrigerant Flow (VRF) machines at appropriate locations. Our installation services maintains the optimal balance between best design standards and the client specifications. We follow design standard to ensure our systems gives the best output in Indian standards,covering all metrics such as performance, capacity, Energy Efficiency Ratio (EER) and multi-zone efficiency. Along with this, we also source our VRF ensuring that it follows standards set for refrigerant piping and integration with fire systems",
      image: img2,
      pills: ["ISHRAE RAMA 10002: 2017", "NBC 2016 Part 8, Section 3 & 8", "IS 665", "IS 660", "ECBC 2017/2021"]
    },
    {
      id: 3,
      icon: <PiFireExtinguisherFill />,
      title: "Fire Fighting System",
      subtitle: "Preventing fire-incurred losses",
      description: "We realize the importance of a good fire-fighting system for protecting human life and other valuable assets. Hence, our fire fighting systems are meticulously designed and installed adhering to strict standards. We ensure proper smoke control and safe shutdown by mandating integration of hydrants, sprinklers and suppression systems with our HVAC installations. Apart from that, we take utmost care while selecting and maintaining portable extinguishers and HVAC-integrated systems for smoke/heat venting. Last, but not the least NFPA standards are adopted for high-risk areas.",
      image: img3,
      pills: ["NFPA 13/20", "IS 15105:2002", "IS  15325:2003", "NBC 2016, Part 4", "IS 2171: 1999 / IS 15683: 2018"]
    },
    {
      id: 4,
      icon: <BiSolidPackage />,
      title: "Ductable and Packaged ACs",
      subtitle: "Ensuring air reaches wherever needed",
      description: "For large scale and commercial projects, air flow is required in all the areas specified by the client which requires installation of ductable and packaged air-conditioning systems which ensures that with the right design, heatload calculations, equipment sizing, ductwork, and ventilation integration the air is circulated through all the required areas. We follow all the required standards to ensure that the right temperature, sequence, fresh air rates w.r.t occupancy, fire dampers in ducts and zone balancing is followed. We adhere to it strictly to ensuring minimum downtime and maximum satisfaction",
      image: img4,
      pills: ["IS 8148", "BEE star labelling", "IS 12394", "System balancing for energy efficiency", "Minimum ERR according to ECBC for units>10kW "]
    },
    {
      id: 5,
      icon: <ImDroplet />,
      title: "Chilled Water Plants",
      subtitle: "The motherboard of large scale cooling ",
      description: "In large scale commercial buildings, Chiller plant is the central part where the air is cooled and then supplied to Air Handling Units (AHUs) from where it is then supplied to ducts for optimal distribution. Standards specified by Energy Conservation Building Code (ECBC) and National Building Code (NBC) are followed to provide foundational design standards for chiller water plants. Here, Bureau of Energy Efficiency (BEE) star labeling takes a precedence. Adherence to chiller water plant specifications is ensured and a strict performance testing is conducted to ensure right air output.",
      image: img5,
      pills: ["NBC 2016 Part 8, Section 3", "ECBC 2017", "IS 3098", "NBC Integration", "ECBC/NBC for area >500m²"]
    },
    {
      id: 6,
      icon: <IoDocumentText />,
      title: "AMC Services",
      subtitle: "Commitment to Excellence, forever",
      description: "At Kelvin Engineers, we leverage our 35+ years of expertise to provide cutting-edge after-sales services to ensure long-lasting customer satisfaction. With a strict adherence to attending and resolving a complaint within 48 hours and not marking it resolved without the client sign-off, we strive to provide minimal downtime so that you can focus on doing what you do best. Our employees bring with them more than 35 years of combined experience in several domains to ensure right delivery of customer excellence. With us you are not just our client but a partner in progress.",
      image: img6,
      pills: ["Continuity of Care", "Compliance", "Breakdowns", "Preventive Maintenance", "Extendable contract options"]
    }
  ];

  return (
    <section className="service-details">
      <div className="container-custom">
        <div className="details-header">
          <h4 className="detail-tag">What we offer?</h4>
          <p className="detail-meta">We prevent downtime, reduce risk, and keep critical systems running smoothly.</p>
          <div className="main-quote-container">
            <h2 className="main-quote">
              “Installation is a critical part of the system, executed with a focus on quality, cost-efficiency, and safety”
            </h2>
            <div className="plus-icon-box">
              <PiStarFourFill />
            </div>
          </div>
        </div>

        <div className="blocks-container">
          <div className="vertical-timeline"></div>

          {serviceBlocks.map((block) => (
            <div key={block.id} id={`service-${block.id}`} className="detail-block">
              <div className="block-header">
                <div className="block-title-group">
                  <div className="block-icon">{block.icon}</div>
                  <div className="block-text">
                    <h3 className="block-title">{block.title}</h3>
                    <p className="block-subtitle">{block.subtitle}</p>
                  </div>
                </div>
              </div>

              <div className="block-content">
                <div className="block-image-side">
                  <img src={block.image} alt={block.title} className="block-img" />
                </div>
                <div className="block-info-side">
                  <h4 className="overview-label">Overview</h4>
                  <p className="overview-text">{block.description}</p>
                  <div className="pills-row">
                    {block.pills.map((pill, pIndex) => (
                      <span key={pIndex} className="feature-pill">{pill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
