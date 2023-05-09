import React from "react";
import ProjectButtonn from "./Button/ProjectButton";
import Content from "./Typography/Content";

export interface SingleProject {
  name: string;
  description: string;
  github: string;
  website: string;
  video: any;
}

interface InfoProp {
  name: String;
  description: string;
  github: string;
  website: string;
}

const Project = ({
  name,
  description,
  github,
  website,
  video,
}: SingleProject) => {
  return (
    <>
      <h2 className="mb-4 text-3xl font-bold text-center md:mb-12 md:text-4xl xl:text-5xl xl:mb-12">
        {name}
      </h2>
      <div className="flex flex-col mx-4 mb-16 md:mb-20 xl:flex-row xl:justify-evenly">
        <div className="p-4 mx-auto border-8 border-black shadow-xl dark:border-yellow-500 h-fit">
          <video loop autoPlay muted={true} playsInline>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <Info
          name={name}
          description={description}
          github={github}
          website={website}
        />
      </div>
    </>
  );
};

const Info = ({ description, github, website }: InfoProp) => {
  return (
    <div className="flex flex-col items-center justify-center mt-4 text-base md:mt-0 xl:w-1/3 xl:justify-center md:p-4 rounded-xl">
      <Content>{description}</Content>
      <div className="flex flex-wrap items-center w-full text-xs justify-evenly md:text-3xl">
        <ProjectButtonn
          buttonColor="bg-black dark:bg-neutral-800"
          text="GitHub"
          textColor="text-white"
          linkURL={github}
        />
        <ProjectButtonn
          buttonColor="bg-blue-700"
          text="🚀 See live"
          textColor="text-white"
          linkURL={website}
        />
      </div>
    </div>
  );
};

export default Project;
