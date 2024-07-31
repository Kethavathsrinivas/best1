import React from 'react';
import ugimg from '../assets/ncert.jpg'
import tick from '../assets/Tick.png'
import './Cuet_ncert.css';
import RatingComponent from './RatingComponent';

const Cuet_ncert = () => {
  return (
    <div className='cuet-ug-container'>
         <div  className='ug-main-heading'>
            <h3 className="cuet-ug-heading">NCERT CLASS 12 SOLUTION</h3>
            <p className="cuet-ug-subheading">HOME/NCERT CLASS 12 SOLUTION</p>
        </div>
    <div className='cuet-ug-parts-container'>
    <div className="cuet-ug-first-part">
        <div className='cuet-ug-section'>
            <h3 className="cuet-ug-heading">NCERT CLASS 12 SOLUTION</h3>
            <h4 className="cuet-ug-subheading">What is NCERT?</h4>
            <p className="cuet-ug-subheading">The National Council of Educational Research and Training (NCERT) is a government organisation set up in 1961. Its main aim is to assist and advise the Central and state governments for qualitative improvement in school education.</p>
        </div>
        <div>
            <img src={ugimg} alt="CUET UG Course" className="cuet-ug-image" />
        </div>
        <div className='cuet-ug-section'>
            <h3 className="cuet-ug-heading">Major Objectives of NCERT</h3>
            <p className="cuet-ug-subheading">1.Prepare and produce model textbooks, supplementary materials, journals etc.<br />
            2.Organise pre-service and in-service training of teachers. <br />
3.Develop and disseminate innovative educational techniques and practices.
            </p>
        </div>
        <div className='cuet-ug-section'>
            <h3 className="cuet-ug-heading">Class 12 NCERT:</h3>
            <p className="cuet-ug-subheading">The National Council of Educational and Research Training publishes Class 12 books under the guidance of CBSE (Central Board of Secondary Education). All the questions that are asked in CBSE Board exams are completely based on CBSE NCERT books. If students are clear with questions and answers present in NCERT books for class 12 then they can not only score good marks in the Boards but also in the various competitive exams like CUET etc.
            <br />
1. Most of the CBSE-affiliated schools follow the NCERT textbooks. <br />
2. Several state boards follow the NCERT textbooks like the state boards of Delhi, Karnataka, Mizoram, and Tripura to name a few. <br />
3. Assam Higher Secondary Education Council (AHSEC), a state-level Board of Assam also follows books that are prepared and published by NCERT.</p>
        </div>
        <div className='cuet-ug-section'>
            <h3 className="cuet-ug-heading">What we are providing ?</h3>
            <p className="cuet-ug-subheading">We provide NCERT solutions for class 12. Questions and Answers are given in such a manner that students can easily go through them during the time of their examinations.</p>
        </div>
        <div>
            <p className="cuet-ug-subheading ncert-link">Important Link: </p><a href="https://ncert.nic.in/" className="cuet-ug-link">Click Here</a>
        </div>
    </div>
    <div className='cuet-ug-second-part'>
        <div className='cuet-ug-section'>
        <h3 className="cuet-ug-heading">Currently, No Subscription Pack is Available Please Check Later.</h3>
        </div>
        <div className='ml-[40px]'>
            <h3 className="cuet-ug-heading">This course included :</h3>
            <ul className='cuet-ug-course-list'>
                <li><img className='cuet-ug-tick' src={tick} alt="" />Subject wise practice papers</li>
                <li><img className='cuet-ug-tick' src={tick} alt="" />Subject wise mock papers</li>
                <li><img className='cuet-ug-tick' src={tick} alt="" />Live Quiz</li>
                <li><img className='cuet-ug-tick' src={tick} alt="" />Performance analysis</li>
                <li><img className='cuet-ug-tick' src={tick} alt="" />Individual Ranking</li>
                <li><img className='cuet-ug-tick' src={tick} alt="" />Study materials pdf</li>
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

export default Cuet_ncert;
