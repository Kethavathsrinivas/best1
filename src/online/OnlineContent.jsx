import React from "react";
import Online from "./Online";
import three from "./blog-preview.png";

const OnlineContent = () => {
  // console.log(content_ser);

  const main_con = {
    con: [
      "In the fast-evolving landscape of education, online classes have emerged as a revolutionary force, transforming the traditional learning paradigm. With the advent of digital technology, the educational sphere has witnessed a significant shift towards virtual learning, offering students unparalleled flexibility,accessibility, and a wealth of educational resources at their fingertips.",
    ],
    heading_main_con:
      " Embracing The Future Of Education: Navigating The World Of Online Classes",
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
      card_con:
        "Unlock boundless knowledge from the comfort of your home with our online classes subscription – where learning knows no limits!",
      btn_con: "CUET Online Subscription",
    },
    {
      card_con: "Time table for CUET(UG) online classes",
      btn_con: "Download Class Schedule",
    },
  ];

  const content_ser = [
    {
      ser_heading: "Unlocking the Potential of Online Classes",
      ser_par: [
        "In today's interconnected world, the term online classes encompasses a broad spectrum of educational experiences. From virtual classrooms and web-based courses to remote learning opportunities and digital resources, students now have the ability to tailor their learning journeys to suit their individual needs and preferences.",
        "Live virtual classes have become the cornerstone of online education, providing real-time engagement between educators and students. Educational platforms offering interactive online courses have created dynamic and immersive learning experiences, fostering collaboration and knowledge retention.",
      ],
    },
    {
      ser_heading: "The Rise of E-Learning: A Digital Revolution",
      ser_par: [
        "Digital classrooms have redefined the traditional classroom setup, breaking down geographical barriers and allowing students to connect with educators from anywhere in the world. Internet classes have brought about a paradigm shift in distance education, enabling students to pursue quality education without the constraints of physical proximity",
        "Webinars and online tutorials cater to diverse learning needs, offering in-depth insights into specific subjects. Whether it's honing skills in a particular discipline or seeking extra support in challenging topics, online classes provide a personalized and targeted approach to education.",
      ],
    },
    {
      ser_heading: "Benefits of Online Classes",
      ser_par: [
        "Online classes offer a myriad of benefits, including flexibility in scheduling, self-paced learning, and the ability to revisit lessons for better understanding. Students can access a wealth of resources, collaborate with peers globally, and receive personalized attention from educators.",
      ],
    },
    {
      ser_heading: "Why Choose Online Classes with BESST",
      ser_par: [
        "As the educational landscape continues to evolve, BESST stands out as a beacon of excellence in online classes. Offering a comprehensive array of courses and resources, BESST is committed to providing students with the ultimate solution and guide for exam preparation.",
        "Embark on a virtual classroom experience with BESST and join a community of motivated learners. Our online classes are meticulously designed to align with your academic goals, ensuring a seamless and effective learning experience.",
        "In conclusion, the world of education is undergoing a transformative journey, and online classes are at the forefront of this revolution. Embrace the future of learning with BESST's online classes – where excellence meets convenience. Join us in shaping a brighter tomorrow through the power of online education. Ready to elevate your learning experience? Join BESST's online classes today and unlock the ultimate solution for your exam preparation",
      ],
    },
    {
      ser_sub_heading: "Salient features of online classes",
      ser_sub_content:
        "At BESST, our online classes are meticulously designed to offer a transformative learning experience tailored to the needs of modern learners. Our commitment to excellence is reflected in the salient features of our online class schedule",
      sub_section: [
        {
          sub_section_heading: "1. Expert Faculties",
          sub_section_content: [
            "Our team comprises seasoned educators and industry experts who bring a wealth of knowledge and practical insights to every virtual classroom session. With years of experience in their respective fields, our instructors empower students with the latest industry trends and academic expertise.",
          ],
        },
        {
          sub_section_heading: "2. Interactive Classes",
          sub_section_content: [
            "We believe in fostering active engagement and meaningful interaction among our students. Through dynamic virtual classrooms, students participate in lively discussions, collaborate on projects, and engage in real-world problem-solving, creating a vibrant learning community that transcends physical boundaries.",
          ],
        },
        {
          sub_section_heading: "3. Recorded Videos",
          sub_section_content: [
            "Recognizing the diverse learning styles and commitments of our students, we provide access to recorded lectures and supplementary materials. This flexibility allows students to revisit lectures, review complex concepts, and study at their own pace, ensuring a personalized learning experience that accommodates individual preferences and schedules.",
          ],
        },
        {
          sub_section_heading: "4. Doubt Resolution",
          sub_section_content: [
            "At BESST, we prioritize student success and academic support. Our dedicated faculty members and support staff are readily available to address student queries, clarify doubts, and provide personalized guidance throughout the learning journey. With responsive communication channels and timely assistance, we empower students to overcome challenges and thrive academically.",
          ],
        },
        {
          sub_section_heading: "5. Convenient Accessibility",
          sub_section_content: [
            "With BESST's online classes, learning knows no bounds. Our platform offers unparalleled accessibility, allowing students to access course materials, participate in discussions, and engage with peers from anywhere with an internet connection. Whether at home, in transit, or abroad, students can seamlessly integrate learning into their daily lives, maximizing convenience without compromising quality.",
            "At BESST, we are committed to redefining the online learning experience through innovation, excellence, and student-centricity. Join us and embark on a journey of discovery, growth, and academic achievement like never before.",
          ],
        },
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

export default OnlineContent;
