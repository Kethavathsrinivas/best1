import React from "react";
import Online from "./Online";
import three from "./blog-preview.png";

const CounselingContent = () => {
  // console.log(content_ser);

  const main_con = {
    con: [
      "In the dynamic landscape of higher education, gaining admission to prestigious central universities is a goal that many students aspire to achieve. To ease this journey, BESST.in proudly offers a unique blend of counseling and mock registration services, ensuring that aspirants are well-prepared and confident as they navigate the competitive admission process.",
    ],
    heading_main_con:
      " Navigating Success: Counselling and Mock Registration for Central University Admissions with BESST.in",
  };

  const rel_services = [
    {
      img: three,
      date: "NOVEMBER 14  , 2023",
      content: 
      "Optimize Your Preparation   :Practice CUET Mock Tests with Us",
    },
    {
      img: three,
      date: "NOVEMBER 14, 2023",
      content:
        "Igniting Academic Triumph: The Potential of Downloadable Study Materials",
    },
    {
      img: three,
      date: "NOVEMBER 14, 2023",
      content:
        "Navigating Success: Counselling and Mock Registration for Central University Admissions with BESST.in",
    },
    {
      img: three,
      date: "NOVEMBER 14, 2023",
      content:
        "Exploring Triumph: Harnessing the Strength of BESST's Previous Year Question Bank",
    },
  ];

  const ser_card = [
    {
      card_con: "",
      btn_con: "",
    },
    {
      card_con: "",
      btn_con: "",
    },
  ];

  const content_ser = [
    {
      ser_heading: "Embarking on the Admission Journey",
      ser_par: [
        "The path to securing admission in central universities can be intricate, demanding careful navigation and strategic preparation. Recognizing this, BESST.in introduces comprehensive counseling and mock registration services, designed to empower students with the knowledge and confidence needed to successfully tread the admission landscape.",
      ],
    },

    {
      ser_heading: "BESST.in's Impactful Counselling Services",
      ser_par: [
        "BESST.in has played a pivotal role in shaping the academic trajectories of hundreds of students through its insightful counseling services. Our experienced team of counselors understands the nuances of various central university admission processes, offering personalized guidance to students based on their aspirations, strengths, and academic backgrounds. Whether it's clarifying doubts about courses, understanding eligibility criteria, or providing insights into the selection process, our counseling services are tailored to empower students to make informed decisions.",
      ],
    },
    {
      ser_heading:
        "Mock Registration: Bridging the Gap Between Aspiration and Reality",
      ser_par: [
        "The journey to central university admission often involves overcoming challenges unique to each institution. BESST.in's dedicated team has facilitated this process by conducting mock registrations, simulating the actual admission procedure. This hands-on experience not only familiarizes students with the intricacies of the registration system but also helps them navigate potential obstacles seamlessly. Through mock tests and realistic scenarios, we ensure that students are well-acquainted with the entire admission process, leaving no room for surprises on the actual day.",
        "Empower your journey toward admission success by registering with BESST.in today. Avail the benefits of our insightful counseling services and realistic mock registrations, providing you with the knowledge and confidence needed to secure admission in central universities. Join the ranks of students who have benefited from our comprehensive guidance.",
        "Register at BESST.in now to access our exclusive counseling and mock registration services. Elevate your chances of admission success in central universities with BESST.in's unparalleled support.",
      ],
    },
  ];

  return (
    <Online
      main_con={main_con}
      rel_services={rel_services}
      ser_card={ser_card}
      content_ser={content_ser}
    />
  );
};

export default CounselingContent;
