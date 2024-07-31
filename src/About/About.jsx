import React from 'react';
import './About.css';
import abt1 from '../assets/about/abt1.jpeg';
import abt2 from '../assets/about/abt2.png';
import abt3 from '../assets/about/abt3.png';
import abt4 from '../assets/about/abt4.png';
import abt5 from '../assets/about/abt5.png';
import students from '../assets/about/students.svg';
import success from '../assets/about/success.svg';
import domain from '../assets/about/domain.svg';
import test from '../assets/about/general_test.svg';
import language from '../assets/about/language.svg';
import { FaFileAlt, FaList, FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleCourseButtonClick = () => {
    navigate('/');
  };
  return (
    <div className='About-container'>
      <div className='About-besst-div'>
        <h1 className='about-heading'>About BESST</h1>
        <p className='about-subheading'>Home / About</p>
      </div>
      <div className='first-div-component'>
        <div className='cuet-coaching-content'>
          <h2 className='about-heading'>What makes BESST unique as a CUET coaching platform?</h2>
          <p className='about-subheading'>
            <span className='purple-color-text'>BESST: Your Gateway to Expert CUET Coaching</span> <br />
            BESST (BRAHMAPUTRA EXAM SUCCESS SUPPORT TEAM) stands as your premier destination for expert CUET coaching, specializing in both CUET(UG) and CUET(PG) preparation. Our seasoned CUET educators, strategically positioned nationwide, provide personalized guidance through meticulously crafted online courses. Tailored for the unique demands of CUET(UG) and CUET(PG), our programs offer flexibility, personalized attention, and a commitment to your academic success. Choose BESST to embark on a CUET preparation journey that goes beyond coaching—it's a partnership for excellence.
          </p>
          <p className='purple-color-text about-subheading'><b>Recent engagement:-</b></p>
          <div className='bold-text-div-class'>
            <p><span className='bold-text'>578</span> Students</p>
            <p><span className='bold-text'>70+</span> Courses</p>
          </div>
        </div>
        <div className='about-card'>
          <div className='about-card-item'>
            <div className='about-card-item-icon-value'>
              <FaFileAlt className='about-card-item-icon' />
              <div className='about-card-item-value'>1713</div>
            </div>
            <div className='about-card-item-label'><b>Practice Papers</b></div>
          </div>
          <div className='about-card-item'>
            <div className='about-card-item-icon-value'>
              <FaList className='about-card-item-icon' />
              <div className='about-card-item-value'>728</div>
            </div>
            <div className='about-card-item-label'><b>Mock Papers</b></div>
          </div>
          <div className='about-card-item'>
            <div className='about-card-item-icon-value'>
              <FaCheckCircle className='about-card-item-icon' />
              <div className='about-card-item-value'>59470</div>
            </div>
            <div className='about-card-item-label'><b>Total MCQ</b></div>
          </div>
        </div>
        <div className='cuet-coaching-img'>
          <img src={abt1} alt="" />
        </div>
      </div>

      <div className='second-div-component'>
        <div>
            <h2 className='about-heading'>How does BESST CUET Coaching serve as your roadmap to success?</h2>
            <p className='about-subheading'>At BESST (BRAHMAPUTRA EXAM SUCCESS SUPPORT TEAM), our seasoned CUET mentors, strategically located nationwide, bring a wealth of expertise to your CUET (UG) and CUET(PG) preparation journey. Dedicated to fostering an environment where students not only learn but thrive, as we go beyond traditional coaching. With BESST CUET coaching, your preparation transcends routine studying; it becomes a dynamic exploration, empowering you for success in both CUET (UG) and CUET(PG). Trust us to be more than just educators – we're your dedicated partners, committed to guiding you towards excellence in the challenging landscape of CUET.</p>
        </div>
        <div className='about-second-img'>
          <img src={abt2} alt="" />
          <h4>FOR STUDENTS</h4>
          <button onClick={handleCourseButtonClick}>Start Course</button>
        </div>
      </div>

      <div className='about-third-div-component'>
            <img src={abt3} alt="" />
            <div className='about-third-div-component-content' >
              <h4 className='about-subheading'><span className='violet-color-text'>Our Mission:</span>Empowering <br />Students for CUET Success</h4>
              <p className='about-subheading'>Our mission is crystal clear: to equip students with the knowledge and skills required to excel in both CUET (UG) and CUET(PG). Whether you're gearing up for CUET or similar challenging examinations, BESST CUET coaching is your go-to platform for the resources and guidance needed to achieve your academic goals</p>
            </div>
      </div>

      <div className='about-fourth-div-component'>
        <div className='fourth-one'>
        <h4 className='about-subheading fourth-heading'>Your Success, Our Commitment</h4>
        <p className='about-subheading'>At BESST CUET coaching, your success is our primary focus. We understand the challenges posed by the competitive CUET exam landscape, and we are dedicated to equipping you with the skills and knowledge required to overcome them.
        <br /><br />
        Join us at BESST CUET coaching, and let's embark on this educational journey together. Your CUET success dreams are within reach, and we are here to help you turn them into reality.</p>
        </div>
        <div className='fouth-two'>
          <img src={abt5} alt="" />
          <div className='about-img4'>
          <img  src={abt4} alt="" />
          </div>
        </div>
      </div>

      <div className='about-fifth-div-component'>
        <div className='fifth-div-img-value'>
            <div>
              <img src={students} alt="" />
            </div>
            <div>
              <p><span className='fifth-div-numbers'>578</span>
              <br /> Students</p>
            </div>
        </div>
        <div className='fifth-div-img-value'>
            <div>
              <img src={success} alt="" />
            </div>
            <div>
              <p><span className='fifth-div-numbers'>99.9%</span>
              <br />Success Rate</p>
              </div>
        </div>
        <div className='fifth-div-img-value'>
          <div>
            <img src={domain} alt="" />
          </div>
          <div>
            <p ><span className='fifth-div-numbers'>57</span>
            <br />Domain Subject</p>
          </div>
        </div>
        <div className='fifth-div-img-value'>
          <div>
            <img src={test} alt="" />
          </div>
          <div>
            <p><span className='fifth-div-numbers'>57</span>
             <br />General Test</p>
          </div>
        </div>
        <div className='fifth-div-img-value'>
          <div>
            <img src={language} alt="" />
          </div>
          <div>
            <p><span className='fifth-div-numbers'>57</span>
           <br />Language Paper</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;
