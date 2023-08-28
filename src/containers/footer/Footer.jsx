import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="ai__footer section__padding" id="contact">
    <div className="ai__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="ai__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="ai__footer-links">
      <div className="ai__footer-links-logo">
        <h1>AI</h1>
        <p>Bay Street K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </div>
      <div className="ai__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="ai__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="ai__footer-links_div">
        <h4>Contact Us</h4>
        <p>Bay Street K12 182 DK Alknjkcb</p>
        <p>+1 085132567</p>
        <p>info@xyz.net</p>
      </div>
    </div>

    <div className="ai__footer-copyright">
      <p>@2023 AI. All rights reserved.</p>
    </div>
  </div>
  )
}

export default Footer ;
