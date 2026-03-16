import React, { useEffect } from 'react';
import './ServiceDetails.css';
import { LuPlus, LuWind, LuThermometer, LuFlame, LuBox, LuWaves, LuSettings } from 'react-icons/lu';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.png';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';
import img6 from '../assets/6.jpg';

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
      icon: <LuWind />,
      title: "Ventilation",
      subtitle: "Ensuring Advanced airflow",
      description: "Atm Professional that ventilation is the heart of HVAC system. We are, hence committed to norms specified by ASHRAE and ISHRAE. Some of the norms already implemented in our ventilation services are: ASHRAE (Standard 62.1-2019) for handling ventilation. We also implemented NBC Part 8, Section 3 (Air Conditioning, Heating and Mechanical Ventilation) accommodate the fresh air requirements based on occupancy and NBC Part 8, Section 3 (Public Health Systems) to ensure right natural ventilation and evaluate the pollutants. Adhering to these norms allow us to provide world-class ventilation systems.",
      image: img1,
      pills: ["Continuous airflow", "Safety Standards", "ASHRAE Compliant", "Energy Efficient", "World class Ventilation"]
    },
    {
      id: 2,
      icon: <LuThermometer />,
      title: "Variable Refrigerant Flow",
      subtitle: "Ensuring Optimal energy efficiency",
      description: "We ensure energy efficiency and multi-zone temperature control by using Variable Refrigerant Flow (VRF) machines at appropriate locations. Our installation services maintains the soft link balance between best design standards and the client specifications. We follow design standard to ensure our systems gives the best output in Indian standards covering all metrics such as performance, capacity, Energy Efficiency Ratio (EER) and multi-zone efficiency. Along with this, we also maintain VRF ensuring that it follows standards for the refrigerant piping and integration with the systems.",
      image: img2,
      pills: ["AMCA, AHRI, ISOCAL, ISO", "NBC 2018 Part 11 Section 3.1.2", "G-BMS", "PL-PLC", "ISOCAL 2012/2019"]
    },
    {
      id: 3,
      icon: <LuFlame />,
      title: "Fire Fighting System",
      subtitle: "Protecting life beyond norms",
      description: "We realize the importance of a good fire-fighting system for protecting human life and other valuable assets. Hence, firefighting systems are meticulously designed and installed adhering to string standards. We ensure proper smoke control and safe shutdown by mandating integration of hydrants, sprinklers and suppression systems with our HVAC installations. Apart from that, we take utmost care while selecting and maintaining portable extinguishers and HVAC-integrated systems for smoke/heat venting. Last, but not the least NFPA standards are adopted for high-risk areas.",
      image: img3,
      pills: ["NFPA 13/25", "IS:11524:2002", "IS:13031.1002", "NBC 2018, Part 4", "IS:2171, 1060 / IS:14609: 2019"]
    },
    {
      id: 4,
      icon: <LuBox />,
      title: "Ductable and Packaged ACs",
      subtitle: "Ensuring Comfort wherever needed",
      description: "For large scale and commercial projects, efficient airflow is required in all areas specified by the client which mandates installation of ductable and packaged air-conditioning systems which ensures that with the right design, heat load calculations, equipment sizing, enclosure and ventilation integration the air is circulated through all the required areas. We follow all the required standards to ensure that the right temperature, humidity, fresh air rates with occupying the dampers in ducts and zone balancing is followed. We adhere to it strictly to ensuring minimum downtime and maximum satisfaction.",
      image: img4,
      pills: ["IS 3148", "BEE star labelling", "IS 1354", "System balancing for energy efficiency", "Maximum EER according to ECBC for units > 11 kW"]
    },
    {
      id: 5,
      icon: <LuWaves />,
      title: "Chilled Water Plant",
      subtitle: "The Benchmark of Large Scale Cooling",
      description: "In large scale commercial buildings, chiller plant is the central part where the air is cooled and then supplied to Air Handling Units (AHUs) from where it is then supplied to ducts for optimal distribution. Standards specified by Energy Conservation Building Code (ECBC) and National Building Code (NBC) are followed to provide foundational design standards for chiller water plants. Here, Bureau of Energy Efficiency (BEE) star labeling takes a precedence. Adherence to chiller water plant specifications is ensured and a strict performance testing is conducted to ensure right air output.",
      image: img5,
      pills: ["NBC 2016 Part 8, Section 3", "ECBC 2012", "IS 1018", "BEE integration", "ECBC/NBC for area >2500m²"]
    },
    {
      id: 6,
      icon: <LuSettings />,
      title: "AMC Services",
      subtitle: "Commitment Excellence, forever",
      description: "At Kelvin Engineers, we leverage our 35+ years of expertise to provide cutting-edge after-sales services to ensure long-lasting customer satisfaction. With a strict adherence to attending and resolving a complaint within 48 hours and not marking it resolved without the client sign-off, we strive to provide minimal downtime so that you can focus on doing what you do best. Our employees bring with them more than 35 years of combined experience in several domains to ensure right delivery of customer excellence. With us you are not just our client but a partner in progress.",
      image: img6,
      pills: ["Continuity of Care", "Compliance", "Better returns", "Preventive Maintenance", "Customizable contract options"]
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
              “35+ years of proven expertise providing best-in-class HVAC services with minimal downtime”
            </h2>
            <div className="plus-icon-box">
              <LuPlus />
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
