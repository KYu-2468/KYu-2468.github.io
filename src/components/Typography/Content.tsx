import React from "react";

interface ContentProps {
  children: any;
}

const Content = ({ children }: ContentProps) => {
  return <div className="m-4 text-lg">{children}</div>;
};

export default Content;
