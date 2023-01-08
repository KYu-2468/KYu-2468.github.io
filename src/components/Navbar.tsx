import React from "react";

type SectionProps = {
  sections: SectionProp[];
};

export type SectionProp = {
  name: string;
  id: string;
  element: any;
};

const Navbar = ({ sections }: SectionProps) => {
  return (
    <div className="flex flex-nowrap text-2xl justify-evenly">
      {sections.map((sectionProp: SectionProp) => {
        return <NavbarBtn key={sectionProp.id} {...sectionProp} />;
      })}
    </div>
  );
};

const NavbarBtn = ({ name, id }: SectionProp) => {
  return <a href={`#${id}`}>{name}</a>;
};

export default Navbar;
