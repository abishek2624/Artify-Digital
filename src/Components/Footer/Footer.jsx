'use client';
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Artify Digital</h3>
          <p>
            We build modern digital experiences that help brands grow with clarity,
            creativity, and purpose.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:abishek@gmail.com">abishek@gmail.com</a></li>
            <li><a href="tel:+916381496538">+91 6381496538</a></li>
            <li><span>Chennai, Tamil Nadu, India</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Artify Digital. All rights reserved.</span>
        <span>Designed with simplicity and purpose.</span>
      </div>
    </footer>
  );
}

export default Footer;
