// src/App.js
import React, { useState } from 'react';

// Import images
import Image1 from './assets/image1.png';
import Image2 from './assets/image2.png';
import Image3 from './assets/image3.png';
import Image4 from './assets/image4.png';
import Image5 from './assets/image5.png';
import Image6 from './assets/image6.png';

const App = () => {
  const [basicFee, setBasicFee] = useState(0);
  const [gst, setGst] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [coupon, setCoupon] = useState('');

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    const fee = 253.39;
    const gstValue = 45.61;

    if (checked) {
      setBasicFee(basicFee + fee);
      setGst(gst + gstValue);
    } else {
      setBasicFee(basicFee - fee);
      setGst(gst - gstValue);
    }

    setTotalAmount(basicFee + gst);
  };

  const handleCouponChange = (e) => {
    setCoupon(e.target.value);
  };

  const applyCoupon = () => {
    // Apply coupon logic here
    console.log(`Coupon applied: ${coupon}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row flex-1">
        {/* 65% Section */}
        <div className="lg:flex-[0.65] p-10 order-last lg:order-first">
          <div className="flex items-center mb-6">
            <h1 className="text-4xl font-bold mr-4 inline-block">
              Common University Entrance Test <span className="inline">(UG)</span>
            </h1>
            <span className="bg-yellow-500 text-white px-4 py-1 rounded whitespace-nowrap">Limited Offer</span>
          </div>
          <div className="flex space-x-4 mb-6">
            <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
              CUET Mocks Test Series
            </button>
            <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
              CUET Online Subscription
            </button>
          </div>
          <p className="text-left text-gray-800 mb-6">
            The program combines live online instruction, independent learning activities, and practical application for a well-rounded learning experience.
          </p>
          <div className="border rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">Customization Available</h2>
            <p className="text-gray-800 mb-4">
              Option for customization is also available. Select your choice of subjects from the list below, to create your program. The more the number of subjects in your cart, the greater will be the fee waiver.
            </p>
            <h3 className="text-xl font-bold mb-2">Language</h3>
            <hr className="mb-4"/>
            <div className="flex flex-col mb-6">
              <div className="flex items-center mb-2">
                <input type="checkbox" id="english" name="english" className="h-4 w-4 rounded-full" onChange={handleCheckboxChange} />
                <label htmlFor="english" className="ml-2 text-gray-800">English</label>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Subject</h3>
            <hr className="mb-4"/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {/* Humanities */}
              <div>
                <h4 className="text-lg font-semibold mb-2">Humanities</h4>
                {['Anthropology', 'Environmental Science', 'Geography', 'Economics', 'Political Science', 'Sociology', 'History', 'Psychology', 'Legal Studies', 'Agriculture', 'Teaching Aptitude'].map(subject => (
                  <div key={subject} className="flex items-center mb-2">
                    <input type="checkbox" id={subject.toLowerCase().replace(/ /g, '_')} name={subject.toLowerCase().replace(/ /g, '_')} className="h-4 w-4 rounded-full" onChange={handleCheckboxChange} />
                    <label htmlFor={subject.toLowerCase().replace(/ /g, '_')} className="ml-2 text-gray-800">{subject}</label>
                  </div>
                ))}
              </div>
              {/* Science */}
              <div>
                <h4 className="text-lg font-semibold mb-2">Science</h4>
                {['Physics', 'Chemistry', 'Biology', 'Maths'].map(subject => (
                  <div key={subject} className="flex items-center mb-2">
                    <input type="checkbox" id={subject.toLowerCase()} name={subject.toLowerCase()} className="h-4 w-4 rounded-full" onChange={handleCheckboxChange} />
                    <label htmlFor={subject.toLowerCase()} className="ml-2 text-gray-800">{subject}</label>
                  </div>
                ))}
              </div>
              {/* Commerce */}
              <div>
                <h4 className="text-lg font-semibold mb-2">Commerce</h4>
                {['Accountancy', 'Business Studies'].map(subject => (
                  <div key={subject} className="flex items-center mb-2">
                    <input type="checkbox" id={subject.toLowerCase().replace(/ /g, '_')} name={subject.toLowerCase().replace(/ /g, '_')} className="h-4 w-4 rounded-full" onChange={handleCheckboxChange} />
                    <label htmlFor={subject.toLowerCase().replace(/ /g, '_')} className="ml-2 text-gray-800">{subject}</label>
                  </div>
                ))}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">General Test</h3>
            <hr className="mb-4"/>
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Aptitude</h4>
              <div className="flex items-center">
                <input type="checkbox" id="general_test" name="general_test" className="h-4 w-4 rounded-full" onChange={handleCheckboxChange} />
                <label htmlFor="general_test" className="ml-2 text-gray-800">GENERAL TEST</label>
              </div>
            </div>
          </div>
        </div>
        
        {/* 35% Section */}
        <div className="lg:flex-[0.35] border rounded-lg p-6 mb-6">
          <div className="border rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">This Course Includes</h2>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <img src={Image1} alt="Feature 1" className="w-16 h-16 object-cover rounded-lg" />
                <p className="text-gray-800">10 Mock tests for each subject</p>
              </div>
              <div className="flex items-center space-x-4">
                <img src={Image2} alt="Feature 2" className="w-16 h-16 object-cover rounded-lg" />
                <p className="text-gray-800">Brief analysis of the mock tests</p>
              </div>
              <div className="flex items-center space-x-4">
                <img src={Image3} alt="Feature 3" className="w-16 h-16 object-cover rounded-lg" />
                <p className="text-gray-800">Practice tests / Papers</p>
              </div>
              <div className="flex items-center space-x-4">
                <img src={Image4} alt="Feature 4" className="w-16 h-16 object-cover rounded-lg" />
                <p className="text-gray-800">CUET MOCK REGISTRATION FORM</p>
              </div>
              <div className="flex items-center space-x-4">
                <img src={Image5} alt="Feature 5" className="w-16 h-16 object-cover rounded-lg" />
                <p className="text-gray-800">POST EXAM CSAS PORTAL PHASE I AND PHASE II FORM (DELHI UNIVERSITY)</p>
              </div>
              <div className="flex items-center space-x-4">
                <img src={Image6} alt="Feature 6" className="w-16 h-16 object-cover rounded-lg" />
                <p className="text-gray-800">Study Materials</p>
              </div>
            </div>
          </div>
          <div className="border rounded-lg p-6">
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between items-center">
                <label htmlFor="basicFee" className="text-gray-800">Basic Fee</label>
                <input type="text" id="basicFee" value={basicFee.toFixed(2)} readOnly className="border rounded px-4 py-2" />
              </div>
              <div className="flex justify-between items-center">
                <label htmlFor="gst" className="text-gray-800">GST</label>
                <input type="text" id="gst" value={gst.toFixed(2)} readOnly className="border rounded px-4 py-2" />
              </div>
              <div className="flex justify-between items-center">
                <label htmlFor="totalAmount" className="text-gray-800">Total Amount</label>
                <input type="text" id="totalAmount" value={totalAmount.toFixed(2)} readOnly className="border rounded px-4 py-2" />
              </div>
              <div className="flex items-center">
                <input type="text" placeholder="Enter Coupon" value={coupon} onChange={handleCouponChange} className="border rounded px-4 py-2 flex-1" />
                <button onClick={applyCoupon} className="bg-blue-500 text-white px-4 py-2 rounded ml-2">Apply</button>
              </div>
              <button className="bg-red-500 text-white px-4 py-2 rounded w-full">Proceed to Pay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
