import React from "react";

export interface SingleProject {
  name: string;
  description: string;
  github: string;
  website: string;
  image: any;
}

const Project = ({
  name,
  description,
  github,
  website,
  image,
}: SingleProject) => {
  return <div className="">{name}</div>;
};

export default Project;
