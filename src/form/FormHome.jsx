import React from 'react';
import './FormHome.css';
import backgroundImage from '../assets/background1.jpg'; // Ensure the correct path to your background image

const SearchForm = () => {
  return (
    <div>
      <h1 className="form-title">Search For CUET(UG) College/University</h1>
   
      <div className="form-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <form>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="degree">Degree :</label>
              <input type="text" id="degree" name="degree" placeholder='Enter or Select Course'/>
            </div>
            <div className="form-group">
              <label htmlFor="university">University :</label>
              <input type="text" id="university" name="university" placeholder='Enter or Select University' />
            </div>
            <div className="form-group">
              <label htmlFor="college">College :</label>
              <input type="text" id="college" name="college" placeholder='Enter or Select College'/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="programme">Programme/Course :</label>
              <input type="text" id="programme" name="programme" placeholder="Enter or Select Programme/Course" className="p1" />
            </div>
            <div className="form-group">
              <button type="submit" className="search-button">Search</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
