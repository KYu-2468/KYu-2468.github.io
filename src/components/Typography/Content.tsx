import React from "react";

interface ContentProps {
  children: any;
}

const Content = ({ children }: ContentProps) => {
  return <div className="mx-4 my-2 text-base lg:text-lg">{children}</div>;
};

export default Content;
