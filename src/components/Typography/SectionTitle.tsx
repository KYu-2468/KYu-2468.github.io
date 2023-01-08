import React from "react";

interface SectionProp {
  children: any;
}

const SectionTitle = ({ children }: SectionProp) => {
  return <h1 className="ml-12 py-8 text-4xl">{children}</h1>;
};

export default SectionTitle;
