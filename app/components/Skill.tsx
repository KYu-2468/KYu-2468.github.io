import React from "react";
import { SkillProp } from "../data/skills";

export default function Skill({ name, icon }: SkillProp) {
  return (
    <div className="m-4">
      <img
        className="mx-2 w-14 h-14 md:w-24 md:h-24 md:mx-12"
        src={icon}
        alt={name}
        loading="lazy"
      />
    </div>
  );
}
