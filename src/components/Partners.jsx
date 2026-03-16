import React from 'react';
import burgerKing from '../assets/burger-king-logo 2.png';
import croma from '../assets/Croma_idpW4Nsf-e_1 2.png';
import mcdonalds from '../assets/mcdonalds-7 2.png';
import abp from '../assets/image 5.png';
import tivoli from '../assets/g14.png';
import telegraph from '../assets/Telegraph_idPa7Dy2zA_1 1.png';
import westside from '../assets/Westside_Logo_wordmark 1.png';
import './Partners.css';

const Partners = () => {
  const partners = [
    { name: 'Burger King', logo: burgerKing, class: 'burger-king', text: 'Completed 250 stores\nin a partnership\nspanning more than a\ndecade' },
    { name: 'Croma', logo: croma, class: 'croma', text: 'Completed Croma\nstores in Delhi, Punjab,\nHaryana, MP and UP' },
    { name: 'McDonalds', logo: mcdonalds, class: 'mcdonalds', text: 'Completed 10+ stores\nin a single year' },
    { name: 'ABP News', logo: abp, class: 'abp', text: 'Completed the\nConnaught Place and\nNoida Offices' },
    { name: 'The Tivoli', logo: tivoli, class: 'tivoli', text: 'Completed the\nchallenging Delhi\nProject succesfully' },
    { name: 'The Telegraph', logo: telegraph, class: 'telegraph', text: 'Leading news source\nserving the region\nfor decades' },
    { name: 'Westside', logo: westside, class: 'westside', text: 'Premium retail stores\nacross major cities\nin India' }
  ];

  return (
    <section className="partners">
      <div className="container-custom">
        <div className="partners-container">
          {partners.map((partner, i) => (
            <div key={i} className={`partner-logo-item ${partner.class}`}>
              <div className="partner-logo-inner">
                <div className="logo-img-wrapper">
                  <img src={partner.logo} alt={partner.name} className="partner-img" />
                </div>
                <div className="hover-card-content">
                  <span className="partner-desc">
                    {partner.text.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
