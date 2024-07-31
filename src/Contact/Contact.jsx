import location from "./location.png";
import whatsapp from "./whatsapp.png";
import mail from "./mail.png";
import contact from "./contact.png";
import "./Contact.css";
import { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData({
      fullname: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="">
      <div className="text-center bg-purple-200 pt-[40px] pb-[40px]">
        <p className="text-[40px] font-sans font-bold">Contact Us</p>
        <p className="font-sans text-[20px]">Home / Services</p>
      </div>

      <div className="grid pl-[40px] pr-[40px] pt-[70px]">
        <div className="Contact_left px-[20px]">
          <h1 className="font-bold font-san mb-[30px]">
            <span className="main_heading">Contact Info</span>
            <div className="h-[3px] w-[60px] bg-purple-500"></div>
          </h1>
          <p className="font-sans text-balance flex gap-[10px] mt-[10px] mb-[30px] sub_para">
            We're here to assist you on your educational journey. Have
            questions, feedback, or need support? Feel free to reach out to us.
            Our dedicated team is ready to help.
          </p>

          <p className="font-sans text-balance flex gap-[10px] mt-[10px] mb-[30px]">
            <img src={location} className="h-[25px] mt-[10px]" />
            <p className="font-sans sub_para">
              Brahmaputra Exam Success Support Team Private Limited, 37, 2nd
              by-lane, B. R. Mazumdar Path, Baghorbori, Panjabari,
              Guwahati-781037, Assam
            </p>
          </p>
          <a
            href="#"
            className="font-sans text-balance flex gap-[10px] mb-[30px]"
          >
            <img src={whatsapp} className="h-[25px] " />
            <p className="font-sans sub_para">
              <span>8822403212</span>
            </p>
          </a>

          <a
            href="#"
            className="font-sans text-balance flex gap-[10px] mb-[30px]"
          >
            <img src={mail} className="h-[25px] " />
            <p className="font-sans sub_para">
              <span>info@besst.in</span>
            </p>
          </a>
          <a
            href="#"
            className="font-sans text-balance flex gap-[10px] mb-[30px]"
          >
            <img src={contact} className="h-[25px] " />
            <p className="font-sans text-bold sub_para">
              <span>9365834467</span>
            </p>
          </a>
        </div>
        <div className="Contact_right">
          <h1 className="font-sans font-bold">
            <span className="main_heading">Get In Touch</span>
            <div className="h-[3px] w-[60px] bg-purple-500"></div>
          </h1>

          <form onSubmit={handleSubmit} className="mt-[40px]">
            <div className=" flex gap-[20px]">
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                className=" main_input"
                value={data.fullname}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className=" main_input"
                value={data.email}
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              name="subject"
              className=" my-[40px] sub_input"
              value={data.subject}
              onChange={handleChange}
              placeholder="Subject"
            />
            <textarea
              className=" h-[100px] p-[20px] border-2 border-purple-300 rounded sub_input"
              placeholder="Message"
              name="message"
              value={data.message}
              onChange={handleChange}
            ></textarea>
            <button className="Submit w-[230px] h-[80px] text-center bg-purple-600 rounded font-bold text-white text-2xl text-sans">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="my-[20px]" data-wow-delay="0.15">
        <iframe
          title="Map"
          className="position relative rounded w-100 h-100"
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7163.665236548642!2d91.824!3d26.137!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1722322210670!5m2!1sen!2sin"
          // width="600"
          // height="450"
          style={{ minHeight: "350px", border: "0" }}
          allowfullscreen=""
          aria-hidden="false"
          // loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
