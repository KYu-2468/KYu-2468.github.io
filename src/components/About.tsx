import React from "react";
import profileImg from "../assets/img/profile-img.png";
import Content from "./Typography/Content";
import SectionTitle from "./Typography/SectionTitle";
import Title from "./Typography/Title";

interface ListItemProp {
  children: any;
}

const About = () => {
  return (
    <>
      <SectionTitle>About me</SectionTitle>
      <div className="flex flex-col lg:flex-row">
        <Image />
        <Info />
      </div>
    </>
  );
};

const Image = () => {
  return (
    <div className="w-2/5 pl-12 flex items-center">
      <img
        className="w-full shadow-lg shadow-black rounded-xl xl:w-4/5"
        src={profileImg}
        alt="profile"
      />
    </div>
  );
};

const Info = () => {
  return (
    <div className="w-3/5 h-auto px-12 flex flex-col">
      <Title>Full-Stack Software Engineer</Title>
      <Content>
        <ul>
          {infos.map((info: string, index) => (
            <ListItem key={index}>{info}</ListItem>
          ))}
          <li>
            <a href="https://github.com/KYu-2468">
              <button className="transition ease-in-out text-sky-400 hover:-translate-y-1 hover:scale-110 hover:text-sky-600 duration-700">
                Check out my GitHub
              </button>
            </a>
          </li>
        </ul>
      </Content>
      <Content>
        As a life-long learner, I am enthusiastic learning about mastering new
        concepts, skills, and technologies to equip myself with tools that make
        me more competitive and adaptive in this ever-changing world.
      </Content>

      <Title>Quotes I Love:</Title>
      <Content>
        <ul>
          {quotes.map((quote: string, index) => (
            <ListItem key={index}>{quote}</ListItem>
          ))}
        </ul>
      </Content>
    </div>
  );
};

const ListItem = ({ children }: ListItemProp) => {
  return <li className="mb-2">{children}</li>;
};

const infos: string[] = [
  "Professional Experience: <1 year",
  "Location: San Diego, CA, USA",
  "Education: Fullstack Academy",
  "Past Experience: RF Testing (Engineering) - 5 years",
];

const quotes: string[] = [
  '1. "Change is the only constant in life" - Heraclitus?',
  '2. "Stay hungry. Stay foolish" - Steve Jobs?',
  "3. “I hear and I forget. I see and I remember. I do and I understand” - Confucius?",
];

export default About;
