import React, { useState } from 'react';
import './CurrentAffairs.css';

const CurrentAffairs = () => {
  const [expanded, setExpanded] = useState({});

  const toggleContent = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="current-affairs-container">
      <div className="affairs-left-side">
        <div className="affairs-latest-title">
          <div className="affairs-title-first">Latest</div>
          <div className="affairs-title-second">Current Affairs</div>
        </div>
        <div className='affairs-undertitle'>
          <div className="affairs-sub-title">
            Important Days: Current affairs from 1st July to 31st July 2024
          </div>
          <div className="affairs-content">
            {[ 
              {
                date: "NATIONAL DOCTOR'S DAY",
                description: "In India, National Doctor's Day is observed on July 1st every year. It is an annual celebration that recognizes the invaluable contributions of medical professionals to our society. The day was established to commemorate the birth and death anniversary of Dr. Bidhan Chandra Roy, a renowned physician and the second Chief Minister of West Bengal. The Government of India officially recognized this day in 1991."
              },
              {
                date: "WORLD POPULATION DAY",
                description: "A Special Day to Raise Awareness of Population Issues July 11th every year is World Population Day. This event has been celebrated for almost three decades and the aim is to focus the world’s attention on the importance of population issues."
              },
              {
                date: "NATIONAL FRENCH FRY DAY",
                description: "National French Fry Day, celebrated on July 13th, honors the beloved crispy potato snack enjoyed worldwide in various styles and flavors."
              },
              {
                date: "BASTILLE DAY OR FRENCH NATIONAL DAY",
                description: "Bastille Day is, celebrated on July 14, is France's national day, known in French as le 14 juillet or Fête nationale française. It symbolizes French patriotism and national identity, commemorating the storming of the Bastille prison in 1789 which is a turning point of the French Revolution."
              }
            ].map((item, index) => (
              <div key={index}>
                <p>
                  <strong>{item.date}:</strong> {expanded[index] ? item.description : `${item.description.slice(0, 150)}...`}
                  <span 
                    className="affairs-read-more" 
                    onClick={() => toggleContent(index)}
                  >
                    {expanded[index] ? 'Hide' : 'Read More'}
                  </span>
                </p>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="affairs-right-side">
        <div className="affairs-categories">
          <h3>Categories</h3>
          <ul>
            <li><button className="link-button">National News</button></li>
            <li><button className="link-button">International News</button></li>
            <li><button className="link-button">Sports News</button></li>
            <li><button className="link-button">Important Days</button></li>
            <li><button className="link-button">People in News</button></li>
          </ul>
          <button className="affairs-view-all">View All &gt;</button>
        </div>
        <div className="affairs-monthly">
          <h3>Monthly Current Affairs</h3>
          <ul>
            <li><button className="link-button">1st July to 31st July 2024</button></li>
            <li><button className="link-button">16th June to 30th June 2024</button></li>
            <li><button className="link-button">1st June to 15th June 2024</button></li>
            <li><button className="link-button">16th May to 31st May 2024</button></li>
            <li><button className="link-button">1st May to 15th May 2024</button></li>
          </ul>
          <button className="affairs-view-all">View All &gt;</button>
        </div>
      </div>
    </div>
  );
};

export default CurrentAffairs;
