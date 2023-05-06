import React from "react";
import SectionTitle from "./Typography/SectionTitle";
import Calendly from "./Calendly";
import ContactButton from "./Button/ContactButton";

const Contact = () => {
  return (
    <>
      <SectionTitle>Contact</SectionTitle>
      <div className="mx-6 mb-12 text-base md:mx-16 md:text-xl">
        Schedule a 20-minute coffee chat below! I'm always excited to meet new
        people and learn about their experiences and perspectives. I look
        forward to meeting you soon!
      </div>

      <div className="flex flex-col items-center mb-6 space-y-6 md:flex-row md:flex-wrap md:justify-evenly">
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

        <ContactButton
          text="LeetCode"
          textColor="text-white"
          buttonColor="bg-red-600"
          linkURL="https://leetcode.com/KYu-2468/"
        />

        <ContactButton
          text="LeetCode"
          textColor="text-white"
          buttonColor="bg-red-600"
          linkURL="https://leetcode.com/KYu-2468/"
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
