"use client";

import React, { useState } from "react";
import KevinAvatar from "./KevinAvatar";
import ContactButton from "./Button/ContactButton";
import "./Landing.css";
import { TypeAnimation } from "react-type-animation";
import Calendly from "./Calendly";
const profileImg = "./img/profile-img.webp";

const Landing = () => {
  const [is3DModelActivated, setIs3DModelActivated] = useState(false);

  function handle3DModelActivation() {
    setIs3DModelActivated(!is3DModelActivated);
  }

  return (
    <>
      <div className="flex h-full pt-24">
        <div className="flex items-center justify-center w-1/2">
          {is3DModelActivated ? <KevinAvatar /> : <Image />}
        </div>
        <div className="flex flex-col items-center w-1/2 h-full px-2 pt-12 text-2xl">
          <div className="h-9">
            <TypeAnimation
              className="text-xl md:text-3xl"
              sequence={[
                "👋 Hey there!",
                2000,
                "👈 I'm Kevin",
                2000,
                "I'm driven and enthusiastic 🧠",
                1000,
                "I'm a full stack engineer 📱",
                2000,
                "I'm fueled by curiosity and passion 🧐",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </div>

          <div className="flex flex-col items-center w-1/2 mt-12">
            <button
              onClick={handle3DModelActivation}
              className="font-bold text-white bg-red-600 btn-primary"
            >
              {is3DModelActivated ? "Stop" : "Start"} 3D
            </button>
            <ContactButton
              text="Linkedin"
              textColor="text-white"
              buttonColor="bg-sky-600"
              linkURL="https://www.linkedin.com/in/kevinyu2468/"
            />

            <ContactButton
              text="GitHub"
              textColor="text-white"
              buttonColor="bg-black dark:bg-neutral-800"
              linkURL="https://github.com/KYu-2468"
            />

            <Calendly />
          </div>
        </div>
      </div>
    </>
  );
};

const Image = () => {
  return (
    <div className="flex items-center justify-center w-full md:ml-8">
      <img
        className="w-4/5 shadow-lg md:w-full shadow-black rounded-xl xl:w-4/5"
        src={profileImg}
        alt="profile"
      />
    </div>
  );
};

export default Landing;
