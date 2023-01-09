import React from "react";
import Project, { SingleProject } from "./Project";
import Content from "./Typography/Content";
import SectionTitle from "./Typography/SectionTitle";
import CarouselWrapper from "./CarouselWrapper";

import rfTrainingSGS from "../assets/img/rf-training-sgs.gif";
import netflik from "../assets/img/netflik.gif";
import chartMyJog from "../assets/img/chart-my-jog.gif";
import emojiStore from "../assets/img/emoji-store.png";
import dsa from "../assets/img/dsa.png";
import portfolio from "../assets/img/portfolio.gif";

const Projects = () => {
  return (
    <>
      <SectionTitle>Projects</SectionTitle>
      <Content>
        <CarouselWrapper>
          {projects.map((project) => (
            <Project key={project.name} {...project}></Project>
          ))}
        </CarouselWrapper>
      </Content>
    </>
  );
};

const projects: SingleProject[] = [
  {
    name: "SGS RF Training",
    description:
      "RF Traning Website helps new SGS RF Test Interns/Technicians/Engineers onboard efficiently and effectively. Please log in with your SGS account to access all learning resources. Please ask managers for your username and password.",
    github: "https://github.com/KYu-2468/RF-Training",
    website: "https://rf-training-sgs.web.app/",
    image: rfTrainingSGS,
  },
  {
    name: "Chart My Jog",
    description:
      "Chart My Jog is a fitness application that helps users track and record their jogs in real-time and render their route on a digital map. Users can view and share their accomplishments and track their progress throughout their lifetime.",
    github: "https://github.com/KYu-2468/ChartMyJog",
    website: "https://chart-my-jog.web.app/",
    image: chartMyJog,
  },
  {
    name: "NetfliK",
    description:
      "Netflix is one of the most popular streaming services currently available in the market. This project aims to clone Netflix for personal learning purposes. All current videos are trailers of the corresponding movies.",
    github: "https://github.com/KYu-2468/netflixk",
    website: "https://main.dk22od2tuez03.amplifyapp.com/",
    image: netflik,
  },
  {
    name: "Portfolio Website",
    description:
      "A portfolio built from scratch by Kevin Yu with TypeScript, React, Tailwind CSS",
    github: "https://github.com/KYu-2468/KYu-2468.github.io",
    website: "https://kyu-2468.github.io/",
    image: portfolio,
  },
  {
    name: "Emoji Store",
    description:
      "An awesome E-commerce website built with React, Tailwind, Node, Express.js, PostgreSQL, React-three-fiber, and Spline! ",
    github: "https://github.com/KYu-2468/EmojiStore",
    website: "#projects",
    image: emojiStore,
  },
  {
    name: "DSA",
    description: "A...",
    github: "https://github.com/MakeContributions/DSA",
    website: "#projects",
    image: dsa,
  },
];

export default Projects;
