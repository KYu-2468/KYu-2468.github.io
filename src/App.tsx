import React, { lazy, Suspense } from "react";
import "./App.css";

import SectionLayout from "./components/SectionLayout";

import Navbar, { SectionProp } from "./components/Navbar";
import Landing from "./components/Landing";
import Loading from "./components/Loading";

const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Contact = lazy(() => import("./components/Contact"));

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
      <div className="App scroll-smooth">
        <SectionLayout id="landing">
          <Landing />
        </SectionLayout>

        {sections.map(({ id, element }: SectionProp) => {
          return (
            <Suspense key={id} fallback={<Loading />}>
              <SectionLayout id={id}>{element}</SectionLayout>
            </Suspense>
          );
        })}
      </div>
    </>
  );
}

export default App;
