import React from "react";

interface SectionProp {
  children: any;
}

const SectionTitle = ({ children }: SectionProp) => {
  return <h1 className="ml-4 pt-4 text-4xl">{children}</h1>;
};

export default SectionTitle;
