import React, { useState } from 'react';
import './CoursesHome.css';
import Tick from '../assets/Tick.png';

const CoursesHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const courses = [
    {
      title: 'Common University Entrance Test (UG)',
      points: [
        'Subject wise practice paper',
        'Subject wise mock papers',
        'Mock exam (replica of NTA interface)',
        'Live classes by experts',
        'Study materials & previous year’s papers pdf',
        'Mock registration process',
        'Delhi University form fill-up Process',
        'Live Quiz',
        'Self-performance analysis',
        'Individual Ranking',
        'Doubt resolution'
      ],
      bgClass: 'odd-bg'
    },
    {
      title: 'NCERT CLASS 12',
      points: [
        'Subject wise practice papers',
        'Subject wise mock papers',
        'Performance Analysis',
        'Individual Ranking',
        'Live Quiz',
        'Study materials pdf',
        'Previous year’s question papers pdf'
      ],
      bgClass: 'even-bg'
    },
    {
      title: 'CLASS 10 (SEBA)',
      points: [
        'Subject wise practice papers',
        'Subject wise mock papers',
        'Subject/Chapter wise subjective questions and answers',
        'Hand written notes of previous rank holders pdf',
        'Previous year’s question papers pdf'
      ],
      bgClass: 'odd-bg'
    },
    {
      title: 'GENERAL APTITUDE TEST',
      points: [
        'Live classes by experts',
        'Covering all topics practice papers',
        'Covering all topics mock papers',
        'Live Quiz',
        'Self-performance analysis',
        'Individual Ranking',
        'Doubt resolution'
      ],
      bgClass: 'even-bg'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % courses.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + courses.length) % courses.length);
  };

  return (
    <div className="top-courses-section">
      <h2 className="section-heading">Top Courses</h2>
      <div className="slider-controls">
        <button className="prev-arrow1" onClick={prevSlide}>&lt;</button>
        <button className="next-arrow1" onClick={nextSlide}>&gt;</button>
      </div>
      <div className="courses-container">
        {courses.slice(currentIndex, currentIndex + 3).map((course, index) => (
          <div key={index} className="course-card">
            <div className={`inner-box ${course.bgClass}`}>
              <h3 className="course-title">{course.title}</h3>
              <ul className="course-points">
  {course.points.map((point, idx) => (
    <li key={idx}>
      <img src={Tick} alt="Tick Mark" /> {point}
    </li>
  ))}
</ul>

            </div>
            <button className="view-more-btn">View More > </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesHome;
