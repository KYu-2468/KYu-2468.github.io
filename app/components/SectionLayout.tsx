import React from "react";

interface Props {
  children: any;
  id: string;
}

const SectionLayout = ({ children, id }: Props) => {
  return (
    <div id={id} className="w-full pb-4 scroll-mt-16 md:pb-12">
      {children}
    </div>
  );
};

export default SectionLayout;
