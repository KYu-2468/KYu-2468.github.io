import React from "react";
import "./App.css";

import SectionLayout from "./components/SectionLayout";

import Navbar, { SectionProp } from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Landing from "./components/Landing";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const sections: SectionProp[] = [
  { name: "About", id: "about", element: <About /> },
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
