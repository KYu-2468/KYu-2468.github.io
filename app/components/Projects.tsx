import React from "react";
import Project from "./Project";
import Content from "./Typography/Content";
import SectionTitle from "./Typography/SectionTitle";

import projects from "../data/projects";

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

export default Projects;
