import React from "react";

type LinkProp = {
  name: string;
  id: string;
};

const links = [
  { name: "About me", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  return (
    <div className="flex flex-nowrap text-2xl justify-evenly">
      {links.map((linkProps: LinkProp) => {
        return <NavbarBtn key={linkProps.id} {...linkProps} />;
      })}
    </div>
  );
};

const NavbarBtn = ({ name, id }: LinkProp) => {
  return <a href={`#${id}`}>{name}</a>;
};

export default Navbar;
