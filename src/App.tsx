import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SectionLayout from "./sections/SectionLayout";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <SectionLayout title="About Me">Test</SectionLayout>
      </div>
    </>
  );
}

export default App;
