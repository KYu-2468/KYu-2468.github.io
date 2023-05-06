import React from "react";

interface TitleProps {
  children: any;
}

const Title = ({ children }: TitleProps) => {
  return (
    <div className="m-4 text-lg font-semibold md:text-3xl">{children}</div>
  );
};

export default Title;
