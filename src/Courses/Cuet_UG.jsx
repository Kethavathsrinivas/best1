import React from 'react';
import ugimg from '../assets/course_new.jpg'
import tick from '../assets/Tick.png'
import './Cuet_UG.css';
import RatingComponent from './RatingComponent';

const Cuet_UG = () => {
  return (
    <div className='cuet-ug-container'>
         <div  className='ug-main-heading'>
            <h3 className="cuet-ug-heading">CUET(UG) COURSE</h3>
            <p className="cuet-ug-subheading">HOME/CUET(UG) COURSE</p>
        </div>
    <div className='cuet-ug-parts-container'>
    <div className="cuet-ug-first-part">
        <div className='cuet-ug-section'>
            <h3 className="cuet-ug-heading">CUET(UG) Exam</h3>
            <p className="cuet-ug-subheading">Common University Entrance Test (CUET) is being introduced for admission into all UG/PG programmes in all Central Universities for academic sessions under the Ministry of Education (MoE). It was introduced in 2022.</p>
        </div>
        <div>
            <img src={ugimg} alt="CUET UG Course" className="cuet-ug-image" />
        </div>
        <div className='cuet-ug-section'>
            <h3 className="cuet-ug-heading">Description</h3>
            <p className="cuet-ug-subheading">Common University Entrance Test (CUET) is being introduced for admission into all UG/PG programmes in all Central Universities for academic session under the Ministry of Education (MoE). It was introduced for the first time in 2022. A single examination will enable the candidates to cover a wide outreach & be part of the admission process to various Central Universities & participating Universities of India.</p>
        </div>
        <div className='cuet-ug-section'>
            <h3 className="cuet-ug-heading">Eligibility</h3>
            <p className="cuet-ug-subheading">For appearing in CUET (UG) there is no age limit for the candidates. The candidates who have passed the class XII/ equivalent examination or are appearing, irrespective of their age can appear in CUET (UG) examination. However, the candidates will be required to fulfil the age criteria (if any) of the University (ies) in which they are desirous of taking admission.</p>
        </div>
        <div className='cuet-ug-section'>
            <h3 className="cuet-ug-heading">Mode Of Exam</h3>
            <h4 className="cuet-ug-subheading">Hybrid mode (Pen & Paper + CBT)</h4>
            <p className="cuet-ug-subheading">Note: It will depend on the candidate count after the registration is complete.</p>
        </div>
        <div className='cuet-ug-section'>
            <h3 className="cuet-ug-heading">Medium of Examination</h3>
            <p className="cuet-ug-subheading">The tests (other than "language" test) are offered in 13 languages i.e, Assamese, Bengali, English, Gujarati, Hindi, Kannada, Malayalam, Marathi, Odiya, Punjabi, Tamil, Telugu & Urdu. A candidate is required to opt for one of the specified languages as the medium of the paper, as per desired University's eligibility criteria while applying. Medium is not the same as the 'language' opted as the component of the test. 'Language' test is for assessing the proficiency/skills of the candidate in the language opted by him/her & the question paper in respect of the same will be available to the candidate in the medium opted by him/her only. The question paper of the 'language' test will not bilingual.</p>
        </div>
        <div className='cuet-ug-section'>
            <h3 className="cuet-ug-heading">Choice of Test Paper</h3>
            <p className="cuet-ug-subheading">Maximum 06 Test papers (04 or 05 domain subjects including General Test and 01 or 02 languages).</p>
            <h3 className="cuet-ug-heading">Medium of Question Paper</h3>
            <p className="cuet-ug-subheading ">The tests (other than "language" test) are offered in 13 languages.</p>
            <ul className='ml-[50px]'>
                <li>Assamese</li>
                <li>Bengali</li>
                <li>English</li>
                <li>Gujarati</li>
                <li>Hindi</li>
                <li>Kannada</li>
                <li>Malayalam</li>
                <li>Marathi</li>
                <li>Odia</li>
                <li>Punjabi</li>
                <li>Tamil</li>
                <li>Telugu</li>
                <li>Urdu</li>
            </ul>
            <p className="cuet-ug-subheading">A candidate is required to opt for one of the specified languages as the medium of the paper, as per desired University's eligibility criteria while applying.</p>
        </div>
        <div className='cuet-ug-box'>
            <h3 className="cuet-ug-heading">Marking Scheme</h3>
            <p className="cuet-ug-subheading">- For each correct answer, five (5) marks will be rewarded and for each wrong answer -1 will be deducted. There is no mark for unattempted questions.</p>
        </div>
        <div className='cuet-ug-box'>
            <h3 className="cuet-ug-heading">Syllabus of CUET (UG) 2024</h3>
            <p className="cuet-ug-subheading">- The syllabus for subjects is available on the NTA website <a href="https://exams.nta.ac.in/CUET-UG/" className="cuet-ug-link">https://exams.nta.ac.in/CUET-UG/</a></p>    
        </div>
        <div className='cuet-ug-table-section'>
            <h3 className="cuet-ug-table-heading">Schedule of Examination</h3>
            <table className="cuet-ug-table">
                <tr>
                    <td>Dates of Examination</td>
                    <td>Between 15 May 2024 & 31 May 2024 (Dates may vary depending on the National Election Schedule)</td>
                </tr>
                <tr>
                    <td>Pattern of Question Paper</td>
                    <td>Objective type Multiple Choice Questions (MCQs)</td>
                </tr>
                <tr>
                    <td>Total number of Questions</td>
                    <td>40 out of 50 questions for all test papers & 50 out of 60 questions for General Test</td>
                </tr>
                <tr>
                    <td>Duration of Examination</td>
                    <td>45 minutes for all test papers except Mathematics/Applied Mathematics,Accountancy,Physics,Chemistry,Economics ,Computer Science/Informatics Practices,& General Test which would be 60 minutes.</td>
                </tr>
                <tr>
                    <td>Slots</td>
                    <td>The examination will be conducted on multiple days in two or three shifts per day, depending on the number of candidates & their combinations.</td>
                </tr>
                <tr>
                    <td colSpan={2}>NOTE: Compensatory time for PwBD Candidates of 20 minutes for each hour examination will be given.</td>
                </tr>
            </table>
        </div>
    </div>
    <div className='cuet-ug-second-part'>
        <div className='cuet-ug-box'>
            <p className='cuet-ug-subheading'>Unlock boundless knowledge from the comfort of your home with our online classes subscription – where learning knows no limits!</p>
            <button className='cuet-ug-btn'>CUET Online Subscription</button>
        </div>
        <div className='ml-[40px]'>
            <h3 className="cuet-ug-heading">This course included :</h3>
            <ul className='cuet-ug-course-list'>
                <li><img className='cuet-ug-tick' src={tick} alt="" />Subject wise practice paper</li>
                <li><img className='cuet-ug-tick' src={tick} alt="" />Subject wise mock papers</li>
                <li><img className='cuet-ug-tick' src={tick} alt="" />Mock exam(replica of NTA interface)</li>
                <li><img className='cuet-ug-tick' src={tick} alt="" />Live classes by experts</li>
                <li><img className='cuet-ug-tick' src={tick} alt="" />Study materials & previous year’s papers pdf</li>
                <li><img className='cuet-ug-tick' src={tick} alt="" />Mock registration process</li>
                <li><img className='cuet-ug-tick' src={tick} alt="" />Delhi University form fill - up Process</li>
                <li><img className='cuet-ug-tick' src={tick} alt="" />Live Quiz</li>
                <li><img className='cuet-ug-tick' src={tick} alt="" />Self - performance analysis</li>
                <li><img className='cuet-ug-tick' src={tick} alt="" />Individual Ranking</li>
                <li><img className='cuet-ug-tick' src={tick} alt="" />Doubt resolution</li>
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

export default Cuet_UG;
