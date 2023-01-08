import React from "react";
import Project, { SingleProject } from "./Project";
import Content from "./Typography/Content";
import SectionTitle from "./Typography/SectionTitle";

const Projects = () => {
  return (
    <>
      <SectionTitle>Projects</SectionTitle>
      <Content>
        {projects.map((project) => (
          <Project key={project.name} {...project}></Project>
        ))}
      </Content>
    </>
  );
};

const projects: SingleProject[] = [
  {
    name: "SGS RF Training Website",
    description: "A...",
    github: "",
    website: "",
    image: "",
  },
  {
    name: "Chart My Jog",
    description: "A...",
    github: "",
    website: "",
    image: "",
  },
  {
    name: "NetfliK",
    description: "A...",
    github: "",
    website: "",
    image: "",
  },
  {
    name: "Emoji Store",
    description: "A...",
    github: "",
    website: "",
    image: "",
  },
  {
    name: "DSA",
    description: "A...",
    github: "",
    website: "",
    image: "",
  },
  {
    name: "Portfolio",
    description: "A...",
    github: "",
    website: "",
    image: "",
  },
];

export default Projects;
