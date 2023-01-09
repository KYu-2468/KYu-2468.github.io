import React from "react";

interface TitleProps {
  children: any;
}

const Title = ({ children }: TitleProps) => {
  return (
    <div className="text-lg md:text-3xl m-4 font-semibold ">{children}</div>
  );
};

export default Title;
