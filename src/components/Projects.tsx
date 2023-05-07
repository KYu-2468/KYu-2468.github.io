import React from "react";
import Project from "./Project";
import Content from "./Typography/Content";
import SectionTitle from "./Typography/SectionTitle";
// import CarouselWrapper from "./CarouselWrapper";

import projects from "../data/projects";

const Projects = () => {
  return (
    <>
      <SectionTitle>Projects</SectionTitle>
      <Content>
        {/* <CarouselWrapper> */}
        {projects.map((project) => (
          <Project key={project.name} {...project}></Project>
        ))}
        {/* </CarouselWrapper> */}
      </Content>
    </>
  );
};

export default Projects;
