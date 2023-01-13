import React, { useState } from "react";

export interface SingleProject {
  name: string;
  description: string;
  github: string;
  website: string;
  image: any;
}

interface LessInfoProp {
  image: any;
  name: string;
  handleClick: any;
}

interface MoreInfoProp {
  description: string;
  github: string;
  website: string;
  handleClick: any;
  open: boolean;
}

interface BtnWrapperProp {
  children: any;
  href: string;
}

const Project = ({
  name,
  description,
  github,
  website,
  image,
}: SingleProject) => {
  const projectStyle = [
    "w-5/6 h-64 md:h-[28rem] 2xl:h-[40rem] my-8 mx-auto",
    "flex flex-col items-center",
    "bg-black text-white rounded-xl shadow-xl shadow-black",
    "transition ease-in-out hover:scale-110 duration-500",
  ].join(" ");

  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <div className={projectStyle}>
      <div className="text-lg md:text-3xl my-2 md:my-4 font-semibold">
        {name}
      </div>
      <LessInfo image={image} name={name} handleClick={handleClick} />
      <MoreInfo
        description={description}
        github={github}
        website={website}
        handleClick={handleClick}
        open={open}
      />
    </div>
  );
};

const MoreInfo = ({
  description,
  github,
  website,
  handleClick,
  open,
}: MoreInfoProp) => {
  console.log(open);
  const moreInfoDefaultStyle =
    "transition-all ease-in-out duration-700 w-full h-full p-4 bg-white text-black flex flex-col items-center rounded-xl ";
  const moreInfoAnimationStyle = open ? "-translate-y-full" : "translate-y-0";
  return (
    <div className={moreInfoDefaultStyle + moreInfoAnimationStyle}>
      <div className="p-8 h-fit text-left text-2xl">{description}</div>
      <div className="w-full flex flex-nowrap justify-evenly items-center text-base md:text-3xl">
        <BtnWrapper href={github}>GitHub</BtnWrapper>
        <BtnWrapper href={website}>🚀 See it live</BtnWrapper>
        <button
          className="group transition duration-700 ease-in-out"
          onClick={handleClick}
        >
          Less Info{" "}
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-black"></span>
        </button>
      </div>
    </div>
  );
};

const LessInfo = ({ image, name, handleClick }: LessInfoProp) => {
  return (
    <div className="w-full h-full md:w-4/6">
      <img className="aspect-video" src={image} alt={name} loading="lazy" />
      <button
        className="m-2 text-base md:text-3xl group transition duration-700 ease-in-out"
        onClick={handleClick}
      >
        More Info{" "}
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-white"></span>
      </button>
    </div>
  );
};

const BtnWrapper = ({ children, href }: BtnWrapperProp) => {
  return (
    <a href={href} className="group transition duration-700 ease-in-out">
      {children}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-black"></span>
    </a>
  );
};

export default Project;
