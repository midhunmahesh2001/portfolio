import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Midhun Mahesh</h2>
        </div>
        <ul className="footer-links">
        <li><Link to="/midhun__mahesh/">Home</Link></li>
        <li><Link to="/certificates">Certificates</Link></li>
        <li><Link to="/contact">Contacts</Link></li>
        <li><a href="https://www.linkedin.com/in/midhun-mahesh-74856b20a/">LinkedIn</a></li>
          <li><a href="https://github.com/midhunmahesh2001?tab=repositories">GitHub</a></li>
        <li><a href="https://www.instagram.com/midhun__mahesh/">Instagram</a></li>
        </ul>
        <p className="footer-text">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
