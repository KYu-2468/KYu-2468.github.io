import React from "react";

interface TitleProps {
  children: any;
}

const Title = ({ children }: TitleProps) => {
  return <div className="text-2xl m-4">{children}</div>;
};

export default Title;
