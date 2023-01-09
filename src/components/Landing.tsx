import React from "react";
import background from "../assets/video/background.mp4";

const Landing = () => {
  return (
    <div className="relative">
      <video
        className="w-screen -z-20"
        src={background}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="w-full h-full absolute top-0 left-0 flex flex-col items-center justify-center font-semibold text-white text-7xl">
        <div className="my-4">Hi there! I'm Kevin - </div>
        <div className="my-4">A software developer</div>
      </div>
    </div>
  );
};

export default Landing;
