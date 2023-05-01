import React, { useEffect } from "react";
import KevinAvatar from "./KevinAvatar";
import ContactButton from "./Button/ContactButton";
import "./Landing.css";

const Landing = () => {
  useEffect(() => {
    const elts = {
      text1: document.getElementById("text1")!,
      text2: document.getElementById("text2")!,
    };

    const texts = [
      "Meet Kevin",
      "a driven and",
      "enthusiastic",
      "software engineer",
      "who is fueled by",
      "curiosity and",
      "passion :)",
    ];

    const morphTime = 1;
    const cooldownTime = 0.25;

    let textIndex = texts.length - 1;
    let time: any = new Date();
    let morph = 0;
    let cooldown = cooldownTime;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];

    function doMorph() {
      morph -= cooldown;
      cooldown = 0;

      let fraction = morph / morphTime;

      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }

      setMorph(fraction);
    }

    function setMorph(fraction: any) {
      elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      fraction = 1 - fraction;
      elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      elts.text1.textContent = texts[textIndex % texts.length];
      elts.text2.textContent = texts[(textIndex + 1) % texts.length];
    }

    function doCooldown() {
      morph = 0;

      elts.text2.style.filter = "";
      elts.text2.style.opacity = "100%";

      elts.text1.style.filter = "";
      elts.text1.style.opacity = "0%";
    }

    function animate() {
      requestAnimationFrame(animate);

      let newTime: any = new Date();
      let shouldIncrementIndex = cooldown > 0;
      let dt = (newTime - time) / 1000;
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex++;
        }

        doMorph();
      } else {
        doCooldown();
      }
    }

    animate();
  }, []);

  return (
    <>
      <div className="flex h-full pt-20">
        <KevinAvatar />
        <div className="flex flex-col items-center w-1/2 h-full px-8 pt-12 text-2xl">
          <div className="w-2/3 ">
            <div id="container">
              <span id="text1"></span>
              <span id="text2"></span>
            </div>

            <svg id="filters" className="h-0">
              <defs>
                <filter id="threshold">
                  <feColorMatrix
                    in="SourceGraphic"
                    type="matrix"
                    values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 255 -140"
                  />
                </filter>
              </defs>
            </svg>
            {/* <i>
              Meet Kevin, a driven and enthusiastic{" "}
              <strong>full stack software engineer</strong> who is fueled by
              curiosity and passion.
            </i> */}
          </div>

          <div className="flex flex-col items-center pl-8 mt-12 space-y-6 md:justify-evenly">
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
