import React from "react";
import Content from "./Typography/Content";
import SectionTitle from "./Typography/SectionTitle";
import Title from "./Typography/Title";

const profileImg = "./img/profile-img-square.webp";
const About = () => {
  return (
    <>
      <SectionTitle>About me</SectionTitle>
      <div className="flex flex-wrap w-full h-full">
        <Image />
        <Info />
      </div>
    </>
  );
};

const Image = () => {
  return (
    <div className="flex items-center justify-center w-full md:ml-8 md:w-2/5">
      <img
        className="w-4/5 rounded-full shadow-lg md:w-full shadow-black xl:w-4/5"
        src={profileImg}
        alt="profile"
      />
    </div>
  );
};

const Info = () => {
  return (
    <div className="flex flex-col items-center w-full h-auto px-4 mt-4 md:w-1/2 md:px-12">
      <Title>Full-Stack Software Engineer</Title>
      <div className="flex flex-wrap">
        <Content>
          Before becoming a software engineer, Kevin spent over 5 years as a
          Wireless Test Technician, where he developed the valuable skills of
          problem-solving and self-taught coding to increase his productivity at
          work.
        </Content>
        <Content>
          Collaboration, positivity, and a non-toxic environment are values that
          Kevin holds dear. Kevin is currently seeking new opportunities to
          develop his skills as a software engineer. He enjoys the challenge of
          problem-solving and is particularly interested in debugging and
          researching solutions. Kevin is passionate about industries that have
          a positive impact on people's well-being.
        </Content>
      </div>
    </div>
  );
};

export default About;
