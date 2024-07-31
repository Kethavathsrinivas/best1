import React, { useState } from 'react';
import './Doubt.css';

const faqs = [
  {
    question: "How to register/enroll at BESST?",
    answer: "You can register at BESST by signing up with your email id and mobile number."
  },
  {
    question: "Is registration free?",
    answer: "Yes, registration at BESST is free of cost."
  },
  {
    question: "What are the courses available at BESST?",
    answer: "The courses available at BESST are for CUET (UG), CUET (PG), Class X (SEBA), Class XII (NCERT) and NTSE."
  },
  {
    question: "Are mock tests available at BESST?",
    answer: "Yes, it is available. For CUET (UG) mock tests are designed as per NTA computer based test set up. Students can feel the real exam environment in the simulation."
  },
  {
    question: "Are free subscriptions available?",
    answer: "Yes, free subscriptions are especially available for CUET (UG) course."
  }
];

function redirectToWhatsApp() {
  window.location.href = 'https://wa.me/8133836741';
}

function redirectToEmail() {
  window.location.href = 'mailto:support@example.com';
}

const Doubt = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    if (activeIndex === index) {
      setActiveIndex(-1); // Collapse if the same index is clicked
    } else {
      setActiveIndex(index); // Expand the clicked index
    }
  };

  return (
    <div className="doubt-container">
      <div className="doubt-content">
        <h1 className="doubt-title">Have any doubt?</h1>
        <p className="doubt-description">
          For more general questions about BESST, check out our dedicated FAQs.
        </p>
        <button className="doubt-faq-button">Check FAQs</button>
      </div>
      <div className="doubt-cards-container">
        {faqs.map((faq, index) => (
          <div key={index} className="doubt-card">
            <div
              className={`doubt-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFaq(index)}
            >
              {faq.question}
              <span className="doubt-toggle">
                {activeIndex === index ? '^' : '+'}
              </span>
            </div>
            {activeIndex === index && <div className="doubt-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
      <div className="doubt-contact-box">
        <div className="doubt-contact-content">
            <div>
          <h2 className="doubt-contact-title">Start a conversation</h2>
          <p className="doubt-contact-description">
            Our help and support teams are available to talk with you.
          </p>
          </div>
          <div className="doubt-contact-buttons">
      <button className="doubt-button whatsapp" onClick={redirectToWhatsApp}>
        <img src="../assets/wh.png" alt="WhatsApp" />
        Message
      </button>
      <button className="doubt-button email" onClick={redirectToEmail}>
        <img src="../assets/Email-icon.jpg" alt="Email" />
        Email Us
      </button>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Doubt;
