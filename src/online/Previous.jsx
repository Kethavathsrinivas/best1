import React from "react";
import Online from "./Online";
import three from "./blog-preview.png";

const PreviousContent = () => {
  // console.log(content_ser);

  const main_con = {
    con: [
      "In the pursuit of academic excellence, the significance of thorough exam preparation cannot be overstated. An invaluable tool in this journey is the Previous Year Question Bank, a treasure trove of insights that has proven to be a game-changer for countless students. BESST proudly offers a vast collection of previous year questions, meticulously curated to empower aspirants in shaping their careers.",
    ],
    heading_main_con:
      " Exploring Triumph: Harnessing the Strength of BESST's Previous Year Question Bank",
  };

  const rel_services = [
    {
      img: three,
      date: "NOVEMBER 14, 2023",
      content: "Optimize Your Preparation :Practice CUET Mock Tests with Us",
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
      ser_heading:
        "Navigating the Advantageous Terrain of Previous Year Question Banks",
      ser_par: [
        "Previous Year Question Banks serve as a beacon of strategic preparation, providing students with a firsthand understanding of the exam patterns, question formats, and the level of difficulty they can expect. It's a dynamic resource that transcends traditional study materials, offering a real-time glimpse into what lies ahead.",
      ],
    },
    {
      ser_sub_heading: "BESST's Extensive Collection:",
      ser_sub_content:
        "At BESST, we recognize the transformative potential of learning from the past. Our Previous Year Question Bank stands as a testament to our commitment to academic excellence. This extensive collection spans various exams, including CUET(UG), CUET(PG), and more. It's not just a compilation of questions; it's a comprehensive guide crafted to enhance your understanding of exam nuances.",
      ser_sub_main_heading: "Advantages of BESST's Previous Year Question Bank",
      sub_section: [
        {
          sub_section_heading: "1. Insight into Exam Patterns",
          sub_section_content: [
            "Our question bank unravels the mystery behind exam patterns, allowing you to familiarize yourself with the structure and format of CUET(UG), CUET(PG), and other exams. This insight is invaluable for developing effective strategies.",
          ],
        },
        {
          sub_section_heading: "2. Identifying Important Topics",
          sub_section_content: [
            "Through the careful selection of questions, we highlight recurring themes and important topics. This strategic approach ensures that your preparation is targeted and aligned with the exam's emphasis",
          ],
        },
        {
          sub_section_heading: "3. Time Management Mastery",
          sub_section_content: [
            "Practicing with previous year questions aids in refining your time management skills. You learn to allocate time efficiently, ensuring that you can navigate through the exam with confidence and precision.",
          ],
        },
        {
          sub_section_heading: "4. Benchmarking Performance",
          sub_section_content: [
            "Evaluate your progress by comparing your answers with the solutions provided. This benchmarking process is crucial for tracking improvement and focusing on areas that require additional attention.",
          ],
        },
      ],
    },

    {
      ser_heading: "Embark on Success: Register at BESST Today!",
      ser_par: [
        "As you embark on the journey towards academic success, BESST invites you to register and avail access to our extensive Previous Year Question Bank. Transform your exam preparation with the insights gained from years of testing, and position yourself for success in CUET(UG), CUET(PG), and beyond. Join us at BESST, where your aspirations meet excellence.",
        "Register now at BESST to unlock the vast repository of Previous Year Questions. Elevate your exam preparation and shape a successful academic future.",
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

export default PreviousContent;
