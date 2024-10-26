import React from 'react';
import './Certificates.css';
import c1 from '../../assets/CourseraAR.jpg';
import c2 from '../../assets/Courseracip.jpg';
import c3 from '../../assets/Courserafdc.jpg';
import c4 from '../../assets/Courserahcid.jpg';
import c5 from '../../assets/Courserapuiux.jpg';
import c6 from '../../assets/Courserapwj.jpg';
import c7 from '../../assets/CourseraRB.jpg';
import c8 from '../../assets/Courseravc.jpg';
import c9 from '../../assets/Courserafc.jpg';
import c10 from '../../assets/Courseraifd.jpg';

const Certificates = () => {
  return (
    <div className="cert-container">
      <h1>Certificates</h1>
      
        {/* Main certificate with larger size */}
        <div className="mainCertificate">
          <a
            href="https://coursera.org/share/8efbb8b2ccce8bee1601be4eea4be4ae"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={c9} alt="Main Certificate" />
          </a>
        </div>

        {/* Other certificates */}
        <ul className="certificateList">
        <li className="certificateItem">
          <a
            href="https://coursera.org/share/9b7e23c23ab07722dc8df35786466617"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={c10} alt="Certificate 1" className="certificateImage" />
          </a>
        </li>
        <li className="certificateItem">
          <a
            href="https://coursera.org/share/9b7e23c23ab07722dc8df35786466617"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={c1} alt="Certificate 2" className="certificateImage" />
          </a>
        </li>
        <li className="certificateItem">
          <a
            href="https://coursera.org/share/b542b647bdcf6fe3400425ba1401b54d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={c2} alt="Certificate 3" className="certificateImage" />
          </a>
        </li>
        <li className="certificateItem">
          <a
            href="https://coursera.org/share/0bcc33d0fcdcf4e8076036d4c646a2f7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={c3} alt="Certificate 4" className="certificateImage" />
          </a>
        </li>
        <li className="certificateItem">
          <a
            href="https://coursera.org/share/d91fc098c84f29818a95d3087cea5dfc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={c4} alt="Certificate 5" className="certificateImage" />
          </a>
        </li>
        <li className="certificateItem">
          <a
            href="https://coursera.org/share/0b4c8341d43956ffe6927a8b79bded0b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={c5} alt="Certificate 6" className="certificateImage" />
          </a>
        </li>
        <li className="certificateItem">
          <a
            href="https://coursera.org/share/ab370381d3a053b83c52867f8d32bde4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={c6} alt="Certificate 7" className="certificateImage" />
          </a>
        </li>
        <li className="certificateItem">
          <a
            href="https://coursera.org/share/d16d4c3adb61029e6a923e61f1635162"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={c7} alt="Certificate 8" className="certificateImage" />
          </a>
        </li>
        <li className="certificateItem">
          <a
            href="https://coursera.org/share/91ceaeaf7a83c51bb03770768e7803c3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={c8} alt="Certificate 9" className="certificateImage" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Certificates;
