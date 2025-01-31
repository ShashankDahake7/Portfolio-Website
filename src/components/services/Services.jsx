import React, { useState } from 'react';
import './services.css';

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(prevState => (prevState === index ? 0 : index));
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>
      <div className="services__container container grid">
        {["Product Designer", "UI/UX Designer", "Visual Designer"].map((title, index) => (
          <div className="services__content" key={index}>
            <div>
              <i className={`uil ${index === 0 ? "uil-web-grid" : index === 1 ? "uil-arrow" : "uil-edit"} services__icon`}></i>
              <h3 className="services__title">{title.split(' ')[0]} <br /> {title.split(' ')[1]}</h3>
            </div>
            <span className="services__button" onClick={() => toggleTab(index + 1)}>
              View More <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
            <div className={toggleState === index + 1 ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal-content">
                <i className="uil uil-times services__modal-close" onClick={() => toggleTab(index + 1)}></i>
                <h3 className="services__modal-title">{title}</h3>
                <p className="services__modal-description">Providing quality work to clients and companies.</p>
                <ul className="services__modal-services grid">
                  {["I develop user interfaces.",
                    "I develop web pages.",
                    "I create UX element interactions.",
                    "I position your company brand.",
                    "Design and mockups of products for companies."].map((info, i) => (
                    <li className="services__modal-service" key={i}>
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">{info}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;