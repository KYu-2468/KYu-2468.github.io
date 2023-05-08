"use client";

import React, { useEffect, useRef, useState } from "react";

type SectionProps = {
  sections: SectionProp[];
};

export type SectionProp = {
  name: string;
  id: string;
  icon?: any;
  element: any;
};

const Navbar = ({ sections }: SectionProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");

      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");

      setIsDarkMode(false);
    }
  }, [isDarkMode]);

  return (
    <div className="fixed z-10 flex items-center justify-between w-screen h-16 text-white bg-black dark:bg-neutral-800">
      <div className="hidden ml-12 text-xl md:text-3xl grow md:block">
        <a href="#landing">
          <span>Kevin Yu</span>
        </a>
      </div>
      <div className="flex text-lg grow flex-nowrap md:text-2xl justify-evenly">
        {sections.map((sectionProp: SectionProp) => {
          return <NavbarBtn key={sectionProp.id} {...sectionProp} />;
        })}
        {isDarkMode ? (
          <SunBtn setIsDarkMode={setIsDarkMode} />
        ) : (
          <MoonBtn setIsDarkMode={setIsDarkMode} />
        )}
      </div>
    </div>
  );
};

const NavbarBtn = ({ name, id, icon }: SectionProp) => {
  return (
    <a href={`#${id}`} className="transition duration-300 group">
      <span>{name}</span>
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
    </a>
  );
};

const SunBtn = ({ setIsDarkMode }) => {
  function handleLightMode() {
    setIsDarkMode(false);
    localStorage.theme = "light";
  }

  return (
    <button onClick={handleLightMode}>
      <span>☀️</span>
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
    </button>
  );
};

const MoonBtn = ({ setIsDarkMode }) => {
  function handleDarkMode() {
    setIsDarkMode(true);
    localStorage.theme = "dark";
  }

  return (
    <button onClick={handleDarkMode}>
      <span>🌙</span>
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
    </button>
  );
};

export default Navbar;
