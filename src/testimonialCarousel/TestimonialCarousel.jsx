import React, { useRef, useState } from 'react';
import './TestimonialCarousel.css';

const testimonialData = [
    {
        imageURL: "/assets/testimonial-video.mp4",
        name: "Mrigakhi Mahanta",
        content: `My name is Mrigakhi Mahanta. I have been using BESST for a few months. BESST (Brahmaputra Exam Success Support Team) conducts mock tests and provides live classes, which I think, is very important for anyone who would appear for any competitive exams. Being the user of the portal, I would like to say that I am very much glad to be a part of this team as it helps me to learn in quite a short span of time. It has also helped me to identify my weak points.`
    },
    {
        imageURL: "/assets/tonmoy.png",
        name: "Tonmoy Kashyap",
        content: `During my CUET exam preparations, I took live classes on General Test papers provided by www.besst.in. I also practised their mock tests.`
    },
    {
        imageURL: "/assets/rukh.png",
        name: "Rukh Acharya",
        content: `I'm glad that I got to learn about CUET and its fundamentals from BESST. It helped me get into a college in Noida. I'm thankful to you all`
    },
    {
        imageURL: "/assets/gunjan.svg",
        name: "Parashmoni Boruah",
        content: `I have taken online classes with Kaushik Sir; he was the perfect trainer for me I could have imagined. He has been very patient with me and always very supportive. He starts from basics and gradually gets into advanced topics. The study material that sir provided was very useful; students with any level of knowledge can start, learn, and excel. Its practice papers and mock test papers helped me a lot, and the materials of Cuet and UG are very informative. Thank you sir for your support 😎`
    },
    {
        imageURL: "/assets/gunjan.svg",
        name: "Chumi",
        content: "This web portal is very much useful for any kind of competitive exam preparation.. Specially for cuet.. And also provides live classes...mock tests are also available.. There are lots of questions for every subject for regular practice.. Thank you BESST for providing best materials."
    },
    {
        imageURL: "/assets/gunjan.svg",
        name: "Krishna Maheshwari",
        content: "The material provided is quite helpful. A great initiative. Wishing more success and growth to BESST!"
    }
];

const TestimonialCarousel = () => {
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        const items = carouselRef.current.children;
        const totalItems = items.length;
        items[currentIndex].style.display = 'none';
        const newIndex = (currentIndex - 1 + totalItems) % totalItems;
        setCurrentIndex(newIndex);
        items[newIndex].style.display = 'flex';
    };

    const handleNextClick = () => {
        const items = carouselRef.current.children;
        const totalItems = items.length;
        items[currentIndex].style.display = 'none';
        const newIndex = (currentIndex + 1) % totalItems;
        setCurrentIndex(newIndex);
        items[newIndex].style.display = 'flex';
    };

    return (
        <div className="test-carousel-container">
            <h2 className="test-carousel-title">Success Stories & Testimonials</h2>
            <button className="test-carousel-button test-prev" onClick={handlePrevClick}>❮</button>
            <div className="test-carousel" ref={carouselRef}>
                {testimonialData.map((testimonial, index) => (
                    <div className="test-carousel-item" key={index} style={{ display: index === 0 ? 'flex' : 'none' }}>
                        <div className="test-image-container">
                            {testimonial.imageURL.endsWith('.mp4') ? (
                                <video src={testimonial.imageURL} controls />
                            ) : (
                                <img src={testimonial.imageURL} alt={testimonial.name} />
                            )}
                        </div>
                        <div className="test-content-container">
                            <h2>{testimonial.name}</h2>
                            <p>{testimonial.content}</p>
                            <button>View Full Story <div className="test-icon-container">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 000 2h7.59L2.3 15.29a1 1 0 001.42 1.42L15 5.41V13a1 1 0 002 0V3a1 1 0 00-1-1H6z" clipRule="evenodd"/>
                                </svg>
                            </div></button>
                        </div>
                    </div>
                ))}
            </div>
            <button className="test-carousel-button test-next" onClick={handleNextClick}>❯</button>
            <div className="test-dots-container">
                {testimonialData.map((_, index) => (
                    <span key={index} className={`test-dot ${index === currentIndex ? 'active' : ''}`}></span>
                ))}
            </div>
        </div>
    );
};

export default TestimonialCarousel;
