import React from "react";
import Header from "./components/Header";
import css from "./styles/app.module.scss";
import Home from "./components/hero/About";
import Skills from "./components/skills/Skills";
import Abouts from "./components/about/About";
import Work from "./components/work/Works";
import Footer from "./components/footer/Footer";
import Portfolio from "./components/porfolio/Portfolios";
import Dummy from "./components/dummy/dummy";

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Home />
      <Abouts />
      <Skills />
      <Work/>
      <Portfolio/>
      {/* <Dummy/> */}
      <Footer/>
    </div>
  );
};

export default App;