import React from "react";
import profileImg from "../assets/img/profile-img.png";
import Content from "./Typography/Content";
import SectionTitle from "./Typography/SectionTitle";
import Title from "./Typography/Title";
import { infos, quotes } from "../data/about";

interface ListItemProp {
  children: any;
}

interface InfoProp {
  key: string;
  value: string;
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
    <div className="w-full md:w-2/5 md:pl-12 flex justify-center items-center">
      <img
        className="w-4/5 md:w-full shadow-lg shadow-black rounded-xl xl:w-4/5"
        src={profileImg}
        alt="profile"
      />
    </div>
  );
};

const Info = () => {
  return (
    <div className="w-full md:w-3/5 h-auto px-4 md:px-12 flex flex-col">
      <Title>Full-Stack Software Engineer</Title>
      <Content>
        <ul>
          {infos.map((info: InfoProp, index) => (
            <ListItem key={index}>
              {info.key}: <strong>{info.value}</strong>
            </ListItem>
          ))}
          <li>
            <a href="https://github.com/KYu-2468">
              <button className="transition ease-in-out text-sky-700 hover:-translate-y-1 hover:scale-110 duration-700">
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

export default About;
