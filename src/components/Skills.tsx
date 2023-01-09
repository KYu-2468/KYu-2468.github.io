import React from "react";
import SectionTitle from "./Typography/SectionTitle";
import { language, frontEnd, backEnd, additional, Skill } from "../skills";
import Title from "./Typography/Title";

interface SkillGroupProp {
  skills: Skill[];
  group: string;
}

const Skills = () => {
  return (
    <>
      <SectionTitle>Skills 🔧</SectionTitle>

      <div>
        <SkillGroup group="Language" skills={language} />
        <SkillGroup group="Frontend" skills={frontEnd} />
        <SkillGroup group="Backend" skills={backEnd} />
        <SkillGroup group="Other" skills={additional} />
      </div>
    </>
  );
};

const SkillGroup = ({ skills, group }: SkillGroupProp) => {
  const iconStyle = "w-14 h-14 mx-2 md:mx-12";
  return (
    <div className="ml-4 md:ml-8 mb-8">
      <Title>{group}</Title>
      <ul>
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="flex flex-nowrap items-center justify-start"
          >
            <img
              className={iconStyle}
              src={skill.icon}
              alt={skill.name}
              loading="lazy"
            />
            <span className="w-full text-base md:text-3xl m-4 flex justify-around">
              <span className="w-1/2">{skill.name}</span>
              <span className="w-1/2 ">{skill.experience}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
