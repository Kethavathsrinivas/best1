import React from 'react';
import './NewsUpdates.css';

const NewsUpdates = () => {
    const updates = [
        {
            title: "The National Testing Agency (NTA) declared the CUET UG Result 2024...",
            admin: "admin",
            date: "07/28/2024"
        },
        {
            title: "Display of Final Answer Keys of the Common University Entrance Test [CUET (UG)] 2024...",
            admin: "admin",
            date: "07/25/2024"
        },
        {
            title: "Conduct of the CUET (UG) – 2024 retest for affected candidates View More...",
            admin: "admin",
            date: "07/15/2024"
        },
        {
            title: "Display of Provisional Answer Keys, Question Paper, and Scanned Images of OMR Sheets with Recorded Responses for Answer Key Challenge for Common University Entrance Test [CUET (UG)] – 2024...",
            admin: "",
            date: "07/08/2024"
        },
        {
            title: "Inviting Online Application Forms for the Common University Entrance Test [CUET (UG) - 2024] for Admission...",
            admin: "",
            date: "02/27/2024"
        }
    ];

    return (
        <div className="news-updates-container">
            <div className="news-left-box">
                <img src="/assets/news-image.jpg" alt="CUET news update" />
                <div className="news-left-box-content">
                    <p>The National Testing Agency (NTA) declared the CUET UG Result 2024...s</p>
                    <p className='news-smalltext'>The National Testing Agency (NTA) declared the CUET UG Result 2024...</p>
                    <p className='news-date'>07/28/2024</p>
                </div> 
            </div>
            <div className="news-right-box">
                <h2>News & Updates</h2>
                {updates.map((update, index) => (
                    <div className="news-update-item" key={index}>
                        <p>{update.title}</p>
                        <div className="news-date-admin">
                            {update.admin && <span>{update.admin}</span>}
                            <span className="news-date">{update.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsUpdates;
