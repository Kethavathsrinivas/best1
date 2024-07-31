import React from 'react';
import ugimg from '../assets/course_new.jpg'
import tick from '../assets/Tick.png'
import './Cuet_PG.css';
import RatingComponent from './RatingComponent';

const Cuet_PG = () => {
  return (
    <div className='cuet-ug-container'>
         <div  className='ug-main-heading'>
            <h3 className="cuet-ug-heading">CUET(PG) COURSE</h3>
            <p className="cuet-ug-subheading">HOME/CUET(PG) COURSE</p>
        </div>
    <div className='cuet-ug-parts-container'>
    <div className="cuet-ug-first-part">
        <div className='cuet-ug-section'>
            <h3 className="cuet-ug-heading">CUET(PG) Exam</h3>
            <p className="cuet-ug-subheading">Common University Entrance Test (CUET) is being introduced for admission into all UG/PG programmes in all Central Universities for academic sessions under the Ministry of Education (MoE). It was introduced in 2022.</p>
        </div>
        <div>
            <img src={ugimg} alt="CUET UG Course" className="cuet-ug-image" />
        </div>
        <div className='cuet-ug-section'>
            <h3 className="cuet-ug-heading">Description</h3>
            <p className="cuet-ug-subheading">Common University Entrance Test (CUET) is being introduced for admission into UG/PG programme in Central and participating Universities of the country. The Common University Entrance Test (CUET) will provide a common platform and equal opportunities to candidates across the country , especially those from North-East and from rural and other remote areas and help to establish better connect with the Universities. A single Examination will enable the candidates to cover a wide outreach and be part of the admission process to various Central Universities.</p>
        </div>
        <div className='cuet-ug-section'>
            <h3 className="cuet-ug-heading">Eligibility</h3>
            <p className="cuet-ug-subheading">For appearing in the CUET (PG) 2024, there is no age limit for the candidates. The candidates who have passed the bachelor degree/ equivalent examination or appearing in 2024 irrespective of their age can appear in CUET (PG) 2024 examination. However, the candidates will be required to fulfil the age criteria of the University in which they are desirous of taking admission.</p>
        </div>
        <div className='cuet-ug-section'>
            <h3 className="cuet-ug-heading">Mode Of Exam</h3>
            <h4 className="cuet-ug-subheading">CUET (PG) 2024 will be conducted in Computer Based Test (CBT) mode only.</h4>
        </div>
        <div className='cuet-ug-section'>
            <h3 className="cuet-ug-heading">Medium of Question Papers</h3>
            <p className="cuet-ug-subheading">The medium of Question Paper for CUET (PG) 2024 will be English and Hindi (Bilingual) except for languages, M.Tech Higher Sciences and Acharya papers (except Hindu studies, Baudha Darshan and Indian Knowledge System).</p>
        </div>
        <div className='cuet-ug-box'>
            <h3 className="cuet-ug-heading">Marking Scheme</h3>
            <p className="cuet-ug-subheading">- Each question carries 04 (four) marks.<br />
            - For each correct response, candidate will get 04 (four) marks.<br />
            - For each incorrect response, 01(one) mark will be deducted from the total score.<br />
            - Un-answered/un-attempted response will be given no marks.
            </p>
        </div>
        <div className='cuet-ug-box'>
            <h3 className="cuet-ug-heading">Syllabus of CUET (PG) 2024</h3>
            <p className="cuet-ug-subheading">- Entrance syllabus for question papers would be available in the official website <a href="https://pgcuet.samarth.ac.in" className="cuet-ug-link">https://pgcuet.samarth.ac.in</a></p>    
        </div>
        <div className='cuet-ug-table-section'>
            <h3 className="cuet-ug-table-heading">Schedule of Examination</h3>
            <table className="cuet-ug-table">
                <tr>
                    <td>Dates of Examination</td>
                    <td colSpan={3}>11 March 2024 to 28 March 2024</td>
                </tr>
                <tr>
                    <td>Mode of Examination</td>
                    <td colSpan={3}>Computer Based Test (CBT) mode only</td>
                </tr>
                <tr style={{color:"#333"}}>
                    <td><b>Shift</b></td>
                    <td><b>Shift-1</b></td>
                    <td><b>Shift-2</b></td>
                    <td><b>Shift-3</b></td>
                </tr>
                <tr>
                   <td>Timing of Examination</td>
                   <td>9.00 a.m to 10.45 a.m</td>
                   <td>12.45 p.m to 2.30 p.m</td>
                   <td>4.30 p.m to 6.15 p.m</td>
                </tr>
                <tr>
                    <td>Duration of Examination</td>
                    <td>1 Hour and 45 minutes (105 Minutes)</td>
                    <td>1 Hour and 45 minutes (105 Minutes)</td>
                    <td>1 Hour and 45 minutes (105 Minutes)</td>
                </tr>
                <tr>
                    <td>Total number of Questions</td>
                    <td>The question paper will have 75 questions.</td>
                </tr>
                <tr>
                    <td colSpan={4}>NOTE: Compensatory time for PwBD Candidates of 20 minutes for each hour examination will be given.</td>
                </tr>
            </table>
        </div>
        <div className='cuet-ug-section'>
            <h3 className="cuet-ug-heading">Structure of Question Papers for CUET(PG) 2024:</h3>

            <p className="cuet-ug-subheading">
            - Candidates can choose maximum of 4 (four) question paper codes.
            <br />
            - There would be no General Test with each paper.
            <br />
            - The candidate can choose General Test paper as a subject. The comprehension part of these papers would be English or Hindi as chosen by the candidate during registration.
            </p>
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

export default Cuet_PG;
