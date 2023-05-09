import React from "react";

interface SectionProp {
  children: any;
}

const SectionTitle = ({ children }: SectionProp) => {
  return (
    <h1 className="flex justify-center w-full py-8 text-5xl md:pl-16 md:block md:py-12 md:mb-4">
      <strong>{children}</strong>
    </h1>
  );
};

export default SectionTitle;
