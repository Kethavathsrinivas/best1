import React from 'react'; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css'; // Custom styles

// Import background image
import backgroundBanner from './assets/background-banner.png';

// Import different images for each slide
import banner1Left from './assets/banner1-left.png';
import banner1Right from './assets/banner1-right.png';
import banner2Left from './assets/banner2-left.png';
import banner2Right from './assets/banner2-right.png';
import banner4Right from './assets/banner4-right.png';
import banner5Left from './assets/banner5-left.png';
import banner5Right from './assets/banner5-right.png';
import banner6Left from './assets/banner6-left.png';
import banner6Right from './assets/banner6-right.png';
import banner8Right from './assets/banner8-right.png';
import banner8Left from './assets/course-feature8.png';
import banner7Left from './assets/Group7-left.png';
import banner7Right from './assets/Group7-right.png';


import backgroundImage from './assets/background3.jpg'; // Replace with your background image
import practicePapersIcon from './assets/Best Online Coaching for CUET_ Study with CUET Experts - Besst.in_files/students.png'; // Replace with your icons
import studentsIcon from './assets/Best Online Coaching for CUET_ Study with CUET Experts - Besst.in_files/students.png';
import mcqsIcon from './assets/Best Online Coaching for CUET_ Study with CUET Experts - Besst.in_files/Group 13834 (1).png';
import subjectIcon from './assets/Best Online Coaching for CUET_ Study with CUET Experts - Besst.in_files/students.png';
import CoursesHome from './coursesHome/CoursesHome';
import SearchForm from './form/FormHome';
import TestimonialCarousel from './testimonialCarousel/TestimonialCarousel';

import c1 from './assets/cardimg/4478ff9024b692b860004cb7aaa1f43f.png';
import c2 from "./assets/cardimg/432d9280b2bd93e065bf1dcd14dfc11d.png";
import c3 from  "./assets/cardimg/c962f8f3520869897b37998bf3560539.png";
import NewsUpdates from './newsUpdates/NewsUpdates';
import Blog from './blog/Blog';
import QuizComponent from './quizComponent/QuizComponent';
import CurrentAffairs from './currentAffairs/CurrentAffairs';
import Join from './join/Join';
import Doubt from './doubt/Doubt';


const Home = () => {
  const slides = [
    { left: banner8Left, right: banner8Right },
    { left: banner7Left, right: banner7Right },
    { left: banner6Left, right: banner6Right },
    { left: banner1Left, right: banner1Right },
    { left: banner2Left, right: banner2Right },
    { left: banner4Right, right: banner2Right },
    { left: banner5Left, right: banner5Right }
  ];

  const settings = {
    dots: true, // Show dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    pauseOnHover: false,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />
  };

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="home-arrow home-prev-arrow" onClick={onClick}>
        &lt;
      </div>
    );
  }

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="home-arrow home-next-arrow" onClick={onClick}>
        &gt;
      </div>
    );
  }

  const cardsData = [
    {
      icon: practicePapersIcon,
      title: 'PRACTICE PAPERS',
      value: '2155+'
    },
    {
      icon: studentsIcon,
      title: 'STUDENTS',
      value: '4275'
    },
    {
      icon: mcqsIcon,
      title: "MCQ'S",
      value: '59807+'
    },
    {
      icon: subjectIcon,
      title: 'SUBJECT',
      value: '45'
    }
  ];


  return (
    <div>
    <div className="home-slider-container">
      <img
        className="background-image-home"
        src={backgroundBanner}
        alt="Background"
      />
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-full">
            {/* Left and Right Images */}
            <div className="home-slide-content">
              <img
                src={slide.left}
                alt={`Slide ${index + 1} Left`}
                className='left1'
              />
              <img
                src={slide.right}
                alt={`Slide ${index + 1} Right`}
                className='right1'
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
    

    <div className="home-cards-section">
      <img
        className="home-background-image"
        src={backgroundImage}
        alt="Background"
      />
      <div className="home-cards-container">
        <p className="intro-text">
          Our top educators, mentors have researched and made strategic planning to provide quality education and prepare you for academic career excellence. Our goal is to guide you in your exceptional learning journey to achieve your best performance.
        </p>
        {cardsData.map((card, index) => (
          <div key={index} className="home-card">
            <img src={card.icon} alt={`${card.title} Icon`} className="home-card-icon" />
            <div className="home-card-content">
              
              <p className="home-card-value">{card.value}</p>
              <h3 className="home-card-title">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>

    <section className="courses-home-section">
        <CoursesHome />
      </section>

      <section className="form-home-section">
        <SearchForm/>
      </section>

      <div class="besst-container">
      <div class="question-section">
  <h1 class="text-4xl font-bold text-black leading-tight">
    What BESST<br/>Provides?
  </h1>
  <p class="text-lg text-gray-800 mt-4">
    BESST is dedicated to providing a quality-based learning experience for students. The platform is designed methodologically, making learning progressive as well as interactive.
  </p>
</div>

  <div class="besst-cards-section">
    <div class="besst-card">
      <img src={c1} alt="Online Counseling"/>
      <h3>Online Counseling</h3>
      <p>Counseling For Admission</p>
    </div>
    <div class="besst-card">
      <img src={c2} alt="Online Classes"/>
      <h3>Online Classes</h3>
      <p>Classes for General Test paper for CUET</p>
    </div>
    <div class="besst-card">
      <img src={c3} alt="Other Competitive Exams"/>
      <h3>Other Competitive Exams</h3>
      <p>Competitive Exams</p>
    </div>
  </div>
</div>

<TestimonialCarousel/>

<NewsUpdates/>

<Blog/>

<QuizComponent/>

<CurrentAffairs/>

<Join/>

<Doubt/>

    </div>
  );
};

export default Home;
