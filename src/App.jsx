import React from "react";
import Header from "./components/Header";
import css from "./styles/app.module.scss";
import About from "./components/hero/About";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/work/work";

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <About />
      <Portfolio />
      <Skills />
      <Work/>
    </div>
  );
};

export default App;