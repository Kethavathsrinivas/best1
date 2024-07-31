import React from "react";
import Online from "./Online";
import three from "./blog-preview.png";

const StudyContent = () => {
  // console.log(content_ser);

  const main_con = {
    con: [
      "In the digital age, education has transcended traditional boundaries, and so has the way we prepare for exams. Downloadable study materials have emerged as a cornerstone of efficient exam preparation, offering students unparalleled accessibility, flexibility, and a wealth of resources at their fingertips. At BESST, we recognize the transformative potential of downloadable study materials, and we have tailored our offerings to empower students on their academic journey",
      "Gone are the days of lugging around heavy textbooks and voluminous notes. Downloadable study materials redefine the landscape of exam preparation by providing instant access to comprehensive resources. Students can seamlessly integrate these materials into their study routine, enabling a more dynamic and personalized learning experience. Whether it's revisiting key concepts, practicing sample questions, or delving into advanced topics, downloadable study materials offer a versatile approach to learning.",
    ],
    heading_main_con:
      " Igniting Academic Triumph: The Potential of Downloadable Study Materials",
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
      ser_sub_heading: "BESST: Your Gateway to Exam Excellence",
      ser_sub_content:
        "At BESST, we understand the unique challenges faced by students preparing for entrance exams, particularly those aspiring for CUET(UG) and CUET(PG). Our portal is meticulously designed to cater to the needs of CUET students, offering a diverse range of downloadable study materials crafted by subject-matter experts.",
      ser_sub_main_heading:
        "Benefits of BESST's Downloadable Study Materials for CUET Exams",
      sub_section: [
        {
          sub_section_heading: "1. Comprehensive Coverage",
          sub_section_content: [
            "Our study materials cover the entire spectrum of CUET syllabi, ensuring that students are well-equipped with the knowledge required to excel in the exams.",
          ],
        },
        {
          sub_section_heading: "2. Exam-Focused Content",
          sub_section_content: [
            "Tailored to the specific patterns of CUET(UG) and CUET(PG), our downloadable study materials emphasize key areas and provide insights into the exam structure, fostering strategic preparation.",
          ],
        },
        {
          sub_section_heading: "3. Accessible Anytime, Anywhere",
          sub_section_content: [
            "With our downloadable resources, students have the flexibility to study at their own pace and convenience, eliminating the constraints of time and location.",
          ],
        },
      ],
    },

    {
      ser_heading: "Realizing Success: Testimonials from Previous Years",
      ser_par: [
        "Our commitment to excellence is reflected in the success stories of students who utilized BESST's downloadable study materials. Many have not only aced their exams but have also praised the clarity, relevance, and effectiveness of our resources in simplifying complex concepts.",
      ],
    },
    {
      ser_heading: "Register Now on BESST and Elevate Your Preparation",
      ser_par: [
        "As you embark on your academic journey, let BESST be your guiding light. Register now to avail yourself of our exclusive downloadable study materials designed to streamline your CUET(UG) and CUET(PG) preparation. Join the community of successful students who have harnessed the power of BESST and experienced the difference in their academic endeavors.",
        "Register on BESST today and gain access to meticulously curated downloadable study materials. Elevate your preparation for CUET(UG) and CUET(PG) with the trusted resources that have propelled previous year's students to success.",
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

export default StudyContent;
