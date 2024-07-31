import React from 'react';
import './watsapp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = () => {
  const predefinedMessage = `Hi,\n\nBESST (Brahmaputra Exam Success Support Team) is a secure portal that helps students achieve their Common University Entrance Test (CUET) dream.\n\nIt provides practice/mock papers, live classes by a panel of expert faculties. It also provides a simulation environment to help students practice for the following:\n\na. Actual NTA Registration process (environment),\nb. Actual NTA Examination (environment),\nc. How to apply to various universities (environment).\n\nRegister now\nhttps://www.besst.co.in`;

  const encodedMessage = encodeURIComponent(predefinedMessage);

  const handleClick = () => {
    alert("You are being redirected to WhatsApp.");
  };

  return (
    <a
      href={`https://wa.me/918133836741?text=${encodedMessage}`}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      title="Chat with us on WhatsApp"
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faWhatsapp} size="2x" />
    </a>
  );
};

export default WhatsAppButton;
