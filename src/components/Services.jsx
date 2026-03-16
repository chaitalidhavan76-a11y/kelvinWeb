import React from 'react';
import './Services.css';
import { HiPresentationChartLine, HiOutlineSquare3Stack3D } from 'react-icons/hi2';
import { IoDocumentText } from "react-icons/io5";
import { PiFireExtinguisherFill } from "react-icons/pi";
import { BiSolidPackage } from "react-icons/bi";
import { ImDroplet } from "react-icons/im";
import icon from '../assets/icon.svg';

const Services = ({ openServiceDetails }) => {
  const services = [
    {
      id: 1,
      icon: <HiPresentationChartLine />,
      title: "Ventilation",
      desc: "We maintain best-in-class ventilation through fans certified against global standards and as per standard design",
      button: false
    },
    {
      id: 2,
      icon: <img src={icon} alt="VRF Icon" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />,
      title: "Variable Refrigerant Flow",
      desc: "We use VRF systems in accordance with standard design to optimize power consumption",
      button: false
    },
    {
      id: 3,
      icon: <PiFireExtinguisherFill />,
      title: "Fire Fighting System",
      desc: "Prevent unwanted fires in building and vehicles through fire fighting systems designed as per standard norms",
      button: false
    },
    {
      id: 4,
      icon: <BiSolidPackage />,
      title: "Ductable and Packaged ACs",
      desc: "We ensure conditioned air is circulated as per the client specifications and design standards",
      button: false
    },
    {
      id: 5,
      icon: <ImDroplet />,
      title: "Chilled Water Plants",
      desc: "We employ chiller plants for effective cooling in HVAC projects, in accordance with established design standards",
      button: false
    },
    {
      id: 6,
      icon: <IoDocumentText />,
      title: "AMC Services",
      desc: "We provide strong after-sales service, combining the experience of 35+ years to ensure uninterrupted operations",
      button: false
    }
  ];

  return (
    <section className="services">
      <div className="container-custom">
        <div className="services-header">
          <h2 className="section-title serif-font">What we offer?</h2>
          <p className="section-subtitle">
            We minimize HVAC downtime, operational risk, and
            ensure uninterrupted climate control
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="card-top">
                <div className="service-icon-box">
                  <div className="service-icon">{service.icon}</div>
                </div>
                <h3 className="service-title">{service.title}</h3>
              </div>
              <p className="service-desc">{service.desc}</p>
              <div className="card-divider"></div>
              <div className="card-footer">
                <button className="btn-learn-more" onClick={() => openServiceDetails(service.id)}>
                  Learn More <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
