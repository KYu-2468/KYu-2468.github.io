import React from "react";
import profileImg from "../assets/img/profile-img.png";
import Content from "./Typography/Content";
import SectionTitle from "./Typography/SectionTitle";
import Title from "./Typography/Title";

const About = () => {
  return (
    <>
      <SectionTitle>About me</SectionTitle>
      <div className="flex h-full">
        <Image />
        <Info />
      </div>
    </>
  );
};

const Image = () => {
  return (
    <div className="flex items-center justify-center w-1/3 md:w-2/5">
      <img
        className="w-4/5 shadow-lg md:w-full shadow-black rounded-xl xl:w-4/5"
        src={profileImg}
        alt="profile"
      />
    </div>
  );
};

const Info = () => {
  return (
    <div className="flex flex-col w-full h-auto px-4 md:w-3/5 md:px-12">
      <Title>Full-Stack Software Engineer</Title>

      <Content>
        With proficiency in React, Express.js, Node.js, PostgreSQL, and Google
        Cloud Platform, Kevin is always expanding his skillset and is currently
        learning Amazon Web Service.
      </Content>
      <Content>
        Before becoming a software engineer, Kevin spent over 5 years as a
        Wireless Test Technician, where he developed the valuable skills of
        problem-solving and self-taught coding to increase his productivity at
        work.
      </Content>
      <Content>
        In his free time, Kevin loves to dive into novels, watch movies, and
        play games. Swimming is one of his favorite sports because the cold
        water helps him explore and focus on different things, such as life, the
        universe, and coding.
      </Content>
      <Content>
        Collaboration, positivity, and a non-toxic environment are values that
        Kevin holds dear.
      </Content>
    </div>
  );
};

export default About;
