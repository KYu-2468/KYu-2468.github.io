import React from "react";
import "./globals.css";

import SectionLayout from "./components/SectionLayout";

import Navbar, { SectionProp } from "./components/Navbar";
import Landing from "./components/Landing";

import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const sections: SectionProp[] = [
  { name: "About", id: "about", icon: "T", element: <About /> },
  { name: "Projects", id: "projects", icon: "T", element: <Projects /> },
  { name: "Skills", id: "skills", icon: "T", element: <Skills /> },
  { name: "Contact", id: "contact", icon: "T", element: <Contact /> },
];

function App() {
  return (
    <>
      <Navbar sections={sections} />
      <div className="text-black bg-white dark:text-white dark:bg-black App scroll-smooth">
        <SectionLayout id="landing">
          <Landing />
        </SectionLayout>

        {sections.map(({ id, element }: SectionProp) => {
          return (
            <SectionLayout key={id} id={id}>
              {element}
            </SectionLayout>
          );
        })}
      </div>
    </>
  );
}

export default App;
