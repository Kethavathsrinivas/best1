import React, { useState, useEffect } from 'react';
import './Blog.css';

import Group36 from '../assets/Group 36.png';
import Group37 from '../assets/Group37.png';

const Blog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
 
  const blogData = [
    {
      date: "Class 10 SEBA Preparation Resources: Excel with BESST",
      name: "Class 10 SEBA Preparation Resources: Excel with BESST",
      shortContent: `BESST provides comprehensive Class 10 SEBA preparation resources, including MCQs, subjective questions, and expert guidance. Enroll today and start preparing for your exam!...`
    },
    {
      date: "Elevate Your CUET Preparation: BESST's Authentic CUET Mock Tests",
      name: "Elevate Your CUET Preparation: BESST's Authentic CUET Mock Tests",
      shortContent: `Prepare smarter for CUET with BESST's CUET Mock Tests. Experience real exam conditions, analyze your performance, and master time management. Elevate your confidence for the CUET exam`
    },
    {
      date: "CUET Exam Anxiety and Stress Management Techniques",
      name: "CUET Exam Anxiety and Stress Management Techniques",
      shortContent: `The Common University Entrance Test (CUET) is a gateway to prestigious universities in India, and preparation undoubtedly brings excitement and ambition. However, it's also natural for students to experience CUET exam anxiety, a potent mix of stress, fear, and worry that can hinder performance. Let's face it, the pressure to excel can feel overwhelming, impacting focus, clarity, and sleep. But overcoming CUET exam stress is achievable, and it starts with understanding its impact and equipping yourself with effective stress management techniques`
    },
    {
      date: "How to Prepare for CUET: Mastering the Exam with Proven Strategies",
      name: "How to Prepare for CUET: Mastering the Exam with Proven Strategies",
      shortContent: `Uncover valuable insights on how to prepare for CUET exam. Follow expert tips, practice effectively, and maximize your performance in the CUET examination`
    }
  ];

  const handlePrev = () => {
    if (isMobile) {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    } else {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  const handleNext = () => {
    if (isMobile) {
      if (currentIndex < blogData.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    } else {
      if (currentIndex < blogData.length - 3) {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1 className="blog-title">Blog</h1>
        <div className="blog-nav-buttons">
          <button
            className={`blog-nav-button ${currentIndex === 0 ? 'disabled' : 'active'}`}
            onClick={handlePrev}
          >
            &lt;
          </button>
          <button
            className={`blog-nav-button ${currentIndex === (isMobile ? blogData.length - 1 : blogData.length - 3) ? 'disabled' : 'active'}`}
            onClick={handleNext}
          >
            &gt;
          </button>
        </div>
      </div>
      <div className="blog-boxes">
        {isMobile
          ? blogData.map((blog, index) => (
              <div
                key={index}
                className="blog-box"
                style={{ display: currentIndex === index ? 'block' : 'none' }}
              >
                <div className="blog-date" style={{ backgroundImage: `url(${index % 2 === 0 ? Group37 : Group36})` }}>
                  <p>{blog.date}</p> 
                </div>
                <div className="blog-name">{blog.name}</div>
                <div className="blog-content">
                  {blog.shortContent.length > 120 ? blog.shortContent.slice(0, 120) + '...' : blog.shortContent}
                </div>
                <button className="blog-read-more-button">Read More &gt;</button>
              </div>
            ))
          : blogData.slice(currentIndex, currentIndex + 3).map((blog, index) => (
              <div
                key={index}
                className="blog-box"
              >
                <div className="blog-date" style={{ backgroundImage: `url(${(currentIndex + index) % 2 === 0 ? Group37 : Group36})` }}>
                  <p>{blog.date}</p>
                </div>
                <div className="blog-name">{blog.name}</div>
                <div className="blog-content">
                  {blog.shortContent.length > 120 ? blog.shortContent.slice(0, 120) + '...' : blog.shortContent}
                </div>
                <button className="blog-read-more-button">Read More &gt;</button>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Blog;
