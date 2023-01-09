import React from "react";

interface SectionProp {
  children: any;
}

const SectionTitle = ({ children }: SectionProp) => {
  return (
    <h1 className="w-full flex justify-center py-8 text-4xl md:pl-16 md:block">
      {children}
    </h1>
  );
};

export default SectionTitle;
