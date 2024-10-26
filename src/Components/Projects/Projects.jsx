import React from 'react';
import './Projects.css';

const Projects = () => {
  const handleButtonClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className='main-container'>
      <h1>My Projects</h1>
      <div className='container'>
        <div className='pro-item1'>
          <h2>LITTLE LEMON</h2>
          <p>
            Developed a responsive website for a local restaurant, featuring an
            intuitive online reservation system, dynamic menu management, and
            SEO optimization to boost online visibility.
          </p>
          <div className='btn1'>
            <button onClick={() => handleButtonClick('https://little-lemon-seven-wine.vercel.app/')}>
              Visit Here
            </button>
          </div>
        </div>

        <div className='pro-item2'>
          <h2>AL-ZHEIME</h2>
          <p>
            Developed an Alzheimer's detection system using machine learning to
            analyze brain scan data and identify early signs of the disease. The
            model improved diagnostic accuracy, aiding in early intervention and
            treatment planning.
          </p>
          <div className='btn1'>
            <button onClick={() => handleButtonClick('https://github.com/midhunmahesh2001/AL-ZHEIME-Main-Project')}>
              Visit Here
            </button>
          </div>
        </div>

        <div className='pro-item3'>
          <h2>E-pharma</h2>
          <p>
          Developed an eCommerce platform for pharmaceuticals, featuring an Angular frontend and a Node.js backend, seamlessly integrated with MongoDB for robust data management
          </p>
          <div className='btn1'>
            <button onClick={() => handleButtonClick('https://epharma-final.vercel.app/landing')}>
              Visit Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
