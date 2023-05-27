import React from "react";
import Content from "./Typography/Content";
import SectionTitle from "./Typography/SectionTitle";
import Title from "./Typography/Title";

const profileImg = "./img/profile-img-bu.webp";
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
        className="w-4/5 rounded-full shadow-2xl dark:shadow-white md:w-full shadow-black xl:w-4/5"
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
          Meet Kevin, a software engineer with 5+ years in RF test engineering
          who self-taught programming to improve work productivity. He graduated
          from Fullstack Academy, a Forbes' top 10 software engineering
          bootcamp, and currently ranks top 8.4% among 393,066 global
          contestants in LeetCode's Global Competitive programming competition.
          Kevin values collaboration, positivity, and a non-toxic work
          environment, and enjoys researching solutions and debugging. He's
          passionate about contributing to industries with a positive impact on
          people's well-being and could be a great addition to your team.
        </Content>
      </div>
    </div>
  );
};

export default About;
