import React from "react";
import SectionTitle from "./Typography/SectionTitle";
import linkedInIcon from "../assets/img/linkedin-resume-icon.png";
import emailIcon from "../assets/img/email-addresspresume-icon.png";

const Contact = () => {
  const iconStyle = "w-12 h-12";
  return (
    <>
      <SectionTitle>Contact 🤝</SectionTitle>
      <div className="ml-14 mb-8 text-lg">
        I'm always happy to connect!
        <br />
        PS: I'm more likely to connect if you send a message 😊
      </div>
      <div className=" flex justify-evenly mb-4">
        <a
          className="flex flex-nowrap items-center"
          href="https://www.linkedin.com/in/kevinyu2468/"
        >
          <button className="transition ease-in-out hover:-translate-y-1 hover:scale-125 duration-700">
            <img className={iconStyle} src={linkedInIcon} alt="LinkedIn" />
          </button>
          <span className="ml-4 text-2xl">linkedin.com/in/kevinyu2468/</span>
        </a>
        <div className="flex flex-nowrap items-center">
          <img className={iconStyle} src={emailIcon} alt="Email" />
          <span className="ml-4 text-2xl">Kevin.Yu.2468@protonmail.com</span>
        </div>
      </div>
    </>
  );
};

export default Contact;
