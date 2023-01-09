import React from "react";

interface ContentProps {
  children: any;
}

const Content = ({ children }: ContentProps) => {
  return (
    <div className="mx-2 md:mx-4 my-2 text-base text-center md:text-left md:text-xl">
      {children}
    </div>
  );
};

export default Content;
