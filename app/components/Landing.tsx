"use client";

import React, { useState, lazy, Suspense } from "react";
import ContactButton from "./Button/ContactButton";
import "./Landing.css";
import { TypeAnimation } from "react-type-animation";
import Calendly from "./Calendly";
import LoadingTriangle from "./Loading/LoadingTriangle";
import ButtonWrapper from "./Button/ButtonWrapper";
const profileImg = "./img/profile-img-square.webp";
const KevinAvatar = lazy(() => import("./KevinAvatar"));

const Landing = () => {
  const [is3DModelActivated, setIs3DModelActivated] = useState(false);

  function handle3DModelActivation() {
    setIs3DModelActivated(!is3DModelActivated);
  }

  return (
    <>
      <div className="flex flex-col items-center h-full pt-24 md:flex-row">
        <div className="flex items-center justify-center flex-grow w-1/2 h-full">
          {is3DModelActivated ? (
            <Suspense fallback={<LoadingTriangle />}>
              <KevinAvatar />
            </Suspense>
          ) : (
            <Image />
          )}
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
            <button onClick={handle3DModelActivation}>
              <ButtonWrapper>
                {is3DModelActivated ? "My Photo" : "My 3D Model"}
              </ButtonWrapper>
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
    <div className="flex items-center justify-center h-40 md:h-60 xl:h-3/4 md:ml-8">
      <img
        className="h-40 rounded-full shadow-2xl shadow-black xl:h-96 md:h-72 dark:shadow-white"
        src={profileImg}
        alt="profile"
      />
    </div>
  );
};

export default Landing;
