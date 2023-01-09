import React from "react";

type SectionProps = {
  sections: SectionProp[];
};

export type SectionProp = {
  name: string;
  id: string;
  icon?: any;
  element: any;
};

const Navbar = ({ sections }: SectionProps) => {
  return (
    <div className="w-screen h-16 fixed flex justify-between items-center bg-black text-white z-10">
      <div className="text-xl md:text-3xl grow ml-12 hidden md:block">
        <a href="#landing">
          <p className="hover:animate-bounce">Kevin Yu</p>
        </a>
      </div>
      <div className="flex grow flex-nowrap text-lg md:text-2xl justify-evenly">
        {sections.map((sectionProp: SectionProp) => {
          return <NavbarBtn key={sectionProp.id} {...sectionProp} />;
        })}
      </div>
    </div>
  );
};

const NavbarBtn = ({ name, id, icon }: SectionProp) => {
  return (
    <a href={`#${id}`} className="hover:animate-bounce">
      <span>{name}</span>
    </a>
  );
};

export default Navbar;
