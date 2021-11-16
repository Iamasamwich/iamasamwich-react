import React from 'react';
import phone from '../images/phone-icon.png';
import email from '../images/email-icon.png';

const Contact = () => {

  return (
    <div className="panel" id="contact">
      <h2 className="panel-heading">Contact</h2>
      <div className="contact">
        <img src={phone} alt="phone" />
        <a 
          href="tel:+61447464726"
          className="link"
        >
          0447 464 726
        </a>
      </div>
      <div className="contact">
        <img src={email} alt="email" />
        <a 
          href="mailto:sam@iamasamwich.com?subject=Hi%20there!"
          className="link"
        >
          sam@iamasamwich.com
        </a>
      </div>
    </div>
  );
};

export default Contact;