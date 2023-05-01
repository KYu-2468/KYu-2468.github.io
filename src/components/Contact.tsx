import React from "react";
import SectionTitle from "./Typography/SectionTitle";
import Calendly from "./Calendly";
import ContactButton from "./Button/ContactButton";

const Contact = () => {
  return (
    <>
      <SectionTitle>Contact</SectionTitle>
      <div className="mx-16 mb-12 text-xl">
        If you're interested in chatting about anything related to software
        engineering, education, games, or health, I'd love to connect with you!
        You can find me on LinkedIn or GitHub, or schedule a 20-minute coffee
        chat using the link to my Calendly below. I'm always excited to meet new
        people and learn about their experiences and perspectives. I look
        forward to hearing from you soon!
      </div>

      <div className="flex flex-wrap md:justify-evenly">
        <ContactButton
          text="Linkedin"
          textColor="text-white"
          buttonColor="bg-sky-600"
          linkURL="https://www.linkedin.com/in/kevinyu2468/"
        />

        <ContactButton
          text="GitHub"
          textColor="text-white"
          buttonColor="bg-black"
          linkURL="https://github.com/KYu-2468"
        />

        <ContactButton
          text="LeetCode"
          textColor="text-white"
          buttonColor="bg-red-600"
          linkURL="https://leetcode.com/KYu-2468/"
        />
      </div>

      <Calendly />
    </>
  );
};

export default Contact;
