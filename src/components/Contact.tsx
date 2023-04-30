import React from "react";
import SectionTitle from "./Typography/SectionTitle";
import Calendly from "./Calendly";
import ContactButton from "./Button/ContactButton";

const Contact = () => {
  return (
    <>
      <SectionTitle>Contact 🤝</SectionTitle>
      <div className="text-xl mx-16 mb-12">
        Feel free to connect with me on Linkedin or GitHub. I'm also open to 20
        minute coffe chats which you can schedule through my calendly below! I
        would love to chat anything about software engineering, education,
        games, and health. I look forward hearing from you!
      </div>

      <div className=" flex flex-wrap md:justify-evenly">
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
      </div>

      <Calendly />
    </>
  );
};

export default Contact;
