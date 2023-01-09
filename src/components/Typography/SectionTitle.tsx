import React from "react";

interface SectionProp {
  children: any;
}

const SectionTitle = ({ children }: SectionProp) => {
  return (
    <h1 className="w-screen flex justify-center py-8 text-4xl md:pl-12 md:block">
      {children}
    </h1>
  );
};

export default SectionTitle;
