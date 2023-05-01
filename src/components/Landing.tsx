import React from "react";
import KevinAvatar from "./KevinAvatar";
import ContactButton from "./Button/ContactButton";

const Landing = () => {
  return (
    <>
      <div className="flex h-full pt-20">
        <KevinAvatar />
        <div className="flex flex-col items-center w-1/2 h-full px-8 pt-12 text-2xl">
          <div className="w-2/3 ">
            Meet Kevin, a driven and enthusiastic{" "}
            <strong>full stack software engineer</strong> who is fueled by
            curiosity and passion.
          </div>

          <div className="flex flex-col items-center mt-12 space-y-6 md:justify-evenly">
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
        </div>
      </div>
    </>
  );
};

export default Landing;
