import React from "react";

export default function ButtonWrapper({ children }: any) {
  return (
    <div className="relative z-0 inline-block text-lg btn-primary group">
      <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg dark:border-white dark:text-white dark:group-hover:text-black group-hover:text-white">
        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg dark:bg-zinc-800 bg-gray-50"></span>
        <span className="absolute left-0 h-56 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-black dark:bg-white w-72 group-hover:-rotate-180 ease"></span>
        <span className="relative md:text-2xl">{children}</span>
      </span>
      <span
        className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-black rounded-lg dark:bg-white group-hover:mb-0 group-hover:mr-0"
        data-rounded="rounded-lg"
      ></span>
    </div>
  );
}
