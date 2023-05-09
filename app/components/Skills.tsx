import React from "react";
import SectionTitle from "./Typography/SectionTitle";
import {
  language,
  frontEnd,
  backEnd,
  additional,
  SkillProp,
} from "../data/skills";
import Title from "./Typography/Title";
import Skill from "./Skill";

interface SkillGroupProp {
  skills: SkillProp[];
  group: string;
}

const Skills = () => {
  return (
    <>
      <SectionTitle>Skills</SectionTitle>

      <SkillGroup group="Language" skills={language} />
      <SkillGroup group="Frontend" skills={frontEnd} />
      <SkillGroup group="Backend" skills={backEnd} />
      <SkillGroup group="Tools & Other" skills={additional} />
    </>
  );
};

const SkillGroup = ({ skills, group }: SkillGroupProp) => {
  return (
    <div className="w-full pl-4 mb-8 md:pl-8">
      <Title>{group}</Title>
      <div className="flex flex-wrap w-full">
        {skills.map((skill) => (
          <Skill key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  );
};

// <li
//   key={skill.name}
//   className="flex items-center justify-center w-full md:w-1/2 flex-nowrap"
// >
// <span className="flex items-center justify-around w-full m-4 text-base md:text-3xl md:justify-center">
//   <img
//     className="mx-2 w-14 h-14 md:w-24 md:h-24 md:mx-12"
//     src={skill.icon}
//     alt={skill.name}
//     loading="lazy"
//   />
//   <span className="w-1/2">{skill.name}</span>
{
  /* <span className="w-1/3 text-2xl">{skill.experience}</span> */
}
// </span>
// </li>

export default Skills;
