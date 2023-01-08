import React from "react";

type SectionProps = {
  children: any;
  title: string;
};

const SectionLayout = ({ children, title }: SectionProps) => {
  return (
    <div className="w-screen">
      <h1 className="text-2xl">{title}</h1>
      {children}
    </div>
  );
};

export default SectionLayout;
