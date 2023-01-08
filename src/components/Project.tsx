import React from "react";
import Title from "./Typography/Title";

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
  return (
    <div className="w-5/6 h-[28rem] 2xl:h-[40rem] my-8 mx-auto p-4 flex flex-col items-center bg-black text-white rounded-xl shadow-xl shadow-black">
      <Title>{name}</Title>
      <div className="w-4/6">
        <img src={image} alt={name} />
      </div>
      <div className="w-1/2 flex flex-nowrap justify-around mt-4 text-2xl">
        <a href={github}>
          <button className="transition ease-in-out hover:-translate-y-1 hover:scale-125 hover:text-sky-600 duration-700">
            GitHub
          </button>
        </a>
        <a href={website}>
          <button className="transition ease-in-out hover:-translate-y-1 hover:scale-125 hover:text-sky-600 duration-700">
            🚀 See it live
          </button>
        </a>
      </div>
    </div>
  );
};

export default Project;
