import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ferrari from '../../assets/hero-img.webp';

const Header = () => {
  return (
    <header className='Container'>
      <div className="header-item">
        <h2>Hiii all welcome to my <span>Portfolio</span></h2>
        <p>I'm a recent Computer Science and Engineering
          graduate with hands-on experience in frontend
          development. Certified by Meta as a Frontend
          Developer, skilled in HTML, CSS, JavaScript, React and Angular. Waiting to land on my first job and connect with people.
        </p>
        <div className="header-btn">
          <Link to="/contact">
            <button>Hire me</button>
          </Link>
        </div>
      </div>
      <div className="header-pic">
        <img src={ferrari} alt="" />
      </div>
    </header>
  );
}

export default Header;
