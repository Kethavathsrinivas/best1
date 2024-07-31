import React, { useState } from 'react';
import './Join.css';

const images = [
  '/assets/college1.png',
  '/assets/college2.jpeg',
  '/assets/college3.jpeg',
  '/assets/college4.jpeg',
  '/assets/college5.jpeg',
  '/assets/college6.png',
];

const Join = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, images.length - (isMobileView ? 1 : 3)));
  };

  const isMobileView = window.innerWidth <= 768;
  const imagesToShow = isMobileView ? images.slice(currentIndex, currentIndex + 1) : images.slice(currentIndex, currentIndex + 3);

  return (
    <div className="join-container">
      <h1 className="join-title">Join BESST Today</h1>
      <p className="join-description">
        Register yourself for free at BESST to avail mock tests, practice papers, live/recorded classes from your comfort zone.
      </p>
      <button className="join-register-button">Register Now</button>
      <div className="join-image-slider">
        <button
          className={`join-nav-button ${currentIndex === 0 ? 'disabled' : ''}`}
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          &lt;
        </button>
        <div className="join-image-row">
          {imagesToShow.map((src, index) => (
            <div key={index} className="join-image-card">
              <img src={src} alt={`College ${currentIndex + index + 1}`} className="join-college-image" />
            </div>
          ))}
        </div>
        <button
          className={`join-nav-button ${currentIndex >= images.length - (isMobileView ? 1 : 3) ? 'disabled' : ''}`}
          onClick={handleNext}
          disabled={currentIndex >= images.length - (isMobileView ? 1 : 3)}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Join;
