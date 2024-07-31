import React from 'react';
import ugimg from '../assets/ncert.jpg'
import tick from '../assets/Tick.png'
import social from '../assets/social_science.png'
import maths from '../assets/maths.png'
import science from '../assets/general_science.png'
import english from '../assets/english.png'
import './Cuet_seba.css';
import RatingComponent from './RatingComponent';
import { useNavigate } from 'react-router-dom';

const Cuet_seba = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/signin');
  };
  return (
    <div className='cuet-ug-container'>
         <div  className='ug-main-heading'>
            <h3 className="cuet-ug-heading">Class 10 (SEBA)</h3>
            <p className="cuet-ug-subheading">Home / Class 10 (SEBA)</p>
        </div>
    <div className='cuet-ug-parts-container'>
    <div className="cuet-ug-first-part">
        <div className='cuet-ug-section'>
            <h3 className="cuet-ug-heading">Class 10 (SEBA)</h3>
            <p className="cuet-ug-subheading">The Board of secondary education, Assam is commonly known as SEBA. It is the prime education regulatory board under the jurisdiction of the Ministry of Education, Assam. It was established in 1962. Its headquarter is in Guwahati. This board conducts the high school leaving certificate for the students of 10th standard.</p>
        </div>
        <div>
            <img src={ugimg} alt="CUET UG Course" className="cuet-ug-image" />
        </div>
        <div className='cuet-ug-section'>
            <h3 className="cuet-ug-heading">
        SEBA announced on <span className="highlight-date">August 11, 2022</span>
        </h3>
            <p className="cuet-ug-subheading">To reform the exam pattern for the high school leaving certificate (Class 10) exam. This change has been introduced by the new education policy (NEP)2020. As per the announcement, the exam pattern for <span className="highlight-date"> 4 subjects</span> will change. These subjects are:</p>
        </div>
        <div className="seba-card-container">
      <div className="seba-card">
        <img src={social} alt="social" />
        <p className='subject-social-science'>Social Science</p>
      </div>
      <div className="seba-card">
        <img src={maths} alt="maths" />
        <p className='subject-maths'>General Maths</p>
      </div>
      <div className="seba-card">
        <img src={science} alt="science" />
        <p className='subject-general-science'>General Science</p>
      </div>
      <div className="seba-card">
        <img src={english} alt="english" />
        <p className='subject-english'>English</p>
      </div>
    </div>
        <div className='cuet-ug-section'>
            <h3 className="cuet-ug-heading">This new exam pattern is implemented from 2023 HSLC.</h3>
            <p className="cuet-ug-subheading"><span className="highlight-date">Mode of Exam:</span> Pen and Paper <br />
            <span className="highlight-date">Official Language :</span> Assamese, English and Hindi</p>
        </div>
        <div className='cuet-ug-section'>
            <h3 className="cuet-ug-heading">The 100-point <span className="highlight-date">Question Papers</span> will include <span className="highlight-date">45-points</span> objective-type questions in <span className="highlight-date">4 subjects</span></h3>
            <h4 className="cuet-ug-subheading">
                (<span className="subject subject-english">English</span>    
                <span className="subject subject-general-science">General Science</span>     
                <span className="subject subject-social-science">Social Science</span>  
                <span className=" subject-maths">Maths</span>)
            </h4>
            <ul className="cuet-ug-subheading subjects-list p-[50px]">
  <li>50% of the questions (i.e. 45 questions) will be objective-type questions</li>
  <li>With the remaining 50% consisting of an internal assessment of 10 marks and a mix of objective type questions.</li>
</ul>
    <div>
        <p className="cuet-ug-subheading ncert-link">Official Website: </p><a href="https://site.sebaonline.org/" className="cuet-ug-link">Visit the link</a>
        </div>
        </div>
        <div className='cuet-ug-section'>
            <h3 className="cuet-ug-heading">The content we are providing</h3>
            <p className="cuet-ug-subheading">1.MCQs <br />
                    2.Practice papers <br />
                    3.Mock papers <br />
                    4.Subjective questions and answers <br />
                    5.Handwritten notes of rank holders</p>
        </div>
    </div>
    <div className='cuet-ug-second-part'>
    <div className="side-card-container">
      <div className="inner-card orange-card">
        CLASS 10(SEBA) - PREMIUM PACK
      </div>
      <div className="content cuet-ug-subheading">
        <p className='price-content'>Rs. <span className="price">600.00</span>/ 12 Month(s)</p>
        <ul className="features">
        <p>
        <li>
          You get Practice Tests, Mock Tests for Mathematics, General Science, Social Science and English: <b> 3302+</b> Questions
          </li>
          </p>
          <li>1.Subjective Questions answers</li>
        </ul>
        <a href="#view-more" className="view-more">View More</a>
      </div>
      <div className="bottom-card">
        <button className="choose-plan" onClick={handleButtonClick}>CHOOSE PLAN</button>
        <div className="arrows">
          <div className="arrow-left" />
          <div className="arrow-right" />
        </div>
      </div>
    </div>
        <div className='ml-[40px]'>
            <h3 className="cuet-ug-heading">This course included :</h3>
            <ul className='cuet-ug-course-list'>
                <li><img className='cuet-ug-tick' src={tick} alt="" />Subject wise practice papers</li>
                <li><img className='cuet-ug-tick' src={tick} alt="" />Subject wise mock papers</li>
                <li><img className='cuet-ug-tick' src={tick} alt="" />Subject / Chapter wise subjective questions and answers</li>
                <li><img className='cuet-ug-tick' src={tick} alt="" />Hand written notes of previous rank holders pdf</li>
                <li><img className='cuet-ug-tick' src={tick} alt="" />Previous year’s question papers pdf</li>
            </ul>
        </div>
        <div>
            <hr />
        </div>
        <div>
            <p className='cuet-ug-subheading rating'> <RatingComponent />Rating: 4.0</p>
        </div>
    </div>
    </div>
    </div>
  );
}

export default Cuet_seba;
