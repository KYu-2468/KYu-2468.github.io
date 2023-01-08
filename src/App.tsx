import React from "react";
import "./App.css";

import SectionLayout from "./sections/SectionLayout";

import Navbar, { SectionProp } from "./components/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Landing from "./sections/Landing";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

const sections: SectionProp[] = [
  { name: "About me", id: "about-me", element: <About /> },
  { name: "Projects", id: "projects", element: <Projects /> },
  { name: "Skills", id: "skills", element: <Skills /> },
  { name: "Contact", id: "contact", element: <Contact /> },
];

function App() {
  return (
    <>
      <div className="App scroll-smooth">
        <Navbar sections={sections} />

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
