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
    <div className="w-screen h-16 fixed flex justify-between items-center bg-black text-white">
      <div className="text-3xl grow ml-12">Kevin Yu</div>
      <div className="flex grow flex-nowrap text-2xl justify-evenly">
        {sections.map((sectionProp: SectionProp) => {
          return <NavbarBtn key={sectionProp.id} {...sectionProp} />;
        })}
      </div>
    </div>
  );
};

const NavbarBtn = ({ name, id }: SectionProp) => {
  return (
    <a href={`#${id}`} className="hover:animate-bounce">
      {name}
    </a>
  );
};

export default Navbar;
