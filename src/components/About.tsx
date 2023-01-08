import React from "react";
import profileImg from "../assets/img/profile-img.png";
import Content from "./Typography/Content";
import SectionTitle from "./Typography/SectionTitle";
import Title from "./Typography/Title";

const About = () => {
  return (
    <>
      <SectionTitle>About me</SectionTitle>
      <div className="flex ">
        <Image />
        <Info />
      </div>
    </>
  );
};

const Image = () => {
  return (
    <div className="w-1/2 p-4 flex items-center justify-center">
      <img src={profileImg} alt="profile" />
    </div>
  );
};

const Info = () => {
  return (
    <div className="w-1/2 mt-4 flex flex-col">
      <Title>Full-Stack Software Engineer</Title>
      <Content>
        <ul>
          <li>Professional Experience: {"<1"} year</li>
          <li>City: San Diego, CA, USA</li>
          <li>Education: Fullstack Academy</li>
          <li>
            <a href="https://github.com/KYu-2468">Check out my GitHub</a>
          </li>
        </ul>
      </Content>
      <Content>
        I enjoy building interactive apps to connect businesses with customers.
        As a life-long learner, I am enthusiastic learning about mastering new
        concepts, skills, and technologies to equip myself with tools that make
        me more competitive and adaptive in this ever-changing world. "Change is
        the only constant in life" - Heraclitus?
      </Content>
    </div>
  );
};

export default About;
